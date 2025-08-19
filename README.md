<!-- markdownlint-disable MD014 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD029 -->

<div align="center">

<h1 style="font-size: 2.5rem; font-weight: bold;">better-near-auth</h1>

  <p>
    <strong>Sign in with NEAR (SIWN) plugin for better-auth</strong>
  </p>

</div>

This [Better Auth](https://better-auth.com) plugin enables secure authentication via NEAR wallets and keypairs by following the [NEP-413 standard](https://github.com/near/NEPs/blob/master/neps/nep-0413.md). It leverages [near-sign-verify](https://github.com/elliotBraem/near-sign-verify) and [fastintear](https://github.com/elliotBraem/fastintear), and provides a complete drop-in solution with session management, secure defaults, and automatic profile integration.

## Installation

1. Install the package

```bash
npm install better-near-auth
```

2. Add the SIWN plugin to your auth configuration:

    ```ts title="auth.ts"
    import { betterAuth } from "better-auth";
    import { siwn } from "better-near-auth";

    export const auth = betterAuth({
        database: drizzleAdapter(db, {
          // db configuration
        }),
        plugins: [
            siwn({
                recipient: "myapp.com",
                anonymous: true, // optional, default is true
            }),
        ],
    });
    ```

3. Generate the schema to add the necessary fields and tables to the database.

  ```bash
  npx @better-auth/cli generate
  ```

4. Add the Client Plugin

    ```ts title="auth-client.ts"
    import { createAuthClient } from "better-auth/client";
    import { siwnClient } from "better-near-auth/client";

    export const authClient = createAuthClient({
        plugins: [siwnClient()],
    });
    ```


## Usage

### One-Line Authentication

The simplest way to authenticate with NEAR:

```ts title="sign-in-near.ts"
const response = await authClient.signIn.near(
  { recipient: "myapp.com", signer: window.near },
  {
    onSuccess: () => {
      console.log("Successfully signed in!");
    },
    onError: (error) => {
      console.error("Sign in failed:", error.message);
    }
  }
);

console.log("Signed in as:", response.user.accountId);
```

### Profile Access

Access user profiles from NEAR Social automatically:

```ts title="profile-usage.ts"
// Get current user's profile (requires authentication)
const myProfile = await authClient.near.getProfile();
console.log("My profile:", myProfile);

// Get specific user's profile (no auth required)
const aliceProfile = await authClient.near.getProfile("alice.near");
console.log("Alice's profile:", aliceProfile);
```

## Configuration Options

### Server Options

The SIWN plugin accepts the following configuration options:

* **recipient**: The recipient identifier for NEP-413 messages (required)
* **anonymous**: Whether to allow anonymous sign-ins without requiring an email. Default is `true`
* **emailDomainName**: The email domain name for creating user accounts when not using anonymous mode. Defaults to the recipient value
* **requireFullAccessKey**: Whether to require full access keys. Default is `true`
* **getNonce**: Function to generate a unique nonce for each sign-in attempt. Optional, uses secure defaults
* **validateNonce**: Function to validate nonces. Optional, uses time-based validation by default
* **validateRecipient**: Function to validate recipients. Optional, uses exact match by default
* **validateMessage**: Function to validate messages. Optional, no validation by default
* **getProfile**: Function to fetch user profiles. Optional, uses NEAR Social by default
* **validateLimitedAccessKey**: Function to validate function call access keys when `requireFullAccessKey` is false

### Client Options

The SIWN client plugin doesn't require any configuration options:

```ts title="auth-client.ts"
import { createAuthClient } from "better-auth/client";
import { siwnClient } from "better-near-auth/client";

export const authClient = createAuthClient({
  plugins: [
    siwnClient({
      // Optional client configuration can go here
    }),
  ],
});
```

## Schema

The SIWN plugin adds a `nearAccount` table to store user NEAR account associations:

| Field     | Type    | Description                               |
| --------- | ------- | ----------------------------------------- |
| id        | string  | Primary key                               |
| userId    | string  | Reference to user.id                      |
| accountId | string  | NEAR account ID                           |
| network   | string  | Network (mainnet or testnet)              |
| publicKey | string  | Associated public key                     |
| isPrimary | boolean | Whether this is the user's primary account|
| createdAt | date    | Creation timestamp                        |

## Complete Implementation Example

Here's a complete example showing how to implement SIWN authentication:

```ts title="auth.ts"
import { betterAuth } from "better-auth";
import { siwn } from "better-near-auth";

export const auth = betterAuth({
  database: {
    provider: "sqlite",
    url: "./db.sqlite"
  },
  plugins: [
    siwn({
      recipient: "myapp.com",
      anonymous: false, // Require email for users
      emailDomainName: "myapp.com",
      
      // Optional: Custom profile lookup
      getProfile: async (accountId) => {
        // Custom profile logic, falls back to NEAR Social
      },
    }),
  ],
});
```

```ts title="auth-client.ts"
import { createAuthClient } from "better-auth/client";
import { siwnClient } from "better-near-auth/client";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [siwnClient()],
});
```

```tsx title="LoginButton.tsx"
import { authClient } from "./auth-client";
import { useState } from "react";

export function LoginButton() {
  const { data: session } = authClient.useSession();
  const [isSigningIn, setIsSigningIn] = useState(false);

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}!</p>
        <button onClick={() => authClient.signOut()}>Sign out</button>
      </div>
    );
  }

  const handleSignIn = async () => {
    setIsSigningIn(true);
    
    try {
      await authClient.signIn.near(
        { recipient: "myapp.com", signer: window.near },
        {
          onSuccess: () => {
            console.log("Successfully signed in!");
          },
          onError: (error) => {
            console.error("Sign in failed:", error.message);
          }
        }
      );
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <button onClick={handleSignIn} disabled={isSigningIn}>
      {isSigningIn ? "Signing in..." : "Sign in with NEAR"}
    </button>
  );
}
```

## Advanced Configuration

For advanced use cases, you can customize the validation functions passed to `verify` in `near-sign-verify`:

```ts title="advanced-auth.ts"
import { betterAuth } from "better-auth";
import { siwn } from "better-near-auth";
import { generateNonce } from "near-sign-verify";

const usedNonces = new Set<string>();

export const auth = betterAuth({
  plugins: [
    siwn({
      recipient: "myapp.com",
      anonymous: false, // Require email for users
      emailDomainName: "myapp.com",
      requireFullAccessKey: false, // Allow function call keys
      
      // Custom nonce generation
      getNonce: async () => {
        return generateNonce();
      },
      
      // Custom nonce validation (prevents replay attacks)
      validateNonce: (nonce: Uint8Array) => {
        const nonceHex = Array.from(nonce).map(b => b.toString(16).padStart(2, '0')).join('');
        if (usedNonces.has(nonceHex)) {
          return false; // Prevent replay attacks
        }
        usedNonces.add(nonceHex);
        return true;
      },
      
      // Custom recipient validation (allow multiple domains)
      validateRecipient: (recipient: string) => {
        const allowedRecipients = ["myapp.com", "staging.myapp.com", "localhost:3000"];
        return allowedRecipients.includes(recipient);
      },
      
      // Custom message validation
      validateMessage: (message: string) => {
        // Add custom message format validation
        return message.includes("Sign in to") && message.length > 10;
      },
      
      // Custom profile lookup
      getProfile: async (accountId) => {
        // Custom profile logic, falls back to NEAR Social
        try {
          const response = await fetch(`https://api.myapp.com/profiles/${accountId}`);
          if (response.ok) {
            const customProfile = await response.json();
            return {
              name: customProfile.displayName,
              description: customProfile.bio,
              image: { url: customProfile.avatar },
            };
          }
        } catch (error) {
          console.error("Custom profile fetch failed:", error);
        }
        return null; // Use default NEAR Social lookup
      },
      
      // Validate function call keys against allowed contracts
      validateLimitedAccessKey: async ({ accountId, publicKey, contractId }) => {
        const allowedContracts = ["myapp.near", "social.near"];
        return contractId ? allowedContracts.includes(contractId) : true;
      },
    }),
  ],
});
```

## Links

* [Better Auth Documentation](https://better-auth.com)
* [NEAR Protocol](https://near.org)
* [NEP-413 Specification](https://github.com/near/NEPs/blob/master/neps/nep-0413.md)
* [near-sign-verify](https://github.com/elliotBraem/near-sign-verify)
* [fastintear](https://github.com/elliotBraem/fastintear)
