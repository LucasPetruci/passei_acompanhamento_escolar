import { ReactNode } from "react";

export interface MethodologyCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  iconBg: string;
}

export interface MethodologySectionProps {
  title: string;
  subtitle: string;
  backgroundColor: string;
  cards: MethodologyCardProps[];
}