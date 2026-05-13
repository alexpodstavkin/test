import Image from 'next/image';
import { asset } from '@/lib/asset';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-logo">
          <Image
            src={asset('/logo.png')}
            alt="Matrius — онлайн-школа"
            width={180}
            height={48}
            priority
          />
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="summer-stripe">
              <span aria-hidden>☀</span> Летняя программа 2026
            </span>

            <h1>
              Поможем ребёнку <span className="mark-orange">не&nbsp;потерять школьные знания</span> за&nbsp;лето
            </h1>

            <p className="lead">
              С&nbsp;помощью уникальной методологии скорочтения онлайн-школы Matrius
              поможем ребёнку вернуться в&nbsp;школу в&nbsp;сентябре сильнее, чем он&nbsp;ушёл
              в&nbsp;мае.
            </p>

            <a href="#booking" className="btn btn-accent btn-large">
              Записаться
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="hero-photo-wrap">
            <Image
              src={asset('/hero.png')}
              alt="Ребёнок занимается летом по программе Matrius"
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              priority
              style={{ objectFit: 'cover', objectPosition: '50% 12%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
