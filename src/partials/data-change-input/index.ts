import Block from "../../utils/Block";
import { Input } from "../input";
import template from "./data-change-input.hbs";

export class DataChangeInput extends Block {
  constructor(props) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}