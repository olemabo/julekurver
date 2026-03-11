"use server";
import { djangoFetch } from "@/lib/api/django-fetch";

export async function sendFeedback(message: string) {
  await djangoFetch("/api/feedback/", {
    method: "POST",
    body: JSON.stringify({ message }),
  });
}
