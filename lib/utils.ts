import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Gets the correct image path with the portfolio prefix in production
 * @param path The image path without the portfolio prefix
 * @returns The image path with the portfolio prefix in production
 */
export function getImagePath(path: string): string {
  // If path is already absolute URL or data URL, return as is
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  
  // Add the portfolio prefix in production
  return process.env.NODE_ENV === 'production' 
    ? `/portfolio${path.startsWith('/') ? path : `/${path}`}` 
    : path;
}
