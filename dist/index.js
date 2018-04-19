(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./ts/src/App.tsx":
/*!************************!*\
  !*** ./ts/src/App.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Modal_1 = __webpack_require__(/*! ./components/Modal */ "./ts/src/components/Modal.tsx");
var Navbar_1 = __webpack_require__(/*! ./components/Navbar */ "./ts/src/components/Navbar.tsx");
var action_1 = __webpack_require__(/*! ./action */ "./ts/src/action/index.ts");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.componentDidMount = function () {
        var getStore = this.props.getStore;
        var db = localStorage.getItem("alchemy") || {};
        getStore(db);
    };
    App.prototype.render = function () {
        var _a = this.props, getStore = _a.getStore, showModal = _a.showModal;
        return (React.createElement("div", { className: "container-fluid" },
            React.createElement(Navbar_1.default, null),
            showModal && React.createElement(Modal_1.default, null)));
    };
    return App;
}(React.Component));
var mapStateToProps = function (state) { return ({
    showModal: state.showModal
}); };
var mapDispatchToProps = function (dispatch) { return ({
    getStore: function (data) {
        dispatch(action_1.createAction(action_1.GET_STORE, data));
    }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);


/***/ }),

/***/ "./ts/src/action/index.ts":
/*!********************************!*\
  !*** ./ts/src/action/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TOGGLE_MODAL = 'TOGGLE_MODAL';
exports.GET_STORE = 'GET_STORE';
exports.createAction = function (name, value) { return ({
    type: name,
    value: value
}); };


/***/ }),

/***/ "./ts/src/components/AlchemyInput.tsx":
/*!********************************************!*\
  !*** ./ts/src/components/AlchemyInput.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var AlchemyInput = /** @class */ (function (_super) {
    __extends(AlchemyInput, _super);
    function AlchemyInput(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e) {
            var value = e.target.value.trim();
            _this.setState({
                value: value
            }, function () {
                _this.props.valueChange({ value: value, index: _this.props.index });
            });
        };
        _this.state = {
            value: ''
        };
        return _this;
    }
    AlchemyInput.prototype.render = function () {
        return (React.createElement("div", { className: "col" },
            React.createElement("input", { type: "text", value: this.state.value, className: "form-control", onChange: this.handleChange })));
    };
    return AlchemyInput;
}(React.Component));
exports.default = AlchemyInput;


/***/ }),

/***/ "./ts/src/components/Modal.tsx":
/*!*************************************!*\
  !*** ./ts/src/components/Modal.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var action_1 = __webpack_require__(/*! ../action */ "./ts/src/action/index.ts");
