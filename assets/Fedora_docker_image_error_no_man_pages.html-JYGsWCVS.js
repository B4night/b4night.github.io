import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as s,c as t,b as e,d as o,e as d,a as c}from"./app-W5qck1Jt.js";const l={},i=e("h1",{id:"fedora-docker-image-error-no-man-pages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fedora-docker-image-error-no-man-pages"},[e("span",null,"Fedora docker image error: no man pages")])],-1),f=e("p",null,"Recently I installed fedora39 as WSL2. But today I found out that no man pages for every command.",-1),h={href:"https://github.com/fedora-cloud/docker-brew-fedora/issues/9",target:"_blank",rel:"noopener noreferrer"},_=c('<h1 id="tl-dr" tabindex="-1"><a class="header-anchor" href="#tl-dr"><span>Tl;DR</span></a></h1><ol><li>Comment <code>tsflags=nodocs</code> in <code>/etc/dnf/dnf.conf</code></li><li>Reinstall everything: <code>sudo dnf reinstall $(sudo dnf list --installed | awk &#39;{print $1}&#39;)</code>.</li></ol><h1 id="reasons" tabindex="-1"><a class="header-anchor" href="#reasons"><span>Reasons</span></a></h1><p>The default configuration: <code>tsflags=nodocs</code> will refuse to install man-pages of the commands or softwares we install. So if we remove this configuration and reinstall all of the packages, their man-pages will be installed correctly.</p>',4);function m(p,u){const a=n("ExternalLinkIcon");return s(),t("div",null,[i,f,e("p",null,[o("This is the reference: "),e("a",h,[o("https://github.com/fedora-cloud/docker-brew-fedora/issues/9"),d(a)])]),_])}const b=r(l,[["render",m],["__file","Fedora_docker_image_error_no_man_pages.html.vue"]]);export{b as default};
