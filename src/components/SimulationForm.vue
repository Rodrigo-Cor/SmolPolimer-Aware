<template>
  <div>
    <label v-for="(value, index) in values" :key="index">
      Input {{ index + 1 }}:
      <input
        type="number"
        v-model="values[index]"
        input="validateInput(index)"
      />
    </label>
    <button @click="sendValues">Send Values</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: [null, null, null, null, null, null, null],
    };
  },
  methods: {
    validateInput(index) {
      // Perform any validation logic you need here
      // For example, you can check if the input is within a certain range
      // and update the value if necessary
      if (this.values[index] < 0) {
        this.values[index] = 0;
      } else if (this.values[index] > 100) {
        this.values[index] = 100;
      }
    },
    sendValues() {
      // Emit an event with the values array
      this.$emit("values-updated", this.values);
    },
  },
};
</script>
