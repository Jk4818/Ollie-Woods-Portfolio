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

interface SelectedWorksProps {
  events: Event[];
}

const EventsTable = ({ events }: SelectedWorksProps) => {
  const worksRef = useRef<HTMLDivElement>(null);

  return (
    <section id="works" ref={worksRef} className="w-full bg-black text-white py-24 px-4 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold mb-16">SELECTED WORKS.</h2>
        
        <div className="mb-6">
          <h3 className="text-4xl font-bold inline-block">2025</h3>
          <span className="text-xl ml-4 opacity-70">(INC. UPCOMING)</span>
        </div>
        
        {/* Events Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-t-2 border-white bor">
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
        
        <div className="mt-12 text-right">
          <Link href="/works" className="text-white hover:text-gray-300 transition-colors text-sm">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsTable;