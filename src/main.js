// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
import "~/assets/main.css";

// Import Default Layout
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // Add Foogle Font Preconnect
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  });
  // Add Foogle Font
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Mulish:ital,wght@0,400;0,700;1,400;1,700&family=Vesper+Libre&display=swap",
  });
}
