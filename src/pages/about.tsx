const html = String.raw

export function getAboutPageHTML() {
  return html`
    <section>
      <hgroup>
        <h1>About Base42</h1>
        <p>ya tifg</p>
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
      <h2>Key Features</h2>
      <div class="grid">
        <div class="card">
          <h4>🔧 Development Ready</h4>
          <p>TypeScript, ESLint, and Prettier pre-configured</p>
        </div>
        <div class="card">
          <h4>🚀 Fast Development</h4>
          <p>Hot reload and instant preview</p>
        </div>
        <div class="card">
          <h4>📱 Responsive Design</h4>
          <p>Mobile-first approach with Pico CSS</p>
        </div>
        <div class="card">
          <h4>🔒 Security Best Practices</h4>
          <p>Built-in security headers and patterns</p>
        </div>
        <div class="card">
          <h4>🎯 SEO Friendly</h4>
          <p>Server-side rendering and meta tags</p>
        </div>
        <div class="card">
          <h4>📊 Performance Optimized</h4>
          <p>Minimal JavaScript and CSS</p>
        </div>
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
  `
}