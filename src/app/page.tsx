// components
import NameHeader from "@/components/molecules/NameHeader";
import CodeSegment from "@/components/molecules/CodeSegment";
import ContactSection from "@/components/molecules/ContactSection";
import ProjectSection from "@/components/organisms/ProjectSection";

export default function Home() {
  return (
    <div className="container mx-auto py-12 md:py-20 flex flex-col gap-12">
      <NameHeader />
      <CodeSegment />
      <ContactSection />
      <ProjectSection />
    </div>
  );
}
