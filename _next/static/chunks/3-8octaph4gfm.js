(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),a=a.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${a}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(71645);function a(e,t){let r=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=o(e,n)),t&&(a.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=e.r(18967),a=e.r(52817);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return m},useLinkStatus:function(){return _}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(90809),i=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),p=e.r(5550);e.r(33525);let f=e.r(88540),y=e.r(91949),h=e.r(73668),b=e.r(9396);function m(t){var r,n;let a,o,m,[_,j]=(0,s.useOptimistic)(y.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:k,as:w,children:x,prefetch:S=null,passHref:P,replace:N,shallow:C,scroll:E,onClick:T,onMouseEnter:L,onTouchStart:O,legacyBehavior:M=!1,onNavigate:I,transitionTypes:A,ref:R,unstable_dynamicOnHover:D,...F}=t;a=x,M&&("string"==typeof a||"number"==typeof a)&&(a=(0,i.jsx)("a",{children:a}));let U=s.default.useContext(c.AppRouterContext),J=!1!==S,K=!1!==S?null===(n=S)||"auto"===n?b.FetchStrategy.PPR:b.FetchStrategy.Full:b.FetchStrategy.PPR,z="string"==typeof(r=w||k)?r:(0,l.formatUrl)(r);if(M){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(a)}let $=M?o&&"object"==typeof o&&o.ref:R,q=s.default.useCallback(e=>(null!==U&&(v.current=(0,y.mountLinkInstance)(e,z,U,K,J,j)),()=>{v.current&&((0,y.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,y.unmountPrefetchableInstance)(e)}),[J,z,U,K,j]),B={ref:(0,u.useMergedRef)(q,$),onClick(t){M||"function"!=typeof T||T(t),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!U||t.defaultPrevented||function(t,r,n,a,o,i,l){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(r,a?"replace":"push",!1===o?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,n.current,l)})}}(t,z,v,N,E,I,A)},onMouseEnter(e){M||"function"!=typeof L||L(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),U&&J&&(0,y.onNavigationIntent)(e.currentTarget,!0===D)},onTouchStart:function(e){M||"function"!=typeof O||O(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),U&&J&&(0,y.onNavigationIntent)(e.currentTarget,!0===D)}};return(0,d.isAbsoluteUrl)(z)?B.href=z:M&&!P&&("a"!==o.type||"href"in o.props)||(B.href=(0,p.addBasePath)(z)),m=M?s.default.cloneElement(o,B):(0,i.jsx)("a",{...F,...B,children:a}),(0,i.jsx)(g.Provider,{value:_,children:m})}e.r(84508);let g=(0,s.createContext)(y.IDLE_LINK_STATUS),_=()=>(0,s.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},51879,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let n={"api_fetch.py":{description:"Data API Fetching & JSON Processing",code:`# API 数据获取与JSON处理 - API Data Fetching & JSON Processing
# 展示 Python 数据管道能力：API调用、JSON解析、数据清洗、统计分析

import json
from collections import Counter

# 模拟从 REST API 返回的 JSON 数据 (与 CNKI/专利数据库 API 响应结构类似)
api_response = '''
{
  "total": 197,
  "year_range": "1967-2024",
  "query": "潜油电泵 OR ESP submersible pump",
  "articles": [
    {"title": "Submersible pump vibration analysis using CNN", "year": 2023, "journal": "IEEE Trans. Ind. Electron.", "keywords": ["deep learning", "vibration", "fault diagnosis"], "citations": 28, "lang": "en"},
    {"title": "Smart manufacturing data acquisition framework", "year": 2022, "journal": "J. Manuf. Syst.", "keywords": ["data acquisition", "MES", "IoT"], "citations": 45, "lang": "en"},
    {"title": "ESP performance optimization via digital twin", "year": 2024, "journal": "IEEE Access", "keywords": ["digital twin", "ESP", "optimization"], "citations": 12, "lang": "en"},
    {"title": "Quality traceability in cable manufacturing", "year": 2021, "journal": "Int. J. Adv. Manuf. Technol.", "keywords": ["traceability", "quality control", "sensor"], "citations": 33, "lang": "en"},
    {"title": "Production line digital transformation case study", "year": 2023, "journal": "Comput. Ind.", "keywords": ["digitalization", "MES", "case study"], "citations": 19, "lang": "en"},
    {"title": "Machine learning for predictive maintenance", "year": 2022, "journal": "Reliab. Eng. Syst. Saf.", "keywords": ["machine learning", "predictive maintenance", "sensor"], "citations": 67, "lang": "en"},
    {"title": "Patent landscape of smart factory technologies", "year": 2023, "journal": "World Pat. Inf.", "keywords": ["patent analysis", "smart factory", "technology forecasting"], "citations": 8, "lang": "en"},
    {"title": "ESB数据采集系统设计", "year": 2022, "journal": "制造业自动化", "keywords": ["data acquisition", "MES", "PLC"], "citations": 5, "lang": "zh"},
    {"title": "基于深度学习的质量预测方法研究", "year": 2023, "journal": "计算机集成制造系统", "keywords": ["deep learning", "quality prediction", "manufacturing"], "citations": 15, "lang": "zh"},
    {"title": "制造执行系统数据追溯技术综述", "year": 2021, "journal": "机械工程学报", "keywords": ["MES", "traceability", "review"], "citations": 22, "lang": "zh"}
  ]
}
'''

print("=" * 56)
print("  API 数据获取与 JSON 处理  |  Data Pipeline Demo")
print("=" * 56)

# Step 1: Parse JSON (simulating API response parsing)
print("")
print(">>> Step 1: JSON Parsing")
data = json.loads(api_response)
print("API responded with %d records (status: 200 OK)" % data["total"])
print("Time range: %s" % data["year_range"])

# Step 2: Filter & Transform
print("")
print(">>> Step 2: Data Filtering (English-only articles)")
en_articles = [a for a in data["articles"] if a["lang"] == "en"]
zh_articles = [a for a in data["articles"] if a["lang"] == "zh"]
print("English: %d, Chinese: %d" % (len(en_articles), len(zh_articles)))

# Step 3: Extract & Analyze Keywords
print("")
print(">>> Step 3: Cross-language Keyword Frequency")
kw_counter = Counter()
for a in data["articles"]:
    for kw in a["keywords"]:
        kw_counter[kw.lower()] += 1

for kw in sorted(kw_counter, key=kw_counter.get, reverse=True):
    count = kw_counter[kw]
    bar = "=" * count
    print("  %-22s [%d] %s" % (kw, count, bar))

# Step 4: Citation Impact Analysis
print("")
print(">>> Step 4: Citation Distribution (Top 5)")
ranked = sorted(data["articles"], key=lambda x: x["citations"], reverse=True)
for i, a in enumerate(ranked[:5], 1):
    print("  %d. [%3d cites] %s" % (i, a["citations"], a["title"]))
total_cites = sum(a["citations"] for a in data["articles"])
avg_cites = total_cites / len(data["articles"])
print("  ----")
print("  Total citations: %d, Avg: %.1f" % (total_cites, avg_cites))

# Step 5: Journal Distribution
print("")
print(">>> Step 5: Journal Distribution")
journal_counts = Counter(a["journal"] for a in data["articles"])
for j in sorted(journal_counts, key=journal_counts.get, reverse=True):
    pct = journal_counts[j] / len(data["articles"]) * 100
    print("  %-36s %d (%.0f%%)" % (j, journal_counts[j], pct))

# Step 6: Year-over-year Trend
print("")
print(">>> Step 6: Publication Trend")
year_counts = Counter(a["year"] for a in data["articles"])
for y in sorted(year_counts):
    bar = "#" * year_counts[y]
    print("  %d: %s (%d)" % (y, bar, year_counts[y]))

print("")
print("=" * 56)
print("  Pipeline complete - real-time API + JSON + Analytics")
print("=" * 56)
`},"patent_mining.py":{description:"Patent Text Mining",code:`# 专利文本挖掘 - Patent Text Mining
# 展示 Python 文本分析能力：关键词提取、频次统计、主题聚类

from collections import Counter

# 模拟专利摘要 (基于制造业典型专利方向)
patents = [
    {
        "title": "电缆制造过程质量检测方法",
        "abstract": "一种基于深度学习的电缆制造过程质量检测方法，包括数据采集、特征提取和异常检测步骤，实现生产质量实时监控。",
        "year": 2022,
    },
    {
        "title": "电缆生产数据追溯系统",
        "abstract": "基于物联网的电缆生产全流程数据追溯系统，实现数据采集、存储与可视化展示，支持质量溯源分析。",
        "year": 2023,
    },
    {
        "title": "电缆MES数据采集装置",
        "abstract": "电缆制造MES系统的数据采集装置，涉及传感器数据读取、信号处理和传输模块，提升数据采集精度。",
        "year": 2021,
    },
    {
        "title": "智能制造质量预测方法",
        "abstract": "一种智能制造环境下的质量预测方法，利用机器学习算法对生产过程数据进行分析，提前预警质量异常。",
        "year": 2023,
    },
    {
        "title": "数据采集与质量追溯平台",
        "abstract": "电缆生产线数据采集与质量追溯一体化平台，包含数据采集、质量分析和追溯查询功能，支持远程访问。",
        "year": 2024,
    },
]

print("=" * 55)
print("  专利文本挖掘分析  |  Patent Text Mining")
print("=" * 55)

# 1. 关键词提取
tech_keywords = [
    "数据采集", "质量检测", "质量追溯", "质量预测",
    "物联网", "深度学习", "机器学习", "智能制造",
    "MES", "传感器", "可视化", "信号处理",
    "特征提取", "异常检测", "追溯系统",
]

print("")
print("专利总数: %d" % len(patents))
print("年份跨度: %d-%d" % (min(p["year"] for p in patents), max(p["year"] for p in patents)))

# 2. 关键词频次统计
print("")
print("-" * 55)
print("  技术关键词频次:")
keyword_counts = Counter()
for p in patents:
    for kw in tech_keywords:
        if kw in p["abstract"]:
            keyword_counts[kw] += 1

for kw in sorted(keyword_counts, key=keyword_counts.get, reverse=True):
    count = keyword_counts[kw]
    bar = "*" * count
    print("  %-10s [%d] %s" % (kw, count, bar))

# 3. 主题聚类
print("")
print("-" * 55)
print("  技术主题聚类:")

themes = {
    "数据采集": ["数据采集", "传感器", "信号处理", "物联网"],
    "质量分析": ["质量检测", "质量追溯", "质量预测", "异常检测"],
    "智能算法": ["深度学习", "机器学习", "特征提取"],
    "系统平台": ["MES", "追溯系统", "可视化", "智能制造"],
}

total_mentions = sum(keyword_counts.values())
for theme, kws in themes.items():
    count = sum(keyword_counts[k] for k in kws)
    pct = count / total_mentions * 100 if total_mentions > 0 else 0
    bar = "#" * int(pct / 4) + "-" * (25 - int(pct / 4))
    print("  %-10s %s %d次 (%.0f%%)" % (theme, bar, count, pct))

# 4. 技术趋势
print("")
print("-" * 55)
print("  年度技术热点:")
for year in sorted(set(p["year"] for p in patents)):
    year_patents = [p for p in patents if p["year"] == year]
    year_kws = Counter()
    for p in year_patents:
        for kw in tech_keywords:
            if kw in p["abstract"]:
                year_kws[kw] += 1
    top = sorted(year_kws, key=year_kws.get, reverse=True)[:3]
    print("  %d: %s" % (year, ", ".join(top)))

# 5. 热点总结
print("")
print("-" * 55)
if keyword_counts:
    top1 = sorted(keyword_counts, key=keyword_counts.get, reverse=True)[0]
    print("  最热技术点: %s (%d 次提及)" % (top1, keyword_counts[top1]))
    print("  核心方向: 数据采集 + 质量分析 + 智能制造")

print("")
print("分析完成 - 数据来源: 中国专利数据库")
`}},a="https://cdn.jsdelivr.net/pyodide/v0.26.2/full/",o=null;async function i(e,t){e.runPython(`
import sys
import io as _pyio
__stdout_capture = _pyio.StringIO()
sys.stdout = __stdout_capture
  `),await e.runPythonAsync(t);let r=e.runPython("__stdout_capture.getvalue()");return e.runPython("sys.stdout = sys.__stdout__"),r}e.s(["default",0,function({t:e}){let[s,l]=(0,r.useState)("api_fetch.py"),[c,u]=(0,r.useState)(""),[d,p]=(0,r.useState)(""),[f,y]=(0,r.useState)(!1),[h,b]=(0,r.useState)(null),[m,g]=(0,r.useState)("idle"),[_,j]=(0,r.useState)(""),v=(0,r.useRef)(null),k=(0,r.useRef)(null),w=(0,r.useRef)(null),x=(0,r.useRef)(null),S="custom"===s;(0,r.useEffect)(()=>{"idle"===m&&(g("loading"),(o||(o=new Promise((e,t)=>{if(document.querySelector('script[src*="pyodide.js"]')){let r=setInterval(()=>{window.loadPyodide&&(clearInterval(r),e(window.loadPyodide({indexURL:a})))},200);setTimeout(()=>{clearInterval(r),t(Error("Pyodide load timeout"))},3e4);return}let r=document.createElement("script");r.src=`${a}pyodide.js`,r.async=!0,r.onload=async()=>{try{let t=await window.loadPyodide({indexURL:a});e(t)}catch(e){t(e)}},r.onerror=()=>{t(Error("Failed to load Pyodide script"))},document.head.appendChild(r)}))).then(e=>{b(e),g("ready")}).catch(e=>{console.error("Pyodide load failed:",e),g("error")}))},[m]),(0,r.useEffect)(()=>{if(S)_||j(c||e.codeLab.codePlaceholder);else{let e=n[s];e&&j(e.code)}},[s,S]),(0,r.useEffect)(()=>{v.current&&(v.current.scrollTop=v.current.scrollHeight)},[d]);let P=(0,r.useCallback)(()=>{w.current&&x.current&&(x.current.scrollTop=w.current.scrollTop)},[]),N=_.split("\n").length,C=(0,r.useCallback)(e=>{let t=e.target.value;j(t),S&&u(t)},[S]),E=(0,r.useCallback)(e=>{if("Tab"===e.key){e.preventDefault();let t=e.currentTarget,r=t.selectionStart,n=t.selectionEnd,a=t.value,o=a.substring(0,r)+"    "+a.substring(n);j(o),S&&u(o),requestAnimationFrame(()=>{t.selectionStart=t.selectionEnd=r+4})}},[S]),T=(0,r.useCallback)(async()=>{if(h){y(!0),p("");try{if(!_.trim())return void p("Error: no code to execute");let e=await i(h,_);p(e||"(no output)")}catch(e){p("Error:\n"+(e instanceof Error?e.message:String(e)))}finally{y(!1)}}},[h,_]),L=(0,r.useCallback)(e=>{let t=e.target.files?.[0];if(!t)return;if(!t.name.endsWith(".py"))return void p("Error: only .py files are supported");let r=new FileReader;r.onload=e=>{let t=e.target?.result;j(t),S&&u(t),l("custom"),p("")},r.onerror=()=>{p("Error: failed to read file")},r.readAsText(t,"UTF-8"),e.target.value=""},[S]),O=(0,r.useCallback)(()=>p(""),[]);return(0,t.jsxs)("div",{className:"codelab-container",children:[(0,t.jsxs)("div",{className:"codelab-header",children:[(0,t.jsx)("h1",{className:"section-title",children:e.codeLab.title}),(0,t.jsx)("p",{className:"section-subtitle",children:e.codeLab.subtitle})]}),(0,t.jsxs)("div",{className:"codelab-tabs",children:[e.codeLab.demos.map(e=>(0,t.jsxs)("button",{className:`codelab-tab ${s===e.name?"active":""}`,onClick:()=>{l(e.name),p("")},children:[(0,t.jsx)("span",{className:"codelab-tab-dot"}),e.label,(0,t.jsx)("span",{className:"codelab-tab-file",children:".py"})]},e.name)),(0,t.jsxs)("button",{className:`codelab-tab ${S?"active":""}`,onClick:()=>{l("custom"),p("")},children:[(0,t.jsx)("span",{className:"codelab-tab-dot custom-dot"}),e.codeLab.custom]})]}),(0,t.jsxs)("div",{className:"codelab-main",children:[(0,t.jsxs)("div",{className:"codelab-editor-panel",children:[(0,t.jsxs)("div",{className:"codelab-editor-header",children:[(0,t.jsx)("span",{className:"codelab-filename",children:S?"custom.py":s}),(0,t.jsxs)("div",{className:"codelab-editor-actions",children:[(0,t.jsx)("button",{className:"codelab-upload-btn",onClick:()=>k.current?.click(),title:e.codeLab.uploadPy,children:(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,t.jsx)("path",{d:"M7 1v8M3.5 5L7 1.5 10.5 5M1 10v2a1 1 0 001 1h10a1 1 0 001-1v-2",stroke:"currentColor",strokeWidth:"1.3",fill:"none"})})}),(0,t.jsx)("input",{ref:k,type:"file",accept:".py",onChange:L,style:{display:"none"}}),(0,t.jsx)("span",{className:"codelab-lang-badge",children:"Python 3"})]})]}),(0,t.jsxs)("div",{className:"codelab-editor-body interactive",children:[(0,t.jsx)("div",{className:"codelab-line-numbers",ref:x,children:Array.from({length:Math.max(N,1)},(e,r)=>(0,t.jsx)("span",{children:r+1},r))}),(0,t.jsx)("textarea",{ref:w,className:"codelab-textarea",value:_,onChange:C,onKeyDown:E,onScroll:P,spellCheck:!1,wrap:"off",placeholder:e.codeLab.codePlaceholder})]})]}),(0,t.jsxs)("div",{className:"codelab-output-panel",children:[(0,t.jsxs)("div",{className:"codelab-output-header",children:[(0,t.jsx)("span",{children:e.codeLab.output}),(0,t.jsxs)("div",{className:"codelab-output-actions",children:["loading"===m&&(0,t.jsxs)("span",{className:"codelab-status loading",children:[(0,t.jsx)("span",{className:"codelab-spinner"}),e.codeLab.loading]}),"ready"===m&&(0,t.jsx)("span",{className:"codelab-status ready",children:e.codeLab.ready.substring(0,20)}),"error"===m&&(0,t.jsx)("span",{className:"codelab-status error",children:"Load failed"}),d&&(0,t.jsx)("button",{className:"codelab-clear-btn",onClick:O,title:e.codeLab.clearOutput,children:e.codeLab.clearOutput}),(0,t.jsx)("button",{className:"codelab-run-btn",onClick:T,disabled:f||!h,children:f?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"codelab-spinner"}),e.codeLab.running]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,t.jsx)("path",{d:"M3 1.5L12 7L3 12.5V1.5Z",fill:"currentColor"})}),e.codeLab.run]})})]})]}),(0,t.jsx)("div",{className:"codelab-output-content",ref:v,children:d?(0,t.jsx)("pre",{className:"codelab-output-text",children:d}):(0,t.jsxs)("div",{className:"codelab-output-placeholder",children:["loading"===m&&(0,t.jsx)("p",{children:e.codeLab.loading}),"ready"===m&&(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{className:"codelab-icon",children:"▶"})," ",e.codeLab.ready]}),"error"===m&&(0,t.jsx)("p",{style:{color:"var(--red-500)"},children:"Failed to load Python runtime. Please refresh the page."})]})})]})]})]})}],51879)}]);