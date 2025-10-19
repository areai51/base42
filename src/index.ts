import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { todosApi } from './api/todos'
import type { Env } from './types'

const app = new Hono<{ Bindings: Env }>()

// Static assets
app.get('/static/*', serveStatic({ root: './' }))

// API routes
app.route('/api/todos', todosApi)

// Health check
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Home page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Base42 SaaS Starter</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
      <style>
        :root {
          --spacing: 1rem;
          --block-spacing-vertical: 2rem;
          --block-spacing-horizontal: 1rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--block-spacing-horizontal);
        }
        header {
          border-bottom: 1px solid var(--muted-border-color);
          margin-bottom: var(--block-spacing-vertical);
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-links {
          display: flex;
          gap: 1rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .card {
          border: 1px solid var(--muted-border-color);
          border-radius: var(--border-radius);
          padding: var(--spacing);
          margin-bottom: var(--spacing);
        }
        .btn-group {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <nav>
            <div class="logo">Base42</div>
            <ul class="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/todo">Demo</a></li>
              <li><a href="/about">About</a></li>
              <li>
                <button role="button" data-theme-switcher="true" aria-label="Toggle theme">
                  🌓
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section style="text-align: center; padding: 3rem 0;">
            <hgroup>
              <h1>Base42 SaaS Starter</h1>
              <p>Token-efficient foundation for building SaaS applications with Claude Code</p>
            </hgroup>
            <div class="btn-group" style="justify-content: center;">
              <button role="button" class="primary">Get Started</button>
              <button role="button" class="secondary" outline>View Demo</button>
            </div>
          </section>

          <section>
            <h2>Features</h2>
            <div class="grid">
              <div class="card">
                <h3>🚀 Hono Server</h3>
                <p>Fast, lightweight web framework optimized for Cloudflare Workers</p>
              </div>
              <div class="card">
                <h3>⚛️ JSX Components</h3>
                <p>Modern JSX without React dependency for better token efficiency</p>
              </div>
              <div class="card">
                <h3>🎨 Pico CSS</h3>
                <p>Minimalist CSS framework for rapid development</p>
              </div>
              <div class="card">
                <h3>☁️ Cloudflare Ready</h3>
                <p>Deploy globally with Cloudflare Workers for instant scale</p>
              </div>
              <div class="card">
                <h3>🤖 Agent Optimized</h3>
                <p>Built with Claude Code and other AI agents in mind</p>
              </div>
              <div class="card">
                <h3>🔧 Basecoat Components</h3>
                <p>Pre-built UI components for rapid development</p>
              </div>
            </div>
          </section>

          <section style="margin-top: 3rem;">
            <h2>Quick Start</h2>
            <div class="card">
              <h3>1. Install Dependencies</h3>
              <pre><code>npm install</code></pre>
            </div>
            <div class="card">
              <h3>2. Start Development</h3>
              <pre><code>npm run dev</code></pre>
            </div>
            <div class="card">
              <h3>3. Deploy to Cloudflare</h3>
              <pre><code>npm run deploy</code></pre>
            </div>
          </section>

          <section style="margin-top: 3rem; text-align: center;">
            <h2>Ready to build?</h2>
            <p>Start customizing this starter kit to match your SaaS requirements.</p>
            <div class="btn-group" style="justify-content: center;">
              <a href="/about" role="button" class="primary">Learn More</a>
            </div>
          </section>
        </main>

        <footer style="margin-top: 3rem; padding-top: 1rem; border-top: 1px solid var(--muted-border-color); text-align: center;">
          <p>&copy; 2025 Base42 SaaS Starter. Built with Hono, JSX, and Pico CSS.</p>
        </footer>
      </div>

      <script>
        const themeSwitcher = document.querySelector('[data-theme-switcher]');
        const html = document.documentElement;

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);

        themeSwitcher?.addEventListener('click', () => {
          const currentTheme = html.getAttribute('data-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

          html.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);
        });
      </script>
    </body>
    </html>
  `)
})

// About page
app.get('/about', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About Base42</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
      <style>
        :root {
          --spacing: 1rem;
          --block-spacing-vertical: 2rem;
          --block-spacing-horizontal: 1rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--block-spacing-horizontal);
        }
        header {
          border-bottom: 1px solid var(--muted-border-color);
          margin-bottom: var(--block-spacing-vertical);
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-links {
          display: flex;
          gap: 1rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .card {
          border: 1px solid var(--muted-border-color);
          border-radius: var(--border-radius);
          padding: var(--spacing);
          margin-bottom: var(--spacing);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <nav>
            <div class="logo">Base42</div>
            <ul class="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/todo">Demo</a></li>
              <li><a href="/about">About</a></li>
              <li>
                <button role="button" data-theme-switcher="true" aria-label="Toggle theme">
                  🌓
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section>
            <hgroup>
              <h1>About Base42</h1>
              <p>The foundation for your next SaaS application</p>
            </hgroup>
          </section>

          <section>
            <h2>Technology Stack</h2>
            <div class="grid">
              <div class="card">
                <h3>⚡ Hono</h3>
                <p>Ultra-fast web framework for edge computing</p>
                <small>Perfect for Cloudflare Workers</small>
              </div>
              <div class="card">
                <h3>📦 JSX (React-free)</h3>
                <p>Modern JSX syntax without React overhead</p>
                <small>Better performance and smaller bundle</small>
              </div>
              <div class="card">
                <h3>🎨 Pico CSS</h3>
                <p>Classless CSS framework</p>
                <small>Write semantic HTML, get great styling</small>
              </div>
              <div class="card">
                <h3>☁️ Cloudflare Workers</h3>
                <p>Global edge computing platform</p>
                <small>Instant scale and great performance</small>
              </div>
            </div>
          </section>

          <section>
            <h2>Token Efficiency Design</h2>
            <div class="card">
              <p>This starter kit is specifically designed to be <strong>token-efficient</strong> when working with AI coding assistants like Claude Code:</p>
              <ul>
                <li><strong>Clear file organization</strong> - Logical structure that's easy to understand</li>
                <li><strong>Minimal dependencies</strong> - Only essential packages included</li>
                <li><strong>Simple abstractions</strong> - Easy to modify and extend</li>
                <li><strong>Consistent patterns</strong> - Predictable code structure throughout</li>
                <li><strong>Self-documenting code</strong> - Clear naming and minimal complexity</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Get Started</h2>
            <div class="card">
              <p>Ready to build your SaaS application? This starter kit provides everything you need to get started quickly.</p>
              <div class="btn-group">
                <a href="/" role="button" class="primary">Back to Home</a>
                <a href="https://github.com/yourusername/base42" role="button" class="secondary" outline>View on GitHub</a>
              </div>
            </div>
          </section>
        </main>

        <footer style="margin-top: 3rem; padding-top: 1rem; border-top: 1px solid var(--muted-border-color); text-align: center;">
          <p>&copy; 2024 Base42 SaaS Starter. Built with Hono, JSX, and Pico CSS.</p>
        </footer>
      </div>

      <script>
        const themeSwitcher = document.querySelector('[data-theme-switcher]');
        const html = document.documentElement;

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);

        themeSwitcher?.addEventListener('click', () => {
          const currentTheme = html.getAttribute('data-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

          html.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);
        });
      </script>
    </body>
    </html>
  `)
})

