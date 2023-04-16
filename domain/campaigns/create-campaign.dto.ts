import { Expose, plainToInstance } from 'class-transformer';

export class CreateCampaignDto {
  @Expose()
  title: string;

  @Expose()
  summary?: string;

  static create(data: any): CreateCampaignDto {
    return plainToInstance(CreateCampaignDto, data, {
      excludeExtraneousValues: true
    });
  }
}
