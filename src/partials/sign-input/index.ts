import Block from '../../utils/Block';
import template from './sign-input.hbs';

interface InputProps {
  type?: string;
  label: string;
  name: string;
  id: string;
  className?: string;
  events?: Record<string, (event?: InputEvent)=>void>
}

export class SignInput extends Block<InputProps> {
  constructor(props: InputProps) {
    super({ type: 'text', ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}