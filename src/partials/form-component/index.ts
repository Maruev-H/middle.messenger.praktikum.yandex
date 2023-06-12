import Block from "../../utils/Block";
import template from "./form-component.hbs";

export class FormComponent extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
