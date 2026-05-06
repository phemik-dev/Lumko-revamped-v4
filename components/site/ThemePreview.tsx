"use client";

import { useEffect } from "react";

export function ThemePreview() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const previewTheme = params.get("theme");

    if (previewTheme === "classic") {
      document.documentElement.dataset.theme = "classic";
      return;
    }

    delete document.documentElement.dataset.theme;
  }, []);

  return null;
}
