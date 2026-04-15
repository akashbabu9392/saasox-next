import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BreadCumb from "@/components/Common/BreadCumb";
import FeatureDetails from "@/components/FeatureDetails/FeatureDetails";
import { featureDetailsDb, getFeatureDetailsBySlug } from "@/db/features";

export function generateStaticParams() {
  return featureDetailsDb.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getFeatureDetailsBySlug(slug);
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
  const data = getFeatureDetailsBySlug(slug);
  if (!data) notFound();
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page-heading-bg.svg"
        Title={data.breadcrumbTitle}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: data.breadcrumbTitle },
        ]}
      />
      <FeatureDetails data={data} />
    </div>
  );
}

