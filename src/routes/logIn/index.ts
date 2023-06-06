import { ButtonLink } from "../../partials/button-link";
import { ButtonSubmit } from "../../partials/button-submit";
import { FormComponent } from "../../partials/form-component";
import { SignInput } from "../../partials/sign-input";
import Block from "../../utils/Block";
import template from "./logIn.hbs";
import { getErrorText } from "../../utils/validation";
import { nanoid } from "nanoid";

interface FormInput {
  name: string;
  type: string;
  label: string;
}

export class LoginPage extends Block {
  constructor() {
    const formInputs: FormInput[] = [
      { name: "login", type: "text", label: "Логин" },
      { name: "password", type: "password", label: "Пароль" },
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
            const errorElem =
              input.parentElement?.querySelector(".error_message");
            const errorText = getErrorText(
              inputData.name,
              value,
              signForm["password"]
            );

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

    const signForm: Record<string, string> = {};

    super({
      form: new FormComponent({
        formComponents: [
          ...signInputs,
          new ButtonSubmit({
            text: "Авторизоваться",
            className: "login__button blue_button",
            events: {
              click: () => {
                const invalideInputsAmount = formInputs.reduce(
                  (acc, inputData) => {
                    const input = document.querySelector(
                      `input[name=${inputData.name}]`
                    ) as HTMLInputElement;

                    const value = input.value;

                    const errorElem =
                      input.parentElement?.querySelector(".error_message");

                    const errorText = getErrorText(
                      inputData.name,
                      value,
                      signForm["password"] || ""
                    );

                    if (errorText !== "") {
                      input.classList.add("invalideInput");
                      errorElem!.textContent = errorText;
                      signForm[inputData.name] = "";
                      acc += 1;
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
            text: "Нет аккаунта?",
            href: "/sign-in",
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
