import { describe, expect } from "vitest";
import { getTestInstance } from "better-auth/test-utils/test-instance";
import { siwn } from "./index";
import { siwnClient } from "./client";

describe("siwn", async (it) => {
	const accountId = "test.near";
	const testnetAccountId = "test.testnet";
	const domain = "example.com";

	it("should generate a valid nonce for a valid NEAR account ID", async () => {
		const { client } = await getTestInstance(
			{
				plugins: [
					siwn({
						domain,
						async getNonce() {
							return "A1b2C3d4E5f6G7h8J";
						},
						async verifyMessage({ authToken, expectedRecipient, accountId }) {
							return authToken === "valid_token" && expectedRecipient === domain;
						},
					}),
				],
			},
			{
				clientOptions: {
					plugins: [siwnClient()],
				},
			},
		);
		const { data } = await client.near.nonce({ accountId });
		expect(typeof data?.nonce).toBe("string");
		expect(data?.nonce).toMatch(/^[a-zA-Z0-9]{17}$/);
	});

	it("should detect mainnet network for regular account IDs", async () => {
		const { client } = await getTestInstance(
			{
				plugins: [
					siwn({
						domain,
						async getNonce() {
							return "A1b2C3d4E5f6G7h8J";
						},
						async verifyMessage({ authToken, expectedRecipient, accountId }) {
							return authToken === "valid_token" && expectedRecipient === domain;
						},
					}),
				],
			},
			{
				clientOptions: {
					plugins: [siwnClient()],
				},
			},
		);
		const { data } = await client.near.nonce({ accountId: "user.near" });
		expect(typeof data?.nonce).toBe("string");
	});

	it("should detect testnet network for .testnet account IDs", async () => {
		const { client } = await getTestInstance(
			{
				plugins: [
					siwn({
						domain,
						async getNonce() {
							return "A1b2C3d4E5f6G7h8J";
						},
						async verifyMessage({ authToken, expectedRecipient, accountId }) {
							return authToken === "valid_token" && expectedRecipient === domain;
						},
					}),
				],
			},
			{
				clientOptions: {
					plugins: [siwnClient()],
				},
			},
		);
		const { data } = await client.near.nonce({ accountId: testnetAccountId });
		expect(typeof data?.nonce).toBe("string");
	});

	it("should reject verification if nonce is missing", async () => {
		const { client } = await getTestInstance(
			{
				plugins: [
					siwn({
						domain,
						async getNonce() {
							return "A1b2C3d4E5f6G7h8J";
						},
						async verifyMessage({ authToken, expectedRecipient, accountId }) {
							return authToken === "valid_token" && expectedRecipient === domain;
						},
					}),
				],
			},
			{
				clientOptions: {
					plugins: [siwnClient()],
				},
			},
		);
		const { error } = await client.near.verify({
			authToken: "valid_token",
			accountId,
		});

		expect(error).toBeDefined();
		expect(error?.status).toBe(401);
		expect(error?.code).toBe("UNAUTHORIZED_INVALID_OR_EXPIRED_NONCE");
		expect(error?.message).toMatch(/nonce/i);
	});

	it("should reject invalid account ID format", async () => {
		const { client } = await getTestInstance(
			{
				plugins: [
					siwn({
						domain,
						async getNonce() {
							return "A1b2C3d4E5f6G7h8J";
						},
						async verifyMessage({ authToken, expectedRecipient, accountId }) {
							return authToken === "valid_token" && expectedRecipient === domain;
						},
					}),
				],
			},
			{
				clientOptions: {
					plugins: [siwnClient()],
				},
			},
		);
		const { error } = await client.near.nonce({ accountId: "invalid-account" });
		expect(error).toBeDefined();
		expect(error?.status).toBe(400);
		expect(error?.message).toBe("Invalid body parameters");
	});

	it("should allow function call keys when requireFullAccessKey is false", async () => {
		const { client } = await getTestInstance(
			{
				plugins: [
					siwn({
						domain,
						requireFullAccessKey: false,
						async getNonce() {
							return "A1b2C3d4E5f6G7h8J";
						},
						async verifyMessage({ authToken, expectedRecipient, accountId }) {
							return authToken === "valid_token" && expectedRecipient === domain;
						},
						async validateFunctionCallKey({ accountId, publicKey }) {
							return accountId === "test.near" && publicKey !== "";
						},
					}),
				],
			},
			{
				clientOptions: {
					plugins: [siwnClient()],
				},
			},
		);

		await client.near.nonce({ accountId });
		const { data, error } = await client.near.verify({
			authToken: "valid_token",
			accountId,
		});
		expect(error).toBeNull();
		expect(data?.success).toBe(true);
	});

	it("should get profile for current user when no accountId provided", async () => {
		const { client } = await getTestInstance(
			{
				plugins: [
					siwn({
						domain,
						async getNonce() {
							return "A1b2C3d4E5f6G7h8J";
						},
						async verifyMessage({ authToken, expectedRecipient, accountId }) {
							return authToken === "valid_token" && expectedRecipient === domain;
						},
						async getProfile(accountId) {
							return {
								name: `Profile for ${accountId}`,
								description: "Test profile",
							};
						},
					}),
				],
			},
			{
				clientOptions: {
					plugins: [siwnClient()],
				},
			},
		);

		await client.near.nonce({ accountId });
		await client.near.verify({
			authToken: "valid_token",
			accountId,
		});

		const { data } = await client.near.getProfile();
		expect(data?.profile?.name).toBe(`Profile for ${accountId}`);
	});

	it("should get profile for specific accountId when provided", async () => {
		const { client } = await getTestInstance(
			{
				plugins: [
					siwn({
						domain,
						async getNonce() {
							return "A1b2C3d4E5f6G7h8J";
						},
						async verifyMessage({ authToken, expectedRecipient, accountId }) {
							return authToken === "valid_token" && expectedRecipient === domain;
						},
						async getProfile(accountId) {
							return {
								name: `Profile for ${accountId}`,
								description: "Test profile",
							};
						},
					}),
				],
			},
			{
				clientOptions: {
					plugins: [siwnClient()],
				},
			},
		);

		const targetAccount = "alice.near";
		const { data } = await client.near.getProfile(targetAccount);
		expect(data?.profile?.name).toBe(`Profile for ${targetAccount}`);
	});

	it("should validate various NEAR account ID formats", async () => {
		const { client } = await getTestInstance(
			{
				plugins: [
					siwn({
						domain,
						async getNonce() {
							return "A1b2C3d4E5f6G7h8J";
						},
						async verifyMessage({ authToken, expectedRecipient, accountId }) {
							return authToken === "valid_token" && expectedRecipient === domain;
						},
					}),
				],
			},
			{
				clientOptions: { plugins: [siwnClient()] },
			},
		);

		const validAccountIds = [
			"user.near",
			"test.testnet",
			"alice.tg",
			"bob.kaito",
			"sub.account.near",
			"a1b2c3.near",
			"user-name.near",
			"user_name.near",
			"deep.sub.account.near",
			"app.myproject.near",
		];

		for (const accountId of validAccountIds) {
			const { data, error } = await client.near.nonce({ accountId });
			expect(error).toBeNull();
			expect(typeof data?.nonce).toBe("string");
		}
	});

	it("should reject invalid NEAR account ID formats", async () => {
		const { client } = await getTestInstance(
			{
				plugins: [
					siwn({
						domain,
						async getNonce() {
							return "A1b2C3d4E5f6G7h8J";
						},
						async verifyMessage({ authToken, expectedRecipient, accountId }) {
							return authToken === "valid_token" && expectedRecipient === domain;
						},
					}),
				],
			},
			{
				clientOptions: { plugins: [siwnClient()] },
			},
		);

		const invalidAccountIds = [
			"",
			"a",
			"A",
			"user.NEAR",
			"user..near",
			".user.near",
			"user.near.",
			"user@near",
			"user near",
			"x".repeat(65),
		];

		for (const accountId of invalidAccountIds) {
			const { error } = await client.near.nonce({ accountId });
			expect(error).toBeDefined();
			expect(error?.status).toBe(400);
		}
	});
});
