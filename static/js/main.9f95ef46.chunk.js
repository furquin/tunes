(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{29:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(23),i=n.n(c),s=(n(29),n(2)),o=n(3),u=n(5),j=n(4),l=n(10),d=n(6),b=n(16),h=n(14),p="user",O=function(t){return localStorage.setItem(p,JSON.stringify(t))},m=function(t){return function(e){setTimeout((function(){e(t)}),1500)}},f=function(){return new Promise((function(t){var e=JSON.parse(localStorage.getItem(p));null===e&&(e={}),m(e)(t)}))},x=n(0),v=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"Carregando..."})})}}]),n}(a.Component),g=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).onInputChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(b.a)({},a,r))},t.clickButton=function(){var e,n=t.state.inputName;t.setState({isLoading:!0}),e={name:n},new Promise((function(t){O(Object(h.a)(Object(h.a)({},{name:"",email:"",image:"",description:""}),e)),m("OK")(t)}))},t.state={inputName:"",isLoading:!1},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.inputName,n=t.isLoading,a=this.onInputChange,r=this.clickButton,c=e.length<3;return Object(x.jsxs)("div",{"data-testid":"page-login",children:[n&&Object(x.jsx)(v,{}),Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{"data-testid":"login-name-input",name:"inputName",type:"text",value:e,onChange:a}),Object(x.jsx)(l.c,{to:"/search",children:Object(x.jsx)("button",{"data-testid":"login-submit-button",disabled:c,type:"submit",onClick:r,children:"Entrar"})})]})]})}}]),n}(a.Component),k=n(11),y=n.n(k),I=n(13),C=function(){var t=Object(I.a)(y.a.mark((function t(e){var n,a,r,c,i,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURI(e).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),t.next=4,fetch(a);case 4:return r=t.sent,t.next=7,r.json();case 7:return c=t.sent,i=c.results,s=i.map((function(t){return{artistId:t.artistId,artistName:t.artistName,collectionId:t.collectionId,collectionName:t.collectionName,collectionPrice:t.collectionPrice,artworkUrl100:t.artworkUrl100,releaseDate:t.releaseDate,trackCount:t.trackCount}})),t.abrupt("return",s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={user:""},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;f().then((function(e){return t.setState({user:e})}))}},{key:"render",value:function(){var t=this.state.user;return Object(x.jsxs)("header",{"data-testid":"header-component",children:[!t&&Object(x.jsx)(v,{}),t&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{"data-testid":"header-user-name",children:t.name}),Object(x.jsxs)("nav",{children:[Object(x.jsx)(l.c,{to:"/search",children:Object(x.jsx)("p",{"data-testid":"link-to-search",children:" Pesquisar "})}),Object(x.jsx)(l.c,{to:"/favorites",children:Object(x.jsx)("p",{"data-testid":"link-to-favorites",children:" Favoritos "})}),Object(x.jsx)(l.c,{to:"/profile",children:Object(x.jsx)("p",{"data-testid":"link-to-profile",children:" Perfil "})})]})]})]})}}]),n}(a.Component),S=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).onInputChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(b.a)({},a,r))},t.handleArtist=function(){var e=Object(I.a)(y.a.mark((function e(n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,C(n);case 3:if(0===(a=e.sent).length){e.next=6;break}return e.abrupt("return",t.setState({isLoading:!1,inputAlbum:"Resultado de \xe1lbuns de: ".concat(n),searchArtistInput:"",artist:a}));case 6:return e.abrupt("return",t.setState({isLoading:!1,inputAlbum:"Nenhum \xe1lbum foi encontrado",searchArtistInput:""}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={searchArtistInput:"",isLoading:!1,artist:[],inputAlbum:""},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.searchArtistInput,n=t.isLoading,a=t.artist,r=t.inputAlbum,c=this.onInputChange,i=this.handleArtist,s=e.length<2;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{}),Object(x.jsx)(N,{}),!0===n?Object(x.jsx)(v,{}):Object(x.jsxs)("div",{"data-testid":"page-search",children:[Object(x.jsx)("input",{"data-testid":"search-artist-input",type:"text",name:"searchArtistInput",value:e,onChange:c}),Object(x.jsx)("button",{"data-testid":"search-artist-button",type:"submit",name:"searchArtistButton",disabled:s,onClick:function(){return i(e)},children:"Pesquisar"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:r}),Object(x.jsx)("ul",{children:a.map((function(t){return Object(x.jsxs)("li",{children:[Object(x.jsx)("p",{children:t.searchArtistInput}),Object(x.jsx)("h4",{children:t.collectionName}),Object(x.jsx)("p",{children:t.collectionPrice}),Object(x.jsx)("img",{src:t.artworkUrl100,alt:t.collectionName}),Object(x.jsx)(l.c,{"data-testid":"link-to-album-".concat(t.collectionId),to:"/album/".concat(t.collectionId),children:"Album Completo"})]},"info.artistId")}))})]})]})}}]),n}(a.Component),w=n(18),A=function(){var t=Object(I.a)(y.a.mark((function t(e){var n,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(e,"&entity=song"));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F="favorite_songs";JSON.parse(localStorage.getItem(F))||localStorage.setItem(F,JSON.stringify([]));var L=function(){return JSON.parse(localStorage.getItem(F))},P=function(t){return localStorage.setItem(F,JSON.stringify(t))},U=function(t){return function(e){setTimeout((function(){e(t)}),500)}},J=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).handleChange=function(){var e=t.props.song;t.setState({isLoading:!0},(function(){(function(t){return new Promise((function(e){if(t){var n=L();P([].concat(Object(w.a)(n),[t]))}U("OK")(e)}))})(e).then((function(){t.setState({isLoading:!1,favorite:!0})}))}))},t.getFavorite=function(){!0===t.props.checked&&t.setState({favorite:!0})},t.state={isLoading:!1,favorite:!1},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getFavorite()}},{key:"render",value:function(){var t=this.props,e=t.trackName,n=t.previewUrl,a=t.trackId,r=this.state,c=r.isLoading,i=r.favorite,s=this.handleChange;return c?Object(x.jsx)(v,{}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:e}),Object(x.jsxs)("audio",{"data-testid":"audio-component",src:n,controls:!0,children:[Object(x.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento",Object(x.jsx)("code",{children:"audio"})]}),Object(x.jsxs)("label",{htmlFor:"inputFavorite",children:["Favorita",Object(x.jsx)("input",{name:"inputFavorite",type:"checkbox","data-testid":"checkbox-music-".concat(a),checked:i,onChange:s})]})]})}}]),n}(a.Component),M=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).fetchMusics=Object(I.a)(y.a.mark((function e(){var n,a,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.match.params.id,e.next=3,A(n);case 3:return a=e.sent,e.next=6,new Promise((function(t){var e=L();U(e)(t)}));case 6:r=e.sent,c=a.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{isChecked:r.some((function(e){return e.trackId===t.trackId}))})})),t.setState({artistName:c[0].artistName,collectionName:c[0].collectionName,collectionImage:c[0].artworkUrl100},(function(){t.setState({tracks:Object(w.a)(c)})}));case 9:case"end":return e.stop()}}),e)}))),t.state={artistName:"",collectionName:"",collectionImage:"",tracks:[]},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchMusics()}},{key:"render",value:function(){var t=this.state,e=t.artistName,n=t.collectionName,a=t.collectionImage,r=t.tracks;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{"data-testid":"page-album"}),Object(x.jsx)(N,{}),Object(x.jsx)("img",{src:a,alt:n}),Object(x.jsx)("h3",{"data-testid":"artist-name",children:e}),Object(x.jsx)("h3",{"data-testid":"album-name",children:n}),r.filter((function(t){return void 0!==t.previewUrl})).map((function(t){return Object(x.jsx)(J,{trackName:t.trackName,previewUrl:t.previewUrl,trackId:t.trackId,song:t,checked:t.isChecked},t.trackId)}))]})}}]),n}(a.Component),D=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{"data-testid":"page-favorites"}),Object(x.jsx)(N,{})]})}}]),n}(a.Component),B=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{"data-testid":"page-profile"}),Object(x.jsx)(N,{})]})}}]),n}(a.Component),T=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{"data-testid":"page-profile-edit"}),Object(x.jsx)(N,{})]})}}]),n}(a.Component),q=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{"data-testid":"page-not-found"})}}]),n}(a.Component),E=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)(l.a,{children:Object(x.jsxs)("switch",{children:[Object(x.jsx)(d.a,{exact:!0,path:"/",component:g}),Object(x.jsx)(d.a,{exact:!0,path:"/search",component:S}),Object(x.jsx)(d.a,{exact:!0,path:"/album/:id",component:M}),Object(x.jsx)(d.a,{exact:!0,path:"/favorites",component:D}),Object(x.jsx)(d.a,{exact:!0,path:"/profile",component:B}),Object(x.jsx)(d.a,{exact:!0,path:"/profile/edit",component:T}),Object(x.jsx)(d.a,{exact:!0,path:"*",component:q})]})})}}]),n}(a.Component),K=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)(l.b,{children:Object(x.jsx)(E,{})})}}]),n}(r.a.Component);i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(K,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9f95ef46.chunk.js.map