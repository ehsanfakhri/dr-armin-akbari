"use client";

// components
import CountUp from "react-countup";

interface IBadgeProps {
  containerStyles: string;
  icon: JSX.Element;
  badgetext: string;
}

const Badge = ({ containerStyles, icon, badgetext }: IBadgeProps) => {
  return (
    <div className={`badge ${containerStyles}`}>
      {/* icon */}
      <div className="text-5xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-1">
        {/* inside text */}
        <div className="text-4xl leading-none font-bold text-primary"></div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {/* bage text */}
          {badgetext}
        </div>
      </div>
    </div>
  );
};

export default Badge;
