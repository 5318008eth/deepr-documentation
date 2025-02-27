import { Metadata } from "next";
import { importPage } from "nextra/pages";
import { useMDXComponents } from "@/mdx-components";
import type { NextraMetadata, Heading } from 'nextra';

export const metadata: Metadata = {
  title: "Deepr",
  description: "Deepr Documentation"
};

interface ContentWrapperProps {
  children: React.ReactNode;
  toc: Heading[];
  metadata: NextraMetadata;
}

function ContentWrapper({ children, toc, metadata }: ContentWrapperProps) {
  const { wrapper: Wrapper } = useMDXComponents();
  return <Wrapper toc={toc} metadata={metadata}>{children}</Wrapper>;
}

export default async function Page() {
  const result = await importPage(["onepager"]);
  const { default: MDXContent, toc, metadata } = result;
  
  return (
    <ContentWrapper toc={toc} metadata={metadata}>
      <MDXContent />
    </ContentWrapper>
  );
}