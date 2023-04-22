import { useBaseService } from '~/services/base.service';
import { ElementDto } from '~/domain/elements/element.dto';
import { CreateElementDto } from '~/domain/elements/create-element.dto';
import { UpdateElementDto } from '~/domain/elements/update-element.dto';
import { FormDataInterface } from '~/interfaces/form-data.interface';

export const useElementService = () => {
  const $base = useBaseService<ElementDto, CreateElementDto, UpdateElementDto>(
    ElementDto,
    CreateElementDto,
    UpdateElementDto
  );
  const baseUrl = (campaignId: string, id?: string) =>
    id
      ? `/api/secure/elements/${id}`
      : `/api/secure/campaigns/${campaignId}/elements`;

  return {
    create: async (campaignId: string, body: FormDataInterface) =>
      $base.create!(baseUrl(campaignId), body),
    update: async (campaignId: string, id: string, body: FormDataInterface) =>
      $base.update!(baseUrl(campaignId, id), body),
    get: async (campaignId: string) => $base.get(baseUrl(campaignId)),
    getOne: async (campaignId: string, id: string) =>
      $base.getOne(baseUrl(campaignId, id)),
    remove: async (campaignId: string, id: string) =>
      $base.remove(baseUrl(campaignId, id))
  };
};
