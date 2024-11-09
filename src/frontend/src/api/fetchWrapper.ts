import { notFound } from "next/navigation";

export async function fetchWith404Check<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(url, options);

  // if (response.status === 500) {
  //   throw new Error();
  // }

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error(`Fetch failed with status: ${response.status}`);
  }

  const data: T = await response.json();

  return data;
}
