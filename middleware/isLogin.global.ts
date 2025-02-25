export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth();
  await auth.getSession(); // ✅ 최신 세션 정보를 가져옴
  console.log('Auth session:', auth.data.value);
  const userinfo = auth.data.value;

  if (!userinfo && to.path !== '/auth/login') {
    return navigateTo('/auth/login');
  }
});
