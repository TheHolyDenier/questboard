<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  middleware: 'unsign'
});

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

function submit() {
  // Handle form submission
}
</script>

<template>
  <form class="signup-form" @submit.prevent="submit">
    <h2 class="form-title">Sign Up</h2>

    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" required />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" required />
    </div>

    <div class="form-group">
      <label for="confirm-password">Confirm Password</label>
      <input
        id="confirm-password"
        v-model="confirmPassword"
        type="password"
        required
      />
    </div>

    <button type="submit">Sign Up</button>
  </form>
</template>

<style lang="scss">
.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;

  .form-title {
    margin-top: 0;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      font-size: 1rem;
    }
  }

  button {
    padding: 0.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0069d9;
    }
  }
}
</style>
