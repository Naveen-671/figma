# DevForge - Collaborative Design Platform

<div align="center">
  <img src="/public/figma-logo.svg" alt="DevForge Logo" width="120" />

  ### A powerful collaborative design tool with real-time multiplayer capabilities

  [![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

---

## 🎨 About

DevForge is a modern, collaborative design platform inspired by Figma, built with cutting-edge web technologies. It enables teams to design interfaces together in real-time with powerful canvas tools, multiplayer editing, and seamless collaboration features.

## ✨ Features

- 🔄 **Real-time Canvas Updates** - See changes instantly as your team designs together
- 👀 **Live Cursor Presence** - Track where other users are working on the canvas
- 🔗 **Room Sharing** - Create and share design rooms with team members
- 🛠️ **Property Editor** - Fine-tune element properties with an intuitive sidebar
- 📊 **Dashboard** - Manage all your design projects in one place
- ✏️ **Rich Design Tools**:
  - Shapes (rectangles, ellipses)
  - Freehand drawing with perfect-freehand
  - Text layers with custom styling
  - Selection and transformation tools
- ↩️ **Undo/Redo** - Full history management for all canvas operations
- 🔀 **Layer Management** - Control z-index and organize design elements
- 🔑 **Authentication** - Secure sign up and sign in with NextAuth
- 🎨 **Color Picker** - Advanced color selection for design elements
- 📱 **Responsive UI** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Server Actions
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Real-time Collaboration
- **[Liveblocks](https://liveblocks.io/)** - Real-time collaboration infrastructure
  - Cursor presence tracking
  - Live state synchronization
  - Collaborative editing

### Canvas & Graphics
- **[Fabric.js](https://fabricjs.com/)** - HTML5 canvas library (via custom implementation)
- **[perfect-freehand](https://github.com/steveruizok/perfect-freehand)** - Smooth freehand drawing
- **[react-colorful](https://omgovich.github.io/react-colorful/)** - Color picker component

### Backend & Database
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication solution

### UI Components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[class-variance-authority](https://cva.style/docs)** - CSS class management
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher ([Download](https://nodejs.org/en/download/package-manager/))
- **npm** 10.2.4 or higher (comes with Node.js)
- **PostgreSQL** ([Download](https://www.postgresql.org/download/))

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Naveen-671/figma.git
cd figma
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
# Next Auth Configuration
# Generate a secret with: npx auth secret
AUTH_SECRET="your-auth-secret-here"

# Liveblocks API Keys
# Sign up at https://liveblocks.io/ and create a project
LIVEBLOCKS_PUBLIC_KEY="pk_dev_your_public_key"
LIVEBLOCKS_SECRET_KEY="sk_dev_your_secret_key"

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/figma-clone"
```

**Getting API Keys:**

1. **Liveblocks**:
   - Sign up at [liveblocks.io](https://liveblocks.io/)
   - Create a new project
   - Copy the public and secret keys from your project settings

2. **Auth Secret**:
   ```bash
   npx auth secret
   ```

3. **PostgreSQL Database**:
   - Option 1: Use the included script:
     ```bash
     ./start-database.sh
     ```
   - Option 2: Use a cloud provider (e.g., [Neon](https://neon.tech/), [Supabase](https://supabase.com/), [Vercel Postgres](https://vercel.com/storage/postgres))

### 4. Set Up the Database

Generate Prisma client and run migrations:

```bash
npm run db:generate
npm run db:push
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run preview      # Build and start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run typecheck    # Run TypeScript type checking
npm run check        # Run lint + typecheck
npm run format:write # Format code with Prettier
npm run format:check # Check code formatting

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema changes to database
npm run db:migrate   # Create and run migrations
npm run db:studio    # Open Prisma Studio (database GUI)
```

## 🏗️ Project Structure

```
figma/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/
│   ├── figma-logo.svg         # Logo and assets
│   └── landing/               # Landing page images
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── api/              # API routes
│   │   ├── dashboard/        # Dashboard pages
│   │   ├── signin/           # Authentication pages
│   │   └── page.tsx          # Landing page
│   ├── components/
│   │   ├── canvas/           # Canvas-related components
│   │   ├── dashboard/        # Dashboard UI components
│   │   ├── landing/          # Landing page components
│   │   ├── liveblocks/       # Liveblocks integration
│   │   ├── sidebars/         # Sidebar components
│   │   └── toolsbar/         # Toolbar components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── server/
│   │   ├── auth/             # Authentication configuration
│   │   └── db.ts             # Database client
│   ├── styles/               # Global styles
│   ├── types.ts              # TypeScript type definitions
│   └── env.js                # Environment variable validation
├── .env.example              # Example environment variables
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🎯 Usage

### Creating a New Design Room

1. Sign up or sign in to your account
2. Navigate to the dashboard
3. Click "Create Room" to start a new design project
4. Share the room URL with team members for collaboration

### Using the Canvas

- **Selection Tool**: Click to select and move elements
- **Shape Tools**: Create rectangles and ellipses
- **Pencil Tool**: Draw freehand paths
- **Text Tool**: Add text layers
- **Color Picker**: Change fill colors of selected elements
- **Layer Management**: Organize elements using the layers panel
- **Undo/Redo**: Use toolbar buttons or keyboard shortcuts

### Real-time Collaboration

- See other users' cursors in real-time
- Watch changes appear instantly as team members edit
- Each user has a unique cursor color for easy identification

## 🔧 Configuration

### Database Configuration

The project uses Prisma with PostgreSQL. Modify `prisma/schema.prisma` to customize your database schema:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### Liveblocks Configuration

Configure Liveblocks settings in `liveblocks.config.ts`:

```typescript
declare global {
  interface Liveblocks {
    Presence: {
      cursor: { x: number; y: number } | null;
      // ... other presence data
    };
  }
}
```

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Naveen-671/figma)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in the Vercel dashboard
4. Deploy!

**Important**: Make sure to:
- Set up a production PostgreSQL database
- Configure all environment variables
- Run database migrations after deployment

### Environment Variables for Production

Ensure these are set in your production environment:
- `AUTH_SECRET`
- `LIVEBLOCKS_PUBLIC_KEY`
- `LIVEBLOCKS_SECRET_KEY`
- `DATABASE_URL`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Liveblocks](https://liveblocks.io/) - For the amazing real-time collaboration infrastructure
- [Vercel](https://vercel.com/) - For Next.js and hosting platform
- [Fabric.js](https://fabricjs.com/) - Canvas library inspiration
- [perfect-freehand](https://github.com/steveruizok/perfect-freehand) - Smooth drawing algorithm

## 📞 Support

If you have any questions or run into issues, please:
- Open an issue on [GitHub](https://github.com/Naveen-671/figma/issues)
- Check existing issues for solutions

---

<div align="center">
  Made with ❤️ by the DevForge team
</div>
