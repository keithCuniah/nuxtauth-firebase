<template>
  <div class="">
    <div class="container">
      <h1>
        Welcome <span v-if="currentUser"> {{ currentUser.displayName }} </span>
      </h1>
    </div>

    <div class="signin-area">
      <SignIn />
    </div>
  </div>
</template>

<script>
import SignIn from './SignIn.vue';
export default {
  name: 'Login',
  components: { SignIn },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped></style>
