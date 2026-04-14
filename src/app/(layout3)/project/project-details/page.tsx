import { redirect } from "next/navigation";
import { projectDetailsDb } from "@/db/projects";

export default function Page() {
  redirect(`/project/${projectDetailsDb[0]?.slug ?? "project-details"}`);
}

