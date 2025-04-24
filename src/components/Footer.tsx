function Footer() {
  return (
    <div dir="rtl" className="bg-[#F9FAFB] p-8 lg:flex mt-6">
      <div className="w-3/4 ">
        <div className="flex items-center">
          <img className="h-14 ml-4" src="/images/icons/logo.png" alt="logo" />
          <div>
            <p className="text-pink-600 text-2xl"> اسنپ فود</p>
            <p className="text-gray-600 text-xs mt-2">
              {" "}
              تجربه سفارش غذا از زودفود تا اسنپ فود
            </p>
          </div>
        </div>
        <div className="flex mt-6 gap-4 justify-center">
          <img
            className="h-10 border bg-white rounded-[50%] p-2 shadow-md"
            src="/images/icons/aparat.svg"
            alt="aparat"
          />
          <img
            className="h-10 border bg-white rounded-[50%] p-2 shadow-md"
            src="/images/icons/instagram.svg"
            alt="instagram"
          />
          <img
            className="h-10 border bg-white rounded-[50%] p-2 shadow-md"
            src="/images/icons/linkedin.svg"
            alt="linkedin"
          />
          <img
            className="h-10 border bg-white rounded-[50%] p-2 shadow-md"
            src="/images/icons/telegram.svg"
            alt="telegram"
          />
          <img
            className="h-10 border bg-white rounded-[50%] p-2 shadow-md"
            src="/images/icons/twitter.svg"
            alt="twitter"
          />
        </div>
      </div>

      <div className="flex gap-8 mt-8 lg:mt-0 text-sm text-gray-500 md:w-full">
        <div className="inline-flex flex-col gap-y-3 p-3 w-1/3 md:w-full">
          <a href=""> درباره اسنپ فود</a>
          <a href=""> فرصت های شغلی</a>
          <a href=""> وبلاگ</a>
          <a href=""> قوانین سایت</a>
          <a href=""> حریم خصوصی </a>
          <a href=""> ثبت نام فروشندگان</a>
        </div>
        <div className="inline-flex flex-col gap-y-3 p-3 w-1/3 md:w-full ">
          <a href=""> تماس با اسنپ فود</a>
          <a href=""> پرسش های متداول</a>
          <a href=""> ثبت شکایت </a>
          <a href=""> اپلیکیشن موبایل</a>
        </div>
        <div className="flex justify-end w-1/3 md:w-full">
          <img className="h-24" src="/images/icons/senf.png" alt="senf" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
