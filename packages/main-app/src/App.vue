<script setup lang="ts">
import BaseHeader from './components/layouts/BaseHeader.vue'
import RoomDetail from 'rooms_app/RoomDetail'

const reservation = {
  reservationId: '12345',
  rooms: [
    { roomId: '1', guestsId: ['1', '2', '3'] },
    { roomId: '2', guestsId: ['4', '5', '6'] }
  ]
}

const { reservationId } = reservation
</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="flex main-container">
      <div w="full" p="16">
        <!--  Reservation -->
        <el-row :gutter="20">
          <el-col :span="6"> My Reservation # {{ reservationId }} </el-col>
        </el-row>
        <el-row>
          <el-col>
            <RoomDetail :reservationId="reservationId" />
          </el-col>
        </el-row>
      </div>
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
