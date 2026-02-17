const VOLUME_THRESHOLD = 1_000_000; // cm^3
const DIMENSION_THRESHOLD = 150; // cm
const MASS_THRESHOLD = 20; // kg

function sort(width, height, length, mass) {
  const args = [width, height, length, mass];
  if (args.some((v) => typeof v !== "number" || !isFinite(v) || v < 0)) {
    throw new Error("All arguments must be finite non-negative numbers");
  }

  const bulky =
    width * height * length >= VOLUME_THRESHOLD ||
    width >= DIMENSION_THRESHOLD ||
    height >= DIMENSION_THRESHOLD ||
    length >= DIMENSION_THRESHOLD;

  const heavy = mass >= MASS_THRESHOLD;

  if (bulky && heavy) return "REJECTED";
  if (bulky || heavy) return "SPECIAL";
  return "STANDARD";
}

module.exports = { sort };
