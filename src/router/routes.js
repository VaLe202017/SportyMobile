const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "about", component: () => import("pages/About.vue") },
      { path: "settings", component: () => import("pages/Settings.vue") },
      { path: "contact", component: () => import("pages/Contact.vue") },
      { path: "email", component: () => import("pages/Email.vue") },
      { path: "tereni", component: () => import("pages/Tereni.vue") },
      { path: "oprema", component: () => import("pages/Oprema.vue") },
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
