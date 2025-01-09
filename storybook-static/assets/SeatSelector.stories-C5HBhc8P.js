import{j as i}from"./jsx-runtime-C6qLVRqm.js";import{r as V}from"./index-C2WPW1L7.js";const n=({rows:s,seatsPerRow:p,maxSelections:m,gap:g=2,seatSize:d="40px",colors:b={booked:"bg-gray-600",available:"bg-purple-500",selected:"bg-orange-500"},availableSeats:S={}})=>{const[a,k]=V.useState([]),f=l=>{const o=S[l]||"booked";if(console.log(o),o==="booked")return;const u=a.includes(l);let t;if(u)t=a.filter(e=>e!==l);else if(a.length<m)t=[...a,l];else return;k(t)};return i.jsx("div",{className:"space-y-4",children:Array.from({length:s},(l,o)=>i.jsx("div",{style:{gap:`${g*4}px`},className:"flex justify-center",children:Array.from({length:p},(u,t)=>{const e=`R${o+1}S${t+1}`,y=S[e]||"booked",x=a.includes(e),h=y==="booked"?b.booked:x?b.selected:b.available;return i.jsx("div",{onClick:()=>f(e),className:`${h} rounded-md cursor-pointer hover:opacity-80`,style:{width:d,height:d}},e)})},`row-${o}`))})};n.__docgenInfo={description:"",methods:[],displayName:"SeatSelector",props:{rows:{required:!0,tsType:{name:"number"},description:""},seatsPerRow:{required:!0,tsType:{name:"number"},description:""},maxSelections:{required:!0,tsType:{name:"number"},description:""},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},seatSize:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"40px"',computed:!1}},colors:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  booked: string;
  available: string;
  selected: string;
}`,signature:{properties:[{key:"booked",value:{name:"string",required:!0}},{key:"available",value:{name:"string",required:!0}},{key:"selected",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:`{
  booked: "bg-gray-600",
  available: "bg-purple-500",
  selected: "bg-orange-500",
}`,computed:!1}},availableSeats:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:'"booked" | "available"',elements:[{name:"literal",value:'"booked"'},{name:"literal",value:'"available"'}]}],raw:'Record<string, "booked" | "available">'},description:"",defaultValue:{value:"{}",computed:!1}}}};const T={title:"Components/SeatSelector",component:n,argTypes:{rows:{control:"number",defaultValue:5},seatsPerRow:{control:"number",defaultValue:6},maxSelections:{control:"number",defaultValue:5},gap:{control:"number",defaultValue:2},seatSize:{control:"text",defaultValue:"40px"},colors:{control:"object",defaultValue:{booked:"bg-gray-600",available:"bg-purple-500",selected:"bg-orange-500"}},availableSeats:{control:"object",defaultValue:{R1S1:"available",R1S2:"available",R1S3:"booked",R1S4:"available",R1S5:"available",R1S6:"available",R2S1:"booked",R2S2:"available",R2S3:"available",R2S4:"booked",R2S5:"available",R2S6:"available",R3S1:"available",R3S2:"booked",R3S3:"available",R3S4:"available",R3S5:"booked",R3S6:"booked",R4S1:"available",R4S2:"available",R4S3:"available",R4S4:"available",R4S5:"booked",R4S6:"available",R5S1:"booked",R5S2:"available",R5S3:"available",R5S4:"available",R5S5:"available",R5S6:"available"}}}},j=s=>i.jsx(n,{...s}),r=j.bind({});r.args={rows:5,seatsPerRow:6,maxSelections:5,gap:2,seatSize:"40px",colors:{booked:"bg-gray-600",available:"bg-purple-500",selected:"bg-orange-500"},availableSeats:{R1S1:"available",R1S2:"available",R1S3:"booked",R1S4:"available",R1S5:"available",R1S6:"available",R2S1:"booked",R2S2:"available",R2S3:"available",R2S4:"booked",R2S5:"available",R2S6:"available",R3S1:"available",R3S2:"booked",R3S3:"available",R3S4:"available",R3S5:"booked",R3S6:"booked",R4S1:"available",R4S2:"available",R4S3:"available",R4S4:"available",R4S5:"booked",R4S6:"available",R5S1:"booked",R5S2:"available",R5S3:"available",R5S4:"available",R5S5:"available",R5S6:"available"}};var c,v,R;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"args => <SeatSelector {...args} />",...(R=(v=r.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const _=["Default"];export{r as Default,_ as __namedExportsOrder,T as default};
