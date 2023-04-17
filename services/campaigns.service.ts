import { BaseService } from '~/services/base.service';
import { CreateCampaignDto } from '~/domain/campaigns/create-campaign.dto';
import { UpdateCampaignDto } from '~/domain/campaigns/update-campaign.dto';
import { CampaignDto } from '~/domain/campaigns/campaign.dto';

export class CampaignsService extends BaseService<
  CampaignDto,
  CreateCampaignDto,
  UpdateCampaignDto
> {
  protected CreateDto = CreateCampaignDto;
  protected UpdateDto = UpdateCampaignDto;
  protected Dto = CampaignDto;

  constructor() {
    super('/api/secure/campaigns');
  }
}
