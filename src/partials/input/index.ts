import Block from "../../utils/Block";
import template from "./input.hbs";

interface IInput {
  placeholder?: string;
  name?: string;
  className?: string;
  type?: string;
  value?: string;
  events?: Record<string, (event?: InputEvent)=>void>
}

export class Input extends Block<IInput> {
  constructor(props: IInput) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
