import type { SessionData } from '~/types/SessionData';
import type { OauthResponse } from '~/types/OauthResponse';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth();
  await auth.getSession(); // ✅ 최신 세션 정보를 가져옴
  console.log('Auth session:', auth.data.value);

  const session = auth.data.value as SessionData | undefined;
  const userinfo = session?.userinfo as OauthResponse | undefined;

  if (
    (!userinfo || Object.keys(userinfo || {}).length === 0) &&
    to.path !== '/auth/login'
  ) {
    return navigateTo('/auth/login');
  }
});
