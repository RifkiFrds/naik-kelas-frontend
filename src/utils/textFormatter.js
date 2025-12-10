export function splitBusinessTitle(text) {
  if (!text) return "";

  // Pisahkan hanya sekali sebelum kata ADAKOM
  return text.replace("ADAKOM", "\nADAKOM");
}
