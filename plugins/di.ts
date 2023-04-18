import { AuthService } from '~/services/auth.service';
import { UserService } from '~/services/user.service';
import { CampaignsService } from '~/services/campaigns.service';
import { ElementsService } from '~/services/elements.service';

export const api = {
  auth: new AuthService(),
  user: new UserService(),
  campaign: new CampaignsService(),
  element: new ElementsService()
};

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api
    }
  };
});
