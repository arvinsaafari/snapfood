import Header from "@/components/Header";
import Category from "@/components/Category";
import category from "../../public/data/category.json";
import CountdownTimer from "@/components/CountdownTimer";
import Foodparty from "@/components/Foodparty";
import RestaurantsCard from "@/components/RestaurantCard";

console.log("salam");
export default function Home() {
  return (
    <div>
      <header className="relative z-50">
        <Header />
      </header>

      <main>
        <div
          className=" mt-4 mx-auto container px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8"
          dir="rtl"
        >
          <h2 className="text-xl col-span-full">دسته بندی ها</h2>
          {[...category].map(({ title, image }) => (
            <Category key={title} title={title} img={image} />
          ))}
        </div>

        <div
          dir="rtl"
          className="h-auto overflow-hidden p-6 md:flex
      rounded-t-md rounded-bl- rounded-br-[15%] xl:w-[95%]
      container w-[95%] mx-auto mt-16 px-4 bg-gradient-to-r 
      from-[#FA5A98] to-[#E32892] mb-8 xl:flex"
        >
          <div className=" p-3 flex flex-col justify-around">
            <div>
              <CountdownTimer />
            </div>
            <div className=" mt-8">
              <img
                src="/images/1_jek_non_active.png"
                className="h-24 mx-auto"
                alt="1_jek_non_active"
              />
            </div>

            <div className="mt-6  text-center">
              <div className="flex w-auto mx-auto justify-center text-white">
                <img className="ml-2" src="/images/sparkler.svg" alt="" />
                <h2 className="text-3xl md:text-2xl"> فود پارتی</h2>
              </div>
              <span className="block text-white mt-2 text-center md:text-xs">
                {" تخفیفات لحظه ای ویژه شما "}
              </span>
              <button className=" py-2 mt-2 px-9 text-black bg-white rounded-3xl md:">
                <span className="flex">
                  {"مشاهده همه  "}
                  <img className="mr-3" src="/images/left-black.svg" alt="" />
                </span>
              </button>
            </div>
          </div>

          <Foodparty />
        </div>

        <div dir="rtl" className=" w-[93%] mx-auto">
          <div className="flex justify-between mb-8">
            <h2 className="text-3xl"> تازه ترین ها در اسنپ فود </h2>
            <button className="text-green-600"> مشاهده همه </button>
          </div>
          <div className="grid  lg:grid-cols-3 sm:grid-cols-2 gap-4">
            <RestaurantsCard />
          </div>
        </div>

        <div dir="rtl" className=" w-[93%] mx-auto">
          <div className="flex justify-between mb-8">
            <h2 className="text-3xl"> برترین ها </h2>
            <button className="text-green-600"> مشاهده همه </button>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
            <RestaurantsCard />
          </div>
        </div>
      </main>
    </div>
  );
}
