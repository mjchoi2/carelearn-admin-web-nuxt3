import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      BASEURL: process.env.BASEURL,
      APIURL: process.env.APIURL,
    },
    passport: {
      baseURL: process.env.BASEURL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
  },
  modules: ["@sidebase/nuxt-auth", "@pinia/nuxt"],
  auth: {
    originEnvKey: "BASEURL",
    provider: {
      type: "local",
      token: {
        signInResponseTokenPointer: "/token",
        type: "", // 쿠키 명에 Bearer이미 넣어져 있으므로, Bearer 설정 안해도 됨
        cookieName: "auth._token.local",
        headerName: "Authorization",
        maxAgeInSeconds: 1800,
        sameSiteAttribute: "lax",
        cookieDomain: ".silveredu.net",
        secureCookieAttribute: false,
        httpOnlyCookieAttribute: false,
      },
      endpoints: {
        signIn: { path: "/api/login", method: "post" },
        signOut: { path: "/api/logout", method: "post" },
        getSession: { path: "/api/oauth/me", method: "get" },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
