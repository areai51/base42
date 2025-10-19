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
  <link rel="stylesheet" href="/styles.css">
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
          <p style="color: var(--gray-50); font-size: 0.875rem;">&copy; 2025 Base42 SaaS Starter. Built with Hono, JSX, and Pico CSS.</p>
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
