import Block from "../../utils/Block";
import template from "./dialog.hbs";


export class DialogTag extends Block {
    constructor(props: any) {
        super(props);
    }
    render() {
        return this.compile(template, { ...this.props });
    }
}