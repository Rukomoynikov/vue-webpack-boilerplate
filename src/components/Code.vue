<template>
<pre><code class="code">
{
  "name": "Boilerplate",
  "version": "0.0.1",
  "description": "This boilepate can be a good start. Here you can find: vue 3, webpack 5, postcss, typescript.",
  "scripts": {
    "build": "webpack serve -c webpack.dev.config.js",
    "build:prod": "webpack -c webpack.prod.config.js",
    "lint": "eslint src --ext js,vue,ts --fix"
  },
  "private": true,
  "license": "ISC",
  "devDependencies": {
    "@types/vue": "^2.0.0",
    "@vue/compiler-sfc": "^3.1.5",
    "autoprefixer": "^10.3.4",
    "babel-core": "^6.26.3",
    "babel-loader": "7",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.2",
    "css-loader": "^6.2.0",
    "eslint": "^7.32.0",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-vue": "^7.18.0",
    "html-webpack-plugin": "^5.3.2",
    "inline-chunk-html-plugin": "^1.1.1",
    "postcss": "^8.3.6",
    "postcss-cli": "^8.3.1",
    "postcss-loader": "^6.1.1",
    "postcss-preset-env": "^6.7.0",
    "ts-loader": "^9.2.5",
    "typescript": "^4.3.5",
    "vue-loader": "^16.5.0",
    "vue-style-loader": "^4.1.3",
    "vue-template-compiler": "^2.6.14",
    "webpack": "^5.48.0",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "vue": "^3.1.5"
  }
}
  </code></pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Code',
  setup() {
    return {}
  }
})
</script>

<style>
.code {
  font-family: IBM Plex Mono, sans-serif;
  font-size: 16px;
  color: #100862;
}
</style>