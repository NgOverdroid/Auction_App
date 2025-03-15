'use client'
import {
    KnockFeedProvider,
    KnockProvider,
    NotificationFeedPopover,
    NotificationIconButton,
  } from "@knocklabs/react";
import { useState, useRef } from "react";
  
export default function Provider() {
    const [isVisible, setIsVisible] = useState(false);
    const notifButtonRef = useRef(null);
  
    return (
      <KnockProvider apiKey={process.env.KNOCK_PUBLIC_API_KEY} userId={userId}>
        {/* Optionally, use the KnockFeedProvider to connect an in-app feed */}
        <KnockFeedProvider feedId={process.env.KNOCK_FEED_ID}>
          <div>
            <NotificationIconButton
              ref={notifButtonRef}
              onClick={(e) => setIsVisible(!isVisible)}
            />
            <NotificationFeedPopover
              buttonRef={notifButtonRef}
              isVisible={isVisible}
              onClose={() => setIsVisible(false)}
            />
          </div>
        </KnockFeedProvider>
      </KnockProvider>
    );
  };