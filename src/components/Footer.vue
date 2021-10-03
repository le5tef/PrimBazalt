<template>
  <v-footer color="#414141 " padless>
    <v-row justify="center" no-gutters>
      <v-btn :to="{ name: 'Contacts' }" color="white" text rounded class="my-2">
        Контакты
      </v-btn>
      <v-col
        class="py-4 text-center"
        style="background-color: rgb(230, 230, 230); color: #414141"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>ПримБазальт</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
