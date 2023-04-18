export interface InputDefinitionInterface {
  name: string;
  label: string;
  type?: 'text' | 'password' | 'checkbox' | 'textarea';
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  hint?: string;
  validations?: ((
    inputValue: string | boolean | number
  ) => Promise<boolean | string>)[];
}
