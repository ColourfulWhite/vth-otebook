import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as l,a as e,b as r,d as o,e as d}from"./app-G7VSIf0C.js";const h={},s=e("h2",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),r(" 简介")],-1),c={href:"https://en.wikipedia.org/wiki/John_Gruber",target:"_blank",rel:"noopener noreferrer"},p={href:"https://en.wikipedia.org/wiki/Aaron_Swartz",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"标准化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#标准化","aria-hidden":"true"},"#"),r(" 标准化")],-1),k=e("p",null,"Markdown 在创建之初只支持日常文档的格式排版，如标题、列表等。随着时间的推移，人们在此基础实现了一些额外的功能，如表格、脚注等。由于这些实现的语法没有一个明确的标准，这导致不同的 Markdown 应用程序在同一个实现上有自己的语法规则。",-1),u=e("p",null,"为了促使 Markdown 语法的标准化，从 2012 年开始，包括 Jeff Atwood 和 John MacFarlane 在内的一群人启动了标准化工作。但在 2014 年 9 月，John Gruber 反对这一工作继续使用 “Markdown” 这个名字，他认为不应该完全标准化：“Different sites (and people) have different needs. No one syntax would make all happy.”。最后这项工作被更名为 CommonMark。",-1),w={href:"https://commonmark.org/",target:"_blank",rel:"noopener noreferrer"},f=d('<h2 id="语法分类" tabindex="-1"><a class="header-anchor" href="#语法分类" aria-hidden="true">#</a> 语法分类</h2><p>Markdown 的语法可以分为两类，分别是基础语法和扩展语法。</p><h3 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h3><p>基础语法是 John Gruber 创建 Markdown 时定义的语法，包含以下元素：</p><ul><li>标题</li><li>段落与换行</li><li>强调</li><li>引用</li><li>列表</li><li>代码</li><li>链接</li><li>图片</li><li>分隔线</li><li>转义字符</li><li>内嵌 HTML 标签</li></ul><h3 id="扩展语法" tabindex="-1"><a class="header-anchor" href="#扩展语法" aria-hidden="true">#</a> 扩展语法</h3><p>扩展语法是一些个人或组织在基础语法上，添加了其他实现的语法。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>我的笔记都是放到 Github 上面进行版本管理的，所以这里介绍的的扩展语法是 GFM 所支持的。</p></div><p>一般包括以下元素：</p><ul><li>表格</li><li>代码块</li><li>删除线</li><li>任务列表</li></ul><div class="hint-container info"><p class="hint-container-title">块元素与行内元素</p><p>你可能会在后面的文章看到有些元素被称为块元素，而有些元素被称为行内元素。</p><p>如果你熟悉 HTML，这两个概念可能会让你感到困惑，所以在此简单说明 Markdown 中块元素和行内元素的定义与分类。</p><ul><li>块元素：与其他元素之间需要使用一个或以上空白行分隔的元素</li><li>行内元素：作用于一行中某些文本的元素</li></ul><p>空白行是指行内不包含任何内容或只有空白字符的行。</p><p>基础语法中，标题、段落、引用、列表、图片、分隔线都是块元素，换行、强调、代码和链接都是行内元素。</p><p>对于扩展语法，你可以根据上面的定义对元素进行分类，上面所提到的表格、代码块、删除线和任务列表都是块元素。</p></div><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后" aria-hidden="true">#</a> 写在最后</h2><p>一般来说，所有的 Markdown 应用程序都应该支持基础语法。</p><p>对于扩展语法，每个 Markdown 应用程序都有自己所支持的扩展语法，有些收费的 Markdown 编辑器会以独创的扩展语法作为卖点。</p><p>所以，当一个网站或应用程序说他们支持 Markdown 的时候，你需要阅读他们的文档，遵循他们所规定的语法。</p><div class="hint-container info"><p class="hint-container-title">Markdown 应用程序 和 Markdown 编辑器的区别</p><p>Markdown 应用程序指的是可以解析 Markdown 语法的程序，它可以作为一部分嵌入到网站或其他应用程序中。</p><p>Markdown 编辑器结合了文本编辑器和 Markdown 应用程序，是专门用来写 Markdown 文档的应用程序。</p></div><p>如果看到这里的你准备入门 Markdown，我有两个建议：</p>',17),m={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.vim.org/",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"对于扩展语法，尽可能选择有广泛支持的，这可以确保你的 Markdown 文档在不同的平台有较好的移植性。GFM 是一个不错的选择。Github 作为全球最大的代码免费托管平台，使得 GFM 在各大平台，各类 Markdown 编辑器都有不错的支持，而且你可以使用 Github 来管理和保存 Markdown 文档，不用担心文档丢失的问题。",-1),g=e("h2",{id:"附录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#附录","aria-hidden":"true"},"#"),r(" 附录")],-1),G=e("p",null,"相关标准",-1),v={href:"https://daringfireball.net/projects/markdown/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://commonmark.org/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.github.com/gfm/",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"相关文章",-1),L={href:"https://en.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.infoq.com/news/2014/09/markdown-commonmark/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.blog/2017-03-14-a-formal-spec-for-github-markdown/",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,"其他",-1),A={href:"https://github.com/mundimark/awesome-markdown",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/LearnShare/Learning-Markdown/tree/v2",target:"_blank",rel:"noopener noreferrer"},N={href:"https://markdown.com.cn/",target:"_blank",rel:"noopener noreferrer"};function H(I,T){const n=t("ExternalLinkIcon");return i(),l("div",null,[s,e("p",null,[r("Markdown 是一种轻量级标记语言，由 "),e("a",c,[r("John Gruber"),o(n)]),r(" 和 "),e("a",p,[r("Aaron Swartz"),o(n)]),r(" 在 2004 年创建，具有轻量化、易读易写等特性。")]),_,k,u,e("p",null,[e("a",w,[r("CommonMark.org"),o(n)]),r(" 发布了规范、参考实现和测试包的几个版本，并在 2019 年发布了最终的 1.0 规范和测试包。在 2017 年，Github 发布了基于 CommonMark 的 Github Flavored Markdown (GFM) 正式规范，扩展了对表格、删除线、自动链接和任务列表的实现。")]),f,e("ol",null,[e("li",null,[r("刚开始不要使用 WYSIWYG 的编辑器，Windows 用户（包括 macOS ）推荐使用 "),e("a",m,[r("Visual Studio Code"),o(n)]),r("，Linux 用户推荐使用 "),e("a",M,[r("Vim"),o(n)]),r("，这两个都是纯文本编辑器，可以通过配置看到空白符")]),b]),g,e("ul",null,[e("li",null,[G,e("ul",null,[e("li",null,[e("a",v,[r("Daring Fireball: Markdown"),o(n)]),r(". John Gruber 创建 Markdown 时的标准")]),e("li",null,[e("a",x,[r("CommonMark"),o(n)])]),e("li",null,[e("a",F,[r("Github Flavored Markdown (GFM)"),o(n)])])])]),e("li",null,[C,e("ul",null,[e("li",null,[e("a",L,[r("Markdown - Wikipedia"),o(n)])]),e("li",null,[e("a",S,[r("Standard Markdown Becomes Common Markdown then CommonMark"),o(n)])]),e("li",null,[e("a",J,[r("A formal spec for GitHub Flavored Markdown | The GitHub Blog"),o(n)])])])]),e("li",null,[V,e("ul",null,[e("li",null,[e("a",A,[r("Awesome-markdown"),o(n)])]),e("li",null,[e("a",B,[r("Introduction | Learning-Markdown (Markdown 入门参考)"),o(n)])]),e("li",null,[e("a",N,[r("Markdown 教程"),o(n)])])])])])])}const y=a(h,[["render",H],["__file","001introduction.html.vue"]]);export{y as default};
