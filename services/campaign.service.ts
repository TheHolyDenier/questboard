import { Campaign } from '@prisma/client';
import { useUser } from '~/stores/user.store';
import { CreateCampaignDto } from '~/domain/campaigns/create-campaign.dto';
import { FormDataInterface } from '~/interfaces/form-data.interface';

export class CampaignService {
  readonly baseUrl = '/api/secure/campaigns';
  async create(body: FormDataInterface): Promise<Campaign> {
    const user = useUser();

    const result = await $fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token()
      },
      body: JSON.stringify(CreateCampaignDto.create(body))
    });

    return result.data as Campaign;
  }

  async get(): Promise<Campaign[]> {
    const user = useUser();

    const result = await $fetch(this.baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token()
      }
    });

    return result.data as Campaign[];
  }

  async getOne(id: string): Promise<Campaign> {
    const user = useUser();

    const result = await $fetch(`${this.baseUrl}?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token()
      }
    });

    return result.data as Campaign;
  }
}
