import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import "nextra-theme-docs/style.css";
import "./globals.css";
import EmptyFooter from "@/components/EmptyFooter";

export const metadata: Metadata = {
  title: "Deepr",
  description: "Deepr Documentation",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<Image src="/logo.svg" alt="Deepr Logo" width={48} height={48} />}
              projectLink="https://github.com/5318008eth/deepr-documentation"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/5318008eth/deepr-documentation/tree/main/docs"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true}}
          footer={<EmptyFooter />}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}