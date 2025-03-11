<template>
  <div>
    <h1>시설 리스트</h1>
    <table>
      <thead>
        <tr>
          <th>시설명</th>
          <th>전화번호</th>
          <th>시설 주소</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataList" :key="item.id">
          <td>{{ item.properties.fac_nam }}</td>
          <td>{{ item.properties.fac_tel }}</td>
          <td>{{ item.properties.fac_o_add }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const dataList = ref<any[]>([]);

const loading = ref(false);
const error = ref<string | null>(null);

const fetchData = async () => {
  const url =
    "https://cors-anywhere.herokuapp.com/https://api.vworld.kr/req/data?service=data&request=GetFeature&data=LT_P_MGPRTFB&key=6584800E-3526-3C36-9BC0-E5E5F5CF26DF&domain=www.demo.com&geomFilter=box(124.0,33.0,132.0,39.0)&size=1000&format=json";
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch(url);
    const data = await response.json();
    dataList.value = data.response.result.featureCollection.features || [];
  } catch (err) {
    error.value = "API 호출 중 오류 발생!";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
</style>
