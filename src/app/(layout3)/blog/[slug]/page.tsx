import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BreadCumb from "@/components/Common/BreadCumb";
import BlogDetails from "@/components/BlogDetails/BlogDetails";
import { blogDb, getBlogPostBySlug } from "@/db/blog";

export function generateStaticParams() {
  return blogDb.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getBlogPostBySlug(slug);
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

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getBlogPostBySlug(slug);
  if (!data) notFound();
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page-heading-bg.svg"
        Title={data.breadcrumbTitle}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/blog" },
          { label: data.breadcrumbTitle },
        ]}
      />
      <BlogDetails data={data} />
    </div>
  );
}

