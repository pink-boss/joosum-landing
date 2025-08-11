"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export default function SendLandingEvent() {
  useEffect(() => {
    sendGTMEvent({ event: "view.landing" });
  }, []);

  return <></>;
}
