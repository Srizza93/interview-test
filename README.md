# Excuses de Dev

<p>"Excuses de Dev" App is a sentence generator to urge the users to wait and be patient.
It's a Vue component which shows title, sentence and button.
This component has a sub-component which is the button itself, which will generate the sentence and send it
to the parent component.
The components are mounted into a webpack environment, using the router for the different routes.
</p>

### The routes are
<ul>
  <li>"/" => Main page, component: "Excuses de Dev"</li>
  <li>"/lost" => This page is showing "I'm lost", with a gif below. Redirection to the main page after 5 seconds</li>
  <li>"/:pathMatch(.*)*" => 404 Page not found</li>
  <li>"/http/:http_code" => Page showing the message clicked on main page via router-link, http_code is shared via parameters</li>
</ul>

### Demo
<a to="https://srizza93.github.io/interview-test/">https://srizza93.github.io/interview-test/</a>

### Stack:
<ul>
  <li>HTML/CSS</li>
  <li>Javascript</li>
  <li>Vue</li>
  <li>Vue-router</li>
  <li>Webpack</li>
</ul>

### Usage
The demo is in the [src](https://github.com/Srizza93/interview-test/tree/main/src) directory and
the installation is done via main.js.
The different routes can be found in <a to="https://github.com/Srizza93/interview-test/blob/main/src/router/index.js">/router/index.js</a>.
The app page is at <a to="https://github.com/Srizza93/interview-test/blob/main/src/pages/ExcusesDeDev.vue">ExcusesDeDev.vue</a> 
and routing is handled via single-file component <a to="https://github.com/Srizza93/interview-test/blob/main/src/App.vue">App.vue</a>.

To run the demo:

```
npm run start
```

For production:
```
npm run build
```
