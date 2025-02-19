layui.define(function(aTaedL) {
    "use strict";
    var eFcUgG = document,
    cjfSdi = "getElementById",
    fIfKaN = "getElementsByTagName",
    gOdSch = "laypage",
    aCcUbI = "layui-disabled",
    fOfTaa = function(aTaedL) {
        var eFcUgG = this;
        eFcUgG.config = aTaedL || {},
        eFcUgG.config.index = ++dDaObN.index,
        eFcUgG.render(!0)
    };
    fOfTaa.prototype.type = function() {
        var aTaedL = this.config;
        if ("object" == typeof aTaedL.elem) return void 0 === aTaedL.elem.length ? 2 : 3
    },
    fOfTaa.prototype.view = function() {
        var aTaedL = this,
        eFcUgG = aTaedL.config,
        cjfSdi = eFcUgG.groups = "groups" in eFcUgG ? 0 | eFcUgG.groups: 5;
        eFcUgG.layout = "object" == typeof eFcUgG.layout ? eFcUgG.layout: ["prev", "page", "next"],
        eFcUgG.count = 0 | eFcUgG.count,
        eFcUgG.curr = 0 | eFcUgG.curr || 1,
        eFcUgG.limits = "object" == typeof eFcUgG.limits ? eFcUgG.limits: [10, 20, 30, 40, 50],
        eFcUgG.limit = 0 | eFcUgG.limit || 10,
        eFcUgG.pages = Math.ceil(eFcUgG.count / eFcUgG.limit) || 1,
        eFcUgG.curr > eFcUgG.pages && (eFcUgG.curr = eFcUgG.pages),
        cjfSdi < 0 ? cjfSdi = 1 : cjfSdi > eFcUgG.pages && (cjfSdi = eFcUgG.pages),
        eFcUgG.prev = "prev" in eFcUgG ? eFcUgG.prev: "&#x4E0A;&#x4E00;&#x9875;",
        eFcUgG.next = "next" in eFcUgG ? eFcUgG.next: "&#x4E0B;&#x4E00;&#x9875;";
        var fIfKaN = eFcUgG.pages > cjfSdi ? Math.ceil((eFcUgG.curr + (cjfSdi > 1 ? 1 : 0)) / (cjfSdi > 0 ? cjfSdi: 1)) : 1,
        gOdSch = {
            prev: function() {
                return eFcUgG.prev ? '<a href="javascript:;" class="layui-laypage-prev' + (1 == eFcUgG.curr ? " " + aCcUbI: "") + '" data-page="' + (eFcUgG.curr - 1) + '">' + eFcUgG.prev + "</a>": ""
            } (),
            page: function() {
                var aTaedL = [];
                if (eFcUgG.count < 1) return "";
                fIfKaN > 1 && eFcUgG.first !== !1 && 0 !== cjfSdi && aTaedL.push('<a href="javascript:;" class="layui-laypage-first" data-page="1"  title="&#x9996;&#x9875;">' + (eFcUgG.first || 1) + "</a>");
                var gOdSch = Math.floor((cjfSdi - 1) / 2),
                aCcUbI = fIfKaN > 1 ? eFcUgG.curr - gOdSch: 1,
                fOfTaa = fIfKaN > 1 ?
                function() {
                    var aTaedL = eFcUgG.curr + (cjfSdi - gOdSch - 1);
                    return aTaedL > eFcUgG.pages ? eFcUgG.pages: aTaedL
                } () : cjfSdi;
                for (fOfTaa - aCcUbI < cjfSdi - 1 && (aCcUbI = fOfTaa - cjfSdi + 1), eFcUgG.first !== !1 && aCcUbI > 2 && aTaedL.push('<span class="layui-laypage-spr">&#x2026;</span>'); aCcUbI <= fOfTaa; aCcUbI++) aCcUbI === eFcUgG.curr ? aTaedL.push('<span class="layui-laypage-curr"><em class="layui-laypage-em" ' + (/^#/.test(eFcUgG.theme) ? 'style="background-color:' + eFcUgG.theme + ';"': "") + "></em><em>" + aCcUbI + "</em></span>") : aTaedL.push('<a href="javascript:;" data-page="' + aCcUbI + '">' + aCcUbI + "</a>");
                return eFcUgG.pages > cjfSdi && eFcUgG.pages > fOfTaa && eFcUgG.last !== !1 && (fOfTaa + 1 < eFcUgG.pages && aTaedL.push('<span class="layui-laypage-spr">&#x2026;</span>'), 0 !== cjfSdi && aTaedL.push('<a href="javascript:;" class="layui-laypage-last" title="&#x5C3E;&#x9875;"  data-page="' + eFcUgG.pages + '">' + (eFcUgG.last || eFcUgG.pages) + "</a>")),
                aTaedL.join("")
            } (),
            next: function() {
                return eFcUgG.next ? '<a href="javascript:;" class="layui-laypage-next' + (eFcUgG.curr == eFcUgG.pages ? " " + aCcUbI: "") + '" data-page="' + (eFcUgG.curr + 1) + '">' + eFcUgG.next + "</a>": ""
            } (),
            count: '<span class="layui-laypage-count">共 ' + eFcUgG.count + " 条</span>",
            limit: function() {
                var aTaedL = ['<span class="layui-laypage-limits"><select lay-ignore>'];
                return layui.each(eFcUgG.limits,
                function(cjfSdi, fIfKaN) {
                    aTaedL.push('<option value="' + fIfKaN + '"' + (fIfKaN === eFcUgG.limit ? "selected": "") + ">" + fIfKaN + " 条/页</option>")
                }),
                aTaedL.join("") + "</select></span>"
            } (),
            refresh: ['<a href="javascript:;" data-page="' + eFcUgG.curr + '" class="layui-laypage-refresh">', '<i class="layui-icon layui-icon-refresh"></i>', "</a>"].join(""),
            skip: function() {
                return ['<span class="layui-laypage-skip">&#x5230;&#x7B2C;', '<input type="text" min="1" value="' + eFcUgG.curr + '" class="layui-input">', '&#x9875;<button type="button" class="layui-laypage-btn">&#x786e;&#x5b9a;</button>', "</span>"].join("")
            } ()
        };
        return ['<div class="layui-box layui-laypage layui-laypage-' + (eFcUgG.theme ? /^#/.test(eFcUgG.theme) ? "molv": eFcUgG.theme: "default") + '" id="layui-laypage-' + eFcUgG.index + '">',
        function() {
            var aTaedL = [];
            return layui.each(eFcUgG.layout,
            function(eFcUgG, cjfSdi) {
                gOdSch[cjfSdi] && aTaedL.push(gOdSch[cjfSdi])
            }),
            aTaedL.join("")
        } (), "</div>"].join("")
    },
    fOfTaa.prototype.jump = function(aTaedL, eFcUgG) {
        if (aTaedL) {
            var cjfSdi = this,
            gOdSch = cjfSdi.config,
            aCcUbI = aTaedL.children,
            fOfTaa = aTaedL[fIfKaN]("button")[0],
            dEgCeK = aTaedL[fIfKaN]("input")[0],
            cdaLbL = aTaedL[fIfKaN]("select")[0],
            aTaedLaTaedL = function() {
                var aTaedL = 0 | dEgCeK.value.replace(/\s|\D/g, "");
                aTaedL && (gOdSch.curr = aTaedL, cjfSdi.render())
            };
            if (eFcUgG) return aTaedLaTaedL();
            for (var eFcUgGaTaedL = 0,
            cjfSdiaTaedL = aCcUbI.length; eFcUgGaTaedL < cjfSdiaTaedL; eFcUgGaTaedL++)"a" === aCcUbI[eFcUgGaTaedL].nodeName.toLowerCase() && dDaObN.on(aCcUbI[eFcUgGaTaedL], "click",
            function() {
                var aTaedL = 0 | this.getAttribute("data-page");
                aTaedL < 1 || aTaedL > gOdSch.pages || (gOdSch.curr = aTaedL, cjfSdi.render())
            });
            cdaLbL && dDaObN.on(cdaLbL, "change",
            function() {
                var aTaedL = this.value;
                gOdSch.curr * aTaedL > gOdSch.count && (gOdSch.curr = Math.ceil(gOdSch.count / aTaedL)),
                gOdSch.limit = aTaedL,
                cjfSdi.render()
            }),
            fOfTaa && dDaObN.on(fOfTaa, "click",
            function() {
                aTaedLaTaedL()
            })
        }
    },
    fOfTaa.prototype.skip = function(aTaedL) {
        if (aTaedL) {
            var eFcUgG = this,
            cjfSdi = aTaedL[fIfKaN]("input")[0];
            cjfSdi && dDaObN.on(cjfSdi, "keyup",
            function(cjfSdi) {
                var fIfKaN = this.value,
                gOdSch = cjfSdi.keyCode;
                /^(37|38|39|40)$/.test(gOdSch) || (/\D/.test(fIfKaN) && (this.value = fIfKaN.replace(/\D/, "")), 13 === gOdSch && eFcUgG.jump(aTaedL, !0))
            })
        }
    },
    fOfTaa.prototype.render = function(aTaedL) {
        var fIfKaN = this,
        gOdSch = fIfKaN.config,
        aCcUbI = fIfKaN.type(),
        fOfTaa = fIfKaN.view();
        2 === aCcUbI ? gOdSch.elem && (gOdSch.elem.innerHTML = fOfTaa) : 3 === aCcUbI ? gOdSch.elem.html(fOfTaa) : eFcUgG[cjfSdi](gOdSch.elem) && (eFcUgG[cjfSdi](gOdSch.elem).innerHTML = fOfTaa),
        gOdSch.jump && gOdSch.jump(gOdSch, aTaedL);
        var dDaObN = eFcUgG[cjfSdi]("layui-laypage-" + gOdSch.index);
        fIfKaN.jump(dDaObN),
        gOdSch.hash && !aTaedL && (location.hash = "!" + gOdSch.hash + "=" + gOdSch.curr),
        fIfKaN.skip(dDaObN)
    };
    var dDaObN = {
        render: function(aTaedL) {
            var eFcUgG = new fOfTaa(aTaedL);
            return eFcUgG.index
        },
        index: layui.laypage ? layui.laypage.index + 1e4: 0,
        on: function(aTaedL, eFcUgG, cjfSdi) {
            return aTaedL.attachEvent ? aTaedL.attachEvent("on" + eFcUgG,
            function(eFcUgG) {
                eFcUgG.target = eFcUgG.srcElement,
                cjfSdi.call(aTaedL, eFcUgG)
            }) : aTaedL.addEventListener(eFcUgG, cjfSdi, !1),
            this
        }
    };
    aTaedL(gOdSch, dDaObN)
});