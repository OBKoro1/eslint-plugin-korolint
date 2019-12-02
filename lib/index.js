/*
 * @Author: OBKoro1
 * @Description:
 * @Date: 2019-11-26 20:28:28
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-12-02 13:56:43
 * @FilePath: /eslint-plugin-koro-create/lib/index.js
 * 引入规则 导出规则
 */
'use strict';
var requireIndex = require('requireindex');

const output = {
  rules: requireIndex(__dirname + '/rules'), // 导出所有规则
  configs: {
    // 导出自定义规则 在项目中直接引用
    koroRule: {
      plugins: ['korolint'], // 引入插件
      rules: {
        // 开启规则
        'korolint/settimeout-no-number': 'error'
      }
    }
  }
};
module.exports = output;
