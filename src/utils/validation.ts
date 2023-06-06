function validateEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

function validateLogin(value: string): boolean {
  const loginRegex = /^[a-zA-Z0-9]+$/;
  return loginRegex.test(value);
}

function validatePassword(value: string): boolean {
  const passwordRegex = /^[a-zA-Z0-9]+$/;
  return passwordRegex.test(value);
}

function validatePasswordMatch(
  password: string,
  passwordRepeat: string
): boolean {
  return password === passwordRepeat;
}

function validatePhoneNumber(value: string): boolean {
  const phoneRegex = /^[0-9()+]+$/;
  return phoneRegex.test(value);
}

export function getErrorText(
  fieldName: string,
  value: string,
  password: string
): string {
  if (value === "") {
    return "Поле должно быть заполнено";
  }

  if (fieldName === "email" && !validateEmail(value)) {
    return "Некорректный адрес электронной почты";
  }

  if (fieldName === "login" && !validateLogin(value)) {
    return "Логин должен содержать только латинские буквы и цифры";
  }

  if (fieldName === "password" && !validatePassword(value)) {
    return "Пароль должен содержать только латинские буквы и цифры";
  }

  if (
    fieldName === "passwordRepeat" &&
    !validatePasswordMatch(password, value)
  ) {
    return "Пароли не совпадают";
  }

  if (fieldName === "phone" && !validatePhoneNumber(value)) {
    return "Некорректный номер телефона";
  }

  return "";
}
