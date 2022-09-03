<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}

* {
  box-sizing: border-box;
}
.root {
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
}
</style>
