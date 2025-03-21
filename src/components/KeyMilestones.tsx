import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";

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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const expandVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section ref={ref} id="milestones" className="w-full text-white py-24">
      <div className="container mx-auto">
        {/* Title */}
        <motion.h2
          className="text-6xl font-bold mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          custom={0}
        >
          KEY MILESTONES.
        </motion.h2>

        {/* Milestones Table */}
        <div className="w-full overflow-x-auto uppercase">
          <table className="w-full border-collapse">
            <motion.thead
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              custom={1}
            >
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
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index + 2}
                >
                  <td className="py-6 pr-4 text-left w-1/2 text-sm md:text-base">{milestone.date}</td>
                  <td className="py-6 text-left w-1/2 text-sm md:text-base">{milestone.milestone}</td>
                </motion.tr>
              ))}

              {/* Expanded Rows */}
              <AnimatePresence>
                {showAll &&
                  milestones.slice(4).map((milestone, index) => (
                    <motion.tr
                      key={index + 4}
                      className="border-t-2 border-white"
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <td className="py-6 pr-4 text-left w-1/2 text-sm md:text-base">{milestone.date}</td>
                      <td className="py-6 text-left w-1/2 text-sm md:text-base">{milestone.milestone}</td>
                    </motion.tr>
                  ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Show More Button */}
        {milestones.length > 4 && (
          <div className="flex justify-end mt-6">
            <motion.button
              className="text-sm font-bold uppercase border px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all"
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : "Show More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default KeyMilestones;
