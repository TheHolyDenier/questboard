import { Expose } from 'class-transformer';
import { BaseDto } from '~/domain/base.dto';

export class ElementDto extends BaseDto {
  @Expose() name?: string;
  @Expose() description?: string;
  @Expose() cover?: string;
  @Expose() isFavorite?: boolean;
  @Expose() exists?: boolean;
  @Expose() type: string;
}
