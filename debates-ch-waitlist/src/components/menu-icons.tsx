/** The two line icons the marketing chrome still needs. */

function base(path: React.ReactNode) {
  return function Icon({ className = "h-5 w-5" }: { className?: string }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden
      >
        {path}
      </svg>
    );
  };
}

export const MenuIcon = base(<path d="M4 7h16M4 12h16M4 17h16" />);
export const CloseIcon = base(<path d="M6 6l12 12M18 6L6 18" />);
export const CheckIcon = base(<path d="M4.5 12.5l5 5 10-11" />);
