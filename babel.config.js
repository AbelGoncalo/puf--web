const pathAliases = {
  '~': './src',
}

module.exports
plugins: [
  [
    'module-resolver',
    {
      alias: pathAliases,
    },
  ],
]
