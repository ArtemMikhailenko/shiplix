/** "14 weeks" in PROJECT_META → "14 тижнів" in the reader's language; "" when unknown. */
export const formatDuration = (raw: string, template: string) => {
  const weeks = parseInt(raw, 10);
  return Number.isFinite(weeks) ? template.replace("{n}", String(weeks)) : "";
};
