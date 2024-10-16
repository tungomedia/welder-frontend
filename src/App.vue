<template>
  <div class="container mx-auto">
    <div class="flex flex-row px-4 lg:px-0">
      <div class="navigation-bar hidden lg:flex lg:flex-none lg:w-48">Navigatie kolom</div>
      <div class="content lg:flex-auto grow lg:w-64">
        <RouterView />
      </div>
      <div class="sidebar hidden lg:flex lg:flex-none lg:w-64">Sidebar kolom</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
