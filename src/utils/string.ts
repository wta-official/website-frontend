export const formatName = (raw = ''): string =>
  raw
    .trim()
    .toLowerCase()
    // capitalise every word-start (handles spaces, hyphens, apostrophes)
    .replace(/\b\w/g, (ch) => ch.toUpperCase())
    .replace(/\s+/g, ' ');
