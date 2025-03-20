import Link from "next/link";

interface LearnMoreLinkProps {
  href: string;
}

const LearnMoreLink: React.FC<LearnMoreLinkProps> = ({ href }) => {
  return (
    <div className="text-right pb-6">
      <Link
        href={href}
        target="_blank"
        className="text-white text-sm font-semibold tracking-wide border-b border-white pb-1 hover:opacity-80"
      >
        Learn More
      </Link>
    </div>
  );
};

export default LearnMoreLink;
