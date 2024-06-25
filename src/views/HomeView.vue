<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <ul>
      <li><router-link to="/auth">Auth</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <TheWelcome />
  </main>
</template>
