import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

// Define the event type
export interface Event {
  date: string;
  artists: string;
  venue: string;
  detailsLink: string;
}

interface EventsTableProps {
  events: Event[];
  title?: string; // Optional title prop with a default value
  year?: string;  // Optional year prop
  yearLabel?: string; // Optional year label
  showLearnMore?: boolean; // Whether to show the "Learn More" link
}

const EventsTable = ({ 
  events, 
  title = "", 
  year = "2025", 
  yearLabel = "(INC. UPCOMING)",
  showLearnMore = false
}: EventsTableProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.1,
    margin: "0px 0px -100px 0px" 
  });

  // Use effects to trigger animations when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Animation variants
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };
  
  const yearHeaderVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + custom * 0.08, // Slightly faster stagger for more events
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const learnMoreVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        delay: 0.6 + events.length * 0.05
      }
    }
  };

  // Calculate appropriate padding - less padding when no title
  const topPadding = title ? "py-24" : "pt-8 pb-24";

  return (
    <div ref={ref} className={`w-full text-white ${topPadding} px-4 md:px-12 uppercase`}>
      <div className="container mx-auto">
        {/* Only render title if provided */}
        {title && (
          <motion.h2 
            className="text-6xl font-bold mb-16 md:ml-[50%] uppercase"
            variants={titleVariants}
            initial="hidden"
            animate={controls}
          >
            {title}
          </motion.h2>
        )}

        <motion.div 
          className="mb-6"
          variants={yearHeaderVariants}
          initial="hidden"
          animate={controls}
        >
          <h3 className="text-4xl font-bold inline-block">{year}</h3>
          <span className="text-xl ml-4 opacity-70">{yearLabel}</span>
        </motion.div>

        {/* Events Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {events.map((event, index) => (
                <motion.tr 
                  key={index} 
                  className="border-t-2 border-white"
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  animate={controls}
                >
                  <td className="py-6 pr-4 text-left w-1/6 text-sm">{event.date}</td>
                  <td className="py-6 pr-4 text-left w-2/6 text-sm">{event.artists}</td>
                  <td className="py-6 pr-4 text-left w-2/6 text-sm">{event.venue}</td>
                  <td className="py-6 text-right w-1/6">
                    <Link href={event.detailsLink} className="text-white hover:text-gray-300 transition-colors text-sm">
                      DETAILS
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Only show "Learn More" link if specified */}
        {showLearnMore && (
          <motion.div 
            className="mt-12 text-right"
            variants={learnMoreVariants}
            initial="hidden"
            animate={controls}
          >
            <Link href="/works" className="text-white hover:text-gray-300 transition-colors text-sm">
              Learn More
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EventsTable;