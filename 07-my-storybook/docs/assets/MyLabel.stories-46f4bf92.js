import{j as M}from"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const t=({label:l="No label",size:_="normal",allCaps:S=!1,color:T="primary",fontColor:L})=>M("span",{className:`${_} text-${T}`,style:{color:L},children:S?l.toUpperCase():l});try{t.displayName="MyLabel",t.__docgenInfo={description:"Primary UI component for user interaction",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"This is the text that will be displayed",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"This parameter defines the size of the label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"This parameter sets if the label will be upperCase or not.",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"This parameter sets the color of the label;",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"What font color to use",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const V={title:"UI/My Label",component:t,tags:["autodocs"],argTypes:{fontColor:{control:"color"}}},e={args:{label:"My Label",size:"normal",color:"primary"}},a={args:{label:"Secondary",size:"h3",color:"secondary"}},r={args:{label:"Tertiary",size:"h2",color:"tertiary"}},o={args:{label:"AllCaps",size:"h1",allCaps:!0}},s={args:{label:"CustomFontColor",size:"h1",fontColor:"#e00051"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'My Label',
    size: 'normal',
    color: 'primary'
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    size: 'h3',
    color: 'secondary'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    size: 'h2',
    color: 'tertiary'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,h,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps',
    size: 'h1',
    allCaps: true
  }
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var g,v,z;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'CustomFontColor',
    size: "h1",
    fontColor: '#e00051'
  }
}`,...(z=(v=s.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};const A=["Basic","Secondary","Tertiary","AllCaps","CustomFontColor"];export{o as AllCaps,e as Basic,s as CustomFontColor,a as Secondary,r as Tertiary,A as __namedExportsOrder,V as default};
//# sourceMappingURL=MyLabel.stories-46f4bf92.js.map
