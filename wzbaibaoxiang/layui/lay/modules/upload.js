layui.define("layer",
function(aIdD) {
    "use strict";
    var aMaE = layui.$,
    aWfb = layui.layer,
    cBdj = layui.hint(),
    cAaD = layui.device(),
    faaW = {
        config: {},
        set: function(aIdD) {
            var aWfb = this;
            return aWfb.config = aMaE.extend({},
            aWfb.config, aIdD),
            aWfb
        },
        on: function(aIdD, aMaE) {
            return layui.onevent.call(this, aZaH, aIdD, aMaE)
        }
    },
    cEeU = function() {
        var aIdD = this;
        return {
            upload: function(aMaE) {
                aIdD.upload.call(aIdD, aMaE)
            },
            reload: function(aMaE) {
                aIdD.reload.call(aIdD, aMaE)
            },
            config: aIdD.config
        }
    },
    aZaH = "upload",
    dhdZ = "layui-upload-file",
    bOeF = "layui-upload-form",
    accD = "layui-upload-iframe",
    fJaJ = "layui-upload-choose",
    fddS = function(aIdD) {
        var aWfb = this;
        aWfb.config = aMaE.extend({},
        aWfb.config, faaW.config, aIdD),
        aWfb.render()
    };
    fddS.prototype.config = {
        accept: "images",
        exts: "",
        auto: !0,
        bindAction: "",
        url: "",
        field: "file",
        acceptMime: "",
        method: "post",
        data: {},
        drag: !0,
        size: 0,
        number: 0,
        multiple: !1
    },
    fddS.prototype.render = function(aIdD) {
        var aWfb = this,
        aIdD = aWfb.config;
        aIdD.elem = aMaE(aIdD.elem),
        aIdD.bindAction = aMaE(aIdD.bindAction),
        aWfb.file(),
        aWfb.events()
    },
    fddS.prototype.file = function() {
        var aIdD = this,
        aWfb = aIdD.config,
        cBdj = aIdD.elemFile = aMaE(['<input class="' + dhdZ + '" type="file" accept="' + aWfb.acceptMime + '" name="' + aWfb.field + '"', aWfb.multiple ? " multiple": "", ">"].join("")),
        faaW = aWfb.elem.next(); (faaW.hasClass(dhdZ) || faaW.hasClass(bOeF)) && faaW.remove(),
        cAaD.ie && cAaD.ie < 10 && aWfb.elem.wrap('<div class="layui-upload-wrap"></div>'),
        aIdD.isFile() ? (aIdD.elemFile = aWfb.elem, aWfb.field = aWfb.elem[0].name) : aWfb.elem.after(cBdj),
        cAaD.ie && cAaD.ie < 10 && aIdD.initIE()
    },
    fddS.prototype.initIE = function() {
        var aIdD = this,
        aWfb = aIdD.config,
        cBdj = aMaE('<iframe id="' + accD + '" class="' + accD + '" name="' + accD + '" frameborder="0"></iframe>'),
        cAaD = aMaE(['<form target="' + accD + '" class="' + bOeF + '" method="post" key="set-mine" enctype="multipart/form-data" action="' + aWfb.url + '">', "</form>"].join(""));
        aMaE("#" + accD)[0] || aMaE("body").append(cBdj),
        aWfb.elem.next().hasClass(bOeF) || (aIdD.elemFile.wrap(cAaD), aWfb.elem.next("." + bOeF).append(function() {
            var aIdD = [];
            return layui.each(aWfb.data,
            function(aMaE, aWfb) {
                aWfb = "function" == typeof aWfb ? aWfb() : aWfb,
                aIdD.push('<input type="hidden" name="' + aMaE + '" value="' + aWfb + '">')
            }),
            aIdD.join("")
        } ()))
    },
    fddS.prototype.msg = function(aIdD) {
        return aWfb.msg(aIdD, {
            icon: 2,
            shift: 6
        })
    },
    fddS.prototype.isFile = function() {
        var aIdD = this.config.elem[0];
        if (aIdD) return "input" === aIdD.tagName.toLocaleLowerCase() && "file" === aIdD.type
    },
    fddS.prototype.preview = function(aIdD) {
        var aMaE = this;
        window.FileReader && layui.each(aMaE.chooseFiles,
        function(aMaE, aWfb) {
            var cBdj = new FileReader;
            cBdj.readAsDataURL(aWfb),
            cBdj.onload = function() {
                aIdD && aIdD(aMaE, aWfb, this.result)
            }
        })
    },
    fddS.prototype.upload = function(aIdD, aWfb) {
        var cBdj, faaW = this,
        cEeU = faaW.config,
        aZaH = faaW.elemFile[0],
        dhdZ = function() {
            var aWfb = 0,
            cBdj = 0,
            cAaD = aIdD || faaW.files || faaW.chooseFiles || aZaH.files,
            dhdZ = function() {
                cEeU.multiple && aWfb + cBdj === faaW.fileLength && "function" == typeof cEeU.allDone && cEeU.allDone({
                    total: faaW.fileLength,
                    successful: aWfb,
                    aborted: cBdj
                })
            };
            layui.each(cAaD,
            function(aIdD, cAaD) {
                var aZaH = new FormData;
                aZaH.append(cEeU.field, cAaD),
                layui.each(cEeU.data,
                function(aIdD, aMaE) {
                    aMaE = "function" == typeof aMaE ? aMaE() : aMaE,
                    aZaH.append(aIdD, aMaE)
                });
                var bOeF = {
                    url: cEeU.url,
                    type: "post",
                    data: aZaH,
                    contentType: !1,
                    processData: !1,
                    dataType: "json",
                    headers: cEeU.headers || {},
                    success: function(aMaE) {
                        aWfb++,
                        digj(aIdD, aMaE),
                        dhdZ()
                    },
                    error: function() {
                        cBdj++,
                        faaW.msg("请求上传接口出现异常"),
                        gYbF(aIdD),
                        dhdZ()
                    }
                };
                "function" == typeof cEeU.progress && (bOeF.xhr = function() {
                    var aIdD = aMaE.ajaxSettings.xhr();
                    return aIdD.upload.addEventListener("progress",
                    function(aIdD) {
                        if (aIdD.lengthComputable) {
                            var aMaE = Math.floor(aIdD.loaded / aIdD.total * 100);
                            cEeU.progress(aMaE, cEeU.item[0], aIdD)
                        }
                    }),
                    aIdD
                }),
                aMaE.ajax(bOeF)
            })
        },
        bOeF = function() {
            var aIdD = aMaE("#" + accD);
            faaW.elemFile.parent().submit(),
            clearInterval(fddS.timer),
            fddS.timer = setInterval(function() {
                var aMaE, aWfb = aIdD.contents().find("body");
                try {
                    aMaE = aWfb.text()
                } catch(aIdD) {
                    faaW.msg("获取上传后的响应信息出现异常"),
                    clearInterval(fddS.timer),
                    gYbF()
                }
                aMaE && (clearInterval(fddS.timer), aWfb.html(""), digj(0, aMaE))
            },
            30)
        },
        digj = function(aIdD, aMaE) {
            if (faaW.elemFile.next("." + fJaJ).remove(), aZaH.value = "", "object" != typeof aMaE) try {
                aMaE = JSON.parse(aMaE)
            } catch(aIdD) {
                return aMaE = {},
                faaW.msg("请对上传接口返回有效JSON")
            }
            "function" == typeof cEeU.done && cEeU.done(aMaE, aIdD || 0,
            function(aIdD) {
                faaW.upload(aIdD)
            })
        },
        gYbF = function(aIdD) {
            cEeU.auto && (aZaH.value = ""),
            "function" == typeof cEeU.error && cEeU.error(aIdD || 0,
            function(aIdD) {
                faaW.upload(aIdD)
            })
        },
        aIdDaIdD = cEeU.exts,
        aMaEaIdD = function() {
            var aMaE = [];
            return layui.each(aIdD || faaW.chooseFiles,
            function(aIdD, aWfb) {
                aMaE.push(aWfb.name)
            }),
            aMaE
        } (),
        aWfbaIdD = {
            preview: function(aIdD) {
                faaW.preview(aIdD)
            },
            upload: function(aIdD, aMaE) {
                var aWfb = {};
                aWfb[aIdD] = aMaE,
                faaW.upload(aWfb)
            },
            pushFile: function() {
                return faaW.files = faaW.files || {},
                layui.each(faaW.chooseFiles,
                function(aIdD, aMaE) {
                    faaW.files[aIdD] = aMaE
                }),
                faaW.files
            },
            resetFile: function(aIdD, aMaE, aWfb) {
                var cBdj = new File([aMaE], aWfb);
                faaW.files = faaW.files || {},
                faaW.files[aIdD] = cBdj
            }
        },
        cBdjaIdD = function() {
            if ("choose" !== aWfb && !cEeU.auto || (cEeU.choose && cEeU.choose(aWfbaIdD), "choose" !== aWfb)) return cEeU.before && cEeU.before(aWfbaIdD),
            cAaD.ie ? cAaD.ie > 9 ? dhdZ() : bOeF() : void dhdZ()
        };
        if (aMaEaIdD = 0 === aMaEaIdD.length ? aZaH.value.match(/[^\/\\]+\..+/g) || [] || "": aMaEaIdD, 0 !== aMaEaIdD.length) {
            switch (cEeU.accept) {
            case "file":
                if (aIdDaIdD && !RegExp("\\w\\.(" + aIdDaIdD + ")$", "i").test(escape(aMaEaIdD))) return faaW.msg("选择的文件中包含不支持的格式"),
                aZaH.value = "";
                break;
            case "video":
                if (!RegExp("\\w\\.(" + (aIdDaIdD || "avi|mp4|wma|rmvb|rm|flash|3gp|flv") + ")$", "i").test(escape(aMaEaIdD))) return faaW.msg("选择的视频中包含不支持的格式"),
                aZaH.value = "";
                break;
            case "audio":
                if (!RegExp("\\w\\.(" + (aIdDaIdD || "mp3|wav|mid") + ")$", "i").test(escape(aMaEaIdD))) return faaW.msg("选择的音频中包含不支持的格式"),
                aZaH.value = "";
                break;
            default:
                if (layui.each(aMaEaIdD,
                function(aIdD, aMaE) {
                    RegExp("\\w\\.(" + (aIdDaIdD || "jpg|png|gif|bmp|jpeg$") + ")", "i").test(escape(aMaE)) || (cBdj = !0)
                }), cBdj) return faaW.msg("选择的图片中包含不支持的格式"),
                aZaH.value = ""
            }
            if (faaW.fileLength = function() {
                var aMaE = 0,
                aWfb = aIdD || faaW.files || faaW.chooseFiles || aZaH.files;
                return layui.each(aWfb,
                function() {
                    aMaE++
                }),
                aMaE
            } (), cEeU.number && faaW.fileLength > cEeU.number) return faaW.msg("同时最多只能上传的数量为：" + cEeU.number);
            if (cEeU.size > 0 && !(cAaD.ie && cAaD.ie < 10)) {
                var cAaDaIdD;
                if (layui.each(faaW.chooseFiles,
                function(aIdD, aMaE) {
                    if (aMaE.size > 1024 * cEeU.size) {
                        var aWfb = cEeU.size / 1024;
                        aWfb = aWfb >= 1 ? aWfb.toFixed(2) + "MB": cEeU.size + "KB",
                        aZaH.value = "",
                        cAaDaIdD = aWfb
                    }
                }), cAaDaIdD) return faaW.msg("文件不能超过" + cAaDaIdD)
            }
            cBdjaIdD()
        }
    },
    fddS.prototype.reload = function(aIdD) {
        aIdD = aIdD || {},
        delete aIdD.elem,
        delete aIdD.bindAction;
        var aWfb = this,
        aIdD = aWfb.config = aMaE.extend({},
        aWfb.config, faaW.config, aIdD),
        cBdj = aIdD.elem.next();
        cBdj.attr({
            name: aIdD.name,
            accept: aIdD.acceptMime,
            multiple: aIdD.multiple
        })
    },
    fddS.prototype.events = function() {
        var aIdD = this,
        aWfb = aIdD.config,
        faaW = function(aMaE) {
            aIdD.chooseFiles = {},
            layui.each(aMaE,
            function(aMaE, aWfb) {
                var cBdj = (new Date).getTime();
                aIdD.chooseFiles[cBdj + "-" + aMaE] = aWfb
            })
        },
        cEeU = function(aMaE, cBdj) {
            var cAaD = aIdD.elemFile,
            faaW = aMaE.length > 1 ? aMaE.length + "个文件": (aMaE[0] || {}).name || cAaD[0].value.match(/[^\/\\]+\..+/g) || [] || "";
            cAaD.next().hasClass(fJaJ) && cAaD.next().remove(),
            aIdD.upload(null, "choose"),
            aIdD.isFile() || aWfb.choose || cAaD.after('<span class="layui-inline ' + fJaJ + '">' + faaW + "</span>")
        };
        aWfb.elem.off("upload.start").on("upload.start",
        function() {
            var cAaD = aMaE(this),
            faaW = cAaD.attr("lay-data");
            if (faaW) try {
                faaW = new Function("return " + faaW)(),
                aIdD.config = aMaE.extend({},
                aWfb, faaW)
            } catch(aIdD) {
                cBdj.error("Upload element property lay-data configuration item has a syntax error: " + faaW)
            }
            aIdD.config.item = cAaD,
            aIdD.elemFile[0].click()
        }),
        cAaD.ie && cAaD.ie < 10 || aWfb.elem.off("upload.over").on("upload.over",
        function() {
            var aIdD = aMaE(this);
            aIdD.attr("lay-over", "")
        }).off("upload.leave").on("upload.leave",
        function() {
            var aIdD = aMaE(this);
            aIdD.removeAttr("lay-over")
        }).off("upload.drop").on("upload.drop",
        function(cBdj, cAaD) {
            var aZaH = aMaE(this),
            dhdZ = cAaD.originalEvent.dataTransfer.files || [];
            aZaH.removeAttr("lay-over"),
            faaW(dhdZ),
            aWfb.auto ? aIdD.upload(dhdZ) : cEeU(dhdZ)
        }),
        aIdD.elemFile.off("upload.change").on("upload.change",
        function() {
            var aMaE = this.files || [];
            faaW(aMaE),
            aWfb.auto ? aIdD.upload() : cEeU(aMaE)
        }),
        aWfb.bindAction.off("upload.action").on("upload.action",
        function() {
            aIdD.upload()
        }),
        aWfb.elem.data("haveEvents") || (aIdD.elemFile.on("change",
        function() {
            aMaE(this).trigger("upload.change")
        }), aWfb.elem.on("click",
        function() {
            aIdD.isFile() || aMaE(this).trigger("upload.start")
        }), aWfb.drag && aWfb.elem.on("dragover",
        function(aIdD) {
            aIdD.preventDefault(),
            aMaE(this).trigger("upload.over")
        }).on("dragleave",
        function(aIdD) {
            aMaE(this).trigger("upload.leave")
        }).on("drop",
        function(aIdD) {
            aIdD.preventDefault(),
            aMaE(this).trigger("upload.drop", aIdD)
        }), aWfb.bindAction.on("click",
        function() {
            aMaE(this).trigger("upload.action")
        }), aWfb.elem.data("haveEvents", !0))
    },
    faaW.render = function(aIdD) {
        var aMaE = new fddS(aIdD);
        return cEeU.call(aMaE)
    },
    aIdD(aZaH, faaW)
});