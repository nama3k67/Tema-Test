import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import About from "@/components/sections/about";
import Games from "@/components/sections/games";
import Hero from "@/components/sections/hero";
import Partners from "@/components/sections/partners";
import ScrollButton from "@/components/shared/scrollButton";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Games />
        <Partners />
      </main>

      <ScrollButton />
      <Footer />
    </>
  );
}
