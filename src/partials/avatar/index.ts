import Block from "../../utils/Block";
import template from './avatar.hbs'
import avatar from '../../asserts/no-image.png'

export class Avatar extends Block {

    constructor() {
        super({
            imageSrc: avatar
        })
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}