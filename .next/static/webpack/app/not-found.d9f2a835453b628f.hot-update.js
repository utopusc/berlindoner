"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/not-found",{

/***/ "(app-pages-browser)/./context/CartContext.js":
/*!********************************!*\
  !*** ./context/CartContext.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: function() { return /* binding */ CartContext; },\n/* harmony export */   CartProvider: function() { return /* binding */ CartProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// context/CartContext.js\n/* __next_internal_client_entry_do_not_use__ CartContext,CartProvider auto */ \nvar _s = $RefreshSig$();\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartProvider = (param)=>{\n    let { children } = param;\n    _s();\n    // Sepet verilerini `localStorage`'dan okumak için başlangıç değerini ayarlıyoruz\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Kupon kodu ve indirim durumu için state değişkenleri\n    const [couponCode, setCouponCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isCouponApplied, setIsCouponApplied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [discountPercentage, setDiscountPercentage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Uygulama ilk yüklendiğinde `localStorage`'dan verileri okuyalım\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedCartItems = localStorage.getItem(\"cartItems\");\n        const storedCouponCode = localStorage.getItem(\"couponCode\");\n        const storedIsCouponApplied = localStorage.getItem(\"isCouponApplied\");\n        const storedDiscountPercentage = localStorage.getItem(\"discountPercentage\");\n        if (storedCartItems) {\n            setCartItems(JSON.parse(storedCartItems));\n        }\n        if (storedCouponCode) {\n            setCouponCode(storedCouponCode);\n        }\n        if (storedIsCouponApplied) {\n            setIsCouponApplied(JSON.parse(storedIsCouponApplied));\n        }\n        if (storedDiscountPercentage) {\n            setDiscountPercentage(parseFloat(storedDiscountPercentage));\n        }\n    }, []);\n    // Sepet verileri ve kupon bilgileri her değiştiğinde `localStorage`'a kaydedelim\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n    }, [\n        cartItems\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"couponCode\", couponCode);\n    }, [\n        couponCode\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"isCouponApplied\", JSON.stringify(isCouponApplied));\n    }, [\n        isCouponApplied\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"discountPercentage\", discountPercentage.toString());\n    }, [\n        discountPercentage\n    ]);\n    // Ürün ekleme fonksiyonu\n    const addToCart = (product)=>{\n        setCartItems((prevItems)=>{\n            // Ürün zaten sepette varsa miktarı artır\n            const existingProduct = prevItems.find((item)=>item.id === product.id);\n            if (existingProduct) {\n                return prevItems.map((item)=>item.id === product.id ? {\n                        ...item,\n                        quantity: item.quantity + 1\n                    } : item);\n            } else {\n                // Ürün sepette yoksa ekle\n                return [\n                    ...prevItems,\n                    {\n                        ...product,\n                        quantity: 1\n                    }\n                ];\n            }\n        });\n    };\n    // Ürün kaldırma fonksiyonu\n    const removeFromCart = (productId)=>{\n        setCartItems((prevItems)=>prevItems.filter((item)=>item.id !== productId));\n    };\n    // Miktar güncelleme fonksiyonu\n    const updateQuantity = (productId, quantity)=>{\n        setCartItems((prevItems)=>prevItems.map((item)=>item.id === productId ? {\n                    ...item,\n                    quantity: quantity\n                } : item));\n    };\n    // Sepeti temizleme fonksiyonu\n    const clearCart = ()=>{\n        setCartItems([]);\n        clearCoupon(); // Kupon bilgisini de temizle\n    };\n    // Kupon uygulama fonksiyonu\n    const applyCoupon = (code, discount)=>{\n        setCouponCode(code);\n        setDiscountPercentage(discount);\n        setIsCouponApplied(true);\n    };\n    // Kuponu temizleme fonksiyonu\n    const clearCoupon = ()=>{\n        setCouponCode(\"\");\n        setDiscountPercentage(0);\n        setIsCouponApplied(false);\n    };\n    // Toplam fiyat hesaplama fonksiyonu (indirimli)\n    const calculateTotalPrice = ()=>{\n        const subtotal = cartItems.reduce((total, item)=>total + item.price * item.quantity, 0);\n        if (isCouponApplied) {\n            return subtotal - subtotal * discountPercentage / 100;\n        }\n        return subtotal;\n    };\n    // Toplam fiyat (indirim öncesi)\n    const totalPrice = cartItems.reduce((total, item)=>total + item.price * item.quantity, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartItems,\n            addToCart,\n            removeFromCart,\n            updateQuantity,\n            clearCart,\n            totalPrice,\n            // Kupon ile ilgili değerler ve fonksiyonlar\n            couponCode,\n            isCouponApplied,\n            discountPercentage,\n            applyCoupon,\n            clearCoupon,\n            calculateTotalPrice\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/workspaces/berlindoner/context/CartContext.js\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CartProvider, \"V336gkZ5/HIMrxIFNy3Wf7vtqNQ=\");\n_c = CartProvider;\nvar _c;\n$RefreshReg$(_c, \"CartProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvQ2FydENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx5QkFBeUI7OztBQUVrQztBQUVwRCxNQUFNRyw0QkFBY0gsb0RBQWFBLEdBQUc7QUFFcEMsTUFBTUksZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsaUZBQWlGO0lBQ2pGLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDLHVEQUF1RDtJQUN2RCxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDUyxpQkFBaUJDLG1CQUFtQixHQUFHViwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNXLG9CQUFvQkMsc0JBQXNCLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTdELGtFQUFrRTtJQUNsRUMsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxrQkFBa0JDLGFBQWFDLE9BQU8sQ0FBQztRQUM3QyxNQUFNQyxtQkFBbUJGLGFBQWFDLE9BQU8sQ0FBQztRQUM5QyxNQUFNRSx3QkFBd0JILGFBQWFDLE9BQU8sQ0FBQztRQUNuRCxNQUFNRywyQkFBMkJKLGFBQWFDLE9BQU8sQ0FBQztRQUV0RCxJQUFJRixpQkFBaUI7WUFDbkJQLGFBQWFhLEtBQUtDLEtBQUssQ0FBQ1A7UUFDMUI7UUFDQSxJQUFJRyxrQkFBa0I7WUFDcEJSLGNBQWNRO1FBQ2hCO1FBQ0EsSUFBSUMsdUJBQXVCO1lBQ3pCUCxtQkFBbUJTLEtBQUtDLEtBQUssQ0FBQ0g7UUFDaEM7UUFDQSxJQUFJQywwQkFBMEI7WUFDNUJOLHNCQUFzQlMsV0FBV0g7UUFDbkM7SUFDRixHQUFHLEVBQUU7SUFFTCxpRkFBaUY7SUFDakZqQixnREFBU0EsQ0FBQztRQUNSYSxhQUFhUSxPQUFPLENBQUMsYUFBYUgsS0FBS0ksU0FBUyxDQUFDbEI7SUFDbkQsR0FBRztRQUFDQTtLQUFVO0lBRWRKLGdEQUFTQSxDQUFDO1FBQ1JhLGFBQWFRLE9BQU8sQ0FBQyxjQUFjZjtJQUNyQyxHQUFHO1FBQUNBO0tBQVc7SUFFZk4sZ0RBQVNBLENBQUM7UUFDUmEsYUFBYVEsT0FBTyxDQUFDLG1CQUFtQkgsS0FBS0ksU0FBUyxDQUFDZDtJQUN6RCxHQUFHO1FBQUNBO0tBQWdCO0lBRXBCUixnREFBU0EsQ0FBQztRQUNSYSxhQUFhUSxPQUFPLENBQUMsc0JBQXNCWCxtQkFBbUJhLFFBQVE7SUFDeEUsR0FBRztRQUFDYjtLQUFtQjtJQUV2Qix5QkFBeUI7SUFDekIsTUFBTWMsWUFBWSxDQUFDQztRQUNqQnBCLGFBQWEsQ0FBQ3FCO1lBQ1oseUNBQXlDO1lBQ3pDLE1BQU1DLGtCQUFrQkQsVUFBVUUsSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0wsUUFBUUssRUFBRTtZQUN2RSxJQUFJSCxpQkFBaUI7Z0JBQ25CLE9BQU9ELFVBQVVLLEdBQUcsQ0FBQyxDQUFDRixPQUNwQkEsS0FBS0MsRUFBRSxLQUFLTCxRQUFRSyxFQUFFLEdBQ2xCO3dCQUFFLEdBQUdELElBQUk7d0JBQUVHLFVBQVVILEtBQUtHLFFBQVEsR0FBRztvQkFBRSxJQUN2Q0g7WUFFUixPQUFPO2dCQUNMLDBCQUEwQjtnQkFDMUIsT0FBTzt1QkFBSUg7b0JBQVc7d0JBQUUsR0FBR0QsT0FBTzt3QkFBRU8sVUFBVTtvQkFBRTtpQkFBRTtZQUNwRDtRQUNGO0lBQ0Y7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCN0IsYUFBYSxDQUFDcUIsWUFDWkEsVUFBVVMsTUFBTSxDQUFDLENBQUNOLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0k7SUFFM0M7SUFFQSwrQkFBK0I7SUFDL0IsTUFBTUUsaUJBQWlCLENBQUNGLFdBQVdGO1FBQ2pDM0IsYUFBYSxDQUFDcUIsWUFDWkEsVUFBVUssR0FBRyxDQUFDLENBQUNGLE9BQ2JBLEtBQUtDLEVBQUUsS0FBS0ksWUFBWTtvQkFBRSxHQUFHTCxJQUFJO29CQUFFRyxVQUFVQTtnQkFBUyxJQUFJSDtJQUdoRTtJQUVBLDhCQUE4QjtJQUM5QixNQUFNUSxZQUFZO1FBQ2hCaEMsYUFBYSxFQUFFO1FBQ2ZpQyxlQUFlLDZCQUE2QjtJQUM5QztJQUVBLDRCQUE0QjtJQUM1QixNQUFNQyxjQUFjLENBQUNDLE1BQU1DO1FBQ3pCbEMsY0FBY2lDO1FBQ2Q3QixzQkFBc0I4QjtRQUN0QmhDLG1CQUFtQjtJQUNyQjtJQUVBLDhCQUE4QjtJQUM5QixNQUFNNkIsY0FBYztRQUNsQi9CLGNBQWM7UUFDZEksc0JBQXNCO1FBQ3RCRixtQkFBbUI7SUFDckI7SUFFQSxnREFBZ0Q7SUFDaEQsTUFBTWlDLHNCQUFzQjtRQUMxQixNQUFNQyxXQUFXdkMsVUFBVXdDLE1BQU0sQ0FDL0IsQ0FBQ0MsT0FBT2hCLE9BQVNnQixRQUFRaEIsS0FBS2lCLEtBQUssR0FBR2pCLEtBQUtHLFFBQVEsRUFDbkQ7UUFFRixJQUFJeEIsaUJBQWlCO1lBQ25CLE9BQU9tQyxXQUFXLFdBQVlqQyxxQkFBc0I7UUFDdEQ7UUFDQSxPQUFPaUM7SUFDVDtJQUVBLGdDQUFnQztJQUNoQyxNQUFNSSxhQUFhM0MsVUFBVXdDLE1BQU0sQ0FDakMsQ0FBQ0MsT0FBT2hCLE9BQVNnQixRQUFRaEIsS0FBS2lCLEtBQUssR0FBR2pCLEtBQUtHLFFBQVEsRUFDbkQ7SUFHRixxQkFDRSw4REFBQy9CLFlBQVkrQyxRQUFRO1FBQ25CQyxPQUFPO1lBQ0w3QztZQUNBb0I7WUFDQVM7WUFDQUc7WUFDQUM7WUFDQVU7WUFDQSw0Q0FBNEM7WUFDNUN6QztZQUNBRTtZQUNBRTtZQUNBNkI7WUFDQUQ7WUFDQUk7UUFDRjtrQkFFQ3ZDOzs7Ozs7QUFHUCxFQUFFO0dBNUlXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L0NhcnRDb250ZXh0LmpzP2MzOTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29udGV4dC9DYXJ0Q29udGV4dC5qc1xuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgLy8gU2VwZXQgdmVyaWxlcmluaSBgbG9jYWxTdG9yYWdlYCdkYW4gb2t1bWFrIGnDp2luIGJhxZ9sYW5nxLHDpyBkZcSfZXJpbmkgYXlhcmzEsXlvcnV6XG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gS3Vwb24ga29kdSB2ZSBpbmRpcmltIGR1cnVtdSBpw6dpbiBzdGF0ZSBkZcSfacWfa2VubGVyaVxuICBjb25zdCBbY291cG9uQ29kZSwgc2V0Q291cG9uQ29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzQ291cG9uQXBwbGllZCwgc2V0SXNDb3Vwb25BcHBsaWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rpc2NvdW50UGVyY2VudGFnZSwgc2V0RGlzY291bnRQZXJjZW50YWdlXSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIFV5Z3VsYW1hIGlsayB5w7xrbGVuZGnEn2luZGUgYGxvY2FsU3RvcmFnZWAnZGFuIHZlcmlsZXJpIG9rdXlhbMSxbVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZENhcnRJdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydEl0ZW1zXCIpO1xuICAgIGNvbnN0IHN0b3JlZENvdXBvbkNvZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdXBvbkNvZGVcIik7XG4gICAgY29uc3Qgc3RvcmVkSXNDb3Vwb25BcHBsaWVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0NvdXBvbkFwcGxpZWRcIik7XG4gICAgY29uc3Qgc3RvcmVkRGlzY291bnRQZXJjZW50YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkaXNjb3VudFBlcmNlbnRhZ2VcIik7XG5cbiAgICBpZiAoc3RvcmVkQ2FydEl0ZW1zKSB7XG4gICAgICBzZXRDYXJ0SXRlbXMoSlNPTi5wYXJzZShzdG9yZWRDYXJ0SXRlbXMpKTtcbiAgICB9XG4gICAgaWYgKHN0b3JlZENvdXBvbkNvZGUpIHtcbiAgICAgIHNldENvdXBvbkNvZGUoc3RvcmVkQ291cG9uQ29kZSk7XG4gICAgfVxuICAgIGlmIChzdG9yZWRJc0NvdXBvbkFwcGxpZWQpIHtcbiAgICAgIHNldElzQ291cG9uQXBwbGllZChKU09OLnBhcnNlKHN0b3JlZElzQ291cG9uQXBwbGllZCkpO1xuICAgIH1cbiAgICBpZiAoc3RvcmVkRGlzY291bnRQZXJjZW50YWdlKSB7XG4gICAgICBzZXREaXNjb3VudFBlcmNlbnRhZ2UocGFyc2VGbG9hdChzdG9yZWREaXNjb3VudFBlcmNlbnRhZ2UpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBTZXBldCB2ZXJpbGVyaSB2ZSBrdXBvbiBiaWxnaWxlcmkgaGVyIGRlxJ9pxZ90acSfaW5kZSBgbG9jYWxTdG9yYWdlYCdhIGtheWRlZGVsaW1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcbiAgfSwgW2NhcnRJdGVtc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3Vwb25Db2RlXCIsIGNvdXBvbkNvZGUpO1xuICB9LCBbY291cG9uQ29kZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0NvdXBvbkFwcGxpZWRcIiwgSlNPTi5zdHJpbmdpZnkoaXNDb3Vwb25BcHBsaWVkKSk7XG4gIH0sIFtpc0NvdXBvbkFwcGxpZWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGlzY291bnRQZXJjZW50YWdlXCIsIGRpc2NvdW50UGVyY2VudGFnZS50b1N0cmluZygpKTtcbiAgfSwgW2Rpc2NvdW50UGVyY2VudGFnZV0pO1xuXG4gIC8vIMOccsO8biBla2xlbWUgZm9ua3NpeW9udVxuICBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCkgPT4ge1xuICAgIHNldENhcnRJdGVtcygocHJldkl0ZW1zKSA9PiB7XG4gICAgICAvLyDDnHLDvG4gemF0ZW4gc2VwZXR0ZSB2YXJzYSBtaWt0YXLEsSBhcnTEsXJcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHByZXZJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcbiAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3QpIHtcbiAgICAgICAgcmV0dXJuIHByZXZJdGVtcy5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgaXRlbS5pZCA9PT0gcHJvZHVjdC5pZFxuICAgICAgICAgICAgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9XG4gICAgICAgICAgICA6IGl0ZW1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIMOccsO8biBzZXBldHRlIHlva3NhIGVrbGVcbiAgICAgICAgcmV0dXJuIFsuLi5wcmV2SXRlbXMsIHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfV07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gw5xyw7xuIGthbGTEsXJtYSBmb25rc2l5b251XG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKHByb2R1Y3RJZCkgPT4ge1xuICAgIHNldENhcnRJdGVtcygocHJldkl0ZW1zKSA9PlxuICAgICAgcHJldkl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcHJvZHVjdElkKVxuICAgICk7XG4gIH07XG5cbiAgLy8gTWlrdGFyIGfDvG5jZWxsZW1lIGZvbmtzaXlvbnVcbiAgY29uc3QgdXBkYXRlUXVhbnRpdHkgPSAocHJvZHVjdElkLCBxdWFudGl0eSkgPT4ge1xuICAgIHNldENhcnRJdGVtcygocHJldkl0ZW1zKSA9PlxuICAgICAgcHJldkl0ZW1zLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbS5pZCA9PT0gcHJvZHVjdElkID8geyAuLi5pdGVtLCBxdWFudGl0eTogcXVhbnRpdHkgfSA6IGl0ZW1cbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIC8vIFNlcGV0aSB0ZW1pemxlbWUgZm9ua3NpeW9udVxuICBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiB7XG4gICAgc2V0Q2FydEl0ZW1zKFtdKTtcbiAgICBjbGVhckNvdXBvbigpOyAvLyBLdXBvbiBiaWxnaXNpbmkgZGUgdGVtaXpsZVxuICB9O1xuXG4gIC8vIEt1cG9uIHV5Z3VsYW1hIGZvbmtzaXlvbnVcbiAgY29uc3QgYXBwbHlDb3Vwb24gPSAoY29kZSwgZGlzY291bnQpID0+IHtcbiAgICBzZXRDb3Vwb25Db2RlKGNvZGUpO1xuICAgIHNldERpc2NvdW50UGVyY2VudGFnZShkaXNjb3VudCk7XG4gICAgc2V0SXNDb3Vwb25BcHBsaWVkKHRydWUpO1xuICB9O1xuXG4gIC8vIEt1cG9udSB0ZW1pemxlbWUgZm9ua3NpeW9udVxuICBjb25zdCBjbGVhckNvdXBvbiA9ICgpID0+IHtcbiAgICBzZXRDb3Vwb25Db2RlKFwiXCIpO1xuICAgIHNldERpc2NvdW50UGVyY2VudGFnZSgwKTtcbiAgICBzZXRJc0NvdXBvbkFwcGxpZWQoZmFsc2UpO1xuICB9O1xuXG4gIC8vIFRvcGxhbSBmaXlhdCBoZXNhcGxhbWEgZm9ua3NpeW9udSAoaW5kaXJpbWxpKVxuICBjb25zdCBjYWxjdWxhdGVUb3RhbFByaWNlID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1YnRvdGFsID0gY2FydEl0ZW1zLnJlZHVjZShcbiAgICAgICh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSxcbiAgICAgIDBcbiAgICApO1xuICAgIGlmIChpc0NvdXBvbkFwcGxpZWQpIHtcbiAgICAgIHJldHVybiBzdWJ0b3RhbCAtIChzdWJ0b3RhbCAqIGRpc2NvdW50UGVyY2VudGFnZSkgLyAxMDA7XG4gICAgfVxuICAgIHJldHVybiBzdWJ0b3RhbDtcbiAgfTtcblxuICAvLyBUb3BsYW0gZml5YXQgKGluZGlyaW0gw7ZuY2VzaSlcbiAgY29uc3QgdG90YWxQcmljZSA9IGNhcnRJdGVtcy5yZWR1Y2UoXG4gICAgKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5LFxuICAgIDBcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY2FydEl0ZW1zLFxuICAgICAgICBhZGRUb0NhcnQsXG4gICAgICAgIHJlbW92ZUZyb21DYXJ0LFxuICAgICAgICB1cGRhdGVRdWFudGl0eSxcbiAgICAgICAgY2xlYXJDYXJ0LFxuICAgICAgICB0b3RhbFByaWNlLFxuICAgICAgICAvLyBLdXBvbiBpbGUgaWxnaWxpIGRlxJ9lcmxlciB2ZSBmb25rc2l5b25sYXJcbiAgICAgICAgY291cG9uQ29kZSxcbiAgICAgICAgaXNDb3Vwb25BcHBsaWVkLFxuICAgICAgICBkaXNjb3VudFBlcmNlbnRhZ2UsXG4gICAgICAgIGFwcGx5Q291cG9uLFxuICAgICAgICBjbGVhckNvdXBvbixcbiAgICAgICAgY2FsY3VsYXRlVG90YWxQcmljZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcnRDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJjb3Vwb25Db2RlIiwic2V0Q291cG9uQ29kZSIsImlzQ291cG9uQXBwbGllZCIsInNldElzQ291cG9uQXBwbGllZCIsImRpc2NvdW50UGVyY2VudGFnZSIsInNldERpc2NvdW50UGVyY2VudGFnZSIsInN0b3JlZENhcnRJdGVtcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRDb3Vwb25Db2RlIiwic3RvcmVkSXNDb3Vwb25BcHBsaWVkIiwic3RvcmVkRGlzY291bnRQZXJjZW50YWdlIiwiSlNPTiIsInBhcnNlIiwicGFyc2VGbG9hdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b1N0cmluZyIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJwcmV2SXRlbXMiLCJleGlzdGluZ1Byb2R1Y3QiLCJmaW5kIiwiaXRlbSIsImlkIiwibWFwIiwicXVhbnRpdHkiLCJyZW1vdmVGcm9tQ2FydCIsInByb2R1Y3RJZCIsImZpbHRlciIsInVwZGF0ZVF1YW50aXR5IiwiY2xlYXJDYXJ0IiwiY2xlYXJDb3Vwb24iLCJhcHBseUNvdXBvbiIsImNvZGUiLCJkaXNjb3VudCIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJzdWJ0b3RhbCIsInJlZHVjZSIsInRvdGFsIiwicHJpY2UiLCJ0b3RhbFByaWNlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/CartContext.js\n"));

/***/ })

});