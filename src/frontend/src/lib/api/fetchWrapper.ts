import { notFound } from "next/navigation";

type FetchWith404CheckOptions = RequestInit & {
  revalidate?: number;
};

export async function fetchWith404Check<T>(
  url: string,
  options?: FetchWith404CheckOptions,
): Promise<T> {
  const { revalidate, ...fetchOptions } = options || {};

  const response = await fetch(url, {
    ...fetchOptions,
    next: revalidate ? { revalidate } : undefined,
    headers: {
      "Content-Type": "application/json",
      ...(fetchOptions.headers || {}),
    },
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error(
      `Fetch failed with status: ${response.status} — ${response.statusText}`,
    );
  }

  return response.json();
}
