<template>
  <div></div>
</template>

<script setup lang="ts">
definePageMeta({
  // 페이지 내에 미들웨어 직접 작성
  middleware: async (route) => {
    console.log(route.params);

    const { data } = await useFetch('/api/example/error');

    if (!data.value) {
      // 에러를 표현하고 싶을 때 abortNavigation사용
      return abortNavigation(
        createError({
          statusCode: 404,
          statusMessage: 'Course not found',
        }),
      );
    } else {
      // 특정 페이지로 이동하고싶을 때 navigateTo 사용
      return navigateTo('/');
    }
  },
});
</script>

<style scoped></style>
