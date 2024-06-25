<script setup lang="ts">
import {useAuth} from "@/composables/useAuth";
import {ref} from "vue";

const {signOut} = useAuth();

const preventDoubleSubmit = ref(false);

const signOutHandler = async () => {
  if (preventDoubleSubmit.value) {
    return;
  }
  preventDoubleSubmit.value = true;

  await signOut();
  preventDoubleSubmit.value = false;
};

</script>

<template>
  <button :disabled="preventDoubleSubmit" @click="signOutHandler">ログアウト</button>
</template>

<style scoped>
button[disabled] {
  background-color: grey;
  color: white;
}
</style>