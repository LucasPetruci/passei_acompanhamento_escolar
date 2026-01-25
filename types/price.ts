export interface PricingPlan {
  title: string;
  price: string;
  originalPrice?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
}

export type ServiceType = "regular" | "dua";

export type DiscountType = "none" | "sibling" | "annual";