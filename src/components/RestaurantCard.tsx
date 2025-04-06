"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
interface FoodItem {
  title: string;
  img: string;
  description: string;
  point: string;
  price: number;
  isFoodParty: boolean; // اضافه کردن isFoodParty
}

interface Restaurant {
  id: number;
  title: string;
  img: string;
  stars: string;
  point: string;
  subjects: string;
  icon: string;
  category: string;
  foods: FoodItem[];
}

function RestaurantsCard() {
  const [data, setData] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("/data/resturant.json")
      .then((res) => res.json() as Promise<Restaurant[]>)
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={20} // فاصله بین اسلایدها
        slidesPerView={1} // تعداد کارت‌ها در حالت موبایل
        loop={true} // حلقه زدن اسلایدها // فعال کردن pagination
        navigation // فعال کردن دکمه‌های قبلی و بعدی
        modules={[Navigation, Pagination]} // وارد کردن ماژول‌های مورد نیاز
        breakpoints={{
          640: { slidesPerView: 2 }, // تعداد کارت‌ها در حالت sm
          1024: { slidesPerView: 3 }, // تعداد کارت‌ها در حالت xl
        }}
      >
        {data.map(({ title, icon, img, point, stars, subjects, id }) => (
          <SwiperSlide key={id}>
            <div className="shadow-md w-full h-auto rounded-xl overflow-hidden mb-4 pb-4">
              <div className="h-44 bg-red-500 relative">
                <img
                  className="object-cover w-full h-full"
                  src={img}
                  alt={title}
                />
                <div className="w-full flex absolute top-2/3 justify-center">
                  <img
                    className="rounded-xl shadow-xl h-24"
                    src={icon}
                    alt={title}
                  />
                </div>
                <span className="absolute bottom-0 bg-white px-3 py-1 text-pink-700 rounded-tl-2xl">
                  ۳۰٪
                </span>
              </div>

              <div className="h-auto flex flex-col items-center mt-12 ">
                <div>
                  <h2 className="text-xl">{title}</h2>
                </div>

                <div className="flex justify-center mt-2">
                  <div className="flex items-center">
                    <span> {stars}</span>
                    <img
                      className="h-4 mr-1"
                      src="/images/rate-star.svg"
                      alt="rate-star"
                    />
                  </div>
                  <div className="mr-4 text-gray-400">({point})</div>
                </div>
                <div className="mt-2 text-sm text-gray-400">{subjects}</div>
                <div className=" mt-6">
                  <div className="flex">
                    <img
                      className="h-5 ml-2"
                      src="images/courier.svg"
                      alt="courier"
                    />
                    <div className="flex justify-center items-center">
                      <p className="text-xs"> پیک فروشنده </p>
                      <p className="text-xs mr-3">{"۱۳,۴۰۰ تومان"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default RestaurantsCard;
