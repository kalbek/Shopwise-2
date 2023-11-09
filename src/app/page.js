import Image from "next/image";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Banners from "@/components/Banners";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col w-full">
        <Header />
        <Banner />
        <Banners />
      </div>
    </main>
  );
}
