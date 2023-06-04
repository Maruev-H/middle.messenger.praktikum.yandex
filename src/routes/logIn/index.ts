import { ButtonLink } from "../../partials/button-link";
import { ButtonSubmit } from "../../partials/button-submit";
import { FormComponent } from "../../partials/form-component";
import { SignInput } from "../../partials/sign-input";
import Block from "../../utils/Block";
import sendRequest from "../../utils/SendRequest";
import template from "./logIn.hbs";

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
      });

      const inputElement = signInput?.getContent()?.querySelector("input");

      const focus = (event) => {
        const input = event.target as HTMLInputElement;
        input.classList.remove("invalideInput");
      };

      const blur = (event) => {
        const input = event.target as HTMLInputElement;
        const value = input.value.trim();
        if (value === "") {
          input.classList.add("invalideInput");
          signForm[inputData.name] = "";
        } else {
          signForm[inputData.name] = value;
        }
      };

      inputElement?.addEventListener("focus", focus);

      inputElement?.addEventListener("blur", blur);

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

                    if (input.value.trim() === "") {
                      input.classList.add("invalideInput");
                      signForm[inputData.name] = "";
                      acc += 1;
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
