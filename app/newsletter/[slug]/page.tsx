import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { GlowPanel } from "@/app/components/glow-panel";
import { Button } from "@/app/components/button";
import { FormattedText } from "@/app/components/formatted-text";
import { DEFAULT_SIGNOFF, getAllPromos, getPromoBySlug, type PromoBlock } from "@/app/lib/promos";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPromos().map((promo) => ({ slug: promo.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const promo = getPromoBySlug(slug);
  if (!promo) return {};

  return {
    title: promo.title ?? "Dystro Han",
    alternates: { canonical: `/promo/${promo.slug}` },
    robots: { index: false, follow: true },
  };
}

function renderBlock(block: PromoBlock, i: number) {
  switch (block.type) {
    case "heading":
      return (
        <h1
          key={i}
          className="text-accent-blue text-center font-display text-lg font-semibold uppercase tracking-wide sm:text-xl"
        >
          {block.text}
        </h1>
      );
    case "subheading":
      return (
        <h2 key={i} className="text-center font-display text-xl font-bold text-foreground">
          {block.text}
        </h2>
      );
    case "image":
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          className="h-auto w-full max-w-md"
        />
      );
    case "text":
      return (
        <FormattedText
          key={i}
          text={block.text}
          className={`w-full max-w-3xl text-sm text-foreground ${block.align === "left" ? "text-left" : "text-center"}`}
        />
      );
    case "signoff":
      return (
        <FormattedText
          key={i}
          text={block.text ?? DEFAULT_SIGNOFF}
          className="w-full max-w-3xl text-center text-base text-foreground leading-1 py-8"
          style={{ fontFamily: "Consolas, monaco, monospace" }}
        />
      );
    case "buttons":
      return (
        <div key={i} className="flex flex-wrap items-center justify-center gap-3">
          {block.buttons.map((button) => (
            <Button
              key={button.label}
              href={button.href}
              variant={"teal"}
              size="sm"
              target={button.external === false ? "_self" : "_blank"}
              rel={button.external === false ? undefined : "noopener noreferrer"}
              className="inline-block min-w-40 text-center"
            >
              {button.label}
            </Button>
          ))}
        </div>
      );
  }
}

export default async function PromoPage({ params }: Props) {
  const { slug } = await params;
  const promo = getPromoBySlug(slug);
  if (!promo) notFound();

  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-background">
      {/* <BackgroundImageWithOverlay image="/img/Dystro-Han-BG.jpg" className="mt-40" /> */}
      <div className="relative flex flex-1 flex-col">
        <SiteHeader />
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 sm:px-10 lg:px-0 my-4 lg:my-8">
          <GlowPanel
            as="section"
            id="promo"
            background="gradient"
            border="animated"
            glow
            className="flex w-full max-w-4xl flex-col items-center gap-4 p-4 sm:p-6 sm:pb-10"
          >
            {promo.blocks.map(renderBlock)}
          </GlowPanel>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
