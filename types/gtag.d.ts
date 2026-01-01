interface GtagEventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

type GtagCommand = "event" | "config" | "js" | "set";

interface Window {
  gtag: (
    command: GtagCommand,
    eventNameOrConfigId: string,
    params?: GtagEventParams
  ) => void;
}