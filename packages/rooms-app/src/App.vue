<script setup lang="ts"></script>

<template>
  <el-config-provider namespace="ep">
    <div p="8">
      <h1>Rooms App running...</h1>
      <RoomDetail :room-id="'1'"> </RoomDetail>
    </div>
  </el-config-provider>
</template>

<style scoped></style>
