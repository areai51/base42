# Base42 SaaS Starter Kit

A token-efficient SaaS starter kit built with Hono, JSX, Pico CSS, and Basecoat components, optimized for Cloudflare Workers and AI coding assistants like Claude Code.

## 🚀 Features

- **⚡ Hono Server** - Ultra-fast web framework for edge computing
- **📦 JSX (React-free)** - Modern JSX syntax without React overhead
- **🎨 Pico CSS** - Classless CSS framework for rapid development
- **☁️ Cloudflare Workers** - Global edge computing platform
- **🧩 Basecoat Components** - Reusable UI components
- **🤖 Agent Optimized** - Designed for token efficiency with AI coding assistants
- **🔧 TypeScript** - Type-safe development
- **📱 Responsive Design** - Mobile-first approach

## 🛠️ Technology Stack

- **Backend**: Hono (Cloudflare Workers)
- **Frontend**: JSX (ultrahtml) - No React dependency
- **Styling**: Pico CSS (classless CSS framework)
- **Deployment**: Cloudflare Workers
- **Language**: TypeScript
- **Components**: Custom Basecoat-style components

## 📁 Project Structure

```
base42/
├── src/
│   ├── api/              # API routes
│   │   └── todos.ts      # Todo API endpoints
│   ├── components/       # Reusable components
│   │   ├── Button.tsx    # Button component
│   │   ├── Card.tsx      # Card component
│   │   ├── Input.tsx     # Input component
│   │   ├── Modal.tsx     # Modal component
│   │   └── index.ts      # Component exports
│   ├── pages/            # Page components
│   │   ├── _layout.tsx   # Root layout
│   │   ├── index.tsx     # Home page
│   │   ├── about.tsx     # About page
│   │   └── todo/         # Todo demo pages
│   │       ├── index.tsx # Todo list page
│   │       └── [id].tsx  # Todo detail page
│   ├── types.ts          # TypeScript types
│   └── index.ts          # Main server file
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── wrangler.toml         # Cloudflare Workers config
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Cloudflare account (for deployment)
- Wrangler CLI (`npm install -g wrangler`)

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <your-repo-url>
   cd base42
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:8787`

### Development Commands

```bash
npm run dev      # Start development server
npm run build    # Type check the project
npm run deploy   # Deploy to Cloudflare Workers
```

## 🌐 Deployment

### Deploy to Cloudflare Workers

1. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

2. **Deploy your application**
   ```bash
   npm run deploy
   ```

3. **Set environment variables (optional)**
   ```bash
   wrangler secret put DATABASE_URL
   wrangler secret put GOOGLE_CLIENT_ID
   wrangler secret put GOOGLE_CLIENT_SECRET
   wrangler secret put SESSION_SECRET
   ```

## 🧩 Components

### Button Component

```tsx
import { Button } from './components'

// Different variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="contrast">Contrast</Button>
<Button variant="outline">Outline</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Card Component

```tsx
import { Card } from './components'

<Card title="Card Title" subtitle="Card description">
  <p>Card content goes here</p>
</Card>
```

### Input Component

```tsx
import { Input } from './components'

<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  required
  helper="We'll never share your email"
/>
```

## 🔌 API Endpoints

### Todo API

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

### Health Check

- `GET /health` - Health check endpoint

## 🎨 Styling

This project uses Pico CSS for styling, which provides:

- **Classless CSS** - Semantic HTML gets great styling automatically
- **Dark Mode** - Built-in dark/light theme switching
- **Responsive Design** - Mobile-first approach
- **Customizable** - CSS variables for easy theming

### Custom Styles

Additional custom styles are defined in the layout component:
- Responsive grid layouts
- Component-specific styling
- Theme switcher functionality

## 🤖 Token Efficiency

This starter kit is specifically designed to be **token-efficient** when working with AI coding assistants:

- **Clear file organization** - Logical structure that's easy to understand
- **Minimal dependencies** - Only essential packages included
- **Simple abstractions** - Easy to modify and extend
- **Consistent patterns** - Predictable code structure throughout
- **Self-documenting code** - Clear naming and minimal complexity
- **Component-based architecture** - Reusable, modular components

## 🛠️ Customization

### Adding New Pages

1. Create a new file in `src/pages/`
2. Export a default component
3. Add the route in `src/index.ts`

```tsx
// src/pages/new-page.tsx
export function NewPage() {
  return <div>New page content</div>
}

// src/index.ts
import { NewPage } from './pages/new-page'
app.get('/new-page', (c) => c.render(<NewPage />))
```

### Adding New API Endpoints

1. Create a new file in `src/api/`
2. Export a Hono router
3. Add the route in `src/index.ts`

```tsx
// src/api/users.ts
export const usersApi = new Hono()
usersApi.get('/', (c) => c.json({ users: [] }))

// src/index.ts
import { usersApi } from './api/users'
app.route('/api/users', usersApi)
```

### Custom Components

Add new components to `src/components/` and export them from `src/components/index.ts`.

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_database_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Deploy to staging
6. Submit a pull request

## 📄 License

MIT License - feel free to use this starter kit for your projects!

## 🆘 Support

If you run into any issues or have questions:

1. Check the [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/)
2. Review the [Hono documentation](https://hono.dev/)
3. Open an issue in this repository

---

Built with ❤️ for the SaaS development community