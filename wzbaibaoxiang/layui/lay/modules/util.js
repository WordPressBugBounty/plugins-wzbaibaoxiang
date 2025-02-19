layui.define("jquery",
function(fgaHcB) {
    "use strict";
    var aTcZdV = layui.$,
    dKcfbL = {
        fixbar: function(fgaHcB) {
            var dKcfbL, dafadO, gJgKfW = "layui-fixbar",
            dIgHge = "layui-fixbar-top",
            dVfScQ = aTcZdV(document),
            cDgSbY = aTcZdV("body");
            fgaHcB = aTcZdV.extend({
                showHeight: 200
            },
            fgaHcB),
            fgaHcB.bar1 = fgaHcB.bar1 === !0 ? "&#xe606;": fgaHcB.bar1,
            fgaHcB.bar2 = fgaHcB.bar2 === !0 ? "&#xe607;": fgaHcB.bar2,
            fgaHcB.bgcolor = fgaHcB.bgcolor ? "background-color:" + fgaHcB.bgcolor: "";
            var cPgGaZ = [fgaHcB.bar1, fgaHcB.bar2, "&#xe604;"],
            fLcQbI = aTcZdV(['<ul class="' + gJgKfW + '">', fgaHcB.bar1 ? '<li class="layui-icon" lay-type="bar1" style="' + fgaHcB.bgcolor + '">' + cPgGaZ[0] + "</li>": "", fgaHcB.bar2 ? '<li class="layui-icon" lay-type="bar2" style="' + fgaHcB.bgcolor + '">' + cPgGaZ[1] + "</li>": "", '<li class="layui-icon ' + dIgHge + '" lay-type="top" style="' + fgaHcB.bgcolor + '">' + cPgGaZ[2] + "</li>", "</ul>"].join("")),
            fgaHcBfgaHcB = fLcQbI.find("." + dIgHge),
            aTcZdVfgaHcB = function() {
                var aTcZdV = dVfScQ.scrollTop();
                aTcZdV >= fgaHcB.showHeight ? dKcfbL || (fgaHcBfgaHcB.show(), dKcfbL = 1) : dKcfbL && (fgaHcBfgaHcB.hide(), dKcfbL = 0)
            };
            aTcZdV("." + gJgKfW)[0] || ("object" == typeof fgaHcB.css && fLcQbI.css(fgaHcB.css), cDgSbY.append(fLcQbI), aTcZdVfgaHcB(), fLcQbI.find("li").on("click",
            function() {
                var dKcfbL = aTcZdV(this),
                dafadO = dKcfbL.attr("lay-type");
                "top" === dafadO && aTcZdV("html,body").animate({
                    scrollTop: 0
                },
                200),
                fgaHcB.click && fgaHcB.click.call(this, dafadO)
            }), dVfScQ.on("scroll",
            function() {
                clearTimeout(dafadO),
                dafadO = setTimeout(function() {
                    aTcZdVfgaHcB()
                },
                100)
            }))
        },
        countdown: function(fgaHcB, aTcZdV, dKcfbL) {
            var dafadO = this,
            gJgKfW = "function" == typeof aTcZdV,
            dIgHge = new Date(fgaHcB).getTime(),
            dVfScQ = new Date(!aTcZdV || gJgKfW ? (new Date).getTime() : aTcZdV).getTime(),
            cDgSbY = dIgHge - dVfScQ,
            cPgGaZ = [Math.floor(cDgSbY / 864e5), Math.floor(cDgSbY / 36e5) % 24, Math.floor(cDgSbY / 6e4) % 60, Math.floor(cDgSbY / 1e3) % 60];
            gJgKfW && (dKcfbL = aTcZdV);
            var fLcQbI = setTimeout(function() {
                dafadO.countdown(fgaHcB, dVfScQ + 1e3, dKcfbL)
            },
            1e3);
            return dKcfbL && dKcfbL(cDgSbY > 0 ? cPgGaZ: [0, 0, 0, 0], aTcZdV, fLcQbI),
            cDgSbY <= 0 && clearTimeout(fLcQbI),
            fLcQbI
        },
        timeAgo: function(fgaHcB, aTcZdV) {
            var dKcfbL = this,
            dafadO = [[], []],
            gJgKfW = (new Date).getTime() - new Date(fgaHcB).getTime();
            return gJgKfW > 26784e5 ? (gJgKfW = new Date(fgaHcB), dafadO[0][0] = dKcfbL.digit(gJgKfW.getFullYear(), 4), dafadO[0][1] = dKcfbL.digit(gJgKfW.getMonth() + 1), dafadO[0][2] = dKcfbL.digit(gJgKfW.getDate()), aTcZdV || (dafadO[1][0] = dKcfbL.digit(gJgKfW.getHours()), dafadO[1][1] = dKcfbL.digit(gJgKfW.getMinutes()), dafadO[1][2] = dKcfbL.digit(gJgKfW.getSeconds())), dafadO[0].join("-") + " " + dafadO[1].join(":")) : gJgKfW >= 864e5 ? (gJgKfW / 1e3 / 60 / 60 / 24 | 0) + "天前": gJgKfW >= 36e5 ? (gJgKfW / 1e3 / 60 / 60 | 0) + "小时前": gJgKfW >= 18e4 ? (gJgKfW / 1e3 / 60 | 0) + "分钟前": gJgKfW < 0 ? "未来": "刚刚"
        },
        digit: function(fgaHcB, aTcZdV) {
            var dKcfbL = "";
            fgaHcB = String(fgaHcB),
            aTcZdV = aTcZdV || 2;
            for (var dafadO = fgaHcB.length; dafadO < aTcZdV; dafadO++) dKcfbL += "0";
            return fgaHcB < Math.pow(10, aTcZdV) ? dKcfbL + (0 | fgaHcB) : fgaHcB
        },
        toDateString: function(fgaHcB, aTcZdV) {
            var dKcfbL = this,
            dafadO = new Date(fgaHcB || new Date),
            gJgKfW = [dKcfbL.digit(dafadO.getFullYear(), 4), dKcfbL.digit(dafadO.getMonth() + 1), dKcfbL.digit(dafadO.getDate())],
            dIgHge = [dKcfbL.digit(dafadO.getHours()), dKcfbL.digit(dafadO.getMinutes()), dKcfbL.digit(dafadO.getSeconds())];
            return aTcZdV = aTcZdV || "yyyy-MM-dd HH:mm:ss",
            aTcZdV.replace(/yyyy/g, gJgKfW[0]).replace(/MM/g, gJgKfW[1]).replace(/dd/g, gJgKfW[2]).replace(/HH/g, dIgHge[0]).replace(/mm/g, dIgHge[1]).replace(/ss/g, dIgHge[2])
        },
        escape: function(fgaHcB) {
            return String(fgaHcB || "").replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
        },
        event: function(fgaHcB, dafadO, gJgKfW) {
            var dIgHge = aTcZdV("body");
            return gJgKfW = gJgKfW || "click",
            dafadO = dKcfbL.event[fgaHcB] = aTcZdV.extend(!0, dKcfbL.event[fgaHcB], dafadO) || {},
            dKcfbL.event.UTIL_EVENT_CALLBACK = dKcfbL.event.UTIL_EVENT_CALLBACK || {},
            dIgHge.off(gJgKfW, "*[" + fgaHcB + "]", dKcfbL.event.UTIL_EVENT_CALLBACK[fgaHcB]),
            dKcfbL.event.UTIL_EVENT_CALLBACK[fgaHcB] = function() {
                var dKcfbL = aTcZdV(this),
                gJgKfW = dKcfbL.attr(fgaHcB);
                "function" == typeof dafadO[gJgKfW] && dafadO[gJgKfW].call(this, dKcfbL)
            },
            dIgHge.on(gJgKfW, "*[" + fgaHcB + "]", dKcfbL.event.UTIL_EVENT_CALLBACK[fgaHcB]),
            dafadO
        }
    }; !
    function(fgaHcB, aTcZdV, dKcfbL) {
        "$:nomunge";
        function dafadO() {
            gJgKfW = aTcZdV[cDgSbY](function() {
                dIgHge.each(function() {
                    var aTcZdV = fgaHcB(this),
                    dKcfbL = aTcZdV.width(),
                    dafadO = aTcZdV.height(),
                    gJgKfW = fgaHcB.data(this, fLcQbI); (dKcfbL !== gJgKfW.w || dafadO !== gJgKfW.h) && aTcZdV.trigger(cPgGaZ, [gJgKfW.w = dKcfbL, gJgKfW.h = dafadO])
                }),
                dafadO()
            },
            dVfScQ[fgaHcBfgaHcB])
        }
        var gJgKfW, dIgHge = fgaHcB([]),
        dVfScQ = fgaHcB.resize = fgaHcB.extend(fgaHcB.resize, {}),
        cDgSbY = "setTimeout",
        cPgGaZ = "resize",
        fLcQbI = cPgGaZ + "-special-event",
        fgaHcBfgaHcB = "delay",
        aTcZdVfgaHcB = "throttleWindow";
        dVfScQ[fgaHcBfgaHcB] = 250,
        dVfScQ[aTcZdVfgaHcB] = !0,
        fgaHcB.event.special[cPgGaZ] = {
            setup: function() {
                if (!dVfScQ[aTcZdVfgaHcB] && this[cDgSbY]) return ! 1;
                var aTcZdV = fgaHcB(this);
                dIgHge = dIgHge.add(aTcZdV),
                fgaHcB.data(this, fLcQbI, {
                    w: aTcZdV.width(),
                    h: aTcZdV.height()
                }),
                1 === dIgHge.length && dafadO()
            },
            teardown: function() {
                if (!dVfScQ[aTcZdVfgaHcB] && this[cDgSbY]) return ! 1;
                var aTcZdV = fgaHcB(this);
                dIgHge = dIgHge.not(aTcZdV),
                aTcZdV.removeData(fLcQbI),
                dIgHge.length || clearTimeout(gJgKfW)
            },
            add: function(aTcZdV) {
                function dafadO(aTcZdV, dafadO, dIgHge) {
                    var dVfScQ = fgaHcB(this),
                    cDgSbY = fgaHcB.data(this, fLcQbI) || {};
                    cDgSbY.w = dafadO !== dKcfbL ? dafadO: dVfScQ.width(),
                    cDgSbY.h = dIgHge !== dKcfbL ? dIgHge: dVfScQ.height(),
                    gJgKfW.apply(this, arguments)
                }
                if (!dVfScQ[aTcZdVfgaHcB] && this[cDgSbY]) return ! 1;
                var gJgKfW;
                return fgaHcB.isFunction(aTcZdV) ? (gJgKfW = aTcZdV, dafadO) : (gJgKfW = aTcZdV.handler, void(aTcZdV.handler = dafadO))
            }
        }
    } (aTcZdV, window),
    fgaHcB("util", dKcfbL)
});