import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as c,c as p,a as n,b as s,d as a,w as u,e as t}from"./app-G7VSIf0C.js";const d={},r=n("p",null,"这节将介绍部署 VTH 的方式。",-1),m={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"自购服务器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自购服务器","aria-hidden":"true"},"#"),s(" 自购服务器")],-1),k=t(`<li><p>从 Github 拉取仓库</p></li><li><p>进入项目目录，执行 <code>pnpm install</code> 安装依赖</p></li><li><p>执行 <code>pnpm docs:build</code> 构建项目，构建内容会输出到 <code>.vuepress/dist</code> 目录下面</p></li><li><p>添加 robots.txt 到 <code>.vuepress/dist</code> 中，禁止爬虫爬取</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>User-Agent: *
Disallow: /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以直接执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;User-Agent: *<span class="token entity" title="\\n">\\n</span>Disallow: /&quot;</span> <span class="token operator">&gt;</span> .vuepress/dist/robots.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>新建一个网站，把 <code>.vuepress/dist</code> 下面的内容复制到网站根目录（也可以直接用这个为根目录）</p></li><li><p>通过域名访问</p></li>`,6),b=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果存在 <code>.user.ini</code> 文件导致构建失败，执行以下命令删除。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> chattr <span class="token parameter variable">-i</span> .user.ini
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> .user.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="私有仓库-公共仓库-github-pages-cloudflare" tabindex="-1"><a class="header-anchor" href="#私有仓库-公共仓库-github-pages-cloudflare" aria-hidden="true">#</a> 私有仓库 + 公共仓库 + Github Pages + Cloudflare</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><p>如果准备发布到 <code>https://&lt;username&gt;.github.io</code>，需要将整个项目上传到 <code>https://github.com/&lt;username&gt;.github.io</code> 仓库，且不需要修改 <code>base</code> 配置。</p></li><li><p>如果是一个普通仓库 repo，网站会发布到 <code>https://&lt;username&gt;.github.io/&lt;repo&gt;</code>，这时候需要把 <code>base</code> 配置设置成 <code>&quot;/&lt;repo&gt;/&quot;</code> 。</p></li><li><p>如果使用域名访问，则 <code>base</code> 配置保持为 <code>/</code>。</p></li></ul></div><ol><li><p>把域名的 DNS 解析服务器改为 Cloudflare，并在 Cloudflare 添加 CNAME 解析</p></li><li><p>把公开仓库账号的 PAT 添加到项目仓库的 Secrets 中</p></li><li><p>在私有仓库配置 Action</p><p>配置 Action，可以直接在 Github 网页配置，可以在本地配置，本质都是添加 <code>.github/workflows</code> 目录，并添加一个 <code>.yml</code> 的 Action 配置文件。</p><ul><li>在项目目录创建 <code>.github/workflows</code> 目录</li><li>在 <code>workflows</code> 目录下创建一个 <code>.yml</code> 的文件</li><li>填写具体的 Action 配置到 <code>.yml</code> 文件中</li></ul></li><li><p>推送代码到 Github 自动触发 Action 进行构建部署</p></li><li><p>通过域名访问</p></li></ol><details class="hint-container details"><summary>Action 配置参考</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 该 ci 的名字，可以在仓库的 Github Actions tab 看到</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy Notebook

<span class="token comment"># 触发时机</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 代码 push 到 master 分支的时候运行该 workflow</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># build-and-push 是 jobs 名字，随便取，可以有多个 jobs 默认并行</span>
  <span class="token key atrule">ColourfulWhite</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest <span class="token comment"># 该 jobs 运行的环境</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span> <span class="token comment"># with 表示所需要的参数</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> fasle <span class="token comment"># false 是用 personal token，true 是使用 GitHub token</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token comment"># 保证能够 push 成功</span>

      <span class="token comment"># 安装 pnpm</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">7</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

      <span class="token comment"># 安装 Node.js</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm
      
      <span class="token comment"># Build</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build Docs
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          pnpm install vue-router
          pnpm docs:build</span>
          
     <span class="token comment"># 将静态资源 Push 到公开仓库</span>
     <span class="token comment"># &lt;domain&gt; 需要 github.io 绑定的域名</span>
     <span class="token comment"># &lt;username&gt; git commit 用户名</span>
     <span class="token comment"># &lt;mail&gt; git commit 邮箱</span>
     <span class="token comment"># &lt;message&gt; git commit 的 message</span>
     <span class="token comment"># &lt;secrets_name&gt; secrets 名称（在公开仓库的账号生成 PAT，然后添加到私有仓库的 secrets 里面）</span>
     <span class="token comment"># &lt;github_username&gt; github 的用户名（公开仓库）</span>
     <span class="token comment"># &lt;repo&gt; 公开仓库名</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Commit and Push
        <span class="token key atrule">working-directory</span><span class="token punctuation">:</span> src/.vuepress/dist
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo -e &quot;User-Agent: *\\nDisallow: /&quot; &gt; robots.txt
          echo &quot;floli.cc&quot; &gt; CNAME
          git config --global user.name &quot;Ackerven&quot;
          git config --global user.email &quot;ackerven@gmail.com&quot;
          git config --global init.defaultBranch &quot;master&quot;
          git init
          git checkout -b gh-pages
          git add -A
          git commit -m &#39;update&#39;
          git remote add floli https://\${{secrets.DEPLOY_NOTEBOOK}}@github.com/ColourfulWhite/vth-notebook.git
          git push floli gh-pages -f -q
          rm -rf CNAME
          echo &quot;emois.fun&quot; &gt; CNAME
          git add CNAME
          git commit -m &quot;update&quot;
          git remote add emo https://\${{secrets.DEPLOY_NOTEBOOK}}@github.com/ColourfulWhite/emo-notebook.git
          git push emo gh-pages -f -q</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,5);function h(g,y){const i=e("ExternalLinkIcon"),l=e("RouterLink");return c(),p("div",null,[r,n("p",null,[s("更多关于部署的方法可以前往 "),n("a",m,[s("VuePress → 部署"),a(i)]),s(" 查看。")]),v,n("ol",null,[n("li",null,[n("p",null,[s("在服务器搭建运行环境，教程参考 "),a(l,{to:"/other/vth/01install.html"},{default:u(()=>[s("安装 VTH → 搭建运行环境")]),_:1})])]),k]),b])}const q=o(d,[["render",h],["__file","03deploy.html.vue"]]);export{q as default};
