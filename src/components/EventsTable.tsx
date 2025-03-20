// components/EventsTable.tsx
import Link from "next/link";
import { useRef } from "react";

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
  const worksRef = useRef<HTMLDivElement>(null);

  // Calculate appropriate padding - less padding when no title
  const topPadding = title ? "py-24" : "pt-8 pb-24";

  return (
    <div className={`w-full text-white ${topPadding} px-4 md:px-12 uppercase`}>
      <div className="container mx-auto">
        {/* Only render title if provided */}
        {title && (
          <h2 className="text-6xl font-bold mb-16 md:ml-[50%] uppercase">{title}</h2>
        )}

        <div className="mb-6">
          <h3 className="text-4xl font-bold inline-block">{year}</h3>
          <span className="text-xl ml-4 opacity-70">{yearLabel}</span>
        </div>

        {/* Events Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-t-2 border-white">
                  <td className="py-6 pr-4 text-left w-1/6 text-sm">{event.date}</td>
                  <td className="py-6 pr-4 text-left w-2/6 text-sm">{event.artists}</td>
                  <td className="py-6 pr-4 text-left w-2/6 text-sm">{event.venue}</td>
                  <td className="py-6 text-right w-1/6">
                    <Link href={event.detailsLink} className="text-white hover:text-gray-300 transition-colors text-sm">
                      DETAILS
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Only show "Learn More" link if specified */}
        {showLearnMore && (
          <div className="mt-12 text-right">
            <Link href="/works" className="text-white hover:text-gray-300 transition-colors text-sm">
              Learn More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsTable;