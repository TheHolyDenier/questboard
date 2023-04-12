import { AuthService } from '~/services/auth.service';
import { UserService } from '~/services/user.service';

export const api = {
  auth: new AuthService(),
  user: new UserService()
};

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      api
    }
  };
});
