import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BreadCumb from "@/components/Common/BreadCumb";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import { getProjectDetailsBySlug, projectDetailsDb } from "@/db/projects";

export function generateStaticParams() {
  return projectDetailsDb.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const data = getProjectDetailsBySlug(params.slug);
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
  const data = getProjectDetailsBySlug(params.slug);
  if (!data) notFound();
  return (
    <div>
      <BreadCumb bgimg="/assets/img/page-heading-bg.svg" Title={data.breadcrumbTitle} />
      <ProjectDetails data={data} />
    </div>
  );
}

