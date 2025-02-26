// useRequestHeaders는 pages, components, plugins 내에서 들어오는 요청 헤더에 액세스하기 위한 내장 컴포저블
// 모든 요청 헤더를 가져옵니다.
// const headers = useRequestHeaders();

// 쿠키 요청 헤더를 가져옵니다.
// const headers = useRequestHeaders(['cookie']);

export const useDefaultLocale = (fallback = 'en') => {
  const locale = ref(fallback);
  if (process.server) {
    const reqLocale = useRequestHeaders()['accept-language']?.split(',')[0];
    if (reqLocale) {
      locale.value = reqLocale;
    }
  } else if (process.client) {
    const navLang = navigator.language;
    if (navLang) {
      locale.value = navLang;
    }
  }
  return locale;
};
