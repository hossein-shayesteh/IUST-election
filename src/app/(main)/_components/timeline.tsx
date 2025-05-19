const Timeline = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
          IMPORTANT DATES
        </div>
        <h2 className="mb-4 text-3xl font-bold">Election Timeline</h2>
        <p className="mx-auto mb-12 max-w-3xl text-gray-600">
          Mark your calendar with these important election milestones.
        </p>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline Line */}
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-blue-200"></div>

          <div className="relative space-y-24">
            <TimelineItem
              date="May 1-10, 2023"
              title="Nomination Period"
              description="Candidates submit their applications and platforms for review."
              position="left"
              icon="N"
            />
            <TimelineItem
              date="May 11-20, 2023"
              title="Campaign Period"
              description="Candidates present their platforms and engage with the student body."
              position="right"
              icon="C"
            />
            <TimelineItem
              date="May 21, 2023"
              title="Debate Day"
              description="Candidates participate in public debates to discuss their visions and plans."
              position="left"
              icon="D"
            />
            <TimelineItem
              date="May 22-26, 2023"
              title="Voting Period"
              description="Students cast their votes for their preferred candidates through the online portal."
              position="right"
              icon="V"
              highlight
            />
            <TimelineItem
              date="May 28, 2023"
              title="Results Announcement"
              description="Official election results are announced and published."
              position="left"
              icon="R"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Timeline;

const TimelineItem = ({
  date,
  title,
  description,
  position,
  icon,
  highlight = false,
}: {
  date: string;
  title: string;
  description: string;
  position: "left" | "right";
  icon: string;
  highlight?: boolean;
}) => {
  return (
    <div
      className={`flex items-center ${position === "left" ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`w-5/12 ${position === "left" ? "pr-8 text-right" : "pl-8 text-left"}`}
      >
        <div
          className={`rounded-lg p-4 shadow-sm ${highlight ? "border border-red-200 bg-red-50" : "bg-white"}`}
        >
          <p
            className={`mb-1 text-sm font-medium ${highlight ? "text-red-600" : "text-gray-500"}`}
          >
            {date}
          </p>
          <h3 className="mb-2 text-lg font-bold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex w-2/12 justify-center">
        <div
          className={`z-10 flex h-10 w-10 items-center justify-center rounded-full ${highlight ? "bg-red-500" : "bg-blue-500"} font-bold text-white`}
        >
          {icon}
        </div>
      </div>
      <div className="w-5/12"></div>
    </div>
  );
};
