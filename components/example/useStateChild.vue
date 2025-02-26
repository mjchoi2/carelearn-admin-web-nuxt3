<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script setup lang="ts">
// useState 컴포저블은 ref대신 사용할 수 있으며 SSR 친화적
// 해당 값은 서버측 렌더링 된 후 유지되며, 고유키를 사용하여 모든 컴포넌트에서 공유 가능
// const 변수명 = useState('고유키', () => 함수 내용)

// 초기값 설정
// const counter = useState<Number>('counter', () => 1);

// 값 공유
// const sameCounter = useState<Number>('counter');

// 초기화
// clearNuxtState('counter'); 사용

const counter = useState('counter', () => Math.round(Math.random() * 1000));
</script>

<style scoped></style>
