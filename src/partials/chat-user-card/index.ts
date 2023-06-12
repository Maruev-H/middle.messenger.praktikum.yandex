import Block from "../../utils/Block";
import template from './chat-user-card.hbs'

interface IChatUserCard {
    username: string,
    lastMessage: string,
    time: string,
    newMessagesAmount: string,
}


export class ChatUserCard extends Block<IChatUserCard>{

    constructor(props: IChatUserCard) {
        super(props)
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}