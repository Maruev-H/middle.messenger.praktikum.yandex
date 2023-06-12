import { Avatar } from "../../../../partials/avatar/index";
import { ButtonSubmit } from "../../../../partials/button-submit";
import { ChangeAvatar } from "../../../../partials/change-avatar";
import { DataChangeInput } from "../../../../partials/data-change-input";
import { Div } from "../../../../partials/div";
import { FormComponent } from "../../../../partials/form-component";
import { Input } from "../../../../partials/input";
import Block from "../../../../utils/Block";
import template from "./profile-data-change.hbs";

export class ProfileDataChangePage extends Block {
  constructor() {
    const formFields = [
      { name: "email", value: "pochta@yandex.ru", label: "Почта" },
      { name: "login", value: "pochta@yandex.ru", label: "Логин" },
      { name: "first_name", value: "first name", label: "Имя" },
      { name: "second_name", value: "last name", label: "Фамилия" },
      { name: "display_name", value: "nickname", label: "Имя в чате" },
      { name: "phone", value: "+7 (777) 777 77 77", label: "Телефон" },
    ].map(
      (formField) =>
        new DataChangeInput({
          label: formField.label,
          input: new Input({
            name: formField.name,
            className: "user-data",
            type: "text",
            value: formField.value,
          }),
        })
    );
    super({
      avatar: new Avatar(),
      changeAvatarModalWindow: new ChangeAvatar(),
      profileDataChangeForm: new FormComponent({
        className: "change-form",
        formComponents: [
          ...formFields,
          new Div({
            className: "profile__data-change",
            divChildrens: [
              new ButtonSubmit({
                text: "Сохранить",
                type: "Submit",
                className: "change-btn",
              }),
            ],
          }),
        ],
      }),
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}