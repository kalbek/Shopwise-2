import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Banners from "@/components/Banners";
import Categories from "@/components/Categories";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col w-full">
        <Header />
        <Banner />
        <Banners />
        <Categories />
        <Products />
      </div>
    </main>
  );
}
