import Block from "../../utils/Block";
import template from "./div.hbs";


export class Div extends Block {
    constructor(props) {
        super(props);        
    }
    render() {
        return this.compile(template, { ...this.props });
    }
}