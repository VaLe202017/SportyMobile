<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Sporty </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Main Menu Drawer -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item to="/" clickable>
          <q-item-section> {{ $t("home") }} </q-item-section>
        </q-item>
        <q-item to="/tereni" clickable>
          <q-item-section> {{ $t("tereni") }} </q-item-section>
        </q-item>
        <q-item to="/oprema" clickable>
          <q-item-section> {{ $t("oprema") }} </q-item-section>
        </q-item>
        <q-item to="/about" clickable>
          <q-item-section> {{ $t("about") }} </q-item-section>
        </q-item>
        <q-item to="/unos" clickable>
          <q-item-section> {{ $t("unos") }} </q-item-section>
        </q-item>
        <q-item to="/settings" clickable>
          <q-item-section> {{ $t("settings") }} </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";
const { t } = useI18n();

const $q = useQuasar();
const leftDrawerOpen = ref(false);
</script>

<script>
import { Notify } from "quasar";

export default {
  name: "MainLayout",
  data() {
    return {
      isOnline: navigator.onLine,
    };
  },
  mounted() {
    window.addEventListener("online", this.handleNetworkChange);
    window.addEventListener("offline", this.handleNetworkChange);

    this.notifyNetworkStatus();
  },
  beforeUnmount() {
    window.removeEventListener("online", this.handleNetworkChange);
    window.removeEventListener("offline", this.handleNetworkChange);
  },
  methods: {
    handleNetworkChange() {
      this.isOnline = navigator.onLine;
      this.notifyNetworkStatus();
    },
    notifyNetworkStatus() {
      if (this.isOnline) {
        Notify.create({
          type: "positive",
          message: "Internet connection retrieved.",
          icon: "wifi",
          timeout: 2000,
        });
      } else {
        Notify.create({
          type: "negative",
          message: "Internet connection lost.",
          icon: "wifi_off",
          timeout: 0,
          actions: [{ label: "OK", color: "white" }],
        });
      }
    },
  },
};
</script>
