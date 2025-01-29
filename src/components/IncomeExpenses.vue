<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  positive: {
    type: Number,
    required: true,
  },
  negative: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+${{ positive }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-${{ negative }}</p>
    </div>
  </div>
</template>
