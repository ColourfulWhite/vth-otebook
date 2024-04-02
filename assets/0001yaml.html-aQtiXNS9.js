import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c as d,a as n,b as a,d as e,e as c}from"./app-G7VSIf0C.js";const o={},p=c(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>YAML 是 <strong>YAML Ain’t Markup Language</strong> 递归字母的缩写，意为 <strong>YAML不是一种标记语言。</strong></p><p>YAML 是一种易于阅读、跨语言、基于 Unicode 的数据序列化语言，适用于配置文件、消息传递、对象持久化、数据审计和可视化编程等等。</p><p>在现实应用中，YAML 非常适合用来做以数据为中心的配置文件，也被人们称为 <strong>Yet Another Markup Language</strong>、<strong>YAML A Markup Language</strong>.</p><p>YAML 文件的文件类型是 <code>.yaml</code> 或 <code>.yml</code> 。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><ul><li><p><code>key: value</code> 中冒号 <code>:</code> 后面的空格是必须的。</p></li><li><p>大小写敏感。</p></li><li><p>使用缩进表示层级关系，缩进不允许使用 <code>TAB</code> ，只允许使用空格。</p><p><strong>注：</strong> 缩进的空格数量并不重要，只要相同层级的元素左对齐即可。</p></li><li><p>注释以 <code>#</code> 开头。</p></li><li><p>字符串默认无需加引号，需要处理转义字符的时候才需要。</p></li></ul><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>YAML 有三种数据结构：</p><ul><li>标量 (scalars)：单个的、不可再分的值。</li><li>数组：一组按次序排列的值，又称为序列 (sequence) / 列表 (list) 。</li><li>对象：键值对的集合，又称为映射 (mapping) / 哈希 (hashes) / 字典 ( dictionary) 。</li></ul><h3 id="标量" tabindex="-1"><a class="header-anchor" href="#标量" aria-hidden="true">#</a> 标量</h3><p>标量是单个不可再分的值。比如整数、浮点数、字符串、布尔值、日期、空值等。</p><p><strong>整数、浮点数</strong>直接以字面量形式表示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span>
<span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">99.9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>布尔值</strong>使用 <code>true</code> 和 <code>false</code> 来表示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">man</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">girl</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>时间</strong>使用 ISO8601 格式：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">birth</span><span class="token punctuation">:</span> <span class="token datetime number">2022-07-31t14:45:30.10-05:00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>日期</strong>使用 ISO8601 格式的年、月、日：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2022-07-31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>日期和时间可以使用其他格式的字符串，只需要所使用的语言能够支持解释即可。</p></div><p><strong>空值</strong> (NULL) 使用 <code>~</code> :</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token null important">~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><p>字符串默认不使用引号表示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">str</span><span class="token punctuation">:</span> This is a string.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="单双引号" tabindex="-1"><a class="header-anchor" href="#单双引号" aria-hidden="true">#</a> 单双引号</h4><p>如果字符串之中包含空格或特殊字符，需要放到引号中：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">str</span><span class="token punctuation">:</span> <span class="token string">&quot;name: John&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以使用单引号和双引号，区别在于单引号会对特殊字符转义，而双引号不会：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 单引号 &#39; &#39;</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;hello \\n world&#39;</span>
<span class="token comment"># 上面解释后字符串为 &quot;hello \\\\n world&quot;</span>
<span class="token comment"># 输出到控制台为</span>
<span class="token comment"># hello \\n world</span>

<span class="token comment"># 双引号 &quot; &quot;</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;hello \\n world&quot;</span>
<span class="token comment"># 上面解释后字符串为 &quot;hello \\n world&quot;</span>
<span class="token comment"># 输出到控制台为</span>
<span class="token comment"># hello</span>
<span class="token comment">#  world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以理解为</p><ul><li>单引号 <code>&#39;&#39;</code> 引起来的字符串中，转义字符不会发生转义</li><li>双引号 <code>&quot;&quot;</code> 引起来的字符串中，转义字符会发生转义</li></ul><p>如果字符串使用单引号引起来时，字符串中还有单引号，则需要连续使用两个单引号转义：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">str</span><span class="token punctuation">:</span> &#39;Don&#39;&#39;t somke<span class="token tag">!&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="多行" tabindex="-1"><a class="header-anchor" href="#多行" aria-hidden="true">#</a> 多行</h4><p>字符串可以写成多行，从第二行开始，必须用空格缩进且左对齐，解释后换行符会被转换成空格：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">str</span><span class="token punctuation">:</span> This is
 multiple
 lines.
<span class="token comment"># 解析为 This is multiple lines.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多行字符串可以使用 <code>|</code> 保留换行符，也可以使用 <code>&gt;</code> 折叠换行：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">this</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
  Foo
  Bar</span>
<span class="token key atrule">that</span><span class="token punctuation">:</span> <span class="token punctuation">&gt;</span><span class="token scalar string">
  Foo
  Bar</span>

<span class="token comment"># 解析为 this: &#39;Foo\\nBar\\n&#39;, that: &#39;Foo Bar\\n&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 <code>+</code> 表示保留字符串末尾的换行，<code>-</code> 表示删除字符串末尾的空行：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">str1</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
  Foo</span>

<span class="token key atrule">str2</span><span class="token punctuation">:</span> <span class="token punctuation">|</span>+
  Foo


<span class="token key atrule">str3</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
  Foo

<span class="token comment"># 解释为 str1: &quot;Foo\\n&quot;, str2: &quot;Foo\\n\\n\\n&quot;, str3: &quot;Foo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><p>对象使用键值对表示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">animal</span><span class="token punctuation">:</span> cat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对象也可以进行嵌套：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 行内写法</span>
<span class="token key atrule">person</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> John<span class="token punctuation">,</span> <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">}</span>

<span class="token comment"># 多行写法</span>
<span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> John
  <span class="token punctuation">-</span> <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">10</span>

<span class="token comment"># 解释为 person: {name: &quot;John&quot;, age: 10}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><p>数组可以直接以普通的形式表示，这也称为行内写法：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span><span class="token string">&quot;Cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Dog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Goldfish&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>数组也可以用 <code>-</code> 开头的行表示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> Cat
<span class="token punctuation">-</span> Dog
<span class="token punctuation">-</span> Goldfish

<span class="token comment"># 解释为 [&quot;Cat&quot;, &quot;Dog&quot;, &quot;Glodfish&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组可以进行嵌套：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span>
 <span class="token punctuation">-</span> Cat
 <span class="token punctuation">-</span> Dog
 <span class="token punctuation">-</span> Goldfish
<span class="token punctuation">-</span> Pig

<span class="token comment"># 解释为 [[Cat, Dog, Goldfish], Pig]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复合结构" tabindex="-1"><a class="header-anchor" href="#复合结构" aria-hidden="true">#</a> 复合结构</h3><p>对象和数组可以结合使用，形成复合结构。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">languages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> C++
  <span class="token punctuation">-</span> Java
  <span class="token punctuation">-</span> Python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>languages: [&quot;C++&quot;, &quot;Java&quot;, &quot;Python&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p>锚点 <code>&amp;</code> 和别名 <code>*</code> ，可以用来引用。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">config</span><span class="token punctuation">:</span> <span class="token important">&amp;defaults</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> root
  <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost

<span class="token key atrule">development</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> development
  <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*defaults</span>

<span class="token key atrule">test</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span> test
  <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*defaults</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config:
  username: root
  host:     localhost

development:
  database: myapp_development
  username: root
  host:     localhost

test:
  database: myapp_test
  username: root
  host:     localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&amp;</code> 用来建立锚点，<code>&lt;&lt;</code> 表示合并到当前数据，<code>*</code> 用来引用锚点。</p><details class="hint-container details"><summary>另一个例子</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token important">&amp;showell</span> Steve
<span class="token punctuation">-</span> Clark
<span class="token punctuation">-</span> Brian
<span class="token punctuation">-</span> Oren
<span class="token punctuation">-</span> <span class="token important">*showell</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释为：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[&#39;Steve&#39;, &#39;Clark&#39;, &#39;Brian&#39;, &#39;Oren&#39;, &#39;Steve&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,67),u={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},r={href:"http://ruanyifeng.com/blog/2016/07/yaml.html",target:"_blank",rel:"noopener noreferrer"};function m(v,k){const s=i("ExternalLinkIcon");return t(),d("div",null,[p,n("ul",null,[n("li",null,[a("YAML 官网： "),n("a",u,[a("https://yaml.org/"),e(s)])]),n("li",null,[n("a",r,[a("YAML 语言教程 - 阮一峰的网络日志"),e(s)])])])])}const h=l(o,[["render",m],["__file","0001yaml.html.vue"]]);export{h as default};
