// import { normalizePath } from 'vite'
// normalizePath 路径规范化
import { defineConfig, normalizePath } from 'vite';
// 引入path包注意两点
//  1. 防止类型错误 安装@types/node pnpm i @types/node -D
//  2. tsconfig.node.json 设置"allowSyntheticDefaultImports": true, 允许默认导入
import path from 'path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
// 在vite中接入eslint
import VitePluginEslint from 'vite-plugin-eslint';
// vite中集成stylelint
import viteStylelint from '@amatlash/vite-plugin-stylelint';

const variablePath = normalizePath(path.resolve('./src/style/visible.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  // 手动指定项目根目录位置
  root: path.join(__dirname, 'src'),
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components', '@emotion/babel-plugin']
      },
      jsxImportSource: '@emotion/react'
    }),
    VitePluginEslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: /windicss|node_modules/
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    },
    modules: {
      // css modules 生成的类名 name 文件名 lacal 类名
      generateScopedName: '[name]_[local]_[hash:5]'
    },
    preprocessorOptions: {
      scss: {
        // 默认在每个scss文件开头注入这个代码
        additionalData: `@import "${variablePath}";`
      }
    }
  }
});
