import React from "react";

import { Scale, ShieldUser, Vote } from "lucide-react";

const ElectionInformation = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-bold">اطلاعات انتخابات</h2>
        <p className="mx-auto mb-12 max-w-3xl text-gray-600">
          درباره فرآیند انتخابات، روش‌های رای‌گیری و چگونگی تأثیر مشارکت شما در
          شکل‌دهی آینده جامعه دانشگاهی ما بیشتر بدانید.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <InfoCard
            icon={<Vote className={"size-6"} />}
            title="نحوه رای دادن"
            description="رای‌گیری از طریق پورتال آنلاین دانشگاه در دسترس است. برای دسترسی به سامانه امن رای‌گیری، از اطلاعات کاربری دانشجویی خود استفاده کنید."
          />
          <InfoCard
            icon={<ShieldUser className={"size-6"} />}
            title="شرایط رای دادن"
            description="تمامی دانشجویان ثبت‌نام شده با وضعیت فعال برای سال تحصیلی جاری واجد شرایط رای دادن در انتخابات دانشکده مربوذه خود هستند."
          />
          <InfoCard
            icon={<Scale className={"size-6"} />}
            title="قوانین انتخابات"
            description="انتخابات ما از دستورالعمل‌های سختگیرانه‌ای برای اطمینان از عدالت و شفافیت پیروی می‌کند. تمامی نامزدها و رای‌دهندگان باید از آیین‌نامه دانشگاه پیروی کنند."
          />
        </div>
      </div>
    </section>
  );
};

export default ElectionInformation;

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="rounded-lg bg-white p-6 text-right shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
    </div>
  );
};
