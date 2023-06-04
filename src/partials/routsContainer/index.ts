import Block from '../../utils/Block';
import template from './routesContainer.hbs';


export class RoutesContainer extends Block {
  constructor() {
    super({});
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}