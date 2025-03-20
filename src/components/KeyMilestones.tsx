import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation, Variants, AnimatePresence } from "framer-motion";

// Define the milestone type
export interface Milestone {
  date: string;
  milestone: string;
}

interface KeyMilestonesProps {
  milestones: Milestone[];
}

const KeyMilestones = ({ milestones }: KeyMilestonesProps) => {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const expandControls = useAnimation(); // Controls for expanded milestones
  const isInView = useInView(ref, { once: false, amount: 0.2, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (showAll) {
      expandControls.start("visible");
    } else {
      expandControls.start("hidden");
    }
  }, [showAll, expandControls]);

  // Animation variants
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const tableHeaderVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 + custom * 0.1, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const expandVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section ref={ref} id="milestones" className="w-full text-white py-24">
      <div className="container mx-auto">
        {/* Title */}
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
            <motion.thead variants={tableHeaderVariants} initial="hidden" animate={controls}>
              <tr>
                <th className="py-4 text-left w-1/2 text-base uppercase font-bold">Date</th>
                <th className="py-4 text-left w-1/2 text-base uppercase font-bold">Milestone</th>
              </tr>
            </motion.thead>
            <tbody>
              {milestones.slice(0, 4).map((milestone, index) => (
                <motion.tr
                  key={index}
                  className="border-t-2 border-white"
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  animate={controls}
                >
                  <motion.td className="py-6 pr-4 text-left w-1/2 text-sm md:text-base">
                    {milestone.date}
                  </motion.td>
                  <motion.td className="py-6 text-left w-1/2 text-sm md:text-base">
                    {milestone.milestone}
                  </motion.td>
                </motion.tr>
              ))}

              {/* Expanded Rows */}
              <AnimatePresence>
                {showAll &&
                  milestones.slice(4).map((milestone, index) => (
                    <motion.tr
                      key={index + 4}
                      className="border-t-2 border-white"
                      custom={index}
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <motion.td className="py-6 pr-4 text-left w-1/2 text-sm md:text-base">
                        {milestone.date}
                      </motion.td>
                      <motion.td className="py-6 text-left w-1/2 text-sm md:text-base">
                        {milestone.milestone}
                      </motion.td>
                    </motion.tr>
                  ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Show More Button */}
        {milestones.length > 4 && (
          <motion.div
            className="flex justify-end mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              className="text-sm font-bold uppercase border px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all"
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : "Show More"}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default KeyMilestones;
