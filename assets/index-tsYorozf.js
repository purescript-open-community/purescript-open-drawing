(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const a of u)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function t(u){const a={};return u.integrity&&(a.integrity=u.integrity),u.referrerPolicy&&(a.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?a.credentials="include":u.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(u){if(u.ep)return;u.ep=!0;const a=t(u);fetch(u.href,a)}})();const gr=function(n){return function(r){for(var t=r.length,e=new Array(t),u=0;u<t;u++)e[u]=n(r[u]);return e}};var br={compose:function(n){return function(r){return function(t){return n(r(t))}}}},ln=function(n){return n.identity},vn={identity:function(n){return n},Semigroupoid0:function(){return br}},sn=function(n){return function(r){return function(t){return n(t)(r)}}},Bn=function(n){return function(r){return n}};const K=void 0;var pn=function(n){return n.map},$r=function(n){return pn(n)(Bn(K))},_r={map:gr};const Sr=function(n){return function(r){return n+r}};var Er={append:Sr},I=function(n){return n.append},Fr=function(n){return n.alt};const Cr=function(n){return function(r){for(var t=n.length,e=r.length,u=new Array(t*e),a=0,o=0;o<t;o++)for(var c=n[o],i=0;i<e;i++)u[a++]=c(r[i]);return u}};var Lr=ln(vn),On={apply:Cr,Functor0:function(){return _r}},mn=function(n){return n.apply},Ar=function(n){var r=mn(n),t=pn(n.Functor0());return function(e){return function(u){return r(t(Bn(Lr))(e))(u)}}},T=function(n){return n.pure},Mr=function(n){var r=T(n);return function(t){return function(e){if(t)return e;if(!t)return r(K);throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): "+[t.constructor.name,e.constructor.name])}}},Ir=function(n){var r=mn(n.Apply0()),t=T(n);return function(e){return function(u){return r(t(e))(u)}}},Tr={pure:function(n){return[n]},Apply0:function(){return On}};const Dr=function(n){return function(r){for(var t=[],e=0,u=n.length;e<u;e++)Array.prototype.push.apply(t,r(n[e]));return t}};var qr={bind:Dr,Apply0:function(){return On}},U=function(n){return n.bind};const Nr=function(n,r){for(var t=n>r?-1:1,e=new Array(t*(r-n)+1),u=n,a=0;u!==r;)e[a++]=u,u+=t;return e[a]=u,e};var Br=function(n){var r=U(n.Bind1()),t=T(n.Applicative0());return function(e){return function(u){return r(e)(function(a){return r(u)(function(o){return t(a(o))})})}}};const Or=2147483647,Pr=-2147483648;var Pn=function(n){return function(r){return function(t){return function(e){return function(u){return e<u?n:e===u?r:t}}}}};const Rr=Pn,zr=Pn;var Rn=function(n){return function(r){return n===r}};const Hr=Rn,Gr=Rn;var Xr={eq:Gr},Yr={eq:Hr},kr=function(n){return n.eq},C=function(){function n(){}return n.value=new n,n}(),L=function(){function n(){}return n.value=new n,n}(),O=function(){function n(){}return n.value=new n,n}(),Jr={eq:function(n){return function(r){return n instanceof C&&r instanceof C||n instanceof L&&r instanceof L||n instanceof O&&r instanceof O}}},H=function(){return{compare:zr(C.value)(O.value)(L.value),Eq0:function(){return Xr}}}(),Z=function(){return{compare:Rr(C.value)(O.value)(L.value),Eq0:function(){return Yr}}}(),G=function(n){return n.compare},zn=function(n){var r=G(n);return function(t){return function(e){return function(u){return r(t(e))(t(u))}}}},Wr=function(n){var r=G(n);return function(t){return function(e){var u=r(t)(e);return u instanceof L}}},Qr=function(n){var r=G(n);return function(t){return function(e){var u=r(t)(e);return u instanceof C}}},Hn=function(n){var r=G(n);return function(t){return function(e){var u=r(t)(e);if(u instanceof C)return e;if(u instanceof O||u instanceof L)return t;throw new Error("Failed pattern match at Data.Ord (line 181, column 3 - line 184, column 12): "+[u.constructor.name])}}},Gn=function(n){var r=G(n);return function(t){return function(e){var u=r(t)(e);if(u instanceof C||u instanceof O)return t;if(u instanceof L)return e;throw new Error("Failed pattern match at Data.Ord (line 172, column 3 - line 175, column 12): "+[u.constructor.name])}}},dn=function(n){var r=Gn(n),t=Hn(n);return function(e){return function(u){return function(a){return r(u)(t(e)(a))}}}},Kr=function(n){var r=Qr(n),t=Wr(n);return function(e){return function(u){return function(a){return!(r(a)(e)||t(a)(u))}}}},Ur=function(n){return n.top},Xn={top:Or,bottom:Pr,Ord0:function(){return Z}},Zr=function(n){return n.bottom};const Vr=function(n){return n.toString()},jr=function(n){var r=n.toString();return isNaN(r+".0")?r:r+".0"};var xr={show:jr},nt={show:Vr},Yn=function(n){return n.show},rt=ln(vn),g=function(){function n(){}return n.value=new n,n}(),w=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}(),tt=function(n){return function(r){return function(t){if(t instanceof g)return n;if(t instanceof w)return r(t.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[n.constructor.name,r.constructor.name,t.constructor.name])}}},et={map:function(n){return function(r){return r instanceof w?new w(n(r.value0)):g.value}}},ut=function(n){return tt(n)(rt)},kn=function(){return function(n){if(n instanceof w)return n.value0;throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): "+[n.constructor.name])}},at={alt:function(n){return function(r){return n instanceof g?r:n}},Functor0:function(){return et}},Jn={mempty:"",Semigroup0:function(){return Er}},R=function(n){return n.mempty};const ot=function(n){return function(){return n}},it=function(n){return function(r){return function(){return r(n())()}}};var Wn=function(n,r,t){var e=0,u;return function(a){if(e===2)return u;if(e===1)throw new ReferenceError(n+" was needed before it finished initializing (module "+r+", line "+a+")",r,a);return e=1,u=t(),e=2,u}},ct={Applicative0:function(){return X},Bind1:function(){return ft}},ft={bind:it,Apply0:function(){return Kn(0)}},X={pure:ot,Apply0:function(){return Kn(0)}},Qn=Wn("functorEffect","Effect",function(){return{map:Ir(X)}}),Kn=Wn("applyEffect","Effect",function(){return{apply:Br(ct),Functor0:function(){return Qn(0)}}}),lt=Qn(20);const vt=function(n){return function(r){return function(t){for(var e=r,u=t.length,a=u-1;a>=0;a--)e=n(t[a])(e);return e}}},st=function(n){return function(r){return function(t){for(var e=r,u=t.length,a=0;a<u;a++)e=n(e)(t[a]);return e}}};var pt=ln(vn),mt=kr(Jr),Y=function(n){return n.foldr},dt=function(n){var r=Ar(n.Apply0()),t=T(n);return function(e){var u=Y(e);return function(a){return u(function(o){return r(a(o))})(t(K))}}},ht=function(n){var r=dt(n);return function(t){return sn(r(t))}},z=function(n){return n.foldl},wt=function(n){var r=z(n);return function(t){var e=I(t.Semigroup0()),u=R(t);return function(a){return function(o){var c=function(i){return function(f){return i.init?{init:!1,acc:f}:{init:!1,acc:e(i.acc)(e(a)(f))}}};return r(c)({init:!0,acc:u})(o).acc}}}},yt=function(n){var r=z(n);return function(t){var e=function(u){return function(a){if(u instanceof g)return new w(a);if(u instanceof w)return new w(function(){var o=mt(t(u.value0)(a))(C.value);return o?u.value0:a}());throw new Error("Failed pattern match at Data.Foldable (line 454, column 3 - line 454, column 27): "+[u.constructor.name,a.constructor.name])}};return r(e)(g.value)}},Un={foldr:function(n){return function(r){return function(t){if(t instanceof g)return r;if(t instanceof w)return n(t.value0)(r);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[n.constructor.name,r.constructor.name,t.constructor.name])}}},foldl:function(n){return function(r){return function(t){if(t instanceof g)return r;if(t instanceof w)return n(r)(t.value0);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[n.constructor.name,r.constructor.name,t.constructor.name])}}},foldMap:function(n){var r=R(n);return function(t){return function(e){if(e instanceof g)return r;if(e instanceof w)return t(e.value0);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[t.constructor.name,e.constructor.name])}}}},gt=function(n){var r=Y(n);return function(t){var e=I(t.Semigroup0()),u=R(t);return function(a){return r(function(o){return function(c){return e(a(o))(c)}})(u)}}},k={foldr:vt,foldl:st,foldMap:function(n){return gt(k)(n)}},bt=function(n){return n.foldMap},Zn=function(n){var r=bt(n);return function(t){return r(t)(pt)}};const $t=function(n){return function(r){return function(t){return n(r,t)}}};var _n=$t(Nr);const _t=function(n){return function(r){return function(t){return(t|0)===t?n(t):r}}},b=function(n){return n},St=isFinite,W=Math.abs,Et=function(n){return function(r){return Math.atan2(n,r)}},q=Math.cos,M=function(n){return function(r){return Math.pow(n,r)}},un=function(n){return function(r){return n%r}},Ft=Math.round,Q=Math.sin,Ct=Math.sqrt;var N=3.141592653589793,Sn=Ur(Xn),En=Zr(Xn),Lt=function(){return _t(w.create)(g.value)}(),At=function(n){return St(n)?n>=b(Sn)?Sn:n<=b(En)?En:ut(0)(Lt(n)):0},J=function(n){return At(Ft(n))},j=dn(Z),Fn=Hn(Z),Cn=Gn(Z),Mt=kn(),It=yt(k),Tt=zn(H),x=dn(H),Ln=Yn(xr),Dt=function(){function n(){}return n.value=new n,n}(),Vn=function(){function n(){}return n.value=new n,n}(),qt=function(){function n(){}return n.value=new n,n}(),Nt=function(){function n(){}return n.value=new n,n}(),jn=function(){function n(r,t,e,u){this.value0=r,this.value1=t,this.value2=e,this.value3=u}return n.create=function(r){return function(t){return function(e){return function(u){return new n(r,t,e,u)}}}},n}(),hn=function(n){return function(r){return un(un(n)(r)+r)(r)}},Bt=function(n){return function(r){return function(t){return function(e){var u=j(0)(255)(n),a=b(u)/255,o=j(0)(255)(r),c=b(o)/255,i=j(0)(255)(t),f=Fn(Fn(u)(o))(i),m=Cn(Cn(u)(o))(i),d=f-m|0,v=b(d)/255,h=b(f+m|0)/(255*2),p=function(){return d===0?0:v/(1-W(2*h-1))}(),$=b(i)/255,E=function(S){return S===0?0:f===u?hn((c-$)/v)(6):f===o?($-a)/v+2:(a-c)/v+4},V=60*E(d);return new jn(V,p,h,e)}}}},wn=function(n){return function(r){return function(t){return function(e){return Bt(J(n*255))(J(r*255))(J(t*255))(e)}}}},Ot=function(n){return function(r){return function(t){return wn(n)(r)(t)(1)}}},Pt=function(n){return function(r){return function(t){var e=function(c){return c<=.0031308?12.92*c:1.055*M(c)(.4166666666666667)-.055},u=e(-.9689*n+1.8758*r+.0415*t),a=e(3.2406*n-1.5372*r-.4986*t),o=e(.0557*n-.204*r+1.057*t);return Ot(a)(u)(o)}}},y=function(n){return function(r){return function(t){return r+n*(t-r)}}},An=function(n){return function(r){return function(t){var e=[{from:r,to:t},{from:r,to:t+360},{from:r+360,to:t}],u=function(o){return W(o.to-o.from)},a=Mt(It(Tt(u))(e));return y(n)(a.from)(a.to)}}},Rt=function(n){return function(r){return function(t){var e=N/180,u=t.value1-r.value1,a=t.value2-r.value2,o=(r.value0+120)*e,c=(t.value0+120)*e-o;return function(i){var f=M(r.value2+a*i)(n),m=o+c*i,d=(r.value1+u*i)*f*(1-f),v=f+d*(1.97294*q(m)),h=f+d*(-.29227*q(m)-.90649*Q(m)),p=f+d*(-.14861*q(m)+1.78277*Q(m)),$=y(i)(r.value3)(t.value3);return wn(p)(h)(v)($)}}}},xn=function(n){return function(r){return function(t){return function(e){var u=x(0)(1)(r),a=x(0)(1)(t),o=x(0)(1)(e);return new jn(n,u,a,o)}}}},an=function(n){return function(r){return function(t){return xn(n)(r)(t)(1)}}},B={xn:.95047,yn:1,zn:1.08883},nr=function(n){return function(r){return function(t){var e=(n+16)/116,u=6/29,a=function(f){return f>u?M(f)(3):3*u*u*(f-4/29)},o=B.xn*a(e+r/500),c=B.yn*a(e),i=B.zn*a(e-t/200);return Pt(o)(c)(i)}}},zt=function(n){return function(r){return function(t){var e=N/180,u=r*Q(t*e),a=r*q(t*e);return nr(n)(a)(u)}}},nn=function(n){var r=function(c){return Ln(b(J(100*c))/100)},t=r(n.value1*100)+"%",e=r(n.value2*100)+"%",u=r(n.value0),a=Ln(n.value3),o=n.value3===1;return o?"hsl("+(u+(", "+(t+(", "+(e+")"))))):"hsla("+(u+(", "+(t+(", "+(e+(", "+(a+")")))))))},rr=function(n){var r=n===360;return r?n:hn(n)(360)},Mn=function(n){return{h:rr(n.value0),s:n.value1,l:n.value2,a:n.value3}},on=function(n){var r=rr(n.value0)/60,t=(1-W(2*n.value2-1))*n.value1,e=n.value2-t/2,u=t*(1-W(un(r)(2)-1)),a=function(){return r<1?{r:t,g:u,b:0}:1<=r&&r<2?{r:u,g:t,b:0}:2<=r&&r<3?{r:0,g:t,b:u}:3<=r&&r<4?{r:0,g:u,b:t}:4<=r&&r<5?{r:u,g:0,b:t}:{r:t,g:0,b:u}}();return{r:a.r+e,g:a.g+e,b:a.b+e,a:n.value3}},Ht=function(n){var r=on(n),t=function(f){return f<=.04045?f/12.92:M((f+.055)/1.055)(2.4)},e=t(r.g),u=t(r.r),a=t(r.b),o=.4124*u+.3576*e+.1805*a,c=.2126*u+.7152*e+.0722*a,i=.0193*u+.1192*e+.9505*a;return{x:o,y:c,z:i}},cn=function(n){var r=Ht(n),t=M(6/29)(3),e=function(i){return i>t?M(i)(1/3):1/3*M(29/6)(2)*i+4/29},u=e(r.y/B.yn),a=116*u-16,o=200*(u-e(r.z/B.zn)),c=500*(e(r.x/B.xn)-u);return{l:a,a:c,b:o}},In=function(n){var r=cn(n),t=180/N,e=Ct(r.a*r.a+r.b*r.b),u=hn(Et(r.b)(r.a)*t)(360);return{l:r.l,c:e,h:u}},Gt=function(n){return function(r){return function(t){return function(e){if(n instanceof Vn){var u=Mn(t),a=Mn(r);return xn(An(e)(a.h)(u.h))(y(e)(a.s)(u.s))(y(e)(a.l)(u.l))(y(e)(a.a)(u.a))}if(n instanceof Dt){var u=on(t),a=on(r);return wn(y(e)(a.r)(u.r))(y(e)(a.g)(u.g))(y(e)(a.b)(u.b))(y(e)(a.a)(u.a))}if(n instanceof qt){var u=In(t),a=In(r);return zt(y(e)(a.l)(u.l))(y(e)(a.c)(u.c))(An(e)(a.h)(u.h))}if(n instanceof Nt){var u=cn(t),a=cn(r);return nr(y(e)(a.l)(u.l))(y(e)(a.a)(u.a))(y(e)(a.b)(u.b))}throw new Error("Failed pattern match at Color (line 545, column 1 - line 545, column 34): "+[n.constructor.name,r.constructor.name,t.constructor.name,e.constructor.name])}}}},Xt=an(0)(0)(0),s=function(){function n(){}return n.value=new n,n}(),l=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),Yt=function(n){var r=function(t){return function(e){var u=t,a=!1,o;function c(i,f){if(f instanceof l&&f.value1 instanceof l&&f.value1.value1 instanceof l){u=new l(f,i),e=f.value1.value1.value1;return}var m=function(v){return v instanceof l&&v.value1 instanceof l&&v.value1.value1 instanceof s?new l(n(v.value0),new l(n(v.value1.value0),s.value)):v instanceof l&&v.value1 instanceof s?new l(n(v.value0),s.value):s.value},d=function(v){return function(h){var p=v,$=!1,E;function V(S,$n){if(S instanceof l&&S.value0 instanceof l&&S.value0.value1 instanceof l&&S.value0.value1.value1 instanceof l){p=S.value1,h=new l(n(S.value0.value0),new l(n(S.value0.value1.value0),new l(n(S.value0.value1.value1.value0),$n)));return}return $=!0,$n}for(;!$;)E=V(p,h);return E}};return a=!0,d(i)(m(f))}for(;!a;)o=c(u,e);return o}};return r(s.value)},tr={map:Yt},kt=pn(tr),P={foldr:function(n){return function(r){var t=function(){var u=function(a){return function(o){var c=a,i=!1,f;function m(d,v){if(v instanceof s)return i=!0,d;if(v instanceof l){c=new l(v.value0,d),o=v.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): "+[d.constructor.name,v.constructor.name])}for(;!i;)f=m(c,o);return f}};return u(s.value)}(),e=z(P)(sn(n))(r);return function(u){return e(t(u))}}},foldl:function(n){var r=function(t){return function(e){var u=t,a=!1,o;function c(i,f){if(f instanceof s)return a=!0,i;if(f instanceof l){u=n(i)(f.value0),e=f.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): "+[f.constructor.name])}for(;!a;)o=c(u,e);return o}};return r},foldMap:function(n){var r=I(n.Semigroup0()),t=R(n);return function(e){return z(P)(function(u){var a=r(u);return function(o){return a(e(o))}})(t)}}},Jt=Y(P),yn={append:function(n){return function(r){return Jt(l.create)(r)(n)}}},er=I(yn),Wt=function(){return{mempty:s.value,Semigroup0:function(){return yn}}}(),gn={apply:function(n){return function(r){if(n instanceof s)return s.value;if(n instanceof l)return er(kt(n.value0)(r))(mn(gn)(n.value1)(r));throw new Error("Failed pattern match at Data.List.Types (line 157, column 1 - line 159, column 48): "+[n.constructor.name,r.constructor.name])}},Functor0:function(){return tr}},ur={bind:function(n){return function(r){if(n instanceof s)return s.value;if(n instanceof l)return er(r(n.value0))(U(ur)(n.value1)(r));throw new Error("Failed pattern match at Data.List.Types (line 164, column 1 - line 166, column 37): "+[n.constructor.name,r.constructor.name])}},Apply0:function(){return gn}},Qt={pure:function(n){return new l(n,s.value)},Apply0:function(){return gn}},Kt=Y(P),Ut=function(n){return function(r){return Kt(l.create)(new l(r,s.value))(n)}},bn=function(n){return new l(n,s.value)},Zt=function(n){return function(r){if(n===r)return bn(n);{var t=function(e){return function(u){return function(a){return function(o){var c=e,i=u,f=a,m=!1,d;function v(h,p,$,E){if(h===p)return m=!0,new l(h,E);{c=h+$|0,i=p,f=$,o=new l(h,E);return}}for(;!m;)d=v(c,i,f,o);return d}}}};return t(r)(n)(function(){var e=n>r;return e?1:-1}())(s.value)}}},ar=function(n){return function(r){return function(t){if(t instanceof s)return bn(r);if(t instanceof l){var e=n(r)(t.value0);return e instanceof L?new l(t.value0,ar(n)(r)(t.value1)):new l(r,t)}throw new Error("Failed pattern match at Data.List (line 216, column 1 - line 216, column 68): "+[n.constructor.name,r.constructor.name,t.constructor.name])}}},Vt=function(n){return Y(n)(l.create)(s.value)},jt=Kr(H),xt=U(ur),ne=T(Qt),re=zn(H),te=z(P),or=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),ir=function(){function n(r,t,e){this.value0=r,this.value1=t,this.value2=e}return n.create=function(r){return function(t){return function(e){return new n(r,t,e)}}},n}(),ee=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),ue=function(n){return n.value1},cr=dn(H)(0)(1),fr=function(n){return function(r){return new or(n,cr(r))}},ae=function(n){return function(r){return function(t){if(t<0)return r.value0;if(t>1)return r.value2;{var e=function(u){return function(a){return function(o){var c=u,i=a,f=!1,m;function d(v,h,p){if(p instanceof s)return f=!0,v;if(p instanceof l){var $=jt(h)(p.value0.value1)(t);if($){var E=h===p.value0.value1;return E?(f=!0,v):(f=!0,n(v)(p.value0.value0)((t-h)/(p.value0.value1-h)))}c=p.value0.value0,i=p.value0.value1,o=p.value1;return}throw new Error("Failed pattern match at Color.Scale (line 170, column 7 - line 170, column 25): "+[v.constructor.name,h.constructor.name,p.constructor.name])}for(;!f;)m=d(c,i,o);return m}}};return e(r.value0)(0)(Ut(r.value1)(fr(r.value2)(1)))}}}},oe=function(n){return ae(Gt(n.value0))(n.value1)},ie=function(n){return function(r){return function(t){var e=fr(r)(t);return new ir(n.value0,ar(re(ue))(e)(n.value1),n.value2)}}},ce=function(n){return function(r){return function(t){var e=te(function(a){return function(o){return ie(a)(o.value0)(o.value1)}}),u=function(){return xt(Zt(1)(n-1|0))(function(a){var o=cr(b(a)/b(n));return ne(new or(r(t)(o),o))})}();return e(t)(u)}}},fe=function(){var n=an(-240)(.5)(1),r=an(300)(.5)(0),t=function(e){return Rt(1)(r)(n)};return new ee(Vn.value,ce(100)(t)(new ir(r,s.value,n)))}();function le(n,r,t){return function(){var e=document.getElementById(n);return e&&e instanceof HTMLCanvasElement?r(e):t}}function ve(n){return function(){return n.getContext("2d")}}function se(n){return function(r){return function(){n.lineWidth=r}}}function pe(n){return function(r){return function(){n.fillStyle=r}}}function me(n){return function(r){return function(){n.strokeStyle=r}}}function de(n){return function(r){return function(){n.shadowColor=r}}}function he(n){return function(r){return function(){n.shadowBlur=r}}}function we(n){return function(r){return function(){n.shadowOffsetX=r}}}function ye(n){return function(r){return function(){n.shadowOffsetY=r}}}function lr(n){return function(){n.beginPath()}}function ge(n){return function(){n.stroke()}}function be(n){return function(){n.fill()}}function $e(n){return function(){n.clip()}}function _e(n){return function(r){return function(t){return function(){n.lineTo(r,t)}}}}function Se(n){return function(r){return function(t){return function(){n.moveTo(r,t)}}}}function Ee(n){return function(){n.closePath()}}function Fe(n){return function(r){return function(){n.arc(r.x,r.y,r.radius,r.start,r.end,r.useCounterClockwise)}}}function Ce(n){return function(r){return function(){n.rect(r.x,r.y,r.width,r.height)}}}function Le(n){return function(r){return function(){n.scale(r.scaleX,r.scaleY)}}}function Ae(n){return function(r){return function(){n.rotate(r)}}}function Me(n){return function(r){return function(){n.translate(r.translateX,r.translateY)}}}function Ie(n){return function(r){return function(){n.font=r}}}function Te(n){return function(r){return function(t){return function(e){return function(){n.fillText(r,t,e)}}}}}function De(n){return function(){n.save()}}function qe(n){return function(){n.restore()}}var F=function(n){return function(r){return function(){De(n)();var e=r();return qe(n)(),e}}},Ne=function(n){return function(r){return function(){lr(n)();var e=r();return ge(n)(),e}}},Be=function(n){return le(n,w.create,g.value)},Oe=function(n){return function(r){return function(){lr(n)();var e=r();return be(n)(),e}}},Pe=wt(k)(Jn),rn=Zn(Un)(Jn),Re=Yn(nt),ze=function(n){return Pe(" ")([rn(n.style),rn(n.variant),rn(n.weight)])},He=function(n){return ze(n.value2)+(" "+(Re(n.value1)+("px "+n.value0)))},Ge=I(yn),tn=Fr(at),Xe=T(X),vr=ht(X),en=vr(P),Ye=Mr(X),_=$r(lt),D=vr(Un),ke=R(Wt),fn=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),Je=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}(),We=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}(),Qe=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}(),sr=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),Ke=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),Ue=function(){function n(r,t,e,u,a){this.value0=r,this.value1=t,this.value2=e,this.value3=u,this.value4=a}return n.create=function(r){return function(t){return function(e){return function(u){return function(a){return new n(r,t,e,u,a)}}}}},n}(),A=function(){function n(r){this.value0=r}return n.create=function(r){return new n(r)},n}(),pr=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),mr=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),dr=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),Ze=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),hr=function(){function n(r,t){this.value0=r,this.value1=t}return n.create=function(r){return function(t){return new n(r,t)}},n}(),Tn=function(n){return function(r){return mr.create({translateX:n,translateY:r})}},Ve=function(n){return{color:new w(n),blur:g.value,offset:g.value}},je=function(n){return{color:g.value,blur:new w(n),offset:g.value}},xe=function(){return hr.create}(),nu={append:function(n){return function(r){return{color:tn(n.color)(r.color),blur:tn(n.blur)(r.blur),offset:tn(n.offset)(r.offset)}}}},wr={append:function(n){return function(r){return n instanceof A?new A(Ge(n.value0)(bn(r))):r instanceof A?new A(new l(n,r.value0)):new A(new l(n,new l(r,s.value)))}}},Dn=function(n){return function(r){return pr.create({scaleX:n,scaleY:r})}},ru=function(){return dr.create}(),tu=function(n){var r=function(o){if(o instanceof fn&&o.value1 instanceof s)return Xe(K);if(o instanceof fn&&o.value1 instanceof l)return function(){return Se(n)(o.value1.value0.x)(o.value1.value0.y)(),en(o.value1.value1)(function(i){return _e(n)(i.x)(i.y)})(),Ye(o.value0)(_(Ee(n)))()};if(o instanceof Je)return _(Ce(n)(o.value0));if(o instanceof We)return _(Fe(n)(o.value0));if(o instanceof Qe)return en(o.value0)(r);throw new Error("Failed pattern match at Graphics.Drawing (line 291, column 3 - line 291, column 38): "+[o.constructor.name])},t=function(o){return function(){return D(o.color)(function(i){return de(n)(nn(i))})(),D(o.blur)(function(i){return he(n)(i)})(),D(o.offset)(function(i){return function(){return we(n)(i.x)(),ye(n)(i.y)()}})()}},e=function(o){return function(){return D(o.color)(function(i){return me(n)(nn(i))})(),D(o.lineWidth)(function(i){return se(n)(i)})()}},u=function(o){return D(o.color)(function(c){return pe(n)(nn(c))})},a=function(o){if(o instanceof sr)return _(F(n)(function(){return u(o.value1)(),Oe(n)(r(o.value0))()}));if(o instanceof Ke)return _(F(n)(function(){return e(o.value1)(),Ne(n)(r(o.value0))()}));if(o instanceof A)return en(o.value0)(a);if(o instanceof pr)return _(F(n)(function(){return Le(n)(o.value0)(),a(o.value1)()}));if(o instanceof mr)return _(F(n)(function(){return Me(n)(o.value0)(),a(o.value1)()}));if(o instanceof dr)return _(F(n)(function(){return Ae(n)(o.value0)(),a(o.value1)()}));if(o instanceof Ze)return _(F(n)(function(){return r(o.value0)(),$e(n)(),a(o.value1)()}));if(o instanceof hr)return _(F(n)(function(){return t(o.value0)(),a(o.value1)()}));if(o instanceof Ue)return _(F(n)(function(){return Ie(n)(He(o.value0))(),u(o.value3)(),Te(n)(o.value4)(o.value1)(o.value2)()}));throw new Error("Failed pattern match at Graphics.Drawing (line 244, column 3 - line 247, column 21): "+[o.constructor.name])};return a},yr=function(){return{mempty:new A(ke),Semigroup0:function(){return wr}}}(),eu=function(){return sn(sr.create)}(),uu=function(n){return{color:new w(n)}},au=function(n){var r=fn.create(!0),t=Vt(n);return function(e){return r(t(e))}},qn=U(qr),Nn=T(Tr),ou=R(yr),iu=I(wr),cu=au(k),fu=Zn(k)(yr),lu=kn(),vu=I(nu),su=function(){var n=qn(_n(0)(5))(function(t){var e=N/2.5*b(t);return Nn({x:Q(e),y:q(e)})}),r=function(t){if(t===0)return ou;var e=Dn(.375)(.375)(r(t-1|0));return iu(eu(uu(oe(fe)(1-b(t-1|0)/5)))(cu(n)))(fu(qn(_n(0)(4))(function(u){return Nn(ru(N/2.5*(b(u)+.5))(Tn(0)(q(N/5)*(1+.375))(e)))})))};return function(){var e=Be("canvas")(),u=lu(e),a=ve(u)();return tu(a)(xe(vu(Ve(Xt))(je(10)))(Tn(400)(400)(Dn(200)(200)(r(6)))))()}}();su();
