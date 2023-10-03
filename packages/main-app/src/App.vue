<script setup lang="ts">
import BaseHeader from './components/layouts/BaseHeader.vue'
import RoomDetail from 'rooms_app/RoomDetail'
import GuestInfo from 'guests_app/GuestInfo'

const reservation = {
  reservationId: '12345',
  rooms: [
    { roomId: '1', guestsId: ['1'] },
    { roomId: '2', guestsId: ['2'] }
  ]
}

const { reservationId, rooms } = reservation
</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="flex main-container">
      <div w="full" p="16">
        <!--  Reservation -->
        <el-row :gutter="20">
          <el-col>
            <h1>My Reservation # {{ reservationId }}</h1>
          </el-col>
        </el-row>

        <!-- Room Detail -->
        <RoomDetail
          v-for="(room, index) in rooms"
          :key="index"
          :room-id="room.roomId"
        >
          <GuestInfo
            v-for="(id, index) in room.guestsId"
            :key="index"
            :guestId="id"
          />
        </RoomDetail>
      </div>
    </div>
  </el-config-provider>
</template>

<style scoped></style>
