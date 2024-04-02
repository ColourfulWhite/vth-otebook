import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as l,c,a,b as s,d as t,e as o}from"./app-G7VSIf0C.js";const i={},u=o(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>XML (e<strong>X</strong>tensible <strong>M</strong>arkup <strong>L</strong>anguage) ，译为可扩展标记语言，是从标准通用标记语言 (SGML) 中简化修改出来，用于传输和存储数据的。</p><p>XML 的写法与 HTML 很类似，区别在于 XML 用于传输和存储数据，而 HTML 则用来表现数据。</p><p>XML 文件的文件类型是 <code>.xml</code> 。</p><h2 id="xml-语法" tabindex="-1"><a class="header-anchor" href="#xml-语法" aria-hidden="true">#</a> XML 语法</h2><p>语法正确的 XML 文档被称为 “形式良好” 的 XML。</p><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><p>XML 中的注释与 HTML 类似，使用 <code>&lt;!-- --&gt;</code> 。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 注释文本 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span>
    ......
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h3><p>XML 的声明部分需要放到文档的第一行，且以 <code>&lt;?xml</code> 开头，<code>?&gt;</code> 结尾，可以在此声明中声明 XML 的版本和 XML 文档所使用的编码格式。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.2&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span>
    ......
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上声明这个 XML 文档使用的 XML 版本是 1.2，使用 UTF-8 的字符集编码格式。</p><h3 id="换行符" tabindex="-1"><a class="header-anchor" href="#换行符" aria-hidden="true">#</a> 换行符</h3><p>XML 中的使用 LF 来存储换行。</p><p>注：Windows 系统的换汉符由回车符（CR）和换行符（LF）组成。</p><h3 id="大小写敏感" tabindex="-1"><a class="header-anchor" href="#大小写敏感" aria-hidden="true">#</a> 大小写敏感</h3><p>必须使用相同大小写的编写开始标签和结束标签。<code>&lt;root&gt;</code> 与 <code>&lt;/ROOT&gt;</code> 是两个不同的标签。</p><h3 id="xml-会保留空格" tabindex="-1"><a class="header-anchor" href="#xml-会保留空格" aria-hidden="true">#</a> XML 会保留空格</h3><p>在 HTML 中，多个连续的空格会被裁减（合并）成一个空格，但在 XML 中，空格不会被删减。</p><h3 id="属性值必须加引号" tabindex="-1"><a class="header-anchor" href="#属性值必须加引号" aria-hidden="true">#</a> 属性值必须加引号</h3><p>XML 元素可以拥有属性，但属性值必须加引号。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span> <span class="token attr-name">age</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素必须正确嵌套" tabindex="-1"><a class="header-anchor" href="#元素必须正确嵌套" aria-hidden="true">#</a> 元素必须正确嵌套</h3><p>在 XML 中，所有的元素都必须正确嵌套，不能交叉嵌套。</p><p>正确嵌套是指一个开始标签和一个结束标签中不能有其他开始标签或结束标签。</p><div class="hint-container warning"><p class="hint-container-title">错误实例</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>This is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>string.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子中，<code>&lt;i&gt;&lt;/i&gt;</code> 的 开始标签嵌套在 <code>&lt;b&gt;&lt;/b&gt;</code> 标签中。</p></div><h3 id="必须要有结束标签" tabindex="-1"><a class="header-anchor" href="#必须要有结束标签" aria-hidden="true">#</a> 必须要有结束标签</h3><p>在 XML 中，所有的元素都必须有结束标签，否则会产生错误。</p><div class="hint-container warning"><p class="hint-container-title">错误示例</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>A
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">&gt;</span></span>18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="必须要有根元素" tabindex="-1"><a class="header-anchor" href="#必须要有根元素" aria-hidden="true">#</a> 必须要有根元素</h3><p>XML 必须包含根元素，它是所有其他元素的父元素。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>subchild</span><span class="token punctuation">&gt;</span></span>
            ......
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>subchild</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>&lt;root&gt;&lt;/root&gt;</code> 就是根元素。</p><h3 id="实体引用" tabindex="-1"><a class="header-anchor" href="#实体引用" aria-hidden="true">#</a> 实体引用</h3><p>在 XML 中，有一些字符有特殊的意义，需要使用实体引用来代替。</p><p>在 XML 中，有 5 个预定义的实体引用：</p><table><thead><tr><th>特殊字符</th><th>意义</th><th>实体引用</th></tr></thead><tbody><tr><td>&lt;</td><td>less than</td><td><code>&amp;lt;</code></td></tr><tr><td>&gt;</td><td>greater than</td><td><code>&amp;gt;</code></td></tr><tr><td>&amp;</td><td>ampersand</td><td><code>&amp;amp;</code></td></tr><tr><td>&#39;</td><td>apostrophe</td><td><code>&amp;apos;</code></td></tr><tr><td>&quot;</td><td>quotation mark</td><td><code>&amp;quot;</code></td></tr></tbody></table><p>虽然直接使用 <code>&gt;</code> 是合法的，但推荐使用实体引用。</p><h2 id="xml-元素" tabindex="-1"><a class="header-anchor" href="#xml-元素" aria-hidden="true">#</a> XML 元素</h2><p>XML 元素指的是从开始标签直到结束标签的部分。</p><p>一个元素可以包含：</p><ul><li>其他元素</li><li>文本</li><li>属性</li></ul><p>元素与元素是可以嵌套的。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bookstore</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>book</span> <span class="token attr-name">category</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CHILDREN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Harry Potter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>author</span><span class="token punctuation">&gt;</span></span>J K. Rowling<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>author</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>year</span><span class="token punctuation">&gt;</span></span>2005<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>year</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>price</span><span class="token punctuation">&gt;</span></span>29.99<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>price</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>book</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>book</span> <span class="token attr-name">category</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>WEB<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Learning XML<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>author</span><span class="token punctuation">&gt;</span></span>Erik T. Ray<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>author</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>year</span><span class="token punctuation">&gt;</span></span>2003<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>year</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>price</span><span class="token punctuation">&gt;</span></span>39.95<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>price</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>book</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bookstore</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h3><p>XML 元素的名称虽然是自定义的，但需要遵循以下规则：</p><ul><li>可以包含字母、数组以及其他字符</li><li>不能以数字或者标点符号开始</li><li>不能以 xml 开始（XML, XMl, XmL, Xml, xmL 也不行）</li><li>不能包含空格</li></ul><h2 id="xml-属性" tabindex="-1"><a class="header-anchor" href="#xml-属性" aria-hidden="true">#</a> XML 属性</h2><p>XML 的元素可以像 HTML 一样，具有属性。属性（Attribute）提供有关元素的额外信息。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gif<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>computer.gif<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;flie&gt;</code> 元素的属性 <code>type</code> 说明文件类型。文件类型对于数据来说并不重要，但是对于处理这个元素的软件来说很重要。</p><p>XML 属性的<strong>属性值</strong>必须使用引号，但不限制使用引号的类型，可以是单引号 <code>&#39;</code> ，也可以是双引号 <code>&quot;</code> 。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>gif<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>computer.gif<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>person</span> <span class="token attr-name">sex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>female<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>person</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果字符串本身就有某种引号，可以使用另一种引号，也可以使用实体引用。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>person</span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>He&#39;s is a good man!<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>person</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>animal</span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>This<span class="token entity named-entity" title="&#39;">&amp;apos;</span>s a good dog!<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>animal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素-or-属性" tabindex="-1"><a class="header-anchor" href="#元素-or-属性" aria-hidden="true">#</a> 元素 or 属性</h3><p>使用属性会引入一些问题：</p><ul><li>属性不能包含多个值（元素可以）</li><li>属性不能包含树结构（元素可以）</li><li>属性不容易扩展（为未来的变化）</li></ul><p>建议元数据（数据的数据）使用属性，而数据本身存为元素。</p><h2 id="xml-命名空间" tabindex="-1"><a class="header-anchor" href="#xml-命名空间" aria-hidden="true">#</a> XML 命名空间</h2><p>由于在 XML 中，元素名称是由开发者定义的，当两个不同的文档中使用相同的元素名称时，就会发生命名冲突。</p><p>在这个 XML 中，table 表示表格信息：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Apples<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Bananas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个 XML 中，table 表示桌子：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>African Coffee Table<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>width</span><span class="token punctuation">&gt;</span></span>80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>width</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>length</span><span class="token punctuation">&gt;</span></span>120<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>length</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这两个 XML 文件同时被解析的话，<code>&lt;table&gt;</code> 元素就会发生命名冲突。</p><p>可以通过使用前缀避免命名冲突。使用前缀时，需要使用 <code>xmlns</code> 属性定义命名空间。当命令空间被定义在元素的开始标签时，所有带有相同前缀的子元素都会与同一个命名空间相关联。</p><p><code>xmlns</code> 属性的语法：<code>xmlns:&lt;namespace&gt;=&quot;&lt;uniqueName&gt;&quot;</code>。</p><p>属性值 <code>&lt;uniqueName&gt;</code> 要求是唯一的，所以在实际应用中，一般使用指向命名空间说明页面的 URL 作为命名空间的值。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">h:</span>table</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>h</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>URL1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">h:</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">h:</span>td</span><span class="token punctuation">&gt;</span></span>Apples<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">h:</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">h:</span>td</span><span class="token punctuation">&gt;</span></span>Bananas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">h:</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">h:</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">h:</span>table</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">f:</span>table</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>f</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>URL2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">f:</span>name</span><span class="token punctuation">&gt;</span></span>African Coffee Table<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">f:</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">f:</span>width</span><span class="token punctuation">&gt;</span></span>80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">f:</span>width</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">f:</span>length</span><span class="token punctuation">&gt;</span></span>120<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">f:</span>length</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">f:</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xmlns 属性也可以直接在父元素中声明：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>h</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>URL1<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>f</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>URL2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">h:</span>table</span><span class="token punctuation">&gt;</span></span>
        ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">h:</span>table</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">f:</span>table</span><span class="token punctuation">&gt;</span></span>
        ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">f:</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果省略 <code>&lt;namespace&gt;</code> ，则定义的是默认空间，所有省略前缀的元素都会归属到默认空间。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>URL1<span class="token punctuation">&quot;</span></span><span class="token attr-name">,</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>URL2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>person</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xls:</span>name</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">xls:</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>person</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cdata" tabindex="-1"><a class="header-anchor" href="#cdata" aria-hidden="true">#</a> CDATA</h2><p>XML 文档中所有文本均会被解析器解析，这是因为 XML 元素之间可能包含其他元素。</p><p>只有 CDATA 区段中的文本才会被解析器忽略。</p><p>CDATA 部分由 <code>&lt;![CDATA[</code> 开始，由 <code>]]&gt;</code> 结束。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">&gt;</span></span>
<span class="token cdata">&lt;![CDATA[
    a + b &lt; c
]]&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，在 CDATA 区段内的字符串不能包含 <code>]]&gt;</code> ，且 CDATA 不允许嵌套使用。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,82),d={href:"https://www.runoob.com/xml/xml-tutorial.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.w3school.com.cn/xml/index.asp",target:"_blank",rel:"noopener noreferrer"};function r(g,m){const n=e("ExternalLinkIcon");return l(),c("div",null,[u,a("ul",null,[a("li",null,[a("a",d,[s("XML 教程 | 菜鸟教程"),t(n)])]),a("li",null,[a("a",k,[s("XML 教程 | w3school"),t(n)])])])])}const b=p(i,[["render",r],["__file","0003xml.html.vue"]]);export{b as default};
