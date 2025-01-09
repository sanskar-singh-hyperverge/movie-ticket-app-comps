import{j as e}from"./jsx-runtime-C6qLVRqm.js";import{R as I}from"./index-C2WPW1L7.js";const T=({imageSrc:k,title:m,description:u,price:C,initialQuantity:z=0,minQuantity:D=0,maxQuantity:P=10,onQuantityChange:a,size:M="default",customSize:s,className:V=""})=>{const[n,d]=I.useState(z),E=()=>{if(n<P){const r=n+1;d(r),a==null||a(r)}},_=()=>{if(n>D){const r=n-1;d(r),a==null||a(r)}},B={default:"w-[351px] h-[155px]",small:"w-[300px] h-[130px]",large:"w-[400px] h-[180px]"},R=s&&s.width&&s.height?{width:s.width,height:s.height}:{};return e.jsxs("div",{className:`flex items-center p-4 bg-black text-white rounded-lg shadow-lg ${s?"":B[M]} ${V}`,style:R,children:[e.jsx("div",{className:"w-1/3 h-full mr-4",children:e.jsx("img",{src:k,alt:m,className:"w-full h-full object-cover rounded-lg border border-purple-500"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h2",{className:"text-lg font-bold mb-1 truncate",children:m}),e.jsx("div",{className:"text-sm text-gray-300 space-y-1 mb-3",children:u==null?void 0:u.map((r,$)=>e.jsx("p",{className:"truncate",children:r},$))}),e.jsxs("p",{className:"text-green-400 text-lg font-bold",children:["Price: $",C]})]}),e.jsxs("div",{className:"flex flex-col items-center justify-between ml-4 h-full py-1",children:[e.jsx("button",{onClick:E,className:"w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 bg-black text-white hover:bg-white hover:text-black dark:hover:bg-gray-700 transition-all",children:"+"}),e.jsx("span",{className:"text-lg font-medium",children:n}),e.jsx("button",{onClick:_,className:"w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 bg-black text-white hover:bg-white hover:text-black dark:hover:bg-gray-700 transition-all",children:"-"})]})]})};T.__docgenInfo={description:"",methods:[],displayName:"BuffetCard",props:{imageSrc:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},price:{required:!0,tsType:{name:"number"},description:""},initialQuantity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},minQuantity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},maxQuantity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},onQuantityChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"default" | "small" | "large"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},customSize:{required:!1,tsType:{name:"signature",type:"object",raw:"{ width: string; height: string }",signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const O={title:"Components/BuffetCard",component:T,argTypes:{title:{control:"text"},description:{control:"object"},price:{control:"number"},initialQuantity:{control:"number"},minQuantity:{control:"number"},maxQuantity:{control:"number"},size:{control:{type:"select"},options:["default","small","large"]},customSize:{control:"object"},onQuantityChange:{action:"quantity changed"}}},t={args:{imageSrc:"https://picsum.photos/300/200",title:"Large Menu",description:["Large Popcorn","Large Coca Cola (400 mL)"],price:30,initialQuantity:0}},i={args:{...t.args,size:"small",title:"Small Menu",price:20}},l={args:{...t.args,size:"large",title:"Premium Menu",description:["Extra Large Popcorn","Large Coca Cola (500 mL)","Nachos"],price:45}},o={args:{...t.args,customSize:{width:"450px",height:"200px"}}},c={args:{...t.args,minQuantity:1,maxQuantity:5,initialQuantity:1}};var p,g,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    imageSrc: "https://picsum.photos/300/200",
    title: "Large Menu",
    description: ["Large Popcorn", "Large Coca Cola (400 mL)"],
    price: 30,
    initialQuantity: 0
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "small",
    title: "Small Menu",
    price: 20
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,w,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "large",
    title: "Premium Menu",
    description: ["Extra Large Popcorn", "Large Coca Cola (500 mL)", "Nachos"],
    price: 45
  }
}`,...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var j,L,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    customSize: {
      width: "450px",
      height: "200px"
    }
  }
}`,...(N=(L=o.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var q,S,Q;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    minQuantity: 1,
    maxQuantity: 5,
    initialQuantity: 1
  }
}`,...(Q=(S=c.parameters)==null?void 0:S.docs)==null?void 0:Q.source}}};const F=["Default","Small","Large","CustomSize","WithQuantityLimits"];export{o as CustomSize,t as Default,l as Large,i as Small,c as WithQuantityLimits,F as __namedExportsOrder,O as default};
