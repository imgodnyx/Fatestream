// @ts-nocheck
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import { Icon, Icons } from "@/components/Icon";
import { useIsMobile } from "@/hooks/useIsMobile";

export function BrandPill(props: {
  clickable?: boolean;
  header?: boolean;
  backgroundClass?: string;
}) {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div
      className={classNames(
        "flex items-center space-x-2 rounded-full px-5 py-2.5 text-type-logo backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(138,43,226,0.3)]",
        props.backgroundClass ?? "bg-gradient-to-r from-purple-900/40 to-cyan-900/40",
        props.clickable
          ? "transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:border-cyan-400/30 active:scale-95"
          : "",
      )}
    >
      <Icon className="text-2xl drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" icon={Icons.LOGO} />
      <span
        className={[
          "font-bold tracking-wider bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent",
          isMobile && props.header ? "hidden sm:block" : "",
        ].join(" ")}
      >
        {t("global.name")}
      </span>
    </div>
  );
}
