import { BaseService } from '~/services/base.service';
import { ElementDto } from '~/domain/elements/element.dto';
import { CreateElementDto } from '~/domain/elements/create-element.dto';
import { UpdateElementDto } from '~/domain/elements/update-element.dto';

export class ElementsService extends BaseService<
  ElementDto,
  CreateElementDto,
  UpdateElementDto
> {
  protected CreateDto = CreateElementDto;
  protected UpdateDto = UpdateElementDto;
  protected Dto = ElementDto;

  constructor() {
    super('/api/secure/elements');
  }
}
