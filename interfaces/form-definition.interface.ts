import { FormDefinitionType } from '~/types/form-definition.type';

export interface FormDefinitionInterface {
  label: string;

  name: string;

  required?: boolean;

  counter?: number;

  rules?: ((value: string) => Promise<boolean | string>)[];

  prependIcon?: string;

  appendIcon?: string;

  prefix?: string;

  suffix?: string;

  disabled?: boolean;

  hint?: string;

  type?: FormDefinitionType;
}
