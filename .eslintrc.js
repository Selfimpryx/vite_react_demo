module.exports = {
  // 运行环境 全局变量等
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true
  },
  // 继承规则，可以不用手动设置规则了
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser', //eslint基于的解析器目前还是不支持解析ts的，所以需要其他的解析器配合解析ts
  //对上述的解析器进行能力定制
  parserOptions: {
    ecmaFeatures: {
      jsx: true //使用额外的语言特性 比如开启jsx
    },
    ecmaVersion: 'latest', //启用最新的es语法
    sourceType: 'module' //默认是script 如果是使用 esmodule 改为module
  },
  // 添加eslint插件来增加规则集，但是本身并没有开启，如果要开启的话 需要在rules里面特殊设置
  /** 2.加上prettier的eslint插件 */
  plugins: ['react', '@typescript-eslint', 'prettier'],
  // 手动设置有哪些规则
  rules: {
    //   3.注意加上这句话，开启prettier的自动修复功能
    'prettier/prettier': 'error'
  }
};
