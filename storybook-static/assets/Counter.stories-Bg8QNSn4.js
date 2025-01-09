import{j as a}from"./jsx-runtime-C6qLVRqm.js";import{r as B}from"./index-C2WPW1L7.js";const O=({initialValue:W=0,minValue:D=-5,maxValue:M=10,label:p="",orientation:r="horizontal",onChange:t,customSize:e})=>{const[i,h]=B.useState(W),F=()=>{if(i<M){const o=i+1;h(o),t==null||t(o)}},H=()=>{if(i>D){const o=i-1;h(o),t==null||t(o)}},g=r==="vertical"?58:173,f=r==="vertical"?173:58,b=e!=null&&e.width?parseInt(e.width):g,y=e!=null&&e.height?parseInt(e.height):f,s=r==="vertical"?b/g:y/f,x={width:`${40*s}px`,height:`${40*s}px`,fontSize:`${16*s}px`};return a.jsxs("div",{style:{width:`${b}px`,height:`${y}px`},className:`flex ${r==="vertical"?"flex-col items-center justify-between py-2":"flex-row items-center justify-center space-x-4 px-2"} bg-black rounded-lg`,children:[a.jsx("button",{onClick:F,className:"flex items-center justify-center rounded-full border border-gray-400 bg-black text-white hover:bg-white hover:text-black dark:hover:bg-gray-700 transition-all",style:x,children:"+"}),a.jsxs("div",{className:"flex flex-col items-center justify-center",children:[a.jsx("span",{className:"text-white",style:{fontSize:`${18*s}px`},children:i}),r==="horizontal"&&p&&a.jsx("span",{className:"text-gray-300",style:{fontSize:`${12*s}px`},children:p})]}),a.jsx("button",{onClick:H,className:"flex items-center justify-center rounded-full border border-gray-400 bg-black text-white hover:bg-white hover:text-black dark:hover:bg-gray-700 transition-all",style:x,children:"-"})]})};O.__docgenInfo={description:"",methods:[],displayName:"Counter",props:{initialValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},minValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-5",computed:!1}},maxValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},customSize:{required:!1,tsType:{name:"signature",type:"object",raw:"{ width: string; height: string }",signature:{properties:[{key:"width",value:{name:"string",required:!0}},{key:"height",value:{name:"string",required:!0}}]}},description:""}}};const K={title:"Components/Counter",component:O,argTypes:{initialValue:{control:"number",description:"Initial value of the counter",table:{defaultValue:{summary:"0"}}},minValue:{control:"number",description:"Minimum allowed value",table:{defaultValue:{summary:"-5"}}},maxValue:{control:"number",description:"Maximum allowed value",table:{defaultValue:{summary:"10"}}},label:{control:"text",description:"Label displayed below the counter"},orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"Counter layout orientation",table:{defaultValue:{summary:"horizontal"}}},customSize:{control:"object",description:"Custom width and height in pixels",table:{defaultValue:{summary:"{ width: '173', height: '58' }"}}},onChange:{action:"changed",description:"Callback fired when counter value changes"}},parameters:{docs:{description:{component:"A customizable counter component that supports both horizontal and vertical orientations."}}}},l={args:{initialValue:0,minValue:-5,maxValue:10}},n={args:{initialValue:2,minValue:0,maxValue:5,label:"Child"},parameters:{docs:{description:{story:"Counter with a descriptive label below the value."}}}},c={args:{orientation:"vertical",initialValue:3,minValue:0,maxValue:10,customSize:{width:"58",height:"173"}},parameters:{docs:{description:{story:"Counter arranged vertically with controls stacked top to bottom."}}}},u={args:{initialValue:1,customSize:{width:"120",height:"40"},label:"Compact"},parameters:{docs:{description:{story:"A smaller version of the counter."}}}},d={args:{initialValue:1,customSize:{width:"300",height:"100"},label:"Expanded"},parameters:{docs:{description:{story:"An enlarged version of the counter."}}}},m={args:{initialValue:5,minValue:0,maxValue:10,label:"Limited"},parameters:{docs:{description:{story:"Counter with a restricted range of values."}}}};var V,v,w;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    initialValue: 0,
    minValue: -5,
    maxValue: 10
  }
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,C,k;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    initialValue: 2,
    minValue: 0,
    maxValue: 5,
    label: "Child"
  },
  parameters: {
    docs: {
      description: {
        story: 'Counter with a descriptive label below the value.'
      }
    }
  }
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var S,z,q;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    initialValue: 3,
    minValue: 0,
    maxValue: 10,
    customSize: {
      width: "58",
      height: "173"
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Counter arranged vertically with controls stacked top to bottom.'
      }
    }
  }
}`,...(q=(z=c.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var T,$,L;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    initialValue: 1,
    customSize: {
      width: "120",
      height: "40"
    },
    label: "Compact"
  },
  parameters: {
    docs: {
      description: {
        story: 'A smaller version of the counter.'
      }
    }
  }
}`,...(L=($=u.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var N,A,E;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    initialValue: 1,
    customSize: {
      width: "300",
      height: "100"
    },
    label: "Expanded"
  },
  parameters: {
    docs: {
      description: {
        story: 'An enlarged version of the counter.'
      }
    }
  }
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var R,I,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    initialValue: 5,
    minValue: 0,
    maxValue: 10,
    label: "Limited"
  },
  parameters: {
    docs: {
      description: {
        story: 'Counter with a restricted range of values.'
      }
    }
  }
}`,...(_=(I=m.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const P=["Default","WithLabel","VerticalOrientation","SmallSize","LargeSize","RestrictedRange"];export{l as Default,d as LargeSize,m as RestrictedRange,u as SmallSize,c as VerticalOrientation,n as WithLabel,P as __namedExportsOrder,K as default};
