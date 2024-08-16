import { BookData } from "@/types";

export default async function fetchRandomBooks(): Promise<
  BookData[]
> {
  const url = `http://localhost:12345/book/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("");

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
