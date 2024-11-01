layui.define(["layer", "form"],
function(gKf) {
    "use strict";
    var IbL = layui.$,
    aXd = layui.layer,
    ddg = layui.form,
    cPc = (layui.hint(), layui.device()),
    PbZ = "layedit",
    eDa = "layui-show",
    ddC = "layui-disabled",
    fQd = function() {
        var gKf = this;
        gKf.index = 0,
        gKf.config = {
            tool: ["strong", "italic", "underline", "del", "|", "left", "center", "right", "|", "link", "unlink", "face", "image"],
            hideTool: [],
            height: 280
        }
    };
    fQd.prototype.set = function(gKf) {
        var aXd = this;
        return IbL.extend(!0, aXd.config, gKf),
        aXd
    },
    fQd.prototype.on = function(gKf, IbL) {
        return layui.onevent(PbZ, gKf, IbL)
    },
    fQd.prototype.build = function(gKf, aXd) {
        aXd = aXd || {};
        var ddg = this,
        PbZ = ddg.config,
        ddC = "layui-layedit",
        fQd = IbL("string" == typeof gKf ? "#" + gKf: gKf),
        cFh = "LAY_layedit_" + ++ddg.index,
        aeZ = fQd.next("." + ddC),
        aCc = IbL.extend({},
        PbZ, aXd),
        CfU = function() {
            var gKf = [],
            IbL = {};
            return layui.each(aCc.hideTool,
            function(gKf, aXd) {
                IbL[aXd] = !0
            }),
            layui.each(aCc.tool,
            function(aXd, ddg) {
                aXdgKf[ddg] && !IbL[ddg] && gKf.push(aXdgKf[ddg])
            }),
            gKf.join("")
        } (),
        cYe = IbL(['<div class="' + ddC + '">', '<div class="layui-unselect layui-layedit-tool">' + CfU + "</div>", '<div class="layui-layedit-iframe">', '<iframe id="' + cFh + '" name="' + cFh + '" textarea="' + gKf + '" frameborder="0"></iframe>', "</div>", "</div>"].join(""));
        return cPc.ie && cPc.ie < 8 ? fQd.removeClass("layui-hide").addClass(eDa) : (aeZ[0] && aeZ.remove(), jcV.call(ddg, cYe, fQd[0], aCc), fQd.addClass("layui-hide").after(cYe), ddg.index)
    },
    fQd.prototype.getContent = function(gKf) {
        var IbL = cFh(gKf);
        if (IbL[0]) return aeZ(IbL[0].document.body.innerHTML)
    },
    fQd.prototype.getText = function(gKf) {
        var aXd = cFh(gKf);
        if (aXd[0]) return IbL(aXd[0].document.body).text()
    },
    fQd.prototype.setContent = function(gKf, aXd, ddg) {
        var cPc = cFh(gKf);
        cPc[0] && (ddg ? IbL(cPc[0].document.body).append(aXd) : IbL(cPc[0].document.body).html(aXd), layedit.sync(gKf))
    },
    fQd.prototype.sync = function(gKf) {
        var aXd = cFh(gKf);
        if (aXd[0]) {
            var ddg = IbL("#" + aXd[1].attr("textarea"));
            ddg.val(aeZ(aXd[0].document.body.innerHTML))
        }
    },
    fQd.prototype.getSelection = function(gKf) {
        var IbL = cFh(gKf);
        if (IbL[0]) {
            var aXd = cYe(IbL[0].document);
            return document.selection ? aXd.text: aXd.toString()
        }
    };
    var jcV = function(gKf, aXd, ddg) {
        var cPc = this,
        PbZ = gKf.find("iframe");
        PbZ.css({
            height: ddg.height
        }).on("load",
        function() {
            var eDa = PbZ.contents(),
            ddC = PbZ.prop("contentWindow"),
            fQd = eDa.find("head"),
            jcV = IbL(["<style>", "*{margin: 0; padding: 0;}", "body{padding: 10px; line-height: 20px; overflow-x: hidden; word-wrap: break-word; font: 14px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Tahoma,Arial,sans-serif; -webkit-box-sizing: border-box !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important;}", "a{color:#01AAED; text-decoration:none;}a:hover{color:#c00}", "p{margin-bottom: 10px;}", "img{display: inline-block; border: none; vertical-align: middle;}", "pre{margin: 10px 0; padding: 10px; line-height: 20px; border: 1px solid #ddd; border-left-width: 6px; background-color: #F2F2F2; color: #333; font-family: Courier New; font-size: 12px;}", "</style>"].join("")),
            cFh = eDa.find("body");
            fQd.append(jcV),
            cFh.attr("contenteditable", "true").css({
                "min-height": ddg.height
            }).html(aXd.value || ""),
            aCc.apply(cPc, [ddC, PbZ, aXd, ddg]),
            eAf.call(cPc, ddC, gKf, ddg)
        })
    },
    cFh = function(gKf) {
        var aXd = IbL("#LAY_layedit_" + gKf),
        ddg = aXd.prop("contentWindow");
        return [ddg, aXd]
    },
    aeZ = function(gKf) {
        return 8 == cPc.ie && (gKf = gKf.replace(/<.+>/g,
        function(gKf) {
            return gKf.toLowerCase()
        })),
        gKf
    },
    aCc = function(gKf, ddg, PbZ, eDa) {
        var ddC = gKf.document,
        fQd = IbL(ddC.body);
        fQd.on("keydown",
        function(gKf) {
            var IbL = gKf.keyCode;
            if (13 === IbL) {
                var ddg = cYe(ddC),
                cPc = Hdi(ddg),
                PbZ = cPc.parentNode;
                if ("pre" === PbZ.tagName.toLowerCase()) {
                    if (gKf.shiftKey) return;
                    return aXd.msg("请暂时用shift+enter"),
                    !1
                }
                ddC.execCommand("formatBlock", !1, "<p>")
            }
        }),
        IbL(PbZ).parents("form").on("submit",
        function() {
            var gKf = fQd.html();
            8 == cPc.ie && (gKf = gKf.replace(/<.+>/g,
            function(gKf) {
                return gKf.toLowerCase()
            })),
            PbZ.value = gKf
        }),
        fQd.on("paste",
        function(IbL) {
            ddC.execCommand("formatBlock", !1, "<p>"),
            setTimeout(function() {
                CfU.call(gKf, fQd),
                PbZ.value = fQd.html()
            },
            100)
        })
    },
    CfU = function(gKf) {
        var aXd = this;
        aXd.document;
        gKf.find("*[style]").each(function() {
            var gKf = this.style.textAlign;
            this.removeAttribute("style"),
            IbL(this).css({
                "text-align": gKf || ""
            })
        }),
        gKf.find("table").addClass("layui-table"),
        gKf.find("script,link").remove()
    },
    cYe = function(gKf) {
        return gKf.selection ? gKf.selection.createRange() : gKf.getSelection().getRangeAt(0)
    },
    Hdi = function(gKf) {
        return gKf.endContainer || gKf.parentElement().childNodes[0]
    },
    eeg = function(gKf, aXd, ddg) {
        var cPc = this.document,
        PbZ = document.createElement(gKf);
        for (var eDa in aXd) PbZ.setAttribute(eDa, aXd[eDa]);
        if (PbZ.removeAttribute("text"), cPc.selection) {
            var ddC = ddg.text || aXd.text;
            if ("a" === gKf && !ddC) return;
            ddC && (PbZ.innerHTML = ddC),
            ddg.pasteHTML(IbL(PbZ).prop("outerHTML")),
            ddg.select()
        } else {
            var ddC = ddg.toString() || aXd.text;
            if ("a" === gKf && !ddC) return;
            ddC && (PbZ.innerHTML = ddC),
            ddg.deleteContents(),
            ddg.insertNode(PbZ)
        }
    },
    KcH = function(gKf, aXd) {
        var ddg = this.document,
        cPc = "layedit-tool-active",
        PbZ = Hdi(cYe(ddg)),
        eDa = function(IbL) {
            return gKf.find(".layedit-tool-" + IbL)
        };
        aXd && aXd[aXd.hasClass(cPc) ? "removeClass": "addClass"](cPc),
        gKf.find(">i").removeClass(cPc),
        eDa("unlink").addClass(ddC),
        IbL(PbZ).parents().each(function() {
            var gKf = this.tagName.toLowerCase(),
            IbL = this.style.textAlign;
            "b" !== gKf && "strong" !== gKf || eDa("b").addClass(cPc),
            "i" !== gKf && "em" !== gKf || eDa("i").addClass(cPc),
            "u" === gKf && eDa("u").addClass(cPc),
            "strike" === gKf && eDa("d").addClass(cPc),
            "p" === gKf && ("center" === IbL ? eDa("center").addClass(cPc) : "right" === IbL ? eDa("right").addClass(cPc) : eDa("left").addClass(cPc)),
            "a" === gKf && (eDa("link").addClass(cPc), eDa("unlink").removeClass(ddC))
        })
    },
    eAf = function(gKf, ddg, cPc) {
        var PbZ = gKf.document,
        eDa = IbL(PbZ.body),
        fQd = {
            link: function(aXd) {
                var ddg = Hdi(aXd),
                cPc = IbL(ddg).parent();
                MgL.call(eDa, {
                    href: cPc.attr("href"),
                    target: cPc.attr("target")
                },
                function(IbL) {
                    var ddg = cPc[0];
                    "A" === ddg.tagName ? ddg.href = IbL.url: eeg.call(gKf, "a", {
                        target: IbL.target,
                        href: IbL.url,
                        text: IbL.url
                    },
                    aXd)
                })
            },
            unlink: function(gKf) {
                PbZ.execCommand("unlink")
            },
            face: function(IbL) {
                gKfgKf.call(this,
                function(aXd) {
                    eeg.call(gKf, "img", {
                        src: aXd.src,
                        alt: aXd.alt
                    },
                    IbL)
                })
            },
            image: function(ddg) {
                var PbZ = this;
                layui.use("upload",
                function(eDa) {
                    var ddC = cPc.uploadImage || {};
                    eDa.render({
                        url: ddC.url,
                        method: ddC.type,
                        elem: IbL(PbZ).find("input")[0],
                        done: function(IbL) {
                            0 == IbL.code ? (IbL.data = IbL.data || {},
                            eeg.call(gKf, "img", {
                                src: IbL.data.src,
                                alt: IbL.data.title
                            },
                            ddg)) : aXd.msg(IbL.msg || "上传失败")
                        }
                    })
                })
            },
            code: function(IbL) {
                IbLgKf.call(eDa,
                function(aXd) {
                    eeg.call(gKf, "pre", {
                        text: aXd.code,
                        "lay-lang": aXd.lang
                    },
                    IbL)
                })
            },
            help: function() {
                aXd.open({
                    type: 2,
                    title: "帮助",
                    area: ["600px", "380px"],
                    shadeClose: !0,
                    shade: .1,
                    skin: "layui-layer-msg",
                    content: ["http://www.layui.com/about/layedit/help.html", "no"]
                })
            }
        },
        jcV = ddg.find(".layui-layedit-tool"),
        cFh = function() {
            var aXd = IbL(this),
            ddg = aXd.attr("layedit-event"),
            cPc = aXd.attr("lay-command");
            if (!aXd.hasClass(ddC)) {
                eDa.focus();
                var cFh = cYe(PbZ);
                cFh.commonAncestorContainer;
                cPc ? (PbZ.execCommand(cPc), /justifyLeft|justifyCenter|justifyRight/.test(cPc) && PbZ.execCommand("formatBlock", !1, "<p>"), setTimeout(function() {
                    eDa.focus()
                },
                10)) : fQd[ddg] && fQd[ddg].call(this, cFh),
                KcH.call(gKf, jcV, aXd)
            }
        },
        aeZ = /image/;
        jcV.find(">i").on("mousedown",
        function() {
            var gKf = IbL(this),
            aXd = gKf.attr("layedit-event");
            aeZ.test(aXd) || cFh.call(this)
        }).on("click",
        function() {
            var gKf = IbL(this),
            aXd = gKf.attr("layedit-event");
            aeZ.test(aXd) && cFh.call(this)
        }),
        eDa.on("click",
        function() {
            KcH.call(gKf, jcV),
            aXd.close(gKfgKf.index)
        })
    },
    MgL = function(gKf, IbL) {
        var cPc = this,
        PbZ = aXd.open({
            type: 1,
            id: "LAY_layedit_link",
            area: "350px",
            shade: .05,
            shadeClose: !0,
            moveType: 1,
            title: "超链接",
            skin: "layui-layer-msg",
            content: ['<ul class="layui-form" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">URL</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input name="url" lay-verify="url" value="' + (gKf.href || "") + '" autofocus="true" autocomplete="off" class="layui-input">', "</div>", "</li>", '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">打开方式</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input type="radio" name="target" value="_self" class="layui-input" title="当前窗口"' + ("_self" !== gKf.target && gKf.target ? "": "checked") + ">", '<input type="radio" name="target" value="_blank" class="layui-input" title="新窗口" ' + ("_blank" === gKf.target ? "checked": "") + ">", "</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-link-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', "</li>", "</ul>"].join(""),
            success: function(gKf, PbZ) {
                var eDa = "submit(layedit-link-yes)";
                ddg.render("radio"),
                gKf.find(".layui-btn-primary").on("click",
                function() {
                    aXd.close(PbZ),
                    cPc.focus()
                }),
                ddg.on(eDa,
                function(gKf) {
                    aXd.close(MgL.index),
                    IbL && IbL(gKf.field)
                })
            }
        });
        MgL.index = PbZ
    },
    gKfgKf = function(gKf) {
        var ddg = function() {
            var gKf = ["[微笑]", "[嘻嘻]", "[哈哈]", "[可爱]", "[可怜]", "[挖鼻]", "[吃惊]", "[害羞]", "[挤眼]", "[闭嘴]", "[鄙视]", "[爱你]", "[泪]", "[偷笑]", "[亲亲]", "[生病]", "[太开心]", "[白眼]", "[右哼哼]", "[左哼哼]", "[嘘]", "[衰]", "[委屈]", "[吐]", "[哈欠]", "[抱抱]", "[怒]", "[疑问]", "[馋嘴]", "[拜拜]", "[思考]", "[汗]", "[困]", "[睡]", "[钱]", "[失望]", "[酷]", "[色]", "[哼]", "[鼓掌]", "[晕]", "[悲伤]", "[抓狂]", "[黑线]", "[阴险]", "[怒骂]", "[互粉]", "[心]", "[伤心]", "[猪头]", "[熊猫]", "[兔子]", "[ok]", "[耶]", "[good]", "[NO]", "[赞]", "[来]", "[弱]", "[草泥马]", "[神马]", "[囧]", "[浮云]", "[给力]", "[围观]", "[威武]", "[奥特曼]", "[礼物]", "[钟]", "[话筒]", "[蜡烛]", "[蛋糕]"],
            IbL = {};
            return layui.each(gKf,
            function(gKf, aXd) {
                IbL[aXd] = layui.cache.dir + "images/face/" + gKf + ".gif"
            }),
            IbL
        } ();
        return gKfgKf.hide = gKfgKf.hide ||
        function(gKf) {
            "face" !== IbL(gKf.target).attr("layedit-event") && aXd.close(gKfgKf.index)
        },
        gKfgKf.index = aXd.tips(function() {
            var gKf = [];
            return layui.each(ddg,
            function(IbL, aXd) {
                gKf.push('<li title="' + IbL + '"><img src="' + aXd + '" alt="' + IbL + '"></li>')
            }),
            '<ul class="layui-clear">' + gKf.join("") + "</ul>"
        } (), this, {
            tips: 1,
            time: 0,
            skin: "layui-box layui-util-face",
            maxWidth: 500,
            success: function(cPc, PbZ) {
                cPc.css({
                    marginTop: -4,
                    marginLeft: -10
                }).find(".layui-clear>li").on("click",
                function() {
                    gKf && gKf({
                        src: ddg[this.title],
                        alt: this.title
                    }),
                    aXd.close(PbZ)
                }),
                IbL(document).off("click", gKfgKf.hide).on("click", gKfgKf.hide)
            }
        })
    },
    IbLgKf = function(gKf) {
        var IbL = this,
        cPc = aXd.open({
            type: 1,
            id: "LAY_layedit_code",
            area: "550px",
            shade: .05,
            shadeClose: !0,
            moveType: 1,
            title: "插入代码",
            skin: "layui-layer-msg",
            content: ['<ul class="layui-form layui-form-pane" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label">请选择语言</label>', '<div class="layui-input-block">', '<select name="lang">', '<option value="JavaScript">JavaScript</option>', '<option value="HTML">HTML</option>', '<option value="CSS">CSS</option>', '<option value="Java">Java</option>', '<option value="PHP">PHP</option>', '<option value="C#">C#</option>', '<option value="Python">Python</option>', '<option value="Ruby">Ruby</option>', '<option value="Go">Go</option>', "</select>", "</div>", "</li>", '<li class="layui-form-item layui-form-text">', '<label class="layui-form-label">代码</label>', '<div class="layui-input-block">', '<textarea name="code" lay-verify="required" autofocus="true" class="layui-textarea" style="height: 200px;"></textarea>', "</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-code-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', "</li>", "</ul>"].join(""),
            success: function(cPc, PbZ) {
                var eDa = "submit(layedit-code-yes)";
                ddg.render("select"),
                cPc.find(".layui-btn-primary").on("click",
                function() {
                    aXd.close(PbZ),
                    IbL.focus()
                }),
                ddg.on(eDa,
                function(IbL) {
                    aXd.close(IbLgKf.index),
                    gKf && gKf(IbL.field)
                })
            }
        });
        IbLgKf.index = cPc
    },
    aXdgKf = {
        html: '<i class="layui-icon layedit-tool-html" title="HTML源代码" lay-command="html" layedit-event="html"">&#xe64b;</i><span class="layedit-tool-mid"></span>',
        strong: '<i class="layui-icon layedit-tool-b" title="加粗" lay-command="Bold" layedit-event="b"">&#xe62b;</i>',
        italic: '<i class="layui-icon layedit-tool-i" title="斜体" lay-command="italic" layedit-event="i"">&#xe644;</i>',
        underline: '<i class="layui-icon layedit-tool-u" title="下划线" lay-command="underline" layedit-event="u"">&#xe646;</i>',
        del: '<i class="layui-icon layedit-tool-d" title="删除线" lay-command="strikeThrough" layedit-event="d"">&#xe64f;</i>',
        "|": '<span class="layedit-tool-mid"></span>',
        left: '<i class="layui-icon layedit-tool-left" title="左对齐" lay-command="justifyLeft" layedit-event="left"">&#xe649;</i>',
        center: '<i class="layui-icon layedit-tool-center" title="居中对齐" lay-command="justifyCenter" layedit-event="center"">&#xe647;</i>',
        right: '<i class="layui-icon layedit-tool-right" title="右对齐" lay-command="justifyRight" layedit-event="right"">&#xe648;</i>',
        link: '<i class="layui-icon layedit-tool-link" title="插入链接" layedit-event="link"">&#xe64c;</i>',
        unlink: '<i class="layui-icon layedit-tool-unlink layui-disabled" title="清除链接" lay-command="unlink" layedit-event="unlink"">&#xe64d;</i>',
        face: '<i class="layui-icon layedit-tool-face" title="表情" layedit-event="face"">&#xe650;</i>',
        image: '<i class="layui-icon layedit-tool-image" title="图片" layedit-event="image">&#xe64a;<input type="file" name="file"></i>',
        code: '<i class="layui-icon layedit-tool-code" title="插入代码" layedit-event="code">&#xe64e;</i>',
        help: '<i class="layui-icon layedit-tool-help" title="帮助" layedit-event="help">&#xe607;</i>'
    },
    ddggKf = new fQd;
    gKf(PbZ, ddggKf)
});