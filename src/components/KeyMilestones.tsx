import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

// Define the milestone type
export interface Milestone {
  date: string;
  milestone: string;
  location: string;
  details?: string; // Optional details link
}

interface KeyMilestonesProps {
  milestones: Milestone[];
}

const KeyMilestones = ({ milestones }: KeyMilestonesProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.1,
    margin: "0px 0px -100px 0px" 
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Animation variants - matched with EventsTable
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
  
  const tableHeaderVariants: Variants = {
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
        delay: 0.3 + custom * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section ref={ref} id="milestones" className="w-full text-white py-24 ">
      <div className="container mx-auto">
        {/* Title */}
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 uppercase" 
          variants={titleVariants} 
          initial="hidden" 
          animate={controls}
        >
          KEY MILESTONES.
        </motion.h2>

        {/* Desktop Table (hidden on small screens) */}
        <div className="hidden lg:block w-full uppercase">
          <table className="w-full border-collapse">
            <motion.thead 
              variants={tableHeaderVariants} 
              initial="hidden" 
              animate={controls}
            >
              <tr className="border-b-2 border-white">
                <th className="py-4 text-left text-base uppercase font-bold">Date</th>
                <th className="py-4 text-left text-base uppercase font-bold">Event</th>
                <th className="py-4 text-left text-base uppercase font-bold">Location</th>
                <th className="py-4 text-left text-base uppercase font-bold">Details</th>
              </tr>
            </motion.thead>
            <tbody>
              {milestones.map((milestone, index) => (
                <motion.tr 
                  key={`desktop-${index}`} 
                  className="border-t-2 border-white" 
                  custom={index} 
                  variants={rowVariants} 
                  initial="hidden" 
                  animate={controls}
                >
                  <td className="py-6 pr-4 text-left text-sm w-1/6">{milestone.date}</td>
                  <td className="py-6 pr-4 text-left text-sm w-2/6">{milestone.milestone}</td>
                  <td className="py-6 pr-4 text-left text-sm w-2/6">{milestone.location}</td>
                  <td className="py-6 text-left text-sm w-1/6">
                    {milestone.details ? (
                      <Link href={milestone.details} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                        DETAILS
                      </Link>
                    ) : (
                      "—"
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards (shown only on small screens) */}
        <div className="lg:hidden uppercase">
          {milestones.map((milestone, index) => (
            <motion.div
              key={`mobile-${index}`}
              className="border-t-2 border-white py-4"
              custom={index}
              variants={rowVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm">{milestone.date}</div>
              </div>
              <div className="text-sm font-medium mb-3 break-words">{milestone.milestone}</div>
              <div className="flex justify-between items-center">
                <div className="text-sm">{milestone.location}</div>
                {milestone.details ? (
                  <Link href={milestone.details} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors text-sm">
                    DETAILS
                  </Link>
                ) : (
                  <span className="text-sm">—</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMilestones;