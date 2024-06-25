<script setup lang="ts">
import {inject, onMounted, ref, type Ref} from "vue";
import {onAuthStateChanged, type User} from "firebase/auth";

const auth = inject('auth');
const authenticatedUser: Ref<User> = ref(null);

onMounted(() => {
  onAuthStateChanged(auth, user => {
    if (user) {
      authenticatedUser.value = user;
    }
  });
});

</script>

<template>
<span v-if="authenticatedUser">your name is {{ authenticatedUser.displayName }}</span>
</template>

<style scoped>

</style>