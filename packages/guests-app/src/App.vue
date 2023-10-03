<script setup lang="ts">
import GuestInfo from './components/GuestInfo.vue'
</script>

<template>
  <el-config-provider namespace="ep">
    <div p="8">
      <h1>Guests App running...</h1>
      <GuestInfo :guest-id="'1'" />
    </div>
  </el-config-provider>
</template>

<style scoped></style>
