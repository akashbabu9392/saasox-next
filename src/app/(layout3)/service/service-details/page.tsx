import { redirect } from "next/navigation";
import { serviceDetailsDb } from "@/db/services";

export default function Page() {
  redirect(`/service/${serviceDetailsDb[0]?.slug ?? "service-details"}`);
}

