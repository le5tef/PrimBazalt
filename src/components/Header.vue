<template>
  <div>
    <v-app-bar v-if="$vuetify.breakpoint.mdAndUp">
      <v-toolbar-title>
        <v-btn text @click="$router.push({ name: 'Main' })">
          <v-img src="../assets/logo.svg" width="100" />
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'AboutUs' })">О нас</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'Contacts' })">Контакты</v-btn>
      </v-toolbar-items>

      <v-toolbar-items>
        <v-btn text>+7(924)320-97-95</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-app-bar v-if="$vuetify.breakpoint.smAndDown">
      <v-toolbar-items>
        <v-btn text></v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-title>
        <v-btn text>
          <v-img src="../assets/logo.svg" width="100" />
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'AboutUs' })">О нас</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>