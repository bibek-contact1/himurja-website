import type { AnchorHTMLAttributes, ReactNode } from "react";
import { routePath } from "@/lib/base-path";

type StaticLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  prefetch?: boolean | null;
};

export default function StaticLink({ children, prefetch, ...props }: StaticLinkProps) {
  void prefetch;

  return (
    <a {...props} href={routePath(props.href)}>
      {children}
    </a>
  );
}
