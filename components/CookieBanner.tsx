"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "granted");
    setShowBanner(false);
    //analytics mere aq vamateb
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "denied");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 text-white flex justify-between items-center z-50">
      <p className="text-sm">
        We use cookies to improve your experience.
        <a href="/privacy-policy" className="underline ml-1">
          Privacy Policy
        </a>
      </p>
      <div className="flex gap-4">
        <button onClick={declineCookies} className="px-4 py-2 text-sm">
          Decline
        </button>
        <button
          onClick={acceptCookies}
          className="px-4 py-2 bg-blue-600 rounded text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

