# Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing projects, skills, and providing a contact form. This portfolio features smooth animations, dark/light mode toggle, and a clean, professional design.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes using Redux state management
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Portfolio Showcase**: Display your projects with an interactive portfolio section
- **Contact Form**: MongoDB-integrated contact form to receive messages
- **About Section**: Personal introduction and skills showcase
- **Modern UI Components**: Built with Radix UI and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **State Management**: Redux Toolkit
- **Database**: MongoDB with Mongoose
- **Icons**: React Icons, Lucide React
- **Photo Viewer**: React Photo View

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun
- MongoDB database (local or remote)

## 🔧 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd next-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

**Note**: Currently, the MongoDB URI is hardcoded in `src/lib/mongodb.ts`. For production, move it to environment variables.

## 🏃 Running the Project

### Development Mode

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-update as you edit the files.

### Production Build

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run the linter to check for code issues:

```bash
npm run lint
```

## 📁 Project Structure

```
next-portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/                # API routes
│   │   │   └── contact/        # Contact form API
│   │   ├── components/         # React components
│   │   │   ├── Layout/         # Header and Footer
│   │   │   └── ui/             # UI components
│   │   ├── page.tsx            # Home page
│   │   └── layout.tsx          # Root layout
│   ├── components/             # Shared components
│   ├── context/                # React context
│   ├── lib/                    # Utility functions
│   │   └── mongodb.ts          # MongoDB connection
│   └── models/                 # Mongoose models
├── component/                   # Custom components (BlurText, GradientText)
└── public/                     # Static assets
```

## 🎨 Key Components

- **Header**: Navigation bar with smooth scrolling
- **ItsMe**: Hero section with introduction
- **About**: Personal information and skills
- **PortfolioShowCase**: Interactive project showcase
- **HaveProjects**: Contact form section
- **Footer**: Footer with links and information

## 🔐 Environment Variables

Make sure to set up the following environment variables:

- `MONGODB_URI`: Your MongoDB connection string

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables
4. Deploy!

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Your feedback and contributions are welcome!

## 📄 License

This project is private and personal.
