<template>
  <div>예제 페이지 입니다.</div>
</template>

<script setup lang="ts">
// 서버 측에서는 전체 화면 오류 페이지를 트리거하며, clearError를 사용하여 해당 오류 페이지를 지울 수 있음
// 클라이언트 측에서는 처리할 수 있는 비치명적인 오류를 발생
// fatal: true 하면 전체 화면 에러로 나옴
const route = useRoute();
const { data } = await useFetch('/api/example/error');
if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  });
}
</script>

<style scoped></style>
