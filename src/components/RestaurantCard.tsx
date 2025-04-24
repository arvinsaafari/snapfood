"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

interface Comment {
  userId: number;
  userName: string;
  date: string;
  comment: string;
  tags: string[];
  star: number;
  replay?: {
    userId: string;
    comment: string;
  };
}

interface FoodItem {
  category: string;
  title: string;
  img: string;
  description: string;
  point: number;
  price: number;
  remaining?: number;
  comments: Comment[];
}

interface Discount {
  hasDiscount: boolean;
  percentage: number;
}

interface Delivery {
  hasDelivery: boolean;
  deliveryFee: number;
}

interface Rating {
  point: number;
  star: number;
}

interface Restaurant {
  id: number;
  title: string;
  img: string;
  tags: string[];
  icon: string;
  category: string;
  discount: Discount;
  Addres: string;
  rating: Rating;
  delivery: Delivery;
  woirkingHours: string;
  paymentMethods: string;
  minimumCart: number;
  comments: Comment[];
  foods: {
    foodParty: FoodItem[];
    papular: FoodItem[];
    normalfoods: FoodItem[];
  };
}

function RestaurantsCard() {
  const toPersianDigits = (num: number) => num.toLocaleString("fa-IR");
  const [data, setData] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/restaurants.json");
        if (!res.ok) {
          throw new Error(`خطا در دریافت داده‌ها: ${res.status}`);
        }
        const json = await res.json();
        console.log("داده‌های دریافتی:", json);
        setData(json);
      } catch (err) {
        console.error("خطا در دریافت داده‌های رستوران:", err);
        setError(err instanceof Error ? err.message : "خطای نامشخص");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center p-4">در حال بارگذاری...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">خطا: {error}</div>;
  }

  if (data.length === 0) {
    return <div className="text-center p-4">هیچ رستورانی یافت نشد.</div>;
  }

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {data.map((restaurant) => {
        console.log("رستوران:", restaurant.title);
        return (
          <SwiperSlide key={restaurant.id}>
            <div className="shadow-md w-full h-auto rounded-xl overflow-hidden mb-4 pb-4">
              {/* عکس اصلی رستوران */}
              <div className="h-44 bg-red-500 relative">
                <img
                  className="object-cover w-full h-full"
                  src={restaurant.img}
                  alt={restaurant.title}
                />
                <div className="w-full flex absolute top-2/3 justify-center">
                  <img
                    className="rounded-xl shadow-xl h-24"
                    src={restaurant.icon}
                    alt={restaurant.title}
                  />
                </div>
                {restaurant.discount.hasDiscount && (
                  <span className="absolute bottom-0 bg-white px-3 py-1 text-pink-700 rounded-tl-2xl">
                    {toPersianDigits(restaurant.discount.percentage)}٪ تخفیف
                  </span>
                )}
              </div>

              {/* اطلاعات رستوران */}
              <div className="flex flex-col items-center mt-12 px-2">
                <h2 className="text-xl font-semibold text-center">{restaurant.title}</h2>

                <div className="flex justify-center mt-2">
                  <div className="flex items-center">
                    <span>{toPersianDigits(restaurant.rating.star)}</span>
                    <img
                      className="h-4 mr-1"
                      src="/images/icons/rate-star.svg"
                      alt="rate-star"
                    />
                  </div>
                  <div className="mr-4 text-gray-400">({toPersianDigits(restaurant.rating.point)})</div>
                </div>

                <div className="mt-2 text-sm text-gray-500 text-center">{restaurant.category}</div>

                <div className="mt-6">
                  <div className="flex items-center">
                    <img
                      className="h-5 ml-2"
                      src="/images/icons/courier.svg"
                      alt="courier"
                    />
                    <p className="text-xs">پیک فروشنده</p>
                    <p className="text-xs mr-3">{toPersianDigits(restaurant.delivery.deliveryFee)} تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default RestaurantsCard;
