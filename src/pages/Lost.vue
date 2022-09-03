<template>
  <div class="lost">
    <h2>I'm Lost</h2>
    <div class="lost_gif">
      <iframe
        src="https://giphy.com/embed/1bAdvIjqaXCSc"
        width="100%"
        height="100%"
        style="position: absolute"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
    <p>
      <a href="https://giphy.com/gifs/lost-thumbs-up-1bAdvIjqaXCSc"
        >via GIPHY</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Lost",
  methods: {
    redirect() {
      this.$router.push("/");
    },
  },
  mounted() {
    setTimeout(this.redirect, 5000);
  },
};
</script>

<style scoped>
.lost {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.lost_gif {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 0;
  padding-bottom: 55%;
  margin-top: 60px;
}
</style>
