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
  <section class="login">
    <h2><span class="vue-word">Vue</span>Money</h2>
    <h3>Login:</h3>
    <v-btn @click="signInWithGoogle" prepend-icon="mdi-google" rounded-lg>
      Sign In With Google
    </v-btn>
    <v-btn @click="signInAsGuest" prepend-icon="mdi-account-clock" rounded-lg>
      Sign In As Guest
    </v-btn>
  </section>
</template>
