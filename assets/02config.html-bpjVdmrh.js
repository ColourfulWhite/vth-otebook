import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as i,a as n,b as s,d as t,e as p}from"./app-G7VSIf0C.js";const l={},u=n("p",null,"这节将介绍 VTH 的配置文件在哪里，如何对 VTH 进行自定义。",-1),r={href:"https://theme-hope.vuejs.press/zh/cookbook/tutorial/config.html",target:"_blank",rel:"noopener noreferrer"},d=p("<p><strong>下面流程基于 v2.0.0-beta.168，新的版本可能会有变化。</strong></p><p>在配置 VTH 过程中，会修改以下文件：</p><ul><li><code>.vuepress/config.ts</code>：站点配置</li><li><code>.vuepress/theme.ts</code>：主题配置</li><li><code>.vuepress/navbar/zh.ts</code>：导航栏配置（主题配置的一部分）</li><li><code>.vuepress/sidebar/zh.ts</code>：侧边栏配置（主题配置的一部分）</li></ul><ol><li><p>移除多语言配置</p><p>移除多语言，需要做以下工作：</p><ul><li>移除配置文件中关于 <code>locales</code> 相关的配置</li></ul></li></ol><ul><li>把 <code>src</code> 目录下所有 Markdown 文件删掉（<code>zh</code> 目录除外） <ul><li>把 <code>src/zh</code> 目录的内容复制到 <code>src</code> 目录中，再删掉 <code>src/zh</code> 目录</li><li>把 <code>README.md</code> 中的 <code>/zh/</code> 替换成 <code>/</code></li><li>把 <code>navbar/zh.ts</code> 和 <code>sidebar/zh.ts</code> 中的 <code>/zh/</code> 替换成 <code>/</code></li></ul></li></ul>",5),k={start:"2"},v=p("<li><p>确定导航栏和侧边栏的内容</p><p>共设定八个分类：</p><ul><li>基石（cornerstone）：数学、计算机基础学科…</li><li>语言（language）：编程语言</li><li>框架（framework）：主流开发框架</li><li>算法（algorithm）：数据结构、算法…</li><li>技术（technology）：工具、技术、操作系统…</li><li>哲学（philosophy）：软件工程、设计模式、编程思想…</li><li>随笔（article）：博客、奇淫技巧…</li><li>其他（other）：不便分类的文章</li></ul></li>",1),m=n("p",null,"准备好静态资源以及 Markdown 文件",-1),b=n("p",null,"需要准备的静态资源：",-1),q=n("ul",null,[n("li",null,"favicon.ico"),n("li",null,"logo.png"),n("li",null,"logo.svg")],-1),g={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},h={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},f={href:"http://summary.md",target:"_blank",rel:"noopener noreferrer"},y={href:"https://theme-hope.vuejs.press/zh/guide/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://theme-hope.vuejs.press/zh/config/",target:"_blank",rel:"noopener noreferrer"},w=p(`<li><p>其他配置</p><ul><li><p>图片圆角显示</p><p>修改 index.scss 文件，添加以下内容：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li>`,1),z=p(`<h2 id="配置参考" tabindex="-1"><a class="header-anchor" href="#配置参考" aria-hidden="true">#</a> 配置参考</h2><ul><li><p>config.ts</p><details class="hint-container details"><summary>详情</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span>
<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">&quot;./theme.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">&quot;Notebook&quot;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&quot;Ackerven&#39;s knowledge planet.&quot;</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      indexContent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      customFields<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>category<span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token string">&quot;分类: $content&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tag<span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token string">&quot;标签: $content&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  theme<span class="token punctuation">,</span>

  shouldPrefetch<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></li><li><p>theme.ts</p><details class="hint-container details"><summary>详情</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> enNavbar<span class="token punctuation">,</span> zhNavbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./navbar/index.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> enSidebar<span class="token punctuation">,</span> zhSidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./sidebar/index.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

  <span class="token comment">// [base]</span>
  hostname<span class="token operator">:</span> <span class="token string">&quot;https://floli.cc&quot;</span><span class="token punctuation">,</span>
  author<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Ackerven&quot;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&quot;https://ackerven.com&quot;</span><span class="token punctuation">,</span>
    email<span class="token operator">:</span> <span class="token string">&quot;ackerven@gmail.com&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  logo<span class="token operator">:</span> <span class="token string">&quot;/logo.svg&quot;</span><span class="token punctuation">,</span>


  <span class="token comment">// [interface]</span>
  themeColor<span class="token operator">:</span> <span class="token punctuation">{</span>
    blue<span class="token operator">:</span> <span class="token string">&quot;#096dd9&quot;</span><span class="token punctuation">,</span>
    green<span class="token operator">:</span> <span class="token string">&quot;#3eaf7c&quot;</span><span class="token punctuation">,</span>
    origin<span class="token operator">:</span> <span class="token string">&quot;#fb9b5f&quot;</span><span class="token punctuation">,</span>
    red<span class="token operator">:</span> <span class="token string">&quot;#f26d6d&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  iconAssets<span class="token operator">:</span> <span class="token string">&quot;//at.alicdn.com/t/c/font_3869772_f4e17ujww4.css&quot;</span><span class="token punctuation">,</span>
  fullscreen<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  pure<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// [layout]</span>
  navbar<span class="token operator">:</span> zhNavbar<span class="token punctuation">,</span>
  sidebar<span class="token operator">:</span> zhSidebar<span class="token punctuation">,</span>
  repo<span class="token operator">:</span> <span class="token string">&quot;ackerven/vth-notebook2&quot;</span><span class="token punctuation">,</span>
  repoLabel<span class="token operator">:</span> <span class="token string">&quot;Github&quot;</span><span class="token punctuation">,</span>
  footer<span class="token operator">:</span> <span class="token string">&quot;Try again!&quot;</span><span class="token punctuation">,</span>
  displayFooter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// [function]</span>
  encrypt<span class="token operator">:</span> <span class="token punctuation">{</span>
    global<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    admin<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  pageInfo<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;Author&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Date&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Tag&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Word&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  docsDir<span class="token operator">:</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span>
  docsBranch<span class="token operator">:</span> <span class="token string">&quot;master&quot;</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token comment">// [markdown]</span>
    mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
      tabs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      mathjax<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      sub<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      sup<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      codetabs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      tasklist<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      figure<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      imgLazyload<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      imgSize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      attrs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      mark<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      footnote<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      container<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      align<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      gfm<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    components<span class="token operator">:</span> <span class="token punctuation">{</span>
      components<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Badge&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Catalog&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;FontIcon&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// [advanced]</span>
    feed<span class="token operator">:</span> <span class="token punctuation">{</span>
      atom<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      json<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      rss<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      channel<span class="token operator">:</span> <span class="token punctuation">{</span>
        pubDate<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2023-01-27T07:21:58.634Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        ttl<span class="token operator">:</span> <span class="token number">1440</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    seo<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    sitemap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></li><li><p>navbar/zh.ts</p><details class="hint-container details"><summary>详情</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> zhNavbar <span class="token operator">=</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&quot;/summary&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token string">&quot;基石&quot;</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token string">&quot;material&quot;</span><span class="token punctuation">,</span>
  prefix<span class="token operator">:</span> <span class="token string">&quot;/cornerstone/&quot;</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token string">&quot;语言&quot;</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span>
  prefix<span class="token operator">:</span> <span class="token string">&quot;/language/&quot;</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token string">&quot;框架&quot;</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token string">&quot;cube&quot;</span><span class="token punctuation">,</span>
  prefix<span class="token operator">:</span> <span class="token string">&quot;/framework/&quot;</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token string">&quot;算法&quot;</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token string">&quot;branch&quot;</span><span class="token punctuation">,</span>
  prefix<span class="token operator">:</span> <span class="token string">&quot;/algorithm/&quot;</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token string">&quot;技术&quot;</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token string">&quot;fingerprint&quot;</span><span class="token punctuation">,</span>
  prefix<span class="token operator">:</span> <span class="token string">&quot;/technology/&quot;</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token string">&quot;哲学&quot;</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token string">&quot;relation&quot;</span><span class="token punctuation">,</span>
  prefix<span class="token operator">:</span> <span class="token string">&quot;/philosophy/&quot;</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token string">&quot;随笔&quot;</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token string">&quot;article&quot;</span><span class="token punctuation">,</span>
  prefix<span class="token operator">:</span> <span class="token string">&quot;/post/&quot;</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token string">&quot;其他&quot;</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> <span class="token string">&quot;others&quot;</span><span class="token punctuation">,</span>
  prefix<span class="token operator">:</span> <span class="token string">&quot;/other/&quot;</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></li><li><p>sidebar/zh.ts</p><details class="hint-container details"><summary>详情</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> zhSidebar <span class="token operator">=</span> <span class="token function">sidebar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;/cornerstone/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/language/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/framework/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/algorithm/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/technology/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/philosophy/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/post/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/other/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// summary root dic</span>
  <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;/summary&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;基石&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;material&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/cornerstone/&quot;</span><span class="token punctuation">,</span>
      collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;语言&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/language/&quot;</span><span class="token punctuation">,</span>
      collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;框架&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;cube&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/framework/&quot;</span><span class="token punctuation">,</span>
      collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;算法&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;branch&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/algorithm/&quot;</span><span class="token punctuation">,</span>
      collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;技术&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;fingerprint&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/technology/&quot;</span><span class="token punctuation">,</span>
      collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;哲学&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;relation&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/philosophy/&quot;</span><span class="token punctuation">,</span>
      collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;随笔&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;article&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/post/&quot;</span><span class="token punctuation">,</span>
      collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;其他&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;others&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/other/&quot;</span><span class="token punctuation">,</span>
      collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></li></ul>`,2);function E(T,V){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[s("关于配置文件的介绍以及配置的作用域查看 "),n("a",r,[s("VuePress Theme Hope → 小白教程 → 项目配置"),t(a)]),s(" 。")]),d,n("ol",k,[v,n("li",null,[m,b,q,n("p",null,[s("同时需要为每个分类准备一个文件夹和 "),n("a",g,[s("README.md"),t(a)]),s(" 文件，以及主页的 "),n("a",h,[s("README.md"),t(a)]),s(" 和目录 "),n("a",f,[s("summary.md"),t(a)]),s(" 文件。")])]),n("li",null,[n("p",null,[s("按照 "),n("a",y,[s("VuePress Theme Hope → 指南"),t(a)]),s(" 配置主题")])]),n("li",null,[n("p",null,[s("按照 "),n("a",_,[s("VuePress2 → 参考 → 配置"),t(a)]),s(" 配置站点")])]),n("li",null,[n("p",null,[s("按照 "),n("a",x,[s("VuePress Theme Hope → 配置"),t(a)]),s(" 配置其他的内容（可选）")])]),w]),z])}const A=e(l,[["render",E],["__file","02config.html.vue"]]);export{A as default};
