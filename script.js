function uniqArray(array) {
  if (Array.isArray(array)) {
    return [...new Set(array)];
  } else {
    return "Wprowadzone wartości nie są tablicą.";
  }
}
