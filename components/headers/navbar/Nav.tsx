"use client";

// next link
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// icons lucide react
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  GalleryThumbnails,
  Headset,
  Icon,
} from "lucide-react";

interface INavPrps {
  containerStyles?: string;
  LinkStyles?: string;
  underLineStyles?: string;
}

// frame motion
import { motion } from "framer-motion";
import React from "react";

const links = [
  {
    path: "/contact",
    name: "تماس",
    icon: <Headset size={"20"} strokeWidth={3} />,
  },
  {
    path: "/projects",
    name: "نمونه کارها",
    icon: <GalleryThumbnails size={"20"} strokeWidth={3} />,
  },
  {
    path: "/",
    name: "خانه",
    icon: <HomeIcon size={"20"} strokeWidth={3} />,
  },
];

const Nav = ({ containerStyles, LinkStyles, underLineStyles }: INavPrps) => {
  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize ${LinkStyles}  `}
        >
          {link.path === pathname && (
            <motion.span
              initial={{ y: "-100" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underLineStyles}`}
            />
          )}
          <div className="flex items-center justify-end text-sm gap-2">
            {link.name}
            {link.icon}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
