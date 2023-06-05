import { ButtonSubmit } from "../../partials/button-submit";
import { ChatUserCard } from "../../partials/chat-user-card";
import { Input } from "../../partials/input";
import Block from "../../utils/Block";
import template from "./main.hbs";

import sendLocation from "../../asserts/send-location.png";
import sendVideo from "../../asserts/send-photo.png";
import { DialogTag } from "../../partials/modal-window-parent";
import { Div } from "../../partials/div";
import arrowRightnImg from "../../asserts/right-arrow-angle.png";
import searchImg from "../../asserts/search.png";

export class MainPage extends Block {
  constructor() {
    let message = "";

    super({
      arrowRightImg: arrowRightnImg,
      searchImg: searchImg,

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
            (event?.target as HTMLInputElement).classList?.remove("invalidSendMessageInput");
          },
          blur: (event) => {
            const value = (event?.target as HTMLInputElement).value;

            if (!validateMessage(value)) {
              (event?.target as HTMLInputElement).classList?.add("invalidSendMessageInput");
            } else {
              (event?.target as HTMLInputElement).classList?.remove("invalidSendMessageInput");              
            }
          },
          input: (event) => {
            const inputElement = event?.target as HTMLInputElement;
            message = inputElement.value;
          },
        },
      }),

      modalWindowChatSettings: new DialogTag({
        className: "chat-content__settings-modal",
        dialogChildrens: [
          new Div({
            className: "btns",
            divChildrens: [
              new ButtonSubmit({
                otherData:
                  '<span class="plus"><i class="fas fa-sharp fa-light fa-circle-plus fa-flip-both"></i></span>',
                className: "add-user",
                text: "Добавить пользователя",
              }),

              new ButtonSubmit({
                otherData:
                  '<span class="plus rotate"><i class="fas fa-sharp fa-light fa-circle-plus fa-flip-both"></i></span>',
                className: "remove-user",
                text: "Удалить пользователя",
              }),
            ],
          }),
        ],
      }),

      modalWindowSendFile: new DialogTag({
        className: "chat-content__send-file",
        dialogChildrens: [
          new Div({
            divChildrens: [
              new ButtonSubmit({
                otherData: `<img src=${sendVideo} alt="" />`,
                text: "Фото или видео",
              }),

              new ButtonSubmit({
                otherData: `<img src=${sendVideo} alt="" />`,
                text: "Фото или видео",
              }),

              new ButtonSubmit({
                otherData: `<img src=${sendLocation} alt="" />`,
                text: "Локация",
              }),
            ],
          }),
        ],
      }),

      chatsSearchInput: new Input({
        type: "text",
        className: "chats__search",
      }),

      sendMessageButton: new ButtonSubmit({
        otherData: '<i class="fas fa-solid fa-arrow-right-long"></i>',
        className: "chat-content__send-message-btn",
        events: {
          click: () => {
            console.log(message);
          },
        },
      }),

      chatContentSettingsButton: new ButtonSubmit({
        otherData:
          '<div class="dots"><span class="first"></span><span class="second"></span><span class="third"></span></div>',
        className: "chat-content__settings",
        events: {
          click: () => {
            console.log("chat-content-settings-btn has been clicked");
          },
        },
      }),

      chooseFileButton: new ButtonSubmit({
        otherData: '<i class="fas fa-thin fa-paperclip"></i>',
        className: "chat-content__choose-file-btn",
      }),
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

function validateMessage(value: string) {
  const pattern = /<|>|&/;
  return !pattern.test(value);
}
