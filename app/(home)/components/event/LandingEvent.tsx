'use client';

import { sendGTMEvent } from '@next/third-parties/google';

import { useEffect } from 'react';

export default function LandingEvent() {
  useEffect(() => {
    sendGTMEvent({ event: 'view.landing' });
  }, []);

  return <></>;
}
