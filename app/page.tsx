import { Header, Card, Footer } from "@/components";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <section className="flex flex-col place-items-center m-auto">
        <Card />
      </section>
      <Footer />
    </main>
  );
}
