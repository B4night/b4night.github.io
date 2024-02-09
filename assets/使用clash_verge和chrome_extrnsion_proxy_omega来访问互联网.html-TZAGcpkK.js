import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as r,b as e,d as o,e as c,a as i}from"./app-tkyAxIxk.js";const s={},g=e("h1",{id:"使用clash-verge和chrome-extrnsion-proxy-omega来访问互联网",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用clash-verge和chrome-extrnsion-proxy-omega来访问互联网"},[e("span",null,"使用clash verge和chrome extrnsion proxy omega来访问互联网")])],-1),l=e("p",null,"这半年来, 我已经帮助好几个朋友配置clash verge和chrome, 以便快捷的访问互联网. 本篇博客记录一下所需步骤, 以后可以直接转发给有需要的朋友.",-1),d=e("h2",{id:"_1-下载clash-verge",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-下载clash-verge"},[e("span",null,"1. 下载clash verge")])],-1),h={href:"https://github.com/zzzgydi/clash-verge",target:"_blank",rel:"noopener noreferrer"},m=i('<p>由于某些原因, 现在这个repo已经archive了, 可以从<code>Releases</code>里面下载所需要的版本.</p><figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707466514.png" alt="Release List" tabindex="0" loading="lazy"><figcaption>Release List</figcaption></figure><p>简单介绍一下这些版本:</p><p>如果你是小白, 而且电脑系统是windows, 那就下载<code>Clash.Verge_1.3.8_x64-setup.exe</code></p><p>如果是macos, 则下载<code>Clash.Verge_1.3.8_aarch64.dmg</code></p><p>如果是linux, 下载<code>clash.verge_1.3.8_amd64.AppImage</code></p><p>下载完成后就是安装, 这一部分省略</p><h2 id="_2-配置clash" tabindex="-1"><a class="header-anchor" href="#_2-配置clash"><span>2. 配置clash</span></a></h2><p>首先确保你拥有<code>URL</code>, 这里就不详细说怎么获得了.</p><p>然后打开clash, 在<code>Profiles</code>这个界面输入<code>URL</code>, 然后点击<code>import</code>, 就可以获得你的订阅.</p><p>在<code>Proxies</code>这部分点击global, 然后选个稳定的节点.</p><figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707466826.png" alt="Main page" tabindex="0" loading="lazy"><figcaption>Main page</figcaption></figure><p><code>Settings</code>部分小白可以按照我的配置, 专业人士可以忽略</p><figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707466885.png" alt="Setting section" tabindex="0" loading="lazy"><figcaption>Setting section</figcaption></figure><h2 id="_3-chrome安装proxy-swichyomega实现无感代理" tabindex="-1"><a class="header-anchor" href="#_3-chrome安装proxy-swichyomega实现无感代理"><span>3. Chrome安装Proxy SwichyOmega实现无感代理</span></a></h2>',15),_=e("code",null,"Proxy SwichyOmega",-1),f={href:"https://chromewebstore.google.com/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif",target:"_blank",rel:"noopener noreferrer"},u=i('<p>其他浏览器, 比如edge也有对应的插件</p><p>安装完成插件后进入选项, 可以看到如下界面 <img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707467081.png" alt="Option page" loading="lazy"></p><h3 id="localproxy配置" tabindex="-1"><a class="header-anchor" href="#localproxy配置"><span>LocalProxy配置</span></a></h3><p>在左侧栏中, <code>LocalProxy</code>处是如下配置的, 注意port部分不要写错</p><figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707467186.png" alt="LocalProxy config" tabindex="0" loading="lazy"><figcaption>LocalProxy config</figcaption></figure><h3 id="auto-switch配置" tabindex="-1"><a class="header-anchor" href="#auto-switch配置"><span>auto switch配置</span></a></h3><figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707467240.png" alt="auto switch config" tabindex="0" loading="lazy"><figcaption>auto switch config</figcaption></figure><p>如果有的网站你想通过节点访问, 但是默认识别的是不使用节点访问, 那样的话就需要配置这个界面</p><p>比如说你想访问<code>www.abc.com</code>, 你需要点击<code>Add condition</code>, 然后输入<code>*abc*</code>, 那么下次就会使用节点访问</p><h3 id="手动控制访问策略" tabindex="-1"><a class="header-anchor" href="#手动控制访问策略"><span>手动控制访问策略</span></a></h3><p>添加在auto switch里面的网站会自动识别, 然后通过节点访问.</p><p>右上角的插件的icon是这样, 则说明没有使用节点访问</p><figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707467404.png" alt="not using proxy" tabindex="0" loading="lazy"><figcaption>not using proxy</figcaption></figure><p>则点击, 切换成这样, 那么所有的网站都会通过节点访问</p><figure><img src="https://joplin-imgbed-1312299157.cos.ap-nanjing.myqcloud.com/2024/02/upgit_20240209_1707467435.png" alt="using proxy" tabindex="0" loading="lazy"><figcaption>using proxy</figcaption></figure><h3 id="proxy-swichyomega的配置" tabindex="-1"><a class="header-anchor" href="#proxy-swichyomega的配置"><span>Proxy SwichyOmega的配置</span></a></h3><p>如果有需要导入我的配置的, 请联系油箱<code>superchaovacation@gmail.com</code></p>',17);function x(y,b){const a=t("ExternalLinkIcon");return p(),r("div",null,[g,l,d,e("p",null,[o("clash verge的github链接是: "),e("a",h,[o("https://github.com/zzzgydi/clash-verge"),c(a)])]),m,e("p",null,[_,o("是chrome的一个插件, 安装地址: "),e("a",f,[o("https://chromewebstore.google.com/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif"),c(a)])]),u])}const v=n(s,[["render",x],["__file","使用clash_verge和chrome_extrnsion_proxy_omega来访问互联网.html.vue"]]);export{v as default};
