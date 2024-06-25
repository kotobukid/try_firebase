<script setup lang="ts">
import {inject, ref, onMounted, type Ref} from "vue";
import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, type User} from "firebase/auth";
import UserDetail from "@/components/UserDetail.vue";

const auth = inject('auth');

const authenticatedUser: Ref<User> = ref(null);
const show_detail = ref(false);

onMounted(() => {
  onAuthStateChanged(auth, user => {
    if (user) {
      show_detail.value = true;
      authenticatedUser.value = user;
    }
  });
});

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
    <h1>Firebase Authentication</h1>
    <div v-if="show_detail">
      <div class="already_authenticated" v-if="authenticatedUser">
        <span class="message">you are authenticated.</span>
        <user-detail :user="authenticatedUser"></user-detail>
      </div>
      <div class="login_required.not" v-else>
        <span class="message not">You are not authenticated.</span>
        <br>
        <button @click="signInWithGoogle">Login with Google</button>
      </div>
    </div>
    <div v-else>認証処理中(非同期)</div>
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