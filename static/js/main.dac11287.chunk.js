(this["webpackJsonpui-showcase"]=this["webpackJsonpui-showcase"]||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},29:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),l=s(17),n=s.n(l),a=(s(25),s(10)),r=s(3),o=(s(26),s(11)),j=s(15),h=(s(29),s(0));var d=function(e){var t=e.subhead,s=Object(c.useState)(!1),i=Object(j.a)(s,2),l=i[0],n=i[1],a=Object(c.useState)(!1),o=Object(j.a)(a,2),d=o[0],C=o[1],b=Object(r.e)().pathname;return Object(c.useEffect)((function(){window.onscroll=function(){var e=document.querySelector(".landing");window.pageYOffset>(null===e||void 0===e?void 0:e.offsetTop)?C(!0):C(!1)}}),[]),Object(h.jsx)("div",{className:"Navigation ".concat(d?"fixed_Nav_home":""),children:Object(h.jsxs)("nav",{className:"boxwidth ".concat("/"!==b||d?"":"nav_home"),children:[Object(h.jsxs)("div",{className:"logo ".concat("/"!==b||d?"":"logo_home"),children:[Object(h.jsx)("h1",{children:"Showcase"}),t&&Object(h.jsx)("h3",{children:t})]}),Object(h.jsxs)("div",{className:"right ".concat(d?"right_scrolled":""),children:[l&&Object(h.jsx)("div",{onClick:function(){return n(!l)},className:"clickToExit"}),Object(h.jsx)("div",{onClick:function(){return n(!l)},className:"hamburger",children:Object(h.jsxs)("svg",{width:"34",height:"27",viewBox:"0 0 34 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M6.21371 1.52899C4.54629 8.46237 1.93048 19.2973 0.687511 24.313C0.359142 25.638 1.40974 27 2.77485 27H5.0197C5.93743 27 6.7374 26.3754 6.95998 25.4851L12.71 2.48507C13.0256 1.22278 12.0708 0 10.7697 0H8.15765C7.23305 0 6.4299 0.630034 6.21371 1.52899Z",fill:"white"}),Object(h.jsx)("path",{d:"M10.5775 24.5149L16.3275 1.51493C16.5501 0.624595 17.3501 0 18.2678 0H20.8947C22.1958 0 23.1506 1.22277 22.835 2.48507L17.085 25.4851C16.8624 26.3754 16.0624 27 15.1447 27H12.5178C11.2167 27 10.2619 25.7772 10.5775 24.5149Z",fill:"white"}),Object(h.jsx)("path",{d:"M20.7025 24.5149L26.4525 1.51493C26.6751 0.624595 27.4751 0 28.3928 0H31.0197C32.3208 0 33.2756 1.22277 32.96 2.48507L27.21 25.4851C26.9874 26.3754 26.1874 27 25.2697 27H22.6428C21.3417 27 20.3869 25.7772 20.7025 24.5149Z",fill:"white"})]})}),Object(h.jsxs)("ul",{className:"hamburger_menu ".concat(l?"menu_open":"menu_close"),children:[Object(h.jsx)("li",{className:"hamburger_item",children:"Developer"}),Object(h.jsx)("li",{className:"hamburger_item",children:"About"})]})]})]})})},C=(s(36),s.p+"static/media/carousel.067b8eb3.ico");var b=function(){var e=Object(c.useRef)(null);Object(c.useEffect)((function(){e&&(window.onkeydown=function(e){"ArrowRight"!==e.key&&"l"!==e.key||t(-1),"ArrowLeft"!==e.key&&"h"!==e.key||t(1)},e.current.onmousedown=function(t){t.preventDefault(),e.current.onmousemove=function(t){t.movementX<0&&(e.current.scrollLeft+=300),t.movementX>0&&(e.current.scrollLeft-=300)},e.current.onmouseup=function(){e.current.onmouseup=null,e.current.onmousemove=null}})}),[]);var t=function(t){t<0&&(e.current.scrollLeft+=300),t>0&&(e.current.scrollLeft-=300)};return Object(h.jsxs)("div",{className:"Carousel",children:[Object(h.jsxs)(o.a,{children:[Object(h.jsx)("title",{children:"Carousel | UI Showcase"}),Object(h.jsx)("meta",{name:"description",content:"UI Design for carousel | scrollable, draggable, clickable carousel"}),Object(h.jsx)("link",{rel:"icon",type:"image/x-icon",href:C})]}),Object(h.jsx)(d,{subhead:"carousel"}),Object(h.jsxs)("div",{className:"carousel_container",children:[Object(h.jsx)("div",{className:"scroll_buttons previous",onClick:function(){return t(1)},children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(h.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(h.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})]})}),Object(h.jsxs)("div",{ref:e,className:"scroller",children:[Object(h.jsx)("div",{className:"carousel_img",loading:"lazy",draggable:"false",children:Object(h.jsx)("img",{src:"https://bit.ly/2VpUNYI",alt:"scott-pilgrim"})}),Object(h.jsx)("div",{className:"carousel_img",loading:"lazy",draggable:"false",children:Object(h.jsx)("img",{src:"https://bit.ly/2Vq987T",alt:"scott-pilgrim"})}),Object(h.jsx)("div",{className:"carousel_img",loading:"lazy",draggable:"false",children:Object(h.jsx)("img",{src:"https://bit.ly/3fz06MJ",alt:"scott-pilgrim"})}),Object(h.jsx)("div",{className:"carousel_img",loading:"lazy",draggable:"false",children:Object(h.jsx)("img",{src:"https://bit.ly/3inP3I4",alt:"scott-pilgrim"})}),Object(h.jsx)("div",{className:"carousel_img",loading:"lazy",draggable:"false",children:Object(h.jsx)("img",{src:"https://bit.ly/3xsa3lg",alt:"scott-pilgrim"})}),Object(h.jsx)("div",{className:"carousel_img",loading:"lazy",draggable:"false",children:Object(h.jsx)("img",{src:"https://bit.ly/3yqOL8Y",alt:"scott-pilgrim"})})]}),Object(h.jsx)("div",{className:"scroll_buttons next",onClick:function(){return t(-1)},children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(h.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(h.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})]})}),Object(h.jsx)("div",{className:"scroll_bar"})]})]})};s(37);var x=function(){return Object(h.jsxs)("div",{className:"Footer",children:[Object(h.jsx)("div",{className:"curve"}),Object(h.jsx)("div",{className:"Foot_body",children:Object(h.jsxs)("div",{className:"boxwidth",children:[Object(h.jsxs)("div",{className:"Foot_head",children:[Object(h.jsx)("h1",{children:"Showcase"}),Object(h.jsx)("p",{children:"Showcasing Suyash Kumar"})]}),Object(h.jsxs)("div",{className:"Footer_links",children:[Object(h.jsx)("p",{children:"find me here"}),Object(h.jsxs)("div",{className:"Foot_linkul",children:[Object(h.jsxs)("a",{href:".",className:"Foot_link",children:[Object(h.jsx)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M11.5 0C5.14625 0 0 5.14625 0 11.5C0 16.5888 3.29187 20.8869 7.86312 22.4106C8.43812 22.5112 8.65375 22.1663 8.65375 21.8644C8.65375 21.5912 8.63938 20.6856 8.63938 19.7225C5.75 20.2544 5.0025 19.0181 4.7725 18.3713C4.64313 18.0406 4.0825 17.02 3.59375 16.7469C3.19125 16.5312 2.61625 15.9994 3.57938 15.985C4.485 15.9706 5.13188 16.8187 5.3475 17.1637C6.3825 18.9031 8.03563 18.4144 8.69688 18.1125C8.7975 17.365 9.09937 16.8619 9.43 16.5744C6.87125 16.2869 4.1975 15.295 4.1975 10.8962C4.1975 9.64563 4.64313 8.61062 5.37625 7.80562C5.26125 7.51812 4.85875 6.33938 5.49125 4.75812C5.49125 4.75812 6.45437 4.45625 8.65375 5.93688C9.57375 5.67813 10.5513 5.54875 11.5288 5.54875C12.5063 5.54875 13.4838 5.67813 14.4038 5.93688C16.6031 4.44188 17.5662 4.75812 17.5662 4.75812C18.1987 6.33938 17.7962 7.51812 17.6812 7.80562C18.4144 8.61062 18.86 9.63125 18.86 10.8962C18.86 15.3094 16.1719 16.2869 13.6131 16.5744C14.03 16.9338 14.3894 17.6238 14.3894 18.7019C14.3894 20.24 14.375 21.4762 14.375 21.8644C14.375 22.1663 14.5906 22.5256 15.1656 22.4106C17.4487 21.6401 19.4326 20.1729 20.838 18.2157C22.2435 16.2584 22.9996 13.9096 23 11.5C23 5.14625 17.8538 0 11.5 0Z",fill:"white"})}),Object(h.jsx)("h3",{children:"suyious"})]}),Object(h.jsxs)("a",{href:".",className:"Foot_link",children:[Object(h.jsxs)("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("g",{"clip-path":"url(#clip0)",children:Object(h.jsx)("path",{d:"M18.4597 7.78776C18.5705 8.4254 18.6257 9.07145 18.6248 9.71864C18.6248 12.609 17.5916 15.0529 15.7937 16.7071H15.7961C14.2239 18.1594 12.0626 19.0001 9.5 19.0001C6.98044 19.0001 4.56408 17.9993 2.78249 16.2177C1.00089 14.4361 0 12.0197 0 9.50014C0 6.98058 1.00089 4.56422 2.78249 2.78262C4.56408 1.00103 6.98044 0.000138584 9.5 0.000138584C11.8583 -0.0274807 14.1358 0.858503 15.8555 2.47251L13.1432 5.18476C12.1628 4.25017 10.8543 3.73838 9.5 3.75976C7.02169 3.75976 4.91625 5.43176 4.16575 7.68326C3.76783 8.86305 3.76783 10.1408 4.16575 11.3206H4.16931C4.92338 13.5685 7.02525 15.2405 9.50356 15.2405C10.7837 15.2405 11.8833 14.9128 12.7359 14.3333H12.7324C13.2275 14.0053 13.6509 13.5804 13.9773 13.0842C14.3036 12.5881 14.5261 12.0309 14.6312 11.4465H9.5V7.78895H18.4597V7.78776Z",fill:"white"})}),Object(h.jsx)("defs",{children:Object(h.jsx)("clipPath",{id:"clip0",children:Object(h.jsx)("rect",{width:"19",height:"19",fill:"white"})})})]}),Object(h.jsx)("h3",{children:"suyu162001@gmail.com"})]}),Object(h.jsxs)("a",{href:".",className:"Foot_link",children:[Object(h.jsx)("svg",{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M10.5 0C7.65056 0 7.29225 0.013125 6.17269 0.063C5.05312 0.1155 4.29056 0.291375 3.6225 0.55125C2.92175 0.814825 2.28702 1.22827 1.76269 1.76269C1.2286 2.28729 0.815203 2.92194 0.55125 3.6225C0.291375 4.28925 0.114188 5.05312 0.063 6.16875C0.013125 7.29094 0 7.64794 0 10.5013C0 13.3521 0.013125 13.7091 0.063 14.8286C0.1155 15.9469 0.291375 16.7094 0.55125 17.3775C0.820312 18.0679 1.17863 18.6532 1.76269 19.2373C2.34544 19.8214 2.93081 20.181 3.62119 20.4487C4.29056 20.7086 5.05181 20.8858 6.17006 20.937C7.29094 20.9869 7.64794 21 10.5 21C13.3521 21 13.7078 20.9869 14.8286 20.937C15.9456 20.8845 16.7108 20.7086 17.3788 20.4487C18.0791 20.185 18.7134 19.7716 19.2373 19.2373C19.8214 18.6532 20.1797 18.0679 20.4487 17.3775C20.7073 16.7094 20.8845 15.9469 20.937 14.8286C20.9869 13.7091 21 13.3521 21 10.5C21 7.64794 20.9869 7.29094 20.937 6.17006C20.8845 5.05313 20.7073 4.28925 20.4487 3.6225C20.1848 2.92192 19.7714 2.28726 19.2373 1.76269C18.7131 1.22807 18.0784 0.814597 17.3775 0.55125C16.7081 0.291375 15.9443 0.114188 14.8273 0.063C13.7064 0.013125 13.3507 0 10.4974 0H10.5013H10.5ZM9.55894 1.89263H10.5013C13.3048 1.89263 13.6369 1.90181 14.7433 1.953C15.7671 1.99894 16.3236 2.17088 16.6937 2.31394C17.1833 2.50425 17.5337 2.73263 17.9012 3.10013C18.2687 3.46762 18.4958 3.81675 18.6861 4.30763C18.8304 4.67644 19.0011 5.23294 19.047 6.25669C19.0982 7.36313 19.1087 7.69519 19.1087 10.4974C19.1087 13.2996 19.0982 13.6329 19.047 14.7394C19.0011 15.7631 18.8291 16.3183 18.6861 16.6884C18.5177 17.1443 18.249 17.5566 17.8999 17.8946C17.5324 18.2621 17.1833 18.4892 16.6924 18.6795C16.3249 18.8239 15.7684 18.9945 14.7433 19.0417C13.6369 19.0916 13.3048 19.1034 10.5013 19.1034C7.69781 19.1034 7.36444 19.0916 6.258 19.0417C5.23425 18.9945 4.67906 18.8239 4.30894 18.6795C3.85284 18.5114 3.44023 18.2432 3.10144 17.8946C2.75199 17.556 2.48289 17.1434 2.31394 16.6871C2.17088 16.3183 1.99894 15.7618 1.953 14.7381C1.90313 13.6316 1.89263 13.2996 1.89263 10.4948C1.89263 7.69125 1.90313 7.3605 1.953 6.25406C2.00025 5.23031 2.17088 4.67381 2.31525 4.30369C2.50556 3.81413 2.73394 3.46369 3.10144 3.09619C3.46894 2.72869 3.81806 2.50163 4.30894 2.31131C4.67906 2.16694 5.23425 1.99631 6.258 1.94906C7.22662 1.90444 7.602 1.89131 9.55894 1.89V1.89263ZM16.1057 3.63562C15.9402 3.63562 15.7764 3.66822 15.6235 3.73154C15.4706 3.79486 15.3317 3.88767 15.2147 4.00467C15.0977 4.12167 15.0049 4.26057 14.9416 4.41344C14.8783 4.56631 14.8457 4.73016 14.8457 4.89563C14.8457 5.06109 14.8783 5.22494 14.9416 5.37781C15.0049 5.53068 15.0977 5.66958 15.2147 5.78658C15.3317 5.90358 15.4706 5.99639 15.6235 6.05971C15.7764 6.12303 15.9402 6.15562 16.1057 6.15562C16.4399 6.15562 16.7603 6.02288 16.9966 5.78658C17.2329 5.55028 17.3657 5.2298 17.3657 4.89563C17.3657 4.56145 17.2329 4.24097 16.9966 4.00467C16.7603 3.76837 16.4399 3.63562 16.1057 3.63562ZM10.5013 5.10825C9.78609 5.09709 9.0758 5.22832 8.41178 5.49431C7.74777 5.7603 7.1433 6.15572 6.63357 6.65756C6.12384 7.15939 5.71904 7.75762 5.44273 8.4174C5.16642 9.07719 5.02412 9.78535 5.02412 10.5007C5.02412 11.216 5.16642 11.9241 5.44273 12.5839C5.71904 13.2437 6.12384 13.8419 6.63357 14.3438C7.1433 14.8456 7.74777 15.241 8.41178 15.507C9.0758 15.773 9.78609 15.9042 10.5013 15.8931C11.9169 15.871 13.267 15.2931 14.2603 14.2843C15.2535 13.2754 15.8102 11.9164 15.8102 10.5007C15.8102 9.0849 15.2535 7.72592 14.2603 6.71705C13.267 5.70818 11.9169 5.13034 10.5013 5.10825ZM10.5013 6.99956C11.4297 6.99956 12.32 7.36836 12.9765 8.02482C13.633 8.68128 14.0017 9.57163 14.0017 10.5C14.0017 11.4284 13.633 12.3187 12.9765 12.9752C12.32 13.6316 11.4297 14.0004 10.5013 14.0004C9.57294 14.0004 8.68259 13.6316 8.02613 12.9752C7.36967 12.3187 7.00087 11.4284 7.00087 10.5C7.00087 9.57163 7.36967 8.68128 8.02613 8.02482C8.68259 7.36836 9.57294 6.99956 10.5013 6.99956Z",fill:"white"})}),Object(h.jsx)("h3",{children:"su._.yash"})]}),Object(h.jsxs)("a",{href:".",className:"Foot_link",children:[Object(h.jsxs)("svg",{width:"21",height:"18",viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("g",{"clip-path":"url(#clip0)",children:Object(h.jsx)("path",{d:"M8.15625 8.33892C9.27422 7.80454 9.85781 6.99595 9.85781 5.73735C9.85781 3.25532 8.00859 2.65063 5.87461 2.65063H0V15.11H6.03984C8.30391 15.11 10.4309 14.0237 10.4309 11.4924C10.4309 9.92798 9.68906 8.77134 8.15625 8.33892ZM2.73867 4.77759H5.30859C6.29648 4.77759 7.18594 5.05532 7.18594 6.20142C7.18594 7.25962 6.49336 7.68501 5.51602 7.68501H2.73867V4.77759ZM5.66719 12.9936H2.73867V9.56235H5.72344C6.9293 9.56235 7.69219 10.0651 7.69219 11.3413C7.69219 12.5999 6.78164 12.9936 5.66719 12.9936ZM18.2707 4.53149H13.2188V3.30454H18.2707V4.53149ZM20.25 10.7295C20.25 8.06118 18.6891 5.83579 15.859 5.83579C13.1098 5.83579 11.243 7.90298 11.243 10.61C11.243 13.419 13.0113 15.3456 15.859 15.3456C18.0141 15.3456 19.4098 14.3752 20.0813 12.3116H17.8945C17.659 13.0815 16.6887 13.4893 15.9363 13.4893C14.4844 13.4893 13.7215 12.6385 13.7215 11.1936H20.2289C20.2395 11.0459 20.25 10.8877 20.25 10.7295ZM13.725 9.63267C13.8059 8.4479 14.5934 7.7061 15.7816 7.7061C17.0262 7.7061 17.652 8.43735 17.7574 9.63267H13.725Z",fill:"white"})}),Object(h.jsx)("defs",{children:Object(h.jsx)("clipPath",{id:"clip0",children:Object(h.jsx)("rect",{width:"20.25",height:"18",fill:"white"})})})]}),Object(h.jsx)("h3",{children:"suyyyash"})]})]})]})]})}),Object(h.jsx)("div",{className:"Foot_bottom",children:Object(h.jsxs)("div",{className:"Foot_bot_body boxwidth",children:[Object(h.jsx)("div",{className:"logo",children:"Showcase"}),Object(h.jsxs)("ul",{className:"Foot_bot_right",children:[Object(h.jsx)("li",{children:"developer"}),Object(h.jsx)("li",{children:"sitemap"}),Object(h.jsx)("li",{children:"contacts"})]})]})})]})};s(38),s(39);var m=function(e){var t=e.name,s=e.description,c=e.path,i=e.screenshot;return Object(h.jsxs)("div",{className:"ProjectCard boxwidth",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)("img",{src:i,alt:"screenshot"})}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)("div",{className:"head",children:t}),Object(h.jsx)("div",{className:"description",children:s})]}),Object(h.jsx)(a.b,{to:c,children:Object(h.jsx)("div",{className:"visit",children:Object(h.jsx)("p",{children:"Visit Page"})})})]})};s(40);var u=function(){return Object(h.jsxs)("div",{className:"SearchBox",children:[Object(h.jsx)("input",{type:"text"}),Object(h.jsx)("div",{className:"SearchButton",children:Object(h.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.6284 17.2832C20.7466 13.9744 20.592 8.7642 17.2832 5.64601C13.9743 2.52782 8.76417 2.68239 5.64598 5.99125C2.52779 9.30011 2.68236 14.5103 5.99122 17.6284C9.30008 20.7466 14.5102 20.5921 17.6284 17.2832ZM16.2668 16C18.6763 13.4432 18.5568 9.41717 16 7.00766C13.4432 4.59815 9.41713 4.71759 7.00762 7.27443C4.59811 9.83128 4.71755 13.8573 7.2744 16.2668C9.83124 18.6763 13.8573 18.5569 16.2668 16Z",fill:"#ACACAC"}),Object(h.jsx)("path",{d:"M17.309 15.4397L15.7692 17.0737L19.6499 20.7307C19.4727 20.9187 19.4815 21.2148 19.6695 21.392L25.4565 26.8455C25.6445 27.0226 25.9405 27.0138 26.1177 26.8258L27.7216 25.1238C27.8988 24.9358 27.89 24.6398 27.702 24.4626L21.9151 19.0091C21.7271 18.8319 21.431 18.8407 21.2538 19.0287L21.1897 19.0968L17.309 15.4397Z",fill:"#ACACAC"})]})})]})},O=s.p+"static/media/carousel.c524a511.jpg";var g=function(){return Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsxs)(o.a,{children:[Object(h.jsx)("title",{children:"UI-Showcase | Home"}),Object(h.jsx)("meta",{name:"description",content:"UI Design Elements custom made | Home page"}),Object(h.jsx)("link",{rel:"icon",href:C})]}),Object(h.jsx)(d,{}),Object(h.jsxs)("div",{className:"landing",children:[Object(h.jsx)("div",{className:"curve"}),Object(h.jsxs)("div",{className:"projects",children:[Object(h.jsx)(u,{}),Object(h.jsx)(m,{name:"carousel",screenshot:O,description:"This one is  the shitiest of them all. Truly shitiest Lorem Ipsum is what I'd type here but that is apparently not very working so I gotta improvise to get myself some pseudo data.",path:"/carousel"}),Object(h.jsx)(m,{name:"carousel",screenshot:O,description:"This one is  the shitiest of them all Lorem Ipsum is what I'd type here but that is apparently not very working so I gotta improvise to get myself some pseudo data."}),Object(h.jsx)(m,{name:"carousel",screenshot:O,description:"This one is  the shitiest of them all Lorem Ipsum is what I'd type here but that is apparently not very working so I gotta improvise to get myself some pseudo data."})]})]}),Object(h.jsx)(x,{})]})};var p=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(a.a,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/",component:g}),Object(h.jsx)(r.a,{exact:!0,path:"/carousel",component:b})]})})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),c(e),i(e),l(e),n(e)}))};n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),v()}},[[41,1,2]]]);
//# sourceMappingURL=main.dac11287.chunk.js.map