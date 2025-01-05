// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    talosApiUrl: 'https://10.5.0.2:50000',
    talosConfigPath: '/var/run/secrets/talos.dev',
    talosConfigName: 'config'
  },
  $development: {
    runtimeConfig: {
      talosConfigPath: '',
      talosConfigName: 'talosconfig'
    }
  }
})
