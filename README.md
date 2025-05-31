# 🚀 My Payload App

[![Payload CMS](https://img.shields.io/badge/Payload%20CMS-3.40.0-blue?style=flat-square)](https://payloadcms.com)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square)](https://nextjs.org)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)

> 🎯 A modern, headless CMS built with Payload, Next.js, and Docker. Perfect for content management that doesn't get in your way!

## ✨ Features

- 🎨 **Modern Admin Interface** - Beautiful, intuitive content management
- 🔐 **Authentication Ready** - User management out of the box
- 📝 **Rich Text Editor** - Powered by Lexical for amazing content creation
- 🐳 **Docker Compose** - One-command development environment
- 🗄️ **MongoDB** - Flexible, scalable database with admin interface
- 🔒 **Secure by Default** - Environment variables and proper authentication
- ⚡ **TypeScript** - Full type safety throughout
- 🎯 **API First** - REST and GraphQL endpoints ready to go

## 🏗️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| 🎯 [Payload CMS](https://payloadcms.com) | Headless CMS | 3.40.0 |
| ⚡ [Next.js](https://nextjs.org) | React Framework | 15.3.3 |
| 🐳 [Docker](https://docker.com) | Containerization | Latest |
| 🍃 [MongoDB](https://mongodb.com) | Database | 7.0 |
| 📘 [TypeScript](https://typescriptlang.org) | Type Safety | 5.6.3 |
| ⚛️ [React](https://reactjs.org) | UI Library | 19.0.0 |

## 🚀 Quick Start

### Prerequisites
- 🐳 Docker & Docker Compose
- 📦 Node.js 18+ (for local development)

### 🎬 Get Started in 3 Steps

```bash
# 1️⃣ Clone and navigate
git clone <your-repo-url>
cd my-payload-app

# 2️⃣ Fire up the engines! 🚀
npm run docker:up

# 3️⃣ Open your browser and enjoy! 🎉
# http://localhost:3000
```

That's it! 🎊 Your CMS is ready to rock!

## 🌐 Available Services

| Service | URL | Description |
|---------|-----|-------------|
| 🎯 **Main App** | http://localhost:3000 | Your beautiful frontend |
| 👤 **Admin Panel** | http://localhost:3000/admin | Content management magic |
| 🗄️ **Database Admin** | http://localhost:8081 | MongoDB management |
| 🔌 **API Endpoint** | http://localhost:3000/api | REST & GraphQL APIs |

## 🔧 Development Commands

```bash
# 🚀 Start everything (recommended)
npm run docker:up

# 🏗️ Rebuild and start
npm run docker:up:build

# 🛑 Stop all services
npm run docker:down

# 📋 View logs
npm run docker:logs

# 🔄 Generate types (when config changes)
npm run generate:types

# 🧹 Lint your code
npm run lint
```

## 📁 Project Structure

```
my-payload-app/
├── 🎯 payload.config.ts          # Payload configuration
├── 🔧 next.config.mjs            # Next.js setup
├── 🐳 docker-compose.yml         # Docker services
├── 📦 package.json               # Dependencies & scripts
├── 🔒 .env                       # Environment variables
├── 📝 payload-types.ts           # Generated types
└── 📂 src/
    └── 📂 app/
        ├── 🏠 layout.tsx          # Root layout
        ├── 📄 page.tsx            # Home page
        ├── 🔌 api/                # API routes
        └── 👤 (payload)/          # Admin interface
```

## 🎨 Collections

### 👥 Users
- 🔐 Authentication enabled
- 📧 Email-based login
- 🛡️ Role-based permissions

### 📄 Pages
- 📝 Rich text content with Lexical editor
- 🏷️ Title and content fields
- 🎯 Perfect for websites and blogs

## 🔒 Environment Variables

Create your `.env` file (check `.env.example` for reference):

```bash
# 🗄️ Database
DATABASE_URI=mongodb://mongodb:27017/payload-app

# 🔐 Security
PAYLOAD_SECRET=your-super-secret-key

# 🌐 App
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

## 🐳 Docker Services

| Service | Purpose | Port |
|---------|---------|------|
| 🎯 **app** | Next.js + Payload | 3000 |
| 🍃 **mongodb** | Database | 27017 |
| 🖥️ **mongo-express** | DB Admin UI | 8081 |

## 🔧 Customization

### Adding New Collections

1. 📝 Edit `payload.config.ts`
2. 🔄 Run `npm run generate:types`
3. 🚀 Restart with `npm run docker:up:build`

### Custom Fields & Components

Check out the [Payload documentation](https://payloadcms.com/docs) for:
- 🎨 Custom field types
- 🧩 Custom components
- 🎣 Hooks and lifecycle events
- 🔌 Plugin development

## 🚨 Troubleshooting

### 🐛 Common Issues

**Admin panel shows config error?**
```bash
# Try rebuilding
npm run docker:down
npm run docker:up:build
```

**Database connection issues?**
```bash
# Check if MongoDB is running
docker ps
# Restart services
npm run docker:down && npm run docker:up
```

**Port conflicts?**
- 🎯 App: Change port 3000 in docker-compose.yml
- 🍃 MongoDB: Change port 27017
- 🖥️ Mongo Express: Change port 8081

## 🤝 Contributing

1. 🍴 Fork the repo
2. 🌟 Create your feature branch
3. ✨ Make your changes
4. 🧪 Test everything works
5. 🚀 Submit a pull request

## 📚 Resources

- 📖 [Payload CMS Docs](https://payloadcms.com/docs)
- ⚡ [Next.js Documentation](https://nextjs.org/docs)
- 🐳 [Docker Documentation](https://docs.docker.com)
- 🍃 [MongoDB Documentation](https://docs.mongodb.com)

## 📄 License

MIT License - feel free to use this for your awesome projects! 🎉

---

<div align="center">

**Made with ❤️ and lots of ☕**

*Happy coding! 🚀*

</div>