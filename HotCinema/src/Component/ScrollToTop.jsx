import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Scroll to top on component mount
    scrollToTop();

    // Scroll to top on page refresh
    const handleBeforeUnload = () => {
      scrollToTop();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Scroll to top on pathname change
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload); // Cleanup beforeunload listener
    };
  }, [pathname]);

  return null;
}
