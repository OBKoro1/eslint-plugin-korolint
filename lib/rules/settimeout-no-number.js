/*
 * Author: OBKoro1
 * Date: 2019-11-15 17:28:52
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-12-05 20:47:17
 * FilePath: //test_create//lib//rules//settimeout-no-number.js
 * Description:
 */
/**
 * @fileoverview setTimeout 第二个参数禁止是数字
 * @author OBKoro1
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'setTimeout 第二个参数禁止是数字'
    },
    fixable: 'code' // 修复函数
  },
  // rule 核心
  create: function(context) {
    // 公共变量和函数应该在此定义
    return {
      // 返回事件钩子
      CallExpression: node => {
        if (node.callee.name !== 'setTimeout') return; // 不是定时器即过滤
        const timeNode = node.arguments && node.arguments[1]; // 获取第二个参数
        if (!timeNode) return; // 没有第二个参数
        // 检测报错第二个参数是数字 报错
        if (timeNode.type === 'Literal' && typeof timeNode.value === 'number') {
          context.report({
            node,
            message: 'setTimeout第二个参数禁止是数字',
            fix(fixer) {
              const numberValue = timeNode.value;
              const statementString = `const countNumber1 = ${numberValue}\n`;
              return [
                // 修改数字为变量 变量名故意写错 为了让用户去修改它
                fixer.replaceTextRange(node.arguments[1].range, 'countNumber2'),
                // 在setTimeout之前增加一行声明变量的代码 用户自行修改变量名
                fixer.insertTextBeforeRange(node.range, statementString)
              ];
            }
          });
        }
      }
    };
  }
};
