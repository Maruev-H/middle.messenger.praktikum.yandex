import Block from "../../utils/Block";
import template from "./dialog.hbs";


export class DialogTag extends Block {
    constructor(props) {
        super(props);
        console.log(props);  
    }
    render() {
        return this.compile(template, { ...this.props });
    }
}