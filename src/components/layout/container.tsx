import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

export function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
