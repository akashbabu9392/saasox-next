import { redirect } from "next/navigation";
import { blogDb } from "@/db/blog";

export default function Page() {
  redirect(`/blog/${blogDb[0]?.slug ?? "blog-details"}`);
}

