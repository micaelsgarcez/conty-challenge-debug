export function normalizeKey(key: string): string {
  return key.normalize("NFKC").replace(/[\p{Cf}\s]/gu, "").toLowerCase();
}
