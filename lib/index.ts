import fallback from "@/public/data.json";

type id = number;
export interface item {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  text?: string;
}

async function getStory(id: number): Promise<item> {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}

async function getBestStories(): Promise<id> {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty",
    { next: { revalidate: 3600 } }
  );
  const data = await response.json();
  const id = Math.round(Math.random() * (data.length - 1));
  return data[id];
}

async function getData(): Promise<item> {
  try {
    const id: id = await getBestStories();
    const story: item = await getStory(id);
    return story;
  } catch (e: any) {
    console.error(`Error: ${e}`);
    const fallbackStory: item = fallback;
    return fallbackStory;
  }
}

export { getData };
