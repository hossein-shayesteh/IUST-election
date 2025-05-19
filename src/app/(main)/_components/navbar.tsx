import { Dispatch, SetStateAction } from "react";

import Link from "next/link";

import { GraduationCap, Menu } from "lucide-react";

import { Button } from "@/src/components/ui/button";

export const navLinks = [
  {
    label: "خانه",
    href: "/",
  },

  {
    label: "زمان‌بندی",
    href: "#schedule",
  },
  {
    label: "نامزدها",
    href: "#candidates",
  },
  {
    label: "سوالات متداول",
    href: "#faq",
  },
];

interface NavbarProps {
  setOpenMobileSidebar: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setOpenMobileSidebar }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-start px-4 md:justify-between md:px-6">
        <Button
          variant="outline"
          size="icon"
          className="ml-4 md:hidden"
          onClick={() => setOpenMobileSidebar(true)}
        >
          <Menu />
        </Button>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Button
              size={"icon"}
              className={
                "size-12 rounded-full bg-gradient-to-r from-blue-700 to-blue-600"
              }
            >
              <GraduationCap className={"size-8"} />
            </Button>
            <div>
              <h1 className="text-xl font-bold">دانشگاه علم و صنعت</h1>
              <p className="text-xs text-gray-500"> انتخابات شورا صنفی </p>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
