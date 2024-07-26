<template>
    <div class="wrapper">
        <div class="content">
            <div class="rounded bg-sidebar login">
                <h1 class="font-bold text-2xl mb-10">
                    Login
                </h1>
                <form action="">
                    <UiInput v-model="emailRef" placeholder="Email" type="email" class="mb-3 input" />
                    <UiInput v-model="nameRef" placeholder="Name" type="text" class="mb-3 input" />
                    <UiInput v-model="passwordRef" placeholder="Password" type="password" class="mb-3 input" />
                    <div class="flex items-center justify-center gap-5">
                        <UiButton type="button" @click="login">Login</UiButton>
                        <UiButton type="button" @click="register">Register</UiButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store';
import {v4 as uuid} from 'uuid'

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

useHead({
  title: 'Login | CRM System'
})

const router = useRouter()
const store = useAuthStore()
const isLoadingStore = useIsLoadingStore()

const login = async () => {
  isLoadingStore.set(true)
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
  const response = await account.get()
  if (response) {
    store.set({
      email: response.email,
      name: response.name,
      status: response.status,
    })
  }

  emailRef.value = ''
  nameRef.value = ''
  passwordRef.value = ''

  router.push('/')
  isLoadingStore.set(false)
}

const register = async () => {
    await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
    await login()
}
</script>

<style scoped>
.input {
    background: none;
    border: #323232 1px solid;
    outline: none;
    padding: 10px;
    width: 250px;
}

.login {
    background: #0a0f26;
    padding: 25px;
}

.content {
    display: flex;
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>