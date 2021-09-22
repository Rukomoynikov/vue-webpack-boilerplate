<template>
  <div class="container">
    <div class="hero">
      <p class="hero_text">Battle ready boilerplate for creating typescript apps based on&nbsp;Vue</p>

      <a href="https://github.com/Rukomoynikov/vue-webpack-boilerplate" class="button">
        <img src="~/assets/images/github-logo.svg" class="button-image">
        <span class="button-text">To clone and try it out</span>
      </a>
    </div>
    <div class="details">
      <div class="editor">
        <div class="editor_header">
          <div class="circles">
            <div class="circle circle-red"></div>
            <div class="circle circle-yellow"></div>
            <div class="circle circle-green"></div>
          </div>
          <div class="tab tab-active">package.json</div>
          <div class="tab">readme.md</div>
        </div>
        <Code />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Code from 'components/Code.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: { Code },
  setup() {
    return {}
  }
})
</script>

<style>
body, html {
  margin: 0;  
  padding: 0;
  background-color: #CFBB93;
}

* {
  box-sizing: border-box;
}
</style>

<style type="text/css" scoped>
.container {
  display: flex;
  height: 100vh
}

@media (max-width:  1152px) {
  .container {
    display: flex;
    flex-direction: column;
    height: inherit;
  }
}

.hero {
  min-width: 576px;
  max-width: 700px;
  width: 100%;
  padding-left: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-bottom: 75px;
}

.hero_text {
  font: 600 53px/62px IBM Plex Sans, sans-serif;
  max-width: 595px;
  margin-bottom: 60px;
}

.details {
  background: white;
  min-width: 576px;
  flex: 1;
  overflow-y: scroll;
  padding-left: 30px;
  padding-top: 15px;
}

.button {
  background-color: #F5F0E7;
  border: 1px solid black;
  display: inline-flex;
  padding: 8px 15px;
  border-radius: 24px;
  text-decoration: none;
}

.button-image {
  margin-right: 6px;
}

.button-text {
  font: 400 25px IBM Plex Sans, sans-serif;
  color: black;
}

.circles {
  display: flex;
  margin-right: 30px;
}

.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.circle:not(:last-of-type) {
  margin-right: 10px;
}

.circle-red {
  background-color: #EC6A5E;
}

.circle-yellow {
  background-color: #F4BD4F;
}

.circle-green {
  background-color: #61C454;
}

.editor_header {
  display: flex;
  align-items: center;
}

.tab {
  font: 400 18px IBM Plex Sans;
  margin-right: 20px;
  padding: 2px 7px;
  border-radius: 7px;
  border: 1px solid black;
}

.tab-active {
  background-color: black;
  color: white;
}
</style>