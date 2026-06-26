import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  center?: boolean;
}

export default function AuthLayout({ children, center = false }: Props) {
  return (
    <div className={`flex justify-center items-center ds-bg-primary  ${center ? "h-screen" : ""}`}>
      <div className="w-120 py-5 my-9 ds-bg-alt flex flex-col  justify-center items-center px-10 ds-text-disabled rounded-md shadow">
        {children}
      </div>
    </div>
  );
}
