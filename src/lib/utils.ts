import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formateo de moneda
export function formatCurrency(amount: number | string | { toNumber(): number }): string {
  const value =
    typeof amount === "string"
      ? parseFloat(amount)
      : typeof amount === "object" && amount !== null && "toNumber" in amount
      ? amount.toNumber()
      : (amount as number);

  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Formateo de fechas
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  }).format(d);
}

export function formatDateRange(startDate: Date | string, endDate: Date | string): string {
  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;

  const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();

  if (sameMonth) {
    return `${start.getDate()} - ${formatDate(end)}`;
  }
  return `${formatDate(start)} - ${formatDate(end)}`;
}
