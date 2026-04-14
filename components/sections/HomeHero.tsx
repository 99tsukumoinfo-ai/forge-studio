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
              売上の入口から、IT実装、現場への浸透まで。
            </span>
            <span className="home-hero__title-sub">
              中堅中小企業の、実務を回す仕組みづくりを支援します。
            </span>
          </h1>
          <p className="home-hero__description">
            経営判断・売上実務・IT実装まで、中堅中小企業向けに、一気通貫で取り組みます。
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
