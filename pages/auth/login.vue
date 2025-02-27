<template>
  <div>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <NuxtLink to="/" class="flex justify-center">
          <img
            src="~/assets/images/logo/main_logo.gif"
            class="lg:w-auto w-28 mt-4 lg:my-4"
          />
        </NuxtLink>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900"
            >아이디</label
          >
          <div class="mt-2">
            <input
              id="email"
              v-model="email"
              name="email"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#ff6029] sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm/6 font-medium text-gray-900"
              >비밀번호</label
            >
            <div class="text-sm">
              <a href="#" class="font-semibold text-[#ff6029] cursor-pointer"
                >아이디/비밀번호 찾기</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              v-model="password"
              type="password"
              name="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#ff6029] sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            class="flex w-full justify-center rounded-md bg-[#ff6029] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6029] mt-8 cursor-pointer"
            @click="login"
          >
            로그인
          </button>
        </div>

        <p class="mt-10 text-center text-sm/6 text-gray-500 cursor-pointer">
          회원가입
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCookie } from '#app';
import type { LoginResponse } from '~/types/LoginResponse'; // 타입 지정을 해줘야함

definePageMeta({
  layout: false,
  layoutTransition: false,
});

const email = ref('');
const password = ref('');
const router = useRouter();
const authToken = useCookie('auth._token.local'); // 토큰을 쿠키에 저장(silveredunet site의 로그인 연동을 위한 쿠키 명 통일)
const authStrategy = useCookie('auth.strategy');

const login = async () => {
  try {
    const { data, error } = await useFetch<LoginResponse>(
      'https://auth.silveredu.net/api/login',
      {
        method: 'POST',
        body: {
          client_id: process.env.PASSWORD_GRANT_ID,
          client_secret: process.env.PASSWORD_GRANT_SECRET,
          service: 'silveredu',
          grant_type: 'password',
          userid: email.value,
          password: password.value,
          scope: '*',
        },
      },
    );

    if (error.value) {
      console.error('로그인 실패:', error.value);
      return;
    }

    if (data.value?.token) {
      authToken.value = 'Bearer ' + data.value.token; // 로그인 성공 시 토큰 저장
      authStrategy.value = 'local';
      console.log('로그인 성공:', data.value);
      router.push('/'); // 로그인 성공 후 홈으로 이동
    } else {
      console.error('토큰이 없습니다.');
    }
  } catch (err) {
    console.error('로그인 요청 오류:', err);
  }
};
</script>

<style scoped></style>
