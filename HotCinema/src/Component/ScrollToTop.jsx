import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from 'react';
import PageContext from '../Page_context/PageContext.jsx';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const { page } = useContext(PageContext);

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
  }, [pathname,page]);

  return null;
}
