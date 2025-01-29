<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useToast } from 'vue-toastification'
import router from './router'

const toast = useToast()

const isLoggedIn = ref(false)

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      router.push('/login')
    })
    .catch((error) => {
      console.log(error)
      toast.error('Failed to Logout')
    })
}
</script>

<template>
  <nav>
    <button @click="handleSignOut" v-if="isLoggedIn">Logout</button>
  </nav>
  <router-view />
</template>

<style scoped></style>
