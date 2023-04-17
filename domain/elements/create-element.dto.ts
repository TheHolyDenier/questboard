import { Expose } from 'class-transformer';

export class CreateElementDto {
  @Expose()
  name: string;

  @Expose()
  type: string;

  @Expose()
  description?: string;

  @Expose()
  cover?: string;

  @Expose()
  isFavorite?: boolean;

  @Expose()
  exists?: boolean;
}
