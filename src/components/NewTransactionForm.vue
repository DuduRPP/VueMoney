<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const text = ref('')
const amount = ref('')

const emit = defineEmits(['transactionSubmitted'])

const toast = useToast()

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Both fields must be filled.')
    return
  }
  if (isNaN(+amount.value)) {
    toast.error('Invalid number for amount field.')
    return
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  }

  emit('transactionSubmitted', transactionData)
  toast.success('Transaction added successfully.')

  text.value = 0
  amount.value = 0
}
</script>

<template>
  <h3>Add New Transaction</h3>
  <form action="" id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..." v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount">Amount</label>
      <input type="text" id="amount" placeholder="Enter amount..." v-model="amount" />
    </div>
    <button class="btn">Add Transaction</button>
  </form>
</template>
