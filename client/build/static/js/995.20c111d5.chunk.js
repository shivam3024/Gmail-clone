"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[995],{1995:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(3216),s=a(8170),i=a(4516),o=a(5865),d=a(9662),l=a(579);const r=(0,d.A)((0,l.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack"),c=(0,d.A)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");var m=a(3956),h=a(9469),g=a(3697);const p=(0,s.Ay)(i.A)({padding:15}),u=(0,s.Ay)(o.A)({fontSize:22,margin:"10px 0 20px 75px",display:"flex"}),y=(0,s.Ay)(i.A)({fontSize:12,background:"#ddd",color:"#222",padding:"2px 4px",marginLeft:6,borderRadius:4,alignSelf:"center"}),x=(0,s.Ay)(i.A)({marginLeft:15,width:"100%","& > div":{display:"flex","& > p > span":{fontSize:12,color:"#5E5E5E"}}}),f=(0,s.Ay)(i.A)({margin:"0 50px 0 auto !important",fontSize:12,color:"#5E5E5E"}),w=(0,s.Ay)("img")({borderRadius:"50%",width:40,height:40,margin:"5px 10px 0 10px",background:"#cccccc"}),b=()=>{const{openDrawer:e}=(0,n.KC)(),{state:t}=(0,n.zy)(),{email:a}=t,s=(0,h.A)(g.y.moveEmailsToBin);return(0,l.jsxs)(i.A,{style:e?{marginLeft:250}:{width:"100%"},children:[(0,l.jsxs)(p,{children:[(0,l.jsx)(r,{onClick:()=>window.history.back(),color:"action",fontSize:"small"}),(0,l.jsx)(c,{fontSize:"small",color:"action",style:{marginLeft:40},onClick:()=>(s.call([a._id]),void window.history.back())})]}),(0,l.jsxs)(u,{children:[a.Subject," ",(0,l.jsx)(y,{component:"span",children:"Inbox"})]}),(0,l.jsxs)(i.A,{style:{display:"flex"},children:[(0,l.jsx)(w,{src:m.Fk,alt:"dp"}),(0,l.jsxs)(x,{children:[(0,l.jsxs)(i.A,{children:[(0,l.jsxs)(o.A,{style:{marginTop:10},children:[a.name,(0,l.jsxs)(i.A,{component:"span",children:["\xa0<",a.to,">"]})]}),(0,l.jsxs)(f,{children:[new window.Date(a.date).getDate(),"\xa0",new window.Date(a.date).toLocaleString("default",{month:"long"}),"\xa0",new window.Date(a.date).getFullYear()]})]}),(0,l.jsx)(o.A,{style:{marginTop:20},children:a.body})]})]})]})}},3956:(e,t,a)=>{a.d(t,{Fk:()=>s,Rb:()=>i,_3:()=>n});const n="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",s="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",i={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},9469:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(5043),s=a(6213);const i=async(e,t,a)=>await(0,s.A)({method:e.method,url:`/${e.endpoint}/${a}`,data:t}),o=e=>{const[t,a]=(0,n.useState)(null),[s,o]=(0,n.useState)(""),[d,l]=(0,n.useState)(!1);return{call:async function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a(null),o(""),l(!0);try{let s=await i(e,t,n);a(s.data)}catch(s){o(s.message)}finally{l(!1)}},response:t,error:s,isLoading:d}}},3697:(e,t,a)=>{a.d(t,{y:()=>n});const n={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailsToBin:{endpoint:"bin",method:"POST"},toggleStarredEmail:{endpoint:"starred",method:"POST"},deleteEmail:{endpoint:"delete",method:"DELETE"}}}}]);
//# sourceMappingURL=995.20c111d5.chunk.js.map