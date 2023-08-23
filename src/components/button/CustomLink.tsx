import Link from "next/link";
import { ReactNode } from "react";

interface CustomLinkProps {
  label: string;
  link: string;
  icon: ReactNode;
}

function CustomLink({ label, link, icon }: CustomLinkProps) {
  return (
    <Link
      href={link}
      className="flex font-medium items-center justify-evenly gap-2"
    >
      <span>{label}</span>
      <div className="text-3xl">{icon}</div>
    </Link>
  );
}

export default CustomLink;
