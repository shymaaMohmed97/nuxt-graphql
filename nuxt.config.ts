// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    'nuxt-graphql-server',
    '@nuxtjs/apollo'
  ],
  css: ['~/assets/css/main.css'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:3000/api/graphql'
      }
    },
  },
  graphqlServer: {
    codegen: {
      scalars: {
        ID: 'string',
        DateTime: 'string',
      },
    }
  },
  runtimeConfig: {
    graphqlServer: {
      url: '/api/graphql',
    },
  },
  app: {
    head: {
      title: 'GraphQL',
      meta: [
        { name: 'description', content: 'GraphQL' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  },
  pages: { pattern: ['**/*.vue', '!**/components/**'] },
  components: [
    '~/components', {
      path: '~/pages',
      pattern: '**/components/**',
      pathPrefix: false
    }
  ],
})