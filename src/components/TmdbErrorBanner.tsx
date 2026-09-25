// @ts-nocheck
import { useEffect, useState } from "react";

export function TmdbErrorBanner() {
  const [hasError, setHasError] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Listen for TMDB errors via a custom event or check localStorage flag
    const checkError = () => {
      try {
        const flag = localStorage.getItem("tmdb-error-flag");
        if (flag) {
          const data = JSON.parse(flag);
          // If error was recent (within 1 hour), show banner
          if (Date.now() - data.timestamp < 3600000) {
            setHasError(true);
          }
        }
      } catch {}
    };

    checkError();

    // Listen for custom event
    const handler = () => setHasError(true);
    window.addEventListener("tmdb-error", handler as any);

    return () => window.removeEventListener("tmdb-error", handler as any);
  }, []);

  if (!hasError || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-red-900/90 backdrop-blur-md border-b border-red-700 text-white px-4 py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="text-xl">⚠️</span>
        <div className="flex flex-col">
          <span className="font-bold">TMDB Connection Issue</span>
          <span className="text-sm opacity-90">
            Movies not loading? Your TMDB API key might be invalid. The site is trying to use a fallback key. 
            You can set a custom key in console: <code className="bg-black/30 px-1 rounded">localStorage.setItem('tmdb-api-key-override', 'YOUR_KEY')</code> then reload.
            Get a free key at themoviedb.org → Settings → API.
          </span>
        </div>
      </div>
      <button
        onClick={() => setIsDismissed(true)}
        className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-sm shrink-0"
      >
        Dismiss
      </button>
    </div>
  );
}

// Helper to report TMDB errors
export function reportTmdbError(error: any) {
  try {
    // Check if it's an invalid API key error
    const msg = String(error?.message || error || "").toLowerCase();
    const isAuthError = 
      msg.includes("invalid api key") || 
      msg.includes("status_code\":7") ||
      msg.includes("unauthorized") ||
      (error?.status === 401);

    if (isAuthError) {
      localStorage.setItem("tmdb-error-flag", JSON.stringify({
        timestamp: Date.now(),
        error: String(error).slice(0, 500)
      }));
      window.dispatchEvent(new CustomEvent("tmdb-error"));
    }
  } catch {}
}
