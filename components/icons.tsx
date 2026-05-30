import type { SVGProps } from "react";

export type IconName =
  | "arrow-up-right"
  | "badge-check"
  | "braces"
  | "code"
  | "database"
  | "github"
  | "linkedin"
  | "mail"
  | "rocket"
  | "server"
  | "sparkles"
  | "terminal"
  | "zap";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const paths: Record<IconName, JSX.Element> = {
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  "badge-check": <path d="M8.5 12.5 11 15l4.5-5M12 3l2 1.7 2.6-.2 1 2.4 2.2 1.4-.7 2.5.7 2.5-2.2 1.4-1 2.4-2.6-.2L12 21l-2-1.7-2.6.2-1-2.4-2.2-1.4.7-2.5-.7-2.5 2.2-1.4 1-2.4 2.6.2L12 3Z" />,
  braces: <path d="M8 3H7a3 3 0 0 0-3 3v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a3 3 0 0 0 3 3h1M16 3h1a3 3 0 0 1 3 3v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a3 3 0 0 1-3 3h-1" />,
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  database: <path d="M4 6c0 1.7 3.6 3 8 3s8-1.3 8-3-3.6-3-8-3-8 1.3-8 3Zm0 0v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1.3-3.8c4.2-.5 8.6-2.1 8.6-9.2a7 7 0 0 0-2-5 6.5 6.5 0 0 0-.1-5s-1.6-.5-5.2 1.9a17.8 17.8 0 0 0-9.5 0C1.9-4.5.3-4 .3-4a6.5 6.5 0 0 0-.1 5 7 7 0 0 0-2 5c0 7.1 4.4 8.7 8.6 9.2A4.8 4.8 0 0 0 5.5 18v4M5.5 18c-3.2 1-3.2-1.6-4.5-2" transform="translate(2 2) scale(.83)" />,
  linkedin: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />,
  mail: <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />,
  rocket: <path d="M4.5 16.5c-1.1.9-1.5 3.2-1.5 3.2s2.3-.4 3.2-1.5c.5-.6.5-1.5-.1-2.1-.5-.5-1.4-.6-2 .4ZM9 15l-2-2a13 13 0 0 1 2.3-5.5C12.2 3.8 16 3 21 3c0 5-.8 8.8-4.5 11.7A13 13 0 0 1 11 17l-2-2ZM15 9h.01" />,
  server: <path d="M4 3h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 10h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Zm2-6h.01M6 17h.01" />,
  sparkles: <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3ZM19 3v4M21 5h-4M5 17v4M7 19H3" />,
  terminal: <path d="m4 17 6-6-6-6M12 19h8" />,
  zap: <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
};

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
