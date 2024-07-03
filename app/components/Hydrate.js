"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Hydrate({ children }) {
  const [isHydrated, setIsHydrated] = useState(false);

  //Wait till NextJs hydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        <>{children}</>
      ) : (
        <div className="flex items-center justify-center h-[100vh]">
          <Loading />
        </div>
      )}
    </>
  );
}
