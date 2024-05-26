import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const redirectTo = (link: string) => {
  console.log("Redirecting to: ", link);
  window.open(link, "_blank");
};
