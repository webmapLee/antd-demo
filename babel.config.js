/** @type {import('@types/babel__core')} */
const presets = [
  ['@babel/preset-env', { targets: { node: 'current' } }],
  '@babel/preset-typescript',
]
const plugins = [
  [
    '@vue/babel-plugin-jsx',
    {
      isCustomElement: (tagName) => {
        return tagName.includes('calcite-') || tagName.includes('teleport')
      },
    },
  ],
  [
    'import',
    {
      libraryName: 'ant-design-vue',
      libraryDirectory: 'es',
      style: 'css',
    },
  ]
]
module.exports = { presets, plugins }
