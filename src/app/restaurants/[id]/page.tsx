import { notFound } from "next/navigation";
import resturant from "../../../../public/data/resturant.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Category from "@/components/Category";
interface Params {
  params: {
    id: string;
  };
}

export default function RestaurantPage({ params }: Params) {
  const restaurant = resturant.find((item) => item.id.toString() === params.id);
  if (!restaurant) {
    notFound();
  }
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div
          dir="rtl"
          className=" flex justify-between p-2 container w-[95%] mx-auto mt-4"
        >
          <div className="flex items-center">
            <div className=" bg-white shadow-lg rounded-xl overflow-hidden ml-3 p-1">
              <img
                className="h-20 rounded-xl border border-gray-200"
                src={restaurant.icon}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between py-3 h-full w-fit">
              <div className="flex items-center">
                <img
                  className="h-4"
                  src="/images/rate-star.svg"
                  alt="rate-star.svg"
                />
                <span className="mr-1">{restaurant.stars}</span>

                <span className=" mr-2 text-gray-400 text-sm">
                  ({restaurant.point} امتیاز)
                </span>
              </div>
              <div>
                <span className="text-xl font-bold"> {restaurant.title}</span>
              </div>
            </div>
          </div>
          {/* برای اضافه کردن تخفیف */}
          <div></div>
        </div>
        <div>
          <button className=" p-2 bg-white shadow-lg border border-balck rounded-full w-[95%] mx-auto flex justify-center items-center mt-4">
            <span className="text-sm text-green-500 mr-2">
              {"  ثبت اطلاعات و نظرات"}
            </span>
            <img src="/images/info.svg" alt="info" />
          </button>
        </div>

        <div>
          {restaurant.foods.map(({ category }) => (
            <div> {category} </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
