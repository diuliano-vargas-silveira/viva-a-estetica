export function isValidForm(form) {
  const arrayInputs = Object.keys(form).map((key) => form[key]);

  return arrayInputs.every((input) => input.length > 0);
}
