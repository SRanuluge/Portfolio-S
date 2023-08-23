import Link from "next/link";
import { ReactNode } from "react";

interface CustomButtonProps {
  label: string;
  handleOnClick?(): void;
  icon: ReactNode;
}

function CustomButton({ label, handleOnClick, icon }: CustomButtonProps) {
  return (
    <button
      onClick={handleOnClick}
      className="flex font-medium items-center justify-evenly gap-2 py-2 px-4 border "
    >
      <span>{label}</span>
      <div className="text-3xl cursor-pointer">{icon}</div>
    </button>
  );
}

export default CustomButton;
