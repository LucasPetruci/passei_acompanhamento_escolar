import { ReactNode } from "react";

export interface MethodologyCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  borderColor: string;
  iconBg: string;
}