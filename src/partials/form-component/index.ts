import Block from "../../utils/Block";
import template from "./form-component.hbs";

export class FormComponent extends Block {
  constructor(formComponents: object) {
    super(formComponents);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
