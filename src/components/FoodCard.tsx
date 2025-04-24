import { Foods } from "@/types/restaurant";

interface FoodCardProps {
  food: Foods;
  variant?: "default" | "foodparty";
}

const toPersianDigits = (num: number) => num.toLocaleString("fa-IR");

function FoodCard({ food, variant = "default" }: FoodCardProps) {
  if (variant === "foodparty") {
    return (
      <div className="snap-center h-auto mt-4 py-1 px-2 flex items-center flex-col rounded-md bg-white w-[90%] flex-shrink-0 mx-[5%] md:w-[60%] xl:w-[30%] xl:mx-[2%]">
        <div className="pt-4">
          <span className="block text-center mx-auto text-sm text-gray-700">
            {food.title}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-xl h-36 mt-4"
            src={food.img}
            alt={food.title}
          />
          <h2 className="text-center mt-4 text-base font-bold">{food.title}</h2>
        </div>
        <div className="w-11/12 mt-8">
          <div className="justify-between flex w-full">
            <div className="flex items-center">
              <span className="text-xl">{toPersianDigits(food.point)}</span>
              <img
                className="h-4 mr-1"
                src="/images/icons/rate-star.svg"
                alt="rate-star"
              />
            </div>
            <div>
              <span className="text-white text-lg bg-[#FF00A6] rounded-lg px-1 mr-2">
                {toPersianDigits(food.price)}
              </span>
            </div>
          </div>
          <div className="flex justify-between w-full mt-3">
            <div>
              <span className="text-red-600 text-xs">
                {food.remaining &&
                  `${toPersianDigits(food.remaining)} عدد باقی مانده`}
              </span>
            </div>
          </div>
        </div>
        <div className="w-11/12 h-[3px] bg-red-500 mt-8 mb-3"></div>
      </div>
    );
  }

  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow">
      <div className="flex items-center gap-4">
        <img
          src={food.img}
          alt={food.title}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div>
          <h3 className="font-bold">{food.title}</h3>
          <p className="text-sm text-gray-600">{food.description}</p>
          <div className="flex items-center mt-2">
            <span className="text-lg font-bold">
              {toPersianDigits(food.price)} تومان
            </span>
            <div className="flex items-center mr-4">
              <img
                className="h-4 mr-1"
                src="/images/icons/rate-star.svg"
                alt="rate-star"
              />
              <span>{toPersianDigits(food.point)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FoodCard.displayName = "FoodCard";

export default FoodCard;
