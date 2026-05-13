import { hero, eventDate, footer } from '@/lib/content'
import { IconArrow, IconCalendar } from './icons'

export default function FinalCta() {
  return (
    <section id="register" className="section">
      <div className="container-zc">
        <div className="card card-dark p-6 md:p-8 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-5">
                <span className="pill pill-emerald">
                  <IconCalendar /> {eventDate}
                </span>
              </div>

              <h2 className="h1 mb-5" style={{ color: 'var(--n-white)' }}>
                {hero.title.pre}{' '}
                <span style={{ color: 'var(--accent-heliotrope)' }}>{hero.title.accent.replace(/ /g, ' ')}</span>
                {hero.title.mid}
                <span className="whitespace-nowrap">{hero.title.nowrap.replace(/ /g, ' ')}</span>
                {hero.title.post}
              </h2>
              <p className="lead max-w-xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {hero.lead}
              </p>
            </div>

            <div className="lg:col-span-5">
              <form className="rounded-2xl p-6 md:p-7 space-y-4" style={{ background: 'var(--n-white)' }}>
                <div>
                  <label className="label">Имя</label>
                  <input type="text" name="name" placeholder="Анна" required className="input" />
                </div>
                <div>
                  <label className="label">Почта</label>
                  <input type="email" name="email" placeholder="anna@example.com" required className="input" />
                </div>
                <div>
                  <label className="label">Номер</label>
                  <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required className="input" />
                </div>
                <button type="submit" className="btn btn-cta btn-block">
                  {hero.cta}
                  <IconArrow />
                </button>
                <p className="caption">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href={footer.policy} className="accent underline">политикой обработки персональных данных</a> и{' '}
                  <a href={footer.terms} className="accent underline">офертой</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
