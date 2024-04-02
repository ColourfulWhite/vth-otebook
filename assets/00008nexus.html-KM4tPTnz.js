import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as i,a as n,b as a,d as t,e as l}from"./app-G7VSIf0C.js";const c="/assets/1710508697806-nexus-K2XRkAdG.png",u="/assets/1710508717004-nexus_login-nJkploB5.png",r="/assets/1710508739834-nexus_interface-uirmGbz-.png",d="/assets/1710508759750-import_maven_project-sT3gLgiY.png",g="/assets/1710508778971-create_repo_1-7aL38qjI.png",k="/assets/1710508799247-create_repo_2-J3fRvZpr.png",m="/assets/1710508811015-create_repo_3-Bm7bgCem.png",h="/assets/1710508828081-add_repo_to_group-uzI9-OfN.png",v="/assets/1710508851213-upload_project-Ii3CzGnJ.png",f="/assets/1710508870821-remove_project-TC5EpLJ2.png",x="/assets/1710508884989-use_nexus_in_idea-NF9VroJY.png",b={},_=n("h2",{id:"nexus-的安装与启动-linux",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nexus-的安装与启动-linux","aria-hidden":"true"},"#"),a(" Nexus 的安装与启动（Linux）")],-1),y=n("p",null,"下载 Nexus",-1),N={href:"https://help.sonatype.com/repomanager3/product-information/download",target:"_blank",rel:"noopener noreferrer"},z=n("p",null,"下载 Unix archive 。",-1),w=n("li",null,[n("p",null,"解压到安装目录")],-1),I=n("li",null,[n("p",null,"修改环境变量（可选）")],-1),L=n("li",null,[n("p",null,"启动服务"),n("p",null,[a("使用 "),n("code",null,"nexus start"),a(" 启动 Nexus。")])],-1),B={href:"https://help.sonatype.com/repomanager3/installation-and-upgrades/run-as-a-service",target:"_blank",rel:"noopener noreferrer"},E=l('<h2 id="nexus-配置" tabindex="-1"><a class="header-anchor" href="#nexus-配置" aria-hidden="true">#</a> Nexus 配置</h2><ul><li><p>基础配置</p><p>修改程序的 etc 目录中 nexus-default.properties 文件</p></li><li><p>服务器启动配置</p><p>修改程序的 bin 目录中 nexus.vmoptions 文件</p></li></ul><h2 id="nexus-仓库" tabindex="-1"><a class="header-anchor" href="#nexus-仓库" aria-hidden="true">#</a> Nexus 仓库</h2><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="仓库分类" tabindex="-1"><a class="header-anchor" href="#仓库分类" aria-hidden="true">#</a> 仓库分类</h3><ul><li><p>hosted 宿主仓库</p><p>可以保存无法从中央仓库获取的资源。</p></li><li><p>proxy 代理仓库</p><p>代理远程仓库，通过 nexus 访问其他公共仓库。</p></li><li><p>group 仓库组</p><p>将若干个仓库组成一个群组，简化配置。</p><p><strong>注意：仓库组不能保存资源，属于设计型仓库。</strong></p></li></ul><h2 id="通过-web-操作-nexus" tabindex="-1"><a class="header-anchor" href="#通过-web-操作-nexus" aria-hidden="true">#</a> 通过 Web 操作 Nexus</h2><h3 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h3><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>初始登录会进行初始化。</p><h3 id="界面" tabindex="-1"><a class="header-anchor" href="#界面" aria-hidden="true">#</a> 界面</h3><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>①：浏览模式</p><p>②：设计模式</p><p>③：退出当前登录</p><p>④：浏览仓库</p><p>⑤：上传 Maven 工程</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>② 带链接符号图标：代理仓库</p><p>③ 带文件夹符号图标：仓库组</p><p>④ 宿主仓库</p><h3 id="创建宿主仓库" tabindex="-1"><a class="header-anchor" href="#创建宿主仓库" aria-hidden="true">#</a> 创建宿主仓库</h3><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>①：仓库名字（必填）</p><p>②：选择仓库存放的类型</p><ul><li><p>Release</p></li><li><p>Sanpshot</p></li><li><p>Mixed</p></li></ul><h3 id="添加宿主仓库到仓库组" tabindex="-1"><a class="header-anchor" href="#添加宿主仓库到仓库组" aria-hidden="true">#</a> 添加宿主仓库到仓库组</h3><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="上传资源" tabindex="-1"><a class="header-anchor" href="#上传资源" aria-hidden="true">#</a> 上传资源</h3><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="移除资源" tabindex="-1"><a class="header-anchor" href="#移除资源" aria-hidden="true">#</a> 移除资源</h3><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="idea-中使用-nexus" tabindex="-1"><a class="header-anchor" href="#idea-中使用-nexus" aria-hidden="true">#</a> IDEA 中使用 Nexus</h2><figure><img src="'+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在本地仓库配置访问私服的用户信息及下载地址。</p><p>在工程配置上传地址。</p><h3 id="配置本地仓库" tabindex="-1"><a class="header-anchor" href="#配置本地仓库" aria-hidden="true">#</a> 配置本地仓库</h3><ul><li><p>访问私服的权限</p><p>在 <code>&lt;settings&gt;</code> 标签的 <code>&lt;servers&gt;</code> 子标签内配置。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servers</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>maven-release<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>maven-snapshot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servers</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下载地址</p><p>在 <code>&lt;settings&gt;</code> 标签的 <code>&lt;mirrors&gt;</code> 子标签内配置。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-floli<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus Floli<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--从私服复制--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://localhost/repository/maven-public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="配置工程" tabindex="-1"><a class="header-anchor" href="#配置工程" aria-hidden="true">#</a> 配置工程</h3><p>在父工程添加标签 <code>&lt;distributionManagement&gt;</code>。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>distributionManagement</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>maven-release<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!--根据这个获取权限--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://localhost/repository/maven-release/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshotRepository</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>maven-snapshot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://localhost/repository/maven-snapshot/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshotRepository</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>distributionManagement</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布到私服" tabindex="-1"><a class="header-anchor" href="#发布到私服" aria-hidden="true">#</a> 发布到私服</h2><p>使用 <code>mvn deploy</code> 发布。</p>`,45);function J(M,R){const s=p("ExternalLinkIcon");return o(),i("div",null,[_,n("ol",null,[n("li",null,[y,n("p",null,[a("下载地址："),n("a",N,[a("https://help.sonatype.com/repomanager3/product-information/download"),t(s)])]),z]),w,I,L]),n("p",null,[a("可以把 Nexus 作为系统服务启动，具体参考 "),n("a",B,[a("https://help.sonatype.com/repomanager3/installation-and-upgrades/run-as-a-service"),t(s)])]),E])}const C=e(b,[["render",J],["__file","00008nexus.html.vue"]]);export{C as default};
