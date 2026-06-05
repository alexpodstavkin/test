export default function Footer() {
  return (
    <footer style={{ background: '#F4F6FA', borderTop: '1px solid #E2E6EE' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '28px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <p className="caption">
          ООО «Зерокодер» · ИНН 9715401631 · ОГРН 1217700246026
        </p>
        <p className="caption">
          Лицензия на образовательную деятельность №Л035-01298-77/00625369 · Резидент Сколково
        </p>
      </div>
    </footer>
  );
}
