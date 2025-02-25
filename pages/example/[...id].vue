<template>
  <div>동적 파라미터 페이지 입니다.</div>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
</script>

<style scoped></style>
