import { ReactNode } from "react";

export interface PtagProps {
  size?: 's' | 'm' | 'l';
  children: ReactNode;
}