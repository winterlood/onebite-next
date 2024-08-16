import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <div>임시 서치바</div>
      {children}
    </div>
  );
}
