import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

// Define the milestone type
export interface Milestone {
  date: string;
  milestone: string;
}

interface KeyMilestonesProps {
  milestones: Milestone[];
}

const KeyMilestones = ({ milestones }: KeyMilestonesProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.2,
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
        ease: [0.22, 1, 0.36, 1] // Custom easing for smoother motion
      }
    }
  };
  
  const tableHeaderVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.2 
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
        delay: 0.1 + custom * 0.1, // Staggered delay based on index
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section ref={ref} id="milestones" className="w-full text-white py-24">
      <div className="container mx-auto">
        {/* Title aligned with the milestone column */}
        <div className="flex">
          <div className="hidden lg:block w-1/2"></div>
          <div className="w-full lg:w-1/2">
            <motion.h2
              className="text-6xl font-bold mb-16"
              variants={titleVariants}
              initial="hidden"
              animate={controls}
            >
              KEY MILESTONES.
            </motion.h2>
          </div>
        </div>

        {/* Milestones Table */}
        <div className="w-full overflow-x-auto uppercase">
          <table className="w-full border-collapse">
            <motion.thead
              variants={tableHeaderVariants}
              initial="hidden"
              animate={controls}
            >
              <tr className="border-b-2 border-white">
                <th className="py-4 text-left w-1/2 text-base uppercase font-bold">Date</th>
                <th className="py-4 text-left w-1/2 text-base uppercase font-bold">Milestone</th>
              </tr>
            </motion.thead>
            <tbody>
              {milestones.map((milestone, index) => (
                <motion.tr
                  key={index}
                  className="border-t-2 border-white"
                  custom={index} // Pass index as custom prop for staggered animation
                  variants={rowVariants}
                  initial="hidden"
                  animate={controls}
                >
                  <td className="py-6 pr-4 text-left w-1/2 text-sm md:text-base">
                    {milestone.date}
                  </td>
                  <td className="py-6 text-left w-1/2 text-sm md:text-base">
                    {milestone.milestone}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default KeyMilestones;