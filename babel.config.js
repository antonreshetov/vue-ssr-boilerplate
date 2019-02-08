const { declare } = require('@babel/helper-plugin-utils')

module.exports = declare(api => {
  api.assertVersion(7)

  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  const node = api.cache.using(() => process.env.WEBPACK_TARGET === 'node')

  return {
    presets: [
      node && [
        '@vue/app',
        {
          targets: {
            node: 'current'
          },
          useBuiltIns: false
        }
      ],
      !node && '@vue/app'
    ].filter(Boolean)
  }
})
