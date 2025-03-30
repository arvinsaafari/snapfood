interface CategoryProp {
  img: string;
  title: string;
}

function Category({ img, title }: CategoryProp) {
  return (
    <div className="relative border-white border-4 rounded-xl overflow-hidden shadow-lg cursor-pointer h-[110px]">
      <div className="bg-white px-4 py-1  absolute bottom-0 flex rounded-tl-xl items-center ">
        <p className="text-xl text-gray-700"> {title} </p>
        <span className="mr-3">
          {" "}
          <img
            className="transition-transform duration-200 hover:-translate-x-1 h-4"
            src="/images/left-purple.svg"
            alt=""
          />
        </span>
      </div>
      <img src={img} alt="category-img" />
    </div>
  );
}
export default Category;
