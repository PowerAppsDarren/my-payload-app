# Client-side config context undefined in CreateFirstUserClient component (Next.js App Router)

## Bug Description
When setting up Payload CMS 3.x with Next.js App Router, the admin panel loads correctly server-side but fails client-side with a configuration context error. The `CreateFirstUserClient` component cannot access the config context, preventing the first user creation form from functioning.

## Error Details
```
TypeError: Cannot destructure property 'config' of '(0 , _payloadcms_ui__WEBPACK_IMPORTED_MODULE_2__.b)(...)' as it is undefined.
    at CreateFirstUserClient (webpack-internal:///(app-pages-browser)/./node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.client.js:19:21)
```

## Environment
- **Payload CMS Version**: 3.40.0
- **Next.js Version**: 15.3.3
- **React Version**: 19.0.0
- **Node.js Version**: 22.15.1
- **Package Manager**: npm
- **Database**: MongoDB (via Docker)
- **Deployment**: Docker Compose (development)

## Current Setup

### Directory Structure
```
my-payload-app/
├── payload.config.ts                    # Root level config
├── next.config.mjs                      # withPayload wrapper
├── src/
│   └── app/
│       ├── layout.tsx                   # Root layout
│       ├── page.tsx                     # Home page
│       ├── api/
│       │   └── [[...slug]]/
│       │       └── route.ts             # API routes
│       └── (payload)/
│           ├── layout.tsx               # Admin layout
│           ├── custom.scss              # Admin styles
│           └── admin/
│               ├── importMap.js         # Generated import map
│               └── [[...segments]]/
│                   └── page.tsx         # Admin pages
```

### Key Configuration Files

#### `payload.config.ts`
```typescript
import path from 'path'
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(process.cwd()),
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    {
      slug: 'pages',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({}),
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(process.cwd(), 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
})
```

#### `next.config.mjs`
```javascript
import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@payload-config': path.resolve(process.cwd(), 'payload.config.ts'),
    }
    return config
  }
}

export default withPayload(nextConfig)
```

#### `src/app/api/[[...slug]]/route.ts`
```typescript
import { REST_DELETE, REST_GET, REST_PATCH, REST_POST } from '@payloadcms/next/routes'
import config from '@payload-config'

export const GET = REST_GET(config)
export const POST = REST_POST(config)
export const DELETE = REST_DELETE(config)
export const PATCH = REST_PATCH(config)
```

#### `src/app/(payload)/admin/[[...segments]]/page.tsx`
```typescript
import type { Metadata } from 'next'
import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'

type Args = {
  params: { segments: string[] }
  searchParams: { [key: string]: string | string[] }
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

const Page = ({ params, searchParams }: Args) => {
  return RootPage({ config, params, searchParams })
}

export default Page
```

## What's Working
✅ Server-side rendering loads perfectly with Payload branding  
✅ API routes work correctly (`/api/users` returns proper JSON response)  
✅ MongoDB connection established  
✅ Payload configuration valid (generates types successfully)  
✅ Admin panel styling and metadata correct  
✅ Import map generated successfully  

## What's Broken
❌ Client-side configuration context is undefined  
❌ `useConfig()` hook returns undefined in `CreateFirstUserClient`  
❌ First user creation form doesn't render due to config error  

## Browser Behavior
1. Navigate to `/admin` → redirects correctly to `/admin/create-first-user`
2. Page loads with proper Payload styling and server-rendered content
3. Client-side hydration fails with config context error
4. Form fields don't render due to JavaScript error

## Server Logs
```
[WARN]: No email adapter provided. Email will be written to console.
⨯ TypeError: Cannot read properties of undefined (reading 'config')
  37 |     getEntityConfig,
> 38 |   } = useConfig()
```

## Steps to Reproduce
1. Create new Next.js 15 app with App Router
2. Install Payload CMS 3.x with MongoDB adapter
3. Configure admin routes using the structure above
4. Start development server
5. Navigate to `/admin` in browser
6. Observe client-side config context error

## Expected Behavior
The `CreateFirstUserClient` component should have access to the Payload configuration context and render the user creation form successfully.

## Attempted Solutions
1. ✅ Added proper API routes - fixed API functionality
2. ✅ Generated import map - resolved lexical editor imports
3. ❌ Tried wrapping with `ConfigProvider` - caused server-side import errors
4. ❌ Attempted to use `RootLayout` from Payload views - import not available
5. ❌ Various layout configuration approaches - context still undefined

## Additional Context
This appears to be a Next.js App Router specific issue with client-side configuration context initialization. The server-side integration works perfectly, but the client-side `useConfig()` hook cannot access the configuration.

## Request
Please provide guidance on the correct way to set up Payload 3.x with Next.js App Router so that client-side components can access the configuration context properly.