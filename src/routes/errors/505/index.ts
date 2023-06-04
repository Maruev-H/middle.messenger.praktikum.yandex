import Block from '../../../utils/Block';
import template from './505.hbs';

export class Error505Page extends Block{
  constructor() {
    super({ });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}