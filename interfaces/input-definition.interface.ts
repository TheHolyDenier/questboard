export interface InputDefinitionInterface {
  name: string;
  label: string;
  type?: 'string';
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  hint?: string;
}
