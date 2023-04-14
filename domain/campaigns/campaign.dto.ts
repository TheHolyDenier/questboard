import { DateTime } from 'luxon';
import { UserDto } from '~/domain/users/user.dto';

export class CampaignDto {
  id!: string;
  title!: string;
  summary?: string;
  cover?: string;
  isFavorite!: boolean;
  createdById!: string;
  createdAt!: DateTime;
  updatedAt!: DateTime;
  // players!: PlayerOnCampaign[];
  User?: UserDto;
  userId?: string;

  constructor(data: Partial<CampaignDto>) {
    if (data) Object.assign(this, data);
  }
}
