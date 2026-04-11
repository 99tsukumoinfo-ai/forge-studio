import { Container } from '@/components/ui/Container';
import { CtaLink } from '@/components/ui/CtaLink';

export function HomeHero() {
  return (
    <section className="home-hero">
      <Container>
        <div className="home-hero__inner">
          <h1 className="home-hero__title">
            <span className="home-hero__title-main">
              経営判断を、利益の流れに変える。
            </span>
            <span className="home-hero__title-sub">
              経営判断を、動く実務に変える。
            </span>
            <span className="home-hero__title-sub">
              マーケティングからIT実装まで、利益につながる順番で、動かす。
            </span>
          </h1>
          <p className="home-hero__description">
            経営判断から、売上、IT実装まで。
            <br />
            実務を整え、現場で回る仕組みに。
          </p>
          <div className="home-hero__actions">
            <CtaLink href="/contact" variant="primary">
              相談してみる
            </CtaLink>
            <CtaLink href="/services" variant="secondary">
              サービスを見る
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
