import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BreadCumb from "@/components/Common/BreadCumb";
import ServiceDetails from "@/components/SerciceDetails/ServiceDetails";
import { getServiceDetailsBySlug, serviceDetailsDb } from "@/db/services";

export function generateStaticParams() {
  return serviceDetailsDb.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const data = getServiceDetailsBySlug(params.slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      images: [data.bannerImageSrc],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = getServiceDetailsBySlug(params.slug);
  if (!data) notFound();
  return (
    <div>
      <BreadCumb bgimg="/assets/img/page-heading-bg.svg" Title={data.breadcrumbTitle} />
      <ServiceDetails data={data} />
    </div>
  );
}

