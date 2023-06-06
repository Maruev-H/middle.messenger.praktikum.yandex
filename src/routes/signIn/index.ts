import { ButtonLink } from "../../partials/button-link";
import { ButtonSubmit } from "../../partials/button-submit";
import { FormComponent } from "../../partials/form-component";
import { SignInput } from "../../partials/sign-input";
import Block from "../../utils/Block";
import {
  getErrorText
} from "../../utils/validation";
import template from "./signIn.hbs";
import { nanoid } from "nanoid";

interface FormInput {
  name: string;
  type: string;
  label: string;
  className?: string;
}

export class SignIn extends Block {
  constructor() {
    const signForm: Record<string, string> = {};

    const formInputs: FormInput[] = [
      { name: "email", type: "text", label: "Почта" },
      { name: "login", type: "text", label: "Логин" },
      { name: "first_name", type: "text", label: "Имя" },
      { name: "second_name", type: "text", label: "Фамилия" },
      { name: "phone", type: "text", label: "Телефон" },
      { name: "password", type: "password", label: "Пароль" },
      { name: "passwordRepeat", type: "password", label: "Пароль (еще раз)" },
    ];

    const signInputs = formInputs.map((inputData) => {
      const signInput = new SignInput({
        ...inputData,
        id: nanoid(3),
        events: {
          focus: (event) => {
            const input = event?.target as HTMLInputElement;
            input.classList.remove("invalideInput");
            input.value = "";
            const errorElem =
              input.parentElement?.querySelector(".error_message");
            errorElem!.textContent = "";
          },
          focusout: (event) => {
            const input = event?.target as HTMLInputElement;
            const value = input.value.trim();
            const errorElem = input.parentElement?.querySelector(".error_message");
            const errorText = getErrorText(inputData.name, value, signForm['password']);
          
            if (errorText !== "") {
              input.classList.add("invalideInput");
              errorElem!.textContent = errorText;
              signForm[inputData.name] = "";
            } else {
              input.classList.remove("invalideInput");
              errorElem!.textContent = "";
              signForm[inputData.name] = value;
            }
          },

         
        },
      });
      return signInput;
    });

    super({
      form: new FormComponent({
        formComponents: [
          ...signInputs,
          new ButtonSubmit({
            text: "Зарегистрироваться",
            className: "login__button blue_button",
            events: {
              click: () => {
                const invalideInputsAmount = formInputs.reduce(
                  (acc, inputData) => {
                    const input = document.querySelector(
                      `input[name=${inputData.name}]`
                    ) as HTMLInputElement;

                    const value = input.value

                    const errorElem = input.parentElement?.querySelector(".error_message");

                    const errorText = getErrorText(inputData.name, value, signForm['password'] || '')

                    if (errorText !== "") {
                      input.classList.add("invalideInput");
                      errorElem!.textContent = errorText;
                      signForm[inputData.name] = "";
                      acc += 1
                    } else {
                      input.classList.remove("invalideInput");
                      errorElem!.textContent = "";
                      signForm[inputData.name] = value;
                    }
                    
                    return acc;
                  },
                  0
                );

                if (invalideInputsAmount === 0) {
                  console.log(signForm);
                } else {
                  console.log("Заполните обязательные поля");
                }
              },
            },
          }),
          new ButtonLink({
            text: "Войти",
            href: "log-in",
            className: "login__button white_button",
          }),
        ],
      }),
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
