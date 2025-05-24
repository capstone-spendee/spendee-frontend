import { About } from "@/components/about-landingpage";
import { CTA } from "@/components/cta-landingpage";
import { Feature } from "@/components/feature-landingpage";
import { Footer } from "@/components/footer-landingpage";
import { Header } from "@/components/header-landingpage";
import { Hero } from "@/components/heroes-landingpage";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Feature/>
      <About/>
      <CTA/>
      <Footer/>
    </>
  )
    

}
