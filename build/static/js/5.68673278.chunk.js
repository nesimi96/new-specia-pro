(this["webpackJsonpvestige-project"]=this["webpackJsonpvestige-project"]||[]).push([[5],{673:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){return c.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492.004 492.004",style:e.style},c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"}))),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null))}},675:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(4);t.a=function(){return c.a.createElement("div",{className:"lds-dual-ring"})}},676:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=(a(4),function(e){return[c.a.createElement("img",{src:a(354)}),c.a.createElement("img",{src:a(341)}),c.a.createElement("img",{src:a(346)}),c.a.createElement("img",{src:a(344)}),c.a.createElement("img",{src:a(361)}),c.a.createElement("img",{src:a(343)}),c.a.createElement("img",{src:a(351)}),c.a.createElement("img",{src:a(342)}),c.a.createElement("img",{src:a(345)}),c.a.createElement("img",{src:a(347)}),c.a.createElement("img",{src:a(348)}),c.a.createElement("img",{src:a(349)}),c.a.createElement("img",{src:a(350)}),c.a.createElement("img",{src:a(352)}),c.a.createElement("img",{src:a(353)}),c.a.createElement("img",{src:a(356)}),c.a.createElement("img",{src:a(355)}),c.a.createElement("img",{src:a(357)}),c.a.createElement("img",{src:a(358)}),c.a.createElement("img",{src:a(359)}),c.a.createElement("img",{src:a(360)}),c.a.createElement("img",{src:a(362)}),c.a.createElement("img",{src:a(363)}),c.a.createElement("img",{src:a(340)}),c.a.createElement("img",{src:a(364)})]});t.a=function(e){return c.a.createElement("div",{className:"Brands"},c.a.createElement("div",{className:"Brands-golden-line"}),c.a.createElement("h3",null,"brendovi"),c.a.createElement("div",{className:"Brands-wrapper"},c.a.createElement(r,null)))}},685:function(e,t,a){"use strict";a.r(t);var n=a(50),c=a(2),r=a(0),l=a.n(r),i=(a(28),a(4),a(682)),o=a(683),u=a(681),m=a(684),s=(a(678),a(679),function(e){var t=e.colors[e.activeColorImage].img.map((function(t,a){var n=e.activeColorImage===a?"8px":null;return l.a.createElement("div",{className:"sliderDots-dot",style:{width:n,height:n}})}));return l.a.createElement("div",{className:"sliderDots"},t)}),d=function(e){var t=e.productData.productSpecifications.colors,n=(t[e.activeImage].img,t[e.activeImage].img.map((function(e,t){return l.a.createElement(u.a,null," ",l.a.createElement("img",{src:a(365)("./".concat(e,".jpg"))})," ")})));return l.a.createElement("div",{className:"ImageAndNameParfum"},l.a.createElement("div",{className:"ImageAndNameParfum-img-wrapper"},l.a.createElement(s,{activeColorImage:e.activeColorImage,colors:t}),l.a.createElement(m.a,{modules:[i.a,o.a],spaceBetween:0,slidesPerView:1.2,scrollbar:{draggable:!0,el:".scrollbar"},onSwiper:function(e){return console.log(e)},onSlideChange:function(t){return e.changeColorImage(t.activeIndex)}},n)),l.a.createElement("div",{className:"ImageAndNameParfum-bottom-line"}," "),l.a.createElement("div",{className:"ImageAndNameParfum-name"},l.a.createElement("p",null,e.productData.productName)))},p=a(112),E=(a(40),a(14),a(6)),g=a.n(E),f=function(e){e.price,e.country;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{click:function(){return e.toLocalStorage()},text:"DODAJ U KORPU",style:e.buttonStyle}),l.a.createElement("div",{className:"Parfum-bottom-line"}))},v=a(329),b=function(e){var t=e.productData.productSpecifications.colors,a=t.map((function(t,a){return l.a.createElement("div",{onClick:function(){return e.changeImage(a)},className:"productColor_chooseColor_box",style:{backgroundImage:"linear-gradient(to bottom right, ".concat(t.color[0]," 50%, ").concat(t.color[1]," 50%)")}})}));return l.a.createElement("div",{className:"productColor"},l.a.createElement("div",null,l.a.createElement("b",null,"BOJA:")," ",t[e.activeImage].colorLabel,l.a.createElement("div",{className:"productColor_chooseColor"},a)))},h=function(e){var t=e.productData.productSpecifications.size,a=t.map((function(t,a){var n=0!==a?"2%":"0px",c=e.productSize===a?"#dfdfdf":null;return l.a.createElement("div",{onClick:function(){return e.changeProductSize(a)},className:"productSize_options_box",style:{marginLeft:n,backgroundColor:c}}," ",t.size," ")})),n=t.map((function(t,a){return e.productSize===a?t.size:null}));return l.a.createElement("div",{className:"productSize"},l.a.createElement("div",{className:"productSize_header"},l.a.createElement("b",null,"VELI\u010cINA:")," ",n),l.a.createElement("div",{className:"productSize_options"},a))},y=function(e){var t=e.productData.productPrices.discountPrice,a=e.productData.specialDiscounts,n=e.productPrice,c=(a[a.length-1].quanity,a[a.length-1].price);a&&a.map((function(a,r){a.quanity===e.productQuanity&&(n=a.quanity*a.price),e.productQuanity>a.quanity&&(n=e.productQuanity*c),1===e.productQuanity&&(n=t),e.changeProductPrice(n)}));var r=function(t){e.changeProductQuanity(t)};return l.a.createElement("div",{className:"Quanity"},l.a.createElement("b",{className:"Quanity_header"},"KOLI\u010cINA:"),l.a.createElement("div",{className:"Quanity_wrapper"},l.a.createElement("div",{className:"Quanity_wrapper_boxes"},l.a.createElement("div",{className:"Quanity_wrapper_boxes_inc",onClick:function(e){return r("dec")}},l.a.createElement("b",null,"-")),l.a.createElement("div",{className:"Quanity_wrapper_boxes_number"},l.a.createElement("b",null,e.productQuanity)),l.a.createElement("div",{className:"Quanity_wrapper_boxes_dec",onClick:function(e){return r("inc")}},l.a.createElement("b",null,"+"))),l.a.createElement("div",{className:"Quanity_wrapper_price"},l.a.createElement("h2",null,"= ",n," RSD"))),l.a.createElement("div",{className:"Quanity_discountAlert"},l.a.createElement("p",null,"Napomena:"),l.a.createElement("p",{style:{marginLeft:"1%"}},"Popust \u0107e biti izra\u010dunat u korpi.")))},N=a(673),I=function(e){var t=Object(r.useState)(!0),a=Object(c.a)(t,2),n=a[0],i=a[1],o=(e.productData,{width:12,height:12,transform:n?"rotate(90deg)":"rotate(0)",transition:"all .15s ease-in"}),u=e.productData.productDescription.map((function(e,t){return l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}));e.list.map((function(e,t){return l.a.createElement("div",null,e)}));return l.a.createElement("div",{className:"ArticalInfo"},l.a.createElement("div",{onClick:function(){i(!n)},className:"ArticalInfo-header"},l.a.createElement("div",null,l.a.createElement(N.a,{style:o})),l.a.createElement("p",null," OPIS PROIZVODA ")),l.a.createElement("div",{style:{display:n?"flex":"none",padding:e.list.length>1?"15px 15px 15px 20px":"0 15px 0 20px"},className:"ArticalInfo-description"},u))},x=function(e){var t=Object(r.useState)(null),a=Object(c.a)(t,2),n=a[0],i=a[1],o={width:12,height:12,transform:n?"rotate(90deg)":"rotate(0)",transition:"all .15s ease-in"},u=e.specifications.map((function(e,t){return l.a.createElement("div",null,l.a.createElement("b",null,e.specName)," ",e.spec)}));return l.a.createElement("div",{className:"ArticalInfo"},l.a.createElement("div",{onClick:function(){i(!n)},className:"ArticalInfo-header"},l.a.createElement("div",null,l.a.createElement(N.a,{style:o})),l.a.createElement("p",null," SPECIFIKACIJE ")),l.a.createElement("div",{style:{display:n?"flex":"none",padding:e.specifications>1?"15px 15px 15px 20px":"0 15px 0 20px"},className:"ArticalInfo-description"},u))},S=function(e){var t=e.productData.productfaq,a=Object(r.useState)(null),n=Object(c.a)(a,2),i=n[0],o=n[1],u={width:12,height:12,transform:i?"rotate(90deg)":"rotate(0)",transition:"all .15s ease-in"},m=t.map((function(e,t){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("b",null,e.q)),l.a.createElement("div",null,e.a))}));return l.a.createElement("div",{className:"ArticalInfo"},l.a.createElement("div",{onClick:function(){o(!i)},className:"ArticalInfo-header"},l.a.createElement("div",null,l.a.createElement(N.a,{style:u})),l.a.createElement("p",null," \u010cESTO POSTAVLJENA PITANJA ")),l.a.createElement("div",{style:{display:i?"flex":"none",padding:t>1?"15px 15px 15px 20px":"0 15px 0 20px"},className:"ArticalInfo-description"},m))},O=a(676),j=a(675),P=(a(76),a(13)),D=a(43),C=(t.default=Object(P.b)(null,(function(e){return{addItemToLocalStorage:function(t){return e(D.b(t))},updateCart:function(){return e(D.c())}}}))((function(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),i=a[0],o=a[1],u=Object(r.useState)(""),m=Object(c.a)(u,2),s=m[0],p=(m[1],Object(r.useState)("")),E=Object(c.a)(p,2),N=E[0],P=(E[1],Object(r.useState)(e.route.match.params.id)),D=Object(c.a)(P,2),_=D[0],A=(D[1],Object(r.useState)(0)),w=Object(c.a)(A,2),k=w[0],Q=w[1],z=Object(r.useState)(0),L=Object(c.a)(z,2),T=L[0],J=L[1],q=Object(r.useState)(null),B=Object(c.a)(q,2),R=B[0],V=B[1],K=Object(r.useState)(1),U=Object(c.a)(K,2),F=U[0],H=U[1],M=Object(r.useState)(null),W=Object(c.a)(M,2),Z=W[0],G=W[1];Object(r.useEffect)((function(){window.scrollTo(0,0),g.a.get("https://vestige-2172c.firebaseio.com/newprojectproducts.json").then((function(e){var t=Object.values(e.data);Object.keys(e.data);t.map((function(e,t){return"/"+_===e.productURL?function(e){o(e),G(parseInt(e.initialPrice))}(e):null}))})).catch((function(e){return console.log(e)}))}),[e.route.location.pathname]);i.notes;var X=Object(n.a)({},N);0!=N.discount&&(X.price=N.discount);var Y={productData:i,productPrice:Z,productQuanity:F,productSize:R,activeImage:k};return i?l.a.createElement("div",{className:"Parfum"},l.a.createElement("div",{className:"Parfum-mainWrapper"},l.a.createElement(d,{productData:i,activeImage:k,activeColorImage:T,changeColorImage:function(e){return function(e){J(e)}(e)}}),l.a.createElement(b,{productData:i,activeImage:k,changeImage:function(e){return function(e){Q(e)}(e)}}),l.a.createElement(h,{productData:i,changeProductSize:function(e){return function(e){V(e)}(e)},productSize:R}),l.a.createElement(y,{productData:i,productPrice:Z,productQuanity:F,changeProductQuanity:function(e){return function(e,t){var a=F;"dec"===e&&F>1&&H(a-1),"inc"===e&&H(a+1)}(e)},changeProductPrice:function(e){return function(e){G(e)}(e)}}),l.a.createElement(f,{productData:i,toLocalStorage:function(){return e.addItemToLocalStorage(Y),void e.updateCart()},price:s,activePrice:N.price,activeDiscount:N.discount,buttonStyle:function(){return C()}})),l.a.createElement("div",{className:"ArticalHolder"},l.a.createElement(I,{key:0,list:i.productDescription,description:i.productDescription,productData:i}),l.a.createElement(x,{key:0,specifications:i.specifications}),l.a.createElement(S,{key:0,productData:i})),l.a.createElement(v.a,{notTopThree:!0,route:e.route}),l.a.createElement(O.a,null)):l.a.createElement("div",{style:{height:"100vh",position:"relative"}}," ",l.a.createElement(j.a,null)," ")})),function(){return"\n\n        // changed\n        align-self: center;\n        padding: 12px 40px;\n        font-size: 16px;\n        margin-bottom: 45px;\n\n        position: relative;\n        background-color: transparent;\n        margin-top: 7%;\n        color: #9c8265;\n        font-family: 'Neutra';\n        border: 1px solid #9c8265;\n        transition: all .15s ease-in;\n\n        @media screen and (min-width: 650px) {\n            grid-column: 5 / span 3;\n            grid-row: 7 / span 1;\n        }\n\n        &::before {\n            position: absolute;\n            top: -9%;\n            left: 1%;\n            display: block;\n            content: \"\";\n            border: 1px solid #9c8265;\n            height: 114%;\n            width: 97%;\n        }\n\n        &:hover {\n            background-color: #e4c7a533;\n        }\n    "})}}]);
//# sourceMappingURL=5.68673278.chunk.js.map