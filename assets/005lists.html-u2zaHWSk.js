import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as i,e}from"./app-G7VSIf0C.js";const a={},l=e(`<p>Markdown 支持无序列表和有序列表。</p><p>这两种列表都是块元素。</p><h2 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h2><p>使用 <code>-</code>、<code>*</code> 或 <code>+</code> 创建一个无序列表。其中 <code>[-*+] text</code> 称为一个列表项。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 使用 <span class="token code-snippet code keyword">\`-\`</span> 创建的无序列表1
<span class="token list punctuation">-</span> 使用 <span class="token code-snippet code keyword">\`-\`</span> 创建的无序列表2

<span class="token list punctuation">*</span> 使用 <span class="token code-snippet code keyword">\`*\`</span> 创建的无序列表1
<span class="token list punctuation">*</span> 使用 <span class="token code-snippet code keyword">\`*\`</span> 创建的无序列表2

<span class="token list punctuation">+</span> 使用 <span class="token code-snippet code keyword">\`+\`</span> 创建的无序列表1
<span class="token list punctuation">+</span> 使用 <span class="token code-snippet code keyword">\`+\`</span> 创建的无序列表2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><ul><li>使用 <code>-</code> 创建的无序列表1</li><li>使用 <code>-</code> 创建的无序列表2</li></ul><ul><li>使用 <code>*</code> 创建的无序列表1</li><li>使用 <code>*</code> 创建的无序列表2</li></ul><ul><li>使用 <code>+</code> 创建的无序列表1</li><li>使用 <code>+</code> 创建的无序列表2</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>为了确保兼容性，请不要在同一个列表中使用不同的符号。</p></div><h2 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h2><p>使用数字加英文句号（即 <code>[1-9].</code>） 创建一个有序列表，其中 <code>[1-9]. text</code> 称为一个列表项。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> 有序列表1
<span class="token list punctuation">2.</span> 有序列表2
<span class="token list punctuation">3.</span> 有序列表3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><ol><li>有序列表1</li><li>有序列表2</li><li>有序列表3</li></ol><p>数字部分 <code>[1-9]</code> 不必顺序排列。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> 有序列表1
<span class="token list punctuation">3.</span> 有序列表2
<span class="token list punctuation">2.</span> 有序列表3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><ol><li>有序列表1</li><li>有序列表2</li><li>有序列表3</li></ol><p>数字部分如果不从 <code>1</code> 开始，会从你使用的数字开始编号。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">3.</span> 有序列表1
<span class="token list punctuation">1.</span> 有序列表2
<span class="token list punctuation">2.</span> 有序列表3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><ol start="3"><li>有序列表1</li><li>有序列表2</li><li>有序列表3</li></ol><div class="hint-container tip"><p class="hint-container-title">数字后面的符号选择</p><p>CommonMark 标准推荐使用 <code>)</code> 而不是 <code>.</code> (e.g. <code>1) 有序列表1</code>)，但并不是所有的 Markdown 应用程序都支持这种方式，所以推荐使用 <code>.</code> 而不是 <code>)</code>。</p></div><div class="hint-container tip"><p class="hint-container-title">列表项不需要手动换行</p><p>Markdown 的无序列表对应 HTML 的 <code>&lt;ol&gt;</code> 标签，有序列表对应 HTML 的 <code>&lt;ul&gt;</code> 标签。列表中的每个列表项对应 <code>&lt;li&gt;</code> 标签。所以每个列表项之间不需要使用结尾空格或 <code>&lt;br /&gt;</code> 手动换行。</p></div><h2 id="嵌套列表" tabindex="-1"><a class="header-anchor" href="#嵌套列表" aria-hidden="true">#</a> 嵌套列表</h2><p>有序列表和无序列表都支持嵌套，而且支持不同类型列表的嵌套。</p><p>你可以在有序列表中嵌套有序列表，也可以嵌套无序列表，反之亦然。</p><p>创建嵌套的列表项，只需要与上一个列表项的文本部分对齐（使用空格），然后继续添加列表项即可。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> 有序列表1
   <span class="token list punctuation">-</span> 有序列表中嵌套无序列表1
   <span class="token list punctuation">-</span> 有序列表中嵌套无序列表2
<span class="token list punctuation">2.</span> 有序列表2
   <span class="token list punctuation">1.</span> 有序列表中嵌套有序列表1
   <span class="token list punctuation">2.</span> 有序列表中嵌套有序列表2

<span class="token list punctuation">-</span> 无序列表1
  <span class="token list punctuation">1.</span> 无序列表中嵌套有序列表1
  <span class="token list punctuation">2.</span> 无序列表中嵌套有序列表2
<span class="token list punctuation">-</span> 无序列表2
  <span class="token list punctuation">-</span> 无序列表中嵌套无序列表1
  <span class="token list punctuation">-</span> 无序列表中嵌套无序列表2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><ol><li>有序列表1 <ul><li>有序列表中嵌套无序列表1</li><li>有序列表中嵌套无序列表2</li></ul></li><li>有序列表2 <ol><li>有序列表中嵌套有序列表1</li><li>有序列表中嵌套有序列表2</li></ol></li></ol><ul><li>无序列表1 <ol><li>无序列表中嵌套有序列表1</li><li>无序列表中嵌套有序列表2</li></ol></li><li>无序列表2 <ul><li>无序列表中嵌套无序列表1</li><li>无序列表中嵌套无序列表2</li></ul></li></ul><h2 id="列表中使用其他元素" tabindex="-1"><a class="header-anchor" href="#列表中使用其他元素" aria-hidden="true">#</a> 列表中使用其他元素</h2><p>如果要保留列表连续性的同时使用其他 Markdown 元素，只需要缩进四个空格即可。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于列表是块元素，与其他 Markdown 元素之间需要使用空白行进行分隔。</p></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> 有序列表1

<span class="token code keyword">    **强调**语法示例</span>

<span class="token list punctuation">2.</span> 有序列表2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><ol><li><p>有序列表1</p><p><strong>强调</strong>语法示例</p></li><li><p>有序列表2</p></li></ol>`,39),d=[l];function c(t,o){return s(),i("div",null,d)}const r=n(a,[["render",c],["__file","005lists.html.vue"]]);export{r as default};