// Todo demo page
app.get('/todo', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>wwTodo Demo - Base42</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
      <style>
        :root {
          --spacing: 1rem;
          --block-spacing-vertical: 2rem;
          --block-spacing-horizontal: 1rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--block-spacing-horizontal);
        }
        header {
          border-bottom: 1px solid var(--muted-border-color);
          margin-bottom: var(--block-spacing-vertical);
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-links {
          display: flex;
          gap: 1rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .card {
          border: 1px solid var(--muted-border-color);
          border-radius: var(--border-radius);
          padding: var(--spacing);
          margin-bottom: var(--spacing);
        }
        .todo-item {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          border: 1px solid var(--muted-border-color);
          border-radius: var(--border-radius);
          margin-bottom: 0.5rem;
        }
        .todo-item input[type="checkbox"] {
          margin-right: 0.75rem;
        }
        .todo-item span {
          flex: 1;
        }
        .todo-item .btn-group {
          margin-top: 0;
        }
        .btn-group {
          display: flex;
          gap: 0.5rem;
        }
        code {
          background-color: var(--code-background-color);
          padding: 0.125rem 0.25rem;
          border-radius: var(--border-radius);
          font-size: 0.875em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <nav>
            <div class="logo">Base42</div>
            <ul class="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/todo">Demo</a></li>
              <li><a href="/about">About</a></li>
              <li>
                <button role="button" data-theme-switcher="true" aria-label="Toggle theme">
                  🌓
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section>
            <hgroup>
              <h1>xxTodo List Demo</h1>
              <p>xxInteractive demo using the Basecoat components</p>
            </hgroup>
          </section>

          <section>
            <div class="card">
              <h3>Add New Task</h3>
              <p>Create a new todo item</p>
              <label for="task-title">Task Title</label>
              <input type="text" id="task-title" name="task-title" placeholder="Enter your task...">
              <small>What needs to be done?</small>

              <div class="btn-group">
                <button role="button" class="primary">Add Task</button>
                <button role="button" class="secondary">Clear</button>
              </div>
            </div>

            <div class="card">
              <h3>Current Tasks</h3>
              <p>Manage your todo items</p>

              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <div class="todo-item">
                  <input type="checkbox" checked readonly>
                  <span style="text-decoration: line-through;">Set up Hono server</span>
                  <div class="btn-group" style="margin-left: 0.5rem;">
                    <button role="button" class="secondary" style="font-size: 0.875rem; padding: 0.5rem 1rem;">Edit</button>
                    <button role="button" class="contrast" style="font-size: 0.875rem; padding: 0.5rem 1rem;">Delete</button>
                  </div>
                </div>

                <div class="todo-item">
                  <input type="checkbox" checked readonly>
                  <span style="text-decoration: line-through;">Create JSX components</span>
                  <div class="btn-group" style="margin-left: 0.5rem;">
                    <button role="button" class="secondary" style="font-size: 0.875rem; padding: 0.5rem 1rem;">Edit</button>
                    <button role="button" class="contrast" style="font-size: 0.875rem; padding: 0.5rem 1rem;">Delete</button>
                  </div>
                </div>

                <div class="todo-item">
                  <input type="checkbox">
                  <span>Add Pico CSS styling</span>
                  <div class="btn-group" style="margin-left: 0.5rem;">
                    <button role="button" class="secondary" style="font-size: 0.875rem; padding: 0.5rem 1rem;">Edit</button>
                    <button role="button" class="contrast" style="font-size: 0.875rem; padding: 0.5rem 1rem;">Delete</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <h3>Component Examples</h3>
              <p>Different component variants</p>

              <div style="margin-bottom: 1rem;">
                <h4>Button Variants</h4>
                <div class="btn-group" style="flex-wrap: wrap; margin-top: 0.5rem;">
                  <button role="button" class="primary">Primary</button>
                  <button role="button" class="secondary">Secondary</button>
                  <button role="button" class="contrast">Contrast</button>
                </div>
              </div>

              <div style="margin-bottom: 1rem;">
                <h4>Input States</h4>
                <div style="display: grid; gap: 1rem; margin-top: 0.5rem;">
                  <div>
                    <label for="normal-input">Normal Input</label>
                    <input type="text" id="normal-input" placeholder="Type something...">
                  </div>
                  <div>
                    <label for="required-input">Required Input <span style="color: var(--del-color);">*</span></label>
                    <input type="text" id="required-input" placeholder="This field is required" required>
                  </div>
                  <div>
                    <label for="disabled-input">Disabled Input</label>
                    <input type="text" id="disabled-input" value="Cannot edit this" disabled>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <h3>API Integration</h3>
              <p>This page connects to the REST API</p>
              <p>The todo list above is a static example. In a real application, you would:</p>
              <ul>
                <li>Fetch todos from <code>GET /api/todos</code></li>
                <li>Create new todos with <code>POST /api/todos</code></li>
                <li>Update todos with <code>PUT /api/todos/:id</code></li>
                <li>Delete todos with <code>DELETE /api/todos/:id</code></li>
              </ul>

              <a href="/" role="button" class="primary">Back to Home</a>
            </div>
          </section>
        </main>

        <footer style="margin-top: 3rem; padding-top: 1rem; border-top: 1px solid var(--muted-border-color); text-align: center;">
          <p>&copy; 2025 Base42 SaaS Starter. Built with Hono, JSX, and Pico CSS.</p>
        </footer>
      </div>

      <script>
        const themeSwitcher = document.querySelector('[data-theme-switcher]');
        const html = document.documentElement;

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);

        themeSwitcher?.addEventListener('click', () => {
          const currentTheme = html.getAttribute('data-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

          html.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);
        });

        // Simple todo functionality
        const taskInput = document.getElementById('task-title');
        const addTaskBtn = document.querySelector('button:has-text("Add Task")');
        const clearBtn = document.querySelector('button:has-text("Clear")');

        if (addTaskBtn) {
          addTaskBtn.addEventListener('click', () => {
            const title = taskInput.value.trim();
            if (title) {
              alert('Task added: ' + title);
              taskInput.value = '';
            }
          });
        }

        if (clearBtn) {
          clearBtn.addEventListener('click', () => {
            taskInput.value = '';
          });
        }
      </script>
    </body>
    </html>
  `)
})

// 404 handler
app.notFound((c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>404 - Page Not Found</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
    </head>
    <body style="text-align: center; padding: 2rem;">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/">Go Home</a>
    </body>
    </html>
  `)
})

export default app
