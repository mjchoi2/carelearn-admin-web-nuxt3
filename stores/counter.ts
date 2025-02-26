export const useCounterStore = defineStore('counter', () => {
  // options api 와는 다르게
  // 상태(변수)를 정의 할 때는 ref와 같은 반응형 api 사용
  // getter와 같은 것을 정의할 때는 computed를 활용
  // action을 정의할 때는 method를 선언해서 리턴
  // defineStore 와 같은 API를 별도로 import하지 않아도 pinia-nuxt모듈 지원으로 auto-import됨.

  const count = ref(0);
  const name = ref('mjchoi');
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return {
    count,
    name,
    doubleCount,
    increment,
  };
});
