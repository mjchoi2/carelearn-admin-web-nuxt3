<template>
  <div>예제 페이지 입니다.{{ data }}</div>
</template>

<script setup lang="ts">
import type { ExampleType } from '~/types/ExampleType'; // 타입 지정을 해줘야함함

const { data, pending, error, refresh } = await useApi('/main/getmaindata');
const apiData = data.value as ExampleType;
console.log(apiData);
// Accessing specific properties within the data
const banner = apiData.banner;
const notice = apiData.notice;
const program = apiData.program;
const newItems = apiData.new;
const newSummary = apiData.new_summary;
const ddoran = apiData.ddoran;
const making = apiData.making;
const mall = apiData.mall;
const various = apiData.various;
const webzine = apiData.webzine;
const workbook = apiData.workbook;
const special = apiData.special;
const video = apiData.video;

console.log(banner.main);
console.log(notice[0]);
console.log(newItems[0]);
console.log(newSummary.total_count);
</script>

<style scoped></style>
