import { AbstractControl } from '@angular/forms';

export const passwordRegex = new RegExp(
  '^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$'
);

export const passwordValidator = (control: AbstractControl) => {
  const password = control.value;
  if (!password) {
    return null;
  }
  const valid = passwordRegex.test(password);
  return valid ? null : { invalidPassword: true };
};

export const confirmPasswordValidator = (control: AbstractControl) => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (!password || !confirmPassword) {
    return null;
  }
  return password.value === confirmPassword.value
    ? null
    : { passwordsDontMatch: true };
};
