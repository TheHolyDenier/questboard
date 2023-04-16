import { Campaign } from '@prisma/client';
import { useUser } from '~/stores/user.store';
import { CreateCampaignDto } from '~/domain/campaigns/create-campaign.dto';
import { FormDataInterface } from '~/interfaces/form-data.interface';

export class CampaignService {
  async create(body: FormDataInterface): Promise<Campaign> {
    const user = useUser();

    const result = await $fetch('/api/secure/campaigns', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token()
      },
      body: JSON.stringify(CreateCampaignDto.create(body))
    });

    return result.data as Campaign;
  }
}
