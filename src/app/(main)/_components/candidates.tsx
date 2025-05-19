"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { AllCandidates, Candidate, Faculties } from "@/src/data/candidates";

import { Button } from "@/src/components/ui/button";

const Candidates = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [candidates, setCandidates] = useState<Candidate[]>(AllCandidates);

  const faculties = Object.values(Faculties);

  useEffect(() => {
    if (selectedDepartment === "all") {
      setCandidates(AllCandidates);
    } else {
      const filteredCandidate = AllCandidates.filter(
        (candidate) => candidate.faculty === selectedDepartment,
      );
      setCandidates(filteredCandidate);
    }
  }, [selectedDepartment]);

  return (
    <section className="bg-white py-16" id="candidates">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
          آشنایی با نامزدها
        </div>
        <h2 className="mb-4 text-3xl font-bold">نامزدها بر اساس دانشکده</h2>
        <p className="mx-auto mb-12 max-w-3xl text-gray-600">
          با دانشجویانی که برای نمایندگی منافع شما در انجمن علمی دانشجویی نامزد
          شده‌اند، آشنا شوید.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <Button
            variant="outline"
            className={`rounded-full hover:bg-gray-50 ${selectedDepartment === "all" ? "border-blue-600 bg-blue-600 text-white hover:bg-blue-600 hover:text-white" : undefined}`}
            onClick={() => setSelectedDepartment("all")}
          >
            همه دانشکده‌ها
          </Button>
          {faculties.map((faculty) => (
            <Button
              key={faculty}
              variant="outline"
              className={`rounded-full hover:bg-gray-50 ${selectedDepartment === faculty ? "border-blue-600 bg-blue-600 text-white hover:bg-blue-600 hover:text-white" : undefined}`}
              onClick={() => setSelectedDepartment(faculty)}
            >
              {faculty}
            </Button>
          ))}
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {candidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                name={candidate.name}
                image={candidate.image}
                major={candidate.faculty}
                year={candidate.academicYear}
                platform={candidate.platform}
                tags={candidate.tags}
              />
            ))}
          </div>

          {/*<Button*/}
          {/*  asChild*/}
          {/*  variant="outline"*/}
          {/*  className="mx-auto mt-8 flex w-fit items-center"*/}
          {/*>*/}
          {/*  <Link*/}
          {/*    href="/candidates"*/}
          {/*    className="text-primary hover:text-primary border-primary flex items-center"*/}
          {/*  >*/}
          {/*    مشاهده همه نامزدها*/}
          {/*  </Link>*/}
          {/*</Button>*/}
        </div>
      </div>
    </section>
  );
};

export default Candidates;

interface CandidateCardProps {
  name: string;
  image: string;
  major: string;
  year: number;
  platform: string;

  tags?: string[];
}

const CandidateCard = ({
  name,
  image,
  major,
  year,
  platform,

  tags,
}: CandidateCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.025]"
        />
      </div>
      <div className="p-6 text-right">
        <h3 className="mb-1 text-xl font-bold">{name}</h3>
        <p className="mb-4 text-gray-600">
          {major}، سال {year}
        </p>
        <p className="mb-4 text-gray-700">{platform}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800"
              >
                {tag}
              </span>
            ))}
        </div>
        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
          <Link href={`/candidates/${name}`}>مشاهده پروفایل</Link>
        </Button>
      </div>
    </div>
  );
};
