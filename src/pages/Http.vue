<template>
  <div class="http">
    <p class="http_message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Http",
  computed: {
    message() {
      if (this.$route.params.is_sent) {
        return this.$route.params.http_code.split("-")[1].trim();
      }
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.http {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.http_message {
  font-size: 21px;
  font-weight: bold;
}
</style>
