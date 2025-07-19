import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(fullName: string) {
  if (!fullName) return '';

  return fullName
    .trim()
    .split(/\s+/)                 // coupe chaque mot
    .map(word => word[0].toUpperCase()) // prend la première lettre
    .join('');
}

const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/Crypgo/"
    : "/";
};

export { getImagePrefix };
 
