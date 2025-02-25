export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation(); // 에러표현
  }
  if (to.path !== '/') {
    return navigateTo('/'); // 페이지 이동동
  }
});
