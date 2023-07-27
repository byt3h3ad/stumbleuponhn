import { item, getData } from "@/lib";
import Link from "next/link";

export default async function Card() {
  const data: item = await getData();
  const HNPostLink: string = `https://news.ycombinator.com/item?id=${data.id}`;
  data.url ? data.url : HNPostLink; // sometimes there is no link and only text is present
  return (
    <section className="flex flex-col gap-2 p-2">
      <Link
        href={data?.url}
        title={data?.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-2xl text-center">{data?.title}</p>
      </Link>
      <p className="text-lg text-center">
        <Link
          href={HNPostLink}
          title={data?.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{data?.score} points</span>
        </Link>
        <span> by </span>
        <Link
          href={`https://news.ycombinator.com/user?id=${data?.by}`}
          title={data?.by}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{data?.by}</span>
        </Link>
      </p>
    </section>
  );
}
