
        // 最外面是一层自调用函数，传入了上面构造的参数
        (function(modules) {
            // 通过文件的id，
            function require(id) {
                // 通过文件获得文件的函数和依赖map
                const [fn, mapping] = modules[id];

                // 通过依赖的id，在mapping中找到对应的文件名，接着直接调用require
                function localRequire(relativePath) {
                    return require(mapping[relativePath]);
                }

                // 保存export
                const module = { exports: {} };

                // 调用函数
                fn(localRequire, module, module.exports);

                return module.exports;
            }

            // 从入口文件开始
            require(0)
        })({0: [
            function(require, module, exports) {
                "use strict";

var _message = require("./message.js");

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(1);


console.log(_message2.default);
            },
            {"./message.js":1}
        ],1: [
            function(require, module, exports) {
                "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _name = require("./name.js");

console.log(2);
exports.default = "hello " + _name.name;
            },
            {"./name.js":2}
        ],2: [
            function(require, module, exports) {
                "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
console.log(3);
var name = exports.name = 'FF7';
            },
            {}
        ],});
    