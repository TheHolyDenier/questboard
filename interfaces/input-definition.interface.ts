export interface InputDefinitionInterface {
  name: string;
  label: string;
  type?: 'text' | 'password' | 'checkbox';
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  hint?: string;
  validations?: ((inputValue: string) => Promise<boolean | string>)[];
}
