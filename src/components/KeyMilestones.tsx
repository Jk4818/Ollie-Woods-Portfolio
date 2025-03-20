// components/KeyMilestones.tsx
import { useRef } from "react";
import { motion } from "framer-motion";

// Define the milestone type
export interface Milestone {
  date: string;
  milestone: string;
}

interface KeyMilestonesProps {
  milestones: Milestone[];
}

const KeyMilestones = ({ milestones }: KeyMilestonesProps) => {
  const milestonesRef = useRef<HTMLDivElement>(null);

  return (
    <section id="milestones" ref={milestonesRef} className="w-full text-white py-24 ">
      <div className="container mx-auto">
        {/* Title aligned with the milestone column */}
        <div className="flex">
          <div className="hidden lg:block w-1/2"></div>
          <div className="w-full lg:w-1/2">
            <motion.h2 
              className="text-6xl font-bold mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              KEY MILESTONES.
            </motion.h2>
          </div>
        </div>

        {/* Milestones Table */}
        <div className="w-full overflow-x-auto uppercase">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-white">
                <th className="py-4 text-left w-1/2  text-base uppercase font-bold">Date</th>
                <th className="py-4 text-left w-1/2 text-base uppercase font-bold">Milestone</th>
              </tr>
            </thead>
            <tbody>
              {milestones.map((milestone, index) => (
                <motion.tr 
                  key={index} 
                  className="border-t-2 border-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
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