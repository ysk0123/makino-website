import SectionHeader from "./SectionHeader";

export default function About() {
  return (
      <div className="py-20 min-h-[400px] bg-[url('/images/dahlia02.jpg')] bg-cover bg-top">
        <div className="px-6 md:px-12 py-70 max-w-5xl mx-auto">
        <SectionHeader title="About" link="/about" className="my-96" />
      </div>
    </div>
  );
}