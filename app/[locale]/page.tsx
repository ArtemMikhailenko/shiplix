import Hero from "@/app/components/Hero";
import Clients from "@/app/components/Clients";
import Stats from "@/app/components/Stats";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Testimonials from "@/app/components/Testimonials";
import Stack from "@/app/components/Stack";
import WhyUs from "@/app/components/WhyUs";
import Process from "@/app/components/Process";
import CTA from "@/app/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Stats />
      <Services />
      <Projects />
      <Testimonials />
      <Stack />
      <WhyUs />
      <Process />
      <CTA />
    </main>
  );
}
