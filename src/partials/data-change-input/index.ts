import Block from "../../utils/Block";
import template from "./data-change-input.hbs";

interface IDataChangeInput {
  label: string;
  input: object;
}

export class DataChangeInput extends Block<IDataChangeInput> {
  constructor(props: IDataChangeInput) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
