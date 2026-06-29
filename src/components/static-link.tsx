import type { AnchorHTMLAttributes, ReactNode } from "react";

type StaticLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    children: ReactNode;
    prefetch?: boolean | null;
  };

export default function StaticLink({ children, prefetch, ...props }: StaticLinkProps) {
  void prefetch;

  return <a {...props}>{children}</a>;
}
