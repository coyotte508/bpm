module.exports = {
  baseUrl: '/pulsometer',
  pwa: {
    // Should only be enabled for IOS >= 11.3
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
    // Settings should also be changed in public/manifest.json
    // name: 'The Pulsometer', // Also edit in public/index.html
    // themeColor: '#4DBA87',
    // msTileColor: '#000000',
  }
}