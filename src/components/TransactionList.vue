<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['deleteTransaction'])

const handleDelete = (id) => {
  emit('deleteTransaction', id)
}
</script>

<template>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions.slice().reverse()"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>{{ transaction.amount.toFixed(2) }}</span>
      <button class="delete-btn" @click="handleDelete(transaction.id)">X</button>
    </li>
  </ul>
</template>
