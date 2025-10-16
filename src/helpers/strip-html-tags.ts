export function stripHtmlTags(str: string): string {
  if (!str) return "";
  return str
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
