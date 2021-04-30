/*
 * @Author: lee
 * @Date: 2021-01-16 11:08:40
 * @LastEditTime: 2021-03-24 16:48:18
 * @FilePath: \ziru-demo\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: (name) => `${name}/style/less`
    }, 'vant']
  ]
}
