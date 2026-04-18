import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BreadCumb from "@/components/Common/BreadCumb";
import UseCaseDetails from "@/components/UseCaseDetails/UseCaseDetails";
import ScrollReveal from "@/components/Common/ScrollReveal";
import { getUseCaseDetailsBySlug, useCaseDetailsDb } from "@/db/use-cases";

export function generateStaticParams() {
  return useCaseDetailsDb.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getUseCaseDetailsBySlug(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getUseCaseDetailsBySlug(slug);
  if (!data) notFound();
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page-heading-bg.svg"
        Title={data.breadcrumbTitle}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Use Cases", href: "/use-cases" },
          { label: data.breadcrumbTitle },
        ]}
      />
      <ScrollReveal><UseCaseDetails data={data} /></ScrollReveal>
    </div>
  );
}

