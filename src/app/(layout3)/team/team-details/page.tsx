import { redirect } from "next/navigation";
import { teamDb } from "@/db/team";

export default function Page() {
  redirect(`/team/${teamDb[0]?.slug ?? "olivia-martinez"}`);
}

