<script setup lang="ts">
import {ref, watch} from "vue";
import UserDetail from "@/components/UserDetail.vue";
import {useAuth} from "@/composables/useAuth";
import type {User} from "firebase/auth";

const show_detail = ref(false);

const {signInWithGoogle, user, login_processing} = useAuth();

watch(user, (next: User, prev) => {
  if (next) {
    show_detail.value = true;
  } else {
    show_detail.value = false;
  }
});

</script>

<template>
  <div class="firebaseAuth">
    <h1>Firebase Authentication</h1>
    <div v-if="login_processing">認証処理中(非同期)</div>
    <div v-if="user">
      <div v-if="show_detail">
        <div class="already_authenticated">
          <span class="message">you are authenticated.</span>
          <user-detail :user="user"></user-detail>
        </div>
      </div>
    </div>
    <div class="login_required.not" v-else>
      <span class="message not">You are not authenticated.</span>
      <br>
      <button @click="signInWithGoogle">Login with Google</button>
    </div>
  </div>
</template>

<style scoped>
.firebaseAuth {
  padding: 10px;
  border: 1px solid grey;
}

span.message {
  padding: 5px;
  display: inline-block;
  font-size: 1rem;
  line-height: 1rem;

  text-decoration: underline;
  color: green;
  background-color: lightblue;

  &.not {
    color: black;
    background-color: #fdbebe;
  }
}
</style>