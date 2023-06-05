import { ButtonSubmit } from "../../../../partials/button-submit";
import { ChangeAvatar } from "../../../../partials/change-avatar";
import { Div } from "../../../../partials/div";
import { FormComponent } from "../../../../partials/form-component";
import { Input } from "../../../../partials/input/index";
import { DataChangeInput } from "../../../../partials/data-change-input/index";
import Block from "../../../../utils/Block";
import template from "./password-change.hbs";
import { Avatar } from "../../../../partials/avatar";

export class PasswordChangePage extends Block {
  constructor() {
    const inputPropertys = [
      { name: "oldPassword", label: "Старый пароль" },
      { name: "newPassword", label: "Новый пароль" },
      { name: "newPasswordRepeat", label: "Повторите новый пароль" },
    ].map(
      (inputProperty) =>
        new DataChangeInput({
          label: inputProperty.label,
          input: new Input({
            name: inputProperty.name,
            className: "user-data",
            type: "password",
            value: "********",
          }),
        })
    );

    super({
      avatar: new Avatar(),
      changeAvatarModalWindow: new ChangeAvatar(),
      passwordChangeForm: new FormComponent({
        className: "change-form",
        formComponents: [
          ...inputPropertys,
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
