import { useEffect } from "preact/hooks";

export const useWindowEvent = <EventType extends keyof WindowEventMap>(
  eventType: EventType,
  callback: (event: WindowEventMap[EventType]) => void
) => {
  // addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  useEffect(() => {
    window.addEventListener(eventType, callback);
    return () => {
      window.removeEventListener(eventType, callback);
    };
  }, [eventType, callback]);
};
