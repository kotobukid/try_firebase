<script setup lang="ts">
import {type User} from "firebase/auth";

const props = defineProps<{
  user: User
}>();

</script>

<template lang="pug">
  table.user_info(style="width: 600px;")
    colgroup
      col(style="width: 200px;")
      col(style="width: 400px;")
    tbody
      //tr
        th uid
        td {{ user.uid }}
      tr
        th email
        td {{ user.email }}
      //tr
        th emailVerified
        td {{ user.emailVerified }}
      tr
        th displayName
        td {{ user.displayName }}
      //tr
        th isAnonymous
        td {{ user.isAnonymous }}
      tr
        th photo
        td
          //span {{ user.photoURL }}
          //br
          img.avatar(:src="user.photoURL")
</template>

<style scoped lang="less">
table {
  table-layout: fixed;
  border-collapse: collapse;
}

th, td {
  padding: 5px;
}

th {
  background-color: black;
  color: white;
  border: 1px solid white;
}

td {
  background-color: white;
  color: black;
  border: 1px solid black;
}

img.avatar {
  border-radius: 10px;
  border: 1px solid black;
}
</style>