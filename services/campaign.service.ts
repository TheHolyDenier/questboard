import { Campaign } from '@prisma/client';
import { BaseService } from '~/services/base.service';
import { CreateCampaignDto } from '~/domain/campaigns/create-campaign.dto';

export class CampaignService extends BaseService<Campaign, CreateCampaignDto> {
  protected CreateDto = CreateCampaignDto;
  constructor() {
    super('/api/secure/campaigns');
  }
}
