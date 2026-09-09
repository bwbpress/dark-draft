import Image from "next/image";
import type { Edition } from "../lib/books";
import { Button } from "./button";

export function EditionItem({ edition }: { edition: Edition }) {
  return (
    <div className="flex gap-4 sm:gap-6 w-full">
      <div className="relative aspect-square shrink-0 overflow-hidden rounded-md w-40 md:w-60">
        <Image
          src={edition.image}
          alt={edition.imageAlt}
          fill
          sizes="(min-width: 640px) 96px, 80px"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col grow gap-4 pt-1">
        <h3 className="border-b border-glow/30 pb-1 text-xl font-display font-bold uppercase tracking-wide text-foreground">
          {edition.name}
          {edition.nameSubtitle && (
            <span className="ml-2 text-sm font-sans font-normal normal-case tracking-normal text-muted">
              {edition.nameSubtitle}
            </span>
          )}
        </h3>
        <p className="text-sm text-muted">
          {edition.isbn ? `ISBN-13: ${edition.isbn.display}` : ""}
        </p>
        {edition.availabilityText &&
          <p className="text-sm text-muted font">
            {edition.availabilityText}
          </p>
        }
        {edition.retailerLinks.length > 0 && (
          <div className="flex flex-col gap-2">
            <h4 className="text-base text-muted font-bold">Available for Preorder on:</h4>
            <div className="flex flex-wrap gap-3 pt-1">
              {edition.retailerLinks.map((link) => (
                <Button
                  key={link.retailer}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  {link.retailer}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
