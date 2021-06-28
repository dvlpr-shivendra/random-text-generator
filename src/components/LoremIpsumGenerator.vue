<template>
  <div>
    <h1 class="mb-3">Genrate Random Text</h1>

    <div class="row g-3 align-items-center mb-3">
      <div class="col-auto">
        <label for="numberOfParagraphs" class="col-form-label text-dark"
          >Number of paragraphs</label
        >
      </div>
      <div class="col-auto">
        <input
          type="number"
          min="1"
          v-model.number="numberOfParagraphs"
          class="form-control text-dark"
          id="numberOfParagraphs"
        />
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="generate">
          Generate
        </button>
        <button class="btn btn-outline-danger" @click="copy">Copy</button>
      </div>
    </div>

    <div>
      <textarea
        class="form-control text-dark"
        v-model="text"
        cols="30"
        rows="25"
        ref="text"
        title="Generated text"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 16,
    min: 8,
  },
  wordsPerSentence: {
    max: 16,
    min: 8,
  },
});

export default {
  data() {
    return {
      text: "",
      numberOfParagraphs: 2,
    };
  },

  mounted() {
    this.generate();
  },

  methods: {
    generate() {
      this.text = lorem.generateParagraphs(this.numberOfParagraphs);
    },

    copy() {
      this.$refs.text.select();
      document.execCommand("copy");
    },
  },
};
</script>

<style>
</style>