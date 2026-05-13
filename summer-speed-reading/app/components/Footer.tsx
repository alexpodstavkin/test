export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--surface-soft)',
      }}
    >
      <div
        className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ paddingTop: 28, paddingBottom: 28, fontSize: 13, color: 'var(--ink-3)' }}
      >
        <div className="flex items-center gap-3">
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: 'linear-gradient(135deg, var(--venice-blue), var(--ship-cove))',
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            M
          </div>
          <span style={{ color: 'var(--ink)', fontWeight: 600 }}>Matrius</span>
          <span>· hello@matrius.online</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="hover:opacity-70">Политика конфиденциальности</a>
          <a href="#" className="hover:opacity-70">Договор-оферта</a>
        </div>
        <div>© 2026 Matrius</div>
      </div>
    </footer>
  )
}
