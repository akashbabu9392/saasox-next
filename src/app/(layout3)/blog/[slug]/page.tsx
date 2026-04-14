import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BreadCumb from "@/components/Common/BreadCumb";
import BlogDetails from "@/components/BlogDetails/BlogDetails";
import { blogDb, getBlogPostBySlug } from "@/db/blog";

export function generateStaticParams() {
  return blogDb.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const data = getBlogPostBySlug(params.slug);
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
  const data = getBlogPostBySlug(params.slug);
  if (!data) notFound();
  return (
    <div>
      <BreadCumb bgimg="/assets/img/page-heading-bg.svg" Title={data.breadcrumbTitle} />
      <BlogDetails data={data} />
    </div>
  );
}

