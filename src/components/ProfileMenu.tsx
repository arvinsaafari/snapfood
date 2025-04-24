"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";

type ProfileMenuProps = {
  isOpen: boolean;
  setIsOpen: (isProfileMenuOpen: boolean) => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  isOpen,
  setIsOpen,
  buttonRef,
}) => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={() => setIsOpen(false)}>
      <div className="absolute top-16 right-4 bg-white rounded-lg shadow-lg w-48 py-2">
        <Link
          href="/profile"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
        >
          Profile
        </Link>
        <Link
          href="/orders"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
        >
          Orders
        </Link>
        <button
          onClick={() => {
            // Handle logout
            setIsOpen(false);
          }}
          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

ProfileMenu.displayName = "ProfileMenu";

export default ProfileMenu;
