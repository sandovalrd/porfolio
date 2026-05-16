const ONE_DAY = 1000 * 60 * 60 * 24;

export function formatRelativeTime(dateStr: string, locale: string = "en"): string {
  const date = new Date(
    parseInt(dateStr.substring(0, 4)),
    parseInt(dateStr.substring(4, 6)) - 1,
    parseInt(dateStr.substring(6, 8))
  );
  const diffMs = date.getTime() - Date.now();
  const diffDays = Math.round(diffMs / ONE_DAY);
  const absDays = Math.abs(diffDays);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (absDays < 30) return rtf.format(diffDays, "day");
  if (absDays < 365) return rtf.format(Math.round(diffDays / 30), "month");
  return rtf.format(Math.round(diffDays / 365), "year");
}
