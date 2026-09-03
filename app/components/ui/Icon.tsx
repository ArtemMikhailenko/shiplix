import type { SVGProps } from "react";

/**
 * The few icons the site needs, inline. Emoji rendered differently on every
 * platform and looked out of place next to the type; a shared stroke set
 * keeps them consistent and colourable with currentColor.
 */
export type IconName =
  | "cloud"
  | "coins"
  | "cart"
  | "store"
  | "phone"
  | "close"
  | "chevronLeft"
  | "chevronRight"
  | "mapPin";

const PATHS: Record<IconName, React.ReactNode> = {
  cloud: <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97 6 6 0 0 0-11.66 1.2A3.5 3.5 0 0 0 7 19h10.5Z" />,
  coins: (
    <>
      <circle cx="9" cy="9" r="5" />
      <path d="M14.7 5.2a5 5 0 0 1 0 13.6M12 15.5a5 5 0 0 0 3 1.5" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h2.2l2.4 12.1a1.5 1.5 0 0 0 1.5 1.2h9.3a1.5 1.5 0 0 0 1.5-1.2L20.5 7H5.3" />
    </>
  ),
  store: (
    <>
      <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
      <path d="M3 9h18l-1.4-4.3A1 1 0 0 0 18.6 4H5.4a1 1 0 0 0-1 .7L3 9Z" />
      <path d="M9 20v-5h6v5" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevronLeft: <path d="M15 5l-7 7 7 7" />,
  chevronRight: <path d="M9 5l7 7-7 7" />,
  mapPin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

export function Icon({
  name,
  size = 20,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}
