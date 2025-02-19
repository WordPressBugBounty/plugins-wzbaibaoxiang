layui.define(["laytpl", "laypage", "layer", "form", "util"],
function(eR) {
    "use strict";
    var cN = layui.$,
    eL = layui.laytpl,
    aQ = layui.laypage,
    fL = layui.layer,
    gL = layui.form,
    cE = (layui.util, layui.hint()),
    cO = layui.device(),
    gA = {
        config: {
            checkName: "LAY_CHECKED",
            indexName: "LAY_TABLE_INDEX"
        },
        cache: {},
        index: layui.table ? layui.table.index + 1e4: 0,
        set: function(eR) {
            var eL = this;
            return eL.config = cN.extend({},
            eL.config, eR),
            eL
        },
        on: function(eR, cN) {
            return layui.onevent.call(this, eN, eR, cN)
        }
    },
    ea = function() {
        var eR = this,
        cN = eR.config,
        eL = cN.id || cN.index;
        return eL && (ea.that[eL] = eR, ea.config[eL] = cN),
        {
            config: cN,
            reload: function(cN) {
                eR.reload.call(eR, cN)
            },
            setColsWidth: function() {
                eR.setColsWidth.call(eR)
            },
            resize: function() {
                eR.resize.call(eR)
            }
        }
    },
    eD = function(eR) {
        var cN = ea.config[eR];
        return cN || cE.error("The ID option was not found in the table instance"),
        cN || null
    },
    cI = function(eR, aQ, fL, gL) {
        var cE = eR.templet ?
        function() {
            return "function" == typeof eR.templet ? eR.templet(fL) : eL(cN(eR.templet).html() || String(aQ)).render(fL)
        } () : aQ;
        return gL ? cN("<div>" + cE + "</div>").text() : cE
    },
    eN = "table",
    aP = ".layui-table",
    bP = "layui-hide",
    cT = "layui-none",
    dE = "layui-table-view",
    fB = ".layui-table-tool",
    fd = ".layui-table-box",
    hc = ".layui-table-init",
    fT = ".layui-table-header",
    gX = ".layui-table-body",
    dj = ".layui-table-main",
    bK = ".layui-table-fixed",
    fV = ".layui-table-fixed-l",
    cM = ".layui-table-fixed-r",
    cL = ".layui-table-total",
    bW = ".layui-table-page",
    aA = ".layui-table-sort",
    eReR = "layui-table-edit",
    cNeR = "layui-table-hover",
    eLeR = function(eR) {
        var cN = '{{#if(item2.colspan){}} colspan="{{item2.colspan}}"{{#} if(item2.rowspan){}} rowspan="{{item2.rowspan}}"{{#}}}';
        return eR = eR || {},
        ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<thead>", "{{# layui.each(d.data.cols, function(i1, item1){ }}", "<tr>", "{{# layui.each(item1, function(i2, item2){ }}", '{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}', '{{# if(item2.fixed === "right"){ right = true; } }}',
        function() {
            return eR.fixed && "right" !== eR.fixed ? '{{# if(item2.fixed && item2.fixed !== "right"){ }}': "right" === eR.fixed ? '{{# if(item2.fixed === "right"){ }}': ""
        } (), "{{# var isSort = !(item2.colGroup) && item2.sort; }}", '<th data-field="{{ item2.field||i2 }}" data-key="{{d.index}}-{{i1}}-{{i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{ item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{item2.minWidth}}"{{# } }} ' + cN + ' {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}">', '<div class="layui-table-cell laytable-cell-', "{{# if(item2.colGroup){ }}", "group", "{{# } else { }}", "{{d.index}}-{{i1}}-{{i2}}", '{{# if(item2.type !== "normal"){ }}', " laytable-cell-{{ item2.type }}", "{{# } }}", "{{# } }}", '" {{#if(item2.align){}}align="{{item2.align}}"{{#}}}>', '{{# if(item2.type === "checkbox"){ }}', '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>', "{{# } else { }}", '<span>{{item2.title||""}}</span>', "{{# if(isSort){ }}", '<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="升序"></i><i class="layui-edge layui-table-sort-desc" title="降序"></i></span>', "{{# } }}", "{{# } }}", "</div>", "</th>", eR.fixed ? "{{# }; }}": "", "{{# }); }}", "</tr>", "{{# }); }}", "</thead>", "</table>"].join("")
    },
    aQeR = ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<tbody></tbody>", "</table>"].join(""),
    fLeR = ['<div class="layui-form layui-border-box {{d.VIEW_CLASS}}" lay-filter="LAY-table-{{d.index}}" lay-id="{{ d.data.id }}" style="{{# if(d.data.width){ }}width:{{d.data.width}}px;{{# } }} {{# if(d.data.height){ }}height:{{d.data.height}}px;{{# } }}">', "{{# if(d.data.toolbar){ }}", '<div class="layui-table-tool">', '<div class="layui-table-tool-temp"></div>', '<div class="layui-table-tool-self"></div>', "</div>", "{{# } }}", '<div class="layui-table-box">', "{{# if(d.data.loading){ }}", '<div class="layui-table-init" style="background-color: #fff;">', '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>', "</div>", "{{# } }}", "{{# var left, right; }}", '<div class="layui-table-header">', eLeR(), "</div>", '<div class="layui-table-body layui-table-main">', aQeR, "</div>", "{{# if(left){ }}", '<div class="layui-table-fixed layui-table-fixed-l">', '<div class="layui-table-header">', eLeR({
        fixed: !0
    }), "</div>", '<div class="layui-table-body">', aQeR, "</div>", "</div>", "{{# }; }}", "{{# if(right){ }}", '<div class="layui-table-fixed layui-table-fixed-r">', '<div class="layui-table-header">', eLeR({
        fixed: "right"
    }), '<div class="layui-table-mend"></div>', "</div>", '<div class="layui-table-body">', aQeR, "</div>", "</div>", "{{# }; }}", "</div>", "{{# if(d.data.totalRow){ }}", '<div class="layui-table-total">', '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', '<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>', "</table>", "</div>", "{{# } }}", "{{# if(d.data.page){ }}", '<div class="layui-table-page">', '<div id="layui-table-page{{d.index}}"></div>', "</div>", "{{# } }}", "<style>", "{{# layui.each(d.data.cols, function(i1, item1){", "layui.each(item1, function(i2, item2){ }}", ".laytable-cell-{{d.index}}-{{i1}}-{{i2}}{ ", "{{# if(item2.width){ }}", "width: {{item2.width}}px;", "{{# } }}", " }", "{{# });", "}); }}", "</style>", "</div>"].join(""),
    gLeR = cN(window),
    cEeR = cN(document),
    cOeR = function(eR) {
        var eL = this;
        eL.index = ++gA.index,
        eL.config = cN.extend({},
        eL.config, gA.config, eR),
        eL.render()
    };
    cOeR.prototype.config = {
        limit: 10,
        loading: !0,
        cellMinWidth: 60,
        defaultToolbar: ["filter", "exports", "print"],
        autoSort: !0,
        text: {
            none: "无数据"
        }
    },
    cOeR.prototype.render = function() {
        var eR = this,
        aQ = eR.config;
        if (aQ.elem = cN(aQ.elem), aQ.where = aQ.where || {},
        aQ.id = aQ.id || aQ.elem.attr("id") || eR.index, aQ.request = cN.extend({
            pageName: "page",
            limitName: "limit"
        },
        aQ.request), aQ.response = cN.extend({
            statusName: "code",
            statusCode: 0,
            msgName: "msg",
            dataName: "data",
            totalRowName: "totalRow",
            countName: "count"
        },
        aQ.response), "object" == typeof aQ.page && (aQ.limit = aQ.page.limit || aQ.limit, aQ.limits = aQ.page.limits || aQ.limits, eR.page = aQ.page.curr = aQ.page.curr || 1, delete aQ.page.elem, delete aQ.page.jump), !aQ.elem[0]) return eR;
        aQ.height && /^full-\d+$/.test(aQ.height) && (eR.fullHeightGap = aQ.height.split("-")[1], aQ.height = gLeR.height() - eR.fullHeightGap),
        eR.setInit();
        var fL = aQ.elem,
        gL = fL.next("." + dE),
        cE = eR.elem = cN(eL(fLeR).render({
            VIEW_CLASS: dE,
            data: aQ,
            index: eR.index
        }));
        if (aQ.index = eR.index, eR.key = aQ.id || aQ.index, gL[0] && gL.remove(), fL.after(cE), eR.layTool = cE.find(fB), eR.layBox = cE.find(fd), eR.layHeader = cE.find(fT), eR.layMain = cE.find(dj), eR.layBody = cE.find(gX), eR.layFixed = cE.find(bK), eR.layFixLeft = cE.find(fV), eR.layFixRight = cE.find(cM), eR.layTotal = cE.find(cL), eR.layPage = cE.find(bW), eR.renderToolbar(), eR.fullSize(), aQ.cols.length > 1) {
            var cO = eR.layFixed.find(fT).find("th");
            cO.height(eR.layHeader.height() - 1 - parseFloat(cO.css("padding-top")) - parseFloat(cO.css("padding-bottom")))
        }
        eR.pullData(eR.page),
        eR.events()
    },
    cOeR.prototype.initOpts = function(eR) {
        var cN = this,
        eL = (cN.config, {
            checkbox: 48,
            radio: 48,
            space: 15,
            numbers: 40
        });
        eR.checkbox && (eR.type = "checkbox"),
        eR.space && (eR.type = "space"),
        eR.type || (eR.type = "normal"),
        "normal" !== eR.type && (eR.unresize = !0, eR.width = eR.width || eL[eR.type])
    },
    cOeR.prototype.setInit = function(eR) {
        var cN = this,
        eL = cN.config;
        return eL.clientWidth = eL.width ||
        function() {
            var eR = function(cN) {
                var aQ, fL;
                cN = cN || eL.elem.parent(),
                aQ = cN.width();
                try {
                    fL = "none" === cN.css("display")
                } catch(eR) {}
                return ! cN[0] || aQ && !fL ? aQ: eR(cN.parent())
            };
            return eR()
        } (),
        "width" === eR ? eL.clientWidth: void layui.each(eL.cols,
        function(eR, aQ) {
            layui.each(aQ,
            function(fL, gL) {
                if (!gL) return void aQ.splice(fL, 1);
                if (gL.key = eR + "-" + fL, gL.hide = gL.hide || !1, gL.colGroup || gL.colspan > 1) {
                    var cE = 0;
                    layui.each(eL.cols[eR + 1],
                    function(cN, eL) {
                        eL.HAS_PARENT || cE > 1 && cE == gL.colspan || (eL.HAS_PARENT = !0, eL.parentKey = eR + "-" + fL, cE += parseInt(eL.colspan > 1 ? eL.colspan: 1))
                    }),
                    gL.colGroup = !0
                }
                cN.initOpts(gL)
            })
        })
    },
    cOeR.prototype.renderToolbar = function() {
        var eR = this,
        aQ = eR.config,
        fL = ['<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>', '<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>', '<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'].join(""),
        gL = eR.layTool.find(".layui-table-tool-temp");
        if ("default" === aQ.toolbar) gL.html(fL);
        else if ("string" == typeof aQ.toolbar) {
            var cE = cN(aQ.toolbar).html() || "";
            cE && gL.html(eL(cE).render(aQ))
        }
        var cO = {
            filter: {
                title: "筛选列",
                layEvent: "LAYTABLE_COLS",
                icon: "layui-icon-cols"
            },
            exports: {
                title: "导出",
                layEvent: "LAYTABLE_EXPORT",
                icon: "layui-icon-export"
            },
            print: {
                title: "打印",
                layEvent: "LAYTABLE_PRINT",
                icon: "layui-icon-print"
            }
        },
        gA = [];
        "object" == typeof aQ.defaultToolbar && layui.each(aQ.defaultToolbar,
        function(eR, cN) {
            var eL = "string" == typeof cN ? cO[cN] : cN;
            eL && gA.push('<div class="layui-inline" title="' + eL.title + '" lay-event="' + eL.layEvent + '"><i class="layui-icon ' + eL.icon + '"></i></div>')
        }),
        eR.layTool.find(".layui-table-tool-self").html(gA.join(""))
    },
    cOeR.prototype.setParentCol = function(eR, cN) {
        var eL = this,
        aQ = eL.config,
        fL = eL.layHeader.find('th[data-key="' + aQ.index + "-" + cN + '"]'),
        gL = parseInt(fL.attr("colspan")) || 0;
        if (fL[0]) {
            var cE = cN.split("-"),
            cO = aQ.cols[cE[0]][cE[1]];
            eR ? gL--:gL++,
            fL.attr("colspan", gL),
            fL[gL < 1 ? "addClass": "removeClass"](bP),
            cO.colspan = gL,
            cO.hide = gL < 1;
            var gA = fL.data("parentkey");
            gA && eL.setParentCol(eR, gA)
        }
    },
    cOeR.prototype.setColsPatch = function() {
        var eR = this,
        cN = eR.config;
        layui.each(cN.cols,
        function(cN, eL) {
            layui.each(eL,
            function(cN, eL) {
                eL.hide && eR.setParentCol(eL.hide, eL.parentKey)
            })
        })
    },
    cOeR.prototype.setColsWidth = function() {
        var eR = this,
        cN = eR.config,
        eL = 0,
        aQ = 0,
        fL = 0,
        gL = 0,
        cE = eR.setInit("width");
        eR.eachCols(function(eR, cN) {
            cN.hide || eL++
        }),
        cE = cE -
        function() {
            return "line" === cN.skin || "nob" === cN.skin ? 2 : eL + 1
        } () - eR.getScrollWidth(eR.layMain[0]) - 1;
        var cO = function(eR) {
            layui.each(cN.cols,
            function(eL, cO) {
                layui.each(cO,
                function(eL, gA) {
                    var ea = 0,
                    eD = gA.minWidth || cN.cellMinWidth;
                    return gA ? void(gA.colGroup || gA.hide || (eR ? fL && fL < eD && (aQ--, ea = eD) : (ea = gA.width || 0, /\d+%$/.test(ea) ? (ea = Math.floor(parseFloat(ea) / 100 * cE), ea < eD && (ea = eD)) : ea || (gA.width = ea = 0, aQ++)), gA.hide && (ea = 0), gL += ea)) : void cO.splice(eL, 1)
                })
            }),
            cE > gL && aQ && (fL = (cE - gL) / aQ)
        };
        cO(),
        cO(!0),
        eR.autoColNums = aQ,
        eR.eachCols(function(eL, aQ) {
            var gL = aQ.minWidth || cN.cellMinWidth;
            aQ.colGroup || aQ.hide || (0 === aQ.width ? eR.getCssRule(cN.index + "-" + aQ.key,
            function(eR) {
                eR.style.width = Math.floor(fL >= gL ? fL: gL) + "px"
            }) : /\d+%$/.test(aQ.width) && eR.getCssRule(cN.index + "-" + aQ.key,
            function(eR) {
                eR.style.width = Math.floor(parseFloat(aQ.width) / 100 * cE) + "px"
            }))
        });
        var gA = eR.layMain.width() - eR.getScrollWidth(eR.layMain[0]) - eR.layMain.children("table").outerWidth();
        if (eR.autoColNums && gA >= -eL && gA <= eL) {
            var ea = function(cN) {
                var eL;
                return cN = cN || eR.layHeader.eq(0).find("thead th:last-child"),
                eL = cN.data("field"),
                !eL && cN.prev()[0] ? ea(cN.prev()) : cN
            },
            eD = ea(),
            cI = eD.data("key");
            eR.getCssRule(cI,
            function(cN) {
                var eL = cN.style.width || eD.outerWidth();
                cN.style.width = parseFloat(eL) + gA + "px",
                eR.layMain.height() - eR.layMain.prop("clientHeight") > 0 && (cN.style.width = parseFloat(cN.style.width) - 1 + "px")
            })
        }
        eR.loading(!0)
    },
    cOeR.prototype.resize = function() {
        var eR = this;
        eR.fullSize(),
        eR.setColsWidth(),
        eR.scrollPatch()
    },
    cOeR.prototype.reload = function(eR) {
        var eL = this;
        eR = eR || {},
        delete eL.haveInit,
        eR.data && eR.data.constructor === Array && delete eL.config.data,
        eL.config = cN.extend(!0, {},
        eL.config, eR),
        eL.render()
    },
    cOeR.prototype.errorView = function(eR) {
        var eL = this,
        aQ = eL.layMain.find("." + cT),
        fL = cN('<div class="' + cT + '">' + (eR || "Error") + "</div>");
        aQ[0] && (eL.layNone.remove(), aQ.remove()),
        eL.layFixed.addClass(bP),
        eL.layMain.find("tbody").html(""),
        eL.layMain.append(eL.layNone = fL),
        gA.cache[eL.key] = []
    },
    cOeR.prototype.page = 1,
    cOeR.prototype.pullData = function(eR) {
        var eL = this,
        aQ = eL.config,
        fL = aQ.request,
        gL = aQ.response,
        cE = function() {
            "object" == typeof aQ.initSort && eL.sort(aQ.initSort.field, aQ.initSort.type)
        };
        if (eL.startTime = (new Date).getTime(), aQ.url) {
            var cO = {};
            cO[fL.pageName] = eR,
            cO[fL.limitName] = aQ.limit;
            var gA = cN.extend(cO, aQ.where);
            aQ.contentType && 0 == aQ.contentType.indexOf("application/json") && (gA = JSON.stringify(gA)),
            eL.loading(),
            cN.ajax({
                type: aQ.method || "get",
                url: aQ.url,
                contentType: aQ.contentType,
                data: gA,
                dataType: "json",
                headers: aQ.headers || {},
                success: function(cN) {
                    "function" == typeof aQ.parseData && (cN = aQ.parseData(cN) || cN),
                    cN[gL.statusName] != gL.statusCode ? (eL.renderForm(), eL.errorView(cN[gL.msgName] || '返回的数据不符合规范，正确的成功状态码应为："' + gL.statusName + '": ' + gL.statusCode)) : (eL.renderData(cN, eR, cN[gL.countName]), cE(), aQ.time = (new Date).getTime() - eL.startTime + " ms"),
                    eL.setColsWidth(),
                    "function" == typeof aQ.done && aQ.done(cN, eR, cN[gL.countName])
                },
                error: function(eR, cN) {
                    eL.errorView("数据接口请求异常：" + cN),
                    eL.renderForm(),
                    eL.setColsWidth()
                }
            })
        } else if (aQ.data && aQ.data.constructor === Array) {
            var ea = {},
            eD = eR * aQ.limit - aQ.limit;
            ea[gL.dataName] = aQ.data.concat().splice(eD, aQ.limit),
            ea[gL.countName] = aQ.data.length,
            "object" == typeof aQ.totalRow && (ea[gL.totalRowName] = cN.extend({},
            aQ.totalRow)),
            eL.renderData(ea, eR, ea[gL.countName]),
            cE(),
            eL.setColsWidth(),
            "function" == typeof aQ.done && aQ.done(ea, eR, ea[gL.countName])
        }
    },
    cOeR.prototype.eachCols = function(eR) {
        var cN = this;
        return gA.eachCols(null, eR, cN.config.cols),
        cN
    },
    cOeR.prototype.renderData = function(eR, gL, cE, cO) {
        var ea = this,
        eD = ea.config,
        eN = eR[eD.response.dataName] || [],
        aP = eR[eD.response.totalRowName],
        dE = [],
        fB = [],
        fd = [],
        hc = function() {
            var eR;
            return ! cO && ea.sortKey ? ea.sort(ea.sortKey.field, ea.sortKey.sort, !0) : (layui.each(eN,
            function(aQ, fL) {
                var cE = [],
                eN = [],
                aP = [],
                cT = aQ + eD.limit * (gL - 1) + 1;
                0 !== fL.length && (cO || (fL[gA.config.indexName] = aQ), ea.eachCols(function(gL, cO) {
                    var ea = cO.field || gL,
                    dE = eD.index + "-" + cO.key,
                    fB = fL[ea];
                    if (void 0 !== fB && null !== fB || (fB = ""), !cO.colGroup) {
                        var fd = ['<td data-field="' + ea + '" data-key="' + dE + '" ' +
                        function() {
                            var eR = [];
                            return cO.edit && eR.push('data-edit="' + cO.edit + '"'),
                            cO.align && eR.push('align="' + cO.align + '"'),
                            cO.templet && eR.push('data-content="' + fB + '"'),
                            cO.toolbar && eR.push('data-off="true"'),
                            cO.event && eR.push('lay-event="' + cO.event + '"'),
                            cO.style && eR.push('style="' + cO.style + '"'),
                            cO.minWidth && eR.push('data-minwidth="' + cO.minWidth + '"'),
                            eR.join(" ")
                        } () + ' class="' +
                        function() {
                            var eR = [];
                            return cO.hide && eR.push(bP),
                            cO.field || eR.push("layui-table-col-special"),
                            eR.join(" ")
                        } () + '">', '<div class="layui-table-cell laytable-cell-' +
                        function() {
                            return "normal" === cO.type ? dE: dE + " laytable-cell-" + cO.type
                        } () + '">' +
                        function() {
                            var gL = cN.extend(!0, {
                                LAY_INDEX: cT
                            },
                            fL),
                            cE = gA.config.checkName;
                            switch (cO.type) {
                            case "checkbox":
                                return '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" ' +
                                function() {
                                    return cO[cE] ? (fL[cE] = cO[cE], cO[cE] ? "checked": "") : gL[cE] ? "checked": ""
                                } () + ">";
                            case "radio":
                                return gL[cE] && (eR = aQ),
                                '<input type="radio" name="layTableRadio_' + eD.index + '" ' + (gL[cE] ? "checked": "") + ' lay-type="layTableRadio">';
                            case "numbers":
                                return cT
                            }
                            return cO.toolbar ? eL(cN(cO.toolbar).html() || "").render(gL) : cI(cO, fB, gL)
                        } (), "</div></td>"].join("");
                        cE.push(fd),
                        cO.fixed && "right" !== cO.fixed && eN.push(fd),
                        "right" === cO.fixed && aP.push(fd)
                    }
                }), dE.push('<tr data-index="' + aQ + '">' + cE.join("") + "</tr>"), fB.push('<tr data-index="' + aQ + '">' + eN.join("") + "</tr>"), fd.push('<tr data-index="' + aQ + '">' + aP.join("") + "</tr>"))
            }), ea.layBody.scrollTop(0), ea.layMain.find("." + cT).remove(), ea.layMain.find("tbody").html(dE.join("")), ea.layFixLeft.find("tbody").html(fB.join("")), ea.layFixRight.find("tbody").html(fd.join("")), ea.renderForm(), "number" == typeof eR && ea.setThisRowChecked(eR), ea.syncCheckAll(), ea.haveInit ? ea.scrollPatch() : setTimeout(function() {
                ea.scrollPatch()
            },
            50), ea.haveInit = !0, fL.close(ea.tipsIndex), eD.HAS_SET_COLS_PATCH || ea.setColsPatch(), void(eD.HAS_SET_COLS_PATCH = !0))
        };
        return gA.cache[ea.key] = eN,
        ea.layPage[0 == cE || 0 === eN.length && 1 == gL ? "addClass": "removeClass"](bP),
        cO ? hc() : 0 === eN.length ? (ea.renderForm(), ea.errorView(eD.text.none)) : (ea.layFixed.removeClass(bP), hc(), ea.renderTotal(eN, aP), void(eD.page && (eD.page = cN.extend({
            elem: "layui-table-page" + eD.index,
            count: cE,
            limit: eD.limit,
            limits: eD.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
            groups: 3,
            layout: ["prev", "page", "next", "skip", "count", "limit"],
            prev: '<i class="layui-icon">&#xe603;</i>',
            next: '<i class="layui-icon">&#xe602;</i>',
            jump: function(eR, cN) {
                cN || (ea.page = eR.curr, eD.limit = eR.limit, ea.pullData(eR.curr))
            }
        },
        eD.page), eD.page.count = cE, aQ.render(eD.page))))
    },
    cOeR.prototype.renderTotal = function(eR, cN) {
        var eL = this,
        aQ = eL.config,
        fL = {};
        if (aQ.totalRow) {
            layui.each(eR,
            function(eR, cN) {
                0 !== cN.length && eL.eachCols(function(eR, eL) {
                    var aQ = eL.field || eR,
                    gL = cN[aQ];
                    eL.totalRow && (fL[aQ] = (fL[aQ] || 0) + (parseFloat(gL) || 0))
                })
            }),
            eL.dataTotal = {};
            var gL = [];
            eL.eachCols(function(eR, cE) {
                var cO = cE.field || eR,
                gA = function() {
                    var eR = cE.totalRowText || "",
                    eL = parseFloat(fL[cO]).toFixed(2),
                    aQ = {};
                    return aQ[cO] = eL,
                    eL = cI(cE, eL, aQ),
                    cN ? cN[cE.field] || eR: cE.totalRow ? eL || eR: eR
                } (),
                ea = ['<td data-field="' + cO + '" data-key="' + aQ.index + "-" + cE.key + '" ' +
                function() {
                    var eR = [];
                    return cE.align && eR.push('align="' + cE.align + '"'),
                    cE.style && eR.push('style="' + cE.style + '"'),
                    cE.minWidth && eR.push('data-minwidth="' + cE.minWidth + '"'),
                    eR.join(" ")
                } () + ' class="' +
                function() {
                    var eR = [];
                    return cE.hide && eR.push(bP),
                    cE.field || eR.push("layui-table-col-special"),
                    eR.join(" ")
                } () + '">', '<div class="layui-table-cell laytable-cell-' +
                function() {
                    var eR = aQ.index + "-" + cE.key;
                    return "normal" === cE.type ? eR: eR + " laytable-cell-" + cE.type
                } () + '">' + gA, "</div></td>"].join("");
                cE.field && (eL.dataTotal[cO] = gA),
                gL.push(ea)
            }),
            eL.layTotal.find("tbody").html("<tr>" + gL.join("") + "</tr>")
        }
    },
    cOeR.prototype.getColElem = function(eR, cN) {
        var eL = this,
        aQ = eL.config;
        return eR.eq(0).find(".laytable-cell-" + (aQ.index + "-" + cN) + ":eq(0)")
    },
    cOeR.prototype.renderForm = function(eR) {
        gL.render(eR, "LAY-table-" + this.index)
    },
    cOeR.prototype.setThisRowChecked = function(eR) {
        var cN = this,
        eL = (cN.config, "layui-table-click"),
        aQ = cN.layBody.find('tr[data-index="' + eR + '"]');
        aQ.addClass(eL).siblings("tr").removeClass(eL)
    },
    cOeR.prototype.sort = function(eR, eL, aQ, fL) {
        var gL, cO, ea = this,
        eD = {},
        cI = ea.config,
        aP = cI.elem.attr("lay-filter"),
        bP = gA.cache[ea.key];
        "string" == typeof eR && ea.layHeader.find("th").each(function(eL, aQ) {
            var fL = cN(this),
            cE = fL.data("field");
            if (cE === eR) return eR = fL,
            gL = cE,
            !1
        });
        try {
            var gL = gL || eR.data("field"),
            cT = eR.data("key");
            if (ea.sortKey && !aQ && gL === ea.sortKey.field && eL === ea.sortKey.sort) return;
            var dE = ea.layHeader.find("th .laytable-cell-" + cT).find(aA);
            ea.layHeader.find("th").find(aA).removeAttr("lay-sort"),
            dE.attr("lay-sort", eL || null),
            ea.layFixed.find("th")
        } catch(eR) {
            return cE.error("Table modules: Did not match to field")
        }
        ea.sortKey = {
            field: gL,
            sort: eL
        },
        cI.autoSort && ("asc" === eL ? cO = layui.sort(bP, gL) : "desc" === eL ? cO = layui.sort(bP, gL, !0) : (cO = layui.sort(bP, gA.config.indexName), delete ea.sortKey)),
        eD[cI.response.dataName] = cO || bP,
        ea.renderData(eD, ea.page, ea.count, !0),
        fL && layui.event.call(eR, eN, "sort(" + aP + ")", {
            field: gL,
            type: eL
        })
    },
    cOeR.prototype.loading = function(eR) {
        var eL = this,
        aQ = eL.config;
        aQ.loading && (eR ? (eL.layInit && eL.layInit.remove(), delete eL.layInit, eL.layBox.find(hc).remove()) : (eL.layInit = cN(['<div class="layui-table-init">', '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>', "</div>"].join("")), eL.layBox.append(eL.layInit)))
    },
    cOeR.prototype.setCheckData = function(eR, cN) {
        var eL = this,
        aQ = eL.config,
        fL = gA.cache[eL.key];
        fL[eR] && fL[eR].constructor !== Array && (fL[eR][aQ.checkName] = cN)
    },
    cOeR.prototype.syncCheckAll = function() {
        var eR = this,
        cN = eR.config,
        eL = eR.layHeader.find('input[name="layTableCheckbox"]'),
        aQ = function(eL) {
            return eR.eachCols(function(eR, aQ) {
                "checkbox" === aQ.type && (aQ[cN.checkName] = eL)
            }),
            eL
        };
        eL[0] && (gA.checkStatus(eR.key).isAll ? (eL[0].checked || (eL.prop("checked", !0), eR.renderForm("checkbox")), aQ(!0)) : (eL[0].checked && (eL.prop("checked", !1), eR.renderForm("checkbox")), aQ(!1)))
    },
    cOeR.prototype.getCssRule = function(eR, cN) {
        var eL = this,
        aQ = eL.elem.find("style")[0],
        fL = aQ.sheet || aQ.styleSheet || {},
        gL = fL.cssRules || fL.rules;
        layui.each(gL,
        function(eL, aQ) {
            if (aQ.selectorText === ".laytable-cell-" + eR) return cN(aQ),
            !0
        })
    },
    cOeR.prototype.fullSize = function() {
        var eR, cN = this,
        eL = cN.config,
        aQ = eL.height;
        cN.fullHeightGap && (aQ = gLeR.height() - cN.fullHeightGap, aQ < 135 && (aQ = 135), cN.elem.css("height", aQ)),
        aQ && (eR = parseFloat(aQ) - (cN.layHeader.outerHeight() || 38), eL.toolbar && (eR -= cN.layTool.outerHeight() || 50), eL.totalRow && (eR -= cN.layTotal.outerHeight() || 40), eL.page && (eR -= cN.layPage.outerHeight() || 41), cN.layMain.css("height", eR - 2))
    },
    cOeR.prototype.getScrollWidth = function(eR) {
        var cN = 0;
        return eR ? cN = eR.offsetWidth - eR.clientWidth: (eR = document.createElement("div"), eR.style.width = "100px", eR.style.height = "100px", eR.style.overflowY = "scroll", document.body.appendChild(eR), cN = eR.offsetWidth - eR.clientWidth, document.body.removeChild(eR)),
        cN
    },
    cOeR.prototype.scrollPatch = function() {
        var eR = this,
        eL = eR.layMain.children("table"),
        aQ = eR.layMain.width() - eR.layMain.prop("clientWidth"),
        fL = eR.layMain.height() - eR.layMain.prop("clientHeight"),
        gL = (eR.getScrollWidth(eR.layMain[0]), eL.outerWidth() - eR.layMain.width()),
        cE = function(eR) {
            if (aQ && fL) {
                if (eR = eR.eq(0), !eR.find(".layui-table-patch")[0]) {
                    var eL = cN('<th class="layui-table-patch"><div class="layui-table-cell"></div></th>');
                    eL.find("div").css({
                        width: aQ
                    }),
                    eR.find("tr").append(eL)
                }
            } else eR.find(".layui-table-patch").remove()
        };
        cE(eR.layHeader),
        cE(eR.layTotal);
        var cO = eR.layMain.height(),
        gA = cO - fL;
        eR.layFixed.find(gX).css("height", eL.height() >= gA ? gA: "auto"),
        eR.layFixRight[gL > 0 ? "removeClass": "addClass"](bP),
        eR.layFixRight.css("right", aQ - 1)
    },
    cOeR.prototype.events = function() {
        var eR, eL = this,
        aQ = eL.config,
        cE = cN("body"),
        ea = {},
        eD = eL.layHeader.find("th"),
        aP = ".layui-table-cell",
        cT = aQ.elem.attr("lay-filter");
        eL.layTool.on("click", "*[lay-event]",
        function(eR) {
            var cE = cN(this),
            ea = cE.attr("lay-event"),
            eD = function(eR) {
                var fL = cN(eR.list),
                gL = cN('<ul class="layui-table-tool-panel"></ul>');
                gL.html(fL),
                aQ.height && gL.css("max-height", aQ.height - (eL.layTool.outerHeight() || 50)),
                cE.find(".layui-table-tool-panel")[0] || cE.append(gL),
                eL.renderForm(),
                gL.on("click",
                function(eR) {
                    layui.stope(eR)
                }),
                eR.done && eR.done(gL, fL)
            };
            switch (layui.stope(eR), cEeR.trigger("table.tool.panel.remove"), fL.close(eL.tipsIndex), ea) {
            case "LAYTABLE_COLS":
                eD({
                    list:
                    function() {
                        var eR = [];
                        return eL.eachCols(function(cN, eL) {
                            eL.field && "normal" == eL.type && eR.push('<li><input type="checkbox" name="' + eL.field + '" data-key="' + eL.key + '" data-parentkey="' + (eL.parentKey || "") + '" lay-skin="primary" ' + (eL.hide ? "": "checked") + ' title="' + (eL.title || eL.field) + '" lay-filter="LAY_TABLE_TOOL_COLS"></li>')
                        }),
                        eR.join("")
                    } (),
                    done: function() {
                        gL.on("checkbox(LAY_TABLE_TOOL_COLS)",
                        function(eR) {
                            var fL = cN(eR.elem),
                            gL = this.checked,
                            cE = fL.data("key"),
                            cO = fL.data("parentkey");
                            layui.each(aQ.cols,
                            function(eR, cN) {
                                layui.each(cN,
                                function(cN, fL) {
                                    if (eR + "-" + cN === cE) {
                                        var gA = fL.hide;
                                        fL.hide = !gL,
                                        eL.elem.find('*[data-key="' + aQ.index + "-" + cE + '"]')[gL ? "removeClass": "addClass"](bP),
                                        gA != fL.hide && eL.setParentCol(!gL, cO),
                                        eL.resize()
                                    }
                                })
                            })
                        })
                    }
                });
                break;
            case "LAYTABLE_EXPORT":
                cO.ie ? fL.tips("导出功能不支持 IE，请用 Chrome 等高级浏览器导出", this, {
                    tips: 3
                }) : eD({
                    list: function() {
                        return ['<li data-type="csv">导出到 Csv 文件</li>', '<li data-type="xls">导出到 Excel 文件</li>'].join("")
                    } (),
                    done: function(eR, fL) {
                        fL.on("click",
                        function() {
                            var eR = cN(this).data("type");
                            gA.exportFile.call(eL, aQ.id, null, eR)
                        })
                    }
                });
                break;
            case "LAYTABLE_PRINT":
                var cI = window.open("打印窗口", "_blank"),
                aP = ["<style>", "body{font-size: 12px; color: #666;}", "table{width: 100%; border-collapse: collapse; border-spacing: 0;}", "th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #666;}", "a{color: #666; text-decoration:none;}", "*.layui-hide{display: none}", "</style>"].join(""),
                dE = cN(eL.layHeader.html());
                dE.append(eL.layMain.find("table").html()),
                dE.append(eL.layTotal.find("table").html()),
                dE.find("th.layui-table-patch").remove(),
                dE.find(".layui-table-col-special").remove(),
                cI.document.write(aP + dE.prop("outerHTML")),
                cI.document.close(),
                cI.print(),
                cI.close()
            }
            layui.event.call(this, eN, "toolbar(" + cT + ")", cN.extend({
                event: ea,
                config: aQ
            },
            {}))
        }),
        eD.on("mousemove",
        function(eR) {
            var eL = cN(this),
            aQ = eL.offset().left,
            fL = eR.clientX - aQ;
            eL.data("unresize") || ea.resizeStart || (ea.allowResize = eL.width() - fL <= 10, cE.css("cursor", ea.allowResize ? "col-resize": ""))
        }).on("mouseleave",
        function() {
            cN(this);
            ea.resizeStart || cE.css("cursor", "")
        }).on("mousedown",
        function(eR) {
            var fL = cN(this);
            if (ea.allowResize) {
                var gL = fL.data("key");
                eR.preventDefault(),
                ea.resizeStart = !0,
                ea.offset = [eR.clientX, eR.clientY],
                eL.getCssRule(gL,
                function(eR) {
                    var cN = eR.style.width || fL.outerWidth();
                    ea.rule = eR,
                    ea.ruleWidth = parseFloat(cN),
                    ea.minWidth = fL.data("minwidth") || aQ.cellMinWidth
                })
            }
        }),
        cEeR.on("mousemove",
        function(cN) {
            if (ea.resizeStart) {
                if (cN.preventDefault(), ea.rule) {
                    var aQ = ea.ruleWidth + cN.clientX - ea.offset[0];
                    aQ < ea.minWidth && (aQ = ea.minWidth),
                    ea.rule.style.width = aQ + "px",
                    fL.close(eL.tipsIndex)
                }
                eR = 1
            }
        }).on("mouseup",
        function(cN) {
            ea.resizeStart && (ea = {},
            cE.css("cursor", ""), eL.scrollPatch()),
            2 === eR && (eR = null)
        }),
        eD.on("click",
        function(aQ) {
            var fL, gL = cN(this),
            cE = gL.find(aA),
            cO = cE.attr("lay-sort");
            return cE[0] && 1 !== eR ? (fL = "asc" === cO ? "desc": "desc" === cO ? null: "asc", void eL.sort(gL, fL, null, !0)) : eR = 2
        }).find(aA + " .layui-edge ").on("click",
        function(eR) {
            var aQ = cN(this),
            fL = aQ.index(),
            gL = aQ.parents("th").eq(0).data("field");
            layui.stope(eR),
            0 === fL ? eL.sort(gL, "asc", null, !0) : eL.sort(gL, "desc", null, !0)
        });
        var dE = function(eR) {
            var aQ = cN(this),
            fL = aQ.parents("tr").eq(0).data("index"),
            gL = eL.layBody.find('tr[data-index="' + fL + '"]'),
            cE = gA.cache[eL.key] || [];
            return cE = cE[fL] || {},
            cN.extend({
                tr: gL,
                data: gA.clearCacheKey(cE),
                del: function() {
                    gA.cache[eL.key][fL] = [],
                    gL.remove(),
                    eL.scrollPatch()
                },
                update: function(eR) {
                    eR = eR || {},
                    layui.each(eR,
                    function(eR, cN) {
                        if (eR in cE) {
                            var aQ, fL = gL.children('td[data-field="' + eR + '"]');
                            cE[eR] = cN,
                            eL.eachCols(function(cN, eL) {
                                eL.field == eR && eL.templet && (aQ = eL.templet)
                            }),
                            fL.children(aP).html(cI({
                                templet: aQ
                            },
                            cN, cE)),
                            fL.data("content", cN)
                        }
                    })
                }
            },
            eR)
        };
        eL.elem.on("click", 'input[name="layTableCheckbox"]+',
        function() {
            var eR = cN(this).prev(),
            aQ = eL.layBody.find('input[name="layTableCheckbox"]'),
            fL = eR.parents("tr").eq(0).data("index"),
            gL = eR[0].checked,
            cE = "layTableAllChoose" === eR.attr("lay-filter");
            cE ? (aQ.each(function(eR, cN) {
                cN.checked = gL,
                eL.setCheckData(eR, gL)
            }), eL.syncCheckAll(), eL.renderForm("checkbox")) : (eL.setCheckData(fL, gL), eL.syncCheckAll()),
            layui.event.call(eR[0], eN, "checkbox(" + cT + ")", dE.call(eR[0], {
                checked: gL,
                type: cE ? "all": "one"
            }))
        }),
        eL.elem.on("click", 'input[lay-type="layTableRadio"]+',
        function() {
            var eR = cN(this).prev(),
            aQ = eR[0].checked,
            fL = gA.cache[eL.key],
            gL = eR.parents("tr").eq(0).data("index");
            layui.each(fL,
            function(eR, cN) {
                gL === eR ? cN.LAY_CHECKED = !0 : delete cN.LAY_CHECKED
            }),
            eL.setThisRowChecked(gL),
            layui.event.call(this, eN, "radio(" + cT + ")", dE.call(this, {
                checked: aQ
            }))
        }),
        eL.layBody.on("mouseenter", "tr",
        function() {
            var eR = cN(this),
            aQ = eR.index();
            eR.data("off") || eL.layBody.find("tr:eq(" + aQ + ")").addClass(cNeR)
        }).on("mouseleave", "tr",
        function() {
            var eR = cN(this),
            aQ = eR.index();
            eR.data("off") || eL.layBody.find("tr:eq(" + aQ + ")").removeClass(cNeR)
        }).on("click", "tr",
        function() {
            fB.call(this, "row")
        }).on("dblclick", "tr",
        function() {
            fB.call(this, "rowDouble")
        });
        var fB = function(eR) {
            var eL = cN(this);
            eL.data("off") || layui.event.call(this, eN, eR + "(" + cT + ")", dE.call(eL.children("td")[0]))
        };
        eL.layBody.on("change", "." + eReR,
        function() {
            var eR = cN(this),
            aQ = this.value,
            fL = eR.parent().data("field"),
            gL = eR.parents("tr").eq(0).data("index"),
            cE = gA.cache[eL.key][gL];
            cE[fL] = aQ,
            layui.event.call(this, eN, "edit(" + cT + ")", dE.call(this, {
                value: aQ,
                field: fL
            }))
        }).on("blur", "." + eReR,
        function() {
            var eR, aQ = cN(this),
            fL = this,
            gL = aQ.parent().data("field"),
            cE = aQ.parents("tr").eq(0).data("index"),
            cO = gA.cache[eL.key][cE];
            eL.eachCols(function(cN, eL) {
                eL.field == gL && eL.templet && (eR = eL.templet)
            }),
            aQ.siblings(aP).html(function(cN) {
                return cI({
                    templet: eR
                },
                cN, cO)
            } (fL.value)),
            aQ.parent().data("content", fL.value),
            aQ.remove()
        }),
        eL.layBody.on("click", "td",
        function(eR) {
            var eL = cN(this),
            aQ = (eL.data("field"), eL.data("edit")),
            fL = eL.children(aP);
            if (!eL.data("off") && aQ) {
                var gL = cN('<input class="layui-input ' + eReR + '">');
                return gL[0].value = eL.data("content") || fL.text(),
                eL.find("." + eReR)[0] || eL.append(gL),
                gL.focus(),
                void layui.stope(eR)
            }
        }).on("mouseenter", "td",
        function() {
            hc.call(this)
        }).on("mouseleave", "td",
        function() {
            hc.call(this, "hide")
        });
        var fd = "layui-table-grid-down",
        hc = function(eR) {
            var eL = cN(this),
            aQ = eL.children(aP);
            if (!eL.data("off")) if (eR) eL.find(".layui-table-grid-down").remove();
            else if (aQ.prop("scrollWidth") > aQ.outerWidth()) {
                if (aQ.find("." + fd)[0]) return;
                eL.append('<div class="' + fd + '"><i class="layui-icon layui-icon-down"></i></div>')
            }
        };
        eL.layBody.on("click", "." + fd,
        function(eR) {
            var gL = cN(this),
            cE = gL.parent(),
            gA = cE.children(aP);
            eL.tipsIndex = fL.tips(['<div class="layui-table-tips-main" style="margin-top: -' + (gA.height() + 16) + "px;" +
            function() {
                return "sm" === aQ.size ? "padding: 4px 15px; font-size: 12px;": "lg" === aQ.size ? "padding: 14px 15px;": ""
            } () + '">', gA.html(), "</div>", '<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'].join(""), gA[0], {
                tips: [3, ""],
                time: -1,
                anim: -1,
                maxWidth: cO.ios || cO.android ? 300 : eL.elem.width() / 2,
                isOutAnim: !1,
                skin: "layui-table-tips",
                success: function(eR, cN) {
                    eR.find(".layui-table-tips-c").on("click",
                    function() {
                        fL.close(cN)
                    })
                }
            }),
            layui.stope(eR)
        }),
        eL.layBody.on("click", "*[lay-event]",
        function() {
            var eR = cN(this),
            aQ = eR.parents("tr").eq(0).data("index");
            layui.event.call(this, eN, "tool(" + cT + ")", dE.call(this, {
                event: eR.attr("lay-event")
            })),
            eL.setThisRowChecked(aQ)
        }),
        eL.layMain.on("scroll",
        function() {
            var eR = cN(this),
            aQ = eR.scrollLeft(),
            gL = eR.scrollTop();
            eL.layHeader.scrollLeft(aQ),
            eL.layTotal.scrollLeft(aQ),
            eL.layFixed.find(gX).scrollTop(gL),
            fL.close(eL.tipsIndex)
        }),
        gLeR.on("resize",
        function() {
            eL.resize()
        })
    },
    function() {
        cEeR.on("click",
        function() {
            cEeR.trigger("table.remove.tool.panel")
        }),
        cEeR.on("table.remove.tool.panel",
        function() {
            cN(".layui-table-tool-panel").remove()
        })
    } (),
    gA.init = function(eR, eL) {
        eL = eL || {};
        var aQ = this,
        fL = cN(eR ? 'table[lay-filter="' + eR + '"]': aP + "[lay-data]"),
        gL = "Table element property lay-data configuration item has a syntax error: ";
        return fL.each(function() {
            var aQ = cN(this),
            fL = aQ.attr("lay-data");
            try {
                fL = new Function("return " + fL)()
            } catch(eR) {
                cE.error(gL + fL)
            }
            var cO = [],
            ea = cN.extend({
                elem: this,
                cols: [],
                data: [],
                skin: aQ.attr("lay-skin"),
                size: aQ.attr("lay-size"),
                even: "string" == typeof aQ.attr("lay-even")
            },
            gA.config, eL, fL);
            eR && aQ.hide(),
            aQ.find("thead>tr").each(function(eR) {
                ea.cols[eR] = [],
                cN(this).children().each(function(eL) {
                    var aQ = cN(this),
                    fL = aQ.attr("lay-data");
                    try {
                        fL = new Function("return " + fL)()
                    } catch(eR) {
                        return cE.error(gL + fL)
                    }
                    var gA = cN.extend({
                        title: aQ.text(),
                        colspan: aQ.attr("colspan") || 0,
                        rowspan: aQ.attr("rowspan") || 0
                    },
                    fL);
                    gA.colspan < 2 && cO.push(gA),
                    ea.cols[eR].push(gA)
                })
            }),
            aQ.find("tbody>tr").each(function(eR) {
                var eL = cN(this),
                aQ = {};
                eL.children("td").each(function(eR, eL) {
                    var fL = cN(this),
                    gL = fL.data("field");
                    if (gL) return aQ[gL] = fL.html()
                }),
                layui.each(cO,
                function(eR, cN) {
                    var fL = eL.children("td").eq(eR);
                    aQ[cN.field] = fL.html()
                }),
                ea.data[eR] = aQ
            }),
            gA.render(ea)
        }),
        aQ
    },
    ea.that = {},
    ea.config = {},
    gA.eachCols = function(eR, eL, aQ) {
        var fL = ea.config[eR] || {},
        gL = [],
        cE = 0;
        aQ = cN.extend(!0, [], aQ || fL.cols),
        layui.each(aQ,
        function(eR, cN) {
            layui.each(cN,
            function(cN, eL) {
                if (eL.colGroup) {
                    var fL = 0;
                    cE++,
                    eL.CHILD_COLS = [],
                    layui.each(aQ[eR + 1],
                    function(eR, cN) {
                        cN.PARENT_COL_INDEX || fL > 1 && fL == eL.colspan || (cN.PARENT_COL_INDEX = cE, eL.CHILD_COLS.push(cN), fL += parseInt(cN.colspan > 1 ? cN.colspan: 1))
                    })
                }
                eL.PARENT_COL_INDEX || gL.push(eL)
            })
        });
        var cO = function(eR) {
            layui.each(eR || gL,
            function(eR, cN) {
                return cN.CHILD_COLS ? cO(cN.CHILD_COLS) : void("function" == typeof eL && eL(eR, cN))
            })
        };
        cO()
    },
    gA.checkStatus = function(eR) {
        var cN = 0,
        eL = 0,
        aQ = [],
        fL = gA.cache[eR] || [];
        return layui.each(fL,
        function(eR, fL) {
            return fL.constructor === Array ? void eL++:void(fL[gA.config.checkName] && (cN++, aQ.push(gA.clearCacheKey(fL))))
        }),
        {
            data: aQ,
            isAll: !!fL.length && cN === fL.length - eL
        }
    },
    gA.exportFile = function(eR, cN, eL) {
        var aQ = this;
        cN = cN || gA.clearCacheKey(gA.cache[eR]),
        eL = eL || "csv";
        var fL = ea.config[eR] || {},
        gL = {
            csv: "text/csv",
            xls: "application/vnd.ms-excel"
        } [eL],
        eD = document.createElement("a");
        return cO.ie ? cE.error("IE_NOT_SUPPORT_EXPORTS") : (eD.href = "data:" + gL + ";charset=utf-8,\ufeff" + encodeURIComponent(function() {
            var eL = [],
            fL = [],
            gL = [];
            return layui.each(cN,
            function(cN, aQ) {
                var gL = [];
                "object" == typeof eR ? (layui.each(eR,
                function(eR, aQ) {
                    0 == cN && eL.push(aQ || "")
                }), layui.each(gA.clearCacheKey(aQ),
                function(eR, cN) {
                    gL.push('"' + (cN || "") + '"')
                })) : gA.eachCols(eR,
                function(eR, fL) {
                    if (fL.field && "normal" == fL.type && !fL.hide) {
                        var cE = aQ[fL.field];
                        void 0 !== cE && null !== cE || (cE = ""),
                        0 == cN && eL.push(fL.title || ""),
                        gL.push('"' + cI(fL, cE, aQ, "text") + '"')
                    }
                }),
                fL.push(gL.join(","))
            }),
            layui.each(aQ.dataTotal,
            function(eR, cN) {
                gL.push(cN)
            }),
            eL.join(",") + "\r\n" + fL.join("\r\n") + "\r\n" + gL.join(",")
        } ()), eD.download = (fL.title || "table_" + (fL.index || "")) + "." + eL, document.body.appendChild(eD), eD.click(), void document.body.removeChild(eD))
    },
    gA.resize = function(eR) {
        if (eR) {
            var cN = eD(eR);
            if (!cN) return;
            ea.that[eR].resize()
        } else layui.each(ea.that,
        function() {
            this.resize()
        })
    },
    gA.reload = function(eR, cN) {
        var eL = eD(eR);
        if (eL) {
            var aQ = ea.that[eR];
            return aQ.reload(cN),
            ea.call(aQ)
        }
    },
    gA.render = function(eR) {
        var cN = new cOeR(eR);
        return ea.call(cN)
    },
    gA.clearCacheKey = function(eR) {
        return eR = cN.extend({},
        eR),
        delete eR[gA.config.checkName],
        delete eR[gA.config.indexName],
        eR
    },
    gA.init(),
    eR(eN, gA)
});