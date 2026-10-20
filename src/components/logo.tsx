import type { SVGProps } from "react";

/**
 * Logo MKCELL — chat-bubble vermelho refinado.
 * Mantém identidade visual atual (chat-bubble + vermelho), refinada em vetor.
 *
 * Uso:
 *   <Logo className="size-12" />              -> com cor brand (currentColor)
 *   <Logo variant="mono" className="text-foreground" />
 *   <Logo variant="white" />
 */

export type LogoVariant = "brand" | "mono" | "white";

interface LogoProps extends Omit<SVGProps<SVGSVGElement>, "fill"> {
  variant?: LogoVariant;
  withWordmark?: boolean;
}

export function Logo({ variant = "brand", withWordmark = false, className, ...props }: LogoProps) {
  const fill =
    variant === "brand" ? "var(--primary)" : variant === "white" ? "#ffffff" : "currentColor";

  if (withWordmark) {
    return (
      <svg
        viewBox="0 0 220 64"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="MKCELL"
        className={className}
        {...props}
      >
        <title>MKCELL</title>
        {/* Mark: chat-bubble */}
        <path
          d="M16 8h32a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H30l-10 10v-10h-4a8 8 0 0 1-8-8V16a8 8 0 0 1 8-8z"
          fill={fill}
        />
        {/* Sparkle pixel inside bubble */}
        <circle cx="22" cy="27" r="2.6" fill="#ffffff" />
        <circle cx="32" cy="27" r="2.6" fill="#ffffff" />
        <circle cx="42" cy="27" r="2.6" fill="#ffffff" />
        {/* Wordmark */}
        <text
          x="72"
          y="42"
          fontFamily="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif"
          fontSize="28"
          fontWeight="800"
          letterSpacing="-0.04em"
          fill="currentColor"
        >
          MKCELL
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="MKCELL"
      className={className}
      {...props}
    >
      <title>MKCELL</title>
      <path
        d="M16 8h32a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H30l-10 10v-10h-4a8 8 0 0 1-8-8V16a8 8 0 0 1 8-8z"
        fill={fill}
      />
      <circle cx="22" cy="27" r="2.6" fill="#ffffff" />
      <circle cx="32" cy="27" r="2.6" fill="#ffffff" />
      <circle cx="42" cy="27" r="2.6" fill="#ffffff" />
    </svg>
  );
}
