import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BreadCumb from "@/components/Common/BreadCumb";
import TeamDetails from "@/components/TeamDetails/TeamDetails";
import { getTeamMemberBySlug, teamDb } from "@/db/team";

export function generateStaticParams() {
  return teamDb.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const data = getTeamMemberBySlug(params.slug);
  if (!data) return {};
  return {
    title: data.name,
    description: data.role,
    openGraph: {
      title: data.name,
      description: data.role,
      images: [data.imageSrc],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = getTeamMemberBySlug(params.slug);
  if (!data) notFound();
  return (
    <div>
      <BreadCumb bgimg="/assets/img/page-heading-bg.svg" Title="Team Details" />
      <TeamDetails data={data} />
    </div>
  );
}

