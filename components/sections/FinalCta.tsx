import { Container } from '@/components/ui/Container';
import { CtaLink } from '@/components/ui/CtaLink';

export function FinalCta() {
  return (
    <section className="final-cta">
      <Container>
        <div className="final-cta__inner">
          <h2 className="final-cta__title">
            まず、現状を話してみてください。
          </h2>
          <p className="final-cta__description">
            課題が整理できていなくても構いません。
            <br />
            何から手をつければいいか、一緒に考えます。
          </p>
          <CtaLink href="/contact" variant="primary">
            相談してみる
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
