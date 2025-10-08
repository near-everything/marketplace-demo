import type { BetterAuthPluginDBSchema } from "better-auth/db";

export const schema = {
	nearAccount: {
		fields: {
			userId: {
				type: "string",
				references: {
					model: "user",
					field: "id",
				},
				required: true,
			},
			accountId: {
				type: "string",
				required: true,
			},
			network: {
				type: "string",
				required: true,
			},
			publicKey: {
				type: "string",
				required: true,
			},
			isPrimary: {
				type: "boolean",
				defaultValue: false,
			},
			createdAt: {
				type: "date",
				required: true,
			},
		},
	},
} satisfies BetterAuthPluginDBSchema;
