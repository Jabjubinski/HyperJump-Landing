"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const StatusNotice = () => {
  const [showNotice, setShowNotice] = useState(false);

  const bugT = useTranslations("Bug");

  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem("construction-notice");
    if (!hasSeenNotice) {
      setShowNotice(true);
    }
  }, []);

  const closeNotice = () => {
    setShowNotice(false);
    sessionStorage.setItem("construction-notice", "true");
  };

  return (
    <>
      {showNotice && (
        <div className="fixed bottom-8 left-8 z-100 max-w-sm">
          <div className="bg-white text-black p-6 rounded-2xl shadow-2xl flex flex-col gap-4 border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                System Status
              </span>
            </div>
            <p className="text-sm font-medium leading-tight">{bugT("text")}</p>
            <button
              onClick={closeNotice}
              className="text-[10px] uppercase tracking-widest font-black border-t border-black/10 pt-4 text-left hover:opacity-50 transition-opacity"
            >
              [ {bugT("accept")} ]
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StatusNotice;
