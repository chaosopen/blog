(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{352:function(a,t,_){"use strict";_.r(t);var s=_(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_4-2-内部工作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-内部工作流程"}},[a._v("#")]),a._v(" 4.2 内部工作流程")]),a._v(" "),t("h2",{attrs:{id:"_4-2-1-es文档查询原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-es文档查询原理"}},[a._v("#")]),a._v(" 4.2.1 ES文档查询原理")]),a._v(" "),t("h3",{attrs:{id:"_1-数据查询流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据查询流程"}},[a._v("#")]),a._v(" 1. 数据查询流程")]),a._v(" "),t("p",[a._v("通过ID查询数据")]),a._v(" "),t("ol",[t("li",[a._v("选择任意一个DataNode发送请求，此时，该DataNode成为Coordinating Node（协调节点）")]),a._v(" "),t("li",[a._v("计算要查询的分片")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("shard_num "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" % num_primary_shards\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("协调节点使用随机轮询算法进行路由，将请求随机发给对应分片/副本的节点，实现负载均衡。")]),a._v(" "),t("li",[a._v("协调节点当拿到节点返回的数据后，返回client")])]),a._v(" "),t("h3",{attrs:{id:"_2-数据检索流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据检索流程"}},[a._v("#")]),a._v(" 2. 数据检索流程")]),a._v(" "),t("ol",[t("li",[a._v("选择任意一个DataNode发送请求，此时，该DataNode成为Coordinating Node（协调节点）")]),a._v(" "),t("li",[a._v("协调节点把请求广播到所有DataNode节点，这些节点会处理该查询请求")]),a._v(" "),t("li",[a._v("查询每个分片/副本数据，将符合条件的数据放在队列中，将文档ID、节点信息、分片信息这些"),t("strong",[a._v("数据信息")]),a._v("返回给协调节点")]),a._v(" "),t("li",[a._v("协调节点将所有数据进行汇总，进行排序、分页")]),a._v(" "),t("li",[a._v("协调节点根据"),t("strong",[a._v("数据信息")]),a._v("（文档ID）发送Get请求拿到全部字段，等文档数据返回给协调节点，最终返回客户端")])]),a._v(" "),t("h2",{attrs:{id:"_4-2-2-es文档写入原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-es文档写入原理"}},[a._v("#")]),a._v(" 4.2.2 ES文档写入原理")]),a._v(" "),t("h3",{attrs:{id:"_1-数据写入流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据写入流程"}},[a._v("#")]),a._v(" 1. 数据写入流程")]),a._v(" "),t("ol",[t("li",[a._v("选择任意一个DataNode发送请求，此时，该DataNode成为Coordinating Node（协调节点）")]),a._v(" "),t("li",[a._v("计算要写入的分片")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("shard_num "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_routing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" % num_primary_shards\n")])])]),t("p",[a._v("_routing默认为id字段或者parent字段")]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("协调节点会进行路由，将请求转发给对应分片所在的DataNode，假设发到了Node1。")]),a._v(" "),t("li",[a._v("Node1节点上的主分片处理请求，写入索引后，并将数据同步到副本中，当"),t("strong",[a._v("一半数量的副本")]),a._v("同步成功后返回")]),a._v(" "),t("li",[a._v("协调节点拿到成功数据后，返回client")])]),a._v(" "),t("h3",{attrs:{id:"_2-分段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-分段"}},[a._v("#")]),a._v(" 2. 分段")]),a._v(" "),t("p",[a._v("一个索引有多个分片，一个分片会有多个段（segment）每个段都是一个倒排索引。")]),a._v(" "),t("p",[a._v("段具有不可变性，一旦索引的数据被写入硬盘，就不能再修改。"),t("br"),a._v("\n那么如何进行修改、删除呢？")]),a._v(" "),t("blockquote",[t("p",[a._v("在面对段的不可修改特性，ES采用不将文档从旧段中移除，而是新增一个.del文件，记录被 '改' 文档的段信息。")]),a._v(" "),t("p",[a._v("当用户检索时，文档依然可以被查询到，但他会在最终结果被返回前通过.del文件将其从结果集中移除。")]),a._v(" "),t("p",[a._v("如当更新数据时，会先创建一个段，然后将更新好的数据写入新段中，生成提交点，再在.del文件中标记旧段，从而达到更新的效果。")])]),a._v(" "),t("h3",{attrs:{id:"_3-缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-缓存"}},[a._v("#")]),a._v(" 3. 缓存")]),a._v(" "),t("p",[a._v("在ES中，索引写入磁盘是异步写入的。主要为了提升性能，故采用延迟写策略来解决同步磁盘问题。")]),a._v(" "),t("ol",[t("li",[a._v("新增文档时先写入JVM内存。")]),a._v(" "),t("li",[a._v("达到刷新时间（默认1秒）或内存数据达到量时，触发refresh刷新，将JVM内存数据生成到一个新的分段上，并到文件系统缓存中（注意这里不是磁盘），再删除JVM内存。（当生成段后便可以提供检索功能，不需要等刷到磁盘）。刷新时间可以在创建索引时设置参数 "),t("code",[a._v("refresh_interval")]),a._v("。")])]),a._v(" "),t("h3",{attrs:{id:"_4-translog-事务日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-translog-事务日志"}},[a._v("#")]),a._v(" 4. Translog 事务日志")]),a._v(" "),t("p",[a._v("ES运行时候，遇到意外情况，要么异常宕机，或者机器重启，在缓存没刷盘时，数据会丢，所以有事务日志来进行数据的故障恢复。")]),a._v(" "),t("p",[a._v("写入缓存的时候，每一次数据执行添加、修改、删除操作，都会记录事务日志。"),t("br"),a._v("\n事务日志默认同步刷盘，事务日志采用追加写的方式，是顺序IO，速度相对来说很快，也可以设置异步刷盘（5秒一次）")]),a._v(" "),t("h3",{attrs:{id:"_5-flush-刷盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-flush-刷盘"}},[a._v("#")]),a._v(" 5. Flush 刷盘")]),a._v(" "),t("p",[a._v("前面说数据到文件缓存系统时还没有到磁盘，需要Flush刷盘。")]),a._v(" "),t("p",[a._v("刷盘触发情况：默认30分钟一次或者translog大小达到512M阈值（太大有影响）。也可以调用API主动Flush。"),t("br"),a._v("\n等到文件系统缓存的段刷到磁盘中，清空旧的事务日志（段已经持久化了，不需要旧的日志做故障恢复了）。")]),a._v(" "),t("h3",{attrs:{id:"_6-段合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-段合并"}},[a._v("#")]),a._v(" 6. 段合并")]),a._v(" "),t("p",[a._v("由于refresh会创建一个新的段，段生成太多的时候，ES会把多个小段合并成为大的段。减少IO开销。此时真正的物理删除（删除delete的数据）")])])}),[],!1,null,null,null);t.default=r.exports}}]);