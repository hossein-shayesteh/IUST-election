import Image from "next/image";
import Link from "next/link";

import { Button } from "@/src/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row md:px-6">
        <div className="space-y-6 md:w-1/2">
          <h1 className="text-4xl font-bold md:text-5xl">
            Shape Your <span className="text-orange-400">University's</span>{" "}
            Future
          </h1>
          <p className="text-lg">
            Vote for the candidates who will represent your interests and lead
            your student scientific association.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/candidates">View Candidates</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-blue-700"
            >
              <Link href="/schedule">Election Schedule</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2">
          <div className="relative h-64 w-64">
            <Image
              src="/ballot-box.svg"
              alt="Ballot Box"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
