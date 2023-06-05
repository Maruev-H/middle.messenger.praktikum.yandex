import { Avatar } from "../../partials/avatar";
import Block from "../../utils/Block";
import template from "./profile.hbs";

export class ProfilePage extends Block {
  constructor() {
    super({
      avatar: new Avatar()
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
