import{r as t}from"./react-L_ukdsnw.js";import{r as C}from"./react-dom-50bK44qw.js";import{i as D}from"./react-fast-compare-55LePW81.js";import{c as A}from"./@popperjs-zyV4rJhQ.js";import{w as k}from"./warning-tq1HNrfO.js";var U=t.createContext(),I=t.createContext();function J(o){var r=o.children,e=t.useState(null),n=e[0],u=e[1],a=t.useRef(!1);t.useEffect(function(){return function(){a.current=!0}},[]);var l=t.useCallback(function(d){a.current||u(d)},[]);return t.createElement(U.Provider,{value:n},t.createElement(I.Provider,{value:l},r))}var N=function(r){return Array.isArray(r)?r[0]:r},F=function(r){if(typeof r=="function"){for(var e=arguments.length,n=new Array(e>1?e-1:0),u=1;u<e;u++)n[u-1]=arguments[u];return r.apply(void 0,n)}},S=function(r,e){if(typeof r=="function")return F(r,e);r!=null&&(r.current=e)},M=function(r){return r.reduce(function(e,n){var u=n[0],a=n[1];return e[u]=a,e},{})},g=typeof window<"u"&&window.document&&window.document.createElement?t.useLayoutEffect:t.useEffect,H=[],q=function(r,e,n){n===void 0&&(n={});var u=t.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||H},l=t.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),d=l[0],E=l[1],v=t.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var m=p.state,R=Object.keys(m.elements);C.flushSync(function(){E({styles:M(R.map(function(c){return[c,m.styles[c]||{}]})),attributes:M(R.map(function(c){return[c,m.attributes[c]]}))})})},requires:["computeStyles"]}},[]),y=t.useMemo(function(){var i={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[v,{name:"applyStyles",enabled:!1}])};return D(u.current,i)?u.current||i:(u.current=i,i)},[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,v]),s=t.useRef();return g(function(){s.current&&s.current.setOptions(y)},[y]),g(function(){if(!(r==null||e==null)){var i=n.createPopper||A,p=i(r,e,y);return s.current=p,function(){p.destroy(),s.current=null}}},[r,e,n.createPopper]),{state:s.current?s.current.state:null,styles:d.styles,attributes:d.attributes,update:s.current?s.current.update:null,forceUpdate:s.current?s.current.forceUpdate:null}},L=function(){},T=function(){return Promise.resolve(null)},Y=[];function K(o){var r=o.placement,e=r===void 0?"bottom":r,n=o.strategy,u=n===void 0?"absolute":n,a=o.modifiers,l=a===void 0?Y:a,d=o.referenceElement,E=o.onFirstUpdate,v=o.innerRef,y=o.children,s=t.useContext(U),i=t.useState(null),p=i[0],m=i[1],R=t.useState(null),c=R[0],w=R[1];t.useEffect(function(){S(v,p)},[v,p]);var x=t.useMemo(function(){return{placement:e,strategy:u,onFirstUpdate:E,modifiers:[].concat(l,[{name:"arrow",enabled:c!=null,options:{element:c}}])}},[e,u,E,l,c]),P=q(d||s,p,x),f=P.state,h=P.styles,b=P.forceUpdate,O=P.update,$=t.useMemo(function(){return{ref:m,style:h.popper,placement:f?f.placement:e,hasPopperEscaped:f&&f.modifiersData.hide?f.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:f&&f.modifiersData.hide?f.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:h.arrow,ref:w},forceUpdate:b||L,update:O||T}},[m,w,e,f,h,O,b]);return N(y)($)}function Q(o){var r=o.children,e=o.innerRef,n=t.useContext(I),u=t.useCallback(function(a){S(e,a),F(n,a)},[e,n]);return t.useEffect(function(){return function(){return S(e,null)}},[]),t.useEffect(function(){k(!!n,"`Reference` should not be used outside of a `Manager` component.")},[n]),N(r)({ref:u})}export{J as M,K as P,Q as R};
