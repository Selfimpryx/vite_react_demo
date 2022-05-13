module.exports = {
    // 注册stylelint的prettier插件
    plugins:["stylelint-prettier"],
    // 继承一系列规则集合
    extends :[
        // 基本的规则集合
        "stylelint-config-standard",
        // 规则集合的scss版本
        "stylelint-config-standard-scss",
        // prettier和stylelint的共享scss配置
        // "stylelint-config-prettier-scss"
        // 样式属性顺序规则
        "stylelint-config-recess-order",
        // 接入prettier规则
        "stylelint-config-prettier",
        "stylelint-prettier/recommended"
    ],
    // 配置rules规则
    rules:{
        // 开启prettier的自动格式化功能
        "prettier/prettier": true,
        "selector-class-pattern": [ // 命名规范 -
            "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
            {
                "message": "Expected class selector to be kebab-case"
            }
        ],
    }

}