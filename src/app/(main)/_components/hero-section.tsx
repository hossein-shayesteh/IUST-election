import Link from "next/link";

import { Calendar, UsersRound } from "lucide-react";
import { ToPersianNumber } from "topersiannumber";

import { Button } from "@/src/components/ui/button";

const statistics = [
  {
    label: "دانشکده‌ها",
    number: 12,
  },
  {
    label: "نامزدها",
    number: 48,
  },
  {
    label: "رأی‌دهندگان واجد شرایط",
    number: 5240,
  },
  {
    label: "روز تا رأی‌گیری",
    number: 7,
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0055e4] to-[#003484] py-20 text-white">
      {/* Background circles and squares */}
      <div className="animate-float-diagonal absolute top-20 right-[20%] h-64 w-64 rounded-full bg-blue-400 opacity-20 blur-xs"></div>
      <div className="animate-float-diagonal-reverse absolute bottom-40 left-20 h-48 w-48 rounded-full bg-blue-300 opacity-20 blur-xs"></div>

      {/* Squares */}
      <div className="animate-float-vertical absolute top-10 right-[30%] h-32 w-32 rotate-12 rounded-lg bg-blue-500 opacity-10 blur-sm"></div>
      <div className="animate-float-vertical-delay absolute top-40 left-[10%] h-24 w-24 -rotate-12 rounded-lg bg-blue-400 opacity-15 blur-sm"></div>
      <div className="animate-float-vertical-slow absolute top-20 right-[60%] h-20 w-20 rotate-45 rounded-lg bg-blue-300 opacity-20 blur-lg"></div>

      {/* Wave at bottom */}
      <div className="absolute right-0 bottom-[-1px] left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,224L1440,288L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Text content */}
          <div className="mb-12 max-w-xl md:mb-0 md:w-1/2">
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl">
              شکل دهی به آینده <span className="text-orange-400">دانشگاه</span>{" "}
              شما
            </h1>
            <p className="mb-8 text-lg">
              به نامزدهایی رأی دهید که نماینده منافع شما خواهند بود و انجمن علمی
              دانشجویی شما را هدایت خواهند کرد.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="#candidates" className="flex items-center gap-2">
                  <UsersRound className={"size-4"} />
                  مشاهده نامزدها
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-white bg-blue-600 text-white hover:text-white"
              >
                <Link href="#schedule" className="flex items-center gap-2">
                  <Calendar />
                  زمان‌بندی انتخابات
                </Link>
              </Button>
            </div>
          </div>

          {/* Ballot box image */}
          <div className="size-72 md:size-80" />
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {statistics.map((item) => (
            <StatisticsItems
              key={item.label}
              label={item.label}
              number={item.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

interface StatisticsItemsProps {
  label: string;
  number: number;
}
const StatisticsItems = ({ number, label }: StatisticsItemsProps) => {
  return (
    <div className="rounded-lg bg-blue-500/50 p-6 text-center backdrop-blur-sm">
      <h3 className="mb-1 text-4xl font-bold">{ToPersianNumber(number)}</h3>
      <p className="text-sm">{label}</p>
    </div>
  );
};
