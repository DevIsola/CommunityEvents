<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps(['event'])

const register = () => {
  router.push({
    name: 'event-details',
  })
}
</script>

<template>
  <p>Register for the event here</p>
  <button @click="register">Register me!</button>
</template>
