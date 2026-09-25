export interface HeroTitleProps {
  children?: React.ReactNode;
  className?: string;
}

export function HeroTitle(props: HeroTitleProps) {
  return (
    <h1
      className={`text-2xl font-bold sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(138,43,226,0.5)] animate-pulse ${
        props.className ?? ""
      }`}
      style={{ animationDuration: "3s" }}
    >
      {props.children}
    </h1>
  );
}
