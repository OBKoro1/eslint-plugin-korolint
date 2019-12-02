/*
 * @Author: OBKoro1
 * @Description: 
 * @Date: 2019-11-26 20:28:28
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-12-02 10:53:26
 * @FilePath: /eslint-plugin-koro-create/lib/index.js
 * 引入规则 导出规则
 */
console.log(11)
"use strict";
var requireIndex = require("requireindex");

const output = {
    rules: requireIndex(__dirname + "/rules"), // 导出所有规则
    configs: {
        // 导出自定义规则 在项目中直接引用
        koroRule: {
            plugins: [ 'koro-create' ],
            rules:{
                "koro-create/settimeout-no-number": "warn"
            }
        }
    }
};
console.log('ruleObj', output)
module.exports = output


