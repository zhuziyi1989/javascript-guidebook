(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[268],{"+QM1":function(e,n,a){"use strict";a.r(n);var t=a("55Ip"),l=a("q1tI"),c=a.n(l),r=(a("B2uJ"),a("+su7"),a("qOys")),o=a.n(r);a("5Yjd");n["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"\u5c5e\u6027\u64cd\u4f5c"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u5c5e\u6027\u64cd\u4f5c"},c.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027\u64cd\u4f5c"),c.a.createElement("h2",{id:"\u5c5e\u6027\u67e5\u8be2"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u5c5e\u6027\u67e5\u8be2"},c.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027\u67e5\u8be2"),c.a.createElement("p",null,"\u5c5e\u6027\u67e5\u8be2\u5728\u8868\u8fbe\u5f0f\u5c42\u9762\u4e5f\u6210\u4e3a ",c.a.createElement(t["a"],{to:"../../basic-concept/expressions/primary-expression/property-accessors"},"\u5c5e\u6027\u8bbf\u95ee\u5668"),"\u3002"),c.a.createElement("p",null,"\u5c5e\u6027\u67e5\u8be2\u4e00\u822c\u6709\u4e24\u79cd\u65b9\u6cd5\uff1a"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"#%E7%82%B9%E8%BF%90%E7%AE%97%E7%AC%A6"},"\u70b9\u8fd0\u7b97\u7b26")),c.a.createElement("li",null,c.a.createElement("a",{href:"#%E6%96%B9%E6%8B%AC%E5%8F%B7%E8%BF%90%E7%AE%97%E7%AC%A6"},"\u65b9\u62ec\u53f7\u8fd0\u7b97\u7b26"))),c.a.createElement("p",null,"\u952e\u540d\u53ef\u4ee5\u662f\u4e2d\u6587\uff0c\u56e0\u4e3a\u4e2d\u6587\u76f8\u5f53\u4e8e\u5b57\u7b26\uff0c\u4e0e\u82f1\u6587\u5b57\u7b26\u540c\u6837\u5bf9\u5f85\uff0c\u56e0\u6b64\u53ef\u4ee5\u5199\u6210 ",c.a.createElement("code",null,"person.\u767d")," \u6216 ",c.a.createElement("code",null,"person['\u767d']"),"\u3002"),c.a.createElement(o.a,{code:"const person = {\n  \u767d : 1\n}\nconsole.log(person.\u767d);\n// 1\nconsole.log(person['\u767d']);\n// 1\n",lang:"js"}),c.a.createElement("h3",{id:"\u70b9\u8fd0\u7b97\u7b26"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u70b9\u8fd0\u7b97\u7b26"},c.a.createElement("span",{className:"icon icon-link"})),"\u70b9\u8fd0\u7b97\u7b26"),c.a.createElement("p",null,"\u70b9\u8fd0\u7b97\u7b26\u662f\u5f88\u591a\u9762\u5411\u5bf9\u8c61\u8bed\u53e5\u7684\u901a\u7528\u5199\u6cd5\uff0c\u7531\u4e8e\u5176\u6bd4\u8f83\u7b80\u5355\uff0c\u6240\u4ee5\u8f83\u65b9\u62ec\u53f7\u8fd0\u7b97\u7b26\u76f8\u6bd4\uff0c\u66f4\u5e38\u7528\u3002"),c.a.createElement("p",null,"\u7531\u4e8e JavaScript \u662f\u5f31\u7c7b\u578b\u8bed\u8a00\uff0c\u5728\u4efb\u4f55\u5bf9\u8c61\u4e2d\u90fd\u53ef\u4ee5\u521b\u5efa\u4efb\u610f\u6570\u91cf\u7684\u5c5e\u6027\u3002\u4f46\u5f53\u901a\u8fc7\u70b9\u8fd0\u7b97\u7b26 ",c.a.createElement("code",null,". ")," \u8bbf\u95ee\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\uff0c\u5c5e\u6027\u540d\u7528\u4e00\u4e2a\u6807\u8bc6\u7b26\u6765\u8868\u793a\uff0c\u6807\u8bc6\u7b26\u8981\u7b26\u5408 ",c.a.createElement(t["a"],{to:"../../basic-concept/lexical-grammar/lexical-grammar#%E6%A0%87%E8%AF%86%E7%AC%A6"},"\u53d8\u91cf\u547d\u540d\u89c4\u5219"),"\u3002\u6807\u8bc6\u7b26\u5fc5\u987b\u76f4\u63a5\u51fa\u73b0\u5728 JavaScript \u7a0b\u5e8f\u4e2d\uff0c\u5b83\u4eec\u4e0d\u662f\u6570\u636e\u7c7b\u578b\uff0c\u56e0\u6b64\u7a0b\u5e8f\u65e0\u6cd5\u4fee\u6539\u5b83\u4eec\u3002"),c.a.createElement(o.a,{code:"const foo = {\n  a: 1,\n  1: 2\n};\n\nconsole.log(foo.a);\n// 1\n\n// \u7531\u4e8e\u53d8\u91cf\u4e0d\u53ef\u4ee5\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u6240\u4ee5o.1\u62a5\u9519\nconsole.log(o.1);\n// Uncaught SyntaxError: missing ) after argument list\n",lang:"js"}),c.a.createElement("h3",{id:"\u65b9\u62ec\u53f7\u8fd0\u7b97\u7b26"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u65b9\u62ec\u53f7\u8fd0\u7b97\u7b26"},c.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u62ec\u53f7\u8fd0\u7b97\u7b26"),c.a.createElement("p",null,"\u5f53\u901a\u8fc7\u65b9\u62ec\u53f7\u8fd0\u7b97\u7b26 ",c.a.createElement("code",null,"[]")," \u6765\u8bbf\u95ee\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\uff0c\u5c5e\u6027\u540d\u901a\u8fc7\u5b57\u7b26\u4e32\u6765\u8868\u793a\u3002\u5b57\u7b26\u4e32\u662f JavaScript \u7684\u6570\u636e\u7c7b\u578b\uff0c\u5728\u7a0b\u5e8f\u8fd0\u884c\u4e2d\u53ef\u4ee5\u4fee\u6539\u548c\u521b\u5efa\u5b83\u4eec\u3002"),c.a.createElement("p",null,"\u4f7f\u7528\u65b9\u62ec\u53f7\u8fd0\u7b97\u7b26\u6709\u4e24\u4e2a\u4f18\u70b9\uff1a"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u53ef\u4ee5\u901a\u8fc7\u53d8\u91cf\u6765\u8bbf\u95ee\u5c5e\u6027"),c.a.createElement("li",null,"\u5c5e\u6027\u540d\u79f0\u53ef\u4ee5\u4e3a JavaScript \u65e0\u6548\u6807\u8bc6\u7b26")),c.a.createElement("p",null,"\u65b9\u62ec\u53f7\u4e2d\u7684\u503c\u82e5\u662f\u975e\u5b57\u7b26\u4e32\u7c7b\u578b\u4f1a\u4f7f\u7528 ",c.a.createElement("code",null,"String()")," \u9690\u5f0f\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\u518d\u8f93\u51fa\u3002\u5982\u679c\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u82e5\u6709\u5f15\u53f7\u5219\u539f\u503c\u8f93\u51fa\uff0c\u5426\u5219\u4f1a\u88ab\u8bc6\u522b\u4e3a\u53d8\u91cf\uff0c\u82e5\u53d8\u91cf\u672a\u5b9a\u4e49\uff0c\u5219\u62a5\u9519\u3002"),c.a.createElement("h4",{id:"\u53ef\u8ba1\u7b97\u5c5e\u6027\u540d"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u53ef\u8ba1\u7b97\u5c5e\u6027\u540d"},c.a.createElement("span",{className:"icon icon-link"})),"\u53ef\u8ba1\u7b97\u5c5e\u6027\u540d"),c.a.createElement("p",null,"\u5728\u65b9\u62ec\u53f7\u8fd0\u7b97\u7b26\u5185\u90e8\u53ef\u4ee5\u4f7f\u7528\u8868\u8fbe\u5f0f\u3002"),c.a.createElement(o.a,{code:"const a = 1;\nconst foo = {\n  3: 'abc'\n};\n\nfoo[a + 2]; // 'abc'\n",lang:"js"}),c.a.createElement("p",null,"\u4f46\u5982\u679c\u8981\u5728\u5bf9\u8c61\u5b57\u9762\u91cf\u5185\u90e8\u5bf9\u5c5e\u6027\u540d\u4f7f\u7528\u8868\u8fbe\u5f0f\uff0c\u5219\u9700\u8981\u4f7f\u7528 ES6 \u7684\u53ef\u8ba1\u7b97\u5c5e\u6027\u540d\u3002"),c.a.createElement(o.a,{code:"const a = 1;\n\nconst foo = {\n  a + 3: 'abc'\n};\n// Uncaught SyntaxError: Unexpected token +\n",lang:"js"}),c.a.createElement("p",null,"ES6 \u589e\u52a0\u4e86\u53ef\u8ba1\u7b97\u5c5e\u6027\u540d\uff0c\u53ef\u4ee5\u5728\u6587\u5b57\u4e2d\u4f7f\u7528 ",c.a.createElement("code",null,"[]")," \u5305\u88f9\u4e00\u4e2a\u8868\u8fbe\u5f0f\u6765\u5f53\u4f5c\u5c5e\u6027\u540d\u3002"),c.a.createElement(o.a,{code:"const a = 1;\n\nconst foo = {\n  [a + 3]: 'bar'\n};\n\nfoo[4];\n// 'bar'\n",lang:"js"}),c.a.createElement("h4",{id:"\u5c5e\u6027\u67e5\u8be2\u9519\u8bef"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u5c5e\u6027\u67e5\u8be2\u9519\u8bef"},c.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027\u67e5\u8be2\u9519\u8bef"),c.a.createElement("p",null,"\u67e5\u8be2\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u5c5e\u6027\u4e0d\u4f1a\u62a5\u9519\uff0c\u800c\u662f\u8fd4\u56de ",c.a.createElement("code",null,"undefined"),"\u3002"),c.a.createElement(o.a,{code:"const foo = {};\n\nconsole.log(foo.a);\n// undefined\n",lang:"js"}),c.a.createElement("p",null,"\u5982\u679c\u5bf9\u8c61\u4e0d\u5b58\u5728\uff0c\u8bd5\u56fe\u67e5\u8be2\u8fd9\u4e2a\u4e0d\u5b58\u5728\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u4f1a\u62a5\u9519\u3002"),c.a.createElement(o.a,{code:"console.log(foo.a);\n// Uncaught ReferenceError: person is not defined\n",lang:"js"}),c.a.createElement("p",null,"\u53ef\u4ee5\u5229\u7528\u8fd9\u4e00\u70b9\uff0c\u6765\u68c0\u67e5\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u662f\u5426\u88ab\u58f0\u660e\u3002"),c.a.createElement("p",null,"\u68c0\u67e5\u53d8\u91cf\u662f\u5426\u88ab\u58f0\u660e"),c.a.createElement(o.a,{code:"if (a) {...};\n// Uncaught ReferenceError: a is not defined\n",lang:"js"}),c.a.createElement("p",null,"\u6240\u6709\u5168\u5c40\u53d8\u91cf\u90fd\u662f Window \u5bf9\u8c61\u7684\u5c5e\u6027\u3002",c.a.createElement("code",null,"window.a")," \u7684\u542b\u4e49\u5c31\u662f\u8bfb\u53d6 Window \u5bf9\u8c61\u7684 ",c.a.createElement("code",null,"a")," \u5c5e\u6027\uff0c\u5982\u679c\u8be5\u5c5e\u6027\u4e0d\u5b58\u5728\uff0c\u5c31\u8fd4\u56de ",c.a.createElement("code",null,"undefined"),"\uff0c\u5e76\u4e0d\u4f1a\u62a5\u9519\u3002"),c.a.createElement(o.a,{code:"if (window.a) {...}\n",lang:"js"}),c.a.createElement("h2",{id:"\u5c5e\u6027\u8bbe\u7f6e"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u5c5e\u6027\u8bbe\u7f6e"},c.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027\u8bbe\u7f6e"),c.a.createElement("p",null,"\u5c5e\u6027\u8bbe\u7f6e\u53c8\u79f0\u4e3a\u5c5e\u6027\u8d4b\u503c\uff0c\u4e0e\u5c5e\u6027\u67e5\u8be2\u76f8\u540c\uff0c\u5177\u6709",c.a.createElement("strong",null,"\u70b9\u8fd0\u7b97\u7b26"),"\u548c",c.a.createElement("strong",null,"\u65b9\u62ec\u53f7\u8fd0\u7b97\u7b26"),"\u8fd9\u4e24\u79cd\u65b9\u6cd5\u3002"),c.a.createElement("p",null,"\ud83c\udf30 ",c.a.createElement("strong",null,"\u6807\u51c6\u793a\u4f8b\uff1a\u70b9\u8fd0\u7b97\u7b26")),c.a.createElement(o.a,{code:"foo.p = 'bar';\n",lang:"js"}),c.a.createElement("p",null,"\ud83c\udf30 ",c.a.createElement("strong",null,"\u6807\u51c6\u793a\u4f8b\uff1a\u65b9\u62ec\u53f7\u8fd0\u7b97\u7b26")),c.a.createElement(o.a,{code:"foo['p'] = 'bar';\n",lang:"js"}),c.a.createElement("h3",{id:"\u8d4b\u503c\u68c0\u6d4b"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u8d4b\u503c\u68c0\u6d4b"},c.a.createElement("span",{className:"icon icon-link"})),"\u8d4b\u503c\u68c0\u6d4b"),c.a.createElement("p",null,"\u5728\u7ed9\u5bf9\u8c61\u8bbe\u7f6e\u5c5e\u6027\u4e4b\u524d\uff0c\u4e00\u822c\u8981\u5148\u68c0\u6d4b\u5bf9\u8c61\u662f\u5426\u5b58\u5728\u3002"),c.a.createElement(o.a,{code:"// Bad\nconst len = undefined;\nif(book){\n  if(book.subtitle){\n    len = book.subtitle.length;\n  }\n}\n\n// Good\nconst len = book && book.subtitle && book.subtitle.length;\n",lang:"js"}),c.a.createElement("h3",{id:"\u539f\u59cb\u7c7b\u578b"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u539f\u59cb\u7c7b\u578b"},c.a.createElement("span",{className:"icon icon-link"})),"\u539f\u59cb\u7c7b\u578b"),c.a.createElement("p",null,"\u7531\u4e8e String\u3001Number \u548c Boolean \u7b49\u6570\u636e\u7c7b\u578b\u7684\u503c\u6709\u5bf9\u5e94\u7684\u5305\u88c5\u5bf9\u8c61\uff0c\u6240\u4ee5\u7ed9\u5b83\u4eec\u8bbe\u7f6e\u5c5e\u6027\u4e0d\u4f1a\u62a5\u9519\u3002"),c.a.createElement(o.a,{code:"'foo'.a = 1;\n// 1\n\n(1).a = 1;\n// 1\n\ntrue.a = 1;\n// 1\n",lang:"js"}),c.a.createElement("p",null,"\u800c ",c.a.createElement("code",null,"null")," \u548c ",c.a.createElement("code",null,"undefined")," \u4e0d\u662f\u5bf9\u8c61\uff0c\u7ed9\u5b83\u4eec\u8bbe\u7f6e\u5c5e\u6027\u4f1a\u62a5\u9519\u3002"),c.a.createElement(o.a,{code:"null.a = 1;\n// Uncaught TypeError: Cannot set property 'a' of null\n\nundefined.a = 1;\n// Uncaught TypeError: Cannot set property 'a' of undefined\n",lang:"js"}),c.a.createElement("h2",{id:"\u5c5e\u6027\u5220\u9664"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u5c5e\u6027\u5220\u9664"},c.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027\u5220\u9664"),c.a.createElement("p",null,"\u4f7f\u7528 ",c.a.createElement(t["a"],{to:"../../basic-concept/expressions/unary-operators/delete"},"delete")," \u8fd0\u7b97\u7b26\u53ef\u4ee5\u5220\u9664\u5bf9\u8c61\u5c5e\u6027\uff08\u5305\u62ec\u6570\u7ec4\u5143\u7d20\uff09\u3002"),c.a.createElement(o.a,{code:"const foo = { a : 1 };\n\nconsole.log( foo.a );\n// 1\nconsole.log( 'a' in foo );\n// true\n\n// delete object attribute\nconsole.log( delete foo.a );\n// true\n\nconsole.log( foo.a );\n// undefined\nconsole.log( 'a' in foo );\n// false\n",lang:"js"}),c.a.createElement("ul",null,c.a.createElement("li",null,"\u7ed9\u5bf9\u8c61\u5c5e\u6027\u8bbe\u7f6e ",c.a.createElement("code",null,"null")," \u6216 ",c.a.createElement("code",null,"undefined"),"\uff0c\u5e76\u6ca1\u6709\u5220\u9664\u8be5\u5c5e\u6027"),c.a.createElement("li",null,"\u4f7f\u7528 ",c.a.createElement("code",null,"delete")," \u5220\u9664\u6570\u7ec4\u5143\u7d20\u65f6\uff0c\u4e0d\u4f1a\u6539\u53d8\u6570\u7ec4\u957f\u5ea6"),c.a.createElement("li",null,c.a.createElement("code",null,"delete")," \u8fd0\u7b97\u7b26\u53ea\u80fd\u5220\u9664\u81ea\u6709\u5c5e\u6027\uff0c\u4e0d\u80fd\u5220\u9664\u7ee7\u627f\u5c5e\u6027",c.a.createElement("ul",null,c.a.createElement("li",null,"\u8981\u5220\u9664\u7ee7\u627f\u5c5e\u6027\u5fc5\u987b\u4ece\u5b9a\u4e49\u8fd9\u4e2a\u5c5e\u6027\u7684\u539f\u578b\u5bf9\u8c61\u4e0a\u5220\u9664\u5b83\uff0c\u800c\u4e14\u8fd9\u4f1a\u5f71\u54cd\u5230\u6240\u6709\u7ee7\u627f\u81ea\u8fd9\u4e2a\u539f\u578b\u7684\u5bf9\u8c61"))),c.a.createElement("li",null,c.a.createElement("code",null,"delete")," \u64cd\u4f5c\u7b26\u7684\u8fd4\u56de\u503c\u662f\u4e2a\u5e03\u5c14\u503c ",c.a.createElement("code",null,"true")," \u6216 ",c.a.createElement("code",null,"false"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u5f53\u4f7f\u7528 ",c.a.createElement("code",null,"delete")," \u64cd\u4f5c\u7b26\u5220\u9664\u5bf9\u8c61\u5c5e\u6027\u6216\u6570\u7ec4\u5143\u7d20\u5220\u9664\u6210\u529f\u65f6\uff0c\u8fd4\u56de ",c.a.createElement("code",null,"true")),c.a.createElement("li",null,"\u5f53\u4f7f\u7528 ",c.a.createElement("code",null,"delete")," \u64cd\u4f5c\u7b26\u5220\u9664\u4e0d\u5b58\u5728\u7684\u5c5e\u6027\u6216\u975e\u5de6\u503c\u65f6\uff0c\u8fd4\u56de ",c.a.createElement("code",null,"true")),c.a.createElement("li",null,"\u5f53\u4f7f\u7528 ",c.a.createElement("code",null,"delete")," \u64cd\u4f5c\u7b26\u5220\u9664\u53d8\u91cf\u65f6\uff0c\u8fd4\u56de ",c.a.createElement("code",null,"false"),"\uff0c\u4e25\u683c\u6a21\u5f0f\u4e0b\u4f1a\u629b\u51fa ReferenceError \u9519\u8bef"),c.a.createElement("li",null,"\u5f53\u4f7f\u7528 ",c.a.createElement("code",null,"delete")," \u64cd\u4f5c\u7b26\u5220\u9664\u4e0d\u53ef\u914d\u7f6e\u7684\u5c5e\u6027\u65f6\uff0c\u8fd4\u56de ",c.a.createElement("code",null,"false"),"\uff0c\u4e25\u683c\u6a21\u5f0f\u4e0b\u4f1a\u629b\u51fa TypeError \u9519\u8bef")))),c.a.createElement("h2",{id:"\u5c5e\u6027\u7ee7\u627f"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u5c5e\u6027\u7ee7\u627f"},c.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027\u7ee7\u627f"),c.a.createElement("p",null,'\u6bcf\u4e2a JavaScript \u5bf9\u8c61\u90fd\u548c\u53e6\u4e00\u4e2a\u5bf9\u8c61\u76f8\u5173\u8054\u3002"\u53e6\u4e00\u4e2a\u5bf9\u8c61"\u5c31\u662f\u6211\u4eec\u719f\u77e5\u7684\u539f\u578b\uff0c\u6bcf\u4e00\u4e2a\u5bf9\u8c61\u90fd\u4ece\u539f\u578b\u7ee7\u627f\u5c5e\u6027\u3002'),c.a.createElement("p",null,"\u6240\u6709\u901a\u8fc7\u5bf9\u8c61\u76f4\u63a5\u91cf\u521b\u5efa\u7684\u5bf9\u8c61\u90fd\u5177\u6709\u540c\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61\uff0c\u5e76\u53ef\u4ee5\u901a\u8fc7 ",c.a.createElement("code",null,"Object.prototype")," \u83b7\u5f97\u5bf9\u539f\u578b\u5bf9\u8c61\u7684\u5f15\u7528\u3002"),c.a.createElement(o.a,{code:"const foo = {};\n\nconsole.log(foo.__proto__ === Object.prototype);\n// true\n",lang:"js"}),c.a.createElement("p",null,c.a.createElement("code",null,"Object.prototype")," \u7684\u539f\u578b\u5bf9\u8c61\u662f ",c.a.createElement("code",null,"null"),"\uff0c\u6240\u4ee5\u5b83\u4e0d\u7ee7\u627f\u4efb\u4f55\u5c5e\u6027\u3002"),c.a.createElement(o.a,{code:"console.log(Object.prototype.__proto__ === null);\n// true\n",lang:"js"}),c.a.createElement("p",null,"\u5bf9\u8c61\u672c\u8eab\u5177\u6709\u7684\u5c5e\u6027\u53eb ",c.a.createElement("strong",null,"\u81ea\u6709\u5c5e\u6027"),"\uff08Own Property\uff09\uff0c\u4ece\u539f\u578b\u5bf9\u8c61\u7ee7\u627f\u800c\u6765\u7684\u5c5e\u6027\u53eb ",c.a.createElement("strong",null,"\u7ee7\u627f\u5c5e\u6027"),"\u3002"),c.a.createElement("h3",{id:"\u5224\u65ad\u65b9\u6cd5"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u5224\u65ad\u65b9\u6cd5"},c.a.createElement("span",{className:"icon icon-link"})),"\u5224\u65ad\u65b9\u6cd5"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(t["a"],{to:"../../basic-concept/expressions/unary-operators/in"},"in"),"\uff1a",c.a.createElement("code",null,"in")," \u64cd\u4f5c\u7b26\u53ef\u4ee5\u5224\u65ad\u5c5e\u6027\u5728\u4e0d\u5728\u8be5\u5bf9\u8c61\u4e0a\uff0c\u4f46\u65e0\u6cd5\u533a\u522b\u81ea\u6709\u8fd8\u662f\u7ee7\u627f\u5c5e\u6027\u3002"),c.a.createElement("li",null,c.a.createElement(t["a"],{to:"../../basic-concept/statements-and-declarations/iteration-statement/the-for-in-statement"},"for-in"),"\uff1a\u901a\u8fc7 ",c.a.createElement("code",null,"for-in")," \u5faa\u73af\u53ef\u4ee5\u904d\u5386\u51fa\u8be5\u5bf9\u8c61\u4e2d\u6240\u6709",c.a.createElement("strong",null,"\u53ef\u679a\u4e3e\u5c5e\u6027"),"\u3002"),c.a.createElement("li",null,c.a.createElement(t["a"],{to:"../../standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-prototype-object/hasOwnProperty"},"hasOwnProperty"),"\uff1a\u901a\u8fc7 ",c.a.createElement("code",null,"hasOwnProperty()")," \u65b9\u6cd5",c.a.createElement("strong",null,"\u53ef\u4ee5\u786e\u5b9a\u8be5\u5c5e\u6027\u662f\u81ea\u6709\u5c5e\u6027\u8fd8\u662f\u7ee7\u627f\u5c5e\u6027"),"\u3002"),c.a.createElement("li",null,c.a.createElement(t["a"],{to:"../../standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/keys"},"Object.keys"),"\uff1a",c.a.createElement("code",null,"Object.keys()")," \u65b9\u6cd5\u8fd4\u56de\u6240\u6709",c.a.createElement("strong",null,"\u53ef\u679a\u4e3e\u7684\u81ea\u6709\u5c5e\u6027"),"\u3002"),c.a.createElement("li",null,c.a.createElement(t["a"],{to:"../../standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/getOwnPropertyNames"},"Object.getOwnPropertyNames"),"\uff1a",c.a.createElement("code",null,"Object.getOwnPropertyNames()")," \u65b9\u6cd5\u8fd4\u56de\u6240\u6709\u81ea\u6709\u5c5e\u6027\uff08\u5305\u62ec\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\uff09\u3002"))))}}}]);