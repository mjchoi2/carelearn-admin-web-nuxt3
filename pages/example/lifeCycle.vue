<template>
  <div>
    <h1>count: {{ count }}</h1>
    <p>double: {{ double }}</p>
    <p>readonlyCount: {{ readonlyCount }}</p>
    <button class="mr-2" @click="increaseCount">증가</button>
    <button @click="decreseCount">감소</button>
  </div>
</template>

<script setup lang="ts">
// nuxtApp: nuxtApp은 runtimeappcontext. 프로그램이 실행되는 동안에 정보를 가지고 있음.

// Nuxt 3 라이프사이클 훅과 Composition API 사용
// 우선 Nuxt3은 Auto-imports가 적용되어 있다
// Vue3에서 쓰이는 refs, computed, watch는 Auto-imports가 적용되어 아래 코드만 적어도 동작
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

// 상태 변수 정의
const count = ref<number>(1);
const double = computed<string>(() => count.value * 2 + '개'); // count.value가 변경되면 double.value도 변경 됨
const readonlyCount = readonly(count); // 이 함수은 매개변수로 ref객체를 받아 readonly를 반환해 이 값을 수정하려고 하면 에러

// 라이프사이클 훅 - onMounted
onMounted(() => {
  console.log('Component mounted');
  // 클라이언트 측에서만 실행
});

// 라이프사이클 훅 - onBeforeUnmount
onBeforeUnmount(() => {
  console.log('Component will unmount');
  // 컴포넌트가 언마운트되기 전에 실행
});

const increaseCount = () => {
  count.value++;
};

const decreseCount = () => {
  count.value--;
};

watch(count, (count, prevCount) => {
  console.log(count, prevCount);
});
</script>

<style scoped>
@reference "../../assets/css/main.css";
h1 {
  @apply text-[#42b983];
}
button {
  @apply bg-[#42b983] text-white py-[10px] px-[20px] cursor-pointer;
}
</style>
