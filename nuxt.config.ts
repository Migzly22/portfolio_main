import { appConfig, publicConfig } from "./theme.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
		head: {
			title: process.env.PROJECT_NAME || appConfig.project_name,
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
			],
		}
	},
	colorMode: {
		preference: 'light'
	},
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
	'nuxt-swiper'
    // "@nuxtjs/leaflet",
  ],
  css: ['swiper/css','~/assets/css/tailwind.css'],
  runtimeConfig: {
		public: {
      ...publicConfig,
			version: process.env.npm_package_version
		}
	},
	imports: {
		dirs: ['composables', 'composables/**'],
	},
  // build: {
	// 	transpile: [
	// 		'panolens','@types/leaflet','@types/leaflet-routing-machine', 'leaflet-routing-machine'
	// 	]
	// },
})