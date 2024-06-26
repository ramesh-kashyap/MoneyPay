/*!
 * Bootstrap-select v1.6.2 (http://silviomoreto.github.io/bootstrap-select/)
 *
 * Copyright 2013-2014 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */

! function (a) {
    "use strict";

    function b(b, d) {
        var e = arguments,
            b = e[0],
            d = e[1];
        [].shift.apply(e);
        var f, g = this.each(function () {
            var g = a(this);
            if (g.is("select")) {
                var h = g.data("selectpicker"),
                    i = "object" == typeof b && b;
                if (h) {
                    if (i)
                        for (var j in i) i.hasOwnProperty(j) && (h.options[j] = i[j])
                } else {
                    var k = a.extend({}, c.DEFAULTS, a.fn.selectpicker.defaults, g.data(), i);
                    g.data("selectpicker", h = new c(this, k, d))
                }
                "string" == typeof b && (f = h[b] instanceof Function ? h[b].apply(h, e) : h.options[b])
            }
        });
        return "undefined" != typeof f ? f : g
    }
    a.expr[":"].icontains = function (b, c, d) {
        return a(b).text().toUpperCase().indexOf(d[3].toUpperCase()) >= 0
    };
    var c = function (b, d, e) {
        e && (e.stopPropagation(), e.preventDefault()), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = d, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = c.prototype.val, this.render = c.prototype.render, this.refresh = c.prototype.refresh, this.setStyle = c.prototype.setStyle, this.selectAll = c.prototype.selectAll, this.deselectAll = c.prototype.deselectAll, this.destroy = c.prototype.remove, this.remove = c.prototype.remove, this.show = c.prototype.show, this.hide = c.prototype.hide, this.init()
    };
    c.VERSION = "1.6.2", c.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results match",
        countSelectedText: "{0} of {1} selected",
        maxOptionsText: ["Limit reached ({n} {var} max)", "Group limit reached ({n} {var} max)", ["items", "item"]],
        multipleSeparator: ", ",
        style: "btn-default",
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        actionsBox: !1,
        iconBase: "glyphicon",
        tickIcon: "glyphicon-ok",
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1
    }, c.prototype = {
        constructor: c,
        init: function () {
            var b = this,
                c = this.$element.attr("id");
            this.$element.hide(), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$menu = this.$newElement.find("> .dropdown-menu"), this.$button = this.$newElement.find("> button"), this.$searchbox = this.$newElement.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("pull-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function (a) {
                a.preventDefault(), b.$button.focus()
            })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.liHeight(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile()
        },
        createDropdown: function () {
            var b = this.multiple ? " show-tick" : "",
                c = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                d = this.autofocus ? " autofocus" : "",
                e = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                f = this.options.liveSearch ? '<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>' : "",
                g = this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">Select All</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">Deselect All</button></div></div>' : "",
                h = '<div class="btn-group bootstrap-select' + b + c + '"><button type="button" class="btn dropdown-toggle selectpicker" data-toggle="dropdown"' + d + '><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">' + e + f + g + '<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>';
            return a(h)
        },
        createView: function () {
            var a = this.createDropdown(),
                b = this.createLi();
            return a.find("ul").append(b), a
        },
        reloadLi: function () {
            this.destroyLi();
            var a = this.createLi();
            this.$menu.find("ul").append(a)
        },
        destroyLi: function () {
            this.$menu.find("li").remove()
        },
        createLi: function () {
            var b = this,
                c = [],
                d = "",
                e = 0;
            return this.$element.find("option").each(function () {
                var d = a(this),
                    f = d.attr("class") || "",
                    g = d.attr("style") || "",
                    h = d.data("content") ? d.data("content") : d.html(),
                    i = "undefined" != typeof d.data("subtext") ? '<small class="muted text-muted">' + d.data("subtext") + "</small>" : "",
                    j = "undefined" != typeof d.data("icon") ? '<i class="' + b.options.iconBase + " " + d.data("icon") + '"></i> ' : "";
                if ("" !== j && (d.is(":disabled") || d.parent().is(":disabled")) && (j = "<span>" + j + "</span>"), d.data("content") || (h = j + '<span class="text">' + h + i + "</span>"), b.options.hideDisabled && (d.is(":disabled") || d.parent().is(":disabled"))) c.push('<a style="min-height: 0; padding: 0"></a>');
                else if (d.parent().is("optgroup") && d.data("divider") !== !0)
                    if (0 === d.index()) {
                        var k = d.parent().attr("label"),
                            l = "undefined" != typeof d.parent().data("subtext") ? '<small class="muted text-muted">' + d.parent().data("subtext") + "</small>" : "",
                            m = d.parent().data("icon") ? '<i class="' + b.options.iconBase + " " + d.parent().data("icon") + '"></i> ' : "";
                        k = m + '<span class="text">' + k + l + "</span>", e += 1, c.push(0 !== d[0].index ? '<div class="div-contain"><div class="divider"></div></div><dt>' + k + "</dt>" + b.createA(h, "opt " + f, g, e) : "<dt>" + k + "</dt>" + b.createA(h, "opt " + f, g, e))
                    } else c.push(b.createA(h, "opt " + f, g, e));
                else c.push(d.data("divider") === !0 ? '<div class="div-contain"><div class="divider"></div></div>' : a(this).data("hidden") === !0 ? "<a></a>" : b.createA(h, f, g))
            }), a.each(c, function (a, b) {
                var c = "<a></a>" === b ? 'class="hide is-hidden"' : "";
                d += '<li rel="' + a + '"' + c + ">" + b + "</li>"
            }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), a(d)
        },
        createA: function (a, b, c, d) {
            return '<a tabindex="0" class="' + b + '" style="' + c + '"' + ("undefined" != typeof d ? 'data-optgroup="' + d + '"' : "") + ">" + a + '<i class="' + this.options.iconBase + " " + this.options.tickIcon + ' icon-ok check-mark"></i></a>'
        },
        render: function (b) {
            var c = this;
            b !== !1 && this.$element.find("option").each(function (b) {
                c.setDisabled(b, a(this).is(":disabled") || a(this).parent().is(":disabled")), c.setSelected(b, a(this).is(":selected"))
            }), this.tabIndex();
            var d = this.$element.find("option:selected").map(function () {
                    var b, d = a(this),
                        e = d.data("icon") && c.options.showIcon ? '<i class="' + c.options.iconBase + " " + d.data("icon") + '"></i> ' : "";
                    return b = c.options.showSubtext && d.attr("data-subtext") && !c.multiple ? ' <small class="muted text-muted">' + d.data("subtext") + "</small>" : "", d.data("content") && c.options.showContent ? d.data("content") : "undefined" != typeof d.attr("title") ? d.attr("title") : e + d.html() + b
                }).toArray(),
                e = this.multiple ? d.join(this.options.multipleSeparator) : d[0];
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var f = this.options.selectedTextFormat.split(">"),
                    g = this.options.hideDisabled ? ":not([disabled])" : "";
                (f.length > 1 && d.length > f[1] || 1 == f.length && d.length >= 2) && (e = this.options.countSelectedText.replace("{0}", d.length).replace("{1}", this.$element.find('option:not([data-divider="true"], [data-hidden="true"])' + g).length))
            }
            this.options.title = this.$element.attr("title"), "static" == this.options.selectedTextFormat && (e = this.options.title), e || (e = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a.trim(a("<div/>").html(e).text()).replace(/\s\s+/g, " ")), this.$newElement.find(".filter-option").html(e)
        },
        setStyle: function (a, b) {
            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi, ""));
            var c = a ? a : this.options.style;
            "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c))
        },
        liHeight: function () {
            if (this.options.size !== !1) {
                var a = this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus", !1).end().appendTo("body"),
                    b = a.addClass("open").find("> .dropdown-menu"),
                    c = b.find("li > a").outerHeight(),
                    d = this.options.header ? b.find(".popover-title").outerHeight() : 0,
                    e = this.options.liveSearch ? b.find(".bootstrap-select-searchbox").outerHeight() : 0,
                    f = this.options.actionsBox ? b.find(".bs-actionsbox").outerHeight() : 0;
                a.remove(), this.$newElement.data("liHeight", c).data("headerHeight", d).data("searchHeight", e).data("actionsHeight", f)
            }
        },
        setSize: function () {
            var b, c, d, e = this,
                f = this.$menu,
                g = f.find(".inner"),
                h = this.$newElement.outerHeight(),
                i = this.$newElement.data("liHeight"),
                j = this.$newElement.data("headerHeight"),
                k = this.$newElement.data("searchHeight"),
                l = this.$newElement.data("actionsHeight"),
                m = f.find("li .divider").outerHeight(!0),
                n = parseInt(f.css("padding-top")) + parseInt(f.css("padding-bottom")) + parseInt(f.css("border-top-width")) + parseInt(f.css("border-bottom-width")),
                o = this.options.hideDisabled ? ":not(.disabled)" : "",
                p = a(window),
                q = n + parseInt(f.css("margin-top")) + parseInt(f.css("margin-bottom")) + 2,
                r = function () {
                    c = e.$newElement.offset().top - p.scrollTop(), d = p.height() - c - h
                };
            if (r(), this.options.header && f.css("padding-top", 0), "auto" == this.options.size) {
                var s = function () {
                    var a, h = e.$lis.not(".hide");
                    r(), b = d - q, e.options.dropupAuto && e.$newElement.toggleClass("dropup", c > d && b - q < f.height()), e.$newElement.hasClass("dropup") && (b = c - q), a = h.length + h.find("dt").length > 3 ? 3 * i + q - 2 : 0, f.css({
                        "max-height": b + "px",
                        overflow: "hidden",
                        "min-height": a + j + k + l + "px"
                    }), g.css({
                        "max-height": b - j - k - l - n + "px",
                        "overflow-y": "auto",
                        "min-height": Math.max(a - n, 0) + "px"
                    })
                };
                s(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", s), a(window).off("resize.getSize").on("resize.getSize", s), a(window).off("scroll.getSize").on("scroll.getSize", s)
            } else if (this.options.size && "auto" != this.options.size && f.find("li" + o).length > this.options.size) {
                var t = f.find("li" + o + " > *").not(".div-contain").slice(0, this.options.size).last().parent().index(),
                    u = f.find("li").slice(0, t + 1).find(".div-contain").length;
                b = i * this.options.size + u * m + n, e.options.dropupAuto && this.$newElement.toggleClass("dropup", c > d && b < f.height()), f.css({
                    "max-height": b + j + k + l + "px",
                    overflow: "hidden"
                }), g.css({
                    "max-height": b - n + "px",
                    "overflow-y": "auto"
                })
            }
        },
        setWidth: function () {
            if ("auto" == this.options.width) {
                this.$menu.css("min-width", "0");
                var a = this.$newElement.clone().appendTo("body"),
                    b = a.find("> .dropdown-menu").css("width"),
                    c = a.css("width", "auto").find("> button").css("width");
                a.remove(), this.$newElement.css("width", Math.max(parseInt(b), parseInt(c)) + "px")
            } else "fit" == this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
        },
        selectPosition: function () {
            var b, c, d = this,
                e = "<div />",
                f = a(e),
                g = function (a) {
                    f.addClass(a.attr("class").replace(/form-control/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), c = a.hasClass("dropup") ? 0 : a[0].offsetHeight, f.css({
                        top: b.top + c,
                        left: b.left,
                        width: a[0].offsetWidth,
                        position: "absolute"
                    })
                };
            this.$newElement.on("click", function () {
                d.isDisabled() || (g(a(this)), f.appendTo(d.options.container), f.toggleClass("open", !a(this).hasClass("open")), f.append(d.$menu))
            }), a(window).resize(function () {
                g(d.$newElement)
            }), a(window).on("scroll", function () {
                g(d.$newElement)
            }), a("html").on("click", function (b) {
                a(b.target).closest(d.$newElement).length < 1 && f.removeClass("open")
            })
        },
        setSelected: function (b, c) {
            null == this.$lis && (this.$lis = this.$menu.find("li")), a(this.$lis[b]).toggleClass("selected", c)
        },
        setDisabled: function (b, c) {
            null == this.$lis && (this.$lis = this.$menu.find("li")), c ? a(this.$lis[b]).addClass("disabled").find("a").attr("href", "#").attr("tabindex", -1) : a(this.$lis[b]).removeClass("disabled").find("a").removeAttr("href").attr("tabindex", 0)
        },
        isDisabled: function () {
            return this.$element.is(":disabled")
        },
        checkDisabled: function () {
            var a = this;
            this.isDisabled() ? this.$button.addClass("disabled").attr("tabindex", -1) : (this.$button.hasClass("disabled") && this.$button.removeClass("disabled"), -1 == this.$button.attr("tabindex") && (this.$element.data("tabindex") || this.$button.removeAttr("tabindex"))), this.$button.click(function () {
                return !a.isDisabled()
            })
        },
        tabIndex: function () {
            this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
        },
        clickListener: function () {
            var b = this;
            this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function (a) {
                a.stopPropagation()
            }), this.$newElement.on("click", function () {
                b.setSize(), b.options.liveSearch || b.multiple || setTimeout(function () {
                    b.$menu.find(".selected a").focus()
                }, 10)
            }), this.$menu.on("click", "li a", function (c) {
                var d = a(this).parent().index(),
                    e = b.$element.val(),
                    f = b.$element.prop("selectedIndex");
                if (b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !a(this).parent().hasClass("disabled")) {
                    var g = b.$element.find("option"),
                        h = g.eq(d),
                        i = h.prop("selected"),
                        j = h.parent("optgroup"),
                        k = b.options.maxOptions,
                        l = j.data("maxOptions") || !1;
                    if (b.multiple) {
                        if (h.prop("selected", !i), b.setSelected(d, !i), a(this).blur(), k !== !1 || l !== !1) {
                            var m = k < g.filter(":selected").length,
                                n = l < j.find("option:selected").length,
                                o = b.options.maxOptionsText,
                                p = o[0].replace("{n}", k),
                                q = o[1].replace("{n}", l),
                                r = a('<div class="notify"></div>');
                            if (k && m || l && n)
                                if (k && 1 == k) g.prop("selected", !1), h.prop("selected", !0), b.$menu.find(".selected").removeClass("selected"), b.setSelected(d, !0);
                                else if (l && 1 == l) {
                                j.find("option:selected").prop("selected", !1), h.prop("selected", !0);
                                var s = a(this).data("optgroup");
                                b.$menu.find(".selected").has('a[data-optgroup="' + s + '"]').removeClass("selected"), b.setSelected(d, !0)
                            } else o[2] && (p = p.replace("{var}", o[2][k > 1 ? 0 : 1]), q = q.replace("{var}", o[2][l > 1 ? 0 : 1])), h.prop("selected", !1), b.$menu.append(r), k && m && (r.append(a("<div>" + p + "</div>")), b.$element.trigger("maxReached.bs.select")), l && n && (r.append(a("<div>" + q + "</div>")), b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                                b.setSelected(d, !1)
                            }, 10), r.delay(750).fadeOut(300, function () {
                                a(this).remove()
                            })
                        }
                    } else g.prop("selected", !1), h.prop("selected", !0), b.$menu.find(".selected").removeClass("selected"), b.setSelected(d, !0);
                    b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(), (e != b.$element.val() && b.multiple || f != b.$element.prop("selectedIndex") && !b.multiple) && b.$element.change()
                }
            }), this.$menu.on("click", "li.disabled a, li dt, li .div-contain, .popover-title, .popover-title :not(.close)", function (a) {
                a.target == this && (a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus())
            }), this.$menu.on("click", ".popover-title .close", function () {
                b.$button.focus()
            }), this.$searchbox.on("click", function (a) {
                a.stopPropagation()
            }), this.$menu.on("click", ".actions-btn", function (c) {
                b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).is(".bs-select-all") ? b.selectAll() : b.deselectAll(), b.$element.change()
            }), this.$element.change(function () {
                b.render(!1)
            })
        },
        liveSearchListener: function () {
            var b = this,
                c = a('<li class="no-results"></li>');
            this.$newElement.on("click.dropdown.data-api", function () {
                b.$menu.find(".active").removeClass("active"), b.$searchbox.val() && (b.$searchbox.val(""), b.$lis.not(".is-hidden").removeClass("hide"), c.parent().length && c.remove()), b.multiple || b.$menu.find(".selected").addClass("active"), setTimeout(function () {
                    b.$searchbox.focus()
                }, 10)
            }), this.$searchbox.on("input propertychange", function () {
                b.$searchbox.val() ? (b.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains(" + b.$searchbox.val() + ")").parent().addClass("hide"), b.$menu.find("li").filter(":visible:not(.no-results)").length ? c.parent().length && c.remove() : (c.parent().length && c.remove(), c.html(b.options.noneResultsText + ' "' + b.$searchbox.val() + '"').show(), b.$menu.find("li").last().after(c))) : (b.$lis.not(".is-hidden").removeClass("hide"), c.parent().length && c.remove()), b.$menu.find("li.active").removeClass("active"), b.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(), a(this).focus()
            }), this.$menu.on("mouseenter", "a", function (c) {
                b.$menu.find(".active").removeClass("active"), a(c.currentTarget).parent().not(".disabled").addClass("active")
            }), this.$menu.on("mouseleave", "a", function () {
                b.$menu.find(".active").removeClass("active")
            })
        },
        val: function (a) {
            return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val()
        },
        selectAll: function () {
            null == this.$lis && (this.$lis = this.$menu.find("li")), this.$element.find("option:enabled").prop("selected", !0), a(this.$lis).not(".disabled").addClass("selected"), this.render(!1)
        },
        deselectAll: function () {
            null == this.$lis && (this.$lis = this.$menu.find("li")), this.$element.find("option:enabled").prop("selected", !1), a(this.$lis).not(".disabled").removeClass("selected"), this.render(!1)
        },
        keydown: function (b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
            };
            if (c = a(this), e = c.parent(), c.is("input") && (e = c.parent().parent()), l = e.data("this"), l.options.liveSearch && (e = c.parent().parent()), l.options.container && (e = l.$menu), d = a("[role=menu] li:not(.divider) a", e), n = l.$menu.parent().hasClass("open"), !n && /([0-9]|[A-z])/.test(String.fromCharCode(b.keyCode)) && (l.options.container ? l.$newElement.trigger("click") : (l.setSize(), l.$menu.parent().addClass("open"), n = !0), l.$searchbox.focus()), l.options.liveSearch && (/(^9$|27)/.test(b.keyCode.toString(10)) && n && 0 === l.$menu.find(".active").length && (b.preventDefault(), l.$menu.parent().removeClass("open"), l.$button.focus()), d = a("[role=menu] li:not(.divider):visible", e), c.val() || /(38|40)/.test(b.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = l.$newElement.find("li").filter(":icontains(" + o[b.keyCode] + ")"))), d.length) {
                if (/(38|40)/.test(b.keyCode.toString(10))) f = d.index(d.filter(":focus")), h = d.parent(":not(.disabled):visible").first().index(), i = d.parent(":not(.disabled):visible").last().index(), g = d.eq(f).parent().nextAll(":not(.disabled):visible").eq(0).index(), j = d.eq(f).parent().prevAll(":not(.disabled):visible").eq(0).index(), k = d.eq(g).parent().prevAll(":not(.disabled):visible").eq(0).index(), l.options.liveSearch && (d.each(function (b) {
                    a(this).is(":not(.disabled)") && a(this).data("index", b)
                }), f = d.index(d.filter(".active")), h = d.filter(":not(.disabled):visible").first().data("index"), i = d.filter(":not(.disabled):visible").last().data("index"), g = d.eq(f).nextAll(":not(.disabled):visible").eq(0).data("index"), j = d.eq(f).prevAll(":not(.disabled):visible").eq(0).data("index"), k = d.eq(g).prevAll(":not(.disabled):visible").eq(0).data("index")), m = c.data("prevIndex"), 38 == b.keyCode && (l.options.liveSearch && (f -= 1), f != k && f > j && (f = j), h > f && (f = h), f == m && (f = i)), 40 == b.keyCode && (l.options.liveSearch && (f += 1), -1 == f && (f = 0), f != k && g > f && (f = g), f > i && (f = i), f == m && (f = h)), c.data("prevIndex", f), l.options.liveSearch ? (b.preventDefault(), c.is(".dropdown-toggle") || (d.removeClass("active"), d.eq(f).addClass("active").find("a").focus(), c.focus())) : d.eq(f).focus();
                else if (!c.is("input")) {
                    var p, q, r = [];
                    d.each(function () {
                        a(this).parent().is(":not(.disabled)") && a.trim(a(this).text().toLowerCase()).substring(0, 1) == o[b.keyCode] && r.push(a(this).parent().index())
                    }), p = a(document).data("keycount"), p++, a(document).data("keycount", p), q = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), q != o[b.keyCode] ? (p = 1, a(document).data("keycount", p)) : p >= r.length && (a(document).data("keycount", 0), p > r.length && (p = 1)), d.eq(r[p - 1]).focus()
                }(/(13|32)/.test(b.keyCode.toString(10)) || l.options.selectOnTab && /(^9$)/.test(b.keyCode.toString(10))) && n && (/(32)/.test(b.keyCode.toString(10)) || b.preventDefault(), l.options.liveSearch ? /(32)/.test(b.keyCode.toString(10)) || (l.$menu.find(".active a").click(), c.focus()) : a(":focus").click(), a(document).data("keycount", 0)), (/(^9$|27)/.test(b.keyCode.toString(10)) && n && (l.multiple || l.options.liveSearch) || /(27)/.test(b.keyCode.toString(10)) && !n) && (l.$menu.parent().removeClass("open"), l.$button.focus())
            }
        },
        mobile: function () {
            this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
        },
        refresh: function () {
            this.$lis = null, this.reloadLi(), this.render(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
        },
        update: function () {
            this.reloadLi(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
        },
        hide: function () {
            this.$newElement.hide()
        },
        show: function () {
            this.$newElement.show()
        },
        remove: function () {
            this.$newElement.remove(), this.$element.remove()
        }
    };
    var d = a.fn.selectpicker;
    a.fn.selectpicker = b, a.fn.selectpicker.Constructor = c, a.fn.selectpicker.noConflict = function () {
        return a.fn.selectpicker = d, this
    }, a(document).data("keycount", 0).on("keydown", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input", c.prototype.keydown).on("focusin.modal", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input", function (a) {
        a.stopPropagation()
    })
}(jQuery);
//# sourceMappingURL=bootstrap-select.js.map
