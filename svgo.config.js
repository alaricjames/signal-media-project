export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          // Keep important attributes
          removeAttributesBySelector: {
            selector: 'path',
            attributes: ['fill', 'opacity']
          },
          // Optimize paths but keep visual quality
          convertPathData: {
            floatPrecision: 2,
            forceAbsolutePath: false
          }
        }
      }
    }
  ]
}; 