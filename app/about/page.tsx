import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata/site';

export const metadata = createMetadata({
  title: 'About',
  description:
    'Forge Studio の考え方や、この Step で整えている範囲を確認するための仮ページです。',
  pathname: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Step 3 では、ブランドを支える器だけを整える"
        description="このページは本番本文ではなく、今後の Phase でブランドメッセージを載せ替える前提のプレースホルダーです。"
      />
      <Section title="この段階で固定しているもの">
        <div className="panel">
          <ul>
            <li>Next.js 14 / App Router / TypeScript の基盤</li>
            <li>
              serviceCategory / industryTags / toolTags / status の taxonomy
            </li>
            <li>MDX + frontmatter + Zod schema + content abstraction</li>
            <li>主要 route と共通レイアウトの骨格</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
