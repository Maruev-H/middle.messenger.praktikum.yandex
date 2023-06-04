import Block from "../../utils/Block";
import template from "./button-submit.hbs";

interface IButtonSubmit {
  text?: string;
  className?: string;
  otherData?: any;
  events?: Record<string, (event?)=>void>
}

export class ButtonSubmit extends Block<IButtonSubmit> {
  constructor(props: IButtonSubmit) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
