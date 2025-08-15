# better-near-auth

A **Sign in with NEAR (SIWN)** plugin for [Better Auth](https://better-auth.com) that enables secure authentication using NEAR Protocol accounts.

## Features

- 🔐 **Secure Authentication** - Uses NEP-413 compliant message signing
- 🌐 **Network Support** - Automatic detection of mainnet/testnet from account IDs
- 👤 **Profile Integration** - Fetches user profiles from NEAR Social
- 🔄 **Multi-Account Support** - Link multiple NEAR accounts to one user
- ✅ **Account Validation** - Comprehensive NEAR account ID validation
- 🛡️ **Replay Protection** - Built-in nonce management and verification

## Installation

```bash
npm install better-near-auth near-sign-verify
# or
yarn add better-near-auth near-sign-verify
# or
bun add better-near-auth near-sign-verify
```

## Quick Start

### Server Setup

```typescript
import { betterAuth } from "better-auth";
import { siwn } from "better-near-auth";
import { verify } from "near-sign-verify";

export const auth = betterAuth({
  database: {
    // your database config
  },
  plugins: [
    siwn({
      domain: "yourapp.com",
      async getNonce() {
        // Generate a secure random nonce
        return crypto.randomBytes(16).toString('hex');
      },
      async verifyMessage({ authToken, expectedRecipient, accountId }) {
        try {
          const result = await verify(authToken, {
            expectedRecipient,
            nonceMaxAge: 15 * 60 * 1000, // 15 minutes
            requireFullAccessKey: true,
          });
          return result.accountId === accountId;
        } catch (error) {
          return false;
        }
      },
    }),
  ],
});
```

### Client Setup

```typescript
import { createAuthClient } from "better-auth/client";
import { siwnClient } from "better-near-auth/client";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [siwnClient()],
});
```

### Frontend Usage

#### Simple One-Line Authentication

```typescript
import { authClient } from "./auth-client";

// One-line NEAR wallet authentication
const { data, error } = await authClient.signIn.near();

if (data) {
  console.log("Signed in successfully:", data.user);
} else {
  console.error("Login failed:", error);
}
```

#### Full Wallet Access

```typescript
// Access complete FastINTEAR functionality through authClient.near.wallet
const wallet = authClient.near.wallet;

// Connect to NEAR wallet
await wallet.requestSignIn({ contractId: "yourapp.com" });

// Get account information
const accountId = await wallet.accountId();
const publicKey = await wallet.publicKey();

// Send transactions
await wallet.sendTx({
  receiverId: "contract.near",
  actions: [
    (await wallet.actions).functionCall({
      methodName: "my_method",
      args: { key: "value" },
      gas: "30000000000000",
      deposit: "0"
    })
  ]
});

// Sign messages
const signature = await wallet.signMessage({
  message: "Hello NEAR!",
  recipient: "yourapp.com"
});
```

#### Manual Authentication Flow

```typescript
import { authClient } from "./auth-client";

async function signInWithNear(accountId: string) {
  try {
    // 1. Get nonce from server
    const { data: nonceData } = await authClient.near.nonce({ accountId });
    
    // 2. Sign message with your wallet (implementation depends on wallet)
    const authToken = "base64_signed_message"; // From your wallet
    
    // 3. Verify and create session
    const { data, error } = await authClient.near.verify({
      authToken,
      accountId,
    });
    
    if (error) {
      console.error("Authentication failed:", error);
      return;
    }
    
    console.log("Signed in successfully:", data.user);
  } catch (error) {
    console.error("Sign in error:", error);
  }
}
```

## Configuration Options

### SIWNPluginOptions

```typescript
interface SIWNPluginOptions {
  domain: string;                    // Your app's domain
  emailDomainName?: string;          // Custom email domain (optional)
  anonymous?: boolean;               // Allow anonymous users (default: true)
  requireFullAccessKey?: boolean;    // Require full access keys (default: true)
  getNonce: () => Promise<string>;   // Nonce generation function
  verifyMessage: (args: SIWNVerifyMessageArgs) => Promise<boolean>;
  getProfile?: (accountId?: AccountId) => Promise<Profile | null>;
  validateFunctionCallKey?: (args: {
    accountId: AccountId;
    publicKey: string;
    contractId?: string;
  }) => Promise<boolean>;
}
```

### Advanced Configuration

```typescript
siwn({
  domain: "yourapp.com",
  emailDomainName: "auth.yourapp.com", // Custom email domain
  anonymous: false, // Require email for non-anonymous users
  
  async getNonce() {
    // Custom nonce generation with database storage
    const nonce = crypto.randomBytes(32).toString('hex');
    await redis.setex(`nonce:${nonce}`, 900, "1"); // 15 min expiry
    return nonce;
  },
  
  async verifyMessage({ authToken, expectedRecipient, accountId }) {
    // Custom verification with additional checks
    try {
      const result = await verify(authToken, {
        expectedRecipient,
        nonceMaxAge: 15 * 60 * 1000,
        requireFullAccessKey: true,
        validateNonce: async (nonce) => {
          const nonceHex = Buffer.from(nonce).toString('hex');
          const exists = await redis.get(`nonce:${nonceHex}`);
          if (exists) {
            await redis.del(`nonce:${nonceHex}`); // Prevent reuse
            return true;
          }
          return false;
        },
      });
      
      return result.accountId === accountId;
    } catch (error) {
      console.error("Verification failed:", error);
      return false;
    }
  },
  
  // Custom profile lookup
  async getProfile(accountId) {
    // Your custom profile fetching logic
    return await fetchCustomProfile(accountId);
  },
})
```

## Account ID Validation

The plugin automatically validates NEAR account IDs according to the NEAR protocol specification:

- Length: 2-64 characters
- Format: `account.tld` (e.g., `user.near`, `alice.testnet`, `bob.tg`)
- Network detection: `.testnet` suffix = testnet, everything else = mainnet

### Valid Account IDs
```typescript
"user.near"           // mainnet
"alice.testnet"       // testnet  
"sub.account.near"    // mainnet with subdomain
"user-name.near"      // mainnet with hyphen
"user_name.near"      // mainnet with underscore
"alice.tg"            // mainnet with custom TLD
```

## Database Schema

The plugin automatically creates a `nearAccount` table:

```sql
CREATE TABLE nearAccount (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL REFERENCES user(id),
  accountId TEXT NOT NULL,     -- NEAR account ID
  network TEXT NOT NULL,       -- "mainnet" | "testnet"
  publicKey TEXT NOT NULL,     -- Associated public key
  isPrimary BOOLEAN DEFAULT FALSE,
  createdAt DATETIME NOT NULL
);
```

## API Endpoints

### POST `/api/auth/near/nonce`

Generate a nonce for signing.

**Request:**
```json
{
  "accountId": "user.near"
}
```

**Response:**
```json
{
  "nonce": "a1b2c3d4e5f6g7h8i9j0"
}
```

### POST `/api/auth/near/verify`

Verify signed message and create session.

**Request:**
```json
{
  "authToken": "base64_encoded_token",
  "accountId": "user.near",
  "email": "user@example.com" // optional, required if anonymous: false
}
```

**Response:**
```json
{
  "success": true,
  "token": "session_token",
  "user": {
    "id": "user_id",
    "accountId": "user.near",
    "network": "mainnet"
  }
}
```

### POST `/api/auth/near/profile`

Fetch user profile from NEAR Social.

**Request:**
```json
{
  "accountId": "user.near" // optional, uses authenticated user if not provided
}
```

**Response:**
```json
{
  "profile": {
    "name": "Alice",
    "description": "NEAR developer",
    "image": "https://ipfs.near.social/ipfs/...",
    "backgroundImage": "https://ipfs.near.social/ipfs/...",
    "linktree": {
      "twitter": "alice_near",
      "github": "alice"
    }
  }
}
```

## NEAR Social Integration

The plugin automatically fetches user profiles from NEAR Social:

```typescript
// Fetched profile data
interface NearSocialProfile {
  name?: string;           // Display name
  description?: string;    // Bio/description  
  image?: string;         // Profile image URL
  backgroundImage?: string; // Background image URL
  linktree?: Record<string, string>; // Social links
}
```

## Error Handling

```typescript
// Common error codes
"UNAUTHORIZED_INVALID_OR_EXPIRED_NONCE" // Nonce expired or invalid
"INVALID_NEAR_ACCOUNT_ID"               // Account ID format invalid
"NEAR_SIGNATURE_VERIFICATION_FAILED"    // Signature verification failed
```

## Testing

```bash
# Run tests
bun test

# Run tests in watch mode  
bun test:watch

# Type checking
bun run build
```

## Examples

### Complete Authentication Flow

```typescript
// auth.ts - Server setup
import { betterAuth } from "better-auth";
import { siwn } from "better-near-auth";
import { verify } from "near-sign-verify";

export const auth = betterAuth({
  database: {
    provider: "sqlite",
    url: "./db.sqlite"
  },
  plugins: [
    siwn({
      domain: "myapp.com",
      async getNonce() {
        return crypto.randomBytes(32).toString('hex');
      },
      async verifyMessage({ authToken, expectedRecipient, accountId }) {
        const result = await verify(authToken, {
          expectedRecipient,
          nonceMaxAge: 15 * 60 * 1000,
          requireFullAccessKey: true,
        });
        return result.accountId === accountId;
      },
    }),
  ],
});

// client.ts - Client setup
import { createAuthClient } from "better-auth/client";
import { siwnClient } from "better-near-auth/client";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [siwnClient()],
});

// login.tsx - React component
import * as near from "fastintear";
import { sign } from "near-sign-verify";
import { authClient } from "./client";
import { useEffect, useState } from "react";

export function LoginButton() {
  const [accountId, setAccountId] = useState<string | null>(null);
  
  useEffect(() => {
    // Configure FastINTEAR
    near.config({ networkId: "mainnet" });
    
    // Check if already signed in
    setAccountId(near.accountId());
    
    // Listen for account changes
    const unsubscribe = near.event.onAccount((newAccountId) => {
      setAccountId(newAccountId);
    });
    
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    try {
      // 1. Authenticate with INTEAR Wallet
      await near.requestSignIn({ contractId: "myapp.com" });
      
      const currentAccountId = near.accountId();
      if (!currentAccountId) {
        throw new Error("Failed to get account ID after sign in");
      }
      
      // 2. Get nonce from server
      const { data: nonceData } = await authClient.near.nonce({ 
        accountId: currentAccountId 
      });
      
      // 3. Sign with FastINTEAR
      const authToken = await sign("Sign in to MyApp", {
        signer: near, // FastINTEAR's near object
        recipient: "myapp.com",
        nonce: new TextEncoder().encode(nonceData.nonce),
      });
      
      // 4. Verify and create session
      const { data, error } = await authClient.near.verify({
        authToken,
        accountId: currentAccountId,
      });
      
      if (data) {
        console.log("Logged in:", data.user);
        // Get user profile
        const { data: profileData } = await authClient.near.getProfile();
        console.log("Profile:", profileData.profile);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await near.signOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      {accountId ? (
        <div>
          <p>Connected: {accountId}</p>
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with NEAR</button>
      )}
    </div>
  );
}
```

### Client Profile Usage

```typescript
// Get current user's profile
const { data } = await authClient.near.getProfile();
console.log("My profile:", data.profile);

// Get specific user's profile
const { data: aliceProfile } = await authClient.near.getProfile("alice.near");
console.log("Alice's profile:", aliceProfile.profile);

// Handle profile not found
const { data: profileData, error } = await authClient.near.getProfile("nonexistent.near");
if (error) {
  console.log("Profile not found");
} else {
  console.log("Profile:", profileData.profile);
}
```

### Function Call Key Support

```typescript
// Server configuration for function call keys
siwn({
  domain: "myapp.com",
  requireFullAccessKey: false, // Allow function call keys
  
  async validateFunctionCallKey({ accountId, publicKey, contractId }) {
    // Custom validation logic for function call keys
    const allowedContracts = ["myapp.near", "social.near"];
    
    if (contractId && !allowedContracts.includes(contractId)) {
      return false;
    }
    
    // Additional validation logic here
    return true;
  },
  
  async verifyMessage({ authToken, expectedRecipient, accountId }) {
    const result = await verify(authToken, {
      expectedRecipient,
      nonceMaxAge: 15 * 60 * 1000,
      requireFullAccessKey: false, // Allow function call keys
    });
    return result.accountId === accountId;
  },
})
```

### Server-to-Server Authentication

```typescript
// backend-service.ts - Server-to-server authentication
import { auth } from "./auth";

export async function authenticateNearUser(authToken: string, accountId: string) {
  try {
    // Verify the token server-side
    const session = await auth.api.verifySession({
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    
    if (session?.user) {
      // Get NEAR account info
      const nearAccount = await db.nearAccount.findFirst({
        where: { 
          userId: session.user.id,
          accountId: accountId 
        }
      });
      
      return {
        user: session.user,
        nearAccount,
        isAuthenticated: true
      };
    }
    
    return { isAuthenticated: false };
  } catch (error) {
    console.error("Authentication failed:", error);
    return { isAuthenticated: false };
  }
}

// API route example
export async function POST(request: Request) {
  const { accountId } = await request.json();
  const authHeader = request.headers.get("authorization");
  
  if (!authHeader) {
    return Response.json({ error: "Missing authorization" }, { status: 401 });
  }
  
  const token = authHeader.replace("Bearer ", "");
  const authResult = await authenticateNearUser(token, accountId);
  
  if (!authResult.isAuthenticated) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  return Response.json({ 
    message: "Authenticated successfully",
    user: authResult.user 
  });
}
```

### Type-Safe Usage with AccountId

```typescript
import { accountIdSchema, type AccountId } from "better-near-auth";

// Validate account ID at runtime
function validateAndUseAccountId(input: string) {
  try {
    const accountId: AccountId = accountIdSchema.parse(input);
    console.log("Valid account ID:", accountId);
    return accountId;
  } catch (error) {
    console.error("Invalid account ID:", error);
    return null;
  }
}

// Use in forms with validation
const accountId = validateAndUseAccountId("user.near"); // ✅ Valid
const invalid = validateAndUseAccountId("invalid..near"); // ❌ Throws error
```

### With INTEAR Wallet (FastINTEAR)

```typescript
import * as near from "fastintear";
import { sign } from "near-sign-verify";
import { authClient } from "./auth-client";

// Configure FastINTEAR for your network
near.config({ 
  networkId: "mainnet", // or "testnet"
  nodeUrl: "https://rpc.mainnet.fastnear.com/"
});

async function signInWithIntearWallet() {
  try {
    // 1. Request sign in with INTEAR Wallet (opens popup)
    await near.requestSignIn({ 
      contractId: "myapp.com" // Your app's domain as contract ID
    });
    
    // 2. Get the authenticated account ID
    const accountId = near.accountId();
    if (!accountId) {
      throw new Error("Failed to authenticate with INTEAR Wallet");
    }
    
    // 3. Get nonce from your server
    const { data: nonceData } = await authClient.near.nonce({ accountId });
    
    // 4. Sign message using FastINTEAR
    const authToken = await sign("Sign in to MyApp", {
      signer: near, // FastINTEAR's near object
      recipient: "myapp.com",
      nonce: new TextEncoder().encode(nonceData.nonce),
    });
    
    // 5. Verify and create session
    const { data, error } = await authClient.near.verify({
      authToken,
      accountId,
    });
    
    if (data) {
      console.log("Signed in successfully:", data.user);
      return data.user;
    } else {
      throw new Error(error?.message || "Authentication failed");
    }
  } catch (error) {
    console.error("INTEAR Wallet sign in failed:", error);
    throw error;
  }
}

// Check authentication status
function checkAuthStatus() {
  const status = near.authStatus(); // "SignedIn" | "SignedOut"
  const accountId = near.accountId(); // Current account or null
  
  return { status, accountId };
}

// Sign out
async function signOut() {
  try {
    await near.signOut();
    console.log("Signed out successfully");
  } catch (error) {
    console.error("Sign out failed:", error);
  }
}
```

### Browser Script Tag Usage

```html
<!DOCTYPE html>
<html>
<head>
  <title>Better NEAR Auth with FastINTEAR</title>
</head>
<body>
  <div id="auth-status">Not connected</div>
  <button id="connect-btn">Connect with NEAR</button>
  <button id="disconnect-btn" style="display: none;">Disconnect</button>
  
  <!-- Include FastINTEAR global script -->
  <script src="https://cdn.jsdelivr.net/npm/fastintear/dist/umd/browser.global.js"></script>
  <!-- Include near-sign-verify -->
  <script src="https://cdn.jsdelivr.net/npm/near-sign-verify/dist/browser.js"></script>
  
  <script>
    // Configure FastINTEAR
    near.config({ networkId: "mainnet" });
    
    const authStatus = document.getElementById('auth-status');
    const connectBtn = document.getElementById('connect-btn');
    const disconnectBtn = document.getElementById('disconnect-btn');
    
    // Check initial auth status
    updateUI();
    
    // Listen for account changes
    near.event.onAccount((accountId) => {
      updateUI();
    });
    
    function updateUI() {
      const accountId = near.accountId();
      if (accountId) {
        authStatus.textContent = `Connected: ${accountId}`;
        connectBtn.style.display = 'none';
        disconnectBtn.style.display = 'inline-block';
      } else {
        authStatus.textContent = 'Not connected';
        connectBtn.style.display = 'inline-block';
        disconnectBtn.style.display = 'none';
      }
    }
    
    connectBtn.onclick = async () => {
      try {
        // 1. Authenticate with INTEAR Wallet
        await near.requestSignIn({ contractId: "myapp.com" });
        
        const accountId = near.accountId();
        if (!accountId) return;
        
        // 2. Get nonce from your server
        const nonceResponse = await fetch('/api/auth/near/nonce', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ accountId })
        });
        const { nonce } = await nonceResponse.json();
        
        // 3. Sign message
        const authToken = await nearSignVerify.sign("Sign in to MyApp", {
          signer: near,
          recipient: "myapp.com",
          nonce: new TextEncoder().encode(nonce),
        });
        
        // 4. Verify and create session
        const verifyResponse = await fetch('/api/auth/near/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ authToken, accountId })
        });
        
        const result = await verifyResponse.json();
        if (result.success) {
          console.log('Authentication successful:', result.user);
        }
      } catch (error) {
        console.error('Authentication failed:', error);
      }
    };
    
    disconnectBtn.onclick = async () => {
      try {
        await near.signOut();
      } catch (error) {
        console.error('Sign out failed:', error);
      }
    };
  </script>
</body>
</html>
```

### Server-Side Key Management with FastINTEAR

```typescript
// server-key-manager.ts - Enhanced server-side operations
import * as near from "fastintear";
import { privateKeyFromRandom } from "fastintear";
import { sign } from "near-sign-verify";

// Configure FastINTEAR for server use
near.config({ 
  networkId: "mainnet",
  nodeUrl: "https://rpc.mainnet.fastnear.com/"
});

// Set up server with full access key
near.update({
  accountId: "server-account.near",
  privateKey: process.env.NEAR_PRIVATE_KEY // Full access key
});

export class NearKeyManager {
  // Generate new keypair for user
  static generateKeyPair() {
    const privateKey = privateKeyFromRandom();
    const publicKey = near.utils.publicKeyFromPrivate(privateKey);
    
    return { privateKey, publicKey };
  }
  
  // Add full access key to user account
  static async addFullAccessKey(targetAccountId: string, publicKey: string) {
    try {
      const result = await near.sendTx({
        receiverId: targetAccountId,
        actions: [
          near.actions.addFullAccessKey({ publicKey })
        ]
      });
      
      console.log(`Added full access key to ${targetAccountId}:`, result);
      return result;
    } catch (error) {
      console.error("Failed to add full access key:", error);
      throw error;
    }
  }
  
  // Add limited access key for specific contract
  static async addLimitedAccessKey(
    targetAccountId: string, 
    publicKey: string,
    contractId: string,
    methodNames: string[] = [],
    allowance?: string
  ) {
    try {
      const result = await near.sendTx({
        receiverId: targetAccountId,
        actions: [
          near.actions.addLimitedAccessKey({
            publicKey,
            allowance: allowance || "1000000000000000000000000", // 1 NEAR
            accountId: contractId,
            methodNames
          })
        ]
      });
      
      console.log(`Added limited access key to ${targetAccountId}:`, result);
      return result;
    } catch (error) {
      console.error("Failed to add limited access key:", error);
      throw error;
    }
  }
  
  // Create new NEAR account (requires server to have sufficient balance)
  static async createAccount(newAccountId: string, publicKey: string, initialBalance: string) {
    try {
      const result = await near.sendTx({
        receiverId: newAccountId,
        actions: [
          near.actions.createAccount(),
          near.actions.transfer(initialBalance),
          near.actions.addFullAccessKey({ publicKey })
        ]
      });
      
      console.log(`Created account ${newAccountId}:`, result);
      return result;
    } catch (error) {
      console.error("Failed to create account:", error);
      throw error;
    }
  }
  
  // Sign message on behalf of user (for meta-transactions)
  static async signMessageForUser(message: string, recipient: string, nonce: Uint8Array) {
    try {
      const authToken = await sign(message, {
        signer: near,
        recipient,
        nonce
      });
      
      return authToken;
    } catch (error) {
      console.error("Failed to sign message:", error);
      throw error;
    }
  }
}

// Enhanced server-to-server authentication with key management
export async function provisionUserAccount(userId: string, accountId: string) {
  try {
    // 1. Generate new keypair for user
    const { privateKey, publicKey } = NearKeyManager.generateKeyPair();
    
    // 2. Add limited access key to user's account for your app
    await NearKeyManager.addLimitedAccessKey(
      accountId,
      publicKey,
      "myapp.near", // Your contract
      ["authenticate", "update_profile"], // Allowed methods
      "100000000000000000000000" // 0.1 NEAR allowance
    );
    
    // 3. Store the private key securely for this user
    await db.userKeys.create({
      data: {
        userId,
        accountId,
        privateKey: privateKey, // Encrypt this in production!
        publicKey,
        keyType: "limited_access",
        contractId: "myapp.near"
      }
    });
    
    return { success: true, publicKey };
  } catch (error) {
    console.error("Failed to provision user account:", error);
    return { success: false, error: error.message };
  }
}

// API endpoint for user account provisioning
export async function POST(request: Request) {
  const { userId, accountId } = await request.json();
  
  // Verify admin authorization
  const authHeader = request.headers.get("authorization");
  if (!isAuthorizedAdmin(authHeader)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  const result = await provisionUserAccount(userId, accountId);
  
  if (result.success) {
    return Response.json({ 
      message: "Account provisioned successfully",
      publicKey: result.publicKey
    });
  } else {
    return Response.json({ 
      error: "Failed to provision account",
      details: result.error 
    }, { status: 500 });
  }
}
```

### Custom Profile Provider

```typescript
// Custom profile provider example
siwn({
  domain: "myapp.com",
  
  async getProfile(accountId) {
    // Custom profile logic - could fetch from your own API
    try {
      const response = await fetch(`https://api.myapp.com/profiles/${accountId}`);
      if (response.ok) {
        const customProfile = await response.json();
        return {
          name: customProfile.displayName,
          description: customProfile.bio,
          image: { url: customProfile.avatar },
          linktree: customProfile.socialLinks
        };
      }
      
      // Fallback to NEAR Social
      return await defaultGetProfile(accountId);
    } catch (error) {
      console.error("Profile fetch failed:", error);
      return null;
    }
  },
  
  // ... other options
})
```

## Security Considerations

1. **Nonce Management**: Use secure random nonce generation and prevent reuse
2. **Full Access Keys**: Require full access keys for production (default)
3. **HTTPS Only**: Always use HTTPS in production
4. **Domain Validation**: Ensure recipient domain matches your application
5. **Rate Limiting**: Implement rate limiting on authentication endpoints

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Links

- [Better Auth Documentation](https://better-auth.com)
- [NEAR Protocol](https://near.org)
- [NEP-413 Specification](https://github.com/near/NEPs/blob/master/neps/nep-0413.md)
- [near-sign-verify](https://github.com/near/near-sign-verify)
