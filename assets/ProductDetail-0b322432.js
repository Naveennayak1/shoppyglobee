import{u as f,r as c,a as r,j as s,b as m}from"./index-3ac55067.js";import{u as p}from"./useDispatch-ed1776ee.js";const v=()=>{const{id:a}=f(),i=p(),[t,n]=c.useState(null),[o,d]=c.useState(""),[l,u]=c.useState(!0);return c.useEffect(()=>{(async()=>{try{const e=await fetch(`https://dummyjson.com/products/${a}`);if(!e.ok)throw new Error("Failed to fetch product");const h=await e.json();n(h)}catch(e){d(e.message)}finally{u(!1)}})()},[a]),l?r("div",{className:"center",children:"Loading product..."}):o?r("div",{className:"center error",children:o}):t?s("div",{className:"container product-detail",children:[r("img",{src:t.thumbnail,alt:t.title}),s("div",{className:"details",children:[r("h2",{children:t.title}),r("p",{children:t.description}),s("h3",{children:["$",t.price]}),r("button",{onClick:()=>i(m(t)),children:"Add to Cart"})]})]}):r("div",{className:"center",children:"Product not found"})};export{v as default};
