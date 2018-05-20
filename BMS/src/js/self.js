function _defineProperty(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o,
    t
}
$(function() {
    $("body").css("opacity", "1")
});
var options = {},
newStyleContent = {
    insertCss: "\n            .ff_bodyMask {\n                position: fixed;\n                z-index: 10000;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: rgba(0, 0, 0, .3);\n                display: none;\n            }\n            .ff_bodyMask-content {\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                background: #fff;\n                transform: translate3D(-50%, -60%, 0);\n            }\n        "
},
job = {}; !
function(t, e) {
    e.fn.extend({
        simpleSlider: function(t) {
            function o(t, e) {
                var o, n;
                "left" == l.style ? (n = "lr", o = e ? s: i) : "top" == l.style && (n = "bt", o = e ? r: a),
                e && (t < m ? t = l.items * Math.floor(t / l.items) - 1 : t > m && (t = l.items * Math.ceil(t / l.items), t = Math.min(t, p.length - l.items))),
                t = Math.max(t, 0),
                t = Math.min(t, p.length - 1);
                var h, f = p.eq(t);
                tools.getRelPos(f, c),
                tools.getRelPos(f, d);
                tools.tabActive(p.eq(t)),
                e ? d.css({
                    transform: function() {
                        var e, i = -o[t];
                        return "lr" == n ? e = "translate3D(" + i + "px, 0px, 0px)": "bt" == n && (e = "translate3D(0px, " + i + "px, 0px)"),
                        e
                    }
                }) : p[t - 1] && tools.getRelPos(c, p.eq(t - 1))[l.style] < 0 ? (h = tools.getRelPos(p.eq(t - 1), d), d.css({
                    transform: function() {
                        return "translate3D(" + h.left + "px, " + h.top + "px, 0px)"
                    }
                })) : o[t + 1] && o[t + 1] < 0 && d.css({
                    transform: function() {
                        var e, i = o[t + 1];
                        return "lr" == n ? e = "translate3D(" + i + "px, 0px, 0px)": "bt" == n && (e = "translate3D(0px, " + i + "px, 0px)"),
                        e
                    }
                }),
                m = t,
                c.trigger("change-simpleSlider", [{
                    item: m
                }])
            }
            var n = 0,
            i = [],
            s = [],
            a = [],
            r = [],
            l = {
                style: "top",
                items: 3,
                dir: !0,
                margin: 0,
                speed: 800
            },
            d = e(this),
            c = d.parent(),
            p = (parseInt(c.css("padding-left")).toFixed(2), parseInt(c.css("padding-right")).toFixed(2), parseInt(c.css("padding-top")).toFixed(2), parseInt(c.css("padding-bottom")).toFixed(2), d.children()),
            m = 0;
            if (p.eq(0).addClass("active"), p.wrapAll('<div class="simple-slider-outer"><div class="simple-slider-stage"></div></div>'), d = e(this).find(".simple-slider-stage"), c = d.parent(), e.extend(l, t, !0), l.dir && e('\n<div class="owl-nav">\n<div class="owl-prev">\n<i class="icon iconfont icon-back"></i>\n</div>\n<div class="owl-next">\n<i class="iconfont icon-more"></i>\n</div>\n</div>').insertAfter(c), l.items = l.items ? l.items: Math.round(c.width() / p.eq(0).width()), c.css({
                overflow: "hidden"
            }), d.css({
                transition: l.speed / 1e3 + "s"
            }), "left" == l.style) l.margin = l.margin ? l.margin: -parseInt(e(this).css("margin-right")),
            p.each(function(t, o) {
                e(o).css({
                    width: function() {
                        return n += ((c.width() + l.margin) / l.items).toFixed(3) - l.margin + l.margin,
                        ((c.width() + l.margin) / l.items).toFixed(3) - l.margin
                    }
                }),
                i.push(Math.max(n - c.width())),
                s.push(n)
            }),
            s.unshift(0),
            d.css({
                width: n
            }),
            p.css({
                float: "left",
                "margin-right": l.margin
            });
            else if ("top" == l.style) {
                l.margin = l.margin ? l.margin: parseInt(e(this).css("margin-bottom")),
                p.each(function(t, o) {
                    e(o).css({
                        width: function() {
                            return e(this).outerWidth()
                        },
                        height: function() {
                            return e(this).outerHeight()
                        }
                    })
                });
                p.eq(0).height();
                p.css({
                    float: "none",
                    "margin-bottom": l.margin
                }),
                d.css({
                    height: "auto"
                }),
                c.css({
                    height: function() {
                        return (p.eq(0).outerHeight() + l.margin) * l.items - l.margin
                    }
                }),
                p.each(function(t, o) {
                    var n, i = e(o).outerHeight(),
                    s = tools.getRelPos(e(this), c).top;
                    n = isNaN(c.css("margin")) ? c.height() - parseInt(c.css("margin")) : c.height() - c.css("margin"),
                    r.push((p.eq(0).outerHeight() + l.margin) * Math.min(p.length - l.items, t)),
                    a.push(Math.min(0, s - i + n))
                })
            }
            return p.on("click",
            function() {
                o(e(this).index())
            }),
            e(this).find("").click(function(t) {
                o(m - 1, !1)
            }),
            e(this).find("").click(function(t) {
                o(m + 1, !1)
            }),
            {
                el: c,
                now: function() {
                    return m
                },
                to: function(t) {
                    o(t)
                },
                next: function() {
                    this.to(m + 1)
                },
                prev: function() {
                    this.to(m - 1)
                }
            }
        }
    })
} (window, jQuery),
options.initThings = {
    name: "initThings",
    css: "",
    fn: function() {
        if ($(".item_block").off(), $("#topSlider .progress").remove(), $("canvas").remove(), $("#minOpenBtn").click(function() {
            $("body").toggleClass("openMenu")
        }), $("body").hasClass("bodyindex") && $(".ff_indexPage .team")[0]) {
            var t, e;
            $(".ff_indexPage .team .tab_content .content_list").data("owlcarousel").destroy(),
            $(".ff_indexPage .team .tab_button .content_list").data("owlcarousel").destroy();
            var o = $(".ff_indexPage .team .tab_content .content_list").addClass("owl-carousel owl-theme").owlCarousel((t = {
                center: !1,
                items: 1,
                loop: !1,
                autoWidth: !1,
                responsive: !1,
                nav: !0,
                dots: !1,
                smartSpeed: 800
            },
            _defineProperty(t, "responsive", {
                0 : {
                    items: 1,
                    nav: !0
                },
                1920 : {
                    items: 1,
                    nav: !0,
                    loop: !1
                }
            }), _defineProperty(t, "responsiveRefreshRate", 200), _defineProperty(t, "navText", ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']), t)),
            n = $(".ff_indexPage .team .tab_button .item_block"),
            i = $(".ff_indexPage .team .tab_button .content_list").addClass("owl-carousel owl-theme").owlCarousel((e = {
                center: !1,
                items: 4,
                loop: !1,
                autoWidth: !1,
                responsive: !1,
                nav: !1,
                dots: !1,
                smartSpeed: 800
            },
            _defineProperty(e, "responsive", {
                0 : {
                    items: 1
                },
                600 : {
                    items: 2
                },
                1280 : {
                    items: 3
                },
                1366 : {
                    items: 4
                },
                1920 : {
                    items: 4
                }
            }), _defineProperty(e, "navText", ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']), e));
            n.click(function() {
                var t = $(this).parent().index();
                o.trigger("to.owl.carousel", [t])
            }),
            o.on("changed.owl.carousel",
            function(t) {
                var e = t.item.index;
                i.trigger("to.owl.carousel", [e])
            })
        }
    }
},
options.sliderDirThemb = {
    name: "sliderDirThemb",
    css: "\n        #topSlider .content_list :hover #sliderDotThemb,\n        #topSlider .content_list :hover #sliderDirThemb {\n            visibility: visible;\n            opacity: 1\n        }\n        #sliderDirThemb,\n        #sliderDotThemb {\n            width: 100px;\n            height: 50px;\n            position: absolute;\n            border: 3px solid #fff;\n            visibility: hidden;\n            opacity: 0;\n            box-sizing: border-box;\n            transition: visibility 0.36s ease, opacity 0.36s ease;\n        } \n        \n        #sliderDirThemb.dot,\n        #sliderDotThemb.dot {\n            top: auto !important;\n            bottom: 40px;\n            transition: all 0.36s ease;\n            transform: translateX(-50%);\n        }\n        #sliderDirThemb.dir,\n        #sliderDotThemb.dir {\n            bottom: auto !important;\n        }\n        #sliderDirThemb .owl-item .thumb-item,\n        #sliderDotThemb .owl-item .thumb-item {\n            width: 100px;\n            height: 44px;\n            background-position: center center;\n            background-size: cover;\n        }\n        #sliderDirThemb .owl-dots,\n        #sliderDotThemb .owl-dots {\n        }\n        #sliderDirThemb .owl-stage-outer,\n        #sliderDotThemb .owl-stage-outer {\n        }\n        #sliderDirThemb.showStage,\n        #sliderDotThemb.showStage {\n            visibility: visible;\n            opacity: 1\n        }\n    ",
    fn: function(t) {
        var e, o = [],
        n = $("#topSlider .content_list .owl-item:not(.cloned) .item_block .item_bg"),
        i = '<div id="sliderDirThemb" class="topSliderThumb owl-carousel owl-theme">',
        s = this.topSliderApp;
        n.each(function(t, e) {
            i += '<div class="thumb-item" style="background-image:url(' + $(e).data("thumb").replace("_80x80.jpg", ".jpg") + ')"></div>',
            o.push($(e).data("thumb"))
        }),
        i += "</div>",
        e = $(i).appendTo($("#topSlider")).owlCarousel({
            center: !1,
            items: 1,
            loop: !0,
            margin: 10,
            autoWidth: !1,
            nav: !1,
            responsive: !1,
            dots: !1
        }),
        $("#topSlider .content_list ").find("").add($("#topSlider .content_list ").find("")).on({
            mouseenter: function() {
                var o = this,
                n = $("#topSlider .content_list .owl-dots .owl-dot.active").index();
                $(o).hasClass("owl-prev") ? n -= 1 : $(o).hasClass("owl-next") && (n += 1),
                e.trigger("to.owl.carousel", [n]),
                s.on("changed.owl.carousel",
                function(t) {
                    var n = t.item.index;
                    $(o).hasClass("owl-prev") || $(o).hasClass("owl-next") && (n -= 1),
                    e.trigger("to.owl.carousel", [n])
                }),
                $("#sliderDirThemb").removeClass("dot").addClass(function() {
                    return $(o).hasClass("") ? "prev-dir dir showStage": "next-dir dir showStage"
                }).css({
                    left: function() {
                        return "top" == t ? tools.getRelPos("#topSlider", o).left + ($(o).outerWidth() - $(this).outerWidth()) / 2 : "LR" == t ? $(o).offset().left + $("#sliderDirThemb").outerWidth() + $(o).outerWidth() >= $(window).width() ? tools.getRelPos("#topSlider", o).left - $("#sliderDirThemb").outerWidth() : tools.getRelPos("#topSlider", o).left + $(o).outerWidth() : void 0
                    },
                    top: function() {
                        return "LR" == t ? tools.getRelPos("#topSlider", o).top + ($(o).outerHeight() - $(this).outerHeight()) / 2 : "top" == t ? tools.getRelPos("#topSlider", o).top - $(this).outerHeight() : void 0
                    }
                }),
                "top" === t && $("#sliderDirThemb").css({
                    transition: "left 0.36s ease"
                })
            },
            mouseleave: function() {
                $("#sliderDirThemb").removeClass("showStage")
            }
        })
    }
},
options.npostSlider = {
    name: "npostSlider",
    css: "\n        #postSlider .tab_button .content_list {\n            width: 240px;\n        }\n    .getInfor { position: absolute; right: 20px; top: 16px; width: 32px; height: 32px; border: 1px solid #fff; border-radius: 50%; text-align: center; line-height: 32px; color: #fff; font-size: 18px; }",
    fn: function() {
        var t, e = $("#postSlider .tab_button"),
        o = parseInt(e.eq(0).width() / (e.find(".item_img").eq(0).width() + 2)),
        n = $("#postSlider .tab_content").addClass("owl-carousel owl-theme").owlCarousel((t = {
            center: !1,
            items: 1,
            loop: !1,
            autoWidth: !1,
            responsive: !1,
            nav: !0,
            dots: !1,
            smartSpeed: 800
        },
        _defineProperty(t, "responsive", {
            0 : {
                items: 1
            },
            1920 : {
                items: 1
            }
        }), _defineProperty(t, "navText", ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']), t)),
        i = $("#postSlider .tab_button").addClass("owl-carousel owl-theme").owlCarousel({
            center: !1,
            items: o,
            loop: !1,
            autoWidth: !1,
            responsive: !1,
            nav: !1,
            dots: !1,
            margin: 1
        });
        $("#postSlider .tab_button").find('.item_block[data-tab-index="0"]').addClass("current"),
        n.on("changed.owl.carousel",
        function(t) {
            var e = t.item.index,
            o = $("#postSlider .tab_button").find(".item_block");
            i.trigger("to.owl.carousel", [e]),
            $("#postSlider .tab_button").find(".item_block").removeClass("current"),
            o.eq(e).addClass("current")
        }),
        $("#postSlider .tab_button").find(".owl-item").click(function() {
            var t = $(this).index();
            n.trigger("to.owl.carousel", [t])
        }),
        this.npostSliderApp = n,
        this.npostSliderThumbApp = i,
        $("body").hasClass("bodyproject") && ($(".bodyproject .postContent .postbody").mCustomScrollbar({
            theme: "light-2"
        }), $('<span class="getInfor"><i class="fa">i</i><span>').appendTo(".bodyproject .tab_button").click(function() {
            $(".bodyproject .postContent .postbody").show().animate({
                "padding-top": 180,
                opacity: 1
            },
            400)
        }), $('<span class="closeInfor"><i class="fa"></i><span>').appendTo(".bodyproject .postContent .postbody").click(function() {
            $(".bodyproject .postContent .postbody").animate({
                "padding-top": 380,
                opacity: 0
            },
            400,
            function() {
                $(this).css({
                    display: "none"
                })
            })
        }))
    }
},
options.postSliderThemb = {
    name: "postSliderThemb",
    css: "\n  #postSlider{position: relative}      #postSlider :hover #sliderDotThemb,\n        #postSlider :hover #postSliderThemb {\n            visibility: visible;\n            opacity: 1\n        }\n        #postSliderThemb,\n        #sliderDotThemb {\n            width: 100px;\n            height: 50px;\n            position: absolute;\n            border: 3px solid #fff;\n            visibility: hidden;\n            opacity: 0;\n            box-sizing: border-box;\n            transition: visibility 0.36s ease, opacity 0.36s ease;\n        } \n        \n        #postSliderThemb.dot,\n        #sliderDotThemb.dot {\n            top: auto !important;\n            bottom: 40px;\n            transition: all 0.36s ease;\n            transform: translateX(-50%);\n        }\n        #postSliderThemb.dir,\n        #sliderDotThemb.dir {\n            bottom: auto !important;\n        }\n        #postSliderThemb .owl-item .thumb-item,\n        #sliderDotThemb .owl-item .thumb-item {\n            width: 100px;\n            height: 44px;\n            background-position: center center;\n            background-size: cover;\n        }\n        #postSliderThemb .owl-dots,\n        #sliderDotThemb .owl-dots {\n        }\n        #postSliderThemb .owl-stage-outer,\n        #sliderDotThemb .owl-stage-outer {\n        }\n        #postSliderThemb.showStage,\n        #sliderDotThemb.showStage {\n            visibility: visible;\n            opacity: 1\n        }\n    ",
    fn: function(t) {
        var e = [],
        o = $("#postSlider .owl-item:not(.cloned) .item_block img"),
        n = '<div id="postSliderThemb" class="topSliderThumb owl-carousel owl-theme">',
        i = this.npostSliderApp;
        o.each(function(t, o) {
            n += '<div class="thumb-item" style="background-image:url(' + $(o).attr("src") + ')"></div>',
            e.push($(o).data("thumb"))
        }),
        n += "</div>",
        postSliderDirThumbApp = $(n).appendTo($("#postSlider")).owlCarousel({
            center: !1,
            items: 1,
            loop: !0,
            margin: 10,
            autoWidth: !1,
            nav: !1,
            responsive: !1,
            dots: !1
        }),
        $("#postSlider").find("").add($("#postSlider").find("")).on({
            mouseenter: function() {
                var e = this,
                o = $("#postSlider .owl-dots .owl-dot.active").index();
                $(e).hasClass("owl-prev") ? o -= 1 : $(e).hasClass("owl-next") && (o += 1),
                postSliderDirThumbApp.trigger("to.owl.carousel", [o]),
                i.on("changed.owl.carousel",
                function(t) {
                    var o = t.item.index;
                    $(e).hasClass("owl-prev") || $(e).hasClass("owl-next") && (o -= 1),
                    postSliderDirThumbApp.trigger("to.owl.carousel", [o])
                }),
                $("#postSliderThemb").removeClass("dot").addClass(function() {
                    return $(e).hasClass("") ? "prev-dir dir showStage": "next-dir dir showStage"
                }).css({
                    left: function() {
                        return "top" == t ? tools.getRelPos("#postSlider", e).left + ($(e).outerWidth() - $(this).outerWidth()) / 2 : "LR" == t ? $(e).offset().left + $("#postSliderThemb").outerWidth() + $(e).outerWidth() >= $(window).width() ? tools.getRelPos("#postSlider", e).left - $("#postSliderThemb").outerWidth() : tools.getRelPos("#postSlider", e).left + $(e).outerWidth() : void 0
                    },
                    top: function() {
                        return "LR" == t ? tools.getRelPos("#postSlider", e).top + ($(e).outerHeight() - $(this).outerHeight()) / 2 : "top" == t ? tools.getRelPos("#postSlider", e).top - $(this).outerHeight() : void 0
                    }
                }),
                "top" === t && $("#postSliderThemb").css({
                    transition: "left 0.36s ease"
                })
            },
            mouseleave: function() {
                $("#postSliderThemb").removeClass("showStage")
            }
        })
    }
},
options.moduleControl = {
    name: "moduleControl",
    css: "",
    fn: function() {
        function t(t) {
            return t + 1 < 10 ? "0" + (t + 1) : t + 1
        }
        var e = $("#moduleControl"),
        o = e.find("a"); - 1 == window.location.hash.indexOf("m0") && 0 != window.location.hash.length && e.animate({
            opacity: 1
        },
        200),
        $("body").mousewheel(function(t) {
            1 == t.deltaY && $("#moduleCItem_1").hasClass("active") ? e.animate({
                opacity: 0
            },
            200) : -1 == t.deltaY && $("#moduleCItem_0").hasClass("active") && e.delay(300).animate({
                opacity: 1
            },
            200)
        }),
        o.each(function(e, o) {
            var n, i = t(e),
            s = $(o).data("title");
            n = $('<div class="controlInfor hide"><span class="num">' + i + '</span><span class="title">' + s + "</span></div>"),
            $(o).find("span").text(i),
            n.appendTo($(o))
        })
    }
},
options.privateproject = {
    name: "privateproject",
    css: "",
    fn: function() {
        var t = $(".project.mlist");
        if (t[0]) {
            var e = t.find(".module_container").height();
            e % 2 == 1 && t.find(".module_container").height(e + 1),
            t[0].setAttribute("oncontextmenu", "return false"),
            t[0].setAttribute("onselectstart", "return false"),
            t[0].setAttribute("ondragstart", "return false"),
            t[0].setAttribute("onbeforecopy", "return false"),
            t[0].setAttribute("oncopy", "document.selection.empty()"),
            t[0].setAttribute("onselect", "document.selection.empty()");
            var o = t.find("img"),
            n = Math.floor($(o[0]).width()),
            i = Math.floor(o.length / 3) * n + 10;
            t.find(".container_content").css({
                width: function() {
                    return i
                }
            });
            var s = t.width() - i < 0 ? t.width() - i: -1,
            a = tools.dragEl(t.find(".container_content"), {},
            {
                dir: "x",
                area: {
                    x: s
                }
            });
            $(window).resize(function() {
                n = Math.floor($(o[0]).width()),
                i = Math.floor(o.length / 3) * n + 10,
                t.find(".container_content").css({
                    width: function() {
                        return i
                    }
                }),
                t.find(".item_img").css({
                    width: function() {
                        return n
                    }
                }),
                a({
                    x: t.width() - i < 0 ? t.width() - i: -1
                })
            }),
            $(window).on("load",
            function() {
                n = Math.floor($(o[0]).width()),
                i = Math.floor(o.length / 3) * n + 10,
                t.find(".container_content").css({
                    width: function() {
                        return i
                    }
                }),
                t.find(".item_img").css({
                    width: function() {
                        return n
                    }
                }),
                a({
                    x: t.width() - i < 0 ? t.width() - i: -1
                })
            });
            var r = !1;
            $(".project .item_box").on({
                click: function(t) {
                    return ! 1
                },
                mousedown: function() {
                    r = !1
                },
                mousemove: function() {
                    r = !0
                },
                mouseup: function() {
                    r || (window.location = $(this).attr("href"))
                }
            })
        }
    }
},
options.teamTabs = {
    name: "teamTabs",
    css: "",
    fn: function() {
        var t, e = $(".ff_indexPage .team_tabs .tab_content .content_list").addClass("owl-carousel owl-theme").owlCarousel((t = {
            center: !1,
            items: 1,
            loop: !1,
            autoWidth: !1,
            responsive: !1,
            nav: !0,
            dots: !1,
            smartSpeed: 800,
            animateOut: "fadeOut",
            animateIn: "fadeIn"
        },
        _defineProperty(t, "responsive", {
            0 : {
                items: 1
            },
            1920 : {
                items: 1
            }
        }), _defineProperty(t, "navText", ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']), t)),
        o = $(".ff_indexPage .team_tabs .tab_button .item_block"),
        n = $(".ff_indexPage .team_tabs .tab_button .content_list").simpleSlider({
            dir: !1,
            items: 2
        });
        o.click(function() {
            var t = $(this).index();
            e.trigger("to.owl.carousel", [t])
        }),
        e.on("changed.owl.carousel",
        function(t) {
            var e = t.item.index;
            n.to(e)
        }),
        n.el.on("change-simpleSlider",
        function(t, e) {})
    }
},
Math.tween = {
    Linear: function(t, e, o, n, i) {
        return n * e / i + o
    },
    easeOut: function(t, e, o, n, i) {
        return - n * (e /= i) * (e - 2) + o
    },
    mcsEaseOut: function(t, e, o, n, i) {
        var s = (e /= i) * e,
        a = s * e;
        return o + n * (.499999999999997 * a * s + -2.5 * s * s + 5.5 * a + -6.5 * s + 4 * e)
    }
},
$.extend({
    miniAnimate: function(t, e, o, n) {
        var i, s, a, r;
        return a || (a = 0),
        s = function() {
            a += 17,
            r = Math.tween.mcsEaseOut(null, a, t, e, o),
            n(r),
            a >= o ? (a = o, n(t + e)) : i = requestAnimationFrame(s)
        },
        {
            begin: function() {
                s()
            },
            stop: function() {
                cancelAnimationFrame(i),
                a = 0
            }
        }
    }
});
for (var key in options) if (options.hasOwnProperty(key)) {
    var item = options[key];
    item.css && (newStyleContent[key] = item.css),
    item.fn && (job[key] = item.fn)
}
var tools = {
    getRelPos: function(t, e) {
        var o = $(t).offset(),
        n = $(e).offset();
        return {
            left: Math.round(n.left - o.left),
            top: Math.round(n.top - o.top)
        }
    },
    hideEl: function(t, e) {
        $(window).scroll(function(o) {
            var n = $(window).scrollTop();
            e < n ? $(t).removeClass("outPos").addClass("inPos") : $(t).removeClass("inPos").addClass("outPos")
        })
    },
    tabActive: function(t, e) {
        e = e || "active",
        t.siblings().removeClass(e),
        t.addClass(e)
    },
    getTransfrom: function(t, e) {
        var o = t.style.transform,
        n = new RegExp(e + "\\((-?[0-9]+\\.?[0-9]{0,2}).*\\)");
        return o.match(n),
        RegExp.$1
    },
    alertBx: function(t, e) {
        var o = $('<div class="ff_bodyMask"><div class="ff_bodyMask-content mlist"></div></div>');
        o.find(".ff_bodyMask-content").append(t),
        o.appendTo($("body")).fadeIn().on({
            "mousewheel.stopScroll": function() {
                return ! 1
            },
            "click.closeMask": function(t) {
                t.target == $(this)[0] && $(this).off().fadeOut()
            }
        }).find(".ff_bodyMask-content"),
        e && e()
    },
    dragEl: function(t, e, o) {
        var n, i = {
            dragEv: function(t) {
                var e, n = {},
                i = t.changePos.x + t.transformPos.x,
                s = t.changePos.y + t.transformPos.y;
                return o.area.x && (i <= o.area.x && (i = o.area.x - Math.sqrt(2 * Math.abs(i - o.area.x) / .1), n.x = o.area.x), i >= 0 && (i = Math.sqrt(2 * i / .1), n.x = 0)),
                o.area.y && (s <= o.area.y && (s = o.area.y[0]), s >= 0 && (s = 0)),
                e = "x" == o.dir ? "translateX(" + i + "px)": "y" == o.dir ? "translateY(" + s + "px)": "translateX(" + i + "px) translateY(" + s + "px)",
                $(this).css({
                    transform: e
                }),
                n
            }
        };
        return $(t).on({
            mousedown: function(s) {
                var a, r, l, d, c, p = {
                    x: s.clientX,
                    y: s.clientY
                },
                m = {
                    x: +tools.getTransfrom($(t)[0], "translateX"),
                    y: +tools.getTransfrom($(t)[0], "translateY")
                };
                s.initPos = p,
                $(t).css({
                    transition: "0s"
                }),
                void 0 !== n && (n.stop(), c = 0),
                e.begin && e.begin.call($(t)[0], s),
                $("body").on({
                    "mousemove.drage": function(o) {
                        c = 0;
                        var n = {
                            x: o.clientX,
                            y: o.clientY
                        };
                        a && (l = {
                            x: a.x - (n.x - p.x)
                        },
                        c = l.x / ( + new Date - d)),
                        a = {
                            x: n.x - p.x,
                            y: n.y - p.y
                        },
                        d = +new Date,
                        o.movePos = n,
                        o.changePos = a,
                        o.transformPos = m,
                        r = i.dragEv.call($(t)[0], o),
                        e.change && e.change.call($(t)[0], o)
                    },
                    "mouseup.drage": function(e) {
                        $(this).off("mousemove.drage"),
                        $(this).off("mouseup.drage"),
                        void 0 !== n && n.stop();
                        var i = "";
                        if (r && void 0 !== r.x && (i += "translateX(" + r.x + "px)"), r && void 0 !== r.y && (i += "translateY(" + r.y + "px)"), i) $(t).css({
                            transition: "0.5s",
                            transform: i
                        });
                        else {
                            if ($(t).css({
                                transition: "0s"
                            }), Math.abs(a.x) < 50 || Math.abs(c) <= .2) return;
                            var s = +tools.getTransfrom($(t)[0], "translateX"),
                            l = s > 0 ? 400 * c: -400 * c; (n = $.miniAnimate(Math.floor(s), Math.floor(l), 1e3,
                            function(e) {
                                var n = Math.ceil( + e);
                                n <= o.area.x && (n = o.area.x),
                                n >= 0 && (n = 0),
                                $(t).css({
                                    transform: "translateX(" + n + "px)"
                                })
                            })).begin()
                        }
                    }
                })
            }
        }),
        function(t) {
            o.area = t
        }
    }
},
selfTools = {
    bindPage: function(t, e, o) {
        t.name;
        for (var n = 0; n < e.length; n++) {
            var i = t,
            s = e[n];
            YY.Page[s].prototype.things.push([i, o])
        }
    },
    addStyle: function() {
        var t = '<style id="ff_add">';
        for (var e in newStyleContent) newStyleContent.hasOwnProperty(e) && (t += newStyleContent[e]);
        t += "</style>",
        $(t).insertBefore($("link")[0])
    }
},
pageConfig = {
    list: ["indexMain", "baseMain", "postMain"]
},
config = {
    initThings: {
        page: pageConfig.list,
        fn: job.initThings
    },
    headerHover: {
        page: pageConfig.list,
        fn: job.headerHover
    },
    parallax: {
        page: ["indexMain"],
        fn: job.parallax,
        parameter: ["#topSlider .content_list"]
    },
    parallaxPage: {
        page: ["baseMain"],
        fn: job.parallaxPage,
        parameter: [".npagePage #banner div"]
    },
    sliderDotThemb: {
        page: ["indexMain"],
        fn: job.sliderDotThemb
    },
    sliderDirThemb: {
        page: ["indexMain"],
        fn: job.sliderDirThemb,
        parameter: ["LR"]
    },
    sliderTitle: {
        page: ["indexMain"],
        fn: job.sliderTitle
    },
    npostSlider: {
        page: ["postMain"],
        fn: job.npostSlider
    },
    postTabHiden: {
        page: ["postMain"],
        fn: job.postTabHiden
    },
    specialModule: {
        page: ["indexMain"],
        fn: job.specialModule
    },
    teamTabs: {
        page: ["indexMain"],
        fn: job.teamTabs
    },
    teamTabsTwo: {
        page: ["indexMain"],
        fn: job.teamTabsTwo
    },
    ad01: {
        page: ["indexMain"],
        fn: job.ad01
    },
    normalTeamTabs: {
        page: ["indexMain"],
        fn: job.normalTeamTabs,
        parameter: [{},
        !0]
    },
    searchForm: {
        page: pageConfig.list,
        fn: job.searchForm,
        parameter: [{
            style: "two",
            type: "LR"
        }]
    },
    timeTurnEn: {
        page: pageConfig.list,
        fn: job.timeTurnEn,
        parameter: [".service .item_block .date_wrap"]
    },
    headerHoverBase: {
        page: pageConfig.list,
        fn: job.headerHoverBase,
        parameter: ["#header"]
    },
    teamTabPop: {
        page: ["indexMain"],
        fn: job.teamTabPop
    },
    postSliderThemb: {
        page: ["postMain"],
        fn: job.postSliderThemb,
        parameter: ["LR"]
    },
    moduleControl: {
        page: ["indexMain"],
        fn: job.moduleControl
    },
    privateproject: {
        page: ["indexMain", "baseMain"],
        fn: job.privateproject
    }
};
selfTools.addStyle(),
function() {
    for (var t = 0; t < pageConfig.list.length; t++) {
        var e = pageConfig.list[t];
        YY.Page[e].prototype.things = [],
        YY.Page[e].prototype.interfaceFun = function() {
            for (var t = this,
            e = 0; e < this.things.length; e++) {
                var o = this.things[e][0],
                n = this.things[e][1];
                o.apply(t, n)
            }
        }
    }
    for (var o in job) if (job.hasOwnProperty(o)) {
        job[o];
        var n = this.config[o];
        selfTools.bindPage(n.fn, n.page, n.parameter)
    }
} ();