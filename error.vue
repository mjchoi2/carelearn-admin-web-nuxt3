<template>
  <div>
    <!-- 사용자 정의 에러 페이지 -->
    <main
      class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div class="text-center">
        <p class="text-2xl font-semibold text-[#ff6029]">404</p>
        <h1
          class="mt-4 text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl"
        >
          페이지를 찾을 수 없습니다.
        </h1>
        <p
          class="mt-6 text-base font-medium text-pretty text-gray-500 sm:text-xl/8"
        >
          죄송합니다. 원하시는 페이지를 찾을 수 없습니다.
        </p>
        {{ globalError }}
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button
            class="rounded-md bg-[#ff6029] px-8 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="handleError"
          >
            홈으로
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { error } = defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
});

console.log(error.statusCode);
console.log(error.message);
console.log(JSON.stringify(error));

// useError 컴포저블은 처리 중인 전역 Nuxt 에러 객체를 반환합니다. 이 컴포저블은 처리 중인 전역 Nuxt 에러를 반환하며 클라이언트 및 서버에서 모두 사용 가능
const globalError = useError();

// 에러 객체 초기화 및 리다이렉트
const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped></style>
