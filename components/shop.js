import SectionHeader from "./SectionHeader";

export default function Shop() {
    return (
      <section className="relative py-20 min-h-[800px] px-6 bg-[url('/images/shop.jpg')] bg-cover bg-[position:center_60%] md:px-12 my-2 max-w-5xl mx-auto">
  
  <div className="absolute inset-0 bg-black/30" />

  <div className="relative">
    <SectionHeader  title="Shop"
                    link="https://makinoart.theshop.jp/"
                    className="mt-60 text-white"
    />
  </div>

</section>
  );
}

