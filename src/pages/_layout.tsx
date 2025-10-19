const html = String.raw

export function getLayoutHTML(title: string, content: string) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
      <style>
        :root {
          --spacing: 1rem;
          --block-spacing-vertical: 2.5rem;
          --block-spacing-horizontal: 1rem;

          /* Cluely.com color scheme */
          --primary-blue: #2563eb;
          --bg-primary: #ffffff;
          --bg-secondary: #F2F4F9;
          --gray-20: #e5e7eb;
          --gray-40: #9ca3af;
          --gray-50: #6b7280;
          --gray-60: #4b5563;
          --gray-70: #374151;
          --accent-green: #42DB7F;

          /* Update Pico CSS variables */
          --primary: var(--primary-blue);
          --primary-hover: #1d4ed8;
          --background-color: var(--bg-primary);
          --muted-color: var(--gray-50);
          --muted-border-color: var(--gray-20);
          --card-background-color: var(--bg-primary);
          --card-border-color: var(--gray-20);
          --form-element-background-color: var(--bg-primary);
          --form-element-border-color: var(--gray-20);
          --form-element-active-border-color: var(--primary-blue);
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          background: var(--bg-primary);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 2rem;
          }
        }

        header {
          border-bottom: 1px solid var(--gray-20);
          margin-bottom: var(--block-spacing-vertical);
          background: var(--bg-primary);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.875rem 0;
        }

        .logo {
          font-size: 1.875rem;
          font-weight: 700;
          color: var(--gray-70);
          letter-spacing: -0.025em;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          color: var(--gray-60);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease-in-out;
        }

        .nav-links a:hover {
          color: var(--primary-blue);
        }

        .card {
          border: 1px solid var(--gray-20);
          border-radius: 8px;
          padding: 1.125rem;
          margin-bottom: 1rem;
          background: var(--bg-primary);
          transition: all 0.2s ease-in-out;
        }

        .card:hover {
          border-color: var(--gray-40);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .btn-group {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.75rem;
        }
        /* Button styling */
        button[role="button"], a[role="button"] {
          padding: 0.625rem 1.25rem;
          border-radius: 6px;
          font-weight: 500;
          transition: all 0.2s ease-in-out;
          border: 1px solid transparent;
          cursor: pointer;
        }

        button[role="button"].primary, a[role="button"].primary {
          background: var(--primary-blue);
          color: white;
        }

        button[role="button"].primary:hover, a[role="button"].primary:hover {
          background: var(--primary-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        }

        button[role="button"].secondary, a[role="button"].secondary {
          background: transparent;
          color: var(--gray-60);
          border: 1px solid var(--gray-20);
        }

        button[role="button"].secondary:hover, a[role="button"].secondary:hover {
          background: var(--gray-20);
          color: var(--gray-70);
        }

        /* Typography improvements */
        h1, h2, h3, h4, h5, h6 {
          color: var(--gray-70);
          letter-spacing: -0.025em;
          line-height: 1.2;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 700;
        }

        h2 {
          font-size: 2rem;
          font-weight: 600;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 600;
        }

        p {
          color: var(--gray-50);
          line-height: 1.7;
        }

        /* Theme switcher improvements */
        button[data-theme-switcher] {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 6px;
          background: var(--gray-20);
          border: 1px solid var(--gray-20);
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        button[data-theme-switcher]:hover {
          background: var(--gray-40);
          border-color: var(--gray-40);
        }

        @media (max-width: 768px) {
          .nav-links {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          nav {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }
          .container {
            padding: 0 1rem;
          }
          h1 {
            font-size: 2rem;
          }
          h2 {
            font-size: 1.75rem;
          }
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
                <button
                  role="button"
                  data-theme-switcher="true"
                  aria-label="Toggle theme"
                >
                  🌓
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          ${content}
        </main>

        <footer style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--gray-20); text-align: center;">
          <p style="color: var(--gray-50); font-size: 0.875rem;">&copy; 2024 Base42 SaaS Starter. Built with Hono, JSX, and Pico CSS.</p>
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
  `
}