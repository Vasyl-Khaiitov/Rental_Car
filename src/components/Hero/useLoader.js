import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useNavigationLoader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  const navigateWithLoader = (path) => {
    setIsNavigating(true);
    navigate(path);
  };

  useEffect(() => {
    setIsNavigating(false);
  }, [location.pathname]);

  return { isNavigating, navigateWithLoader };
}
