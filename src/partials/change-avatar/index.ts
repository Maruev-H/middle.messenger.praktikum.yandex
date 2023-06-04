import Block from "../../utils/Block";
import { ButtonSubmit } from "../button-submit";
import template from "./change-avatar.hbs";

export class ChangeAvatar extends Block {
  constructor() {
    super({
      ChangeAvatarButton: new ButtonSubmit({
        text: "Поменять",
      }),
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
