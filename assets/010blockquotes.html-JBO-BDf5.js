import{_ as c}from"./favicon-GHtoPB5P.js";import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as u,c as i,a as n,b as s,d as e,w as d,e as a}from"./app-G7VSIf0C.js";const k={},r=a(`<h2 id="块引用" tabindex="-1"><a class="header-anchor" href="#块引用" aria-hidden="true">#</a> 块引用</h2><p>在 Markdown 中使用 <code>&gt;</code> 创建一个块引用，语法是 <code>&gt; text</code>，其中 <code>&gt;</code> 与文本之间的空格是必须的。</p><p>块引用是一个块元素。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> Markdown is markup language.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果：</p><blockquote><p>Markdown is markup language.</p></blockquote>`,6),b=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> Markdown is markup language.
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> It&#39;s easy to learn.

<span class="token blockquote punctuation">&gt;</span> Markdown is markdown language.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token blockquote punctuation">&gt;</span> It&#39;s easy to learn.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><blockquote><p>Markdown is markup language.</p><p>It&#39;s easy to learn.</p></blockquote><blockquote><p>Markdown is markdown language.<br><br> It&#39;s easy to learn.</p></blockquote><p>需要注意的是，在块引用中，分隔段落的空白行要添加 <code>&gt;</code>，否则将变成两个块引用。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> Markdown is markup language.

<span class="token blockquote punctuation">&gt;</span> It&#39;s easy to learn.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><blockquote><p>Markdown is markup language.</p></blockquote><blockquote><p>It&#39;s easy to learn.</p></blockquote><h2 id="嵌套的块引用" tabindex="-1"><a class="header-anchor" href="#嵌套的块引用" aria-hidden="true">#</a> 嵌套的块引用</h2><p>块引用可以嵌套，只需要在一个块引用中加入 <code>&gt;</code> 即可。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> Markdown is markup language.
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;&gt;</span> It&#39;s easy to learn.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><blockquote><p>Markdown is markup language.</p><blockquote><p>It&#39;s easy to learn.</p></blockquote></blockquote><h2 id="含有其他元素的块引用" tabindex="-1"><a class="header-anchor" href="#含有其他元素的块引用" aria-hidden="true">#</a> 含有其他元素的块引用</h2><p>在块引用中可以使用其他 Markdown 基础语法。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> 标题：
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token title important"><span class="token punctuation">#</span> Hello</span>
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token blockquote punctuation">&gt;</span> 强调：
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token italic"><span class="token punctuation">*</span><span class="token content">斜体</span><span class="token punctuation">*</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token blockquote punctuation">&gt;</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content">粗体</span><span class="token punctuation">**</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token blockquote punctuation">&gt;</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token italic"><span class="token punctuation">*</span><span class="token content">粗斜体</span><span class="token punctuation">*</span></span></span><span class="token punctuation">**</span></span>
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token blockquote punctuation">&gt;</span> 列表：
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token list punctuation">-</span> 无序列表1
<span class="token blockquote punctuation">&gt;</span>     <span class="token list punctuation">-</span> 无序列表嵌套
<span class="token blockquote punctuation">&gt;</span> <span class="token list punctuation">-</span> 无序列表2
<span class="token blockquote punctuation">&gt;</span>     <span class="token list punctuation">1.</span> 有序列表嵌套
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token list punctuation">1.</span> 有序列表1
<span class="token blockquote punctuation">&gt;</span>     <span class="token list punctuation">-</span> 无序列表嵌套
<span class="token blockquote punctuation">&gt;</span> <span class="token list punctuation">2.</span> 有序列表2
<span class="token blockquote punctuation">&gt;</span>     <span class="token list punctuation">1.</span> 有序列表嵌套
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token blockquote punctuation">&gt;</span> 代码：
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token code-snippet code keyword">\`code\`</span>
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token blockquote punctuation">&gt;</span> 分隔线：
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token hr punctuation">---</span>
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token blockquote punctuation">&gt;</span> 链接：
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token url">[<span class="token content">Ackerven</span>](<span class="token url">https://ackerven.com</span>)</span>
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token blockquote punctuation">&gt;</span> 图片：
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token blockquote punctuation">&gt;</span> ![](/favicon.ico)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p>`,18),v=n("p",null,"标题：",-1),g=n("h1",{id:"hello",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hello","aria-hidden":"true"},"#"),s(" Hello")],-1),m=n("br",null,null,-1),q=n("p",null,[n("em",null,"斜体"),n("br"),n("br"),n("strong",null,"粗体"),n("br"),n("br"),n("em",null,[n("strong",null,"粗斜体")])],-1),h=n("br",null,null,-1),_=a("<ul><li>无序列表1 <ul><li>无序列表嵌套</li></ul></li><li>无序列表2 <ol><li>有序列表嵌套</li></ol></li></ul><ol><li>有序列表1 <ul><li>无序列表嵌套</li></ul></li><li>有序列表2 <ol><li>有序列表嵌套</li></ol></li></ol><br>",3),w=n("p",null,[n("code",null,"code")],-1),f=n("br",null,null,-1),x=n("hr",null,null,-1),M=n("br",null,null,-1),y={href:"https://ackerven.com",target:"_blank",rel:"noopener noreferrer"},I=n("br",null,null,-1),L=n("figure",null,[n("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function N(V,B){const o=t("RouterLink"),l=t("ExternalLinkIcon");return u(),i("div",null,[r,n("p",null,[s("块引用可以包含多个段落，也可以换行，语法与"),e(o,{to:"/language/markdown/003paragraphs-and-linebreaks.html"},{default:d(()=>[s("段落与换行")]),_:1}),s("一致。")]),b,n("blockquote",null,[v,g,m,s(" 强调： "),q,h,s(" 列表： "),_,s(" 代码： "),w,f,s(" 分隔线： "),x,M,s(" 链接： "),n("p",null,[n("a",y,[s("Ackerven"),e(l)])]),I,s(" 图片： "),L])])}const H=p(k,[["render",N],["__file","010blockquotes.html.vue"]]);export{H as default};
