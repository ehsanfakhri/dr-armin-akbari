"use client";

// next image
import Image from "next/image";
// next link
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <div>
          <Image
            className="dark:hidden"
            src={"/dr-akbari-logo-light.webp"}
            width={200}
            height={150}
            priority
            alt=""
          />
          <Image
            className="hidden dark:block transition-all"
            src={"/dr-akbari-logo-dark.webp"}
            width={200}
            height={150}
            priority
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