var AlchemyInput_1 = __webpack_require__(/*! ./AlchemyInput */ "./ts/src/components/AlchemyInput.tsx");
var getSelectList = function (_a) {
    var inputText = _a.inputText, alchemys = _a.alchemys;
    var tempList = [];
    if (inputText) {
        alchemys.map(function (item) {
            // 先比较拼音 再比较中文
            if (item.py.indexOf(inputText) >= 0 || item.name.indexOf(inputText) >= 0) {
                tempList.push(item);
            }
        });
    }
    return tempList;
};
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickSelect = function (data) {
            console.log(data);
        };
        _this.handleClickClose = function (e) {
            _this.props.toggleModal();
        };
        _this.handleClickSave = function (e) {
            // console.log(this.state.values)
        };
        _this.valueChange = function (_a) {
            var value = _a.value, index = _a.index;
            _this.setState({
                inputText: value,
                focusIndex: index
            });
        };
        _this.state = {
            inputText: '',
            focusIndex: null
        };
        return _this;
    }
    Modal.prototype.render = function () {
        var _this = this;
        var inputText = this.state.inputText;
        var editprops = {
            valueChange: this.valueChange,
            index: 0
        };
        var selectList = getSelectList({
            inputText: inputText,
            alchemys: this.props.alchemys
        });
        return (React.createElement("div", { className: "modal bd-example-modal-lg", style: { display: 'block' } },
            React.createElement("div", { className: "modal-dialog modal-lg", role: "document" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header" },
                        React.createElement("h5", { className: "modal-title" }, "\u6DFB\u52A0\u70BC\u91D1\u7EC4"),
                        React.createElement("button", { type: "button", className: "close", onClick: this.handleClickClose },
                            React.createElement("span", null, "\u00D7"))),
                    React.createElement("div", { className: "modal-body" },
                        React.createElement("div", { className: "form-row" },
                            [0, 1, 2].map(function (item) {
                                editprops.index = item;
                                return React.createElement(AlchemyInput_1.default, __assign({}, editprops, { key: item }));
                            }),
                            React.createElement("div", { className: "col" },
                                React.createElement("input", { type: "text", className: "form-control", placeholder: "\u6DFB\u52A0\u5907\u6CE8" }))),
                        React.createElement("ul", { className: "itemlist" }, !!selectList.length && selectList.map(function (item) { return React.createElement("li", { key: item.id, onClick: _this.handleClickSelect.bind(_this, item) }, item.name); }))),
                    React.createElement("div", { className: "modal-footer" },
                        React.createElement("button", { type: "button", className: "btn btn-primary", onClick: this.handleClickSave }, "\u4FDD\u5B58"),
                        React.createElement("button", { type: "button", className: "btn btn-secondary", onClick: this.handleClickClose }, "\u5173\u95ED"))))));
    };
    return Modal;
}(React.Component));
var mapStateToProps = function (state) { return ({
    alchemys: state.alchemys
}); };
var mapDispatchToProps = function (dispatch) { return ({
    toggleModal: function () {
        dispatch(action_1.createAction(action_1.TOGGLE_MODAL, false));
    }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Modal);


/***/ }),

/***/ "./ts/src/components/Navbar.tsx":
/*!**************************************!*\
  !*** ./ts/src/components/Navbar.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var action_1 = __webpack_require__(/*! ../action */ "./ts/src/action/index.ts");
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickAdd = function (e) {
            _this.props.toggleModal();
        };
        return _this;
    }
    Navbar.prototype.render = function () {
        return (React.createElement("nav", { className: "navbar navbar-expand-lg navbar-dark bg-dark" },
            React.createElement("div", { className: "collapse navbar-collapse" },
                React.createElement("ul", { className: "navbar-nav mr-auto mt-2 mt-lg-0" },
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "javascript:void(0)" }, "\u4EFB\u52A1\u4E00\u6B21")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "javascript:void(0)" }, "\u70BC\u91D1\u4E00\u6B21")))),
            React.createElement("button", { className: "btn btn-light", type: "button", onClick: this.handleClickAdd }, "\u6DFB\u52A0\u70BC\u91D1\u7EC4")));
    };
    return Navbar;
}(React.Component));
var mapStateToProps = function (state) { return ({
    DB: state.DB
}); };
var mapDispatchToProps = function (dispatch) { return ({
    toggleModal: function () {
        dispatch(action_1.createAction(action_1.TOGGLE_MODAL, true));
    }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Navbar);


/***/ }),

/***/ "./ts/src/index.tsx":
/*!**************************!*\
  !*** ./ts/src/index.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_dom_1 = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var reducer_1 = __webpack_require__(/*! ./reducer */ "./ts/src/reducer/index.ts");
var App_1 = __webpack_require__(/*! ./App */ "./ts/src/App.tsx");
var store = redux_1.createStore(reducer_1.default);
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(App_1.default, null)), document.getElementById('root'));


/***/ }),

/***/ "./ts/src/reducer/index.ts":
/*!*********************************!*\
  !*** ./ts/src/reducer/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import initialState from '../store/'
var action_1 = __webpack_require__(/*! ../action */ "./ts/src/action/index.ts");
var list_1 = __webpack_require__(/*! ./list */ "./ts/src/reducer/list.ts");
var initialState = {
    alchemys: list_1.default,
    showModal: false,
    DB: {}
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case action_1.GET_STORE:
            return Object.assign({}, state, {
                DB: action.value
            });
        case action_1.TOGGLE_MODAL:
            return Object.assign({}, state, {
                showModal: action.value
            });
        default:
            return state;
    }
});


