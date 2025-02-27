import { Metadata } from "next";
import { importPage } from "nextra/pages";
import { useMDXComponents } from "@/mdx-components";

const Wrapper = useMDXComponents().wrapper;

export const metadata: Metadata = {
  title: "Deepr",
  description: "Deepr Documentation"
};

export default async function Page() {
  const result = await importPage(["onepager"]);
  const { default: MDXContent, toc, metadata } = result;
  
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent />
    </Wrapper>
  );
}