export default {
  logo: (
    <img 
      src="/logo.svg" 
      alt="Deepr Logo"
      style={{ height: '2rem' }}
    />
  ),
  logoLink: true,
  project: {
    link: 'https://github.com/5318008eth/deepr-documentation'
  },
  docsRepositoryBase: 'https://github.com/5318008eth/deepr-documentation/tree/main/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Deepr'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Deepr Documentation" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </>
  ),
  // Remove default footer text
  footer: {
    component: null
  },
  // Keep navigation elements
  navigation: true,
  // Keep theme switcher
  darkMode: true,
  // Keep search
  search: {
    placeholder: 'Search documentation...'
  }
} 