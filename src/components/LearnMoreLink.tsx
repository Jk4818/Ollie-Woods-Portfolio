import Link from "next/link";

interface LearnMoreLinkProps {
  href: string;
  text?: string; // Optional text prop with a default value
}

const LearnMoreLink: React.FC<LearnMoreLinkProps> = ({ href, text = "Learn More" }) => {
  return (
    <div className="text-right pb-6">
      <Link
        href={href}
        target="_blank"
        className="text-white text-sm font-semibold tracking-wide border-b border-white pb-1 hover:opacity-80"
      >
        {text}
      </Link>
    </div>
  );
};

export default LearnMoreLink;
