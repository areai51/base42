const html = String.raw

export function getHomePageHTML() {
  return html`
    <section style="text-align: center; padding: 4rem 0;">
      <hgroup>
        <h1 style="font-size: 3rem; margin-bottom: 1rem; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Base42 SaaS Starter</h1>
        <p style="font-size: 1.25rem; color: var(--gray-50); max-width: 600px; margin: 0 auto 2rem;">Token-efficient foundation for building SaaS applications with Claude Code and modern web technologies</p>
      </hgroup>
      <div class="btn-group" style="justify-content: center;">
        <button role="button" class="primary">Get Started</button>
        <button role="button" class="secondary">View Demo</button>
      </div>
    </section>

    <section style="margin: 4rem 0;">
      <h2 style="text-align: center; margin-bottom: 3rem; font-size: 2.25rem;">Features</h2>
      <div class="grid">
        <div class="card" style="padding: 2rem; border-radius: 12px; border: 1px solid var(--gray-20); transition: all 0.3s ease-in-out;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🚀</div>
          <h3 style="margin-bottom: 0.75rem;">Hono Server</h3>
          <p style="color: var(--gray-50); line-height: 1.6;">Fast, lightweight web framework optimized for Cloudflare Workers with excellent performance</p>
        </div>
        <div class="card" style="padding: 2rem; border-radius: 12px; border: 1px solid var(--gray-20); transition: all 0.3s ease-in-out;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">⚛️</div>
          <h3 style="margin-bottom: 0.75rem;">JSX Components</h3>
          <p style="color: var(--gray-50); line-height: 1.6;">Modern JSX without React dependency for better token efficiency and faster builds</p>
        </div>
        <div class="card" style="padding: 2rem; border-radius: 12px; border: 1px solid var(--gray-20); transition: all 0.3s ease-in-out;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎨</div>
          <h3 style="margin-bottom: 0.75rem;">Pico CSS</h3>
          <p style="color: var(--gray-50); line-height: 1.6;">Minimalist CSS framework for rapid development with semantic styling</p>
        </div>
        <div class="card" style="padding: 2rem; border-radius: 12px; border: 1px solid var(--gray-20); transition: all 0.3s ease-in-out;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">☁️</div>
          <h3 style="margin-bottom: 0.75rem;">Cloudflare Ready</h3>
          <p style="color: var(--gray-50); line-height: 1.6;">Deploy globally with Cloudflare Workers for instant scale and edge computing</p>
        </div>
        <div class="card" style="padding: 2rem; border-radius: 12px; border: 1px solid var(--gray-20); transition: all 0.3s ease-in-out;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🤖</div>
          <h3 style="margin-bottom: 0.75rem;">Agent Optimized</h3>
          <p style="color: var(--gray-50); line-height: 1.6;">Built with Claude Code and other AI agents in mind for seamless development</p>
        </div>
        <div class="card" style="padding: 2rem; border-radius: 12px; border: 1px solid var(--gray-20); transition: all 0.3s ease-in-out;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔧</div>
          <h3 style="margin-bottom: 0.75rem;">Basecoat Components</h3>
          <p style="color: var(--gray-50); line-height: 1.6;">Pre-built UI components for rapid development and consistent design</p>
        </div>
      </div>
    </section>

    <section style="margin: 4rem 0; background: var(--bg-secondary); padding: 3rem 2rem; border-radius: 16px;">
      <h2 style="text-align: center; margin-bottom: 3rem; font-size: 2.25rem;">Quick Start</h2>
      <div class="grid" style="max-width: 900px; margin: 0 auto;">
        <div class="card" style="background: var(--bg-primary); border: 1px solid var(--gray-20); border-radius: 12px; text-align: center;">
          <div style="background: var(--primary-blue); color: white; width: 3rem; height: 3rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-weight: 700; font-size: 1.25rem;">1</div>
          <h3 style="margin-bottom: 1rem;">Install Dependencies</h3>
          <pre style="background: var(--gray-20); padding: 1rem; border-radius: 6px; text-align: left; overflow-x: auto;"><code>npm install</code></pre>
        </div>
        <div class="card" style="background: var(--bg-primary); border: 1px solid var(--gray-20); border-radius: 12px; text-align: center;">
          <div style="background: var(--primary-blue); color: white; width: 3rem; height: 3rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-weight: 700; font-size: 1.25rem;">2</div>
          <h3 style="margin-bottom: 1rem;">Start Development</h3>
          <pre style="background: var(--gray-20); padding: 1rem; border-radius: 6px; text-align: left; overflow-x: auto;"><code>npm run dev</code></pre>
        </div>
        <div class="card" style="background: var(--bg-primary); border: 1px solid var(--gray-20); border-radius: 12px; text-align: center;">
          <div style="background: var(--primary-blue); color: white; width: 3rem; height: 3rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-weight: 700; font-size: 1.25rem;">3</div>
          <h3 style="margin-bottom: 1rem;">Deploy to Cloudflare</h3>
          <pre style="background: var(--gray-20); padding: 1rem; border-radius: 6px; text-align: left; overflow-x: auto;"><code>npm run deploy</code></pre>
        </div>
      </div>
    </section>

    <section style="margin: 4rem 0; text-align: center; padding: 3rem 0;">
      <h2 style="margin-bottom: 1.5rem; font-size: 2.25rem;">Ready to build?</h2>
      <p style="font-size: 1.125rem; color: var(--gray-50); max-width: 600px; margin: 0 auto 2.5rem;">Start customizing this starter kit to match your SaaS requirements and deploy your application in minutes.</p>
      <div class="btn-group" style="justify-content: center;">
        <a href="/about" role="button" class="primary">Learn More</a>
      </div>
    </section>
  `
}