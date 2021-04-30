module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // 直接覆盖变量
            'text-color': '#111',
            'border-color': '#eee',
            'dropdown-menu-box-shadow': 'none',
            'dropdown-menu-height': '46px'
          }
        }
      }
    }
  }
}
