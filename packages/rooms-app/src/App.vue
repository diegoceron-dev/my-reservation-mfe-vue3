<script setup lang="ts">
import BaseHeader from './components/layouts/BaseHeader.vue'
</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div p="8">
      <RoomDetail reservation-id="124" />
    </div>
  </el-config-provider>
</template>

<style scoped>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
