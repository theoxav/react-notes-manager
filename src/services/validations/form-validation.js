export class FormValidator {
  static min(value, min) {
    if (value.length < min) {
      return `Veullez entrer au moins ${min} caractères`;
    }
  }

  static max(value, max) {
    if (value.length > max) {
      return `Veullez entrer au plus ${max} caractères`;
    }
  }
}
