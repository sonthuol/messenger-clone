"use client";

import Image from "next/image";
import { User } from "@prisma/client";

interface AvatartProps {
  user?: User;
}

const Avatar: React.FC<AvatartProps> = ({ user }) => {
  return (
    <div className="relative">
      <div
        className="
            relative
            inline-block
            rounded-full
            overflow-hidden
            h-9
            w-9
            md:h-11
            md:w-11
    "
      >
        <Image
          alt="Avater"
          src={user?.image || "/images/placeholder.jpg"}
          fill
        />
      </div>
      <span
        className="
        absolute
        block
        rounded-full
        bg-green-500
        ring-2
        top-0
        right-0
        h-2
        w-2
        md:h-3
        md:w-3
      "
      />
    </div>
  );
};

export default Avatar;