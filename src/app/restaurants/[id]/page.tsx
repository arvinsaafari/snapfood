"use client";

import { useParams } from "next/navigation";
import restaurantData from "../../../../public/data/restaurants.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState, useRef } from "react";
import { Restaurant } from "@/types/restaurant";
import CountdownTimer from "@/components/CountdownTimer";
import FoodCard from "@/components/FoodCard";
const toPersianDigits = (num: number) => num.toLocaleString("fa-IR");

function RestaurantPage() {
  const [selectedFoodCategory, setSelectedFoodCategory] =
    useState<string>("فود پارتی");

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const params = useParams();
  const foods = restaurant?.foods || [];
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({
    فودپارتی: null,
    پرطرفدارها: null,
  });

  ``;
  useEffect(() => {
    if (params?.id) {
      const foundRestaurant = restaurantData.find(
        (item) => item.id === Number(params.id)
      );
      setRestaurant((foundRestaurant as Restaurant) || null);
    }
  }, [params?.id]);

  useEffect(() => {
    restaurant?.foods.map((food) => {
      if (!sectionRefs.current[food.category]) {
        sectionRefs.current[food.category] = null;
      }
    });
  }, [restaurant]);

  useEffect(() => {
    const handleScroll = () => {
      const entries = Object.entries(sectionRefs.current);

      for (let [category, element] of entries) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 200) {
            setSelectedFoodCategory(category);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toScroll = (category: string) => {
    sectionRefs.current[category]?.scrollIntoView({ behavior: "smooth" });
  };

  if (!restaurant) {
    return <div className="text-center mt-10">رستوران پیدا نشد :/</div>;
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div
          dir="rtl"
          className="flex justify-between p-2 container w-[95%] mx-auto mt-4"
        >
          <div className="flex items-center">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden ml-3 p-1">
              <img
                className="h-20 rounded-xl border border-gray-200"
                src={restaurant.icon}
                alt="restaurant-icon"
              />
            </div>
            <div className="flex flex-col justify-between py-3 h-full w-fit">
              <div className="flex items-center">
                <img
                  className="h-4"
                  src="/images/icons/rate-star.svg"
                  alt="rate-star"
                />
                <span className="mr-1">
                  {toPersianDigits(restaurant.rating.star)}
                </span>
                <span className="mr-2 text-gray-400 text-sm">
                  ({toPersianDigits(restaurant.rating.point)} امتیاز)
                </span>
              </div>
              <div>
                <span className="text-xl font-bold"> {restaurant.title}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-1 rounded-full px-4 shadow-lg text-pink-600">
              <span>
                {restaurant.discount.hasDiscount
                  ? `${toPersianDigits(restaurant.discount.percentage)}%`
                  : ""}
              </span>
            </div>
          </div>
        </div>

        <button className="p-2 bg-white shadow-lg  rounded-full w-[95%] mx-auto flex justify-center items-center mt-4">
          <span className="text-sm text-green-500 mr-2">
            ثبت اطلاعات و نظرات
          </span>
          <img src="/images/icons/info.svg" alt="info" />
        </button>

        <div
          dir="rtl"
          className="p-4 h-[200px] overflow-y-auto container w-[95%] mx-auto mt-4 flex flex-col gap-4 text-sm text-gray-700"
        >
          <div
            className={`cursor-pointer flex items-center relative w-fit pl-2 ${
              selectedFoodCategory === "فود پارتی"
                ? "text-black font-bold before:absolute before:w-[2px] before:h-full before:right-[-9px] before:bg-black"
                : ""
            }`}
            onClick={() => {
              setSelectedFoodCategory("فود پارتی");
              toScroll("فود پارتی");
            }}
          >
            فود پارتی
            <img
              className="h-4 mr-1"
              src="/images/icons/foodparty.svg"
              alt="food-party"
            />
          </div>

          <div
            className={`cursor-pointer relative w-fit pl-2 ${
              selectedFoodCategory === "پرطرفدارها"
                ? "text-black font-bold before:absolute before:w-[2px] before:h-full before:right-[-6px] before:bg-black"
                : ""
            }`}
            onClick={() => {
              setSelectedFoodCategory("پرطرفدارها");
              toScroll("پرطرفدارها");
            }}
          >
            پرطرفدارها
          </div>

          {[...new Set(restaurant.foods.map((item) => item.category))].map(
            (uniqueCategory) => (
              <div
                className={`cursor-pointer relative w-fit pl-2 ${
                  selectedFoodCategory === uniqueCategory
                    ? "text-black font-bold before:absolute before:w-[2px] before:h-full before:right-[-6px] before:bg-black"
                    : ""
                }`}
                onClick={() => {
                  setSelectedFoodCategory(uniqueCategory);
                  toScroll(uniqueCategory);
                }}
                key={uniqueCategory}
              >
                {uniqueCategory}
              </div>
            )
          )}
        </div>
        <div
          dir="rtl"
          className="container border border-gray-300 rounded-lg h-auto w-[90%] overflow-hidden mx-auto mt-4"
        >
          <div
            dir="rtl"
            className=" px-4 justify-between flex items-center w-full bg-gradient-to-r h-14 from-[#FA5A98] to-[#E32892]"
          >
            <span className="flex gap-x-2 text-white">
              <img src="/images/icons/sparkler.svg" alt="sparkler" /> فودپارتی
            </span>

            <div>
              <CountdownTimer />
            </div>
          </div>

          <div>
            <FoodCard
              sectionRefs={sectionRefs}
              foods={foods}
              selectedFoodCategory={selectedFoodCategory}
            />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RestaurantPage;
