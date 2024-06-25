<script setup lang="ts">
import {inject, ref, type Ref} from "vue";
import {getAuth, GoogleAuthProvider, signInWithPopup, type User} from "firebase/auth";
import UserDetail from "@/components/UserDetail.vue";

const authenticatedUser: Ref<User> = ref(null);

const _auth = getAuth();
authenticatedUser.value = _auth.currentUser;

const auth = inject('auth');

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const user = result.user;
    const firebaseIdToken = await user.getIdToken();

    authenticatedUser.value = result.user;
  } catch (error) {
    console.error("Authentication Error: ", error);
  }
}

</script>

<template>
  <div class="firebaseAuth">
    <h1>this is firebase auth component</h1>
    <div class="already_authenticated" v-if="authenticatedUser">
      <span class="message">you are authenticated.</span>
      <user-detail :user="authenticatedUser"></user-detail>
    </div>
    <div class="login_required.not" v-else>
      <span class="message">You are not authenticated.</span>
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
  text-decoration: underline;
  color: green;
  background-color: lightblue;

  &.not {
    color: red;
    background-color: brown;
  }
}
</style>