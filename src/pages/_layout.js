import { Head } from 'hono/jsx'

type LayoutProps = {
  children?: any
  title?: string
}

export function Layout({ children, title = 'Base42 SaaS Starter' }: LayoutProps) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>

        {/* Pico CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />

        {/* Custom styles for token efficiency */}
        <style>
          {`
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

            @media (max-width: 768px) {
              .nav-links {
                flex-direction: column;
                gap: 0.5rem;
              }

              nav {
                flex-direction: column;
                gap: 1rem;
              }
            }
          `}
        </style>
      </Head>
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
                  <button
                    role="button"
                    data-theme-switcher="true"
                    aria-label="Toggle theme"
                  >
                    <
                  </button>
                </li>
              </ul>
            </nav>
          </header>

          <main>
            {children}
          </main>

          <footer style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid var(--muted-border-color)', textAlign: 'center' }}>
            <p>&copy; 2025 Base42 SaaS Starter. Built with Hono, JSX, and Pico CSS.</p>
          </footer>
        </div>

        {/* Theme switcher script */}
        <script>
          {`
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
          `}
        </script>
      </body>
    </html>
  )
}
