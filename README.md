# forge-studio-site

Forge Studio サイト再設計の Step 3 用リポジトリです。  
この段階では本文や最終デザインを作り込まず、v6.1 に準拠した Next.js 基盤を整えることを目的にしています。

## 前提

- Node.js 20 LTS
- pnpm 9
- Next.js 14 / App Router / TypeScript

ローカル開発前に、Node と pnpm のバージョンを合わせてください。

## セットアップ

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

問い合わせフォームの送信先は必須です。`NEXT_PUBLIC_FORMSUBMIT_ACTION` が未設定だと build / preview で明確に失敗します。

```bash
NEXT_PUBLIC_SITE_URL=https://forge-studio-site.vercel.app
NEXT_PUBLIC_FORMSUBMIT_ACTION=https://formsubmit.co/replace-with-your-address
```

## ディレクトリ構造

```text
app/
  layout.tsx
  page.tsx
  services/
  industries/
  tools/
  cases/
  insights/
  about/
  contact/

content/
  pages/
    services/
    industries/
    tools/
  cases/
  insights/

components/
  site/
  ui/
  sections/
  cards/

lib/
  content/
  metadata/
  utils/

styles/
public/
  images/
```

## content の更新ルール

- page から直接 MDX を読まない
- すべて `lib/content/index.ts` 経由で取得する
- frontmatter は `lib/content/schema.ts` の Zod schema に厳密一致させる
- typo や未知の taxonomy 値は build error にする
- service / industry / tool の slug は v6.1 の固定値に合わせる
- 公開導線の既定挙動は `published` のみ
- insight は単独で置かず、serviceCategory / toolTags / industryTags を必須で持たせる

## frontmatter の必須項目

以下は全 content で必須です。

```text
title
slug
description
excerpt
serviceCategory
toolTags
industryTags
status
publishedAt
updatedAt
ogImage
```

以下は任意です。

```text
primaryTargetPage
secondaryTargetPages
relatedCaseSlugs
relatedInsightSlugs
```

## taxonomy の基準値

### serviceCategory

- `customer-communication`
- `sales-crm-support`
- `internal-operations`
- `backoffice-automation`
- `web-ec-store`

### industryTags

- `manufacturing`
- `clinic`
- `salon`
- `restaurant`
- `professional-services`
- `retail-services`
- `common`
- `multi-industry`
- `smb-general`

### toolTags

- `line`
- `wordpress`
- `kintone`
- `google-workspace`
- `accounting-hr`

### status

- `draft`
- `published`
- `archived`

日本語ラベルの対応は `lib/content/taxonomy.ts` を参照してください。

## 主要コマンド

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm format
pnpm format:check
```

## 今後のフェーズ

- Step 4: デザイントークンとトップページの具体化
- Step 5: services / industries / tools の本文整理
- Step 6: case / insight テンプレートの拡張
- Step 7: preview / staging 前提の運用整備
