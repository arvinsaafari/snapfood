"use client";
import { useRef, useEffect } from "react";

type ProfileMenuProps = {
  isOpen: boolean;
  setIsOpen: (isProfileMenuOpen: boolean) => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
};

function ProfileMenu({ isOpen, setIsOpen, buttonRef }: ProfileMenuProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen, buttonRef]);

  return (
    <>
      {isOpen && (
        <div
          dir="rtl"
          ref={menuRef}
          className="absolute top-14 left-6 bg-white shadow-lg rounded-lg w-72 z-50"
        >
          <div className="flex items-center justify-start py-2 px-3">
            <div>
              <img src="./images/user.svg" alt="user.svg" className="h-4" />
            </div>
            <div className="mr-4">
              <p className="text-sm"> امیرمحمد صفری عاملی </p>
              <p className="text-xs mt-2 text-[#37C783]">
                {" "}
                مشاهده حساب کاربری{" "}
              </p>
            </div>
          </div>

          <div
            dir="rtl"
            className="flex items-center justify-between hover:bg-gray-100 py-3 px-2 cursor-pointer"
          >
            <div className="flex">
              <img src="./images/snapp-club.svg" alt="snap-club-icon" />
              <span className="text-sm mr-4">اسنپ! کلاب </span>
            </div>
            <div className="flex items-center border-[#FFCE00] bg-[#FFDD00] px-3 py-1 rounded-[100]">
              <img
                className="h-4 ml-2"
                src="./images/club-gem.svg"
                alt="snap-club"
              />
              <span className="text-sm text-">
                ۲,۴۳۰ <span className="text-xs text-gray-700">امتیاز</span>
              </span>
            </div>
          </div>

          <div
            dir="rtl"
            className="flex  items-center justify-between py-4 px-3 cursor-pointer hover:bg-gray-100"
          >
            <div className="flex">
              <img src="./images/wallet.svg" alt="wallet-icone" />
              <span className="text-sm mr-4"> کیف پول </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-">۰ تومان</span>
            </div>
          </div>

          <div
            dir="rtl"
            className="flex  items-center justify-between py-4 px-3 cursor-pointer hover:bg-gray-100"
          >
            <div className="flex">
              <img src="./images/referral-menu.svg" alt="referral-icone" />
              <span className="text-sm mr-4"> دعوت از دوستان </span>
            </div>
          </div>

          <div
            dir="rtl"
            className="flex  items-center justify-between py-4 px-3 cursor-pointer hover:bg-gray-100"
          >
            <div className="flex">
              <img src="./images/logout.svg" alt="logout"></img>
              <span className="text-sm mr-4"> خروج </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileMenu;
