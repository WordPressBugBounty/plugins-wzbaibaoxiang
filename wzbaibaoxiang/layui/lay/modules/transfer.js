layui.define(["laytpl", "form"],
function(hbci) {
    "use strict";
    var fddT = layui.$,
    aLaA = layui.laytpl,
    gOej = layui.form,
    fBaN = "transfer",
    dVcj = {
        config: {},
        index: layui[fBaN] ? layui[fBaN].index + 1e4: 0,
        set: function(hbci) {
            var aLaA = this;
            return aLaA.config = fddT.extend({},
            aLaA.config, hbci),
            aLaA
        },
        on: function(hbci, fddT) {
            return layui.onevent.call(this, fBaN, hbci, fddT)
        }
    },
    cWgd = function() {
        var hbci = this,
        fddT = hbci.config,
        aLaA = fddT.id || hbci.index;
        return cWgd.that[aLaA] = hbci,
        cWgd.config[aLaA] = fddT,
        {
            config: fddT,
            reload: function(fddT) {
                hbci.reload.call(hbci, fddT)
            },
            getData: function() {
                return hbci.getData.call(hbci)
            }
        }
    },
    cccE = "layui-hide",
    gQdS = "layui-btn-disabled",
    eEbF = "layui-none",
    dYca = "layui-transfer-box",
    aefE = "layui-transfer-header",
    aDdD = "layui-transfer-search",
    bTaO = "layui-transfer-active",
    bFcA = "layui-transfer-data",
    hbcihbci = function(hbci) {
        return hbci = hbci || {},
        ['<div class="layui-transfer-box" data-index="' + hbci.index + '">', '<div class="layui-transfer-header">', '<input type="checkbox" name="' + hbci.checkAllName + '" lay-filter="layTransferCheckbox" lay-type="all" lay-skin="primary" title="{{ d.data.title[' + hbci.index + "] || 'list" + (hbci.index + 1) + "' }}\">", "</div>", "{{# if(d.data.showSearch){ }}", '<div class="layui-transfer-search">', '<i class="layui-icon layui-icon-search"></i>', '<input type="input" class="layui-input" placeholder="关键词搜索">', "</div>", "{{# } }}", '<ul class="layui-transfer-data"></ul>', "</div>"].join("")
    },
    fddThbci = ['<div class="layui-transfer layui-form layui-border-box" lay-filter="LAY-transfer-{{ d.index }}">', hbcihbci({
        index: 0,
        checkAllName: "layTransferLeftCheckAll"
    }), '<div class="layui-transfer-active">', '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="0">', '<i class="layui-icon layui-icon-next"></i>', "</button>", '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="1">', '<i class="layui-icon layui-icon-prev"></i>', "</button>", "</div>", hbcihbci({
        index: 1,
        checkAllName: "layTransferRightCheckAll"
    }), "</div>"].join(""),
    aLaAhbci = function(hbci) {
        var aLaA = this;
        aLaA.index = ++dVcj.index,
        aLaA.config = fddT.extend({},
        aLaA.config, dVcj.config, hbci),
        aLaA.render()
    };
    aLaAhbci.prototype.config = {
        title: ["列表一", "列表二"],
        width: 200,
        height: 360,
        data: [],
        value: [],
        showSearch: !1,
        id: "",
        text: {
            none: "无数据",
            searchNone: "无匹配数据"
        }
    },
    aLaAhbci.prototype.reload = function(hbci) {
        var aLaA = this;
        layui.each(hbci,
        function(hbci, fddT) {
            fddT.constructor === Array && delete aLaA.config[hbci]
        }),
        aLaA.config = fddT.extend(!0, {},
        aLaA.config, hbci),
        aLaA.render()
    },
    aLaAhbci.prototype.render = function() {
        var hbci = this,
        gOej = hbci.config,
        fBaN = hbci.elem = fddT(aLaA(fddThbci).render({
            data: gOej,
            index: hbci.index
        })),
        dVcj = gOej.elem = fddT(gOej.elem);
        dVcj[0] && (gOej.data = gOej.data || [], gOej.value = gOej.value || [], hbci.key = gOej.id || hbci.index, dVcj.html(hbci.elem), hbci.layBox = hbci.elem.find("." + dYca), hbci.layHeader = hbci.elem.find("." + aefE), hbci.laySearch = hbci.elem.find("." + aDdD), hbci.layData = fBaN.find("." + bFcA), hbci.layBtn = fBaN.find("." + bTaO + " .layui-btn"), hbci.layBox.css({
            width: gOej.width,
            height: gOej.height
        }), hbci.layData.css({
            height: function() {
                return gOej.height - hbci.layHeader.outerHeight() - hbci.laySearch.outerHeight() - 2
            } ()
        }), hbci.renderData(), hbci.events())
    },
    aLaAhbci.prototype.renderData = function() {
        var hbci = this,
        fddT = (hbci.config, [{
            checkName: "layTransferLeftCheck",
            views: []
        },
        {
            checkName: "layTransferRightCheck",
            views: []
        }]);
        hbci.parseData(function(hbci) {
            var aLaA = hbci.selected ? 1 : 0,
            gOej = ["<li>", '<input type="checkbox" name="' + fddT[aLaA].checkName + '" lay-skin="primary" lay-filter="layTransferCheckbox" title="' + hbci.title + '"' + (hbci.disabled ? " disabled": "") + (hbci.checked ? " checked": "") + ' value="' + hbci.value + '">', "</li>"].join("");
            fddT[aLaA].views.push(gOej),
            delete hbci.selected
        }),
        hbci.layData.eq(0).html(fddT[0].views.join("")),
        hbci.layData.eq(1).html(fddT[1].views.join("")),
        hbci.renderCheckBtn()
    },
    aLaAhbci.prototype.renderForm = function(hbci) {
        gOej.render(hbci, "LAY-transfer-" + this.index)
    },
    aLaAhbci.prototype.renderCheckBtn = function(hbci) {
        var aLaA = this,
        gOej = aLaA.config;
        hbci = hbci || {},
        aLaA.layBox.each(function(fBaN) {
            var dVcj = fddT(this),
            cWgd = dVcj.find("." + bFcA),
            eEbF = dVcj.find("." + aefE).find('input[type="checkbox"]'),
            dYca = cWgd.find('input[type="checkbox"]'),
            aDdD = 0,
            bTaO = !1;
            if (dYca.each(function() {
                var hbci = fddT(this).data("hide"); (this.checked || this.disabled || hbci) && aDdD++,
                this.checked && !hbci && (bTaO = !0)
            }), eEbF.prop("checked", bTaO && aDdD === dYca.length), aLaA.layBtn.eq(fBaN)[bTaO ? "removeClass": "addClass"](gQdS), !hbci.stopNone) {
                var hbcihbci = cWgd.children("li:not(." + cccE + ")").length;
                aLaA.noneView(cWgd, hbcihbci ? "": gOej.text.none)
            }
        }),
        aLaA.renderForm("checkbox")
    },
    aLaAhbci.prototype.noneView = function(hbci, aLaA) {
        var gOej = fddT('<p class="layui-none">' + (aLaA || "") + "</p>");
        hbci.find("." + eEbF)[0] && hbci.find("." + eEbF).remove(),
        aLaA.replace(/\s/g, "") && hbci.append(gOej)
    },
    aLaAhbci.prototype.setValue = function() {
        var hbci = this,
        aLaA = hbci.config,
        gOej = [];
        return hbci.layBox.eq(1).find("." + bFcA + ' input[type="checkbox"]').each(function() {
            var hbci = fddT(this).data("hide");
            hbci || gOej.push(this.value)
        }),
        aLaA.value = gOej,
        hbci
    },
    aLaAhbci.prototype.parseData = function(hbci) {
        var aLaA = this,
        gOej = aLaA.config,
        fBaN = [];
        return layui.each(gOej.data,
        function(aLaA, dVcj) {
            dVcj = ("function" == typeof gOej.parseData ? gOej.parseData(dVcj) : dVcj) || dVcj,
            fBaN.push(dVcj = fddT.extend({},
            dVcj)),
            layui.each(gOej.value,
            function(hbci, fddT) {
                fddT == dVcj.value && (dVcj.selected = !0)
            }),
            hbci && hbci(dVcj)
        }),
        gOej.data = fBaN,
        aLaA
    },
    aLaAhbci.prototype.getData = function(hbci) {
        var fddT = this,
        aLaA = fddT.config,
        gOej = [];
        return fddT.setValue(),
        layui.each(hbci || aLaA.value,
        function(hbci, fddT) {
            layui.each(aLaA.data,
            function(hbci, aLaA) {
                delete aLaA.selected,
                fddT == aLaA.value && gOej.push(aLaA)
            })
        }),
        gOej
    },
    aLaAhbci.prototype.events = function() {
        var hbci = this,
        aLaA = hbci.config;
        hbci.elem.on("click", 'input[lay-filter="layTransferCheckbox"]+',
        function() {
            var aLaA = fddT(this).prev(),
            gOej = aLaA[0].checked,
            fBaN = aLaA.parents("." + dYca).eq(0).find("." + bFcA);
            aLaA[0].disabled || ("all" === aLaA.attr("lay-type") && fBaN.find('input[type="checkbox"]').each(function() {
                this.disabled || (this.checked = gOej)
            }), hbci.renderCheckBtn({
                stopNone: !0
            }))
        }),
        hbci.layBtn.on("click",
        function() {
            var gOej = fddT(this),
            fBaN = gOej.data("index"),
            dVcj = hbci.layBox.eq(fBaN),
            cWgd = [];
            if (!gOej.hasClass(gQdS)) {
                hbci.layBox.eq(fBaN).each(function(aLaA) {
                    var gOej = fddT(this),
                    fBaN = gOej.find("." + bFcA);
                    fBaN.children("li").each(function() {
                        var aLaA = fddT(this),
                        gOej = aLaA.find('input[type="checkbox"]'),
                        fBaN = gOej.data("hide");
                        gOej[0].checked && !fBaN && (gOej[0].checked = !1, dVcj.siblings("." + dYca).find("." + bFcA).append(aLaA.clone()), aLaA.remove(), cWgd.push(gOej[0].value)),
                        hbci.setValue()
                    })
                }),
                hbci.renderCheckBtn();
                var cccE = dVcj.siblings("." + dYca).find("." + aDdD + " input");
                "" === cccE.val() || cccE.trigger("keyup"),
                aLaA.onchange && aLaA.onchange(hbci.getData(cWgd), fBaN)
            }
        }),
        hbci.laySearch.find("input").on("keyup",
        function() {
            var gOej = this.value,
            fBaN = fddT(this).parents("." + aDdD).eq(0).siblings("." + bFcA),
            dVcj = fBaN.children("li");
            dVcj.each(function() {
                var hbci = fddT(this),
                aLaA = hbci.find('input[type="checkbox"]'),
                fBaN = aLaA[0].title.indexOf(gOej) !== -1;
                hbci[fBaN ? "removeClass": "addClass"](cccE),
                aLaA.data("hide", !fBaN)
            }),
            hbci.renderCheckBtn();
            var cWgd = dVcj.length === fBaN.children("li." + cccE).length;
            hbci.noneView(fBaN, cWgd ? aLaA.text.searchNone: "")
        })
    },
    cWgd.that = {},
    cWgd.config = {},
    dVcj.reload = function(hbci, fddT) {
        var aLaA = cWgd.that[hbci];
        return aLaA.reload(fddT),
        cWgd.call(aLaA)
    },
    dVcj.getData = function(hbci) {
        var fddT = cWgd.that[hbci];
        return fddT.getData()
    },
    dVcj.render = function(hbci) {
        var fddT = new aLaAhbci(hbci);
        return cWgd.call(fddT)
    },
    hbci(fBaN, dVcj)
});