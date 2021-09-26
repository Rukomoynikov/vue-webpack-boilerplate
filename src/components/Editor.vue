<template>
  <div class="editor">
    <div class="editor_header">
      <div class="circles">
        <div class="circle circle-red"></div>
        <div class="circle circle-yellow"></div>
        <div class="circle circle-green"></div>
      </div>
      <div class="tab tab-active">package.json</div>
      <!-- <div class="tab">readme.md</div> -->
    </div>
    <Code />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Code from 'components/Code.vue'

export default defineComponent({
  name: 'Editor',
  components: {Code}
})
</script>

<style>
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