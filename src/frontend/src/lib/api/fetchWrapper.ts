import { notFound } from "next/navigation";

export async function fetchWith404Check<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (response.status === 404) notFound();
  if (!response.ok) {
    throw new Error(
      `Fetch failed with status: ${response.status} — ${response.statusText}`,
    );
  }

  return response.json();
}
