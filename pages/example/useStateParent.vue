<template>
  <div>
    Parent Area: {{ counter }}
    <ExampleUseStateChild />
  </div>
</template>

<script setup lang="ts">
const counter = useState('counter');
</script>

<style scoped></style>
