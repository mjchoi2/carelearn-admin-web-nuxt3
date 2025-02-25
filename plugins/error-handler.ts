export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    // 초기 vueApp 인스턴스가 생성될 때 호출
  });
  nuxtApp.hook('vue:error', (err) => {
    // vue 에러가 루트 컴포넌트에 전파될 때 호출

    if (err instanceof Error) {
      console.log('nuxt App hook: ' + err.message);
    }
  });
});
