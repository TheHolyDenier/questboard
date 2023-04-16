import { AuthService } from '~/services/auth.service';
import { UserService } from '~/services/user.service';
import { CampaignService } from '~/services/campaign.service';

export const api = {
  auth: new AuthService(),
  user: new UserService(),
  campaign: new CampaignService()
};

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api
    }
  };
});
