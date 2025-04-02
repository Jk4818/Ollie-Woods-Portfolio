import { useRef } from "react";
import EventsTable from "./EventsTable";
import { Event } from "./EventsTable";
import { motion } from "framer-motion";

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
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef} 
      className="w-full overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {yearsData.map((yearData, index) => (
        <EventsTable 
          key={yearData.year}
          events={yearData.events}
          title={index === 0 ? sectionTitle : ""}
          year={yearData.year}
          yearLabel={yearData.yearLabel}
          showLearnMore={index === yearsData.length}
        />
      ))}
    </motion.section>
  );
};

export default EventsSection;