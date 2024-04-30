export const hashtags = (text) => {
  return text.split(" ").filter(items => items.charAt(0) === "#")
}
