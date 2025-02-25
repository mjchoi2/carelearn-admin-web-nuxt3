<template>
  <div>
    <p>{{ title }}</p>

    <div class="video-container">
      <iframe
        width="100%"
        height="100%"
        :src="src"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  src?: string; // ? 물음표를 붙이면 필수가 아닌 선택적 값임임
  title?: string;
}

// 기본값 설정
withDefaults(defineProps<Props>(), {
  src: 'https://www.youtube.com/embed/zmq2zu-UsRk',
});
</script>

<style scoped></style>
