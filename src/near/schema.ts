import type { AuthPluginSchema } from "better-auth/types";

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
} satisfies AuthPluginSchema;
