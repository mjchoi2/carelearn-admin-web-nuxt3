<template>
  <div>
    <p>useCounterStore</p>
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <button @click="counterStore.increment()">증가</button>
  </div>
</template>

<script setup lang="ts">
const counterStore = useCounterStore(); // import문 작성하지 않아도 auto-import
const { count, doubleCount } = storeToRefs(counterStore); // 구조분해할당으로 가져옴옴
</script>

<style scoped></style>
