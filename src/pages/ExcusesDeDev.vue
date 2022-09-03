<template>
  <div class="excuses-de-dev">
    <pop-up />
  </div>
</template>

<script>
import PopUp from "../components/PopUp.vue";

export default {
  name: "ExcusesDeDev",
  components: { PopUp },
};
</script>

<style scoped>
.excuses-de-dev {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
