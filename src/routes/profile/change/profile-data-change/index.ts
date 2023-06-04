import { ChangeAvatar } from '../../../../partials/change-avatar';
import Block from '../../../../utils/Block';
import template from './profile-data-change.hbs';

export class ProfileDataChangePage extends Block{
  constructor() {
    super({
      changeAvatarModalWindow: new ChangeAvatar()
     });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}