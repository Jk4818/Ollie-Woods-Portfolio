import React from "react";
import Link from "next/link";

interface LearnMoreLinkProps {
  href: string;
  text?: string;
  target?: string;
  className?: string;
  ariaLabel?: string;
}

const LearnMoreLink: React.FC<LearnMoreLinkProps> = ({
  href,
  text = "Learn More",
  target = "_blank",
  className = "",
  ariaLabel
}) => {
  // Set proper rel attribute when target is _blank for security
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;
  
  // Generate accessible aria-label if not provided
  const accessibleLabel = ariaLabel || `${text}${target === "_blank" ? " (opens in a new tab)" : ""}`;
  
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={accessibleLabel}
      className={`
        relative 
        inline-block
        font-medium
        transition-colors
        duration-200
        hover:text-gray-300
        after:content-['']
        after:absolute
        after:w-0
        after:h-[1px]
        after:bg-current
        after:left-0
        after:bottom-[-2px]
        after:transition-all
        after:duration-300
        hover:after:w-full
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-gray-300
        ${className}
      `}
    >
      {text}
    </Link>
  );
};

export default LearnMoreLink;