"use client"

export const trackEvent = (eventName: string, eventData?: GtagEventParams): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventData);
  }
};

export const trackWhatsAppClick = (): void => {
  trackEvent("whatsapp_click", {
    category: "engagement",
    label: "WhatsApp Button",
  });
};

export const trackPriceCardView = (planType: string): void => {
  trackEvent("view_pricing", {
    category: "engagement",
    label: planType,
  });
};

export const trackLocationView = (location: string): void => {
  trackEvent("view_location", {
    category: "engagement",
    label: location,
  });
};
