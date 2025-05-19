import React from "react";

import { Award, Calendar, FilePen, Vote } from "lucide-react";

import { Badge } from "@/src/components/ui/badge";

const Timeline = () => {
  return (
    <section className="bg-white py-16" id={"schedule"}>
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
          تاریخ‌های مهم
        </div>
        <h2 className="mb-4 text-3xl font-bold">زمان‌بندی انتخابات</h2>
        <p className="mx-auto mb-12 max-w-3xl text-gray-600">
          تقویم خود را با این مراحل مهم انتخابات علامت‌گذاری کنید.
        </p>

        {/* Desktop Timeline (hidden on mobile) */}
        <div className="relative mx-auto hidden max-w-4xl md:block">
          {/* Timeline Line */}
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-blue-200"></div>

          <div className="relative space-y-16">
            <>{/* Nomination Period */}</>
            <TimelineItem
              date="۱ تا ۱۰ اردیبهشت ۱۴۰۲"
              title="دوره نامزدی"
              description="نامزدها درخواست‌ها و برنامه‌های خود را برای بررسی ارسال می‌کنند."
              position="left"
              icon={<FilePen className="size-5" />}
              iconBgColor="bg-blue-500"
            />

            {/* Campaign Period */}
            <TimelineItem
              date="۱۱ تا ۲۰ اردیبهشت ۱۴۰۲"
              title="دوره تبلیغات"
              description="نامزدها برنامه‌های خود را ارائه می‌دهند و با بدنه دانشجویی تعامل می‌کنند."
              position="right"
              icon={<Calendar className="h-5 w-5" />}
              iconBgColor="bg-blue-500"
            />

            {/* Voting Period */}
            <TimelineItem
              date="۲۲ تا ۲۶ اردیبهشت ۱۴۰۲"
              title="دوره رأی‌گیری"
              description="دانشجویان از طریق پورتال آنلاین به نامزدهای مورد نظر خود رأی می‌دهند."
              position="left"
              icon={<Vote className="h-5 w-5" />}
              iconBgColor="bg-red-500"
              highlight={true}
            />

            {/* Results Announcement */}
            <TimelineItem
              date="۲۸ اردیبهشت ۱۴۰۲"
              title="اعلام نتایج"
              description="نتایج رسمی انتخابات اعلام و منتشر می‌شود."
              position="right"
              icon={<Award className="h-5 w-5" />}
              iconBgColor="bg-blue-500"
            />
          </div>
        </div>

        {/* Mobile Timeline (visible only on mobile) */}
        <div className="relative mx-auto md:hidden">
          {/* Timeline Line */}
          <div className="absolute right-4 h-full w-1 bg-blue-200"></div>

          <div className="relative space-y-8">
            <MobileTimelineItem
              date="۱ تا ۱۰ اردیبهشت ۱۴۰۲"
              title="دوره نامزدی"
              description="نامزدها درخواست‌ها و برنامه‌های خود را برای بررسی ارسال می‌کنند."
              icon={<FilePen className="size-5" />}
              iconBgColor="bg-blue-500"
            />

            <MobileTimelineItem
              date="۱۱ تا ۲۰ اردیبهشت ۱۴۰۲"
              title="دوره تبلیغات"
              description="نامزدها برنامه‌های خود را ارائه می‌دهند و با بدنه دانشجویی تعامل می‌کنند."
              icon={<Calendar className="h-5 w-5" />}
              iconBgColor="bg-blue-500"
            />

            <MobileTimelineItem
              date="۲۲ تا ۲۶ اردیبهشت ۱۴۰۲"
              title="دوره رأی‌گیری"
              description="دانشجویان از طریق پورتال آنلاین به نامزدهای مورد نظر خود رأی می‌دهند."
              icon={<Vote className="h-5 w-5" />}
              iconBgColor="bg-red-500"
              highlight={true}
            />

            <MobileTimelineItem
              date="۲۸ اردیبهشت ۱۴۰۲"
              title="اعلام نتایج"
              description="نتایج رسمی انتخابات اعلام و منتشر می‌شود."
              icon={<Award className="h-5 w-5" />}
              iconBgColor="bg-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  position: "left" | "right";
  icon: React.ReactNode;
  iconBgColor: string;
  highlight?: boolean;
}

const TimelineItem = ({
  date,
  title,
  description,
  position,
  icon,
  iconBgColor,
  highlight = false,
}: TimelineItemProps) => {
  return (
    <div
      className={`flex items-center ${position === "left" ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`w-5/12 ${position === "left" ? "pl-8 text-right" : "pr-8 text-left"}`}
      >
        <div
          className={`rounded-lg border p-6 shadow-sm ${
            highlight ? "border-red-200 bg-white" : "border-gray-100 bg-white"
          }`}
        >
          <h3
            className={`mb-2 text-xl font-bold ${highlight ? "text-rose-500" : "text-blue-700"}`}
          >
            {title}
          </h3>
          <p className="mb-3 text-gray-600">{description}</p>
          <Badge
            variant={"outline"}
            className={`rounded-full ${highlight ? "bg-destructive border-0 text-white" : "border-0 bg-gray-200"}`}
          >
            {date}
          </Badge>
        </div>
      </div>
      <div className="flex w-2/12 justify-center">
        <div
          className={`z-10 flex h-10 w-10 items-center justify-center rounded-full ${
            highlight ? "bg-red-500" : iconBgColor
          } text-white`}
        >
          {icon}
        </div>
      </div>
      <div className="w-5/12"></div>
    </div>
  );
};

interface MobileTimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  highlight?: boolean;
}

const MobileTimelineItem = ({
  date,
  title,
  description,
  icon,
  iconBgColor,
  highlight = false,
}: MobileTimelineItemProps) => {
  return (
    <div className="flex">
      <div className="relative ml-4 flex-shrink-0">
        <div
          className={`z-10 flex h-10 w-10 items-center justify-center rounded-full ${
            highlight ? "bg-red-500" : iconBgColor
          } text-white`}
        >
          {icon}
        </div>
      </div>
      <div className="flex-grow">
        <div
          className={`rounded-lg border p-4 shadow-sm ${
            highlight ? "border-red-200 bg-white" : "border-gray-100 bg-white"
          }`}
        >
          <h3
            className={`mb-2 text-lg font-bold ${highlight ? "text-rose-500" : "text-blue-700"}`}
          >
            {title}
          </h3>
          <p className="mb-3 text-sm text-gray-600">{description}</p>
          <Badge
            variant={"outline"}
            className={`rounded-full ${highlight ? "bg-destructive border-0 text-white" : "border-0 bg-gray-200"}`}
          >
            {date}
          </Badge>
        </div>
      </div>
    </div>
  );
};
