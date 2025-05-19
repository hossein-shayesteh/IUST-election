import Link from "next/link";

import { Separator } from "@/src/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">دانشگاه علم و صنعت</h2>
            <p className="text-gray-400">انتخابات شورای صنفی</p>
          </div>
          <nav className="flex flex-wrap gap-8">
            <Link
              href="/public"
              className="transition-colors hover:text-blue-400"
            >
              صفحه اصلی
            </Link>
            <Link
              href="#candidates"
              className="transition-colors hover:text-blue-400"
            >
              نامزدها
            </Link>
            <Link
              href="#schedule"
              className="transition-colors hover:text-blue-400"
            >
              زمان‌بندی
            </Link>
            <Link href="#faq" className="transition-colors hover:text-blue-400">
              سوالات متداول
            </Link>
          </nav>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="text-center text-gray-400">
          <p>© ۱۴۰۴ . تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
