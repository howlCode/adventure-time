export function TextTruncate(str, len, end) {
  if (!len && !end) return str;
  end = end || "...";
  return str.substr(0, len - end.length) + end;
}
