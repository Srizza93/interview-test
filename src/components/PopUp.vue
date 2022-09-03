<template>
  <div class="pop-up">
    <span class="pop-up_title">Ma super application</span>
    <router-link
      class="pop-up_message"
      v-if="!loaderOn"
      v-bind:class="{ 'message-seen': buttonIsClicked }"
      :to="{
        name: 'Http',
        params: {
          http_code: `${objMessage.http_code}-${objMessage.message}` || '701',
          is_sent: true,
        },
      }"
      >{{ objMessage.message }}</router-link
    >
    <div v-else class="pop-up_loader"></div>
    <sent-generator
      class="pop-up_sent-generator"
      @updateMessage="setMessage"
      @toggleLoader="toggleLoader"
    />
  </div>
</template>

<script>
import SentGenerator from "./SentGenerator.vue";

export default {
  name: "PopUp",
  components: { SentGenerator },
  data() {
    return {
      objMessage: {},
      buttonIsClicked: false,
      loaderOn: false,
    };
  },
  methods: {
    toggleLoader() {
      this.loaderOn = !this.loaderOn;
    },
    setMessage(obj) {
      this.objMessage = obj;
      if (!this.buttonIsClicked) {
        this.buttonIsClicked = true;
      }
    },
  },
};
</script>

<style scoped>
.pop-up {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  min-height: 200px;
  padding: 30px 60px;
  border: 1px solid black;
  background-color: #eeeeee;
}
.pop-up_title {
  animation: fade-in 3s ease-in, move-up 1s linear 3s;
  animation-fill-mode: backwards;
}

.pop-up_message {
  display: flex;
  align-items: center;
  height: 0;
  margin: 0;
  text-align: center;
  font-style: italic;
}

.message-seen {
  height: auto;
  min-height: 35px;
  margin: 15px 0;
}

.pop-up_loader {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 5px solid black;
  margin: 15px 0;
  border-top: 5px solid #eeeeee;
  animation: loader 1s linear infinite;
}

.pop-up_sent-generator {
  animation: fade-in 1s linear 4s;
  animation-fill-mode: backwards;
  margin: auto 0;
}

@keyframes move-up {
  from {
    margin: 60px 0 30px 0;
  }
  to {
    margin: 0;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
