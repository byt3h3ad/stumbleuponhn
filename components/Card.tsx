import { item, getData } from "@/utils";
import Link from "next/link";

export default async function Card() {
  const data: item = await getData();
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
          href={`https://news.ycombinator.com/item?id=${data?.id}`}
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
