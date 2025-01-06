// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  $development: {
    runtimeConfig: {
      talosConfigPath: '',
      talosConfigName: 'talosconfig',
    },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    talosApiUrl: 'https://10.5.0.2:50000',
    talosConfigPath: '/var/run/secrets/talos.dev',
    talosConfigName: 'config',
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
