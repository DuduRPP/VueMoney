<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  balance: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{ balance }}</h1>
</template>
