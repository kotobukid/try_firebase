<script setup lang="ts">
import {useAuth} from "@/composables/useAuth";

const {user} = useAuth();
</script>

<template>
<span v-if="user">
  your name is
  <span class="name">{{ user.displayName }}</span>
  .</span>
  <span v-else>your are not authenticated.</span>
</template>

<style scoped>
span.name {
  font-weight: bolder;
  text-decoration: underline;
}
</style>