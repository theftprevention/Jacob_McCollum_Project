const escapePattern = /[-/\\^$*+?.()|[\]{}]/g;

export function regExpEscape(string: string) {
  return string.replace(escapePattern, '\\$&');
}

export function toString(value: any): string {
  return value ? String(value).trim() : '';
}
