import { Container } from '@/components/ui/Container';
import { CtaLink } from '@/components/ui/CtaLink';

export function HomeHero() {
  return (
    <section className="home-hero">
      <Container>
        <div className="home-hero__inner">
          <h1 className="home-hero__title">
            新規取引の、取りこぼしを止める。
          </h1>
          <p className="home-hero__subcopy">
            新規客に何を頼める会社か伝わる入口をつくり、
            <br />
            入ってきた問い合わせを、相談・面談・契約まで届ける。
            <br />
            <span className="home-hero__subcopy-company">
              Forge Studioは、新規取引の入口と途中の取りこぼしを改善する会社です。
            </span>
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
