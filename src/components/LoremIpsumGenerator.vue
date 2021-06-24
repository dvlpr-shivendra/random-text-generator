<template>
  <div>
    <h1>Genrate lorem ipsum text</h1>
    <button @click="generate">Generate</button>
    <textarea v-model="text" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default {
  data() {
    return {
      text: "",
    };
  },

  methods: {
    generate() {
      this.text = lorem.generateParagraphs(2);
    },
  },
};
</script>

<style>
</style>