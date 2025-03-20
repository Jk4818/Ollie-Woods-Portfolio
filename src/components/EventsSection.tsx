// components/EventsSection.tsx
import { useRef } from "react";
import EventsTable from "./EventsTable";
import { Event } from "./EventsTable";

interface YearlyEvents {
  year: string;
  yearLabel: string;
  events: Event[];
}

interface EventsSectionProps {
  sectionTitle: string;
  yearsData: YearlyEvents[];
}

const EventsSection = ({ sectionTitle, yearsData }: EventsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="w-full">
      {yearsData.map((yearData, index) => (
        <EventsTable 
          key={yearData.year}
          events={yearData.events}
          title={index === 0 ? sectionTitle : ""} // Only show title for the first table
          year={yearData.year}
          yearLabel={yearData.yearLabel}
          // Don't show "Learn More" except on the last table
          showLearnMore={index === yearsData.length - 1}
        />
      ))}
    </section>
  );
};

export default EventsSection;