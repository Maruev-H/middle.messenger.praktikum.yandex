import { ChangeAvatar } from '../../../../partials/change-avatar';
import Block from '../../../../utils/Block';
import template from './password-change.hbs';

export class PasswordChangePage extends Block{
  constructor() {
    super({ 
      changeAvatarModalWindow: new ChangeAvatar()
     });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}