<template>
  <div>
    <v-app-bar v-if="$vuetify.breakpoint.mdAndUp" height="80">
      <v-toolbar-title>
        <v-btn text @click="$router.push({ name: 'Main' })" height="60">
          <v-img src="../assets/images/logo1.png" width="55" height="60" />
          <span class="text-h6" style="font-weight: 200">Примбазальт</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer />

      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'Contacts' })">Контакты</v-btn>
      </v-toolbar-items>

      <v-toolbar-items>
        <v-btn text>+7(924)320-97-95</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-app-bar v-if="$vuetify.breakpoint.smAndDown" height="70">
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'Main' })"
          ><v-icon>mdi-home</v-icon></v-btn
        >
      </v-toolbar-items>
      <v-spacer />

      <v-toolbar-title>
        <v-btn text height="60">
          <v-img src="../assets/images/logo1.png" width="55" height="55" />
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'Contacts' })">
          <v-icon>mdi-phone</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>