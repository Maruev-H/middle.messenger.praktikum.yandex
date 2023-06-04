import Block from "../../utils/Block";
import template from './button-link.hbs'

interface IButtonLink {
    text: string,
    href: string,
    className?: string,
}


export class ButtonLink extends Block<IButtonLink>{

    constructor(props: IButtonLink) {
        super(props)
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}