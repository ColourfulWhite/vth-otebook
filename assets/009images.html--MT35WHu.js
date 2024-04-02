import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as l,a as e,d as o,e as c}from"./app-G7VSIf0C.js";const a="/assets/icon/guide-maskable.png",r={},d=c(`<p>Markdown 中插入图片的语法为 <code>![Name](URL &quot;Title&quot;)</code>。</p><p>图片会解析成 HTML 中的 <code>&lt;img&gt;</code> 标签，具体为 <code>&lt;img src=&quot;URL&quot; alt=&quot;Name&quot; title=&quot;Title&quot; /&gt;</code>。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>一张图片：

<span class="token url"><span class="token operator">!</span>[<span class="token content">maskable</span>](<span class="token url">/assets/icon/guide-maskable.png</span>)</span>

带有 Title 的图片，在鼠标移动到图片时会显示你定义的 Title：

<span class="token url"><span class="token operator">!</span>[<span class="token content">maskable</span>](<span class="token url">/assets/icon/guide-maskable.png</span> <span class="token string">&quot;IDEA&quot;</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><p>一张图片：</p><figure><img src="`+a+'" alt="maskable" tabindex="0" loading="lazy"><figcaption>maskable</figcaption></figure><p>带有 Title 的图片，在鼠标移动到图片时会显示你定义的 Title：</p><figure><img src="'+a+`" alt="maskable" tabindex="0" loading="lazy"><figcaption>IDEA</figcaption></figure><p>可以为图片添加链接，只需要将图片作为链接语法的 <code>Name</code> 即可。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">![maskable</span>](<span class="token url">/assets/icon/guide-maskable.png</span>)</span>](https://github.com)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果：</p>`,11),p={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},m=e("img",{src:a,alt:"maskable",tabindex:"0",loading:"lazy"},null,-1),u=e("figcaption",null,"maskable",-1);function g(k,b){const n=t("ExternalLinkIcon");return i(),l("div",null,[d,e("figure",null,[e("a",p,[m,o(n)]),u])])}const f=s(r,[["render",g],["__file","009images.html.vue"]]);export{f as default};