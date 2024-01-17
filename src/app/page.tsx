import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { SecondaryFeatures } from "../components/SecondaryFeatures";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
      </main>
      <Footer />
    </>
  );
}
