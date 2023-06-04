import { ButtonSubmit } from "../../partials/button-submit";
import { ChatUserCard } from "../../partials/chat-user-card";
import { Input } from "../../partials/input";
import Block from "../../utils/Block";
import template from "./main.hbs";

import sendLocation from "../../asserts/send-location.png";
import sendFile from "../../asserts/send-file.png";
import sendVideo from "../../asserts/send-photo.png";

export class MainPage extends Block {
  constructor() {

    let message = ''

    super({
      userCard: new ChatUserCard({
        username: "Имя пользователя",
        lastMessage: "последнее сообщение",
        time: "00:00",
        newMessagesAmount: "2",
      }),

      sendMessageInput: new Input({
        name: "message",
        type: "text",
        className: "chat-content__input",
        placeholder: "Сообщение",
        events: {
          focus: (event) => {
            event.target.classList.remove("invalidSendMessageInput");
          },
          blur: (event) => {

            const value = event.target.value;

            if (!validateMessage(value)) {
              event.target.classList.add("invalidSendMessageInput");
            } else {
              event.target.classList.remove("invalidSendMessageInput");
            }
          },
          input: (event) => {
            message = event.target.value
          },
        },
      }),

      sendMessageButton: new ButtonSubmit({
        otherData: '<i class="fas fa-solid fa-arrow-right-long"></i>',
        className: "chat-content__send-message-btn",
        events: {
          click: () => {
            console.log(message);
            
          }
        }
      }),

      chooseFileButton: new ButtonSubmit({
        otherData: '<i class="fas fa-thin fa-paperclip"></i>',
        className: "chat-content__choose-file-btn",
      }),

      sendVideoButton: new ButtonSubmit({
        otherData: `<img src=${sendVideo} alt="" />`,
        text: "Фото или видео",
      }),

      sendFileButton: new ButtonSubmit({
        otherData: `<img src=${sendFile} alt="" />`,
        text: "Файл",
      }),

      sendLocationButton: new ButtonSubmit({
        otherData: `<img src=${sendLocation} alt="" />`,
        text: "Локация",
      }),
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

function validateMessage(value) {
  const pattern = /<|>|&/;
  return !pattern.test(value);
}
