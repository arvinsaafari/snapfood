import Header from "@/components/Header";
import CategoryMenu from "@/components/CategoryMenu";
import category from "../../public/data/category.json";
import CountdownTimer from "@/components/CountdownTimer";
import Foodparty from "@/components/Foodparty";
import RestaurantsCard from "@/components/RestaurantCard";
import CityList from "@/components/CityList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <header className="relative z-50">
        <Header />
      </header>

      <main>
        <div
          className="mt-4 mx-auto container px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8"
          dir="rtl"
        >
          <h2 className="text-xl col-span-full">دسته بندی ها</h2>
          {[...category].map(({ title, image }) => (
            <CategoryMenu key={title} title={title} img={image} />
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

        <div dir="rtl" className="w-[93%] mx-auto container">
          <div className="flex justify-between mb-8">
            <h2 className="text-3xl"> تازه ترین ها در اسنپ فود </h2>
            <button className="text-green-600"> مشاهده همه </button>
          </div>
          <RestaurantsCard />
        </div>

        <div dir="rtl" className="w-[93%] mx-auto container">
          <div className="flex justify-between mb-8 mt-4">
            <h2 className="text-3xl"> برترین ها </h2>
            <button className="text-green-600"> مشاهده همه </button>
          </div>
          <RestaurantsCard />
        </div>

        <div
          dir="rtl"
          className="box-border container relative rounded-br-none md:rounded-br-[7.5rem] mt-12 lg:mt-32 bg-[#EBEDF0] w-[95%] py-8 px-24 mx-auto"
        >
          <div className="w-[full] lg:w-[60%]">
            <h1 className="text-3xl mb-9 font-snapp2 font-bold">
              {" "}
              اپلیکیشن اسنپ فود
            </h1>
            <p className=" font-snapp2 text-lg mb-9 text-gray-600">
              با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید
              رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان
              را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.{" "}
            </p>
            <div>
              <p className="text-sm">
                برای دریافت لینک دانلود اپلیکیشن شماره موبایل خود را وارد کنید
              </p>
              <div
                dir="rtl"
                className="inline-flex justify-center items-center bg-white rounded-xl  p-3 mt-2" // من این دیو هدفمه آقای چت جی پی عزیز
              >
                <div>
                  <input
                    className=""
                    type="text"
                    name=""
                    id=""
                    placeholder="*********۰۹"
                  />
                </div>

                <button className="whitespace-nowrap bg-[#EB038C] text-white px-2 py-1 rounded-lg">
                  {" "}
                  دریافت لینک
                </button>
              </div>
              <div className="flex  flex-wrap gap-1  w-full mt-8">
                <img src="images/download-bazaar.svg" alt="bazar" />
                <img src="images/download-myket.svg" alt="bazar" />
                <img src="images/download-iapps.svg" alt="bazar" />
                <img src="images/download-sibapp.svg" alt="bazar" />
              </div>
            </div>
          </div>
          <img
            className="absolute left-24 max-w-[380px] top-0 translate-y-[-25%] hidden lg:block"
            src="/images/snapfood-app.png"
            alt="snapfood-app"
            width={423}
            height={636}
          />
        </div>

        <div
          dir="rtl"
          className="flex py-24 px-20 box-border container  bg-[#F9FAFB] w-[95%] rounded-3xl relative mx-auto mt-10 md:mt-24"
        >
          <div>
            <h2 className="text-4xl mb-8 font-snapp2">
              {" "}
              صاحب کسب و کار هستید؟
            </h2>

            <p className="mb-6 text-lg">
              {
                "با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید"
              }
            </p>

            <button className="bg-[#e9389f] px-4 py-2 rounded-lg text-white flex text-xl">
              {" "}
              <img src="images/shop.svg" alt="shop-icon" className="ml-2" />
              ثبت نام فروشندگان
            </button>

            <img
              className="hidden  lg:block absolute left-28 translate-y-[-100%]"
              src="images/shop.png"
              alt="shop-png"
            />
          </div>
        </div>
        <hr className="mt-4 h-8 " />

        <div dir="rtl">
          <h2 className="text-2xl mr-6"> اسنپ فود در استانهای ایران</h2>
          <CityList />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
