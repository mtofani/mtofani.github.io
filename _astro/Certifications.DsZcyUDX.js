import{c as o,j as e}from"./createLucideIcon.yfrOIyya.js";import{r as l}from"./index.DVhKKaGN.js";import{M as r,u as c,l as d,A as u,m as s}from"./index.DmZE7dK2.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=o("MousePointerClick",[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]]);function p({children:i,isValidProp:t,...a}){t&&d(t),a={...l.useContext(r),...a},a.isStatic=c(()=>a.isStatic);const n=l.useMemo(()=>a,[JSON.stringify(a.transition),a.transformPagePoint,a.reducedMotion]);return e.jsx(r.Provider,{value:n,children:i})}const h=[{id:1,name:"AWS Solutions Architect Cloud Quest",logo:"/certifications/aws-sa.png",link:"https://www.credly.com/badges/641dc3de-b4eb-4d8d-90b0-b0589290b44d/public_url",type:"credly"},{id:2,name:"AWS Machine Learning Cloud Quest",logo:"/certifications/aws-ml.png",link:"https://www.credly.com/badges/9e20b29b-150c-4926-9811-3d9fdd113c32/public_url",type:"credly"},{id:3,name:"AWS Generative IA Cloud Quest",logo:"/certifications/aws-generative-ai.png",link:"https://www.credly.com/badges/96d431a7-49a2-4eca-85fa-406cda2feeec/public_url",type:"credly"},{id:4,name:"AWS Serverless Development Cloud Quest",logo:"/certifications/aws-sdev.png",link:"https://www.credly.com/badges/f332dac1-c95c-4f0e-96fc-e82e3e3f9772/public_url",type:"credly"}],x=({cert:i})=>e.jsx(s.div,{layout:!0,className:"relative overflow-hidden rounded-lg cursor-pointer",whileHover:"hover",initial:"rest",animate:"rest",children:e.jsxs(s.div,{className:"relative w-full pb-[100%]",variants:{rest:{scale:.75},hover:{scale:.85}},transition:{duration:.3},children:[e.jsx("img",{src:i.logo,alt:i.name,className:"absolute top-0 left-0 w-full h-full object-contain"}),e.jsx(s.div,{className:"absolute right-10 -bottom-5 flex items-end w-2/3 justify-center bg-gradient-to-t from-black/50 to-transparent rounded-full z-10",variants:{rest:{opacity:0},hover:{opacity:1}},transition:{duration:.3},children:i.type?e.jsx(s.div,{className:"flex flex-col text-white text-md font-semibold p-4 text-center w-full items-center ",variants:{rest:{y:20},hover:{y:0}},children:e.jsxs("div",{className:"flex",children:[e.jsxs("span",{className:"text-xs ",children:["Ver en ",i.type," "]}),e.jsx(m,{className:"w-z h-5"})]})}):null})]})});function y(){const i=t=>{t.link&&window.open(t.link,"_blank","noopener,noreferrer")};return e.jsx(p,{transition:{duration:.3},children:e.jsxs("div",{className:"bg-dark-900/50 w-full h-2/3 text-white p-8",children:[e.jsx("h2",{className:"text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500",children:"Certificaciones"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 mb-10",children:e.jsx(u,{children:h.map(t=>e.jsx(s.div,{layout:!0,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},onClick:()=>i(t),children:e.jsx(x,{cert:t})},t.id))})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(s.a,{href:"https://www.linkedin.com/in/maximilianotofani/details/certifications/",target:"_blank",className:"text-sm bg-dark border-2 border-purple-700 px-6 py-3 rounded-full",whileHover:{scale:1.05,background:"white",color:"black"},whileTap:{scale:.95},children:"Ver más certificaciones"})})]})})}export{y as default};