export function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatRevenue(number) {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
