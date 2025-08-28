// next-custom.d.ts

import "next";

declare module "next" {
  interface PageProps {
    params: { slug: string };
  }
}
