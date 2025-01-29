<script setup>
import { getAuth, GoogleAuthProvider, signInWithPopup, signInAnonymously } from 'firebase/auth'
import { useToast } from 'vue-toastification'
import router from '@/router'

const toast = useToast()

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user)
      router.push('/')
      toast.success('Logged In Successfully')
    })
    .catch((error) => {
      console.log(error)
      toast.error('Error Logging In')
    })
}

const signInAsGuest = () => {
  const auth = getAuth()
  signInAnonymously(auth)
    .then(() => {
      router.push('/')
      toast.success('Logged In Successfully')
    })
    .catch((error) => {
      console.log(error)
      toast.error('Error Logging In')
    })
}
</script>

<template>
  <button @click="signInWithGoogle">Sign In With Google</button>
  <button @click="signInAsGuest">Sign In As a Guest</button>
</template>