/***/ }),

/***/ "./ts/src/reducer/list.ts":
/*!********************************!*\
  !*** ./ts/src/reducer/list.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var list = [
    {
        id: 1,
        name: '威吓珠',
        py: 'weihe',
        rank: 5
    }, {
        id: 2,
        name: '加护珠',
        py: 'jiahu',
        rank: 5
    }, {
        id: 3,
        name: '绝路珠',
        py: 'juelu',
        rank: 5
    }, {
        id: 4,
        name: '指示珠',
        py: 'zhishi',
        rank: 5
    }, {
        id: 5,
        name: '整备珠',
        py: 'zhengbei',
        rank: 5
    }, {
        id: 6,
        name: '潜伏珠',
        py: 'qianfu',
        rank: 5
    }, {
        id: 7,
        name: '烟复珠',
        py: 'yanfu',
        rank: 5
    }, {
        id: 8,
        name: '逆境珠',
        py: 'nijing',
        rank: 5
    }, {
        id: 9,
        name: '嗅觉珠',
        py: 'xiujue',
        rank: 5
    }, {
        id: 10,
        name: '植学珠',
        py: 'zhixue',
        rank: 5
    }, {
        id: 11,
        name: '节食珠',
        py: 'jieshi',
        rank: 5
    }, {
        id: 12,
        name: '地学珠',
        py: 'dixue',
        rank: 5
    }, {
        id: 13,
        name: '沼度珠',
        py: 'zhaodu',
        rank: 5
    }, {
        id: 14,
        name: '无食珠',
        py: 'wushi',
        rank: 5
    }, {
        id: 15,
        name: '耐火珠',
        py: 'naihuo',
        rank: 5
    }, {
        id: 16,
        name: '耐雷珠',
        py: 'nailei',
        rank: 5
    }, {
        id: 17,
        name: '耐龙珠',
        py: 'nailong',
        rank: 5
    }, {
        id: 18,
        name: '耐眠珠',
        py: 'naimian',
        rank: 5
    }, {
        id: 19,
        name: '炮手珠',
        py: 'paoshou',
        rank: 5
    }, {
        id: 20,
        name: '标本珠',
        py: 'biaoben',
        rank: 5
    },
    {
        id: 21,
        name: '耐水珠',
        py: 'naishui',
        rank: 5
    }, {
        id: 22,
        name: '耐冰珠',
        py: 'naibing',
        rank: 5
    }, {
        id: 23,
        name: '耐毒珠',
        py: 'naidu',
        rank: 5
    }, {
        id: 24,
        name: '耐麻珠',
        py: 'naima',
        rank: 5
    }, {
        id: 25,
        name: '耐爆珠',
        py: 'naibao',
        rank: 5
    }, {
        id: 26,
        name: '耐裂珠',
        py: 'nailie',
        rank: 5
    }, {
        id: 27,
        name: '耐瘴珠',
        py: 'naizhang',
        rank: 5
    }, {
        id: 28,
        name: '耐防珠',
        py: 'naifang',
        rank: 5
    }, {
        id: 29,
        name: '飞燕珠',
        py: 'feiyan',
        rank: 5
    }, {
        id: 30,
        name: '火炎珠',
        py: 'huoyan',
        rank: 6
    }, {
        id: 31,
        name: '鼓笛珠',
        py: 'gudi',
        rank: 6
    }, {
        id: 32,
        name: '快吃珠',
        py: '',
        rank: 6
    }, {
        id: 33,
        name: '速纳珠',
        py: 'suna',
        rank: 6
    }, {
        id: 34,
        name: '体力珠',
        py: 'tili',
        rank: 6
    },
    {
        id: 35,
        name: '夺气珠',
        py: 'duoqi',
        rank: 6
    },
    {
        id: 37,
        name: '研磨珠',
        py: 'yanmo',
        rank: 6
    },
    {
        id: 38,
        name: '持续珠',
        py: 'chixu',
        rank: 6
    }, {
        id: 39,
        name: '早复珠',
        py: 'zaofu',
        rank: 6
    }, {
        id: 40,
        name: '治愈珠',
        py: 'zhiyu',
        rank: 6
    }, {
        id: 41,
        name: '达人珠',
        py: 'daren',
        rank: 6
    }, {
        id: 42,
        name: '投石珠',
        py: 'toushi',
        rank: 6
    }, {
        id: 43,
        name: '毒珠',
        py: 'du',
        rank: 6
    }, {
        id: 44,
        name: '爆师珠',
        py: 'baoshi',
        rank: 6
    }, {
        id: 45,
        name: '流水珠',
        py: 'liushui',
        rank: 6
    }, {
        id: 46,
        name: '防御珠',
        py: 'fangyu',
        rank: 6
    }, {
        id: 47,
        name: '耐绝珠',
        py: 'naijue',
        rank: 6
    }, {
        id: 48,
        name: '耐属珠',
        py: 'naishu',
        rank: 6
    }, {
        id: 49,
        name: '破龙珠',
        py: 'polong',
        rank: 6
    }, {
        id: 50,
        name: '冰结珠',
        py: 'bingjie',
        rank: 6
    }, {
        id: 51,
        name: '雷光珠',
        py: 'leiguang',
        rank: 6
    }, {
        id: 52,
        name: '有爱珠',
        py: 'youai',
        rank: 6
    }, {
        id: 53,
        name: 'KO珠',
        py: 'ko',
        rank: 6
    }, {
        id: 54,
        name: '划走珠',
        py: 'huazou',
        rank: 6
    }, {
        id: 55,
        name: '体术珠',
        py: 'tishu',
        rank: 6
    }, {
        id: 56,
        name: '痛击珠',
        py: 'tongji',
        rank: 6
    }, {
        id: 57,
        name: '无击珠',
        py: 'wuji',
        rank: 6
    }, {
        id: 58,
        name: '回避珠',
        py: 'huibi',
        rank: 6
    }, {
        id: 59,
        name: '重击珠',
        py: 'zhongji',
        rank: 6
    }, {
        id: 60,
        name: '跳跃珠',
        py: 'tiaoyue',
        rank: 6
    }, {
        id: 61,
        name: '防风珠',
        py: 'fangfeng',
        rank: 6
    }, {
        id: 62,
        name: '耐震珠',
        py: 'naizhen',
        rank: 6
    }, {
        id: 63,
        name: '放音珠',
        py: 'fangyin',
        rank: 6
    }, {
        id: 64,
        name: '毒瓶珠',
        py: 'duping',
        rank: 6
    }, {
        id: 65,
        name: '耐动珠',
        py: 'naidong',
        rank: 6
    }, {
        id: 66,
        name: '攻击珠',
        py: 'gongji',
        rank: 6
    }, {
        id: 67,
        name: '铁壁珠',
        py: 'tiebi',
        rank: 6
    }, {
        id: 68,
        name: '爆破珠',
        py: 'baopo',
        rank: 6
    }, {
        id: 69,
        name: '睡眠珠',
        py: 'shuimian',
        rank: 6
    }, {
        id: 70,
        name: '特射珠',
        py: 'teshe',
        rank: 6
    },
];
exports.getAlchemyName = function (_id) {
    var tempName = '';
    list.some(function (_a) {
        var id = _a.id, name = _a.name;
        if (_id === id) {
            tempName = name;
            return true;
        }
    });
    return tempName;
};
exports.default = list;


/***/ })

},[["./ts/src/index.tsx","manifest","vendor"]]]);
//# sourceMappingURL=index.js.map