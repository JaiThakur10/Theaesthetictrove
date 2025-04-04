import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // ✅ Use PascalCase (Component format)
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // ✅ Don't return JSX, it's just a side effect
};

export default ScrollToTop;
