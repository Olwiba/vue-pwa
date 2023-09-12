<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import rg4js from "raygun4js";

const triggerError = () => {
  throw new Error('This is an error');
}

const triggerErrorTwo = () => {
  try {
    throw new Error("Description of the error");
  }
  catch (e) {
    rg4js('send', e);
  }
}

const triggerNavigation = () => {
  const pages = ['about', 'team', 'settings']
  rg4js('trackEvent', {
    type: 'pageView',
    path: `/${pages[Math.floor(Math.random() * 3)]}`
  });
}
</script>

<template>
  <WelcomeItem>
    <template #heading>Crash reporting</template>
    <button
        type="button"
        class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="triggerError"
    >
      Trigger error
    </button>
    <button
        type="button"
        class="rounded-md bg-red-600 px-3 py-2 ml-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="triggerErrorTwo"
    >
      Trigger error two
    </button>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Real user monitoring</template>
    <button
        type="button"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="triggerNavigation"
    >
      Trigger navigation
    </button>
  </WelcomeItem>
</template>