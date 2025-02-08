import{r as o,j as e,M as s,B as d,I as f,F as a}from"./vendor-rcmh0ru9.js";const x="https://github.com/user-attachments/files/18716974/Mastering.DeepSeek_.Unleashing.Hidden.Features.Secret.Tricks.Powerful.Prompts.pdf",b="images/favicon.png",y=()=>{const[c,l]=o.useState(!1),[n,m]=o.useState(""),[i,u]=o.useState(""),[p,h]=o.useState(!1),g=async r=>{if(r.preventDefault(),!(!n||!i))try{h(!0);const t=document.createElement("a");t.href=x,t.download="MasteringDeepSeek.pdf",document.body.appendChild(t),t.click(),document.body.removeChild(t)}catch(t){console.error("Error submitting data:",t),alert("An error occurred. Please try again.")}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{type:"text/css",children:`
          .form-group-aligned {
            display: grid;
            grid-template-columns: auto 1fr; /* Label width auto, input takes remaining space */
            gap: 10px; /* Spacing between label and input */
            align-items: center; /* Vertically align label and input */
          }

          .form-group-aligned .form-label {
            text-align: right; /* Right-align the label text */
            padding-right: 10px; /* Add right padding for space */
          }

          .form-control-custom-placeholder::placeholder {
            color: lightgray;
            opacity: 1;
            font-size: inherit;
          }

          .form-control-custom-placeholder {
            font-size: inherit;
            padding-left: 10px; /* Add left padding to input for space from label */
          }
        `}),e.jsxs(s,{show:c,onHide:()=>l(!1),centered:!0,className:"border-0",children:[e.jsxs(s.Header,{className:"border-0 pb-0 d-flex flex-column align-items-center position-relative pt-3",children:[e.jsx("div",{className:"position-absolute top-0 end-0 me-4 mt-4",children:e.jsx(d,{variant:"close",onClick:()=>l(!1)})}),e.jsxs("div",{className:"d-flex align-items-center mb-2 mt-2",children:[e.jsx(f,{src:b,alt:"Ai Trends Logo",height:40,className:"me-3"}),e.jsx(s.Title,{className:"fw-bold fs-5",children:"Get Your Free eBook"})]}),e.jsx("p",{className:"small text-muted text-center",children:"Thank you for being here. Our love for tech brought us here!"})]}),e.jsx(s.Body,{className:"pt-3 pb-4 px-4",children:p?e.jsx("div",{className:"text-center",children:e.jsxs("p",{className:"mb-3",children:["Thank you, ",n,"! Your eBook is being downloaded now."]})}):e.jsxs(a,{onSubmit:g,children:[e.jsxs(a.Group,{controlId:"name",className:"mb-3 form-group-aligned",children:[" ",e.jsx(a.Label,{className:"form-label",children:"Full Name:"})," ",e.jsx(a.Control,{type:"text",placeholder:"Enter your full name",value:n,onChange:r=>m(r.target.value),required:!0,className:"border-0 rounded-0 shadow-none form-control-custom-placeholder",style:{borderBottom:"1px solid #ced4da",fontSize:"inherit"}})]}),e.jsxs(a.Group,{controlId:"email",className:"mb-4 form-group-aligned",children:[" ",e.jsx(a.Label,{className:"form-label",children:"Email Address:"})," ",e.jsx(a.Control,{type:"email",placeholder:"Enter your email",value:i,onChange:r=>u(r.target.value),required:!0,className:"border-0 rounded-0 shadow-none form-control-custom-placeholder",style:{borderBottom:"1px solid #ced4da",fontSize:"inherit"}})]}),e.jsx("div",{className:"d-grid",children:e.jsx(d,{variant:"primary",type:"submit",className:"rounded-0 shadow-none",children:"Submit"})})]})})]}),e.jsx("button",{type:"button",className:"d-none",onClick:()=>l(!0),id:"ebook-download-trigger"})]})};export{y as default};
