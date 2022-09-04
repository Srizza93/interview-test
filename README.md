# Excuses de Dev

"Excuses de Dev" App is a sentence generator to urge the users to wait and be patient.
It's a Vue component which shows title, sentence and button.
This component has a sub-component which is the button itself, which will generate the sentence and send it
to the parent component.
The components are mounted into a webpack environment, using the router for the different routes.

### The routes are
- "/" => Main page, component: "Excuses de Dev"
- "/lost" => This page is showing "I'm lost", with a gif below. Redirection to the main page after 5 seconds
- "/:pathMatch(.*)*" => 404 Page not found
- "/http/:http_code" => Page showing the message clicked on main page via router-link, http_code is shared via parameters

### Demo
[/interview-test/](https://srizza93.github.io/interview-test/)

### Stack:
- HTML/CSS
- Javascript
- Vue
- Vue-router
- Webpack

### Usage
The demo is in the [src](https://github.com/Srizza93/interview-test/tree/main/src) directory and
the installation is done via main.js.
The different routes can be found in [/router/index.js](https://github.com/Srizza93/interview-test/blob/main/src/router/index.js).
The app page is at [ExcusesDeDev.vue](https://github.com/Srizza93/interview-test/blob/main/src/pages/ExcusesDeDev.vue) 
and routing is handled via single-file component [App.vue](https://github.com/Srizza93/interview-test/blob/main/src/App.vue).

To run the demo:

```
npm run start
```

For production:
```
npm run build
```

### Principle

The whole concept is based on the below code

```
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
```
- When the button "sent-generator" is clicked a loader gets toggled on
- A timer gets randomly generated for the desired time to wait for the next sentence, in this case up to 5 seconds
- Meanwhile, a random index is generated, based on the length of the array sentences saved in 
the "sent-generator" data component
The random index gets generated unlimited times until this is different from the previous one
The costraints are 1 < sentences.length < infinite
- The new sentence object is communicated to the parent component and the loader disappears to leave space to the sentence
- The button clicked during the loading time doesn't trigger any event

### Configuration

```
import { createApp } from "vue";
import mount from "./scripts/mount.js";
import App from "./App.vue";
import router from "./router/index.js";

document.body.appendChild(mount());

createApp(App).use(router).mount(".root");
```

### Style
- Minimalist design developed via single-file components with scoped style and pure CSS
- Loading illusion animation, after click, a loader is shown for between 1 and 5 seconds
- On landing page load, the title appears in the center of the app with a fade-in effect.
After 2 seconds, the title move to the top and a button appears in the center.
After the first click, the button leaves the space for the text, and moves to the bottom

