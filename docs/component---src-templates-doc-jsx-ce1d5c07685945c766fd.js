(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{191:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(195),i=n.n(o),l=n(193),c=n(194),p=n.n(c);var s=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e,t,n,r,o=this.props,l=o.postNode,c=o.postPath,s=o.postSEO;if(s){var m=l.frontmatter;e=m.title,t=m.description?m.description:l.excerpt,n=m.cover,r=p.a.siteUrl+p.a.pathPrefix+c}else e=p.a.siteTitle,t=p.a.siteDescription,n=p.a.siteLogo;var d="/"===p.a.pathPrefix?"":p.a.pathPrefix;n=p.a.siteUrl+d+n;var u=p.a.siteUrl+p.a.pathPrefix,h=[{"@context":"http://schema.org","@type":"WebSite",url:u,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return s&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:u,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),a.a.createElement(i.a,null,a.a.createElement("meta",{name:"description",content:t}),a.a.createElement("meta",{name:"image",content:n}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),a.a.createElement("meta",{property:"og:url",content:s?r:u}),s?a.a.createElement("meta",{property:"og:type",content:"article"}):null,a.a.createElement("meta",{property:"og:title",content:e}),a.a.createElement("meta",{property:"og:description",content:t}),a.a.createElement("meta",{property:"og:image",content:n}),a.a.createElement("meta",{property:"fb:app_id",content:p.a.siteFBAppID?p.a.siteFBAppID:""}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter?p.a.userTwitter:""}),a.a.createElement("meta",{name:"twitter:title",content:e}),a.a.createElement("meta",{name:"twitter:description",content:t}),a.a.createElement("meta",{name:"twitter:image",content:n}))},r}(r.Component),m=n(197);var d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(u,null,a.a.createElement(m.a,null))},r}(a.a.Component),u=l.b.div.withConfig({displayName:"Header__SiteContainer",componentId:"sc-12paipw-0"})(["display:flex;align-items:center;justify-content:space-between;background:",";padding:25px;"],function(e){return e.theme.brand}),h=d,f=(n(17),n(29),n(25),n(16),n(11)),g=n.n(f),y=function(e){var t=e.entries;return a.a.createElement(w,null,t.map(function(e,t){var n=e.entry;return a.a.createElement(k,{key:t},a.a.createElement(g.a,{to:n.childMarkdownRemark.fields.slug},a.a.createElement(x,null,n.childMarkdownRemark.frontmatter.title)))}))},b=function e(t){var n=t.chapters,r=t.entries,o=t.title,i=t.level,l=void 0===i?0:i;return a.a.createElement(_,null,o&&a.a.createElement(C,{key:""+o+l},a.a.createElement(T,{level:l},o)),a.a.createElement(C,null,r&&a.a.createElement(y,{entries:r})),a.a.createElement(C,null,n&&n.map(function(t,n){return a.a.createElement(e,Object.assign({},t,{level:l+1,key:""+n}))})))},E=function(e){var t=e.chapters;return a.a.createElement(v,null,t.map(function(e,t){return a.a.createElement(b,Object.assign({},e,{key:t}))}))},v=l.b.div.withConfig({displayName:"TableOfContents__TOCWrapper",componentId:"yx8s11-0"})(["padding:",";margin:0;"],function(e){return e.theme.sitePadding}),_=l.b.ol.withConfig({displayName:"TableOfContents__StyledChapterList",componentId:"yx8s11-1"})(["list-style:none;margin:0;"]),w=l.b.ol.withConfig({displayName:"TableOfContents__StyledLinkList",componentId:"yx8s11-2"})(["list-style:none;"]),x=l.b.h6.withConfig({displayName:"TableOfContents__EntryTitle",componentId:"yx8s11-3"})(["display:inline-block;font-weight:200;color:black;margin:0;line-height:1.5;border-bottom:1px solid transparent;text-decoration:none;"]),C=l.b.li.withConfig({displayName:"TableOfContents__ChapterListItem",componentId:"yx8s11-4"})(["margin:0;"]),k=l.b.li.withConfig({displayName:"TableOfContents__EntryListItem",componentId:"yx8s11-5"})(["margin:0;a:hover{border-bottom:1px solid black;}"]),T=l.b.h5.withConfig({displayName:"TableOfContents__ChapterTitle",componentId:"yx8s11-6"})(["font-weight:",";font-size:",";color:",";"],function(e){switch(e.level%3){case 1:return"600";case 2:return"400";default:return"200"}},function(e){switch(e.level%3){case 1:return"2.2rem";case 2:return"1.8rem";default:return"2.8rem"}},function(e){var t=e.level,n=e.theme;switch(t%3){case 1:return"black";case 2:return n.accentDark;default:return n.accent}}),I=n(198);n.d(t,"default",function(){return N}),n.d(t,"pageQuery",function(){return P});var N=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.pathContext.slug,t=this.props.data.postBySlug,n=t.frontmatter;return n.id||(n.id=e),n.id||(n.category_id=p.a.postDefaultCategoryID),a.a.createElement(I.a,{location:this.props.location},a.a.createElement("div",null,a.a.createElement(i.a,null,a.a.createElement("title",null,n.title+" | "+p.a.siteTitle)),a.a.createElement(s,{postPath:e,postNode:t,postSEO:!0}),a.a.createElement(O,null,a.a.createElement(D,null,a.a.createElement(h,{location:this.props.location})),a.a.createElement(j,null,a.a.createElement(E,{chapters:this.props.data.tableOfContents.chapters})),a.a.createElement(L,null,a.a.createElement("div",null,a.a.createElement("h1",null,n.title),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))))))},r}(a.a.Component),O=l.b.div.withConfig({displayName:"doc__BodyGrid",componentId:"sc-1ant3rg-0"})(["height:100vh;display:grid;grid-template-rows:75px 1fr;grid-template-columns:300px 1fr;@media screen and (max-width:600px){display:flex;flex-direction:column;height:inherit;}"]),L=l.b.div.withConfig({displayName:"doc__BodyContainer",componentId:"sc-1ant3rg-1"})(["grid-column:2 / 3;grid-row:2 / 3;overflow:scroll;justify-self:center;width:100%;padding:",";@media screen and (max-width:600px){order:2;}& > div{max-width:",";margin:auto;}& > h1{color:",";}"],function(e){return e.theme.sitePadding},function(e){return e.theme.contentWidthLaptop},function(e){return e.theme.accentDark}),D=l.b.div.withConfig({displayName:"doc__HeaderContainer",componentId:"sc-1ant3rg-2"})(["grid-column:1 / 3;grid-row:1 / 2;z-index:2;@media screen and (max-width:600px){order:1;}"]),j=l.b.div.withConfig({displayName:"doc__ToCContainer",componentId:"sc-1ant3rg-3"})(["grid-column:1 / 2;grid-row:2 / 3;background:",";overflow:scroll;@media screen and (max-width:600px){order:3;overflow:inherit;}"],function(e){return e.theme.lightGrey}),P="664834741"},194:function(e,t){e.exports={blogPostDir:"posts",docDir:"docs",siteTitle:"Beachball",siteTitleAlt:"The Sunniest Version Bumper",siteLogo:"/logos/logo-1024.png",siteUrl:"https://microsoft.github.io",pathPrefix:"/beachball",siteDescription:"The Sunniest Semantic Version Bumper",siteRss:"/rss.xml",postDefaultCategoryID:"Tech",repoLink:"https://github.com/microsoft/beachball",copyright:"Copyright © "+(new Date).getFullYear()+" Microsoft",themeColor:"#c62828",backgroundColor:"#e0e0e0",toCChapters:["","Chapter 1","Chapter 2"]}},197:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(11),i=n.n(o),l=n(193),c=n(196),p=n(194),s=n.n(p);var m=l.b.div.withConfig({displayName:"UserLinks__Container",componentId:"sc-1cfrp8c-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;max-width:100%;"]),d=l.b.a.withConfig({displayName:"UserLinks__UserIcon",componentId:"sc-1cfrp8c-1"})(["margin-left:25px;color:",";&:hover{color:rgba(0,0,0,0.2);border-bottom:none;}"],function(e){return e.theme.ink}),u={width:"20px",height:"20px"},h=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(m,{className:"user-links"},a.a.createElement(d,{href:s.a.repoLink},a.a.createElement(c.b,{style:u})))},r}(r.Component);var f=l.b.div.withConfig({displayName:"Navigation__NavContainer",componentId:"sc-1v7bid7-0"})(["display:flex;justify-content:space-between;width:100%;background:",";.nav-link{font-size:1.6rem;margin-right:10px;font-weight:200;color:black;}@media screen and (max-width:600px){display:flex;flex-direction:column;align-items:center;section{margin-bottom:20px;}span{display:none;}}"],function(e){return e.theme.brand}),g=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(f,null,a.a.createElement("section",null,a.a.createElement(i.a,{className:"nav-link",to:"/"}," ","HOME"," "),a.a.createElement(i.a,{className:"nav-link",to:"/getting-started"}," ","DOCS"," ")),a.a.createElement("span",null,a.a.createElement(h,null)))},r}(a.a.Component);t.a=g},198:function(e,t,n){"use strict";n(127),n(128),n(8);var r=n(0),a=n.n(r),o=n(195),i=n.n(o),l=n(193),c=n(194),p=n.n(c),s=(n(200),n(201),{brand:"#f9e659",accent:"#0a5eb7",accentDark:"#35495E",lightGrey:"#F6F6F6",darkGrey:"#91a2a3",ink:"black",errorRed:"#FF6666",codeEditBlue:"#2973b7",codeEditGreen:"#42b983",contentWidthLaptop:"850px",sitePadding:"25px"});n.d(t,"a",function(){return m});var m=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=p.a.pathPrefix?p.a.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),r="";if(""===n)r="Home";else if("tags/"===n)r="Tags";else if(n.includes("posts"))r="Article";else if(n.includes("tags/")){r="Tagged in "+e(n.replace("tags/","").replace("/","").replace("-"," "))}else if(n.includes("categories/")){r=""+e(n.replace("categories/","").replace("/","").replace("-"," "))}return r},o.render=function(){var e=this.props.children;return a.a.createElement("div",null,a.a.createElement(i.a,null,a.a.createElement("title",null,p.a.siteTitle+" |  "+this.getLocalTitle()),a.a.createElement("meta",{name:"description",content:p.a.siteDescription})),a.a.createElement(l.a,{theme:s},e))},r}(a.a.Component)}}]);
//# sourceMappingURL=component---src-templates-doc-jsx-ce1d5c07685945c766fd.js.map