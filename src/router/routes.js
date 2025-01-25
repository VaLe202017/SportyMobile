/* eslint-disable */
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/About", component: () => import("pages/About.vue") },
      { path: "/Settings", component: () => import("pages/Settings.vue") },
      { path: "/Contact", component: () => import("pages/Contact.vue") },
      { path: "/Tereni", component: () => import("pages/TereniAPI.vue") },
      { path: "/Oprema", component: () => import("pages/OpremaAPI.vue") },
      { path: "/Unos", component: () => import("pages/Unos.vue") },
      { path: "/Oprema", component: () => import("src/pages/OpremaAPI.vue") },
      { path: "/Tereni", component: () => import("src/pages/TereniAPI.vue") },
      {
        path: "/Pretrazivanje",
        component: () => import("pages/PretrazivanjeAPI.vue"),
      },
      { path: "/Prijava", component: () => import("pages/PrijavaPage.vue") },
      {
        path: "/Registracija",
        component: () => import("pages/RegistracijaPage.vue"),
      },
      {
        path: "/Middle",
        component: () => import("pages/Middle.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/admin/opremaAPI",
        component: () => import("pages/OpremaAPI.vue"),
      },
      {
        path: "/admin/tereniAPI",
        component: () => import("pages/TereniAPI.vue"),
      },
      {
        path: "/admin/dodavanje_terena",
        component: () => import("pages/DodavanjeTerena.vue"),
      },
      {
        path: "/admin/logout",
        component: () => import("pages/AdminLogout.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
