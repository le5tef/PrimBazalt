<template>
  <v-footer color="#282c75 " padless>
    <v-row justify="center" no-gutters>
      <router-link :to="{ name: 'AboutUs' }">
        <v-btn color="white" text rounded class="my-2"> О нас </v-btn>
      </router-link>
      <router-link :to="{ name: 'Contacts' }">
        <v-btn color="white" text rounded class="my-2"> Контакты </v-btn>
      </router-link>
      <v-col
        class="py-4 text-center"
        style="background-color: rgb(230, 230, 230); color: #282c75"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>ПримБазальт</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
