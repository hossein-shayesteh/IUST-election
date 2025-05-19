import { Dispatch, SetStateAction } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/src/components/ui/sheet";

import { navLinks } from "@/src/app/(main)/_components/navbar";

interface MobileNavbar {
  setOpenMobileSidebar: Dispatch<SetStateAction<boolean>>;
  openMobileSidebar: boolean;
}

const MobileNavbar = ({
  setOpenMobileSidebar,
  openMobileSidebar,
}: MobileNavbar) => {
  const pathname = usePathname();

  return (
    <Sheet onOpenChange={setOpenMobileSidebar} open={openMobileSidebar}>
      <SheetContent
        side={"right"}
        className={
          "z-[10000] border-slate-200 bg-white p-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/60"
        }
      >
        <SheetHeader>
          <SheetTitle
            className={"text-xl font-bold text-blue-500 dark:text-blue-400"}
          >
            انتخابات شورای صنفی
          </SheetTitle>
        </SheetHeader>
        <div className={"p-4"}>
          <div className={"flex flex-col items-start space-y-5"}>
            {navLinks.map((link) => (
              <Button
                onClick={() => setOpenMobileSidebar(false)}
                asChild
                key={link.href}
                variant={"link"}
                className={`text-slate-600 dark:text-slate-400 ${pathname === link.href ? "text-slate-800 dark:text-slate-200" : undefined}`}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNavbar;
