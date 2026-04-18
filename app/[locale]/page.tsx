import Hero from "@/app/components/Hero";
import Clients from "@/app/components/Clients";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Stack from "@/app/components/Stack";
import Principles from "@/app/components/Principles";
import CTA from "@/app/components/CTA";
import { ScrollLine } from "@/app/components/ui/ScrollLine";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <ScrollLine />
      <Services />
      <ScrollLine />
      <Projects />
      <ScrollLine />
      <Stack />
      <ScrollLine />
      <Principles />
      <CTA />
    </main>
  );
}
