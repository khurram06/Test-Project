import{T as g,k as h,o as a,d as l,b as e,u as t,w as o,F as p,Z as _,e as y,a as s,n as v,f as n,i as u,h as x}from"./app-6368ce4f.js";import{A as b}from"./AuthenticationCard-8950d46d.js";import{_ as k}from"./AuthenticationCardLogo-9046ddfe.js";import{_ as w}from"./PrimaryButton-66494774.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=s("div",{class:"mb-4 text-sm text-gray-600"}," Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),E={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],C={class:"mt-4 flex items-center justify-between"},T={__name:"VerifyEmail",props:{status:String},setup(c){const d=c,i=g({}),f=()=>{i.post(route("verification.send"))},m=h(()=>d.status==="verification-link-sent");return(r,N)=>(a(),l(p,null,[e(t(_),{title:"Email Verification"}),e(b,null,{logo:o(()=>[e(k)]),default:o(()=>[V,m.value?(a(),l("div",E," A new verification link has been sent to the email address you provided in your profile settings. ")):y("",!0),s("form",{onSubmit:x(f,["prevent"])},[s("div",C,[e(w,{class:v({"opacity-25":t(i).processing}),disabled:t(i).processing},{default:o(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),s("div",null,[e(t(u),{href:r.route("profile.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:o(()=>[n(" Edit Profile")]),_:1},8,["href"]),e(t(u),{href:r.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"},{default:o(()=>[n(" Log Out ")]),_:1},8,["href"])])])],40,B)]),_:1})],64))}};export{T as default};
