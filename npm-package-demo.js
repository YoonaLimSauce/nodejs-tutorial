/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-15 20:11:01
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-15 23:18:20
 * @FilePath: \node-js-demo\npm-package-demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function htmlEscape(htmlStr) {
    const str = htmlStr.replace(/<|>|"|'|&/g, (match) => {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "'":
                return "&#39;";
            case "&":
                return "&amp;";
        }
    });
    return htmlStr
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function htmlUnescape(htmlStr) {
    const str = htmlStr.replace(/<|>|"|'|&/g, (match) => {
        switch (match) {
            case "&lt;":
                return "<";
            case "&gt;":
                return ">";
            case "&quot;":
                return '"';
            case "&#39;":
                return "'";
            case "&amp;":
                return "&";
        }
    });
    return htmlStr
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
}

module.exports = {
    htmlEscape,
    htmlUnescape,
};