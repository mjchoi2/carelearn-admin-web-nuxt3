<template>
  <div>얼랏 예제</div>
</template>
<script>
export default {
  mounted() {
    this.showAlert();
  },
  methods: {
    showAlert() {
      // https://sweetalert2.github.io/ 공식문서 참조
      this.$swal
        .fire({
          title: '로그인 후 이용 가능합니다.\n로그인 하시겠습니까?',
          confirmButtonText: '로그인',
          cancelButtonText: '닫기',
          showCancelButton: true,
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.push('/');
          }
        });
    },
  },
};
</script>
