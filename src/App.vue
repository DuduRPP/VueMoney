<script setup>
import { useToast } from 'vue-toastification'
import BalanceValue from './components/BalanceValue.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import NewTransactionForm from './components/NewTransactionForm.vue'
import TitleHeader from './components/TitleHeader.vue'
import TransactionList from './components/TransactionList.vue'

import { ref, computed, onMounted } from 'vue'

const toast = useToast()

const transactions = ref([])

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'))
  if (savedTransactions) {
    transactions.value = savedTransactions
  }
})

const total = computed(() => {
  return transactions.value
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)
    .toFixed(2)
})

const positive = computed(() => {
  return transactions.value
    .reduce((acc, transaction) => {
      return acc + (transaction.amount > 0 ? transaction.amount : 0)
    }, 0)
    .toFixed(2)
})

const negative = computed(() => {
  return transactions.value
    .reduce((acc, transaction) => {
      return acc + (transaction.amount < 0 ? Math.abs(transaction.amount) : 0)
    }, 0)
    .toFixed(2)
})

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000)
}

const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  })
  saveTransactionsToLocalStorage()
}

const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) => {
    return transaction.id != id
  })
  saveTransactionsToLocalStorage()
  toast.success('Transaction deleted.')
}

// Save to local storage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
</script>

<template>
  <TitleHeader />
  <div class="container">
    <BalanceValue :balance="+total" />
    <IncomeExpenses :positive="+positive" :negative="+negative" />
    <TransactionList :transactions="transactions" @delete-transaction="handleTransactionDeleted" />
    <NewTransactionForm @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<style scoped></style>
