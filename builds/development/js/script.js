(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var $ = require('jquery');
var jQuery = $;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
 
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
 
jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },


    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});
 
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/**
 * jQuery Validation Plugin 1.8.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 JÃ¶rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c) {
    c.extend(c.fn, {
        validate: function(a) {
            if (this.length) {
                var b = c.data(this[0], "validator");
                if (b) return b;
                b = new c.validator(a, this[0]);
                c.data(this[0], "validator", b);
                if (b.settings.onsubmit) {
                    this.find("input, button").filter(".cancel").click(function() {
                        b.cancelSubmit = true
                    });
                    b.settings.submitHandler && this.find("input, button").filter(":submit").click(function() {
                        b.submitButton = this
                    });
                    this.submit(function(d) {
                        function e() {
                            if (b.settings.submitHandler) {
                                if (b.submitButton) var f = c("<input type='hidden'/>").attr("name",
                                    b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);
                                b.settings.submitHandler.call(b, b.currentForm);
                                b.submitButton && f.remove();
                                return false
                            }
                            return true
                        }
                        b.settings.debug && d.preventDefault();
                        if (b.cancelSubmit) {
                            b.cancelSubmit = false;
                            return e()
                        }
                        if (b.form()) {
                            if (b.pendingRequest) {
                                b.formSubmitted = true;
                                return false
                            }
                            return e()
                        } else {
                            b.focusInvalid();
                            return false
                        }
                    })
                }
                return b
            } else a && a.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        },
        valid: function() {
            if (c(this[0]).is("form")) return this.validate().form();
            else {
                var a = true,
                    b = c(this[0].form).validate();
                this.each(function() {
                    a &= b.element(this)
                });
                return a
            }
        },
        removeAttrs: function(a) {
            var b = {}, d = this;
            c.each(a.split(/\s/), function(e, f) {
                b[f] = d.attr(f);
                d.removeAttr(f)
            });
            return b
        },
        rules: function(a, b) {
            var d = this[0];
            if (a) {
                var e = c.data(d.form, "validator").settings,
                    f = e.rules,
                    g = c.validator.staticRules(d);
                switch (a) {
                    case "add":
                        c.extend(g, c.validator.normalizeRule(b));
                        f[d.name] = g;
                        if (b.messages) e.messages[d.name] = c.extend(e.messages[d.name], b.messages);
                        break;
                    case "remove":
                        if (!b) {
                            delete f[d.name];
                            return g
                        }
                        var h = {};
                        c.each(b.split(/\s/), function(j, i) {
                            h[i] = g[i];
                            delete g[i]
                        });
                        return h
                }
            }
            d = c.validator.normalizeRules(c.extend({}, c.validator.metadataRules(d), c.validator.classRules(d), c.validator.attributeRules(d), c.validator.staticRules(d)), d);
            if (d.required) {
                e = d.required;
                delete d.required;
                d = c.extend({
                    required: e
                }, d)
            }
            return d
        }
    });
    c.extend(c.expr[":"], {
        blank: function(a) {
            return !c.trim("" + a.value)
        },
        filled: function(a) {
            return !!c.trim("" + a.value)
        },
        unchecked: function(a) {
            return !a.checked
        }
    });
    c.validator = function(a,
        b) {
        this.settings = c.extend(true, {}, c.validator.defaults, a);
        this.currentForm = b;
        this.init()
    };
    c.validator.format = function(a, b) {
        if (arguments.length == 1) return function() {
            var d = c.makeArray(arguments);
            d.unshift(a);
            return c.validator.format.apply(this, d)
        };
        if (arguments.length > 2 && b.constructor != Array) b = c.makeArray(arguments).slice(1);
        if (b.constructor != Array) b = [b];
        c.each(b, function(d, e) {
            a = a.replace(RegExp("\\{" + d + "\\}", "g"), e)
        });
        return a
    };
    c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: true,
            ignore: [],
            ignoreTitle: false,
            onfocusin: function(a) {
                this.lastActive = a;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass);
                    this.addWrapper(this.errorsFor(a)).hide()
                }
            },
            onfocusout: function(a) {
                if (!this.checkable(a) && (a.name in this.submitted || !this.optional(a))) this.element(a)
            },
            onkeyup: function(a) {
                if (a.name in this.submitted || a == this.lastElement) this.element(a)
            },
            onclick: function(a) {
                if (a.name in this.submitted) this.element(a);
                else a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(a, b, d) {
                a.type === "radio" ? this.findByName(a.name).addClass(b).removeClass(d) : c(a).addClass(b).removeClass(d)
            },
            unhighlight: function(a, b, d) {
                a.type === "radio" ? this.findByName(a.name).removeClass(b).addClass(d) : c(a).removeClass(b).addClass(d)
            }
        },
        setDefaults: function(a) {
            c.extend(c.validator.defaults,
                a)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                function a(e) {
                    var f = c.data(this[0].form, "validator");
                    e = "on" + e.type.replace(/^validate/,
                        "");
                    f.settings[e] && f.settings[e].call(f, this[0])
                }
                this.labelContainer = c(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm);
                this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var b = this.groups = {};
                c.each(this.settings.groups, function(e, f) {
                    c.each(f.split(/\s/), function(g, h) {
                        b[h] = e
                    })
                });
                var d = this.settings.rules;
                c.each(d, function(e, f) {
                    d[e] = c.validator.normalizeRule(f)
                });
                c(this.currentForm).validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", a).validateDelegate(":radio, :checkbox, select, option", "click", a);
                this.settings.invalidHandler && c(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                this.checkForm();
                c.extend(this.submitted, this.errorMap);
                this.invalid = c.extend({}, this.errorMap);
                this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(a) {
                this.lastElement = a = this.clean(a);
                this.prepareElement(a);
                this.currentElements = c(a);
                var b = this.check(a);
                if (b) delete this.invalid[a.name];
                else this.invalid[a.name] = true; if (!this.numberOfInvalids()) this.toHide = this.toHide.add(this.containers);
                this.showErrors();
                return b
            },
            showErrors: function(a) {
                if (a) {
                    c.extend(this.errorMap,
                        a);
                    this.errorList = [];
                    for (var b in a) this.errorList.push({
                        message: a[b],
                        element: this.findByName(b)[0]
                    });
                    this.successList = c.grep(this.successList, function(d) {
                        return !(d.name in a)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                c.fn.resetForm && c(this.currentForm).resetForm();
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b = 0,
                    d;
                for (d in a) b++;
                return b
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() == 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (a) {}
            },
            findLastActive: function() {
                var a = this.lastActive;
                return a && c.grep(this.errorList, function(b) {
                    return b.element.name ==
                        a.name
                }).length == 1 && a
            },
            elements: function() {
                var a = this,
                    b = {};
                return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name && a.settings.debug && window.console && console.error("%o has no name assigned", this);
                    if (this.name in b || !a.objectLength(c(this).rules())) return false;
                    return b[this.name] = true
                })
            },
            clean: function(a) {
                return c(a)[0]
            },
            errors: function() {
                return c(this.settings.errorElement + "." + this.settings.errorClass,
                    this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = c([]);
                this.toHide = c([]);
                this.currentElements = c([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            },
            check: function(a) {
                a = this.clean(a);
                if (this.checkable(a)) a = this.findByName(a.name).not(this.settings.ignore)[0];
                var b = c(a).rules(),
                    d = false,
                    e;
                for (e in b) {
                    var f = {
                        method: e,
                        parameters: b[e]
                    };
                    try {
                        var g =
                            c.validator.methods[e].call(this, a.value.replace(/\r/g, ""), a, f.parameters);
                        if (g == "dependency-mismatch") d = true;
                        else {
                            d = false;
                            if (g == "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(a));
                                return
                            }
                            if (!g) {
                                this.formatAndAdd(a, f);
                                return false
                            }
                        }
                    } catch (h) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " + a.id + ", check the '" + f.method + "' method", h);
                        throw h;
                    }
                }
                if (!d) {
                    this.objectLength(b) && this.successList.push(a);
                    return true
                }
            },
            customMetaMessage: function(a, b) {
                if (c.metadata) {
                    var d =
                        this.settings.meta ? c(a).metadata()[this.settings.meta] : c(a).metadata();
                    return d && d.messages && d.messages[b]
                }
            },
            customMessage: function(a, b) {
                var d = this.settings.messages[a];
                return d && (d.constructor == String ? d : d[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (arguments[a] !== undefined) return arguments[a]
            },
            defaultMessage: function(a, b) {
                return this.findDefined(this.customMessage(a.name, b), this.customMetaMessage(a, b), !this.settings.ignoreTitle && a.title || undefined, c.validator.messages[b], "<strong>Warning: No message defined for " +
                    a.name + "</strong>")
            },
            formatAndAdd: function(a, b) {
                var d = this.defaultMessage(a, b.method),
                    e = /\$?\{(\d+)\}/g;
                if (typeof d == "function") d = d.call(this, b.parameters, a);
                else if (e.test(d)) d = jQuery.format(d.replace(e, "{$1}"), b.parameters);
                this.errorList.push({
                    message: d,
                    element: a
                });
                this.errorMap[a.name] = d;
                this.submitted[a.name] = d
            },
            addWrapper: function(a) {
                if (this.settings.wrapper) a = a.add(a.parent(this.settings.wrapper));
                return a
            },
            defaultShowErrors: function() {
                for (var a = 0; this.errorList[a]; a++) {
                    var b = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(b.element, b.message)
                }
                if (this.errorList.length) this.toShow = this.toShow.add(this.containers);
                if (this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) {
                    a = 0;
                    for (b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return c(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(a, b) {
                var d = this.errorsFor(a);
                if (d.length) {
                    d.removeClass().addClass(this.settings.errorClass);
                    d.attr("generated") && d.html(b)
                } else {
                    d = c("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(a),
                        generated: true
                    }).addClass(this.settings.errorClass).html(b ||
                        "");
                    if (this.settings.wrapper) d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, c(a)) : d.insertAfter(a))
                } if (!b && this.settings.success) {
                    d.text("");
                    typeof this.settings.success == "string" ? d.addClass(this.settings.success) : this.settings.success(d)
                }
                this.toShow = this.toShow.add(d)
            },
            errorsFor: function(a) {
                var b = this.idOrName(a);
                return this.errors().filter(function() {
                    return c(this).attr("for") == b
                })
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(a) {
                var b = this.currentForm;
                return c(document.getElementsByName(a)).map(function(d, e) {
                    return e.form == b && e.name == a && e || null
                })
            },
            getLength: function(a, b) {
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return c("option:selected", b).length;
                    case "input":
                        if (this.checkable(b)) return this.findByName(b.name).filter(":checked").length
                }
                return a.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : true
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(a, b) {
                    return !!c(a, b.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(a) {
                return !c.validator.methods.required.call(this, c.trim(a.value), a) && "dependency-mismatch"
            },
            startRequest: function(a) {
                if (!this.pending[a.name]) {
                    this.pendingRequest++;
                    this.pending[a.name] = true
                }
            },
            stopRequest: function(a, b) {
                this.pendingRequest--;
                if (this.pendingRequest <
                    0) this.pendingRequest = 0;
                delete this.pending[a.name];
                if (b && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
                    c(this.currentForm).submit();
                    this.formSubmitted = false
                } else if (!b && this.pendingRequest == 0 && this.formSubmitted) {
                    c(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false
                }
            },
            previousValue: function(a) {
                return c.data(a, "previousValue") || c.data(a, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(a, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            dateDE: {
                dateDE: true
            },
            number: {
                number: true
            },
            numberDE: {
                numberDE: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(a, b) {
            a.constructor == String ? this.classRuleSettings[a] = b : c.extend(this.classRuleSettings, a)
        },
        classRules: function(a) {
            var b = {};
            (a = c(a).attr("class")) && c.each(a.split(" "), function() {
                this in c.validator.classRuleSettings && c.extend(b, c.validator.classRuleSettings[this])
            });
            return b
        },
        attributeRules: function(a) {
            var b = {};
            a = c(a);
            for (var d in c.validator.methods) {
                var e = a.attr(d);
                if (e) b[d] = e
            }
            b.maxlength && /-1|2147483647|524288/.test(b.maxlength) && delete b.maxlength;
            return b
        },
        metadataRules: function(a) {
            if (!c.metadata) return {};
            var b = c.data(a.form, "validator").settings.meta;
            return b ? c(a).metadata()[b] : c(a).metadata()
        },
        staticRules: function(a) {
            var b = {}, d = c.data(a.form, "validator");
            if (d.settings.rules) b = c.validator.normalizeRule(d.settings.rules[a.name]) || {};
            return b
        },
        normalizeRules: function(a, b) {
            c.each(a, function(d, e) {
                if (e ===
                    false) delete a[d];
                else if (e.param || e.depends) {
                    var f = true;
                    switch (typeof e.depends) {
                        case "string":
                            f = !! c(e.depends, b.form).length;
                            break;
                        case "function":
                            f = e.depends.call(b, b)
                    }
                    if (f) a[d] = e.param !== undefined ? e.param : true;
                    else delete a[d]
                }
            });
            c.each(a, function(d, e) {
                a[d] = c.isFunction(e) ? e(b) : e
            });
            c.each(["minlength", "maxlength", "min", "max"], function() {
                if (a[this]) a[this] = Number(a[this])
            });
            c.each(["rangelength", "range"], function() {
                if (a[this]) a[this] = [Number(a[this][0]), Number(a[this][1])]
            });
            if (c.validator.autoCreateRanges) {
                if (a.min &&
                    a.max) {
                    a.range = [a.min, a.max];
                    delete a.min;
                    delete a.max
                }
                if (a.minlength && a.maxlength) {
                    a.rangelength = [a.minlength, a.maxlength];
                    delete a.minlength;
                    delete a.maxlength
                }
            }
            a.messages && delete a.messages;
            return a
        },
        normalizeRule: function(a) {
            if (typeof a == "string") {
                var b = {};
                c.each(a.split(/\s/), function() {
                    b[this] = true
                });
                a = b
            }
            return a
        },
        addMethod: function(a, b, d) {
            c.validator.methods[a] = b;
            c.validator.messages[a] = d != undefined ? d : c.validator.messages[a];
            b.length < 3 && c.validator.addClassRules(a, c.validator.normalizeRule(a))
        },
        methods: {
            required: function(a, b, d) {
                if (!this.depend(d, b)) return "dependency-mismatch";
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return (a = c(b).val()) && a.length > 0;
                    case "input":
                        if (this.checkable(b)) return this.getLength(a, b) > 0;
                    default:
                        return c.trim(a).length > 0
                }
            },
            remote: function(a, b, d) {
                if (this.optional(b)) return "dependency-mismatch";
                var e = this.previousValue(b);
                this.settings.messages[b.name] || (this.settings.messages[b.name] = {});
                e.originalMessage = this.settings.messages[b.name].remote;
                this.settings.messages[b.name].remote =
                    e.message;
                d = typeof d == "string" && {
                    url: d
                } || d;
                if (this.pending[b.name]) return "pending";
                if (e.old === a) return e.valid;
                e.old = a;
                var f = this;
                this.startRequest(b);
                var g = {};
                g[b.name] = a;
                c.ajax(c.extend(true, {
                    url: d,
                    mode: "abort",
                    port: "validate" + b.name,
                    dataType: "json",
                    data: g,
                    success: function(h) {
                        f.settings.messages[b.name].remote = e.originalMessage;
                        var j = h === true;
                        if (j) {
                            var i = f.formSubmitted;
                            f.prepareElement(b);
                            f.formSubmitted = i;
                            f.successList.push(b);
                            f.showErrors()
                        } else {
                            i = {};
                            h = h || f.defaultMessage(b, "remote");
                            i[b.name] =
                                e.message = c.isFunction(h) ? h(a) : h;
                            f.showErrors(i)
                        }
                        e.valid = j;
                        f.stopRequest(b, j)
                    }
                }, d));
                return "pending"
            },
            minlength: function(a, b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) >= d
            },
            maxlength: function(a, b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) <= d
            },
            rangelength: function(a, b, d) {
                a = this.getLength(c.trim(a), b);
                return this.optional(b) || a >= d[0] && a <= d[1]
            },
            min: function(a, b, d) {
                return this.optional(b) || a >= d
            },
            max: function(a, b, d) {
                return this.optional(b) || a <= d
            },
            range: function(a, b, d) {
                return this.optional(b) ||
                    a >= d[0] && a <= d[1]
            },
            email: function(a, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a))
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9-]+/.test(a)) return false;
                var d = 0,
                    e = 0,
                    f = false;
                a = a.replace(/\D/g, "");
                for (var g = a.length - 1; g >=
                    0; g--) {
                    e = a.charAt(g);
                    e = parseInt(e, 10);
                    if (f)
                        if ((e *= 2) > 9) e -= 9;
                    d += e;
                    f = !f
                }
                return d % 10 == 0
            },
            accept: function(a, b, d) {
                d = typeof d == "string" ? d.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(b) || a.match(RegExp(".(" + d + ")$", "i"))
            },
            equalTo: function(a, b, d) {
                d = c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    c(b).valid()
                });
                return a == d.val()
            }
        }
    });
    c.format = c.validator.format
})(jQuery);
(function(c) {
    var a = {};
    if (c.ajaxPrefilter) c.ajaxPrefilter(function(d, e, f) {
        e = d.port;
        if (d.mode == "abort") {
            a[e] && a[e].abort();
            a[e] = f
        }
    });
    else {
        var b = c.ajax;
        c.ajax = function(d) {
            var e = ("port" in d ? d : c.ajaxSettings).port;
            if (("mode" in d ? d : c.ajaxSettings).mode == "abort") {
                a[e] && a[e].abort();
                return a[e] = b.apply(this, arguments)
            }
            return b.apply(this, arguments)
        }
    }
})(jQuery);
(function(c) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && c.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        function d(e) {
            e = c.event.fix(e);
            e.type = b;
            return c.event.handle.call(this, e)
        }
        c.event.special[b] = {
            setup: function() {
                this.addEventListener(a, d, true)
            },
            teardown: function() {
                this.removeEventListener(a, d, true)
            },
            handler: function(e) {
                arguments[0] = c.event.fix(e);
                arguments[0].type = b;
                return c.event.handle.apply(this, arguments)
            }
        }
    });
    c.extend(c.fn, {
        validateDelegate: function(a,
            b, d) {
            return this.bind(b, function(e) {
                var f = c(e.target);
                if (f.is(a)) return d.apply(f, arguments)
            })
        }
    })
})(jQuery);
/*!
 * VERSION: 1.13.1
 * DATE: 2014-07-19
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.13.1",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted)if(e)this._initted=!1;else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var n=this._time;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var a,o=1/(1-r),h=this._firstPT;h;)a=h.s+h.c,h.c*=o,h.s=a-h.c,h=h._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,u,p,c,f=this._dirty?this.totalDuration():this._totalDuration,m=this._time,d=this._totalTime,g=this._cycle,v=this._duration,y=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=v,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===v&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>y||y===n)&&y!==t&&(i=!0,y>n&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||y===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===v&&y>0&&y!==n)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===v&&(this._initted||!this.vars.lazy||i)&&(y>=0&&(i=!0),this._rawPrevTime=c=!e||t||y===t?t:n)):this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=v+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=v-this._time),this._time>v?this._time=v:0>this._time&&(this._time=0)),this._easeType?(l=this._time/v,u=this._easeType,p=this._easePower,(1===u||3===u&&l>=.5)&&(l=1-l),3===u&&(l*=2),1===p?l*=l:2===p?l*=l*l:3===p?l*=l*l*l:4===p&&(l*=l*l*l*l),this.ratio=1===u?1-l:2===u?l:.5>this._time/v?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/v)),m===this._time&&!i&&g===this._cycle)return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=m,this._totalTime=d,this._rawPrevTime=y,this._cycle=g,a.lazyTweens.push(this),this._lazy=t,void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/v):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==m&&t>=0&&(this._active=!0),0===d&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===v)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==d||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),this._cycle!==g&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||_)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||_),0===v&&this._rawPrevTime===n&&c!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,p){a=a||0;var c,f,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(p||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),c=t.length,m=0;c>m;m++){f={};for(d in n)f[d]=n[d];f.delay=g,m===c-1&&l&&(f.onComplete=y),v[m]=new r(t[m],e,f),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},p=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=p(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,p,c=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in c)for(l=c[_].target.parentNode;l;)l===t&&(n=n.concat(c[_].tweens)),l=l.parentNode;for(p=n.length,u=0;p>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var c=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=p(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){c(!0,t,e,i)},r.resumeAll=function(t,e,i){c(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],o(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));o(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=n.isSelector,o=n.isArray,h=n.lazyTweens,l=n.lazyRender,_=[],u=_gsScope._gsDefine.globals,p=function(t){var e,i={};for(e in t)i[e]=t[e];return i},c=function(t,e,i,s){t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||_)},f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=s.prototype=new e;return s.version="1.13.1",m.constructor=s,m.kill()._gc=!1,m.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},m.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},m.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},m.staggerTo=function(t,e,r,n,o,h,l,_){var u,c=new s({onComplete:h,onCompleteParams:l,onCompleteScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=f(t)),n=n||0,u=0;t.length>u;u++)r.startAt&&(r.startAt=p(r.startAt)),c.to(t[u],e,p(r),u*n);return this.add(c,o)},m.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},m.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},m.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},m.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},m.add=function(r,n,a,h){var l,_,u,p,c,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(a=a||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)o(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===a?l=p._startTime+p.totalDuration()/p._timeScale:"start"===a&&(p._startTime-=p.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,f=c.rawTime()>r._startTime;c._timeline;)f&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},m.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},m._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},m.insert=m.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},m.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},m.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},m.addPause=function(t,e,i,s){return this.call(c,["{self}",e,i,s],this,t)},m.removeLabel=function(t){return delete this._labels[t],this},m.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},m._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},m.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(t,e){return this.play(t,e)},m.gotoAndStop=function(t,e){return this.pause(t,e)},m.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,u,p=this._dirty?this.totalDuration():this._totalDuration,c=this._time,f=this._startTime,m=this._timeScale,d=this._paused;if(t>=p?(this._totalTime=this._time=p,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(u=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=p+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==c&&this._first||i||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_)),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(h.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_))),o&&(this._gc||(f===this._startTime||m!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(n&&(h.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||_)))}},m._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},m.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},m.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},m._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},m.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},m._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},m.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return this},m._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},m.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},m.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},m.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=[],a=e._internals,o=a.lazyTweens,h=a.lazyRender,l=new i(null,null,1,0),_=s.prototype=new t;return _.constructor=s,_.kill()._gc=!1,s.version="1.13.1",_.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},_.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},_.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},_.tweenTo=function(t,i){i=i||{};var s,r,a,o={ease:l,overwrite:i.delay?2:1,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)o[r]=i[r];return o.time=this._parseTimeOrLabel(t),s=Math.abs(Number(o.time)-this._time)/this._timeScale||.001,a=new e(this,s,o),o.onStart=function(){a.target.paused(!0),a.vars.time!==a.target.time()&&s===a.duration()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||a,i.onStartParams||n)},a},_.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},_.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,l,_,u,p,c=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,m=this._time,d=this._totalTime,g=this._startTime,v=this._timeScale,y=this._rawPrevTime,T=this._paused,w=this._cycle;if(t>=c?(this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,_="onComplete",0===this._duration&&(0===t||0>y||y===r)&&y!==t&&this._first&&(u=!0,y>r&&(_="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==m||0===f&&y!==r&&(y>0||0>t&&y>=0)&&!this._locked)&&(_="onReverseComplete",a=this._reversed),0>t?(this._active=!1,y>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):(0===f&&0>y&&(u=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(p=f+this._repeatDelay,this._cycle=this._totalTime/p>>0,0!==this._cycle&&this._cycle===this._totalTime/p&&this._cycle--,this._time=this._totalTime-this._cycle*p,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):0>this._time?this._time=t=0:t=this._time))),this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),b=x===(this._yoyo&&0!==(1&this._cycle)),P=this._totalTime,S=this._cycle,k=this._rawPrevTime,R=this._time;if(this._totalTime=w*f,w>this._cycle?x=!x:this._totalTime+=f,this._time=m,this._rawPrevTime=0===f?y-1e-4:y,this._cycle=w,this._locked=!0,m=x?0:f,this.render(m,e,0===f),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n),b&&(m=x?f+1e-4:-1e-4,this.render(m,!0,!1)),this._locked=!1,this._paused&&!T)return;this._time=R,this._totalTime=P,this._cycle=S,this._rawPrevTime=k}if(!(this._time!==m&&this._first||i||u))return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=m)for(s=this._first;s&&(l=s._next,!this._paused||T);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;else for(s=this._last;s&&(l=s._prev,!this._paused||T);)(s._active||m>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;this._onUpdate&&(e||(o.length&&h(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n))),_&&(this._locked||this._gc||(g===this._startTime||v!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(a&&(o.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[_]&&this.vars[_].apply(this.vars[_+"Scope"]||this,this.vars[_+"Params"]||n)))},_.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},_.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},_.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},_.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},_.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},_.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},_.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},_.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},_.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},_.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},_.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},_.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",o=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,c=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+c,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-c,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,h){var l,_,u,p,c,f,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)c=t[b],_=c.a,u=c.d,p=t[b+1].d,h?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),f=u-(u-_)*(a?.5*r:0!==y?w/y:0),m=u+(p-u)*(a?.5*r:0!==T?w/T:0),d=u-(f+((m-f)*(3*y/(y+T)+.5)/4||0))):(f=u-.5*(u-_)*r,m=u+.5*(p-u)*r,d=u-(f+m)/2),f+=d,m+=d,c.c=g=f,c.b=0!==l?P:P=c.a+.6*(c.c-c.a),c.da=u-_,c.ca=g-_,c.ba=P-_,n?(v=o(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;c=t[b],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=o(c.a,P,c.c,c.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},l=function(t,s,r,a){var o,h,l,_,u,p,c=[];if(a)for(t=[a].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][s])&&"="===p.charAt(1)&&(t[h][s]=a[s]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return c[0]=new n(t[0][s],0,0,t[-1>o?0:1][s]),c;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],c[h]=new n(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return c[h]=new n(t[h][s],0,0,t[h+1][s]),c},_=function(t,n,o,_,u,p){var c,f,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":a,null==n&&(n=1);for(f in t[0])x.push(f);if(t.length>1){for(T=t[t.length-1],y=!0,c=x.length;--c>-1;)if(f=x[c],Math.abs(b[f]-T[f])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=s.length=0,c=x.length;--c>-1;)f=x[c],r[f]=-1!==u.indexOf(","+f+","),w[f]=l(t,f,r[f],p);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!_){for(c=x.length;--c>-1;)if(r[f])for(m=w[x[c]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=x.length,d=o?4:1;--c>-1;)f=x[c],m=w[f],h(m,n,o,_,r[f]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},u=function(t,e,i){e=e||"soft";var s,r,a,o,h,l,_,u,p,c,f,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],c=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(f=t[_][p])&&"="===f.charAt(1)?i[p]+Number(f.charAt(0)+f.substr(2)):Number(f),g&&_>1&&u-1>_&&(h[c++]=(s+h[c-2])/2),h[c++]=s;for(u=c-d+1,c=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],a=h[_+2],o=2===d?0:h[_+3],h[c++]=f=3===d?new n(s,r,a,o):new n(s,(2*r+s)/3,(2*r+a)/3,a);h.length=c}return m},p=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,c,f=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=f*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),c=m*i+_-1,e[c]=(e[c]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)p(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},f=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.3",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},p=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in p)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):u(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=c(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,c=this._func,f=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),c[n]?f[n](h):f[n]=h;if(this._autoRotate){var d,g,v,y,T,w,x,b=this._autoRotate;
for(r=b.length;--r>-1;)n=b[r][2],w=b[r][3]||0,x=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*x+w:this._initialRotations[r],c[n]?f[n](h):f[n]=h)}}}),m=f.prototype;f.bezierThrough=_,f.cubicToQuadratic=o,f._autoCSS=!0,f.quadraticToCubic=function(t,e,i){return new n(t,(2*e+t)/3,(2*e+i)/3,i)},f._cssRegister=function(){var t=_gsScope._gsDefine.globals.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new f;var l,_,u,p=e.values,c=p.length-1,m=[],d={};if(0>c)return o;for(l=0;c>=l;l++)u=i(t,p[l],a,o,h,c!==l),m[l]=u.end;for(_ in e)d[_]=e[_];return d.values=m,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},m._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},m._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.13.1",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var l,_,u,p,c,f,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,k=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,R=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,z=180/Math.PI,I={},E=document,L=E.createElement("div"),F=E.createElement("img"),N=a._internals={_specialProps:o},X=navigator.userAgent,U=function(){var t,e=X.indexOf("Android"),i=E.createElement("div");return u=-1!==X.indexOf("Safari")&&-1===X.indexOf("Chrome")&&(-1===e||Number(X.substr(e+8,1))>3),c=u&&6>Number(X.substr(X.indexOf("Version/")+8,1)),p=-1!==X.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X)&&(f=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},B="",q="",V=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(q=3===s?"ms":i[s],B="-"+q.toLowerCase()+"-",q+t):null},G=E.defaultView?E.defaultView.getComputedStyle:function(){},W=a.getStyle=function(t,e,i,s,r){var n;return U||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||G(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(P,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):Y(t)},Q=N.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=A.test(i),u=t,p=L.style,c=0>s;if(c&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+W(t,"position")+";line-height:0;","%"!==r&&u.appendChild)p[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||E.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;p[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=Q(t,i,s,r,!0))}return c?-o:o},Z=N.calculateOffset=function(t,e,i){if("absolute"!==W(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=W(t,"margin"+s,i);return t["offset"+s]-(Q(t,e,parseFloat(r),r.replace(y,""))||0)},$=function(t,e){var i,s,r={};if(e=e||G(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,R)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===r[i]&&(r[i.replace(S,R)]=e[i]);return U||(r.opacity=Y(t)),s=Pe(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Z(t,a),void 0!==l[a]&&(o=new ue(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||G(t,null);--n>-1;)s-=parseFloat(W(t,"padding"+r[n],i,!0))||0,s-=parseFloat(W(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:z)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(m,""):"";return _?r=e?function(t){var e,p,c,f;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(f=t.replace(D,"|").split("|"),c=0;f.length>c;c++)f[c]=r(f[c]);return f.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],c=p.length,_>c--)for(;_>++c;)p[c]=i?p[0|(c-1)/2]:a[c];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ue=(N._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(N._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},c={},f=i._transform,m=I;for(i._transform=null,I=e,s=_=i.parse(t,e,s,r),I=m,n&&(i._transform=f,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,c[o]=s.s+s.c,p[o]=s.s,n||(l=new ue(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,c[o]=s.data[h],p[o]=s[h],n||(l=new ue(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:c,firstMPT:l,pt:_}},N.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),ce=a.parseComplex=function(t,e,i,s,r,n,a,o,h,_){i=i||n||"",a=new pe(t,e,0,0,a,_?2:1,null,!1,o,i,s),s+="";var u,p,c,f,g,v,y,T,w,x,P,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,C=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(D,", ").split(" "),R=R.join(" ").replace(D,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=_,u=0;A>u;u++)if(f=k[u],g=R[u],T=parseFloat(f),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),C&&-1!==g.indexOf("px"),!0);else if(r&&("#"===f.charAt(0)||ne[f]||b.test(f)))S=","===g.charAt(g.length-1)?"),":")",f=oe(f),g=oe(g),w=f.length+g.length>6,w&&!U&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(U||(w=!1),a.appendXtra(w?"rgba(":"rgb(",f[0],g[0]-f[0],",",!0,!0).appendXtra("",f[1],g[1]-f[1],",",!0).appendXtra("",f[2],g[2]-f[2],w?",":S,!0),w&&(f=4>f.length?1:f[3],a.appendXtra("",f,(4>g.length?1:g[3])-f,S,!1)));else if(v=f.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(c=0,p=0;v.length>p;p++)P=v[p],x=f.indexOf(P,c),a.appendXtra(f.substr(c,x-c),Number(P),ie(y[p],P),"",C&&"px"===f.substr(x+P.length,2),0===p),c=x+P.length;a["xs"+a.l]+=f.substr(c)}else a["xs"+a.l]+=a.l?" "+f:f;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},fe=9;for(h=pe.prototype,h.l=h.pr=0;--fe>0;)h["xn"+fe]=0,h["xs"+fe]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=N._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),h=i.replace(D,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return ce(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(W(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),ye=V("transform"),Te=B+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=N.Transform=function(){this.skewY=0},Pe=N.getTransform=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,h,l,_,u,p,c,f,m,d,g,v=i?t._gsTransform||new be:new be,y=0>v.scaleX,T=2e-5,w=1e5,x=179.99,b=x*M,P=xe?parseFloat(W(t,we,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;if(ye?r=W(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(C),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),r&&"none"!==r&&"matrix(1, 0, 0, 1, 0, 0)"!==r){for(n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)h=Number(n[o]),n[o]=(l=h-(h|=0))?(0|l*w+(0>l?-.5:.5))/w+h:h;if(16===n.length){var S=n[8],k=n[9],R=n[10],A=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,A=S*D-n[12],O=k*D-n[13],D=R*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var I,E,L,F,N,X,U,Y=n[0],j=n[1],B=n[2],q=n[3],V=n[4],G=n[5],Q=n[6],Z=n[7],$=n[11],H=Math.atan2(Q,R),K=-b>H||H>b;v.rotationX=H*z,H&&(F=Math.cos(-H),N=Math.sin(-H),I=V*F+S*N,E=G*F+k*N,L=Q*F+R*N,S=V*-N+S*F,k=G*-N+k*F,R=Q*-N+R*F,$=Z*-N+$*F,V=I,G=E,Q=L),H=Math.atan2(S,Y),v.rotationY=H*z,H&&(X=-b>H||H>b,F=Math.cos(-H),N=Math.sin(-H),I=Y*F-S*N,E=j*F-k*N,L=B*F-R*N,k=j*N+k*F,R=B*N+R*F,$=q*N+$*F,Y=I,j=E,B=L),H=Math.atan2(j,G),v.rotation=H*z,H&&(U=-b>H||H>b,F=Math.cos(-H),N=Math.sin(-H),Y=Y*F+V*N,E=j*F+G*N,G=j*-N+G*F,Q=B*-N+Q*F,j=E),U&&K?v.rotation=v.rotationX=0:U&&X?v.rotation=v.rotationY=0:X&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(Y*Y+j*j)*w+.5)/w,v.scaleY=(0|Math.sqrt(G*G+k*k)*w+.5)/w,v.scaleZ=(0|Math.sqrt(Q*Q+R*R)*w+.5)/w,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=A,v.y=O,v.z=D}}else if(!(xe&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===W(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,se=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,_=Math.sqrt(te*te+ee*ee),u=Math.sqrt(se*se+ie*ie),p=te||ee?Math.atan2(ee,te)*z:v.rotation||0,c=ie||se?Math.atan2(ie,se)*z+p:v.skewX||0,f=_-Math.abs(v.scaleX||0),m=u-Math.abs(v.scaleY||0),Math.abs(c)>90&&270>Math.abs(c)&&(y?(_*=-1,c+=0>=p?180:-180,p+=0>=p?180:-180):(u*=-1,c+=0>=c?180:-180)),d=(p-v.rotation)%180,g=(c-v.skewX)%180,(void 0===v.skewX||f>T||-T>f||m>T||-T>m||d>-x&&x>d&&false|d*w||g>-x&&x>g&&false|g*w)&&(v.scaleX=_,v.scaleY=u,v.rotation=p,v.skewX=c),xe&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0)}else v={x:0,y:0,z:0,scaleX:1,scaleY:1,scaleZ:1,skewX:0,perspective:0,rotation:0,rotationX:0,rotationY:0,zOrigin:0};return i&&(t._gsTransform=v),v.xPercent=v.yPercent=0,v},Se=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var c,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(c=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=c-(c*o+m*h),b+=m-(c*l+m*_)),v?(c=d/2,m=g/2,w+=", Dx="+(c-(c*o+m*h)+x)+", Dy="+(m-(c*l+m*_)+b)+")"):w+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>f?1:-1;for(c=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),fe=0;4>fe;fe++)S=J[fe],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):Q(this.t,S,parseFloat(P),P.replace(y,""))||0,k=i!==s[S]?2>fe?-s.ieOffsetX:-s.ieOffsetY:2>fe?c-s.ieOffsetX:m-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===fe||2===fe?1:R)))+"px"}}},ke=N.set3DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,c,f,m,d,g,v,y,T,w,x,b,P,S=this.data,k=this.t.style,R=S.rotation*M,A=S.scaleX,C=S.scaleY,O=S.scaleZ,D=S.x,z=S.y,I=S.z,E=S.perspective;if(!(1!==t&&0!==t||"auto"!==S.force3D||S.rotationY||S.rotationX||1!==O||E||I))return Re.call(this,t),void 0;if(p){var L=1e-4;L>A&&A>-L&&(A=O=2e-5),L>C&&C>-L&&(C=O=2e-5),!E||S.z||S.rotationX||S.rotationY||(E=0)}if(R||S.skewX)y=Math.cos(R),T=Math.sin(R),e=y,n=T,S.skewX&&(R-=S.skewX*M,y=Math.cos(R),T=Math.sin(R),"simple"===S.skewType&&(w=Math.tan(S.skewX*M),w=Math.sqrt(1+w*w),y*=w,T*=w)),i=-T,a=y;else{if(!(S.rotationY||S.rotationX||1!==O||E))return k[ye]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+D+"px,"+z+"px,"+I+"px)"+(1!==A||1!==C?" scale("+A+","+C+")":""),void 0;e=a=1,i=n=0}u=1,s=r=o=h=l=_=c=f=m=0,d=E?-1/E:0,g=S.zOrigin,v=1e5,R=S.rotationY*M,R&&(y=Math.cos(R),T=Math.sin(R),l=u*-T,f=d*-T,s=e*T,o=n*T,u*=y,d*=y,e*=y,n*=y),R=S.rotationX*M,R&&(y=Math.cos(R),T=Math.sin(R),w=i*y+s*T,x=a*y+o*T,b=_*y+u*T,P=m*y+d*T,s=i*-T+s*y,o=a*-T+o*y,u=_*-T+u*y,d=m*-T+d*y,i=w,a=x,_=b,m=P),1!==O&&(s*=O,o*=O,u*=O,d*=O),1!==C&&(i*=C,a*=C,_*=C,m*=C),1!==A&&(e*=A,n*=A,l*=A,f*=A),g&&(c-=g,r=s*c,h=o*c,c=u*c+g),r=(w=(r+=D)-(r|=0))?(0|w*v+(0>w?-.5:.5))/v+r:r,h=(w=(h+=z)-(h|=0))?(0|w*v+(0>w?-.5:.5))/v+h:h,c=(w=(c+=I)-(c|=0))?(0|w*v+(0>w?-.5:.5))/v+c:c,k[ye]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(")+[(0|e*v)/v,(0|n*v)/v,(0|l*v)/v,(0|f*v)/v,(0|i*v)/v,(0|a*v)/v,(0|_*v)/v,(0|m*v)/v,(0|s*v)/v,(0|o*v)/v,(0|u*v)/v,(0|d*v)/v,r,h,c,E?1+-c/E:1].join(",")+")"},Re=N.set2DTransformRatio=function(t){var e,i,s,r,n,a=this.data,o=this.t,h=o.style,l=a.x,_=a.y;return a.rotationX||a.rotationY||a.z||a.force3D===!0||"auto"===a.force3D&&1!==t&&0!==t?(this.setRatio=ke,ke.call(this,t),void 0):(a.rotation||a.skewX?(e=a.rotation*M,i=e-a.skewX*M,s=1e5,r=a.scaleX*s,n=a.scaleY*s,h[ye]=(a.xPercent||a.yPercent?"translate("+a.xPercent+"%,"+a.yPercent+"%) matrix(":"matrix(")+(0|Math.cos(e)*r)/s+","+(0|Math.sin(e)*r)/s+","+(0|Math.sin(i)*-n)/s+","+(0|Math.cos(i)*n)/s+","+l+","+_+")"):h[ye]=(a.xPercent||a.yPercent?"translate("+a.xPercent+"%,"+a.yPercent+"%) matrix(":"matrix(")+a.scaleX+",0,0,"+a.scaleY+","+l+","+_+")",void 0)};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,s,n,o,h){if(s._transform)return n;var l,_,u,p,c,f,m,d=s._transform=Pe(t,r,!0,h.parseTransform),g=t.style,v=1e-6,y=ve.length,T=h,w={};if("string"==typeof T.transform&&ye)u=L.style,u[ye]=T.transform,u.display="block",u.position="absolute",E.body.appendChild(L),l=Pe(L,null,!1),E.body.removeChild(L);else if("object"==typeof T){if(l={scaleX:se(null!=T.scaleX?T.scaleX:T.scale,d.scaleX),scaleY:se(null!=T.scaleY?T.scaleY:T.scale,d.scaleY),scaleZ:se(T.scaleZ,d.scaleZ),x:se(T.x,d.x),y:se(T.y,d.y),z:se(T.z,d.z),xPercent:se(T.xPercent,d.xPercent),yPercent:se(T.yPercent,d.yPercent),perspective:se(T.transformPerspective,d.perspective)},m=T.directionalRotation,null!=m)if("object"==typeof m)for(u in m)T[u]=m[u];else T.rotation=m;"string"==typeof T.x&&-1!==T.x.indexOf("%")&&(l.x=0,l.xPercent=se(T.x,d.xPercent)),"string"==typeof T.y&&-1!==T.y.indexOf("%")&&(l.y=0,l.yPercent=se(T.y,d.yPercent)),l.rotation=re("rotation"in T?T.rotation:"shortRotation"in T?T.shortRotation+"_short":"rotationZ"in T?T.rotationZ:d.rotation,d.rotation,"rotation",w),xe&&(l.rotationX=re("rotationX"in T?T.rotationX:"shortRotationX"in T?T.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",w),l.rotationY=re("rotationY"in T?T.rotationY:"shortRotationY"in T?T.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",w)),l.skewX=null==T.skewX?d.skewX:re(T.skewX,d.skewX),l.skewY=null==T.skewY?d.skewY:re(T.skewY,d.skewY),(_=l.skewY-d.skewY)&&(l.skewX+=_,l.rotation+=_)}for(xe&&null!=T.force3D&&(d.force3D=T.force3D,f=!0),d.skewType=T.skewType||d.skewType||a.defaultSkewType,c=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,c||null==T.scale||(l.scaleZ=1);--y>-1;)i=ve[y],p=l[i]-d[i],(p>v||-v>p||null!=I[i])&&(f=!0,n=new pe(d,i,d[i],p,n),i in w&&(n.e=w[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return p=T.transformOrigin,(p||xe&&c&&d.zOrigin)&&(ye?(f=!0,i=we,p=(p||W(t,i,r,!1,"50% 50%"))+"",n=new pe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,xe?(u=d.zOrigin,p=p.split(" "),d.zOrigin=(p.length>2&&(0===u||"0px"!==p[2])?parseFloat(p[2]):u)||0,n.xs0=n.e=p[0]+" "+(p[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=p):ee(p+"",d)),f&&(s._transformType=c||3===this._transformType?3:2),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,c,f,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=V(b[h])),u=_=W(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],c=parseFloat(u),v=u.substr((c+"").length),y="="===p.charAt(1),y?(f=parseInt(p.charAt(0)+"1",10),p=p.substr(2),f*=parseFloat(p),g=p.substr((f+"").length-(0>f?1:0))||""):(f=parseFloat(p),g=p.substr((f+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=Q(t,"borderLeft",c,v),w=Q(t,"borderTop",c,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=Q(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+f+g,l=parseFloat(_)+f+g)),a=ce(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,c="background-position",m=r||G(t,null),d=this.format((m?f?m.getPropertyValue(c+"-x")+" "+m.getPropertyValue(c+"-y"):m.getPropertyValue(c):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=W(t,"backgroundImage").replace(k,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),F.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-F.width:t.offsetHeight-F.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("userSelect",{prefix:!0}),de("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>f?(h=t.currentStyle,l=8>f?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(W(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(W(t,"borderTopWidth",r,!1,"0px")+" "+W(t,"borderTopStyle",r,!1,"solid")+" "+W(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("borderWidth",{parser:_e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Ae=function(t){var e,i=this.t,s=i.filter||W(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!W(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(W(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===W(t,"visibility",r)&&0!==e&&(o=0),U?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ae),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ce=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(P,"-$1").toLowerCase())):t.removeAttribute(e))},Oe=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ce(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,c,f=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Oe,a.pr=-11,i=!0,a.b=f,_=$(t,r),u=t._gsClassPT){for(p={},c=u.data;c;)p[c.p]=1,c=c._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:f.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.setAttribute("class",a.e),l=H(t,_,$(t),h,p),t.setAttribute("class",f),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var De=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?we:o[i].p),Ce(n,i);r&&(Ce(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=De,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),fe=h.length;fe--;)ge(h[fe]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=G(t,""),n=this._overwriteProps;var h,p,f,m,d,g,v,y,T,x=t.style;if(_&&""===x.zIndex&&(h=W(t,"zIndex",r),("auto"===h||""===h)&&this._addLazySet(x,"zIndex",0)),"string"==typeof e&&(m=x.cssText,h=$(t,r),x.cssText=m+";"+e,h=H(t,h,$(t)).difs,!U&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?u&&(_=!0,""===x.zIndex&&(v=W(t,"zIndex",r),("auto"===v||""===v)&&this._addLazySet(x,"zIndex",0)),c&&this._addLazySet(x,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,f=p;f&&f._next;)f=f._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,f),y.setRatio=T&&xe?ke:ye?Re:Se,y.data=this._transform||Pe(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,f=m;f&&f.pr>p.pr;)f=f._next;(p._prev=f?f._prev:d)?p._prev._next=p:m=p,(p._next=f)?f._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,_,u,p,c,f,m,d,g,v=t.style;for(a in e)c=e[a],h=o[a],h?i=h.parse(t,c,a,this,i,n,e):(p=W(t,a,r)+"",d="string"==typeof c,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(c)?(d||(c=oe(c),c=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"),i=ce(v,a,p,c,!0,"transparent",i,0,n)):!d||-1===c.indexOf(" ")&&-1===c.indexOf(",")?(_=parseFloat(p),f=_||0===_?p.substr((_+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(_=te(t,a,r),f="px"):"left"===a||"top"===a?(_=Z(t,a,r),f="px"):(_="opacity"!==a?0:1,f="")),g=d&&"="===c.charAt(1),g?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),m=c.replace(y,"")):(u=parseFloat(c),m=d?c.substr((u+"").length)||"":""),""===m&&(m=a in s?s[a]:f),c=u||0===u?(g?u+_:u)+m:e[a],f!==m&&""!==m&&(u||0===u)&&_&&(_=Q(t,a,_,f),"%"===m?(_/=Q(t,a,100,"%")/100,e.strictUnits!==!0&&(p=_+"%")):"em"===m?_/=Q(t,a,1,"em"):"px"!==m&&(u=Q(t,a,u,m),m="px"),g&&(u||0===u)&&(c=u+_+m)),g&&(u+=_),!_&&0!==_||!u&&0!==u?void 0!==v[a]&&(c||"NaN"!=c+""&&null!=c)?(i=new pe(v,a,u||_||0,0,i,-1,a,!1,0,p,c),i.xs0="none"!==c||"display"!==a&&-1===a.indexOf("Style")?c:p):j("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,_,u-_,i,0,a,l!==!1&&("px"===m||"zIndex"===a),0,p,c),i.xs0=m)):i=ce(v,a,p,c,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);
return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||Pe(this._target,r,!0)};var Me=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var s=this._firstPT=new pe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Me,s.data=this},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var ze=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)ze(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||ze(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,ze(t,l,u),o.render(i,!0),ze(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=H(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(t,e){var i,s,r;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={};for(i in e)this._start[i]=this._proxy[i]=s=t.getAttribute(i),r=this._addTween(this._proxy,i,parseFloat(s),e[i],i),this._end[i]=r?r.s+r.c:e[i],this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+"")}}),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},c=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",c("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),c("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),c("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),c=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=f?Math.random():1/u*c,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:c%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),c=u;--c>-1;)a=l[c],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},p=function(){},c=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),f={},m=function(s,r,n,a){this.sc=f[s]?f[s].sc:[],f[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,p,c,d=r.length,g=d;--d>-1;)(_=f[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),p=u.pop(),c=h(u.join("."))[p]=this.gsClass=n.apply(n,o),a&&(i[p]=c,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return c}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=c)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},x=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,x(new T(null,null,1,r),n,"easeOut",!0),x(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),x(new T(null,null,3,r),n,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var P=t.requestAnimationFrame,S=t.cancelAnimationFrame,k=Date.now||function(){return(new Date).getTime()},R=k();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],S=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=k(),c=e!==!1&&P,f=500,m=33,d=function(t){var e,a,o=k()-R;o>f&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(d)),a&&l.dispatchEvent("tick")};b.call(l),l.time=l.frame=0,l.tick=function(){d(!0)},l.lagSmoothing=function(t,e){f=t||1/_,m=Math.min(e,f,0)},l.sleep=function(){null!=r&&(c&&S?S(r):clearTimeout(r),s=p,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=k()-f+5),s=0===i?p:c&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),d(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),c=t,l.fps(i),void 0):c},l.fps(t),setTimeout(function(){c&&(!r||5>l.frame)&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var A=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?j:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=A.ticker=new l.Ticker,n=A.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&k()-R>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=c(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&q())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var O=g("core.SimpleTimeline",function(t){A.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=O.prototype=new A,n.constructor=O,n.kill()._gc=!1,n._first=n._last=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(A.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&c(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=V(n,this,!1),1===h&&this._siblings[r].length>1&&G(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=V(e,this,!1),1===h&&this._siblings.length>1&&G(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)U[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!F[i]||F[i]&&F[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new A,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.13.1",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=!0,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],E={},L=D._internals={isArray:c,isSelector:M,lazyTweens:I},F=D._plugins={},N=L.tweenLookup={},X=0,U=L.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},j=A._rootFramesTimeline=new O,B=A._rootTimeline=new O,q=L.lazyRender=function(){var t=I.length;for(E={};--t>-1;)s=I[t],s&&s._lazy!==!1&&(s.render(s._lazy,!1,!0),s._lazy=!1);I.length=0};B._startTime=a.time,j._startTime=a.frame,B._active=j._active=!0,setTimeout(q,1),A._updateRoot=D.render=function(){var t,e,i;if(I.length&&q(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),j.render((a.frame-j._startTime)*j._timeScale,!1,!1),I.length&&q(),!(a.frame%120)){for(i in N){for(e=N[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete N[i]}if(i=B._first,(!i||i._paused)&&D.autoSleep&&!j._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",A._updateRoot);var V=function(t,e,i){var s,r,n=t._gsTweenID;if(N[n||(t._gsTweenID=n="t"+X++)]||(N[n]={target:t,tweens:[]}),e&&(s=N[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return N[n].tweens},G=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var l,u=e._startTime+_,p=[],c=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||W(e,0,f),0===W(o,l,f)&&(p[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((f||!o._initted)&&2e-10>=u-o._startTime||(p[c++]=o)));for(n=c;--n>-1;)o=p[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},W=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{i={};for(s in n)U[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):w[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;E[e._gsTweenID]&&q(),this.vars.css||e.style&&e!==t&&e.nodeType&&F.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],U[n])_&&(_ instanceof Array||_.push&&c(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(F[n]&&(h=new F[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&G(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(E[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0&&l!==_)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,p=this._easeType,c=this._easePower;(1===p||3===p&&u>=.5)&&(u=1-u),3===p&&(u*=2),1===c?u*=u:2===c?u*=u*u:3===c?u*=u*u*u:4===c&&(u*=u*u*u*u),this.ratio=1===p?1-u:2===p?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=t,void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||y))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||y)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||y),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var i,s,r,n,a,o,h,l;if((c(e)||M(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){h=t||a,l=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in h)(n=a[r])&&(n.pg&&n.t._kill(h)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),l&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=this._lazy=!1,this._propLookup=this._targets?{}:[],this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=V(s[i],this,!0);else this._siblings=V(this.target,this,!0)}return A.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((c(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=V(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var Q=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=Q.prototype},!0);if(n=Q.prototype,Q.version="1.10.1",Q.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;
return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},Q.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===Q.API&&(F[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){Q.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new Q(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,Q.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in f)f[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/* ScrollMagic v1.0.8 | (c) Jan Paepke, @janpaepke | license & info: http://janpaepke.github.io/ScrollMagic */
!function($){ScrollMagic=function(e){"use strict";var t="ScrollMagic",r={container:window,vertical:!0,globalSceneOptions:{},loglevel:2},i=this,o=$.extend({},r,e),s=[],a=!1,l=0,c="PAUSED",g=!0,u=0,d=!1,f=!0,h=function(){if($.each(o,function(e){r.hasOwnProperty(e)||(m(2,'WARNING: Unknown option "'+e+'"'),delete o[e])}),o.container=$(o.container).first(),0===o.container.length)return void m(1,"ERROR creating object ScrollMagic: No valid scroll container supplied");g=!$.contains(document,o.container.get(0)),u=o.vertical?o.container.height():o.container.width(),o.container.on("scroll resize",w);try{TweenLite.ticker.addEventListener("tick",v),d=!0}catch(e){o.container.on("scroll resize",v),d=!1}m(3,"added new "+t+" controller")},p=function(){return o.vertical?o.container.scrollTop():o.container.scrollLeft()},v=function(){if(a&&f){var e=$.isArray(a)?a:s,t=l;l=i.scrollPos();var n=l-t;c=0===n?"PAUSED":n>0?"FORWARD":"REVERSE",i.updateScene(e,!0),0===e.length&&o.loglevel>=3&&m(3,"updating 0 Scenes (nothing added to controller)"),a=!1}},w=function(e){"resize"==e.type&&(u=o.vertical?o.container.height():o.container.width()),a=!0},m=function(e){if(o.loglevel>=e){var r="("+t+") ->",i=Array.prototype.splice.call(arguments,1),s=Function.prototype.bind.call(n,window);i.unshift(e,r),s.apply(window,i)}};return this.addScene=function(e){return $.isArray(e)?$.each(e,function(e,t){i.addScene(t)}):e.parent()!=i?e.addTo(i):-1==$.inArray(s,e)&&(s.push(e),$.each(o.globalSceneOptions,function(t,n){e[t]&&e[t].call(e,n)}),m(3,"added Scene ("+s.length+" total)")),i},this.removeScene=function(e){if($.isArray(e))$.each(e,function(e,t){i.removeScene(t)});else{var t=$.inArray(e,s);t>-1&&(s.splice(t,1),e.remove(),m(3,"removed Scene ("+s.length+" total)"))}return i},this.updateScene=function(e,t){return $.isArray(e)?$.each(e,function(n,r){m(3,"updating Scene "+(n+1)+"/"+e.length+" ("+s.length+" total)"),i.updateScene(r,t)}):t?e.update(!0):($.isArray(a)||(a=[]),-1==$.inArray(e,a)&&a.push(e)),i},this.update=function(e){return w({type:"resize"}),e&&v(),i},this.scrollPos=function(e){return arguments.length?($.isFunction(e)||(e=function(){return e}),p=e,i):p.call(i)},this.info=function(e){var t={size:u,vertical:o.vertical,scrollPos:l,scrollDirection:c,container:o.container,isDocument:g};return arguments.length?void 0!==t[e]?t[e]:void m(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(o.loglevel!=e&&(o.loglevel=e),i):o.loglevel},this.enabled=function(e){return arguments.length?(f!=e&&(f=!!e,i.updateScene(s,!0)),i):f},this.destroy=function(e){for(;s.length>0;){var n=s[s.length-1];n.destroy(e)}return o.container.off("scroll resize",w),d?TweenLite.ticker.removeEventListener("tick",v):o.container.off("scroll resize",v),m(3,"destroyed "+t+" (reset: "+(e?"true":"false")+")"),null},h(),i},ScrollScene=function(e){"use strict";var t,i,o,s,a=["onCenter","onEnter","onLeave"],l="ScrollScene",c={duration:0,offset:0,triggerElement:null,triggerHook:a[0],reverse:!0,tweenChanges:!1,loglevel:2},g=this,u=$.extend({},c,e),d="BEFORE",f=0,h={start:0,end:0},p=!0,v=function(){m(),g.on("change.internal",function(e){m(),"loglevel"!=e.what&&"tweenChanges"!=e.what&&("reverse"!=e.what&&null===u.triggerElement&&R(),g.update(),("DURING"!==d&&"duration"==e.what||"AFTER"===d&&0===u.duration)&&y())}),g.on("progress.internal",function(){E(),y()})},w=function(e){if(u.loglevel>=e){var t="("+l+") ->",r=Array.prototype.splice.call(arguments,1),i=Function.prototype.bind.call(n,window);r.unshift(e,t),i.apply(window,r)}},m=function(){if($.each(u,function(e){c.hasOwnProperty(e)||(w(2,'WARNING: Unknown option "'+e+'"'),delete u[e])}),u.duration=parseFloat(u.duration),(!$.isNumeric(u.duration)||u.duration<0)&&(w(1,'ERROR: Invalid value for option "duration":',u.duration),u.duration=c.duration),u.offset=parseFloat(u.offset),$.isNumeric(u.offset)||(w(1,'ERROR: Invalid value for option "offset":',u.offset),u.offset=c.offset),null!==u.triggerElement&&0===$(u.triggerElement).length&&(w(1,'ERROR: Element defined in option "triggerElement" was not found:',u.triggerElement),u.triggerElement=c.triggerElement),$.isNumeric(u.triggerHook)||-1!=$.inArray(u.triggerHook,a)||(w(1,'ERROR: Invalid value for option "triggerHook": ',u.triggerHook),u.triggerHook=c.triggerHook),!$.isNumeric(u.loglevel)||u.loglevel<0||u.loglevel>3){var e=u.loglevel;u.loglevel=c.loglevel,w(1,'ERROR: Invalid value for option "loglevel":',e)}if(i&&t&&u.triggerElement&&u.loglevel>=2){var n=i.getTweensOf($(u.triggerElement)),r=t.info("vertical");$.each(n,function(e,t){var n=t.vars.css||t.vars,i=r?void 0!==n.top||void 0!==n.bottom:void 0!==n.left||void 0!==n.right;return i?(w(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1):void 0})}},R=function(){h={start:g.triggerOffset()},t&&(h.start-=t.info("size")*g.triggerHook()),h.end=h.start+u.duration},E=function(e){var t=e>=0&&1>=e?e:f;if(i){if(-1===i.repeat())if(("DURING"===d||"AFTER"===d&&0===u.duration)&&i.paused())i.play();else{if("DURING"===d||i.paused())return!1;i.pause()}else{if(t==i.progress())return!1;0===u.duration?"AFTER"==d?i.play():i.reverse():u.tweenChanges?i.tweenTo(t*i.duration()):i.progress(t).pause()}return!0}return!1},y=function(e){if(o&&t){var n=t.info();if(e||"DURING"!==d&&("AFTER"!==d||0!==u.duration)){var i={position:s.inFlow?"relative":"absolute",top:0,left:0},a=o.css("position")!=i.position;s.pushFollowers?"AFTER"===d&&0===parseFloat(s.spacer.css("padding-top"))?a=!0:"BEFORE"===d&&0===parseFloat(s.spacer.css("padding-bottom"))&&(a=!0):i[n.vertical?"top":"left"]=u.duration*f,o.css(i),a&&(o.removeClass(s.pinnedClass),S())}else{"fixed"!=o.css("position")&&(o.css("position","fixed"),S(),o.addClass(s.pinnedClass));var l=r(s.spacer,!0),c=u.reverse||0===u.duration?n.scrollPos-h.start:Math.round(f*u.duration*10)/10;l.top-=parseFloat(s.spacer.css("margin-top")),l[n.vertical?"top":"left"]+=c,o.css({top:l.top,left:l.left})}}},S=function(){if(o&&t&&s.inFlow){var e="AFTER"===d,n="BEFORE"===d,r="DURING"===d,i="fixed"==o.css("position"),a=t.info("vertical"),l=s.spacer.children().first(),c=$.inArray(s.spacer.css("display"),["block","flex","list-item","table","-webkit-box"])>-1,g={};c?(g["margin-top"]=n||r&&i?o.css("margin-top"):"auto",g["margin-bottom"]=e||r&&i?o.css("margin-bottom"):"auto"):g["margin-top"]=g["margin-bottom"]="auto",s.relSize.width?i?$(window).width()==s.spacer.parent().width()?o.css("width","inherit"):o.css("width",s.spacer.width()):o.css("width","100%"):(g["min-width"]=l.outerWidth(!0),g.width=i?g["min-width"]:"auto"),s.relSize.height?i?$(window).height()==s.spacer.parent().height()?o.css("height","inherit"):o.css("height",s.spacer.height()):o.css("height","100%"):(g["min-height"]=l.outerHeight(!c),g.height=i?g["min-height"]:"auto"),s.pushFollowers&&(g["padding"+(a?"Top":"Left")]=u.duration*f,g["padding"+(a?"Bottom":"Right")]=u.duration*(1-f)),s.spacer.css(g)}},b=function(){t&&o&&"DURING"===d&&(t.info("isDocument")||y())},F=function(){t&&o&&("DURING"===d||"AFTER"===d&&0===u.duration)&&(s.relSize.width&&$(window).width()!=s.spacer.parent().width()||s.relSize.height&&$(window).height()!=s.spacer.parent().height())&&S()};return this.parent=function(){return t},this.duration=function(e){return arguments.length?(u.duration!=e&&(u.duration=e,g.trigger("change",{what:"duration",newval:e})),g):u.duration},this.offset=function(e){return arguments.length?(u.offset!=e&&(u.offset=e,g.trigger("change",{what:"offset",newval:e})),g):u.offset},this.triggerElement=function(e){return arguments.length?(u.triggerElement!=e&&(u.triggerElement=e,g.trigger("change",{what:"triggerElement",newval:e})),g):u.triggerElement},this.triggerHook=function(e){if(!arguments.length){var t;if($.isNumeric(u.triggerHook))t=u.triggerHook;else switch(u.triggerHook){case"onCenter":t=.5;break;case"onLeave":t=0;break;case"onEnter":default:t=1}return t}return u.triggerHook!=e&&(u.triggerHook=e,g.trigger("change",{what:"triggerHook",newval:e})),g},this.reverse=function(e){return arguments.length?(u.reverse!=e&&(u.reverse=e,g.trigger("change",{what:"reverse",newval:e})),g):u.reverse},this.tweenChanges=function(e){return arguments.length?(u.tweenChanges!=e&&(u.tweenChanges=e,g.trigger("change",{what:"tweenChanges",newval:e})),g):u.tweenChanges},this.loglevel=function(e){return arguments.length?(u.loglevel!=e&&(u.loglevel=e,g.trigger("change",{what:"loglevel",newval:e})),g):u.loglevel},this.state=function(){return d},this.startPosition=function(){return this.triggerOffset()},this.triggerOffset=function(){var e=u.offset;if(t){var n=t.info();if(null===u.triggerElement)e+=n.size*g.triggerHook();else{for(var i=$(u.triggerElement).first(),o=r(t.info("container"));i.parent().data("ScrollMagicPinSpacer");)i=i.parent();var s=r(i);n.isDocument||(o.top-=n.scrollPos,o.left-=n.scrollPos),e+=n.vertical?s.top-o.top:s.left-o.left}}return e},this.scrollOffset=function(){return h.start},this.update=function(e){if(t)if(e)if(t.enabled()&&p){var n,r=t.info("scrollPos");null!==u.triggerElement&&R(),n=u.duration>0?(r-h.start)/(h.end-h.start):r>=h.start?1:0,g.trigger("update",{startPos:h.start,endPos:h.end,scrollPos:r}),g.progress(n)}else o&&"fixed"==o.css("position")&&y(!0);else t.updateScene(g,!1);return g},this.progress=function(e){if(arguments.length){var n=!1,r=d,i=t?t.info("scrollDirection"):"PAUSED";if(0>=e&&"BEFORE"!==d&&(e>=f||u.reverse)?(f=0,d="BEFORE",n=!0):e>0&&1>e&&(e>=f||u.reverse)?(f=e,d="DURING",n=!0):e>=1&&"AFTER"!==d?(f=1,d="AFTER",n=!0):"DURING"!==d||u.reverse||y(),n){var o={progress:f,state:d,scrollDirection:i},s=d!=r,a="BEFORE"===d&&0===u.duration;s&&(("DURING"===d||0===u.duration)&&g.trigger("enter",o),("BEFORE"===d||"BEFORE"===r)&&g.trigger(a?"end":"start",o)),g.trigger("progress",o),s&&(("AFTER"===d||"AFTER"===r)&&g.trigger(a?"start":"end",o),("DURING"!==d||0===u.duration)&&g.trigger("leave",o))}return g}return f},this.setTween=function(e){i&&g.removeTween();try{i=new TimelineMax({smoothChildTiming:!0}).add(e).pause()}catch(e){w(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenMaxObject")}finally{return e.repeat&&-1===e.repeat()&&(i.repeat(-1),i.yoyo(e.yoyo())),m(),w(3,"added tween"),E(),g}},this.removeTween=function(e){return i&&(e&&E(0),i.kill(),i=void 0,w(3,"removed tween (reset: "+(e?"true":"false")+")")),g},this.setPin=function(e,t){var n={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer",pinnedClass:""};if(t=$.extend({},n,t),e=$(e).first(),0===e.length)return w(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),g;if("fixed"==e.css("position"))return w(1,"ERROR: Pin does not work with elements that are positioned 'fixed'."),g;if(o){if(o===e)return g;g.removePin()}o=e,o.parent().hide();var r="absolute"!=o.css("position"),i=o.css(["display","top","left","bottom","right"]),a=o.css(["width","height"]);o.parent().show();var l=$("<div></div>").addClass(t.spacerClass).css(i).data("ScrollMagicPinSpacer",!0).css({position:r?"relative":"absolute","margin-left":"auto","margin-right":"auto","box-sizing":"content-box","-moz-box-sizing":"content-box","-webkit-box-sizing":"content-box"});return!r&&t.pushFollowers&&(w(2,"WARNING: If the pinned element is positioned absolutely pushFollowers is disabled."),t.pushFollowers=!1),s={spacer:l,relSize:{width:"%"===a.width.slice(-1),height:"%"===a.height.slice(-1)},pushFollowers:t.pushFollowers,inFlow:r,origStyle:o.attr("style"),pinnedClass:t.pinnedClass},s.relSize.width&&l.css("width",a.width),s.relSize.height&&l.css("height",a.height),o.before(l).appendTo(l).css({position:r?"relative":"absolute",top:"auto",left:"auto",bottom:"auto",right:"auto"}),$(window).on("scroll resize",b),w(3,"added pin"),y(),g},this.removePin=function(e){return o&&(e||!t?(o.insertBefore(s.spacer).attr("style",s.origStyle),s.spacer.remove()):"DURING"===d&&y(!0),$(window).off("scroll resize",b),o=void 0,w(3,"removed pin (reset: "+(e?"true":"false")+")")),g},this.addTo=function(e){return t!=e?(t&&t.removeScene(g),t=e,m(),R(),S(),t.info("container").on("resize",F),w(3,"added "+l+" to controller"),e.addScene(g),g.update(),g):void 0},this.enabled=function(e){return arguments.length?(p!=e&&(p=!!e,g.update(!0)),g):p},this.remove=function(){if(t){t.info("container").off("resize",F);var e=t;t=void 0,w(3,"removed "+l+" from controller"),e.removeScene(g)}return g},this.destroy=function(e){return this.removeTween(e),this.removePin(e),this.remove(),this.off("start end enter leave progress change update change.internal progress.internal"),w(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},this.on=function(e,t){if($.isFunction(t)){var n=$.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+l+"_$2").replace(/( |^)(\w+)( |$)/g,"$1$2."+l+"$3");$(g).on(n,t)}else w(1,"ERROR calling method 'on()': Supplied argument is not a valid callback!");return g},this.off=function(e,t){var n=$.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+l+"_$2").replace(/( |^)(\w+)( |$)/g,"$1$2."+l+"$3");return $(g).off(n,t),g},this.trigger=function(e,t){w(3,"event fired:",e,"->",t);var n={type:$.trim(e).toLowerCase(),target:g};return $.isPlainObject(t)&&(n=$.extend({},t,n)),$(g).trigger(n),g},v(),g};var e=window.console=window.console||{},t=["error","warn","log"];e.log||(e.log=$.noop),$.each(t,function(t,n){e[n]||(e[n]=e.log)});var n=function(n){(n>t.length||0>=n)&&(n=t.length);var r=new Date,i=("0"+r.getHours()).slice(-2)+":"+("0"+r.getMinutes()).slice(-2)+":"+("0"+r.getSeconds()).slice(-2)+":"+("00"+r.getMilliseconds()).slice(-3),o=t[n-1],s=Array.prototype.splice.call(arguments,1),a=Function.prototype.bind.call(e[o],e);s.unshift(i),a.apply(e,s)},r=function(e,t){var n={top:0,left:0},r=e[0];if(r)if(r.getBoundingClientRect){var i=r.getBoundingClientRect();n.top=i.top,n.left=i.left,t||(n.top+=$(document).scrollTop(),n.left+=$(document).scrollLeft())}else n=e.offset()||n,t&&(n.top-=$(document).scrollTop(),n.left-=$(document).scrollLeft());return n}}(jQuery);
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);
/* jquery.nicescroll 3.2.0 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */(function(e){var y=!1,D=!1,J=5E3,K=2E3,x=0,L=function(){var e=document.getElementsByTagName("script"),e=e[e.length-1].src.split("?")[0];return 0<e.split("/").length?e.split("/").slice(0,-1).join("/")+"/":""}();Array.prototype.forEach||(Array.prototype.forEach=function(e,c){for(var h=0,l=this.length;h<l;++h)e.call(c,this[h],h,this)});var v=window.requestAnimationFrame||!1,w=window.cancelAnimationFrame||!1;["ms","moz","webkit","o"].forEach(function(e){v||(v=window[e+"RequestAnimationFrame"]);w||(w=
window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"])});var z=window.MutationObserver||window.WebKitMutationObserver||!1,F={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,
preservenativescrolling:!0,railoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:0.3,rtlmode:!1,cursordragontouch:!1},
E=!1,M=function(){if(E)return E;var e=document.createElement("DIV"),c={haspointerlock:"pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document};c.isopera="opera"in window;c.isopera12=c.isopera&&"getUserMedia"in navigator;c.isie="all"in document&&"attachEvent"in e&&!c.isopera;c.isieold=c.isie&&!("msInterpolationMode"in e.style);c.isie7=c.isie&&!c.isieold&&(!("documentMode"in document)||7==document.documentMode);c.isie8=c.isie&&"documentMode"in document&&
8==document.documentMode;c.isie9=c.isie&&"performance"in window&&9<=document.documentMode;c.isie10=c.isie&&"performance"in window&&10<=document.documentMode;c.isie9mobile=/iemobile.9/i.test(navigator.userAgent);c.isie9mobile&&(c.isie9=!1);c.isie7mobile=!c.isie9mobile&&c.isie7&&/iemobile/i.test(navigator.userAgent);c.ismozilla="MozAppearance"in e.style;c.iswebkit="WebkitAppearance"in e.style;c.ischrome="chrome"in window;c.ischrome22=c.ischrome&&c.haspointerlock;c.ischrome26=c.ischrome&&"transition"in
e.style;c.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;c.hasmstouch=window.navigator.msPointerEnabled||!1;c.ismac=/^mac$/i.test(navigator.platform);c.isios=c.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);c.isios4=c.isios&&!("seal"in Object);c.isandroid=/android/i.test(navigator.userAgent);c.trstyle=!1;c.hastransform=!1;c.hastranslate3d=!1;c.transitionstyle=!1;c.hastransition=!1;c.transitionend=!1;for(var h=["transform","msTransform","webkitTransform","MozTransform",
"OTransform"],l=0;l<h.length;l++)if("undefined"!=typeof e.style[h[l]]){c.trstyle=h[l];break}c.hastransform=!1!=c.trstyle;c.hastransform&&(e.style[c.trstyle]="translate3d(1px,2px,3px)",c.hastranslate3d=/translate3d/.test(e.style[c.trstyle]));c.transitionstyle=!1;c.prefixstyle="";c.transitionend=!1;for(var h="transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "),n=" -webkit- -moz- -o- -o -ms- -khtml-".split(" "),t="transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),
l=0;l<h.length;l++)if(h[l]in e.style){c.transitionstyle=h[l];c.prefixstyle=n[l];c.transitionend=t[l];break}c.ischrome26&&(c.prefixstyle=n[1]);c.hastransition=c.transitionstyle;a:{h=["-moz-grab","-webkit-grab","grab"];if(c.ischrome&&!c.ischrome22||c.isie)h=[];for(l=0;l<h.length;l++)if(n=h[l],e.style.cursor=n,e.style.cursor==n){h=n;break a}h="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}c.cursorgrabvalue=h;c.hasmousecapture="setCapture"in e;c.hasMutationObserver=!1!==z;return E=
c},N=function(k,c){function h(){var d=b.win;if("zIndex"in d)return d.zIndex();for(;0<d.length&&9!=d[0].nodeType;){var c=d.css("zIndex");if(!isNaN(c)&&0!=c)return parseInt(c);d=d.parent()}return!1}function l(d,c,g){c=d.css(c);d=parseFloat(c);return isNaN(d)?(d=u[c]||0,g=3==d?g?b.win.outerHeight()-b.win.innerHeight():b.win.outerWidth()-b.win.innerWidth():1,b.isie8&&d&&(d+=1),g?d:0):d}function n(d,c,g,e){b._bind(d,c,function(b){b=b?b:window.event;var e={original:b,target:b.target||b.srcElement,type:"wheel",
deltaMode:"MozMousePixelScroll"==b.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1;return!1},stopImmediatePropagation:function(){b.stopImmediatePropagation?b.stopImmediatePropagation():b.cancelBubble=!0}};"mousewheel"==c?(e.deltaY=-0.025*b.wheelDelta,b.wheelDeltaX&&(e.deltaX=-0.025*b.wheelDeltaX)):e.deltaY=b.detail;return g.call(d,e)},e)}function t(d,c,g){var e,f;0==d.deltaMode?(e=-Math.floor(d.deltaX*(b.opt.mousescrollstep/54)),f=-Math.floor(d.deltaY*
(b.opt.mousescrollstep/54))):1==d.deltaMode&&(e=-Math.floor(d.deltaX*b.opt.mousescrollstep),f=-Math.floor(d.deltaY*b.opt.mousescrollstep));c&&(0==e&&f)&&(e=f,f=0);e&&(b.scrollmom&&b.scrollmom.stop(),b.lastdeltax+=e,b.debounced("mousewheelx",function(){var d=b.lastdeltax;b.lastdeltax=0;b.rail.drag||b.doScrollLeftBy(d)},120));if(f){if(b.opt.nativeparentscrolling&&g&&!b.ispage&&!b.zoomactive)if(0>f){if(b.getScrollTop()>=b.page.maxh)return!0}else if(0>=b.getScrollTop())return!0;b.scrollmom&&b.scrollmom.stop();
b.lastdeltay+=f;b.debounced("mousewheely",function(){var d=b.lastdeltay;b.lastdeltay=0;b.rail.drag||b.doScrollBy(d)},120)}d.stopImmediatePropagation();return d.preventDefault()}var b=this;this.version="3.4.0";this.name="nicescroll";this.me=c;this.opt={doc:e("body"),win:!1};e.extend(this.opt,F);this.opt.snapbackspeed=80;if(k)for(var q in b.opt)"undefined"!=typeof k[q]&&(b.opt[q]=k[q]);this.iddoc=(this.doc=b.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/BODY|HTML/.test(b.opt.win?b.opt.win[0].nodeName:
this.doc[0].nodeName);this.haswrapper=!1!==b.opt.win;this.win=b.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent="scroll"!=b.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=
this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.observerremover=this.observer=this.scrollmom=this.scrollrunning=this.checkrtlmode=!1;do this.id="ascrail"+K++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=this.cursor=
this.rail=!1;this.visibility=!0;this.hidden=this.locked=!1;this.cursoractive=!0;this.overflowx=b.opt.overflowx;this.overflowy=b.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;this.detected=M();var f=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=f.hastransform&&b.opt.hwacceleration)&&b.haswrapper;this.istouchcapable=!1;f.cantouch&&(f.ischrome&&!f.isios&&!f.isandroid)&&(this.istouchcapable=
!0,f.cantouch=!1);f.cantouch&&(f.ismozilla&&!f.isios)&&(this.istouchcapable=!0,f.cantouch=!1);b.opt.enablemouselockapi||(f.hasmousecapture=!1,f.haspointerlock=!1);this.delayed=function(d,c,g,e){var f=b.delaylist[d],h=(new Date).getTime();if(!e&&f&&f.tt)return!1;f&&f.tt&&clearTimeout(f.tt);if(f&&f.last+g>h&&!f.tt)b.delaylist[d]={last:h+g,tt:setTimeout(function(){b.delaylist[d].tt=0;c.call()},g)};else if(!f||!f.tt)b.delaylist[d]={last:h,tt:0},setTimeout(function(){c.call()},0)};this.debounced=function(d,
c,g){var f=b.delaylist[d];(new Date).getTime();b.delaylist[d]=c;f||setTimeout(function(){var c=b.delaylist[d];b.delaylist[d]=!1;c.call()},g)};this.synched=function(d,c){b.synclist[d]=c;(function(){b.onsync||(v(function(){b.onsync=!1;for(d in b.synclist){var c=b.synclist[d];c&&c.call(b);b.synclist[d]=!1}}),b.onsync=!0)})();return d};this.unsynched=function(d){b.synclist[d]&&(b.synclist[d]=!1)};this.css=function(d,c){for(var g in c)b.saved.css.push([d,g,d.css(g)]),d.css(g,c[g])};this.scrollTop=function(d){return"undefined"==
typeof d?b.getScrollTop():b.setScrollTop(d)};this.scrollLeft=function(d){return"undefined"==typeof d?b.getScrollLeft():b.setScrollLeft(d)};BezierClass=function(b,c,g,f,e,h,l){this.st=b;this.ed=c;this.spd=g;this.p1=f||0;this.p2=e||1;this.p3=h||0;this.p4=l||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(b){return 3*b*b*(1-b)},B3:function(b){return 3*b*(1-b)*(1-b)},B4:function(b){return(1-b)*(1-b)*(1-b)},getNow:function(){var b=1-((new Date).getTime()-this.ts)/
this.spd,c=this.B2(b)+this.B3(b)+this.B4(b);return 0>b?this.ed:this.st+Math.round(this.df*c)},update:function(b,c){this.st=this.getNow();this.ed=b;this.spd=c;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};f.hastranslate3d&&f.isios&&this.doc.css("-webkit-backface-visibility","hidden");var r=function(){var d=b.doc.css(f.trstyle);return d&&"matrix"==d.substr(0,6)?d.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):
!1};this.getScrollTop=function(d){if(!d){if(d=r())return 16==d.length?-d[13]:-d[5];if(b.timerscroll&&b.timerscroll.bz)return b.timerscroll.bz.getNow()}return b.doc.translate.y};this.getScrollLeft=function(d){if(!d){if(d=r())return 16==d.length?-d[12]:-d[4];if(b.timerscroll&&b.timerscroll.bh)return b.timerscroll.bh.getNow()}return b.doc.translate.x};this.notifyScrollEvent=document.createEvent?function(b){var c=document.createEvent("UIEvents");c.initUIEvent("scroll",!1,!0,window,1);b.dispatchEvent(c)}:
document.fireEvent?function(b){var c=document.createEventObject();b.fireEvent("onscroll");c.cancelBubble=!0}:function(b,c){};f.hastranslate3d&&b.opt.enabletranslate3d?(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=-1*d+"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=-1*d+"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+
","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])}):(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=-1*d+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=-1*d+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])})}else this.getScrollTop=function(){return b.docscroll.scrollTop()},
this.setScrollTop=function(d){return b.docscroll.scrollTop(d)},this.getScrollLeft=function(){return b.docscroll.scrollLeft()},this.setScrollLeft=function(d){return b.docscroll.scrollLeft(d)};this.getTarget=function(b){return!b?!1:b.target?b.target:b.srcElement?b.srcElement:!1};this.hasParent=function(b,c){if(!b)return!1;for(var g=b.target||b.srcElement||b||!1;g&&g.id!=c;)g=g.parentNode||!1;return!1!==g};var u={thin:1,medium:3,thick:5};this.getOffset=function(){if(b.isfixed)return{top:parseFloat(b.win.css("top")),
left:parseFloat(b.win.css("left"))};if(!b.viewport)return b.win.offset();var d=b.win.offset(),c=b.viewport.offset();return{top:d.top-c.top+b.viewport.scrollTop(),left:d.left-c.left+b.viewport.scrollLeft()}};this.updateScrollBar=function(d){if(b.ishwscroll)b.rail.css({height:b.win.innerHeight()}),b.railh&&b.railh.css({width:b.win.innerWidth()});else{var c=b.getOffset(),g=c.top,f=c.left,g=g+l(b.win,"border-top-width",!0);b.win.outerWidth();b.win.innerWidth();var f=f+(b.rail.align?b.win.outerWidth()-
l(b.win,"border-right-width")-b.rail.width:l(b.win,"border-left-width")),e=b.opt.railoffset;e&&(e.top&&(g+=e.top),b.rail.align&&e.left&&(f+=e.left));b.locked||b.rail.css({top:g,left:f,height:d?d.h:b.win.innerHeight()});b.zoom&&b.zoom.css({top:g+1,left:1==b.rail.align?f-20:f+b.rail.width+4});b.railh&&!b.locked&&(g=c.top,f=c.left,d=b.railh.align?g+l(b.win,"border-top-width",!0)+b.win.innerHeight()-b.railh.height:g+l(b.win,"border-top-width",!0),f+=l(b.win,"border-left-width"),b.railh.css({top:d,left:f,
width:b.railh.width}))}};this.doRailClick=function(d,c,g){var f;b.locked||(b.cancelEvent(d),c?(c=g?b.doScrollLeft:b.doScrollTop,f=g?(d.pageX-b.railh.offset().left-b.cursorwidth/2)*b.scrollratio.x:(d.pageY-b.rail.offset().top-b.cursorheight/2)*b.scrollratio.y,c(f)):(c=g?b.doScrollLeftBy:b.doScrollBy,f=g?b.scroll.x:b.scroll.y,d=g?d.pageX-b.railh.offset().left:d.pageY-b.rail.offset().top,g=g?b.view.w:b.view.h,f>=d?c(g):c(-g)))};b.hasanimationframe=v;b.hascancelanimationframe=w;b.hasanimationframe?b.hascancelanimationframe||
(w=function(){b.cancelAnimationFrame=!0}):(v=function(b){return setTimeout(b,15-Math.floor(+new Date/1E3)%16)},w=clearInterval);this.init=function(){b.saved.css=[];if(f.isie7mobile)return!0;f.hasmstouch&&b.css(b.ispage?e("html"):b.win,{"-ms-touch-action":"none"});b.zindex="auto";b.zindex=!b.ispage&&"auto"==b.opt.zindex?h()||"auto":b.opt.zindex;!b.ispage&&"auto"!=b.zindex&&b.zindex>x&&(x=b.zindex);b.isie&&(0==b.zindex&&"auto"==b.opt.zindex)&&(b.zindex="auto");if(!b.ispage||!f.cantouch&&!f.isieold&&
!f.isie9mobile){var d=b.docscroll;b.ispage&&(d=b.haswrapper?b.win:b.doc);f.isie9mobile||b.css(d,{"overflow-y":"hidden"});b.ispage&&f.isie7&&("BODY"==b.doc[0].nodeName?b.css(e("html"),{"overflow-y":"hidden"}):"HTML"==b.doc[0].nodeName&&b.css(e("body"),{"overflow-y":"hidden"}));f.isios&&(!b.ispage&&!b.haswrapper)&&b.css(e("body"),{"-webkit-overflow-scrolling":"touch"});var c=e(document.createElement("div"));c.css({position:"relative",top:0,"float":"right",width:b.opt.cursorwidth,height:"0px","background-color":b.opt.cursorcolor,
border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.hborder=parseFloat(c.outerHeight()-c.innerHeight());b.cursor=c;var g=e(document.createElement("div"));g.attr("id",b.id);g.addClass("nicescroll-rails");var l,k,n=["left","right"],G;for(G in n)k=n[G],(l=b.opt.railpadding[k])?g.css("padding-"+k,l+"px"):b.opt.railpadding[k]=0;g.append(c);g.width=Math.max(parseFloat(b.opt.cursorwidth),
c.outerWidth())+b.opt.railpadding.left+b.opt.railpadding.right;g.css({width:g.width+"px",zIndex:b.zindex,background:b.opt.background,cursor:"default"});g.visibility=!0;g.scrollable=!0;g.align="left"==b.opt.railalign?0:1;b.rail=g;c=b.rail.drag=!1;b.opt.boxzoom&&(!b.ispage&&!f.isieold)&&(c=document.createElement("div"),b.bind(c,"click",b.doZoom),b.zoom=e(c),b.zoom.css({cursor:"pointer","z-index":b.zindex,backgroundImage:"url("+L+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),b.opt.dblclickzoom&&
b.bind(b.win,"dblclick",b.doZoom),f.cantouch&&b.opt.gesturezoom&&(b.ongesturezoom=function(d){1.5<d.scale&&b.doZoomIn(d);0.8>d.scale&&b.doZoomOut(d);return b.cancelEvent(d)},b.bind(b.win,"gestureend",b.ongesturezoom)));b.railh=!1;if(b.opt.horizrailenabled){b.css(d,{"overflow-x":"hidden"});c=e(document.createElement("div"));c.css({position:"relative",top:0,height:b.opt.cursorwidth,width:"0px","background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,
"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.wborder=parseFloat(c.outerWidth()-c.innerWidth());b.cursorh=c;var m=e(document.createElement("div"));m.attr("id",b.id+"-hr");m.addClass("nicescroll-rails");m.height=Math.max(parseFloat(b.opt.cursorwidth),c.outerHeight());m.css({height:m.height+"px",zIndex:b.zindex,background:b.opt.background});m.append(c);m.visibility=!0;m.scrollable=!0;m.align="top"==b.opt.railvalign?0:1;b.railh=m;b.railh.drag=!1}b.ispage?
(g.css({position:"fixed",top:"0px",height:"100%"}),g.align?g.css({right:"0px"}):g.css({left:"0px"}),b.body.append(g),b.railh&&(m.css({position:"fixed",left:"0px",width:"100%"}),m.align?m.css({bottom:"0px"}):m.css({top:"0px"}),b.body.append(m))):(b.ishwscroll?("static"==b.win.css("position")&&b.css(b.win,{position:"relative"}),d="HTML"==b.win[0].nodeName?b.body:b.win,b.zoom&&(b.zoom.css({position:"absolute",top:1,right:0,"margin-right":g.width+4}),d.append(b.zoom)),g.css({position:"absolute",top:0}),
g.align?g.css({right:0}):g.css({left:0}),d.append(g),m&&(m.css({position:"absolute",left:0,bottom:0}),m.align?m.css({bottom:0}):m.css({top:0}),d.append(m))):(b.isfixed="fixed"==b.win.css("position"),d=b.isfixed?"fixed":"absolute",b.isfixed||(b.viewport=b.getViewport(b.win[0])),b.viewport&&(b.body=b.viewport,!1==/relative|absolute/.test(b.viewport.css("position"))&&b.css(b.viewport,{position:"relative"})),g.css({position:d}),b.zoom&&b.zoom.css({position:d}),b.updateScrollBar(),b.body.append(g),b.zoom&&
b.body.append(b.zoom),b.railh&&(m.css({position:d}),b.body.append(m))),f.isios&&b.css(b.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),f.isie&&b.opt.disableoutline&&b.win.attr("hideFocus","true"),f.iswebkit&&b.opt.disableoutline&&b.win.css({outline:"none"}));!1===b.opt.autohidemode?(b.autohidedom=!1,b.rail.css({opacity:b.opt.cursoropacitymax}),b.railh&&b.railh.css({opacity:b.opt.cursoropacitymax})):!0===b.opt.autohidemode?(b.autohidedom=e().add(b.rail),f.isie8&&
(b.autohidedom=b.autohidedom.add(b.cursor)),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh)),b.railh&&f.isie8&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"scroll"==b.opt.autohidemode?(b.autohidedom=e().add(b.rail),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh))):"cursor"==b.opt.autohidemode?(b.autohidedom=e().add(b.cursor),b.railh&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"hidden"==b.opt.autohidemode&&(b.autohidedom=!1,b.hide(),b.locked=!1);if(f.isie9mobile)b.scrollmom=new H(b),b.onmangotouch=
function(d){d=b.getScrollTop();var c=b.getScrollLeft();if(d==b.scrollmom.lastscrolly&&c==b.scrollmom.lastscrollx)return!0;var g=d-b.mangotouch.sy,f=c-b.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(f,2)+Math.pow(g,2)))){var p=0>g?-1:1,e=0>f?-1:1,h=+new Date;b.mangotouch.lazy&&clearTimeout(b.mangotouch.lazy);80<h-b.mangotouch.tm||b.mangotouch.dry!=p||b.mangotouch.drx!=e?(b.scrollmom.stop(),b.scrollmom.reset(c,d),b.mangotouch.sy=d,b.mangotouch.ly=d,b.mangotouch.sx=c,b.mangotouch.lx=c,b.mangotouch.dry=
p,b.mangotouch.drx=e,b.mangotouch.tm=h):(b.scrollmom.stop(),b.scrollmom.update(b.mangotouch.sx-f,b.mangotouch.sy-g),b.mangotouch.tm=h,g=Math.max(Math.abs(b.mangotouch.ly-d),Math.abs(b.mangotouch.lx-c)),b.mangotouch.ly=d,b.mangotouch.lx=c,2<g&&(b.mangotouch.lazy=setTimeout(function(){b.mangotouch.lazy=!1;b.mangotouch.dry=0;b.mangotouch.drx=0;b.mangotouch.tm=0;b.scrollmom.doMomentum(30)},100)))}},g=b.getScrollTop(),m=b.getScrollLeft(),b.mangotouch={sy:g,ly:g,dry:0,sx:m,lx:m,drx:0,lazy:!1,tm:0},b.bind(b.docscroll,
"scroll",b.onmangotouch);else{if(f.cantouch||b.istouchcapable||b.opt.touchbehavior||f.hasmstouch){b.scrollmom=new H(b);b.ontouchstart=function(d){if(d.pointerType&&2!=d.pointerType)return!1;if(!b.locked){if(f.hasmstouch)for(var c=d.target?d.target:!1;c;){var g=e(c).getNiceScroll();if(0<g.length&&g[0].me==b.me)break;if(0<g.length)return!1;if("DIV"==c.nodeName&&c.id==b.id)break;c=c.parentNode?c.parentNode:!1}b.cancelScroll();if((c=b.getTarget(d))&&/INPUT/i.test(c.nodeName)&&/range/i.test(c.type))return b.stopPropagation(d);
!("clientX"in d)&&"changedTouches"in d&&(d.clientX=d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY);b.forcescreen&&(g=d,d={original:d.original?d.original:d},d.clientX=g.screenX,d.clientY=g.screenY);b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,sy:b.scroll.y,st:b.getScrollTop(),sl:b.getScrollLeft(),pt:2,dl:!1};if(b.ispage||!b.opt.directionlockdeadzone)b.rail.drag.dl="f";else{var g=e(window).width(),p=e(window).height(),h=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
l=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),p=Math.max(0,l-p),g=Math.max(0,h-g);b.rail.drag.ck=!b.rail.scrollable&&b.railh.scrollable?0<p?"v":!1:b.rail.scrollable&&!b.railh.scrollable?0<g?"h":!1:!1;b.rail.drag.ck||(b.rail.drag.dl="f")}b.opt.touchbehavior&&(b.isiframe&&f.isie)&&(g=b.win.position(),b.rail.drag.x+=g.left,b.rail.drag.y+=g.top);b.hasmoving=!1;b.lastmouseup=!1;b.scrollmom.reset(d.clientX,d.clientY);if(!f.cantouch&&!this.istouchcapable&&!f.hasmstouch){if(!c||
!/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))return!b.ispage&&f.hasmousecapture&&c.setCapture(),b.cancelEvent(d);/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type"))&&(pc={tg:c,click:!1},b.preventclick=pc)}}};b.ontouchend=function(d){if(d.pointerType&&2!=d.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt&&(b.scrollmom.doMomentum(),b.rail.drag=!1,b.hasmoving&&(b.hasmoving=!1,b.lastmouseup=!0,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),!f.cantouch)))return b.cancelEvent(d)};var q=b.opt.touchbehavior&&
b.isiframe&&!f.hasmousecapture;b.ontouchmove=function(d,c){if(d.pointerType&&2!=d.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt){if(f.cantouch&&"undefined"==typeof d.original)return!0;b.hasmoving=!0;b.preventclick&&!b.preventclick.click&&(b.preventclick.click=b.preventclick.tg.onclick||!1,b.preventclick.tg.onclick=b.onpreventclick);d=e.extend({original:d},d);"changedTouches"in d&&(d.clientX=d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY);if(b.forcescreen){var g=d;d={original:d.original?
d.original:d};d.clientX=g.screenX;d.clientY=g.screenY}g=ofy=0;if(q&&!c){var p=b.win.position(),g=-p.left;ofy=-p.top}var h=d.clientY+ofy,p=h-b.rail.drag.y,l=d.clientX+g,k=l-b.rail.drag.x,s=b.rail.drag.st-p;b.ishwscroll&&b.opt.bouncescroll?0>s?s=Math.round(s/2):s>b.page.maxh&&(s=b.page.maxh+Math.round((s-b.page.maxh)/2)):(0>s&&(h=s=0),s>b.page.maxh&&(s=b.page.maxh,h=0));if(b.railh&&b.railh.scrollable){var m=b.rail.drag.sl-k;b.ishwscroll&&b.opt.bouncescroll?0>m?m=Math.round(m/2):m>b.page.maxw&&(m=b.page.maxw+
Math.round((m-b.page.maxw)/2)):(0>m&&(l=m=0),m>b.page.maxw&&(m=b.page.maxw,l=0))}g=!1;if(b.rail.drag.dl)g=!0,"v"==b.rail.drag.dl?m=b.rail.drag.sl:"h"==b.rail.drag.dl&&(s=b.rail.drag.st);else{var p=Math.abs(p),k=Math.abs(k),n=b.opt.directionlockdeadzone;if("v"==b.rail.drag.ck){if(p>n&&k<=0.3*p)return b.rail.drag=!1,!0;k>n&&(b.rail.drag.dl="f",e("body").scrollTop(e("body").scrollTop()))}else if("h"==b.rail.drag.ck){if(k>n&&p<=0.3*az)return b.rail.drag=!1,!0;p>n&&(b.rail.drag.dl="f",e("body").scrollLeft(e("body").scrollLeft()))}}b.synched("touchmove",
function(){b.rail.drag&&2==b.rail.drag.pt&&(b.prepareTransition&&b.prepareTransition(0),b.rail.scrollable&&b.setScrollTop(s),b.scrollmom.update(l,h),b.railh&&b.railh.scrollable?(b.setScrollLeft(m),b.showCursor(s,m)):b.showCursor(s),f.isie10&&document.selection.clear())});f.ischrome&&b.istouchcapable&&(g=!1);if(g)return b.cancelEvent(d)}}}b.onmousedown=function(d,c){if(!(b.rail.drag&&1!=b.rail.drag.pt)){if(b.locked)return b.cancelEvent(d);b.cancelScroll();b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,
sy:b.scroll.y,pt:1,hr:!!c};var g=b.getTarget(d);!b.ispage&&f.hasmousecapture&&g.setCapture();b.isiframe&&!f.hasmousecapture&&(b.saved.csspointerevents=b.doc.css("pointer-events"),b.css(b.doc,{"pointer-events":"none"}));return b.cancelEvent(d)}};b.onmouseup=function(d){if(b.rail.drag&&(f.hasmousecapture&&document.releaseCapture(),b.isiframe&&!f.hasmousecapture&&b.doc.css("pointer-events",b.saved.csspointerevents),1==b.rail.drag.pt))return b.rail.drag=!1,b.cancelEvent(d)};b.onmousemove=function(d){if(b.rail.drag&&
1==b.rail.drag.pt){if(f.ischrome&&0==d.which)return b.onmouseup(d);b.cursorfreezed=!0;if(b.rail.drag.hr){b.scroll.x=b.rail.drag.sx+(d.clientX-b.rail.drag.x);0>b.scroll.x&&(b.scroll.x=0);var c=b.scrollvaluemaxw;b.scroll.x>c&&(b.scroll.x=c)}else b.scroll.y=b.rail.drag.sy+(d.clientY-b.rail.drag.y),0>b.scroll.y&&(b.scroll.y=0),c=b.scrollvaluemax,b.scroll.y>c&&(b.scroll.y=c);b.synched("mousemove",function(){b.rail.drag&&1==b.rail.drag.pt&&(b.showCursor(),b.rail.drag.hr?b.doScrollLeft(Math.round(b.scroll.x*
b.scrollratio.x),b.opt.cursordragspeed):b.doScrollTop(Math.round(b.scroll.y*b.scrollratio.y),b.opt.cursordragspeed))});return b.cancelEvent(d)}};if(f.cantouch||b.opt.touchbehavior)b.onpreventclick=function(d){if(b.preventclick)return b.preventclick.tg.onclick=b.preventclick.click,b.preventclick=!1,b.cancelEvent(d)},b.bind(b.win,"mousedown",b.ontouchstart),b.onclick=f.isios?!1:function(d){return b.lastmouseup?(b.lastmouseup=!1,b.cancelEvent(d)):!0},b.opt.grabcursorenabled&&f.cursorgrabvalue&&(b.css(b.ispage?
b.doc:b.win,{cursor:f.cursorgrabvalue}),b.css(b.rail,{cursor:f.cursorgrabvalue}));else{var r=function(d){if(b.selectiondrag){if(d){var c=b.win.outerHeight();d=d.pageY-b.selectiondrag.top;0<d&&d<c&&(d=0);d>=c&&(d-=c);b.selectiondrag.df=d}0!=b.selectiondrag.df&&(b.doScrollBy(2*-Math.floor(b.selectiondrag.df/6)),b.debounced("doselectionscroll",function(){r()},50))}};b.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:"selection"in document?function(){return"None"!=
document.selection.type}:function(){return!1};b.onselectionstart=function(d){b.ispage||(b.selectiondrag=b.win.offset())};b.onselectionend=function(d){b.selectiondrag=!1};b.onselectiondrag=function(d){b.selectiondrag&&b.hasTextSelected()&&b.debounced("selectionscroll",function(){r(d)},250)}}f.hasmstouch&&(b.css(b.rail,{"-ms-touch-action":"none"}),b.css(b.cursor,{"-ms-touch-action":"none"}),b.bind(b.win,"MSPointerDown",b.ontouchstart),b.bind(document,"MSPointerUp",b.ontouchend),b.bind(document,"MSPointerMove",
b.ontouchmove),b.bind(b.cursor,"MSGestureHold",function(b){b.preventDefault()}),b.bind(b.cursor,"contextmenu",function(b){b.preventDefault()}));this.istouchcapable&&(b.bind(b.win,"touchstart",b.ontouchstart),b.bind(document,"touchend",b.ontouchend),b.bind(document,"touchcancel",b.ontouchend),b.bind(document,"touchmove",b.ontouchmove));b.bind(b.cursor,"mousedown",b.onmousedown);b.bind(b.cursor,"mouseup",b.onmouseup);b.railh&&(b.bind(b.cursorh,"mousedown",function(d){b.onmousedown(d,!0)}),b.bind(b.cursorh,
"mouseup",function(d){if(!(b.rail.drag&&2==b.rail.drag.pt))return b.rail.drag=!1,b.hasmoving=!1,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),b.cancelEvent(d)}));if(b.opt.cursordragontouch||!f.cantouch&&!b.opt.touchbehavior)b.rail.css({cursor:"default"}),b.railh&&b.railh.css({cursor:"default"}),b.jqbind(b.rail,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.rail,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&
(b.bind(b.rail,"click",function(d){b.doRailClick(d,!1,!1)}),b.bind(b.rail,"dblclick",function(d){b.doRailClick(d,!0,!1)}),b.bind(b.cursor,"click",function(d){b.cancelEvent(d)}),b.bind(b.cursor,"dblclick",function(d){b.cancelEvent(d)})),b.railh&&(b.jqbind(b.railh,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.railh,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.railh,"click",function(d){b.doRailClick(d,
!1,!0)}),b.bind(b.railh,"dblclick",function(d){b.doRailClick(d,!0,!0)}),b.bind(b.cursorh,"click",function(d){b.cancelEvent(d)}),b.bind(b.cursorh,"dblclick",function(d){b.cancelEvent(d)})));!f.cantouch&&!b.opt.touchbehavior?(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.onmouseup),b.bind(document,"mousemove",b.onmousemove),b.onclick&&b.bind(document,"click",b.onclick),!b.ispage&&b.opt.enablescrollonselection&&(b.bind(b.win[0],"mousedown",b.onselectionstart),b.bind(document,"mouseup",b.onselectionend),
b.bind(b.cursor,"mouseup",b.onselectionend),b.cursorh&&b.bind(b.cursorh,"mouseup",b.onselectionend),b.bind(document,"mousemove",b.onselectiondrag)),b.zoom&&(b.jqbind(b.zoom,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.zoom,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}))):(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.ontouchend),b.bind(document,"mousemove",b.ontouchmove),b.onclick&&b.bind(document,"click",b.onclick),b.opt.cursordragontouch&&
(b.bind(b.cursor,"mousedown",b.onmousedown),b.bind(b.cursor,"mousemove",b.onmousemove),b.cursorh&&b.bind(b.cursorh,"mousedown",b.onmousedown),b.cursorh&&b.bind(b.cursorh,"mousemove",b.onmousemove)));b.opt.enablemousewheel&&(b.isiframe||b.bind(f.isie&&b.ispage?document:b.docscroll,"mousewheel",b.onmousewheel),b.bind(b.rail,"mousewheel",b.onmousewheel),b.railh&&b.bind(b.railh,"mousewheel",b.onmousewheelhr));!b.ispage&&(!f.cantouch&&!/HTML|BODY/.test(b.win[0].nodeName))&&(b.win.attr("tabindex")||b.win.attr({tabindex:J++}),
b.jqbind(b.win,"focus",function(d){y=b.getTarget(d).id||!0;b.hasfocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"blur",function(d){y=!1;b.hasfocus=!1}),b.jqbind(b.win,"mouseenter",function(d){D=b.getTarget(d).id||!0;b.hasmousefocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"mouseleave",function(){D=!1;b.hasmousefocus=!1}))}b.onkeypress=function(d){if(b.locked&&0==b.page.maxh)return!0;d=d?d:window.e;var c=b.getTarget(d);if(c&&/INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName)&&
(!c.getAttribute("type")&&!c.type||!/submit|button|cancel/i.tp))return!0;if(b.hasfocus||b.hasmousefocus&&!y||b.ispage&&!y&&!D){c=d.keyCode;if(b.locked&&27!=c)return b.cancelEvent(d);var g=d.ctrlKey||!1,p=d.shiftKey||!1,f=!1;switch(c){case 38:case 63233:b.doScrollBy(72);f=!0;break;case 40:case 63235:b.doScrollBy(-72);f=!0;break;case 37:case 63232:b.railh&&(g?b.doScrollLeft(0):b.doScrollLeftBy(72),f=!0);break;case 39:case 63234:b.railh&&(g?b.doScrollLeft(b.page.maxw):b.doScrollLeftBy(-72),f=!0);break;
case 33:case 63276:b.doScrollBy(b.view.h);f=!0;break;case 34:case 63277:b.doScrollBy(-b.view.h);f=!0;break;case 36:case 63273:b.railh&&g?b.doScrollPos(0,0):b.doScrollTo(0);f=!0;break;case 35:case 63275:b.railh&&g?b.doScrollPos(b.page.maxw,b.page.maxh):b.doScrollTo(b.page.maxh);f=!0;break;case 32:b.opt.spacebarenabled&&(p?b.doScrollBy(b.view.h):b.doScrollBy(-b.view.h),f=!0);break;case 27:b.zoomactive&&(b.doZoom(),f=!0)}if(f)return b.cancelEvent(d)}};b.opt.enablekeyboard&&b.bind(document,f.isopera&&
!f.isopera12?"keypress":"keydown",b.onkeypress);b.bind(window,"resize",b.lazyResize);b.bind(window,"orientationchange",b.lazyResize);b.bind(window,"load",b.lazyResize);if(f.ischrome&&!b.ispage&&!b.haswrapper){var t=b.win.attr("style"),g=parseFloat(b.win.css("width"))+1;b.win.css("width",g);b.synched("chromefix",function(){b.win.attr("style",t)})}b.onAttributeChange=function(d){b.lazyResize(250)};!b.ispage&&!b.haswrapper&&(!1!==z?(b.observer=new z(function(d){d.forEach(b.onAttributeChange)}),b.observer.observe(b.win[0],
{childList:!0,characterData:!1,attributes:!0,subtree:!1}),b.observerremover=new z(function(d){d.forEach(function(d){if(0<d.removedNodes.length)for(var c in d.removedNodes)if(d.removedNodes[c]==b.win[0])return b.remove()})}),b.observerremover.observe(b.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(b.bind(b.win,f.isie&&!f.isie9?"propertychange":"DOMAttrModified",b.onAttributeChange),f.isie9&&b.win[0].attachEvent("onpropertychange",b.onAttributeChange),b.bind(b.win,"DOMNodeRemoved",
function(d){d.target==b.win[0]&&b.remove()})));!b.ispage&&b.opt.boxzoom&&b.bind(window,"resize",b.resizeZoom);b.istextarea&&b.bind(b.win,"mouseup",b.lazyResize);b.checkrtlmode=!0;b.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var I=function(d){b.iframexd=!1;try{var c="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(g){b.iframexd=!0,c=!1}if(b.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;b.forcescreen=!0;b.isiframe&&
(b.iframe={doc:e(c),html:b.doc.contents().find("html")[0],body:b.doc.contents().find("body")[0]},b.getContentSize=function(){return{w:Math.max(b.iframe.html.scrollWidth,b.iframe.body.scrollWidth),h:Math.max(b.iframe.html.scrollHeight,b.iframe.body.scrollHeight)}},b.docscroll=e(b.iframe.body));!f.isios&&(b.opt.iframeautoresize&&!b.isiframe)&&(b.win.scrollTop(0),b.doc.height(""),d=Math.max(c.getElementsByTagName("html")[0].scrollHeight,c.body.scrollHeight),b.doc.height(d));b.lazyResize(30);f.isie7&&
b.css(e(b.iframe.html),{"overflow-y":"hidden"});b.css(e(b.iframe.body),{"overflow-y":"hidden"});"contentWindow"in this?b.bind(this.contentWindow,"scroll",b.onscroll):b.bind(c,"scroll",b.onscroll);b.opt.enablemousewheel&&b.bind(c,"mousewheel",b.onmousewheel);b.opt.enablekeyboard&&b.bind(c,f.isopera?"keypress":"keydown",b.onkeypress);if(f.cantouch||b.opt.touchbehavior)b.bind(c,"mousedown",b.onmousedown),b.bind(c,"mousemove",function(d){b.onmousemove(d,!0)}),b.opt.grabcursorenabled&&f.cursorgrabvalue&&
b.css(e(c.body),{cursor:f.cursorgrabvalue});b.bind(c,"mouseup",b.onmouseup);b.zoom&&(b.opt.dblclickzoom&&b.bind(c,"dblclick",b.doZoom),b.ongesturezoom&&b.bind(c,"gestureend",b.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){I.call(b.doc[0],!1)},500);b.bind(this.doc,"load",I)}};this.showCursor=function(d,c){b.cursortimeout&&(clearTimeout(b.cursortimeout),b.cursortimeout=0);if(b.rail){b.autohidedom&&(b.autohidedom.stop().css({opacity:b.opt.cursoropacitymax}),
b.cursoractive=!0);if(!b.rail.drag||1!=b.rail.drag.pt)"undefined"!=typeof d&&!1!==d&&(b.scroll.y=Math.round(1*d/b.scrollratio.y)),"undefined"!=typeof c&&(b.scroll.x=Math.round(1*c/b.scrollratio.x));b.cursor.css({height:b.cursorheight,top:b.scroll.y});b.cursorh&&(!b.rail.align&&b.rail.visibility?b.cursorh.css({width:b.cursorwidth,left:b.scroll.x+b.rail.width}):b.cursorh.css({width:b.cursorwidth,left:b.scroll.x}),b.cursoractive=!0);b.zoom&&b.zoom.stop().css({opacity:b.opt.cursoropacitymax})}};this.hideCursor=
function(d){!b.cursortimeout&&(b.rail&&b.autohidedom)&&(b.cursortimeout=setTimeout(function(){if(!b.rail.active||!b.showonmouseevent)b.autohidedom.stop().animate({opacity:b.opt.cursoropacitymin}),b.zoom&&b.zoom.stop().animate({opacity:b.opt.cursoropacitymin}),b.cursoractive=!1;b.cursortimeout=0},d||b.opt.hidecursordelay))};this.noticeCursor=function(d,c,g){b.showCursor(c,g);b.rail.active||b.hideCursor(d)};this.getContentSize=b.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:b.haswrapper?function(){return{w:b.doc.outerWidth()+parseInt(b.win.css("paddingLeft"))+parseInt(b.win.css("paddingRight")),h:b.doc.outerHeight()+parseInt(b.win.css("paddingTop"))+parseInt(b.win.css("paddingBottom"))}}:function(){return{w:b.docscroll[0].scrollWidth,h:b.docscroll[0].scrollHeight}};this.onResize=function(d,c){if(!b.win)return!1;if(!b.haswrapper&&!b.ispage){if("none"==b.win.css("display"))return b.visibility&&
b.hideRail().hideRailHr(),!1;!b.hidden&&!b.visibility&&b.showRail().showRailHr()}var g=b.page.maxh,f=b.page.maxw,e=b.view.w;b.view={w:b.ispage?b.win.width():parseInt(b.win[0].clientWidth),h:b.ispage?b.win.height():parseInt(b.win[0].clientHeight)};b.page=c?c:b.getContentSize();b.page.maxh=Math.max(0,b.page.h-b.view.h);b.page.maxw=Math.max(0,b.page.w-b.view.w);if(b.page.maxh==g&&b.page.maxw==f&&b.view.w==e){if(b.ispage)return b;g=b.win.offset();if(b.lastposition&&(f=b.lastposition,f.top==g.top&&f.left==
g.left))return b;b.lastposition=g}0==b.page.maxh?(b.hideRail(),b.scrollvaluemax=0,b.scroll.y=0,b.scrollratio.y=0,b.cursorheight=0,b.setScrollTop(0),b.rail.scrollable=!1):b.rail.scrollable=!0;0==b.page.maxw?(b.hideRailHr(),b.scrollvaluemaxw=0,b.scroll.x=0,b.scrollratio.x=0,b.cursorwidth=0,b.setScrollLeft(0),b.railh.scrollable=!1):b.railh.scrollable=!0;b.locked=0==b.page.maxh&&0==b.page.maxw;if(b.locked)return b.ispage||b.updateScrollBar(b.view),!1;!b.hidden&&!b.visibility?b.showRail().showRailHr():
!b.hidden&&!b.railh.visibility&&b.showRailHr();b.istextarea&&(b.win.css("resize")&&"none"!=b.win.css("resize"))&&(b.view.h-=20);b.cursorheight=Math.min(b.view.h,Math.round(b.view.h*(b.view.h/b.page.h)));b.cursorheight=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorheight);b.cursorwidth=Math.min(b.view.w,Math.round(b.view.w*(b.view.w/b.page.w)));b.cursorwidth=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorwidth);b.scrollvaluemax=
b.view.h-b.cursorheight-b.cursor.hborder;b.railh&&(b.railh.width=0<b.page.maxh?b.view.w-b.rail.width:b.view.w,b.scrollvaluemaxw=b.railh.width-b.cursorwidth-b.cursorh.wborder);b.checkrtlmode&&b.railh&&(b.checkrtlmode=!1,b.opt.rtlmode&&0==b.scroll.x&&b.setScrollLeft(b.page.maxw));b.ispage||b.updateScrollBar(b.view);b.scrollratio={x:b.page.maxw/b.scrollvaluemaxw,y:b.page.maxh/b.scrollvaluemax};b.getScrollTop()>b.page.maxh?b.doScrollTop(b.page.maxh):(b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y)),
b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)),b.cursoractive&&b.noticeCursor());b.scroll.y&&0==b.getScrollTop()&&b.doScrollTo(Math.floor(b.scroll.y*b.scrollratio.y));return b};this.resize=b.onResize;this.lazyResize=function(d){d=isNaN(d)?30:d;b.delayed("resize",b.resize,d);return b};this._bind=function(d,c,g,f){b.events.push({e:d,n:c,f:g,b:f,q:!1});d.addEventListener?d.addEventListener(c,g,f||!1):d.attachEvent?d.attachEvent("on"+c,g):d["on"+c]=g};this.jqbind=function(d,c,g){b.events.push({e:d,
n:c,f:g,q:!0});e(d).bind(c,g)};this.bind=function(d,c,g,e){var h="jquery"in d?d[0]:d;"mousewheel"==c?"onwheel"in b.win?b._bind(h,"wheel",g,e||!1):(d="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",n(h,d,g,e||!1),"DOMMouseScroll"==d&&n(h,"MozMousePixelScroll",g,e||!1)):h.addEventListener?(f.cantouch&&/mouseup|mousedown|mousemove/.test(c)&&b._bind(h,"mousedown"==c?"touchstart":"mouseup"==c?"touchend":"touchmove",function(b){if(b.touches){if(2>b.touches.length){var d=b.touches.length?
b.touches[0]:b;d.original=b;g.call(this,d)}}else b.changedTouches&&(d=b.changedTouches[0],d.original=b,g.call(this,d))},e||!1),b._bind(h,c,g,e||!1),f.cantouch&&"mouseup"==c&&b._bind(h,"touchcancel",g,e||!1)):b._bind(h,c,function(d){if((d=d||window.event||!1)&&d.srcElement)d.target=d.srcElement;"pageY"in d||(d.pageX=d.clientX+document.documentElement.scrollLeft,d.pageY=d.clientY+document.documentElement.scrollTop);return!1===g.call(h,d)||!1===e?b.cancelEvent(d):!0})};this._unbind=function(b,c,g,f){b.removeEventListener?
b.removeEventListener(c,g,f):b.detachEvent?b.detachEvent("on"+c,g):b["on"+c]=!1};this.unbindAll=function(){for(var d=0;d<b.events.length;d++){var c=b.events[d];c.q?c.e.unbind(c.n,c.f):b._unbind(c.e,c.n,c.f,c.b)}};this.cancelEvent=function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;b.preventDefault&&b.preventDefault();b.stopPropagation&&b.stopPropagation();b.preventManipulation&&b.preventManipulation();b.cancelBubble=!0;b.cancel=!0;return b.returnValue=!1};this.stopPropagation=
function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;if(b.stopPropagation)return b.stopPropagation();b.cancelBubble&&(b.cancelBubble=!0);return!1};this.showRail=function(){if(0!=b.page.maxh&&(b.ispage||"none"!=b.win.css("display")))b.visibility=!0,b.rail.visibility=!0,b.rail.css("display","block");return b};this.showRailHr=function(){if(!b.railh)return b;if(0!=b.page.maxw&&(b.ispage||"none"!=b.win.css("display")))b.railh.visibility=!0,b.railh.css("display","block");return b};this.hideRail=
function(){b.visibility=!1;b.rail.visibility=!1;b.rail.css("display","none");return b};this.hideRailHr=function(){if(!b.railh)return b;b.railh.visibility=!1;b.railh.css("display","none");return b};this.show=function(){b.hidden=!1;b.locked=!1;return b.showRail().showRailHr()};this.hide=function(){b.hidden=!0;b.locked=!0;return b.hideRail().hideRailHr()};this.toggle=function(){return b.hidden?b.show():b.hide()};this.remove=function(){b.stop();b.cursortimeout&&clearTimeout(b.cursortimeout);b.doZoomOut();
b.unbindAll();!1!==b.observer&&b.observer.disconnect();!1!==b.observerremover&&b.observerremover.disconnect();b.events=[];b.cursor&&(b.cursor.remove(),b.cursor=null);b.cursorh&&(b.cursorh.remove(),b.cursorh=null);b.rail&&(b.rail.remove(),b.rail=null);b.railh&&(b.railh.remove(),b.railh=null);b.zoom&&(b.zoom.remove(),b.zoom=null);for(var d=0;d<b.saved.css.length;d++){var c=b.saved.css[d];c[0].css(c[1],"undefined"==typeof c[2]?"":c[2])}b.saved=!1;b.me.data("__nicescroll","");b.me=null;b.doc=null;b.docscroll=
null;b.win=null;return b};this.scrollstart=function(d){this.onscrollstart=d;return b};this.scrollend=function(d){this.onscrollend=d;return b};this.scrollcancel=function(d){this.onscrollcancel=d;return b};this.zoomin=function(d){this.onzoomin=d;return b};this.zoomout=function(d){this.onzoomout=d;return b};this.isScrollable=function(b){b=b.target?b.target:b;if("OPTION"==b.nodeName)return!0;for(;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var c=e(b),c=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||
"";if(/scroll|auto/.test(c))return b.clientHeight!=b.scrollHeight;b=b.parentNode?b.parentNode:!1}return!1};this.getViewport=function(b){for(b=b&&b.parentNode?b.parentNode:!1;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var c=e(b),g=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"";if(/scroll|auto/.test(g)&&b.clientHeight!=b.scrollHeight||0<c.getNiceScroll().length)return c;b=b.parentNode?b.parentNode:!1}return!1};this.onmousewheel=function(d){if(b.locked)return!0;if(b.rail.drag)return b.cancelEvent(d);
if(!b.rail.scrollable)return b.railh&&b.railh.scrollable?b.onmousewheelhr(d):!0;var c=+new Date,g=!1;b.opt.preservenativescrolling&&b.checkarea+600<c&&(b.nativescrollingarea=b.isScrollable(d),g=!0);b.checkarea=c;if(b.nativescrollingarea)return!0;if(d=t(d,!1,g))b.checkarea=0;return d};this.onmousewheelhr=function(d){if(b.locked||!b.railh.scrollable)return!0;if(b.rail.drag)return b.cancelEvent(d);var c=+new Date,g=!1;b.opt.preservenativescrolling&&b.checkarea+600<c&&(b.nativescrollingarea=b.isScrollable(d),
g=!0);b.checkarea=c;return b.nativescrollingarea?!0:b.locked?b.cancelEvent(d):t(d,!0,g)};this.stop=function(){b.cancelScroll();b.scrollmon&&b.scrollmon.stop();b.cursorfreezed=!1;b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor();return b};this.getTransitionSpeed=function(c){var f=Math.round(10*b.opt.scrollspeed);c=Math.min(f,Math.round(c/20*b.opt.scrollspeed));return 20<c?c:0};b.opt.smoothscroll?b.ishwscroll&&f.hastransition&&b.opt.usetransition?(this.prepareTransition=function(c,
e){var g=e?20<c?c:0:b.getTransitionSpeed(c),h=g?f.prefixstyle+"transform "+g+"ms ease-out":"";if(!b.lasttransitionstyle||b.lasttransitionstyle!=h)b.lasttransitionstyle=h,b.doc.css(f.transitionstyle,h);return g},this.doScrollLeft=function(c,f){var g=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,g,f)},this.doScrollTop=function(c,f){var g=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(g,c,f)},this.doScrollPos=function(c,e,g){var h=b.getScrollTop(),l=b.getScrollLeft();(0>
(b.newscrolly-h)*(e-h)||0>(b.newscrollx-l)*(c-l))&&b.cancelScroll();!1==b.opt.bouncescroll&&(0>e?e=0:e>b.page.maxh&&(e=b.page.maxh),0>c?c=0:c>b.page.maxw&&(c=b.page.maxw));if(b.scrollrunning&&c==b.newscrollx&&e==b.newscrolly)return!1;b.newscrolly=e;b.newscrollx=c;b.newscrollspeed=g||!1;if(b.timer)return!1;b.timer=setTimeout(function(){var g=b.getScrollTop(),h=b.getScrollLeft(),l,k;l=c-h;k=e-g;l=Math.round(Math.sqrt(Math.pow(l,2)+Math.pow(k,2)));l=b.newscrollspeed&&1<b.newscrollspeed?b.newscrollspeed:
b.getTransitionSpeed(l);b.newscrollspeed&&1>=b.newscrollspeed&&(l*=b.newscrollspeed);b.prepareTransition(l,!0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);0<l&&(!b.scrollrunning&&b.onscrollstart&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:h,y:g},request:{x:c,y:e},end:{x:b.newscrollx,y:b.newscrolly},speed:l}),f.transitionend?b.scrollendtrapped||(b.scrollendtrapped=!0,b.bind(b.doc,f.transitionend,b.onScrollEnd,!1)):(b.scrollendtrapped&&clearTimeout(b.scrollendtrapped),
b.scrollendtrapped=setTimeout(b.onScrollEnd,l)),b.timerscroll={bz:new BezierClass(g,b.newscrolly,l,0,0,0.58,1),bh:new BezierClass(h,b.newscrollx,l,0,0,0.58,1)},b.cursorfreezed||(b.timerscroll.tm=setInterval(function(){b.showCursor(b.getScrollTop(),b.getScrollLeft())},60)));b.synched("doScroll-set",function(){b.timer=0;b.scrollendtrapped&&(b.scrollrunning=!0);b.setScrollTop(b.newscrolly);b.setScrollLeft(b.newscrollx);if(!b.scrollendtrapped)b.onScrollEnd()})},50)},this.cancelScroll=function(){if(!b.scrollendtrapped)return!0;
var c=b.getScrollTop(),e=b.getScrollLeft();b.scrollrunning=!1;f.transitionend||clearTimeout(f.transitionend);b.scrollendtrapped=!1;b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.prepareTransition(0);b.setScrollTop(c);b.railh&&b.setScrollLeft(e);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;b.cursorfreezed=!1;b.showCursor(c,e);return b},this.onScrollEnd=function(){b.scrollendtrapped&&b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.scrollendtrapped=!1;b.prepareTransition(0);
b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;var c=b.getScrollTop(),e=b.getScrollLeft();b.setScrollTop(c);b.railh&&b.setScrollLeft(e);b.noticeCursor(!1,c,e);b.cursorfreezed=!1;0>c?c=0:c>b.page.maxh&&(c=b.page.maxh);0>e?e=0:e>b.page.maxw&&(e=b.page.maxw);if(c!=b.newscrolly||e!=b.newscrollx)return b.doScrollPos(e,c,b.opt.snapbackspeed);b.onscrollend&&b.scrollrunning&&b.onscrollend.call(b,{type:"scrollend",current:{x:e,y:c},end:{x:b.newscrollx,y:b.newscrolly}});b.scrollrunning=
!1}):(this.doScrollLeft=function(c,f){var g=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,g,f)},this.doScrollTop=function(c,f){var g=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(g,c,f)},this.doScrollPos=function(c,f,g){function e(){if(b.cancelAnimationFrame)return!0;b.scrollrunning=!0;if(r=1-r)return b.timer=v(e)||1;var c=0,d=sy=b.getScrollTop();if(b.dst.ay){var d=b.bzscroll?b.dst.py+b.bzscroll.getNow()*b.dst.ay:b.newscrolly,g=d-sy;if(0>g&&d<b.newscrolly||0<g&&d>b.newscrolly)d=
b.newscrolly;b.setScrollTop(d);d==b.newscrolly&&(c=1)}else c=1;var f=sx=b.getScrollLeft();if(b.dst.ax){f=b.bzscroll?b.dst.px+b.bzscroll.getNow()*b.dst.ax:b.newscrollx;g=f-sx;if(0>g&&f<b.newscrollx||0<g&&f>b.newscrollx)f=b.newscrollx;b.setScrollLeft(f);f==b.newscrollx&&(c+=1)}else c+=1;2==c?(b.timer=0,b.cursorfreezed=!1,b.bzscroll=!1,b.scrollrunning=!1,0>d?d=0:d>b.page.maxh&&(d=b.page.maxh),0>f?f=0:f>b.page.maxw&&(f=b.page.maxw),f!=b.newscrollx||d!=b.newscrolly?b.doScrollPos(f,d):b.onscrollend&&b.onscrollend.call(b,
{type:"scrollend",current:{x:sx,y:sy},end:{x:b.newscrollx,y:b.newscrolly}})):b.timer=v(e)||1}f="undefined"==typeof f||!1===f?b.getScrollTop(!0):f;if(b.timer&&b.newscrolly==f&&b.newscrollx==c)return!0;b.timer&&w(b.timer);b.timer=0;var h=b.getScrollTop(),l=b.getScrollLeft();(0>(b.newscrolly-h)*(f-h)||0>(b.newscrollx-l)*(c-l))&&b.cancelScroll();b.newscrolly=f;b.newscrollx=c;if(!b.bouncescroll||!b.rail.visibility)0>b.newscrolly?b.newscrolly=0:b.newscrolly>b.page.maxh&&(b.newscrolly=b.page.maxh);if(!b.bouncescroll||
!b.railh.visibility)0>b.newscrollx?b.newscrollx=0:b.newscrollx>b.page.maxw&&(b.newscrollx=b.page.maxw);b.dst={};b.dst.x=c-l;b.dst.y=f-h;b.dst.px=l;b.dst.py=h;var k=Math.round(Math.sqrt(Math.pow(b.dst.x,2)+Math.pow(b.dst.y,2)));b.dst.ax=b.dst.x/k;b.dst.ay=b.dst.y/k;var n=0,q=k;0==b.dst.x?(n=h,q=f,b.dst.ay=1,b.dst.py=0):0==b.dst.y&&(n=l,q=c,b.dst.ax=1,b.dst.px=0);k=b.getTransitionSpeed(k);g&&1>=g&&(k*=g);b.bzscroll=0<k?b.bzscroll?b.bzscroll.update(q,k):new BezierClass(n,q,k,0,1,0,1):!1;if(!b.timer){(h==
b.page.maxh&&f>=b.page.maxh||l==b.page.maxw&&c>=b.page.maxw)&&b.checkContentSize();var r=1;b.cancelAnimationFrame=!1;b.timer=1;b.onscrollstart&&!b.scrollrunning&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:l,y:h},request:{x:c,y:f},end:{x:b.newscrollx,y:b.newscrolly},speed:k});e();(h==b.page.maxh&&f>=h||l==b.page.maxw&&c>=l)&&b.checkContentSize();b.noticeCursor()}},this.cancelScroll=function(){b.timer&&w(b.timer);b.timer=0;b.bzscroll=!1;b.scrollrunning=!1;return b}):(this.doScrollLeft=function(c,
f){var g=b.getScrollTop();b.doScrollPos(c,g,f)},this.doScrollTop=function(c,f){var g=b.getScrollLeft();b.doScrollPos(g,c,f)},this.doScrollPos=function(c,f,g){var e=c>b.page.maxw?b.page.maxw:c;0>e&&(e=0);var h=f>b.page.maxh?b.page.maxh:f;0>h&&(h=0);b.synched("scroll",function(){b.setScrollTop(h);b.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(c,f){var g=0,g=f?Math.floor((b.scroll.y-c)*b.scrollratio.y):(b.timer?b.newscrolly:b.getScrollTop(!0))-c;if(b.bouncescroll){var e=
Math.round(b.view.h/2);g<-e?g=-e:g>b.page.maxh+e&&(g=b.page.maxh+e)}b.cursorfreezed=!1;py=b.getScrollTop(!0);if(0>g&&0>=py)return b.noticeCursor();if(g>b.page.maxh&&py>=b.page.maxh)return b.checkContentSize(),b.noticeCursor();b.doScrollTop(g)};this.doScrollLeftBy=function(c,f){var g=0,g=f?Math.floor((b.scroll.x-c)*b.scrollratio.x):(b.timer?b.newscrollx:b.getScrollLeft(!0))-c;if(b.bouncescroll){var e=Math.round(b.view.w/2);g<-e?g=-e:g>b.page.maxw+e&&(g=b.page.maxw+e)}b.cursorfreezed=!1;px=b.getScrollLeft(!0);
if(0>g&&0>=px||g>b.page.maxw&&px>=b.page.maxw)return b.noticeCursor();b.doScrollLeft(g)};this.doScrollTo=function(c,f){f&&Math.round(c*b.scrollratio.y);b.cursorfreezed=!1;b.doScrollTop(c)};this.checkContentSize=function(){var c=b.getContentSize();(c.h!=b.page.h||c.w!=b.page.w)&&b.resize(!1,c)};b.onscroll=function(c){b.rail.drag||b.cursorfreezed||b.synched("scroll",function(){b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.railh&&(b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)));
b.noticeCursor()})};b.bind(b.docscroll,"scroll",b.onscroll);this.doZoomIn=function(c){if(!b.zoomactive){b.zoomactive=!0;b.zoomrestore={style:{}};var h="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),g=b.win[0].style,l;for(l in h){var k=h[l];b.zoomrestore.style[k]="undefined"!=typeof g[k]?g[k]:""}b.zoomrestore.style.width=b.win.css("width");b.zoomrestore.style.height=b.win.css("height");b.zoomrestore.padding={w:b.win.outerWidth()-b.win.width(),h:b.win.outerHeight()-
b.win.height()};f.isios4&&(b.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0));b.win.css({position:f.isios4?"absolute":"fixed",top:0,left:0,"z-index":x+100,margin:"0px"});h=b.win.css("backgroundColor");(""==h||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h))&&b.win.css("backgroundColor","#fff");b.rail.css({"z-index":x+101});b.zoom.css({"z-index":x+102});b.zoom.css("backgroundPosition","0px -18px");b.resizeZoom();b.onzoomin&&b.onzoomin.call(b);return b.cancelEvent(c)}};this.doZoomOut=
function(c){if(b.zoomactive)return b.zoomactive=!1,b.win.css("margin",""),b.win.css(b.zoomrestore.style),f.isios4&&e(window).scrollTop(b.zoomrestore.scrollTop),b.rail.css({"z-index":b.zindex}),b.zoom.css({"z-index":b.zindex}),b.zoomrestore=!1,b.zoom.css("backgroundPosition","0px 0px"),b.onResize(),b.onzoomout&&b.onzoomout.call(b),b.cancelEvent(c)};this.doZoom=function(c){return b.zoomactive?b.doZoomOut(c):b.doZoomIn(c)};this.resizeZoom=function(){if(b.zoomactive){var c=b.getScrollTop();b.win.css({width:e(window).width()-
b.zoomrestore.padding.w+"px",height:e(window).height()-b.zoomrestore.padding.h+"px"});b.onResize();b.setScrollTop(Math.min(b.page.maxh,c))}};this.init();e.nicescroll.push(this)},H=function(e){var c=this;this.nc=e;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,l){c.stop();var k=c.time();c.steptime=
0;c.lasttime=k;c.speedx=0;c.speedy=0;c.lastx=e;c.lasty=l;c.lastscrollx=-1;c.lastscrolly=-1};this.update=function(e,l){var k=c.time();c.steptime=k-c.lasttime;c.lasttime=k;var k=l-c.lasty,t=e-c.lastx,b=c.nc.getScrollTop(),q=c.nc.getScrollLeft(),b=b+k,q=q+t;c.snapx=0>q||q>c.nc.page.maxw;c.snapy=0>b||b>c.nc.page.maxh;c.speedx=t;c.speedy=k;c.lastx=e;c.lasty=l};this.stop=function(){c.nc.unsynched("domomentum2d");c.timer&&clearTimeout(c.timer);c.timer=0;c.lastscrollx=-1;c.lastscrolly=-1};this.doSnapy=function(e,
l){var k=!1;0>l?(l=0,k=!0):l>c.nc.page.maxh&&(l=c.nc.page.maxh,k=!0);0>e?(e=0,k=!0):e>c.nc.page.maxw&&(e=c.nc.page.maxw,k=!0);k&&c.nc.doScrollPos(e,l,c.nc.opt.snapbackspeed)};this.doMomentum=function(e){var l=c.time(),k=e?l+e:c.lasttime;e=c.nc.getScrollLeft();var t=c.nc.getScrollTop(),b=c.nc.page.maxh,q=c.nc.page.maxw;c.speedx=0<q?Math.min(60,c.speedx):0;c.speedy=0<b?Math.min(60,c.speedy):0;k=k&&50>=l-k;if(0>t||t>b||0>e||e>q)k=!1;e=c.speedx&&k?c.speedx:!1;if(c.speedy&&k&&c.speedy||e){var f=Math.max(16,
c.steptime);50<f&&(e=f/50,c.speedx*=e,c.speedy*=e,f=50);c.demulxy=0;c.lastscrollx=c.nc.getScrollLeft();c.chkx=c.lastscrollx;c.lastscrolly=c.nc.getScrollTop();c.chky=c.lastscrolly;var r=c.lastscrollx,u=c.lastscrolly,d=function(){var e=600<c.time()-l?0.04:0.02;if(c.speedx&&(r=Math.floor(c.lastscrollx-c.speedx*(1-c.demulxy)),c.lastscrollx=r,0>r||r>q))e=0.1;if(c.speedy&&(u=Math.floor(c.lastscrolly-c.speedy*(1-c.demulxy)),c.lastscrolly=u,0>u||u>b))e=0.1;c.demulxy=Math.min(1,c.demulxy+e);c.nc.synched("domomentum2d",
function(){c.speedx&&(c.nc.getScrollLeft()!=c.chkx&&c.stop(),c.chkx=r,c.nc.setScrollLeft(r));c.speedy&&(c.nc.getScrollTop()!=c.chky&&c.stop(),c.chky=u,c.nc.setScrollTop(u));c.timer||(c.nc.hideCursor(),c.doSnapy(r,u))});1>c.demulxy?c.timer=setTimeout(d,f):(c.stop(),c.nc.hideCursor(),c.doSnapy(r,u))};d()}else c.doSnapy(c.nc.getScrollLeft(),c.nc.getScrollTop())}},A=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(k,c,h){return(c=e.data(k,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollTop():A.call(k)},
set:function(k,c){var h=e.data(k,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollTop(parseInt(c)):A.call(k,c);return this}};e.fn.scrollTop=function(k){if("undefined"==typeof k){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollTop():A.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollTop(parseInt(k)):A.call(e(this),k)})};var B=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(k,c,h){return(c=e.data(k,"__nicescroll")||
!1)&&c.ishwscroll?c.getScrollLeft():B.call(k)},set:function(k,c){var h=e.data(k,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollLeft(parseInt(c)):B.call(k,c);return this}};e.fn.scrollLeft=function(k){if("undefined"==typeof k){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollLeft():B.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollLeft(parseInt(k)):B.call(e(this),k)})};var C=function(k){var c=this;this.length=
0;this.name="nicescrollarray";this.each=function(e){for(var h=0;h<c.length;h++)e.call(c[h]);return c};this.push=function(e){c[c.length]=e;c.length++};this.eq=function(e){return c[e]};if(k)for(a=0;a<k.length;a++){var h=e.data(k[a],"__nicescroll")||!1;h&&(this[this.length]=h,this.length++)}return this};(function(e,c,h){for(var l=0;l<c.length;l++)h(e,c[l])})(C.prototype,"show hide toggle onResize resize remove stop doScrollPos".split(" "),function(e,c){e[c]=function(){var e=arguments;return this.each(function(){this[c].apply(this,
e)})}});e.fn.getNiceScroll=function(k){return"undefined"==typeof k?new C(this):e.data(this[k],"__nicescroll")||!1};e.extend(e.expr[":"],{nicescroll:function(k){return e.data(k,"__nicescroll")?!0:!1}});e.fn.niceScroll=function(k,c){"undefined"==typeof c&&("object"==typeof k&&!("jquery"in k))&&(c=k,k=!1);var h=new C;"undefined"==typeof c&&(c={});k&&(c.doc=e(k),c.win=e(this));var l=!("doc"in c);!l&&!("win"in c)&&(c.win=e(this));this.each(function(){var k=e(this).data("__nicescroll")||!1;k||(c.doc=l?
e(this):c.doc,k=new N(c,e(this)),e(this).data("__nicescroll",k));h.push(k)});return 1==h.length?h[0]:h};window.NiceScroll={getjQuery:function(){return e}};e.nicescroll||(e.nicescroll=new C,e.nicescroll.options=F)})(jQuery);

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
}

function randomRange(min, max) {
    return ((Math.random() * (max - min)) + min);
}

function hexToR(h) {
    return parseInt((cutHex(h)).substring(0, 2), 16);
}

function hexToG(h) {
    return parseInt((cutHex(h)).substring(2, 4), 16);
}

function hexToB(h) {
    return parseInt((cutHex(h)).substring(4, 6), 16);
}

function cutHex(h) {
        return (h.charAt(0) == "#") ? h.substring(1, 7) : h;
    }

    // // Bottom to top
    // var MAX_PARTICLES = 500,
    //    MAX_SPAWNRATE = 100,
    //    MAX_VELOCITY = 30,
    //    MAX_ACCELERATION = 1.5,
    //    MAX_VELOCITY_DEVIATION = 15,
    //    MAX_DEGREE = 360,
    //    MAX_DEGREE_DEVIATION = 180,
    //    MAX_SIZE = 100,
    //    MAX_STROKE_SIZE = 10,

    //    configDefault = {
    //       particles: 60,
    //       spawnrate: 1,
    //       color: "#ffffff",
    //       shape: "circle",
    //       position: "random",
    //       random_color: 0,
    //       velocity: 30,
    //       velocity_deviation: 15,
    //       acceleration: 0.0,
    //       direction_accel: 360,
    //       direction: 270,
    //       direction_deviation: 0,
    //       back_color: 'rgba(0, 0, 0, 0)',
    //       stroke_size: 0,
    //       stroke_color: '#ffffff',
    //       opacity: 1,
    //       random_size: false,
    //       size: 5,
    //       particle_dead: true,
    //       shadow_blur: 0
    //    },
    // config,
    // centerX,
    // centerY,
    // mousePosX = window.innerWidth / 2,
    // mousePosY = window.innerHeight / 2,
    // degreesToRadians = (Math.PI / 180),
    // canvas,
    // c,
    // particleArray = [],
    // adjustingTool;

    // var scrollObject = {};
    // window.onscroll = getScrollPosition;

    // function getScrollPosition(){
    //     scrollObject = {
    //        x: window.pageXOffset,
    //        y: window.pageYOffset
    //     }
    //     // If you want to check distance
    //     if(scrollObject.y > 0) {
    //         console.log("scrolled");
    //     } else {
    //         console.log('loaded');
    //     }
    // }

    //Left to Right
    var MAX_PARTICLES = 500,
       MAX_SPAWNRATE = 100,
       MAX_VELOCITY = 30,
       MAX_ACCELERATION = 1.5,
       MAX_VELOCITY_DEVIATION = 15,
       MAX_DEGREE = 360,
       MAX_DEGREE_DEVIATION = 180,
       MAX_SIZE = 100,
       MAX_STROKE_SIZE = 10,

       configDefault = {
          particles: 40,
          spawnrate: 1,
          color: "#ffffff",
          shape: "circle",
          position: "random",
          random_color: 0,
          velocity: 15,
          velocity_deviation: 15,
          acceleration: 0.0,
          direction_accel: 360,
          direction: 360,
          direction_deviation: 0,
          back_color: 'rgba(0, 0, 0, 0)',
          stroke_size: 0,
          stroke_color: '#ffffff',
          opacity: 1,
          random_size: false,
          size: 3,
          particle_dead: true,
          shadow_blur: 0
       },
    config,
    centerX,
    centerY,
    mousePosX = window.innerWidth / 2,
    mousePosY = window.innerHeight / 2,
    degreesToRadians = (Math.PI / 180),
    canvas,
    c,
    particleArray = [],
    adjustingTool;



$(document).ready(function() {
    config = $.extend({}, configDefault);
    refreshCenter();
    initializeCanvas();
    stepAnimate();
});

function refreshCenter() {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
};
$(window).resize(function() {
    // D.River patch
    var winWidth           = $(window).width();//get width
    var winHeight          = $(window).height();//get height
    
    canvas.width = winWidth;
    canvas.height = winHeight;
});

function createParticle() {
    var particle = {};
    switch (config.position) {
        case 'center':
            particle.x = window.innerWidth / 2;
            particle.y = window.innerHeight / 2;
            break;
        case 'random':
            particle.x = randomRange(0, window.innerWidth);
            particle.y = randomRange(0, window.innerHeight);
            break;
    }
    var dirVel = randomRange(config.direction - config.direction_deviation, config.direction + config.direction_deviation),
        radVel = dirVel * degreesToRadians,
        xVel = Math.cos(radVel),
        yVel = Math.sin(radVel),
        radAccel = config.direction_accel * degreesToRadians,
        xAccel = config.acceleration * Math.cos(radAccel),
        yAccel = config.acceleration * Math.sin(radAccel),
        velocity = randomRange(config.velocity - config.velocity_deviation, config.velocity + config.velocity_deviation);
    particle.xSpeed = xVel * velocity;
    particle.ySpeed = yVel * velocity;
    particle.xAccel = xAccel;
    particle.yAccel = yAccel;
    var size;
    if (config.random_size) {
        size = randomRange(1, MAX_SIZE);
    } else {
        size = config.size;
    }
    particle.size = size;
    particle.active = true;
    return particle;
}

function initializeCanvas() {
    // D.River patch
    var winWidth           = $(window).width();//get width
    var winHeight          = $(window).height();//get height
    
    canvas = document.getElementById("canvas");
    
    c = canvas.getContext("2d");
    c.canvas.width = winWidth;
    c.canvas.height = winHeight;
}

function update(particle) {
    var particle_color = config.color;
    if (config.random_color) {
        var r = Math.random() * 255 >> 0;
        var g = Math.random() * 255 >> 0;
        var b = Math.random() * 255 >> 0;
        particle_color = "rgba(" + r + ", " + g + ", " + b + ", " + config.opacity + ")";
    } else {
        particle_color = "rgba(" + hexToR(particle_color) + ", " + hexToG(particle_color) + ", " + hexToB(particle_color) + ", " + config.opacity + ")";
    }
    c.beginPath();
    c.lineWidth = config.stroke_size;
    c.fillStyle = particle_color;
    if (config.shadow_blur > 0) {
        c.shadowBlur = config.shadow_blur;
        c.shadowOffsetX = 1;
        c.shadowOffsetY = 1;
        c.shadowColor = "rgba(100, 100, 100, 1)";
    } else {
        c.shadowBlur = null;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.shadowColor = "rgba(100, 100, 100, 0)";
    }
    var particle_stroke_color = "rgba(" + hexToR(config.stroke_color) + ", " + hexToG(config.stroke_color) + ", " + hexToB(config.stroke_color) + ", " + config.opacity + ")";
    c.strokeStyle = particle_stroke_color;
    var radius = particle.size / 2;
    c.arc(particle.x, particle.y, radius, 0, 2 * Math.PI);
    c.fill();
    if (config.stroke_size > 0) {
        c.stroke();
    }
    c.closePath();
    particle.x = particle.x + particle.xSpeed;
    particle.y = particle.y + particle.ySpeed;
    particle.xSpeed += particle.xAccel;
    particle.ySpeed += particle.yAccel;
    if (config.particle_dead) {
        particle.size = particle.size * (0.9 + (randomRange(1, 10) / 100));
        if (particle.size <= 0.25) {
            particle.active = false;
        }
    } else {
        if (particle.x < -(particle.size) || particle.y < -(particle.size) || particle.x > window.innerWidth + particle.size || particle.y > window.innerHeight + particle.size) {
            particle.active = false;
        }
    }
}

function draw() {
    var particle, i, spawned;
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.fillStyle = config.back_color;
    c.fillRect(0, 0, window.innerWidth, window.innerHeight);
    for (i in particleArray) {
        particle = particleArray[i];
        if (particle.active) {
            update(particle);
        } else {
            particleArray.splice(i, 1);
        }
    }
    //adjustingTool.draw();
    for (spawned = 0; spawned < config.spawnrate; spawned++) {
        if (particleArray.length >= config.particles) {
            return;
        }
        particleArray.push(createParticle());
    }
}

function stepAnimate() {
    requestAnimationFrame(stepAnimate);
    draw();
}
/*
 *
 *	CoolText v1.1.1
 *
 *	Copyright (c) 2014 Thomas Dolso
 *	http://www.megalocode.com/cooltext
 *
 *	Licenses
 * http://codecanyon.net/licenses/regular
 * http://codecanyon.net/licenses/extended
 *
 *
 */
 
;if(typeof cool_animations==="undefined")cool_animations=[];cool_animations=[{"name":"cool1","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":64,"toy":29,"toz":-5,"p":176,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool2","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":31,"toy":90,"toz":-65,"p":246,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool3","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":95,"toy":41,"toz":-27,"p":119,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool4","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":43,"toy":28,"toz":-30,"p":138,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":"0.05","start_at":1}],"type":"in"},{"name":"cool5","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":96,"toy":66,"toz":17,"p":185,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":2,"toy":49,"toz":96,"p":260,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.7,"stagger":0.05,"start_at":0.39}],"type":"in"},{"name":"cool6","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":38,"toy":90,"toz":-12,"p":50,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool7","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":4,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":75,"toy":75,"toz":32,"p":21,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeOut","time":0.7,"stagger":"0.05","start_at":1}],"type":"in"},{"name":"cool8","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":91,"toy":46,"toz":34,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool9","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":14,"toy":1,"toz":-34,"p":130,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":"0.05","start_at":1}],"type":"in"},{"name":"cool10","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":37,"toy":66,"toz":21,"p":239,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool11","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":23,"toy":59,"toz":-12,"p":5,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool12","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":47,"toy":20,"toz":10,"p":19,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":2,"toy":37,"toz":-72,"p":204,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.39}],"type":"in"},{"name":"cool13","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":10,"toy":97,"toz":84,"p":215,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quart.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":70,"toy":95,"toz":-17,"p":270,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.02}],"type":"in"},{"name":"cool14","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":12,"toy":34,"toz":60,"p":92,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":46,"toy":86,"toz":-14,"p":281,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Bounce.easeInOut","time":0.7,"stagger":0.05,"start_at":0.01},{"type":"animation","o":1,"tox":32,"toy":75,"toz":-47,"p":226,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.19}],"type":"in"},{"name":"cool15","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":67,"toy":74,"toz":76,"p":191,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":55,"toy":44,"toz":-9,"p":265,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.7,"stagger":0.05,"start_at":0.01}],"type":"in"},{"name":"cool16","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":10,"toy":90,"toz":-6,"p":163,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool17","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":52,"toy":71,"toz":-51,"p":294,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":97,"toy":15,"toz":7,"p":254,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":0.31}],"type":"in"},{"name":"cool18","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":5,"toy":67,"toz":-50,"p":19,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quart.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool19","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":29,"toy":33,"toz":-91,"p":202,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Expo.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":36,"toy":95,"toz":-35,"p":186,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":0.1},{"type":"animation","o":1,"tox":53,"toy":24,"toz":-12,"p":126,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.01}],"type":"in"},{"name":"cool20","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":10,"toy":49,"toz":-2,"p":214,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.7,"stagger":0.05,"start_at":0.32},{"type":"animation","o":1,"tox":26,"toy":65,"toz":-83,"p":10,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.7,"stagger":0.05,"start_at":0.03}],"type":"in"},{"name":"cool21","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":63,"toy":23,"toz":65,"p":226,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":25,"toy":15,"toz":49,"p":182,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.25},{"type":"animation","o":1,"tox":31,"toy":22,"toz":2,"p":253,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.7,"stagger":0.05,"start_at":0.17}],"type":"in"},{"name":"cool22","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":70,"toy":19,"toz":21,"p":233,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool23","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":33,"toy":4,"toz":-89,"p":48,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quint.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool24","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":2,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":86,"toy":43,"toz":12,"p":188,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Expo.easeOut","time":0.7,"stagger":"0.05","start_at":1}],"type":"in"},{"name":"cool25","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":93,"toy":6,"toz":88,"p":32,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":61,"toy":60,"toz":-56,"p":223,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.03},{"type":"animation","o":1,"tox":33,"toy":7,"toz":34,"p":258,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":0.12}],"type":"in"},{"name":"cool26","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":88,"toy":48,"toz":"5","p":107,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":23,"toy":33,"toz":-9,"p":126,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.7,"stagger":0.05,"start_at":0.01},{"type":"animation","o":1,"tox":57,"toy":88,"toz":-69,"p":153,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.7,"stagger":0.05,"start_at":0.42}],"type":"in"},{"name":"cool27","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":55,"toy":46,"toz":-54,"p":134,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Strong.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":77,"toy":51,"toz":-49,"p":150,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.7,"stagger":0.05,"start_at":0.02},{"type":"animation","o":1,"tox":45,"toy":32,"toz":-10,"p":116,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":0.28}],"type":"in"},{"name":"cool28","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":65,"toy":55,"toz":-16,"p":17,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Expo.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool29","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":3,"toy":4,"toz":-33,"p":11,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool30","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":55,"toy":5,"toz":-74,"p":43,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool31","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":16,"toy":66,"toz":-31,"p":67,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":31,"toy":85,"toz":-95,"p":154,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.4}],"type":"in"},{"name":"cool32","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":1,"toy":44,"toz":-11,"p":122,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":39,"toy":58,"toz":-9,"p":63,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":0.3}],"type":"in"},{"name":"cool33","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":59,"toy":73,"toz":-13,"p":128,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":11,"toy":57,"toz":-6,"p":284,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.22}],"type":"in"},{"name":"cool34","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":28,"toy":2,"toz":-100,"p":139,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":"0.05","start_at":1}],"type":"in"},{"name":"cool35","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":31,"toy":0,"toz":-18,"p":245,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":48,"toy":5,"toz":87,"p":99,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":0.11},{"type":"animation","o":1,"tox":15,"toy":13,"toz":5,"p":287,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":0.06}],"type":"in"},{"name":"cool36","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":97,"toy":58,"toz":-71,"p":151,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool37","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":71,"toy":47,"toz":-69,"p":147,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool38","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":50,"toy":5,"toz":-44,"p":5,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool39","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":58,"toy":88,"toz":-54,"p":1,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quint.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":11,"toy":74,"toz":-39,"p":158,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.32}],"type":"in"},{"name":"cool40","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":20,"toy":16,"toz":40,"p":63,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":55,"toy":91,"toz":-29,"p":179,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":0.01},{"type":"animation","o":1,"tox":37,"toy":37,"toz":95,"p":285,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.7,"stagger":0.05,"start_at":0.01}],"type":"in"},{"name":"cool41","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":53,"toy":10,"toz":-12,"p":147,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":76,"toy":33,"toz":-70,"p":215,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Strong.easeInOut","time":0.7,"stagger":0.05,"start_at":0.02},{"type":"animation","o":1,"tox":3,"toy":10,"toz":-17,"p":180,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.03}],"type":"in"},{"name":"cool42","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":69,"toy":34,"toz":-40,"p":177,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":0.23},{"type":"animation","o":1,"tox":14,"toy":0,"toz":-32,"p":59,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":0.33}],"type":"in"},{"name":"cool43","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":79,"toy":41,"toz":22,"p":11,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Expo.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool44","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":3,"toy":27,"toz":2,"p":53,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":17,"toy":31,"toz":-3,"p":55,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.2}],"type":"in"},{"name":"cool45","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":6,"toy":13,"toz":-62,"p":141,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":26,"toy":62,"toz":-86,"p":43,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.01}],"type":"in"},{"name":"cool46","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":19,"toy":13,"toz":47,"p":218,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quint.easeOut","time":0.7,"stagger":"0.05","start_at":1}],"type":"in"},{"name":"cool47","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":98,"toy":28,"toz":-81,"p":24,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":81,"toy":5,"toz":-10,"p":49,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":0.41}],"type":"in"},{"name":"cool48","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":38,"toy":86,"toz":3,"p":109,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":45,"toy":40,"toz":25,"p":35,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Strong.easeInOut","time":0.7,"stagger":0.05,"start_at":0.2}],"type":"in"},{"name":"cool49","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":78,"toy":29,"toz":-89,"p":29,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":28,"toy":36,"toz":27,"p":201,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.17}],"type":"in"},{"name":"cool50","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":18,"toy":38,"toz":37,"p":1,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.04},{"type":"animation","o":1,"tox":81,"toy":18,"toz":10,"p":16,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.2}],"type":"in"},{"name":"cool51","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":50,"toy":57,"toz":11,"p":259,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":63,"toy":81,"toz":-18,"p":182,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Bounce.easeInOut","time":0.7,"stagger":0.05,"start_at":0},{"type":"animation","o":1,"tox":90,"toy":89,"toz":-13,"p":175,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.5}],"type":"in"},{"name":"cool52","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":3,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":47,"toy":14,"toz":50,"p":130,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":"0.05","start_at":1}],"type":"in"},{"name":"cool53","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":71,"toy":28,"toz":-42,"p":86,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":62,"toy":95,"toz":28,"p":156,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.07}],"type":"in"},{"name":"cool54","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":48,"toy":6,"toz":57,"p":240,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool55","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":22,"toy":33,"toz":31,"p":92,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":37,"toy":16,"toz":-27,"p":210,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.7,"stagger":0.05,"start_at":0.06}],"type":"in"},{"name":"cool56","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":0,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":82,"toy":31,"toz":15,"p":60,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":"0.05","start_at":1}],"type":"in"},{"name":"cool57","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":29,"toy":65,"toz":33,"p":96,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Expo.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":96,"toy":4,"toz":-93,"p":14,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.7,"stagger":0.05,"start_at":0.18}],"type":"in"},{"name":"cool58","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":76,"toy":28,"toz":-64,"p":208,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":63,"toy":18,"toz":-73,"p":100,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.2},{"type":"animation","o":1,"tox":71,"toy":27,"toz":-54,"p":192,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":0.11}],"type":"in"},{"name":"cool59","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":68,"toy":73,"toz":62,"p":101,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":96,"toy":63,"toz":-81,"p":273,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.26}],"type":"in"},{"name":"cool60","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":2,"toy":13,"toz":-68,"p":20,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quint.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":59,"toy":30,"toz":-32,"p":163,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":0.07},{"type":"animation","o":1,"tox":77,"toy":22,"toz":-45,"p":238,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":0.09}],"type":"in"},{"name":"cool61","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":5,"toy":7,"toz":-61,"p":296,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":71,"toy":15,"toz":97,"p":237,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.7,"stagger":0.05,"start_at":0.02}],"type":"in"},{"name":"cool62","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":54,"toy":23,"toz":22,"p":263,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":0.16},{"type":"animation","o":1,"tox":36,"toy":70,"toz":-95,"p":33,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":0.16}],"type":"in"},{"name":"cool63","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":2,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":38,"toy":46,"toz":-69,"p":150,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeOut","time":0.7,"stagger":"0.05","start_at":1}],"type":"in"},{"name":"cool64","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":6,"toy":73,"toz":-88,"p":249,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool65","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":67,"toy":75,"toz":-51,"p":227,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool66","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":4,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":32,"toy":89,"toz":77,"p":238,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":"0.05","start_at":1}],"type":"in"},{"name":"cool67","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":77,"toy":32,"toz":-22,"p":199,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool68","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":16,"toy":49,"toz":-94,"p":282,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":71,"toy":20,"toz":-83,"p":106,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Strong.easeInOut","time":0.7,"stagger":0.05,"start_at":0.05}],"type":"in"},{"name":"cool69","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":3,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":17,"toy":87,"toz":26,"p":255,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Circ.easeOut","time":0.7,"stagger":"0.05","start_at":1}],"type":"in"},{"name":"cool70","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":32,"toy":41,"toz":21,"p":80,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool71","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":44,"toy":57,"toz":16,"p":193,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool72","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":1,"toy":78,"toz":-6,"p":96,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":51,"toy":41,"toz":16,"p":8,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":0.4}],"type":"in"},{"name":"cool73","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":49,"toy":15,"toz":-2,"p":189,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Expo.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":53,"toy":92,"toz":89,"p":276,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.7,"stagger":0.05,"start_at":0.05}],"type":"in"},{"name":"cool74","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":96,"toy":88,"toz":54,"p":137,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":17,"toy":89,"toz":-85,"p":13,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":0.11}],"type":"in"},{"name":"cool75","steps":[{"type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":81,"toy":79,"toz":1,"p":47,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":54,"toy":70,"toz":-45,"p":135,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.06}],"type":"in"},{"name":"cool76","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":224.03711755760014,"x1":-200,"x2":200,"yt":"random","y":-76.54141732491553,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":29,"toy":79,"toz":-22,"p":256,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool77","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":276.47186927497387,"x1":-200,"x2":200,"yt":"value","y":-47.65020436607301,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":51,"toy":37,"toz":-6,"p":12,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool78","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"value","x":-187.6317006535828,"x1":-200,"x2":200,"yt":"value","y":228.12993424013257,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":28,"toy":70,"toz":33,"p":271,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool79","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":-182.0522541180253,"x1":-200,"x2":200,"yt":"random","y":234.81069328263402,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":32,"toy":24,"toz":-62,"p":3,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quint.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool80","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":-166.39427952468395,"x1":-200,"x2":200,"yt":"random","y":19.442612025886774,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":46,"toy":86,"toz":-33,"p":255,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":92,"toy":31,"toz":2,"p":253,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":0}],"type":"in"},{"name":"cool81","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":50,"toy":50,"toz":0,"p":0,"xt":"random","x":284.90239195525646,"x1":-200,"x2":200,"yt":"value","y":283.311663614586,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":41,"toy":92,"toz":-6,"p":59,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Strong.easeOut","time":0.7,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":70,"toy":39,"toz":-89,"p":55,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":0.29}],"type":"in"},{"name":"cool82","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":66,"toy":70,"toz":97,"p":0,"xt":"random","x":-91.64128485135734,"x1":-178.37984110228717,"x2":287.2992663644254,"yt":"random","y":234.76856821216643,"y1":-264.9856051430106,"y2":297.0945483073592,"rx":-360,"ry":-360,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":10,"toy":-14,"toz":-20,"p":283,"xt":"value","x":0,"x1":-230.56061421521008,"x2":248.90864305198193,"yt":"value","y":0,"y1":-189.60400153882802,"y2":262.3876241501421,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Expo.easeOut","time":0.46,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":-2,"toy":15,"toz":18,"p":267,"xt":"value","x":0,"x1":-173.32160542719066,"x2":119.82413148507476,"yt":"value","y":0,"y1":-156.1427575070411,"y2":101.0461840312928,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.64,"stagger":0.05,"start_at":0.01}],"type":"in"},{"name":"cool83","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":11,"toy":98,"toz":10,"p":0,"xt":"random","x":-37.56242129020393,"x1":-259.89348450675607,"x2":143.1799785234034,"yt":"value","y":-95.23552302271128,"y1":-143.2871712371707,"y2":248.1767232529819,"rx":-360,"ry":0,"rz":-360,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":-13,"toy":10,"toz":-5,"p":58,"xt":"value","x":0,"x1":-218.68799347430468,"x2":290.135609684512,"yt":"value","y":0,"y1":-282.1175900287926,"y2":269.6897689718753,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Strong.easeOut","time":0.67,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":-5,"toy":17,"toz":-1,"p":10,"xt":"value","x":0,"x1":-138.21077686734498,"x2":279.4429461937398,"yt":"value","y":0,"y1":-101.26664200797677,"y2":201.89062850549817,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.5,"stagger":0.05,"start_at":0}],"type":"in"},{"name":"cool84","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":20,"toy":49,"toz":-48,"p":0,"xt":"value","x":109.52376681379974,"x1":-194.81429639272392,"x2":268.47243872471154,"yt":"random","y":-127.59337378665805,"y1":-233.1680856179446,"y2":230.85601744242013,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":14,"toy":-19,"toz":16,"p":291,"xt":"value","x":0,"x1":-204.17326553724706,"x2":150.75279432348907,"yt":"value","y":0,"y1":-136.3783092238009,"y2":280.799400806427,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeOut","time":0.61,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool85","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":85,"toy":57,"toz":56,"p":0,"xt":"random","x":105.35001517273486,"x1":-207.86630851216614,"x2":114.57167901098728,"yt":"value","y":155.44372438453138,"y1":-255.73289995081723,"y2":182.45252980850637,"rx":-720,"ry":-360,"rz":-360,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":-11,"toy":14,"toz":-5,"p":298,"xt":"value","x":0,"x1":-205.4780961945653,"x2":210.1883741095662,"yt":"value","y":0,"y1":-130.8302192017436,"y2":180.1370299886912,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quint.easeOut","time":0.64,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":8,"toy":11,"toz":16,"p":212,"xt":"value","x":0,"x1":-106.10130247659981,"x2":204.27025090903044,"yt":"value","y":0,"y1":-170.42743554338813,"y2":136.35290917009115,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.4,"stagger":0.05,"start_at":0.2}],"type":"in"},{"name":"cool86","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":85,"toy":92,"toz":-2,"p":0,"xt":"value","x":-210.7183431275189,"x1":-288.0528683774173,"x2":101.91198848187923,"yt":"value","y":-44.930323865264654,"y1":-128.46382348798215,"y2":227.8103016782552,"rx":0,"ry":-720,"rz":0,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":-12,"toy":-11,"toz":-20,"p":85,"xt":"value","x":0,"x1":-245.69392506964505,"x2":190.79990042373538,"yt":"value","y":0,"y1":-249.28708118386567,"y2":248.81126135587692,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quint.easeOut","time":0.69,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":8,"toy":-3,"toz":19,"p":227,"xt":"value","x":0,"x1":-296.90296766348183,"x2":176.19378515519202,"yt":"value","y":0,"y1":-251.3398427516222,"y2":109.27910348400474,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.23,"stagger":0.05,"start_at":0.03}],"type":"in"},{"name":"cool87","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":58,"toy":65,"toz":-63,"p":0,"xt":"value","x":184.45880790241063,"x1":-132.92724988423288,"x2":209.51419984921813,"yt":"random","y":-22.35496840439737,"y1":-239.75613717921078,"y2":291.1450390703976,"rx":0,"ry":-360,"rz":0,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":5,"toy":-19,"toz":-3,"p":44,"xt":"value","x":0,"x1":-257.6941669918597,"x2":263.7038904707879,"yt":"value","y":0,"y1":-104.38030404038727,"y2":205.91269358992577,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.55,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":"0.2","tox":-1,"toy":19,"toz":8,"p":"10","xt":"value","x":0,"x1":-154.33552502654493,"x2":214.95676743797958,"yt":"value","y":0,"y1":-198.062107199803,"y2":161.4494698587805,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.68,"stagger":0.05,"start_at":0.07},{"name":"Step 3","type":"animation","o":1,"tox":2,"toy":-13,"toz":11,"p":138,"xt":"value","x":0,"x1":-171.9078976660967,"x2":212.61025611311197,"yt":"value","y":0,"y1":-225.4836087115109,"y2":192.21156588755548,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.56,"stagger":0.05,"start_at":0.11}],"type":"in"},{"name":"cool88","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":27,"toy":22,"toz":-32,"p":0,"xt":"random","x":56.71893856488168,"x1":-286.73324482515454,"x2":119.56111048348248,"yt":"random","y":-33.43232721090317,"y1":-113.90054114162922,"y2":152.30706967413425,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.5141964156646281,"tox":-13,"toy":4,"toz":-12,"p":200,"xt":"value","x":0,"x1":-207.90346735157073,"x2":189.2082103062421,"yt":"value","y":0,"y1":-259.4861760735512,"y2":276.7345995642245,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.67,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":14,"toy":9,"toz":17,"p":46,"xt":"value","x":0,"x1":-177.40071476437151,"x2":121.26378403045237,"yt":"value","y":0,"y1":-278.1222513411194,"y2":274.45838088169694,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.52,"stagger":0.05,"start_at":0.46}],"type":"in"},{"name":"cool89","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":67,"toy":11,"toz":-6,"p":0,"xt":"random","x":-77.33908770605922,"x1":-205.175904603675,"x2":226.3495807070285,"yt":"random","y":-172.98662695102394,"y1":-170.78625541180372,"y2":138.83390626870096,"rx":-720,"ry":360,"rz":-360,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.34170340606942773,"tox":-9,"toy":-8,"toz":9,"p":218,"xt":"value","x":0,"x1":-257.6737484894693,"x2":119.15008132345974,"yt":"value","y":0,"y1":-159.43156275898218,"y2":191.261190129444,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.77,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":9,"toy":-9,"toz":9,"p":86,"xt":"value","x":0,"x1":-142.79136518016458,"x2":162.72046058438718,"yt":"value","y":0,"y1":-195.8915303926915,"y2":251.40529754571617,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.87,"stagger":0.05,"start_at":0.08}],"type":"in"},{"name":"cool90","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":63,"toy":16,"toz":93,"p":0,"xt":"value","x":260.07290594279766,"x1":-125.74211112223566,"x2":128.62718240357935,"yt":"random","y":48.83197406306863,"y1":-213.43933809548616,"y2":282.84357585944235,"rx":-360,"ry":-360,"rz":-720,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.5094747352413833,"tox":-14,"toy":-19,"toz":-20,"p":52,"xt":"value","x":0,"x1":-298.4932329505682,"x2":290.2294988743961,"yt":"value","y":0,"y1":-119.90426313132048,"y2":193.68343469686806,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Circ.easeOut","time":0.82,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":-6,"toy":-9,"toz":15,"p":239,"xt":"value","x":0,"x1":-147.83724192529917,"x2":272.59395299479365,"yt":"value","y":0,"y1":-254.03411868028343,"y2":151.62668889388442,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.69,"stagger":0.05,"start_at":0.35}],"type":"in"},{"name":"cool91","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":7,"toy":25,"toz":-20,"p":0,"xt":"random","x":-28.716855542734265,"x1":-280.7325952220708,"x2":270.6223501358181,"yt":"value","y":204.28091953508556,"y1":-118.06351519189775,"y2":269.4261309225112,"rx":360,"ry":360,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.7454779879190028,"tox":-5,"toy":2,"toz":-11,"p":171,"xt":"value","x":0,"x1":-217.5822749733925,"x2":284.0903846081346,"yt":"value","y":0,"y1":-137.88279248401523,"y2":198.0621261522174,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.54,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":-12,"toy":14,"toz":7,"p":67,"xt":"value","x":0,"x1":-225.24402919225395,"x2":206.59054992720485,"yt":"value","y":0,"y1":-296.9478343613446,"y2":271.43475473858416,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.67,"stagger":0.05,"start_at":0.27}],"type":"in"},{"name":"cool92","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":17,"toy":43,"toz":-38,"p":0,"xt":"random","x":-185.79805735498667,"x1":-177.1374601405114,"x2":146.92876948975027,"yt":"value","y":-167.50876223668456,"y1":-204.4556699693203,"y2":150.5759575869888,"rx":-720,"ry":0,"rz":-720,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.13594077760353684,"tox":18,"toy":-11,"toz":5,"p":51,"xt":"value","x":0,"x1":-223.98265758529305,"x2":234.5664621796459,"yt":"value","y":0,"y1":-156.71063996851444,"y2":137.73636925034225,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.67,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":-6,"toy":14,"toz":-19,"p":274,"xt":"value","x":0,"x1":-121.44537349231541,"x2":230.4276281967759,"yt":"value","y":0,"y1":-200.91273887082934,"y2":261.7670609150082,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.69,"stagger":0.05,"start_at":0.11}],"type":"in"},{"name":"cool93","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":41,"toy":39,"toz":-26,"p":0,"xt":"random","x":-240.55982655845582,"x1":-166.25195327214897,"x2":166.30392880178988,"yt":"value","y":248.47033862024546,"y1":-122.94234880246222,"y2":235.96124183386564,"rx":-720,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":7,"toy":0,"toz":-10,"p":78,"xt":"value","x":0,"x1":-265.67183281295,"x2":259.1224833857268,"yt":"value","y":0,"y1":-148.9407756831497,"y2":211.09797400422394,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.69,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool94","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":50,"toy":95,"toz":13,"p":0,"xt":"value","x":271.4702172204852,"x1":-160.26087878271937,"x2":168.6051273252815,"yt":"random","y":-221.24244687147439,"y1":-117.53246304579079,"y2":165.66159268841147,"rx":-720,"ry":0,"rz":-360,"sx":2,"sy":2,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":8,"toy":1,"toz":10,"p":92,"xt":"value","x":0,"x1":-138.0406846292317,"x2":231.36037355288863,"yt":"value","y":0,"y1":-285.76057171449065,"y2":195.63588476739824,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.63,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool95","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":92,"toy":38,"toz":-95,"p":0,"xt":"random","x":-262.7435057424009,"x1":-183.29180674627423,"x2":248.29676058143377,"yt":"value","y":129.93409875780344,"y1":-102.33553387224674,"y2":134.73318750038743,"rx":-360,"ry":-720,"rz":-720,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":7,"toy":15,"toz":1,"p":43,"xt":"value","x":0,"x1":-125.67100864835083,"x2":125.47343974001706,"yt":"value","y":0,"y1":-266.4969741832465,"y2":195.17385917715728,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.59,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool96","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":11,"toy":40,"toz":-76,"p":0,"xt":"random","x":-270.3846812713891,"x1":-184.2284264974296,"x2":211.43905925564468,"yt":"random","y":138.37048723362386,"y1":-296.1347836535424,"y2":199.53119377605617,"rx":-360,"ry":-360,"rz":360,"sx":4,"sy":4,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.21781779453158379,"tox":15,"toy":2,"toz":6,"p":63,"xt":"value","x":0,"x1":-143.1300197262317,"x2":229.12616962566972,"yt":"value","y":0,"y1":-190.63788391649723,"y2":199.2607010062784,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.81,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":15,"toy":-11,"toz":-11,"p":164,"xt":"value","x":0,"x1":-249.00673781521618,"x2":198.3206273522228,"yt":"value","y":0,"y1":-157.3415563441813,"y2":281.9103652611375,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.64,"stagger":0.05,"start_at":0.29}],"type":"in"},{"name":"cool97","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":7,"toy":23,"toz":-61,"p":0,"xt":"value","x":80.11825941503048,"x1":-249.8701454140246,"x2":124.1040201857686,"yt":"random","y":-94.0529678016901,"y1":-126.9982282537967,"y2":209.10405879840255,"rx":360,"ry":-360,"rz":0,"sx":3,"sy":3,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.6055871734861284,"tox":-2,"toy":-13,"toz":6,"p":131,"xt":"value","x":0,"x1":-145.01658361405134,"x2":146.53460271656513,"yt":"value","y":0,"y1":-150.74182827956975,"y2":170.31071367673576,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Elastic.easeOut","time":0.47,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":5,"toy":-16,"toz":-14,"p":226,"xt":"value","x":0,"x1":-201.08244619332254,"x2":125.91337007470429,"yt":"value","y":0,"y1":-201.62874697707593,"y2":253.36776389740407,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.81,"stagger":0.05,"start_at":0.01}],"type":"in"},{"name":"cool98","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":43,"toy":82,"toz":39,"p":0,"xt":"random","x":-202.9122910927981,"x1":-120.0381993316114,"x2":165.72495186701417,"yt":"value","y":-113.94739402458072,"y1":-100.79188467934728,"y2":142.99106430262327,"rx":360,"ry":-720,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.6773145876359195,"tox":-2,"toy":-7,"toz":13,"p":294,"xt":"value","x":0,"x1":-267.70950383506715,"x2":178.77832781523466,"yt":"value","y":0,"y1":-154.67599229887128,"y2":159.10339690744877,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.74,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":3,"toy":-9,"toz":7,"p":298,"xt":"value","x":0,"x1":-127.03896132297814,"x2":273.8732227589935,"yt":"value","y":0,"y1":-129.43372037261724,"y2":296.33422843180597,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.82,"stagger":0.05,"start_at":0.09}],"type":"in"},{"name":"cool99","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":12,"toy":3,"toz":61,"p":0,"xt":"random","x":100.84843137301505,"x1":-148.26619415543973,"x2":114.05984358862042,"yt":"random","y":-135.91792043298483,"y1":-266.1832076497376,"y2":161.02545033209026,"rx":-720,"ry":0,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.9259327200707048,"tox":-2,"toy":6,"toz":-18,"p":6,"xt":"value","x":0,"x1":-131.5635675098747,"x2":250.70748846046627,"yt":"value","y":0,"y1":-185.31310842372477,"y2":198.45715295523405,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.88,"stagger":0.05,"start_at":1}],"type":"in"},{"name":"cool100","steps":[{"name":"starting values","type":"starting_values","o":0,"tox":84,"toy":74,"toz":56,"p":0,"xt":"value","x":-299.06933535821736,"x1":-212.74200156331062,"x2":234.58580006845295,"yt":"random","y":-296.2620166596025,"y1":-100.45401891693473,"y2":199.5750111527741,"rx":-720,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.027179140830412507,"tox":-1,"toy":-17,"toz":-7,"p":211,"xt":"value","x":0,"x1":-149.20710949227214,"x2":168.44779020175338,"yt":"value","y":0,"y1":-224.79403032921255,"y2":168.79207040183246,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Strong.easeOut","time":0.6,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":3,"toy":6,"toz":15,"p":161,"xt":"value","x":0,"x1":-248.00394759513438,"x2":130.57080931030214,"yt":"value","y":0,"y1":-298.90703884884715,"y2":132.89799615740776,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.84,"stagger":0.05,"start_at":0.05}],"type":"in"},{"name":"cool101","steps":[{"type":"starting_values","o":1,"tox":1,"toy":80,"toz":-14,"p":110,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":64,"toy":52,"toz":-6,"p":268,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool102","steps":[{"type":"starting_values","o":1,"tox":61,"toy":74,"toz":33,"p":27,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":61,"toy":16,"toz":21,"p":185,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool103","steps":[{"type":"starting_values","o":1,"tox":0,"toy":73,"toz":0,"p":128,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":62,"toy":79,"toz":-14,"p":73,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Elastic.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool104","steps":[{"type":"starting_values","o":1,"tox":78,"toy":59,"toz":-22,"p":57,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":87,"toy":64,"toz":-17,"p":63,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool105","steps":[{"type":"starting_values","o":1,"tox":71,"toy":35,"toz":15,"p":316,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":61,"toy":76,"toz":-7,"p":57,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":42,"toy":64,"toz":-16,"p":75,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Strong.easeInOut","time":0.34,"stagger":0.05,"start_at":0.08}],"type":"mid"},{"name":"cool106","steps":[{"type":"starting_values","o":1,"tox":54,"toy":35,"toz":-14,"p":129,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":72,"toy":9,"toz":12,"p":179,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":49,"toy":97,"toz":3,"p":226,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.79,"stagger":0.05,"start_at":0.13},{"type":"animation","o":1,"tox":67,"toy":73,"toz":-46,"p":56,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.43,"stagger":0.05,"start_at":0.01}],"type":"mid"},{"name":"cool107","steps":[{"type":"starting_values","o":1,"tox":4,"toy":96,"toz":19,"p":251,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":22,"toy":77,"toz":-33,"p":52,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool108","steps":[{"type":"starting_values","o":1,"tox":37,"toy":97,"toz":-44,"p":85,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":63,"toy":65,"toz":-42,"p":203,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool109","steps":[{"type":"starting_values","o":1,"tox":91,"toy":81,"toz":-32,"p":226,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":22,"toy":97,"toz":-2,"p":37,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool110","steps":[{"type":"starting_values","o":1,"tox":90,"toy":94,"toz":31,"p":308,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":8,"toy":62,"toz":-18,"p":125,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":46,"toy":88,"toz":-46,"p":324,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.73,"stagger":0.05,"start_at":0.18},{"type":"animation","o":1,"tox":91,"toy":39,"toz":-8,"p":209,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.08,"stagger":0.05,"start_at":0.12}],"type":"mid"},{"name":"cool111","steps":[{"type":"starting_values","o":1,"tox":44,"toy":0,"toz":-4,"p":39,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":75,"toy":44,"toz":15,"p":224,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool112","steps":[{"type":"starting_values","o":1,"tox":89,"toy":20,"toz":46,"p":39,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":85,"toy":17,"toz":-14,"p":290,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":0.9559255582280457,"sy":0.9559255582280457,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":94,"toy":92,"toz":0,"p":230,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.24,"stagger":0.05,"start_at":0.41}],"type":"mid"},{"name":"cool113","steps":[{"type":"starting_values","o":1,"tox":73,"toy":88,"toz":-48,"p":215,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":0,"toy":88,"toz":-7,"p":314,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":0.2557309507392347,"sy":0.2557309507392347,"e":"Bounce.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":5,"toy":85,"toz":14,"p":71,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.3,"stagger":0.05,"start_at":0.4},{"type":"animation","o":1,"tox":16,"toy":10,"toz":-19,"p":316,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.65,"stagger":0.05,"start_at":0.19}],"type":"mid"},{"name":"cool114","steps":[{"type":"starting_values","o":1,"tox":58,"toy":38,"toz":-13,"p":34,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":21,"toy":81,"toz":12,"p":324,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1.0899407174438238,"sy":1.0899407174438238,"e":"Quart.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":80,"toy":39,"toz":-24,"p":85,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.8,"stagger":0.05,"start_at":0.3}],"type":"mid"},{"name":"cool115","steps":[{"type":"starting_values","o":1,"tox":64,"toy":64,"toz":44,"p":35,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":22,"toy":32,"toz":15,"p":219,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool116","steps":[{"type":"starting_values","o":1,"tox":68,"toy":49,"toz":22,"p":271,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":98,"toy":64,"toz":40,"p":261,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool117","steps":[{"type":"starting_values","o":1,"tox":92,"toy":17,"toz":3,"p":229,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":47,"toy":23,"toz":-6,"p":150,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Strong.easeInOut","time":0.1,"stagger":0.05,"start_at":0.26}],"type":"mid"},{"name":"cool118","steps":[{"type":"starting_values","o":1,"tox":59,"toy":38,"toz":-14,"p":299,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":"67","toy":"12","toz":"-25","p":251,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":0.16465133288875222,"sy":0.16465133288875222,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":67,"toy":12,"toz":-25,"p":290,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.62,"stagger":0.05,"start_at":0.26}],"type":"mid"},{"name":"cool119","steps":[{"type":"starting_values","o":1,"tox":36,"toy":19,"toz":84,"p":179,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":45,"toy":81,"toz":28,"p":107,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool120","steps":[{"type":"starting_values","o":1,"tox":81,"toy":49,"toz":42,"p":288,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":21,"toy":35,"toz":7,"p":"50","xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool121","steps":[{"type":"starting_values","o":1,"tox":29,"toy":41,"toz":29,"p":17,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":72,"toy":17,"toz":8,"p":76,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool122","steps":[{"type":"starting_values","o":1,"tox":85,"toy":17,"toz":93,"p":154,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":44,"toy":92,"toz":-93,"p":246,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool123","steps":[{"type":"starting_values","o":1,"tox":66,"toy":20,"toz":27,"p":238,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":2,"toy":29,"toz":18,"p":294,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool124","steps":[{"type":"starting_values","o":1,"tox":79,"toy":36,"toz":49,"p":185,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":2,"toy":98,"toz":-77,"p":188,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool125","steps":[{"type":"starting_values","o":1,"tox":34,"toy":19,"toz":69,"p":210,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":15,"toy":98,"toz":65,"p":283,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quint.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool126","steps":[{"type":"starting_values","o":1,"tox":7,"toy":72,"toz":61,"p":12,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":23,"toy":69,"toz":-5,"p":16,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Strong.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool127","steps":[{"type":"starting_values","o":1,"tox":23,"toy":41,"toz":-35,"p":193,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":62,"toy":11,"toz":1,"p":187,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":84,"toy":34,"toz":13,"p":148,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.23,"stagger":0.05,"start_at":0.02}],"type":"mid"},{"name":"cool128","steps":[{"type":"starting_values","o":1,"tox":90,"toy":69,"toz":-9,"p":258,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":21,"toy":39,"toz":"10","p":"100","xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool129","steps":[{"type":"starting_values","o":1,"tox":47,"toy":21,"toz":-5,"p":170,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":75,"toy":11,"toz":9,"p":299,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":63,"toy":67,"toz":-38,"p":165,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":0.19}],"type":"mid"},{"name":"cool130","steps":[{"type":"starting_values","o":1,"tox":71,"toy":35,"toz":39,"p":75,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":32,"toy":6,"toz":-20,"p":112,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":9,"toy":34,"toz":-28,"p":91,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Bounce.easeInOut","time":0.79,"stagger":0.05,"start_at":0.13}],"type":"mid"},{"name":"cool131","steps":[{"type":"starting_values","o":1,"tox":73,"toy":66,"toz":81,"p":250,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":84,"toy":0,"toz":-55,"p":102,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool132","steps":[{"type":"starting_values","o":1,"tox":11,"toy":50,"toz":43,"p":146,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":19,"toy":64,"toz":-1,"p":262,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool133","steps":[{"type":"starting_values","o":1,"tox":10,"toy":91,"toz":-35,"p":50,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":38,"toy":65,"toz":-9,"p":197,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool134","steps":[{"type":"starting_values","o":1,"tox":50,"toy":76,"toz":-3,"p":77,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":61,"toy":10,"toz":-43,"p":215,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":49,"toy":22,"toz":-2,"p":134,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.08}],"type":"mid"},{"name":"cool135","steps":[{"type":"starting_values","o":1,"tox":1,"toy":3,"toz":26,"p":289,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":10,"toy":94,"toz":27,"p":149,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool136","steps":[{"type":"starting_values","o":1,"tox":41,"toy":38,"toz":-45,"p":276,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":94,"toy":18,"toz":5,"p":101,"xt":"random","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":93,"toy":60,"toz":14,"p":216,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.75,"stagger":0.05,"start_at":0.03}],"type":"mid"},{"name":"cool137","steps":[{"type":"starting_values","o":1,"tox":58,"toy":99,"toz":49,"p":164,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":32,"toy":11,"toz":39,"p":18,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool138","steps":[{"type":"starting_values","o":1,"tox":20,"toy":1,"toz":23,"p":186,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":68,"toy":61,"toz":-38,"p":258,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool139","steps":[{"type":"starting_values","o":1,"tox":78,"toy":14,"toz":-38,"p":36,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":3,"toy":92,"toz":-90,"p":293,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quart.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool140","steps":[{"type":"starting_values","o":1,"tox":50,"toy":46,"toz":9,"p":265,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":46,"toy":77,"toz":-10,"p":218,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool141","steps":[{"type":"starting_values","o":1,"tox":28,"toy":76,"toz":-7,"p":105,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":34,"toy":6,"toz":-25,"p":122,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":1.8543535321950912,"sy":1.8543535321950912,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":33,"toy":32,"toz":13,"p":33,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.46,"stagger":0.05,"start_at":0.01},{"type":"animation","o":1,"tox":95,"toy":69,"toz":13,"p":212,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.21,"stagger":0.05,"start_at":0.25}],"type":"mid"},{"name":"cool142","steps":[{"type":"starting_values","o":1,"tox":80,"toy":39,"toz":44,"p":273,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":47,"toy":73,"toz":17,"p":64,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool143","steps":[{"type":"starting_values","o":1,"tox":38,"toy":72,"toz":-16,"p":205,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":85,"toy":35,"toz":-39,"p":303,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Strong.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":12,"toy":35,"toz":-32,"p":93,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.22,"stagger":0.05,"start_at":0.41}],"type":"mid"},{"name":"cool144","steps":[{"type":"starting_values","o":1,"tox":45,"toy":83,"toz":40,"p":236,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":45,"toy":66,"toz":5,"p":109,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool145","steps":[{"type":"starting_values","o":1,"tox":3,"toy":17,"toz":-22,"p":34,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":23,"toy":43,"toz":"10","p":322,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":1.233297063037753,"sy":1.233297063037753,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":48,"toy":6,"toz":"-17","p":142,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.19,"stagger":0.05,"start_at":0.15}],"type":"mid"},{"name":"cool146","steps":[{"type":"starting_values","o":1,"tox":2,"toy":7,"toz":26,"p":174,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":53,"toy":96,"toz":"5","p":102,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":0.3865296137519181,"sy":0.3865296137519181,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":41,"toy":39,"toz":"-10","p":"80","xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.53,"stagger":0.05,"start_at":0.19}],"type":"mid"},{"name":"cool147","steps":[{"type":"starting_values","o":1,"tox":96,"toy":68,"toz":-26,"p":233,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":18,"toy":28,"toz":-20,"p":158,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1.9980962849222124,"sy":1.9980962849222124,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":98,"toy":35,"toz":-20,"p":199,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.74,"stagger":0.05,"start_at":0.14},{"type":"animation","o":1,"tox":1,"toy":49,"toz":-10,"p":262,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.53,"stagger":0.05,"start_at":0}],"type":"mid"},{"name":"cool148","steps":[{"type":"starting_values","o":1,"tox":66,"toy":33,"toz":82,"p":209,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":70,"toy":45,"toz":-5,"p":277,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool149","steps":[{"type":"starting_values","o":1,"tox":62,"toy":74,"toz":23,"p":248,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":98,"toy":66,"toz":9,"p":54,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Strong.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool150","steps":[{"type":"starting_values","o":1,"tox":96,"toy":4,"toz":-98,"p":66,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":54,"toy":49,"toz":17,"p":200,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool151","steps":[{"type":"starting_values","o":1,"tox":86,"toy":27,"toz":-69,"p":112,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":58,"toy":13,"toz":"-20","p":43,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool152","steps":[{"type":"starting_values","o":1,"tox":30,"toy":73,"toz":-50,"p":202,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":51,"toy":35,"toz":-30,"p":134,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1.2714805421419442,"sy":1.2714805421419442,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":74,"toy":27,"toz":-35,"p":93,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.2,"stagger":0.05,"start_at":0.13},{"type":"animation","o":1,"tox":46,"toy":15,"toz":-12,"p":323,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.4,"stagger":0.05,"start_at":0.18}],"type":"mid"},{"name":"cool153","steps":[{"type":"starting_values","o":1,"tox":15,"toy":70,"toz":21,"p":290,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":57,"toy":96,"toz":3,"p":291,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool154","steps":[{"type":"starting_values","o":1,"tox":32,"toy":60,"toz":56,"p":77,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":85,"toy":35,"toz":35,"p":234,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool155","steps":[{"type":"starting_values","o":1,"tox":34,"toy":34,"toz":38,"p":98,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":41,"toy":28,"toz":46,"p":53,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"random","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Bounce.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":30,"toy":58,"toz":14,"p":98,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Bounce.easeInOut","time":0.31,"stagger":0.05,"start_at":0.32}],"type":"mid"},{"name":"cool156","steps":[{"type":"starting_values","o":1,"tox":6,"toy":44,"toz":-84,"p":96,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":15,"toy":93,"toz":-13,"p":165,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quint.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool157","steps":[{"type":"starting_values","o":1,"tox":93,"toy":60,"toz":-47,"p":214,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":29,"toy":7,"toz":-14,"p":207,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":0.8459407528862357,"sy":0.8459407528862357,"e":"Strong.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":29,"toy":37,"toz":-10,"p":89,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Strong.easeInOut","time":0.24,"stagger":0.05,"start_at":0.32}],"type":"mid"},{"name":"cool158","steps":[{"type":"starting_values","o":1,"tox":51,"toy":51,"toz":22,"p":125,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":41,"toy":55,"toz":13,"p":156,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":0.06856456398963928,"sy":0.06856456398963928,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":93,"toy":83,"toz":-2,"p":124,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Strong.easeInOut","time":0.56,"stagger":0.05,"start_at":0.08},{"type":"animation","o":1,"tox":22,"toy":70,"toz":-31,"p":324,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.78,"stagger":0.05,"start_at":0.32}],"type":"mid"},{"name":"cool159","steps":[{"type":"starting_values","o":1,"tox":26,"toy":84,"toz":47,"p":287,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":44,"toy":36,"toz":-37,"p":138,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":0.2556766737252474,"sy":0.2556766737252474,"e":"Elastic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":"44","toy":"36","toz":"-37","p":199,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.52,"stagger":0.05,"start_at":0.42}],"type":"mid"},{"name":"cool160","steps":[{"type":"starting_values","o":1,"tox":34,"toy":56,"toz":-22,"p":53,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":18,"toy":73,"toz":-2,"p":196,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool161","steps":[{"type":"starting_values","o":1,"tox":75,"toy":26,"toz":-48,"p":119,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":6,"toy":33,"toz":-56,"p":82,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool162","steps":[{"type":"starting_values","o":1,"tox":19,"toy":56,"toz":67,"p":36,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":3,"toy":55,"toz":-98,"p":53,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool163","steps":[{"type":"starting_values","o":1,"tox":31,"toy":80,"toz":42,"p":290,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":15,"toy":5,"toz":-15,"p":217,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1.6714415033347905,"sy":1.6714415033347905,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":73,"toy":55,"toz":"20","p":197,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.69,"stagger":0.05,"start_at":0.17}],"type":"mid"},{"name":"cool164","steps":[{"type":"starting_values","o":1,"tox":53,"toy":27,"toz":31,"p":67,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":74,"toy":70,"toz":-24,"p":236,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":0.8875980381853878,"sy":0.8875980381853878,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":89,"toy":69,"toz":-42,"p":322,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.71,"stagger":0.05,"start_at":0.21}],"type":"mid"},{"name":"cool165","steps":[{"type":"starting_values","o":1,"tox":11,"toy":55,"toz":77,"p":209,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":27,"toy":53,"toz":-10,"p":241,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Back.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool166","steps":[{"type":"starting_values","o":1,"tox":15,"toy":42,"toz":-20,"p":289,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":32,"toy":18,"toz":6,"p":239,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":1.033370087388903,"sy":1.033370087388903,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":96,"toy":63,"toz":47,"p":328,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.38,"stagger":0.05,"start_at":0.38}],"type":"mid"},{"name":"cool167","steps":[{"type":"starting_values","o":1,"tox":89,"toy":69,"toz":99,"p":164,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":6,"toy":64,"toz":-1,"p":269,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool168","steps":[{"type":"starting_values","o":1,"tox":2,"toy":8,"toz":-49,"p":157,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":48,"toy":26,"toz":-50,"p":200,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":29,"toy":76,"toz":-43,"p":263,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.66,"stagger":0.05,"start_at":0.09},{"type":"animation","o":1,"tox":60,"toy":53,"toz":-36,"p":146,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.42,"stagger":0.05,"start_at":0.22}],"type":"mid"},{"name":"cool169","steps":[{"type":"starting_values","o":1,"tox":95,"toy":20,"toz":-13,"p":92,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":52,"toy":62,"toz":-48,"p":115,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":0.4857794251292944,"sy":0.4857794251292944,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":91,"toy":45,"toz":-15,"p":194,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":0.11}],"type":"mid"},{"name":"cool170","steps":[{"type":"starting_values","o":1,"tox":51,"toy":47,"toz":-36,"p":66,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":76,"toy":44,"toz":-17,"p":313,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":55,"toy":81,"toz":40,"p":195,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.27,"stagger":0.05,"start_at":0.28}],"type":"mid"},{"name":"cool171","steps":[{"type":"starting_values","o":1,"tox":21,"toy":53,"toz":-24,"p":252,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":37,"toy":44,"toz":-39,"p":212,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":null,"sy":null,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":20,"toy":13,"toz":34,"p":85,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.45,"stagger":0.05,"start_at":0.48}],"type":"mid"},{"name":"cool172","steps":[{"type":"starting_values","o":1,"tox":31,"toy":54,"toz":53,"p":85,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":97,"toy":89,"toz":-14,"p":293,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Elastic.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool173","steps":[{"type":"starting_values","o":1,"tox":12,"toy":85,"toz":18,"p":36,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":18,"toy":75,"toz":-9,"p":291,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool174","steps":[{"type":"starting_values","o":1,"tox":3,"toy":17,"toz":44,"p":134,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":40,"toy":52,"toz":-35,"p":111,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool175","steps":[{"type":"starting_values","o":1,"tox":83,"toy":20,"toz":-32,"p":188,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":67,"toy":3,"toz":-29,"p":247,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":null,"sy":null,"e":"Quint.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":89,"toy":12,"toz":-4,"p":193,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.6,"stagger":0.05,"start_at":0.05}],"type":"mid"},{"name":"cool176","steps":[{"type":"starting_values","o":1,"tox":35,"toy":45,"toz":-13,"p":248,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":36,"toy":24,"toz":39,"p":229,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool177","steps":[{"type":"starting_values","o":1,"tox":90,"toy":12,"toz":48,"p":30,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":34,"toy":11,"toz":16,"p":36,"xt":"random","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":1,"tox":87,"toy":52,"toz":-28,"p":303,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.56,"stagger":0.05,"start_at":0.13}],"type":"mid"},{"name":"cool178","steps":[{"type":"starting_values","o":1,"tox":45,"toy":16,"toz":56,"p":220,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":72,"toy":74,"toz":-85,"p":13,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Strong.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool179","steps":[{"type":"starting_values","o":1,"tox":64,"toy":40,"toz":38,"p":174,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":23,"toy":52,"toz":-39,"p":230,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Strong.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool180","steps":[{"type":"starting_values","o":1,"tox":63,"toy":99,"toz":43,"p":75,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":59,"toy":42,"toz":-1,"p":34,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool181","steps":[{"type":"starting_values","o":1,"tox":22,"toy":83,"toz":43,"p":204,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":82,"toy":40,"toz":13,"p":203,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool182","steps":[{"type":"starting_values","o":1,"tox":30,"toy":77,"toz":-76,"p":130,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":22,"toy":42,"toz":-22,"p":76,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quart.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool183","steps":[{"type":"starting_values","o":1,"tox":75,"toy":2,"toz":-36,"p":187,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":43,"toy":2,"toz":1,"p":168,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":0.49}],"type":"mid"},{"name":"cool184","steps":[{"type":"starting_values","o":1,"tox":43,"toy":81,"toz":30,"p":239,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":2,"toy":78,"toz":-62,"p":51,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool185","steps":[{"type":"starting_values","o":1,"tox":99,"toy":36,"toz":-25,"p":77,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":1,"tox":49,"toy":28,"toz":-26,"p":290,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool186","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":65,"toy":67,"toz":33,"p":163,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":56,"toy":23,"toz":35,"p":207,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":0,"sx":1.8384372191503644,"sy":1.8384372191503644,"e":"Quint.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":3,"toy":42,"toz":-46,"p":179,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.66,"stagger":0.05,"start_at":0.09}],"type":"mid"},{"name":"cool187","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":16,"toy":78,"toz":-10,"p":219,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-720,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.8298353494610637,"tox":90,"toy":65,"toz":4,"p":88,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":0.02666426682844758,"sy":0.02666426682844758,"e":"Cubic.easeInOut","time":0.81,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":79,"toy":53,"toz":34,"p":258,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.24,"stagger":0.05,"start_at":0.35}],"type":"mid"},{"name":"cool188","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":80,"toy":84,"toz":6,"p":77,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":67,"toy":53,"toz":4,"p":34,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Bounce.easeInOut","time":0.71,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool189","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":89,"toy":2,"toz":0,"p":150,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":76,"toy":66,"toz":0,"p":303,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.71,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool190","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":37,"toy":54,"toz":21,"p":153,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":12,"toy":99,"toz":-27,"p":88,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.9,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool191","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":39,"toy":53,"toz":31,"p":112,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.2346904631704092,"tox":27,"toy":98,"toz":49,"p":176,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":1.2543306942097843,"sy":1.2543306942097843,"e":"Back.easeInOut","time":0.73,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":59,"toy":28,"toz":5,"p":41,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.81,"stagger":0.05,"start_at":0}],"type":"mid"},{"name":"cool192","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":32,"toy":15,"toz":35,"p":257,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-720,"ry":0,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.46562061458826065,"tox":6,"toy":4,"toz":44,"p":196,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":0.3586016301997006,"sy":0.3586016301997006,"e":"Circ.easeInOut","time":0.85,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":18,"toy":82,"toz":-43,"p":210,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.8,"stagger":0.05,"start_at":0.2}],"type":"mid"},{"name":"cool193","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":30,"toy":23,"toz":40,"p":167,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":360,"ry":-720,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.24956040806137025,"tox":42,"toy":67,"toz":-6,"p":309,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":0.6850892622023821,"sy":0.6850892622023821,"e":"Bounce.easeInOut","time":0.43,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":30,"toy":58,"toz":5,"p":49,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.26,"stagger":0.05,"start_at":0.3}],"type":"mid"},{"name":"cool194","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":51,"toy":29,"toz":33,"p":62,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-720,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.5833972822874784,"tox":35,"toy":45,"toz":2,"p":155,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":1.0020411652512848,"sy":1.0020411652512848,"e":"Bounce.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":17,"toy":24,"toz":-29,"p":141,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.49,"stagger":0.05,"start_at":0.17}],"type":"mid"},{"name":"cool195","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":93,"toy":12,"toz":39,"p":154,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":-360,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.7021250785328448,"tox":67,"toy":62,"toz":-17,"p":38,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":0,"sx":0.5351029033772647,"sy":0.5351029033772647,"e":"Cubic.easeInOut","time":0.21,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":99,"toy":35,"toz":0,"p":272,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.36,"stagger":0.05,"start_at":0.06}],"type":"mid"},{"name":"cool196","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":41,"toy":97,"toz":3,"p":297,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.8315967486705631,"tox":28,"toy":19,"toz":15,"p":71,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":0.2802159124985337,"sy":0.2802159124985337,"e":"Quad.easeInOut","time":0.55,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":39,"toy":45,"toz":9,"p":81,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.42,"stagger":0.05,"start_at":0.25}],"type":"mid"},{"name":"cool197","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":93,"toy":99,"toz":27,"p":249,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-360,"ry":-720,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.3359523848630488,"tox":57,"toy":32,"toz":-8,"p":69,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":0,"ry":0,"rz":0,"sx":0.521027350332588,"sy":0.521027350332588,"e":"Quart.easeInOut","time":0.23,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":80,"toy":9,"toz":-5,"p":51,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.66,"stagger":0.05,"start_at":0.06}],"type":"mid"},{"name":"cool198","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":18,"toy":12,"toz":-7,"p":55,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":360,"ry":0,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":1,"tox":71,"toy":90,"toz":-20,"p":35,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"mid"},{"name":"cool199","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":91,"toy":0,"toz":10,"p":251,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":-720,"ry":-720,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.7543234811164439,"tox":4,"toy":34,"toz":-42,"p":328,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":0,"sx":0.4806697010062635,"sy":0.4806697010062635,"e":"Cubic.easeInOut","time":0.53,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":74,"toy":52,"toz":16,"p":158,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.88,"stagger":0.05,"start_at":0.03}],"type":"mid"},{"name":"cool200","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":87,"toy":86,"toz":42,"p":137,"xt":"value","x":0,"x1":-70,"x2":70,"yt":"value","y":0,"y1":-70,"y2":70,"rx":0,"ry":0,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.4691127350088209,"tox":59,"toy":43,"toz":-42,"p":164,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":0.22797948215156794,"sy":0.22797948215156794,"e":"Quad.easeInOut","time":0.68,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":1,"tox":96,"toy":41,"toz":26,"p":141,"xt":"value","x":0,"x1":-30,"x2":30,"yt":"value","y":0,"y1":-30,"y2":30,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.68,"stagger":0.05,"start_at":0.25}],"type":"mid"},{"name":"cool201","steps":[{"type":"starting_values","o":1,"tox":81,"toy":77,"toz":-96,"p":109,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.326916326303035,"tox":38,"toy":34,"toz":-79,"p":248,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-720,"ry":-720,"rz":360,"sx":0,"sy":0,"e":"Strong.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0.983178076101467,"tox":67,"toy":73,"toz":-29,"p":100,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.1,"stagger":0.05,"start_at":0.13},{"type":"animation","o":0,"tox":52,"toy":23,"toz":14,"p":38,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":360,"sx":0,"sy":0,"e":"Cubic.easeInOut","time":0.5,"stagger":0.05,"start_at":0.06}],"type":"out"},{"name":"cool202","steps":[{"type":"starting_values","o":1,"tox":33,"toy":18,"toz":1,"p":210,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.4080266954842955,"tox":39,"toy":58,"toz":24,"p":72,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":3,"sy":3,"e":"Strong.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0.9222586476244032,"tox":60,"toy":55,"toz":-77,"p":23,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":2,"sy":2,"e":"Quint.easeInOut","time":0.45,"stagger":0.05,"start_at":0.05},{"type":"animation","o":0,"tox":97,"toy":5,"toz":-33,"p":221,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":4,"sy":4,"e":"Quad.easeInOut","time":0.71,"stagger":0.05,"start_at":0.25}],"type":"out"},{"name":"cool203","steps":[{"type":"starting_values","o":1,"tox":51,"toy":74,"toz":-54,"p":142,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.5733394140843302,"tox":94,"toy":59,"toz":-58,"p":76,"xt":"value","x":24.005505521781743,"x1":-50,"x2":50,"yt":"value","y":1.3186351954936981,"y1":-50,"y2":50,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0,"tox":37,"toy":29,"toz":-16,"p":29,"xt":"value","x":-29.229321875609457,"x1":-50,"x2":50,"yt":"value","y":-7.75309014134109,"y1":-50,"y2":50,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Back.easeInOut","time":0.58,"stagger":0.05,"start_at":0.16}],"type":"out"},{"name":"cool204","steps":[{"type":"starting_values","o":1,"tox":24,"toy":60,"toz":37,"p":250,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":"0.2","tox":25,"toy":40,"toz":3,"p":222,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0,"tox":40,"toy":97,"toz":-71,"p":132,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Back.easeIn","time":0.7,"stagger":0.05,"start_at":0.24}],"type":"out"},{"name":"cool205","steps":[{"type":"starting_values","o":1,"tox":91,"toy":37,"toz":-3,"p":64,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":38,"toy":52,"toz":-71,"p":73,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":4,"sy":4,"e":"Expo.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool206","steps":[{"type":"starting_values","o":1,"tox":15,"toy":16,"toz":-59,"p":172,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":31,"toy":52,"toz":-71,"p":53,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":4,"sy":4,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool207","steps":[{"type":"starting_values","o":1,"tox":59,"toy":30,"toz":-26,"p":30,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":64,"toy":45,"toz":-91,"p":221,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":4,"sy":4,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool208","steps":[{"type":"starting_values","o":1,"tox":0,"toy":42,"toz":-75,"p":254,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":75,"toy":93,"toz":34,"p":162,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":3,"sy":3,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool209","steps":[{"type":"starting_values","o":1,"tox":47,"toy":20,"toz":90,"p":56,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":41,"toy":37,"toz":-5,"p":13,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool210","steps":[{"type":"starting_values","o":1,"tox":45,"toy":48,"toz":-45,"p":114,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":34,"toy":47,"toz":-5,"p":280,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":3,"sy":3,"e":"Quart.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool211","steps":[{"type":"starting_values","o":1,"tox":73,"toy":0,"toz":-90,"p":132,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.25646415865048766,"tox":82,"toy":45,"toz":-60,"p":55,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0.9798160023055971,"tox":78,"toy":98,"toz":-72,"p":185,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.2},{"type":"animation","o":0,"tox":58,"toy":89,"toz":42,"p":169,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Strong.easeInOut","time":0.7,"stagger":0.05,"start_at":0.5}],"type":"out"},{"name":"cool212","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":11,"toy":2,"toz":47,"p":282,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.40547288092784584,"tox":96,"toy":75,"toz":-105,"p":-152,"xt":"value","x":29.68216398730874,"x1":-221.06445827521384,"x2":238.201090041548,"yt":"value","y":-0.8678426407277584,"y1":-121.34034768678248,"y2":204.9175095744431,"rx":-720,"ry":-360,"rz":360,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.83,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":14,"toy":23,"toz":-63,"p":45,"xt":"value","x":-6.72433405648917,"x1":-196.8529704026878,"x2":159.3512455932796,"yt":"value","y":-4.053605594672263,"y1":-249.26793342456222,"y2":224.01931094937027,"rx":360,"ry":0,"rz":360,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.49,"stagger":0.05,"start_at":0.28}],"type":"out"},{"name":"cool213","steps":[{"type":"starting_values","o":1,"tox":84,"toy":14,"toz":-63,"p":40,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.9129063258878887,"tox":73,"toy":98,"toz":-41,"p":151,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool214","steps":[{"type":"starting_values","o":1,"tox":98,"toy":74,"toz":-42,"p":149,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":78,"toy":80,"toz":-55,"p":203,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":2,"sy":2,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool215","steps":[{"type":"starting_values","o":1,"tox":44,"toy":84,"toz":56,"p":184,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":77,"toy":78,"toz":-31,"p":22,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":4,"sy":4,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool216","steps":[{"type":"starting_values","o":1,"tox":71,"toy":33,"toz":65,"p":104,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":6,"toy":83,"toz":41,"p":281,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":4,"sy":4,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool217","steps":[{"type":"starting_values","o":1,"tox":37,"toy":14,"toz":-13,"p":209,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":81,"toy":67,"toz":59,"p":173,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool218","steps":[{"type":"starting_values","o":1,"tox":3,"toy":31,"toz":-99,"p":236,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.18516990239731967,"tox":41,"toy":63,"toz":40,"p":83,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":4,"sy":4,"e":"Bounce.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0,"tox":5,"toy":45,"toz":-74,"p":51,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":0.05}],"type":"out"},{"name":"cool219","steps":[{"type":"starting_values","o":1,"tox":96,"toy":2,"toz":-88,"p":174,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":20,"toy":35,"toz":86,"p":70,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool220","steps":[{"type":"starting_values","o":1,"tox":55,"toy":45,"toz":70,"p":76,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":65,"toy":87,"toz":-63,"p":14,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Back.easeIn","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool221","steps":[{"type":"starting_values","o":1,"tox":52,"toy":88,"toz":28,"p":121,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":77,"toy":22,"toz":-98,"p":223,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool222","steps":[{"type":"starting_values","o":1,"tox":82,"toy":7,"toz":89,"p":88,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":58,"toy":96,"toz":13,"p":283,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool223","steps":[{"type":"starting_values","o":1,"tox":65,"toy":81,"toz":-34,"p":94,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":17,"toy":11,"toz":75,"p":225,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool224","steps":[{"type":"starting_values","o":1,"tox":0,"toy":24,"toz":31,"p":147,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.7196003366261721,"tox":30,"toy":65,"toz":-32,"p":100,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":"0","tox":68,"toy":64,"toz":-3,"p":199,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.12}],"type":"out"},{"name":"cool225","steps":[{"type":"starting_values","o":1,"tox":39,"toy":91,"toz":-73,"p":247,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":34,"toy":58,"toz":-12,"p":287,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":3,"sy":3,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool226","steps":[{"type":"starting_values","o":1,"tox":44,"toy":49,"toz":73,"p":20,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":2,"toy":86,"toz":-93,"p":297,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":4,"sy":4,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool227","steps":[{"type":"starting_values","o":1,"tox":43,"toy":82,"toz":-6,"p":69,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.3231170969083905,"tox":17,"toy":40,"toz":-16,"p":18,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":"0","tox":0,"toy":95,"toz":-53,"p":253,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.72,"stagger":0.05,"start_at":0.2}],"type":"out"},{"name":"cool228","steps":[{"type":"starting_values","o":1,"tox":48,"toy":21,"toz":9,"p":29,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":72,"toy":81,"toz":-86,"p":32,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":3,"sy":3,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool229","steps":[{"type":"starting_values","o":1,"tox":50,"toy":70,"toz":-87,"p":47,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":15,"toy":62,"toz":9,"p":239,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool230","steps":[{"type":"starting_values","o":1,"tox":41,"toy":45,"toz":-25,"p":102,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":42,"toy":30,"toz":7,"p":31,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":2,"sy":2,"e":"Sine.easeIn","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool231","steps":[{"type":"starting_values","o":1,"tox":25,"toy":51,"toz":60,"p":59,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":87,"toy":80,"toz":-35,"p":292,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":3,"sy":3,"e":"Quad.easeIn","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool232","steps":[{"type":"starting_values","o":1,"tox":25,"toy":55,"toz":-24,"p":152,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":19,"toy":51,"toz":-71,"p":212,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool233","steps":[{"type":"starting_values","o":1,"tox":87,"toy":98,"toz":62,"p":12,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":"0.2","tox":11,"toy":70,"toz":-11,"p":283,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":4,"sy":4,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0,"tox":70,"toy":39,"toz":-79,"p":83,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":3,"sy":3,"e":"Quart.easeInOut","time":0.7,"stagger":0.05,"start_at":0.24}],"type":"out"},{"name":"cool234","steps":[{"type":"starting_values","o":1,"tox":31,"toy":98,"toz":-79,"p":281,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.911771462066099,"tox":5,"toy":65,"toz":-27,"p":144,"xt":"value","x":0,"x1":-50,"x2":50,"yt":"random","y":0,"y1":-50,"y2":50,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0,"tox":68,"toy":38,"toz":-14,"p":176,"xt":"value","x":0,"x1":-50,"x2":50,"yt":"random","y":0,"y1":-50,"y2":50,"rx":0,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Quint.easeInOut","time":0.67,"stagger":0.05,"start_at":0.22}],"type":"out"},{"name":"cool235","steps":[{"type":"starting_values","o":1,"tox":34,"toy":36,"toz":33,"p":253,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":74,"toy":56,"toz":-61,"p":256,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":2,"sy":2,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool236","steps":[{"type":"starting_values","o":1,"tox":27,"toy":40,"toz":25,"p":72,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":720,"ry":-720,"rz":-1080,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":27,"toy":77,"toz":-15,"p":106,"xt":"random","x":0,"x1":-50,"x2":50,"yt":"value","y":0,"y1":-50,"y2":50,"rx":720,"ry":0,"rz":-720,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool237","steps":[{"type":"starting_values","o":1,"tox":25,"toy":5,"toz":-20,"p":289,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":7,"toy":36,"toz":-7,"p":14,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":3,"sy":3,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool238","steps":[{"type":"starting_values","o":1,"tox":87,"toy":77,"toz":-5,"p":135,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.5764793639536947,"tox":47,"toy":66,"toz":3,"p":53,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":3,"sy":3,"e":"Expo.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0,"tox":24,"toy":55,"toz":13,"p":192,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.37,"stagger":0.05,"start_at":0.18}],"type":"out"},{"name":"cool239","steps":[{"type":"starting_values","o":1,"tox":67,"toy":92,"toz":-87,"p":30,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.07331918925046921,"tox":79,"toy":36,"toz":12,"p":125,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Expo.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0.7229468480218202,"tox":39,"toy":6,"toz":46,"p":92,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.57,"stagger":0.05,"start_at":0.09}],"type":"out"},{"name":"cool240","steps":[{"type":"starting_values","o":1,"tox":14,"toy":38,"toz":74,"p":32,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":82,"toy":31,"toz":-1,"p":30,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quad.easeIn","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool241","steps":[{"type":"starting_values","o":1,"tox":33,"toy":94,"toz":-87,"p":131,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.8595556109212339,"tox":29,"toy":24,"toz":-59,"p":89,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-720,"ry":0,"rz":-720,"sx":0,"sy":0,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0,"tox":84,"toy":6,"toz":-14,"p":62,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":360,"rz":0,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.77,"stagger":0.05,"start_at":0.29}],"type":"out"},{"name":"cool242","steps":[{"type":"starting_values","o":1,"tox":40,"toy":94,"toz":-89,"p":287,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.8217753856442869,"tox":48,"toy":11,"toz":3,"p":195,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-720,"ry":0,"rz":-720,"sx":0,"sy":0,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0.2739971107803285,"tox":1,"toy":96,"toz":47,"p":282,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-720,"ry":360,"rz":-360,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.16,"stagger":0.05,"start_at":0.24},{"type":"animation","o":0,"tox":22,"toy":26,"toz":-48,"p":176,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-720,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.69,"stagger":0.05,"start_at":0.11}],"type":"out"},{"name":"cool243","steps":[{"type":"starting_values","o":1,"tox":21,"toy":71,"toz":24,"p":24,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":62,"toy":87,"toz":-40,"p":169,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":3,"sy":3,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool244","steps":[{"type":"starting_values","o":1,"tox":83,"toy":99,"toz":-75,"p":224,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":51,"toy":84,"toz":-93,"p":147,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Back.easeIn","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool245","steps":[{"type":"starting_values","o":1,"tox":90,"toy":29,"toz":54,"p":102,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":57,"toy":80,"toz":-32,"p":22,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":3,"sy":3,"e":"Quint.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool246","steps":[{"type":"starting_values","o":1,"tox":95,"toy":11,"toz":-59,"p":119,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.5318916062824428,"tox":13,"toy":53,"toz":-23,"p":63,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":2,"sy":2,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0.8074917318299413,"tox":67,"toy":68,"toz":-46,"p":215,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":0.1},{"type":"animation","o":0,"tox":18,"toy":98,"toz":-86,"p":295,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":0.2}],"type":"out"},{"name":"cool247","steps":[{"type":"starting_values","o":1,"tox":13,"toy":15,"toz":77,"p":76,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.773041698615998,"tox":65,"toy":34,"toz":92,"p":188,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0.2736767737660557,"tox":51,"toy":45,"toz":54,"p":15,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":360,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.62,"stagger":0.05,"start_at":0.09},{"type":"animation","o":0,"tox":45,"toy":34,"toz":75,"p":225,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":-720,"rz":0,"sx":0,"sy":0,"e":"Expo.easeInOut","time":0.66,"stagger":0.05,"start_at":0.27}],"type":"out"},{"name":"cool248","steps":[{"type":"starting_values","o":1,"tox":39,"toy":4,"toz":67,"p":127,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":12,"toy":59,"toz":2,"p":108,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Quart.easeIn","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool249","steps":[{"type":"starting_values","o":1,"tox":16,"toy":14,"toz":42,"p":299,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":75,"toy":5,"toz":-50,"p":225,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool250","steps":[{"type":"starting_values","o":1,"tox":40,"toy":18,"toz":82,"p":238,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":51,"toy":53,"toz":-18,"p":1,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool251","steps":[{"type":"starting_values","o":1,"tox":91,"toy":88,"toz":-56,"p":107,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.23611443559639156,"tox":47,"toy":7,"toz":-10,"p":176,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":360,"rz":0,"sx":0,"sy":0,"e":"Cubic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0,"tox":15,"toy":39,"toz":75,"p":278,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-720,"ry":-360,"rz":-720,"sx":0,"sy":0,"e":"Cubic.easeInOut","time":0.08,"stagger":0.05,"start_at":0.25}],"type":"out"},{"name":"cool252","steps":[{"type":"starting_values","o":1,"tox":46,"toy":84,"toz":-98,"p":31,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":27,"toy":60,"toz":84,"p":221,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":3,"sy":3,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool253","steps":[{"type":"starting_values","o":1,"tox":68,"toy":60,"toz":82,"p":55,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.4288588631898165,"tox":39,"toy":52,"toz":48,"p":130,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":4,"sy":4,"e":"Bounce.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0.363809539237991,"tox":69,"toy":3,"toz":-17,"p":243,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":2,"sy":2,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":0.26},{"type":"animation","o":0,"tox":81,"toy":71,"toz":45,"p":104,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":2,"sy":2,"e":"Bounce.easeInOut","time":0.7,"stagger":0.05,"start_at":0.14}],"type":"out"},{"name":"cool254","steps":[{"type":"starting_values","o":1,"tox":13,"toy":0,"toz":-65,"p":237,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.013330614194273949,"tox":47,"toy":51,"toz":12,"p":161,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":0,"tox":97,"toy":29,"toz":-60,"p":47,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Strong.easeInOut","time":0.7,"stagger":0.05,"start_at":0.26}],"type":"out"},{"name":"cool255","steps":[{"type":"starting_values","o":1,"tox":72,"toy":21,"toz":-6,"p":49,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.7330226050689816,"tox":5,"toy":12,"toz":-40,"p":118,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":"0","tox":65,"toy":35,"toz":-30,"p":24,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Quart.easeInOut","time":0.44,"stagger":0.05,"start_at":0.14}],"type":"out"},{"name":"cool256","steps":[{"type":"starting_values","o":1,"tox":63,"toy":20,"toz":21,"p":203,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":13,"toy":48,"toz":-1,"p":169,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":4,"sy":4,"e":"Bounce.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool257","steps":[{"type":"starting_values","o":1,"tox":41,"toy":69,"toz":96,"p":282,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":11,"toy":70,"toz":-1,"p":295,"xt":"random","x":0,"x1":-50,"x2":50,"yt":"random","y":0,"y1":-50,"y2":50,"rx":0,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool258","steps":[{"type":"starting_values","o":1,"tox":84,"toy":88,"toz":-85,"p":14,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":73,"toy":33,"toz":-6,"p":114,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":4,"sy":4,"e":"Quad.easeOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool259","steps":[{"type":"starting_values","o":1,"tox":52,"toy":3,"toz":-29,"p":42,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0.16787960729561746,"tox":25,"toy":46,"toz":-34,"p":130,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":-360,"sx":2,"sy":2,"e":"Quad.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"type":"animation","o":"0","tox":62,"toy":3,"toz":-7,"p":276,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"random","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":0,"sy":0,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":0.26}],"type":"out"},{"name":"cool260","steps":[{"type":"starting_values","o":1,"tox":90,"toy":45,"toz":-8,"p":271,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":20,"toy":72,"toz":52,"p":170,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":2,"sy":2,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool261","steps":[{"type":"starting_values","o":1,"tox":82,"toy":63,"toz":-48,"p":232,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":45,"toy":71,"toz":"20","p":160,"xt":"random","x":0,"x1":"-100","x2":"100","yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":2,"sy":2,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool262","steps":[{"type":"starting_values","o":1,"tox":96,"toy":56,"toz":-41,"p":168,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"type":"animation","o":0,"tox":84,"toy":2,"toz":0,"p":14,"xt":"random","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":2,"sy":2,"e":"Sine.easeIn","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool263","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":20,"toy":57,"toz":-57,"p":274,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0,"tox":23,"toy":22,"toz":27,"p":214,"xt":"random","x":18.19756023120135,"x1":-50,"x2":50,"yt":"value","y":26.134414616972208,"y1":-50,"y2":50,"rx":0,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool264","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":1,"toy":36,"toz":96,"p":221,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.7373698982410133,"tox":45,"toy":58,"toz":-43,"p":22,"xt":"random","x":16.945939091965556,"x1":-197.75015534833074,"x2":186.51490258052945,"yt":"value","y":-22.56684564985335,"y1":-224.73208853043616,"y2":299.79730607010424,"rx":0,"ry":-720,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.81,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":30,"toy":65,"toz":-59,"p":235,"xt":"random","x":-27.762171761132777,"x1":-199.24402628093958,"x2":136.56322746537626,"yt":"value","y":5.0082750571891665,"y1":-289.584851404652,"y2":118.29398488625884,"rx":0,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.4,"stagger":0.05,"start_at":0.37}],"type":"out"},{"name":"cool265","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":18,"toy":95,"toz":93,"p":182,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.7797934042755514,"tox":15,"toy":57,"toz":58,"p":202,"xt":"random","x":-28.480074238032103,"x1":-281.0872190631926,"x2":122.34526597894728,"yt":"value","y":2.491821418516338,"y1":-201.04442378506064,"y2":155.29414433985949,"rx":0,"ry":360,"rz":-360,"sx":0,"sy":0,"e":"Expo.easeInOut","time":0.27,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":66,"toy":50,"toz":85,"p":112,"xt":"value","x":-20.704974378459156,"x1":-203.377478197217,"x2":143.39589499868453,"yt":"value","y":24.517487841658294,"y1":-133.2345035392791,"y2":210.7923063915223,"rx":0,"ry":-720,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.34,"stagger":0.05,"start_at":0.14}],"type":"out"},{"name":"cool266","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":99,"toy":70,"toz":-22,"p":181,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-720,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":"0","tox":20,"toy":87,"toz":-7,"p":4,"xt":"value","x":-5.815739859826863,"x1":-159.56776021048427,"x2":196.57340105623007,"yt":"value","y":17.492371299304068,"y1":-282.3035572655499,"y2":198.57968683354557,"rx":0,"ry":-720,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.69,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool267","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":42,"toy":45,"toz":-64,"p":106,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.9908424075692892,"tox":34,"toy":16,"toz":-135,"p":75,"xt":"random","x":-2.0457768626511097,"x1":-271.0664575919509,"x2":176.0117994621396,"yt":"value","y":-22.428647470660508,"y1":-210.77262992039323,"y2":265.5764705501497,"rx":360,"ry":360,"rz":-720,"sx":0,"sy":0,"e":"Quad.easeInOut","time":0.47,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":"0","tox":1,"toy":57,"toz":-152,"p":-147,"xt":"random","x":2.1191199962049723,"x1":-284.26852305419743,"x2":113.59560298733413,"yt":"value","y":-19.453031946904957,"y1":-191.20912407524884,"y2":256.5868781879544,"rx":0,"ry":-360,"rz":-720,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.7,"stagger":0.05,"start_at":0.33}],"type":"out"},{"name":"cool268","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":85,"toy":74,"toz":90,"p":96,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-720,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.34788768412545323,"tox":60,"toy":47,"toz":-166,"p":-33,"xt":"value","x":11.756769362837076,"x1":-138.58355665579438,"x2":117.82159344293177,"yt":"value","y":-27.718785689212382,"y1":-217.23695853725076,"y2":109.05927862040699,"rx":0,"ry":360,"rz":-720,"sx":0,"sy":0,"e":"Cubic.easeInOut","time":0.76,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":36,"toy":16,"toz":-144,"p":94,"xt":"value","x":26.175023764371872,"x1":-287.7534124534577,"x2":224.71042489632964,"yt":"value","y":-11.645045187324286,"y1":-273.9866276271641,"y2":102.61845160275698,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Cubic.easeInOut","time":0.72,"stagger":0.05,"start_at":0.09}],"type":"out"},{"name":"cool269","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":79,"toy":14,"toz":-1,"p":78,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":"0","tox":23,"toy":78,"toz":-8,"p":-6,"xt":"value","x":-10.660246931947768,"x1":-177.62119094841182,"x2":259.8100397735834,"yt":"value","y":26.324568106792867,"y1":-272.47469001449645,"y2":266.93282439373434,"rx":0,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Quad.easeInOut","time":0.77,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool270","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":54,"toy":79,"toz":44,"p":205,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.223242781823501,"tox":26,"toy":42,"toz":-2,"p":-43,"xt":"random","x":5.266049816273153,"x1":-218.44768477603793,"x2":145.3268324956298,"yt":"value","y":23.412614255212247,"y1":-163.63955298438668,"y2":122.00860497541726,"rx":360,"ry":360,"rz":360,"sx":0,"sy":0,"e":"Elastic.easeInOut","time":0.64,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":12,"toy":77,"toz":-81,"p":21,"xt":"value","x":-2.5619641318917274,"x1":-100.18159341998398,"x2":262.3262922279537,"yt":"value","y":17.51387124415487,"y1":-272.9639901779592,"y2":108.50327955558896,"rx":-720,"ry":360,"rz":0,"sx":0,"sy":0,"e":"Elastic.easeInOut","time":0.8,"stagger":0.05,"start_at":0.3}],"type":"out"},{"name":"cool271","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":79,"toy":49,"toz":-21,"p":203,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":-720,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.07449347828514874,"tox":74,"toy":46,"toz":-32,"p":74,"xt":"random","x":-26.58510759472847,"x1":-105.33843729645014,"x2":295.12090110220015,"yt":"value","y":21.405373220331967,"y1":-248.65499436855316,"y2":256.4012015238404,"rx":360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Cubic.easeInOut","time":0.25,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":42,"toy":70,"toz":-123,"p":-146,"xt":"random","x":-20.015349006280303,"x1":-180.9278848581016,"x2":271.8092527240515,"yt":"value","y":17.936726426705718,"y1":-170.85339669138193,"y2":242.3441479448229,"rx":360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.77,"stagger":0.05,"start_at":0.02}],"type":"out"},{"name":"cool272","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":13,"toy":51,"toz":-35,"p":146,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-720,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":"0","tox":85,"toy":47,"toz":-112,"p":30,"xt":"value","x":10.355448354966938,"x1":-154.27982513792813,"x2":224.07120582647622,"yt":"value","y":-11.141731347888708,"y1":-231.60358583554626,"y2":197.85780641250312,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.55,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool273","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":76,"toy":91,"toz":9,"p":113,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0,"tox":23,"toy":76,"toz":-53,"p":-45,"xt":"random","x":17.138307415880263,"x1":-212.30672015808523,"x2":113.26021305285394,"yt":"value","y":18.243719092570245,"y1":-255.62888947315514,"y2":113.66088958457112,"rx":"0","ry":0,"rz":"-720","sx":0,"sy":0,"e":"Back.easeInOut","time":0.7,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool274","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":90,"toy":95,"toz":40,"p":262,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":-720,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.9797104089520872,"tox":9,"toy":47,"toz":-11,"p":-30,"xt":"random","x":-8.139695255085826,"x1":-169.6935812011361,"x2":139.0207457356155,"yt":"value","y":-9.828296871855855,"y1":-298.62039941363037,"y2":212.90175756439567,"rx":360,"ry":-360,"rz":360,"sx":0,"sy":0,"e":"Back.easeInOut","time":0.83,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":85,"toy":53,"toz":-163,"p":-45,"xt":"random","x":-13.117591724731028,"x1":-233.32547079771757,"x2":219.22105527482927,"yt":"value","y":27.79545650817454,"y1":-171.87568368390203,"y2":272.73194435983896,"rx":-720,"ry":0,"rz":360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.81,"stagger":0.05,"start_at":0.46}],"type":"out"},{"name":"cool275","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":74,"toy":78,"toz":31,"p":5,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.713117208564654,"tox":2,"toy":57,"toz":-99,"p":69,"xt":"value","x":-8.44175519887358,"x1":-116.7653382755816,"x2":272.9218440130353,"yt":"value","y":11.974518620409071,"y1":-199.1226414218545,"y2":120.44435883872211,"rx":0,"ry":360,"rz":-720,"sx":0,"sy":0,"e":"Expo.easeInOut","time":0.22,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":4,"toy":51,"toz":-27,"p":24,"xt":"random","x":13.960734196007252,"x1":-199.6368310879916,"x2":251.39602879062295,"yt":"value","y":0.004238211549818516,"y1":-252.41217063739896,"y2":198.24756826274097,"rx":360,"ry":-720,"rz":360,"sx":1,"sy":1,"e":"Bounce.easeInOut","time":0.65,"stagger":0.05,"start_at":0.05}],"type":"out"},{"name":"cool276","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":10,"toy":77,"toz":-6,"p":144,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-720,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.3945889489259571,"tox":7,"toy":22,"toz":-198,"p":-199,"xt":"random","x":25.67736867349595,"x1":-289.9520753417164,"x2":115.4359273146838,"yt":"value","y":-6.160176135599613,"y1":-285.11406145989895,"y2":231.18074578233063,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Strong.easeInOut","time":0.58,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":4,"toy":85,"toz":-14,"p":24,"xt":"value","x":-12.674977099522948,"x1":-279.92293359711766,"x2":164.64531822130084,"yt":"value","y":-5.789286615327001,"y1":-160.27565081603825,"y2":100.98906997591257,"rx":-360,"ry":-720,"rz":-360,"sx":0,"sy":0,"e":"Strong.easeInOut","time":0.67,"stagger":0.05,"start_at":0.3}],"type":"out"},{"name":"cool277","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":12,"toy":31,"toz":-43,"p":148,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":"0","tox":16,"toy":30,"toz":-18,"p":-3,"xt":"random","x":7.675054888240993,"x1":-257.04569476656616,"x2":126.58267123624682,"yt":"value","y":-7.055200967006385,"y1":-170.75629560276866,"y2":217.5324961077422,"rx":0,"ry":-720,"rz":-720,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.85,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool278","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":7,"toy":10,"toz":74,"p":24,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.6528627071529627,"tox":32,"toy":8,"toz":-75,"p":-193,"xt":"random","x":-16.697547398507595,"x1":-267.37301480025053,"x2":195.94018016941845,"yt":"value","y":-18.779623126611114,"y1":-187.95472122728825,"y2":172.15851321816444,"rx":360,"ry":0,"rz":-360,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.38,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":31,"toy":18,"toz":-9,"p":43,"xt":"value","x":27.740895529277623,"x1":-268.1181994266808,"x2":277.282401220873,"yt":"value","y":-20.06800072733313,"y1":-261.8111048359424,"y2":182.2740510571748,"rx":0,"ry":360,"rz":0,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.76,"stagger":0.05,"start_at":0.13}],"type":"out"},{"name":"cool279","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":0,"toy":97,"toz":-56,"p":231,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.5517011934425682,"tox":10,"toy":95,"toz":-160,"p":67,"xt":"value","x":-10.949760968796909,"x1":-256.64832293987274,"x2":242.33474545180798,"yt":"value","y":-4.700252101756632,"y1":-154.8405812587589,"y2":149.35308448038995,"rx":-720,"ry":360,"rz":360,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.6,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":34,"toy":0,"toz":-19,"p":-122,"xt":"random","x":-28.381285001523793,"x1":-247.496246593073,"x2":186.8020337074995,"yt":"value","y":-20.37001871969551,"y1":-215.52714332938194,"y2":227.79672872275114,"rx":0,"ry":-720,"rz":-360,"sx":0,"sy":0,"e":"Quart.easeInOut","time":0.62,"stagger":0.05,"start_at":0.03}],"type":"out"},{"name":"cool280","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":45,"toy":98,"toz":89,"p":15,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.8665370552334934,"tox":85,"toy":49,"toz":-8,"p":-106,"xt":"random","x":13.770208284258842,"x1":-229.54252525232732,"x2":290.12419977225363,"yt":"value","y":-14.76736812852323,"y1":-155.85634065791965,"y2":156.3960632774979,"rx":-360,"ry":0,"rz":360,"sx":1,"sy":1,"e":"Bounce.easeInOut","time":0.48,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":85,"toy":27,"toz":-3,"p":-147,"xt":"random","x":9.011654290370643,"x1":-198.3476913999766,"x2":137.70790467970073,"yt":"value","y":20.813523838296533,"y1":-200.89518120512366,"y2":276.92110389471054,"rx":360,"ry":360,"rz":0,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.65,"stagger":0.05,"start_at":0.12}],"type":"out"},{"name":"cool281","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":75,"toy":18,"toz":58,"p":31,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.4978983164764941,"tox":27,"toy":35,"toz":-2,"p":-170,"xt":"random","x":-12.488037538714707,"x1":-296.0518419276923,"x2":192.25341719575226,"yt":"value","y":-12.137202238664031,"y1":-211.91818681545556,"y2":163.35959802381694,"rx":0,"ry":0,"rz":360,"sx":0,"sy":0,"e":"Quad.easeInOut","time":0.85,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":99,"toy":68,"toz":-136,"p":71,"xt":"value","x":21.579022561199963,"x1":-147.3658404313028,"x2":147.4731150548905,"yt":"value","y":16.24595621600747,"y1":-226.89284458756447,"y2":142.88182645104825,"rx":360,"ry":-720,"rz":0,"sx":1,"sy":1,"e":"Strong.easeInOut","time":0.52,"stagger":0.05,"start_at":0.25}],"type":"out"},{"name":"cool282","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":61,"toy":25,"toz":53,"p":205,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":-720,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":"0","tox":41,"toy":73,"toz":-147,"p":78,"xt":"random","x":-3.53408042807132,"x1":-288.82147893309593,"x2":251.54071049764752,"yt":"value","y":2.77797675691545,"y1":-166.9406267348677,"y2":193.22513798251748,"rx":360,"ry":0,"rz":-720,"sx":0,"sy":0,"e":"Expo.easeInOut","time":0.81,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool283","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":5,"toy":11,"toz":52,"p":86,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.25101682380773127,"tox":79,"toy":88,"toz":-42,"p":-46,"xt":"value","x":6.538255554623902,"x1":-172.53186437301338,"x2":119.30656633339822,"yt":"value","y":3.682829118333757,"y1":-218.60630395822227,"y2":146.50535043329,"rx":-360,"ry":-360,"rz":-720,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.61,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":23,"toy":83,"toz":-69,"p":46,"xt":"value","x":11.41504521947354,"x1":-237.85171411000192,"x2":212.57367366924882,"yt":"value","y":-16.85115268919617,"y1":-226.8951793666929,"y2":223.66049820557237,"rx":360,"ry":360,"rz":-360,"sx":0,"sy":0,"e":"Quad.easeInOut","time":0.84,"stagger":0.05,"start_at":0.13}],"type":"out"},{"name":"cool284","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":84,"toy":20,"toz":0,"p":181,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-720,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.9652399516198784,"tox":15,"toy":30,"toz":-199,"p":-155,"xt":"random","x":16.96533794514835,"x1":-195.48025699332356,"x2":247.63201428577304,"yt":"value","y":-12.109942277893424,"y1":-173.82300295867026,"y2":229.83844643458724,"rx":-720,"ry":-360,"rz":360,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.69,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":8,"toy":56,"toz":-115,"p":-193,"xt":"random","x":-16.016004611738026,"x1":-153.59396184794605,"x2":290.8723656088114,"yt":"value","y":7.6570941880345345,"y1":-233.62694857642055,"y2":103.87824275530875,"rx":360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.22,"stagger":0.05,"start_at":0.49}],"type":"out"},{"name":"cool285","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":89,"toy":33,"toz":63,"p":278,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.2922536877449602,"tox":36,"toy":67,"toz":-20,"p":-114,"xt":"value","x":0.20256502088159323,"x1":-206.94737555459142,"x2":104.10597394220531,"yt":"value","y":7.783876117318869,"y1":-181.95101493038237,"y2":188.5608155746013,"rx":0,"ry":360,"rz":0,"sx":1,"sy":1,"e":"Elastic.easeInOut","time":0.7,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":21,"toy":47,"toz":-43,"p":-62,"xt":"random","x":2.724216626957059,"x1":-298.6956501379609,"x2":230.44755612500012,"yt":"value","y":-1.3802433013916016,"y1":-247.52772441133857,"y2":128.76802664250135,"rx":-360,"ry":-360,"rz":360,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.73,"stagger":0.05,"start_at":0.05}],"type":"out"},{"name":"cool286","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":15,"toy":12,"toz":-68,"p":92,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.4912179880775511,"tox":60,"toy":92,"toz":-149,"p":-191,"xt":"random","x":29.4355784682557,"x1":-287.8137801773846,"x2":270.6191113218665,"yt":"value","y":1.1436369689181447,"y1":-148.93566402606666,"y2":167.80050676316023,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.64,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":33,"toy":81,"toz":-162,"p":-105,"xt":"random","x":-26.45530405919999,"x1":-169.42179882898927,"x2":182.64568666927516,"yt":"value","y":22.810211232863367,"y1":-289.4365551415831,"y2":169.72455964423716,"rx":-360,"ry":360,"rz":0,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.53,"stagger":0.05,"start_at":0.28}],"type":"out"},{"name":"cool287","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":40,"toy":59,"toz":38,"p":117,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":0,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":"0","tox":15,"toy":20,"toz":-123,"p":81,"xt":"value","x":"0","x1":-132.64163751155138,"x2":267.77834645472467,"yt":"value","y":"-100","y1":-236.4769937004894,"y2":187.65879087150097,"rx":0,"ry":0,"rz":-720,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.56,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool288","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":86,"toy":17,"toz":93,"p":222,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.15542749944142997,"tox":1,"toy":30,"toz":-128,"p":-65,"xt":"value","x":20.24839613121003,"x1":-254.91529400460422,"x2":248.1273085810244,"yt":"value","y":11.160652642138302,"y1":-166.74285680055618,"y2":165.14026299118996,"rx":360,"ry":0,"rz":360,"sx":0,"sy":0,"e":"Back.easeInOut","time":0.71,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":88,"toy":69,"toz":-182,"p":-30,"xt":"random","x":19.751018257811666,"x1":-126.65540343150496,"x2":123.67741726338863,"yt":"value","y":5.556638496927917,"y1":-291.0075375344604,"y2":132.41895092651248,"rx":-360,"ry":-720,"rz":360,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.57,"stagger":0.05,"start_at":0.46}],"type":"out"},{"name":"cool289","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":6,"toy":16,"toz":10,"p":178,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-720,"ry":-720,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.6954549248330295,"tox":9,"toy":59,"toz":-168,"p":-24,"xt":"random","x":-26.659206259064376,"x1":-182.0951192639768,"x2":149.54918157309294,"yt":"value","y":14.777871365658939,"y1":-140.67936427891254,"y2":149.64551427401602,"rx":360,"ry":0,"rz":-720,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.83,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":9,"toy":1,"toz":-35,"p":15,"xt":"value","x":-14.857979882508516,"x1":-183.82719745859504,"x2":272.17984087765217,"yt":"value","y":-14.521069256588817,"y1":-173.76458710059524,"y2":170.7709539681673,"rx":-720,"ry":-720,"rz":-360,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.79,"stagger":0.05,"start_at":0.15}],"type":"out"},{"name":"cool290","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":13,"toy":84,"toz":22,"p":74,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-720,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.2949080851394683,"tox":91,"toy":92,"toz":-16,"p":"30","xt":"random","x":8.069060454145074,"x1":-280.119406664744,"x2":289.51419722288847,"yt":"value","y":-15.999988638795912,"y1":-194.6662878151983,"y2":278.30373561009765,"rx":0,"ry":360,"rz":-720,"sx":1,"sy":1,"e":"Quint.easeInOut","time":0.86,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":71,"toy":62,"toz":-51,"p":-19,"xt":"value","x":9.002191750332713,"x1":-180.51362307742238,"x2":166.43408136442304,"yt":"value","y":8.688900656998158,"y1":-229.13779062218964,"y2":204.5158774126321,"rx":-360,"ry":-360,"rz":0,"sx":0,"sy":0,"e":"Expo.easeInOut","time":0.77,"stagger":0.05,"start_at":0.3}],"type":"out"},{"name":"cool291","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":11,"toy":47,"toz":57,"p":283,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0,"tox":34,"toy":69,"toz":-25,"p":-160,"xt":"random","x":-1.414099456742406,"x1":-183.54076477698982,"x2":140.5089562293142,"yt":"value","y":10.64771098550409,"y1":-126.70478112995625,"y2":264.80739871039987,"rx":-720,"ry":-360,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.64,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool292","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":31,"toy":49,"toz":-91,"p":87,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":-720,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0,"tox":82,"toy":80,"toz":-36,"p":41,"xt":"value","x":25.574777238070965,"x1":-105.99482050165534,"x2":182.05813830718398,"yt":"value","y":2.831361824646592,"y1":-104.39929165877402,"y2":214.36263308860362,"rx":-720,"ry":-360,"rz":360,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.83,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool293","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":49,"toy":8,"toz":-55,"p":191,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0,"tox":96,"toy":38,"toz":-27,"p":-24,"xt":"value","x":-19.57330665551126,"x1":-277.6571948546916,"x2":168.39769883081317,"yt":"value","y":12.964122332632542,"y1":-200.73006255552173,"y2":211.21060163713992,"rx":360,"ry":360,"rz":0,"sx":1,"sy":1,"e":"Sine.easeInOut","time":0.82,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool294","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":58,"toy":75,"toz":81,"p":104,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-720,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.5556291355751455,"tox":66,"toy":97,"toz":-183,"p":-8,"xt":"value","x":-10.610128291882575,"x1":-252.78235119767487,"x2":101.4331721700728,"yt":"value","y":-10.325544588267803,"y1":-265.74128712527454,"y2":166.31153947673738,"rx":0,"ry":-360,"rz":-720,"sx":0,"sy":0,"e":"Circ.easeInOut","time":0.39,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":16,"toy":28,"toz":-10,"p":-163,"xt":"value","x":1.3115678541362286,"x1":-216.9765181839466,"x2":117.8697569295764,"yt":"value","y":26.342043145559728,"y1":-245.68449421785772,"y2":208.58032456599176,"rx":-360,"ry":0,"rz":-360,"sx":1,"sy":1,"e":"Back.easeInOut","time":0.55,"stagger":0.05,"start_at":0.2}],"type":"out"},{"name":"cool295","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":57,"toy":25,"toz":-58,"p":129,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":-360,"ry":-720,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":"0","tox":49,"toy":5,"toz":-8,"p":-39,"xt":"random","x":4.149279361590743,"x1":-117.01659895479679,"x2":284.02963327243924,"yt":"value","y":-16.670413110405207,"y1":-289.6387945394963,"y2":252.55506746470928,"rx":360,"ry":-720,"rz":0,"sx":1,"sy":1,"e":"Quad.easeInOut","time":0.73,"stagger":0.05,"start_at":1}],"type":"out"},{"name":"cool296","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":85,"toy":60,"toz":62,"p":4,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":-720,"rz":-720,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.9531184432562441,"tox":88,"toy":85,"toz":-172,"p":-101,"xt":"value","x":-15.64876944757998,"x1":-265.40643447078764,"x2":267.59866857901216,"yt":"value","y":-5.113746654242277,"y1":-144.41553112119436,"y2":149.6115410234779,"rx":0,"ry":0,"rz":360,"sx":1,"sy":1,"e":"Expo.easeInOut","time":0.46,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":13,"toy":16,"toz":-84,"p":-183,"xt":"random","x":-16.891569988802075,"x1":-125.54294751025736,"x2":197.11503158323467,"yt":"value","y":0.13537192717194557,"y1":-262.7709692809731,"y2":146.68608526699245,"rx":0,"ry":360,"rz":360,"sx":0,"sy":0,"e":"Strong.easeInOut","time":0.25,"stagger":0.05,"start_at":0.42}],"type":"out"},{"name":"cool297","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":48,"toy":46,"toz":-75,"p":287,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":360,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.5793152081314474,"tox":56,"toy":31,"toz":-3,"p":-137,"xt":"value","x":11.216370658949018,"x1":-262.71510012447834,"x2":188.62338922917843,"yt":"value","y":-18.36850920226425,"y1":-114.72724676132202,"y2":184.27000758238137,"rx":-360,"ry":0,"rz":0,"sx":0,"sy":0,"e":"Elastic.easeInOut","time":0.81,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":89,"toy":65,"toz":-16,"p":-43,"xt":"random","x":5.579328308813274,"x1":-217.26435706950724,"x2":168.40835572220385,"yt":"value","y":-16.838948177173734,"y1":-287.9877478815615,"y2":188.43866167590022,"rx":360,"ry":360,"rz":0,"sx":0,"sy":0,"e":"Elastic.easeInOut","time":0.8,"stagger":0.05,"start_at":0.08}],"type":"out"},{"name":"cool298","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":63,"toy":13,"toz":-69,"p":114,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.34461596491746604,"tox":46,"toy":55,"toz":-100,"p":-6,"xt":"random","x":-1.7689135065302253,"x1":-254.33141067624092,"x2":209.03571187518537,"yt":"value","y":-10.68811397999525,"y1":-252.8822208289057,"y2":172.64897213317454,"rx":-360,"ry":-360,"rz":-360,"sx":1,"sy":1,"e":"Cubic.easeInOut","time":0.71,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":6,"toy":88,"toz":-151,"p":-148,"xt":"random","x":-24.528665584512055,"x1":-148.21431473828852,"x2":160.1853241212666,"yt":"value","y":24.19158484786749,"y1":-239.79219240136445,"y2":227.76328171603382,"rx":360,"ry":0,"rz":-720,"sx":0,"sy":0,"e":"Back.easeInOut","time":0.64,"stagger":0.05,"start_at":0.33}],"type":"out"},{"name":"cool299","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":8,"toy":88,"toz":-96,"p":34,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":0,"ry":360,"rz":0,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.9580762158147991,"tox":9,"toy":18,"toz":-69,"p":-90,"xt":"value","x":-6.800082572735846,"x1":-158.95846192725003,"x2":237.08695089444518,"yt":"value","y":-8.840034040622413,"y1":-282.5664614327252,"y2":266.79687802679837,"rx":0,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Quart.easeInOut","time":0.82,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":97,"toy":18,"toz":-165,"p":-119,"xt":"value","x":-3.5617125732824206,"x1":-146.22468962334096,"x2":235.88688606396317,"yt":"value","y":-4.3733593029901385,"y1":-101.0218471288681,"y2":111.38574439100921,"rx":-720,"ry":0,"rz":0,"sx":1,"sy":1,"e":"Circ.easeInOut","time":0.8,"stagger":0.05,"start_at":0.31}],"type":"out"},{"name":"cool300","steps":[{"name":"starting values","type":"starting_values","o":1,"tox":6,"toy":54,"toz":18,"p":108,"xt":"value","x":0,"x1":-200,"x2":200,"yt":"value","y":0,"y1":-200,"y2":200,"rx":360,"ry":-360,"rz":360,"sx":1,"sy":1,"e":"Linear.easeNone","start_at":0,"time":0},{"name":"Step 1","type":"animation","o":0.5311183864250779,"tox":11,"toy":38,"toz":-1,"p":-3,"xt":"value","x":-2.180267362855375,"x1":-293.51017349399626,"x2":156.29032854922116,"yt":"value","y":-11.8481968017295,"y1":-122.17461089603603,"y2":184.87500604242086,"rx":-720,"ry":360,"rz":0,"sx":0,"sy":0,"e":"Sine.easeInOut","time":0.67,"stagger":0.05,"start_at":1},{"name":"Step 2","type":"animation","o":0,"tox":26,"toy":24,"toz":-163,"p":-44,"xt":"random","x":-27.926880223676562,"x1":-218.10225858353078,"x2":141.37383797205985,"yt":"value","y":-16.09064124058932,"y1":-164.93761986494064,"y2":194.38533652573824,"rx":-360,"ry":-720,"rz":360,"sx":0,"sy":0,"e":"Bounce.easeInOut","time":0.3,"stagger":0.05,"start_at":0.36}],"type":"out"}];
/*
 *
 *	CoolText v1.1.1
 *
 *	Copyright (c) 2014 Thomas Dolso
 *	http://www.megalocode.com/cooltext
 *
 *	Licenses
 * http://codecanyon.net/licenses/regular
 * http://codecanyon.net/licenses/extended
 *
 *
 */

;(function ($, window, document, undefined) {

	"use strict";

	var pluginName = "cooltext";
	var options;
	
	var defaults = {
		cycle:false,
		pauseOnMouseOver:false,
		resumeOnMouseOut:false,
		waitForLoad:false,
		animations:[],
		onComplete:undefined,
		onMouseOver:undefined,
		onMouseOut:undefined,
		onClick:undefined,
		onVisible:undefined,
		onVisibleFired:false
	};

	
	function Plugin(element, options) {

		this.name = pluginName;
		this.defaults = defaults;
		this.options = $.extend({}, defaults, options);

		if (this.options.sequence === undefined)
			this.options.sequence = [];
		this.num_actions = this.options.sequence.length;
		this.current_action = 0;

		this.element = element;
		this.j_element = $(element);

		this.timeline = new TimelineMax();

		this.num_letters = 0;
		this.num_words = 0;

		$.extend(this.options.animations, cool_animations);

		if (this.options.onVisible)
			this.j_element.css("visibility", "hidden");

		if (this.options.waitForLoad)
		{
			var plugin = this;
			$(window).load(function(){
				plugin._init();
		   });
		}
		else
			this._init();
	}



	var onMouseOver = function(event)
	{
		var plugin = event.data.plugin;

		if ((typeof plugin.options.onMouseOver.overwrite === 'undefined' || !plugin.options.onMouseOver.overwrite) &&
			 (plugin.animating || plugin.animating_over || plugin.animating_out || plugin.animating_click))
			return false;
		plugin.animating_over = true;
		
		var animation = $.extend(true, {}, plugin.options.onMouseOver);
		if ($.isArray(animation.animation))
			plugin._getRandomAnimation(animation);
		else
			plugin._getAnimation(animation);
		plugin._getAnimationInfo(animation);

		plugin.pause();
		plugin._startAnimation(animation, true);
	}
	

	var onMouseOut = function(event)
	{
		var plugin = event.data.plugin;

		if ((typeof plugin.options.onMouseOut.overwrite === 'undefined' || !plugin.options.onMouseOut.overwrite) &&
			 (plugin.animating || plugin.animating_over || plugin.animating_out || plugin.animating_click))
			return false;
		plugin.animating_out = true;

		var animation = $.extend(true, {}, plugin.options.onMouseOut);
		if ($.isArray(animation.animation))
			plugin._getRandomAnimation(animation);
		else
			plugin._getAnimation(animation);
		plugin._getAnimationInfo(animation);

		plugin.pause();
		plugin._startAnimation(animation, true);
	}


	var onClick = function(event)
	{
		var plugin = event.data.plugin;

		if ((typeof plugin.options.onClick.overwrite === 'undefined' || !plugin.options.onClick.overwrite) &&
			 (plugin.animating || plugin.animating_over || plugin.animating_out || plugin.animating_click))
			return false;
		plugin.animating_click = true;

		var animation = $.extend(true, {}, plugin.options.onClick);
		if ($.isArray(animation.animation))
			plugin._getRandomAnimation(animation);
		else
			plugin._getAnimation(animation);
		plugin._getAnimationInfo(animation);

		plugin.pause();
		plugin._startAnimation(animation, true);
	}
	
	


	Plugin.prototype = {
		

		// PRIVATE METHODS ///////////////////////////////////////////////////////////////////////////////////////////////////////////

		_init: function() {
			
			var plugin = this;

			if (plugin.options.pauseOnMouseOver)
				plugin.j_element.on('mouseenter', { plugin: this }, function(){plugin.pause();});
			if (plugin.options.resumeOnMouseOut)
				plugin.j_element.on('mouseleave', { plugin: this }, function(){plugin.play();});
			
			if (plugin.options.onMouseOver)
				plugin.j_element.on('mouseenter', { plugin: this }, onMouseOver);
			if (plugin.options.onMouseOut)
				plugin.j_element.on('mouseleave', { plugin: this }, onMouseOut);
			if (plugin.options.onClick)
				plugin.j_element.on('click', { plugin: this }, onClick);

			if (plugin.options.onVisible){
				$(window).load(function(){
					$(window).scroll(function() {
						plugin._fireOnVisible();
					});
					plugin._fireOnVisible();
				});
			}

			plugin._getAnimations();
			plugin._createLetters();
			plugin._doAction();
		},


		_onVisible: function(event)
		{
			var plugin = this;

			var animation = $.extend(true, {}, plugin.options.onVisible);
			if ($.isArray(animation.animation))
				plugin._getRandomAnimation(animation);
			else
				plugin._getAnimation(animation);
			plugin._getAnimationInfo(animation);

			plugin.pause();
			plugin._startAnimation(animation, true);
		},


		_fireOnVisible: function()
		{
			var plugin = this;

			if (plugin.onVisibleFired)
				return false;

			if (plugin._isScrolledIntoView())
			{
				plugin.onVisibleFired = true;
				plugin._onVisible();
			}
		},


		_isScrolledIntoView: function()
		{
			var plugin = this;

			var threshold = 50;

			var scroll_top = $(window).scrollTop();
			if (window.innerHeight === undefined)
				var window_height = $(window).height();
			else
				var window_height = window.innerHeight;
			var img_top = plugin.j_element.offset().top;
			var img_height = plugin.j_element.height();

			return ((scroll_top + threshold < img_top + img_height) && scroll_top + window_height > img_top + threshold);
		},


		_getAnimation: function(s)
		{
			if (typeof s === 'undefined')
				return;

			var plugin = this;
			
			if ($.isArray(s.animation))
				s.action = "do_animate";

			else if (s.action == "animation" && s.animation != "")
			{
				var found = false;
				for (var j=0; j<plugin.options.animations.length; j++)
				{
					if (s.animation == plugin.options.animations[j].name)
					{
						found = true;
						s.action = "do_animate";
						s.steps = jQuery.extend(true, [], plugin.options.animations[j].steps);
					}
				}

				if (!found)
				{
					console.log("COOLTEXT WARNING: animation " + s.animation + " not found");
					plugin.options.sequence.splice(j,1);
					plugin.num_actions--;
				}
			}
		},

		
		_getAnimations: function()
		{
			var plugin = this;

			for (var i=0; i<plugin.options.sequence.length; i++)
			{
				var s = plugin.options.sequence[i];
				plugin._getAnimation(s);
			}
		},


		_getRandomAnimation: function(s)
		{
			var plugin = this;

			if ($.isArray(s.animation))
			{
				var a = Math.floor(s.animation.length * Math.random());
				s.name = s.animation[a];

				var found = false;
				for (var j=0; j<plugin.options.animations.length; j++)
				{
					if (s.name == plugin.options.animations[j].name)
					{
						found = true;
						s.steps = jQuery.extend(true, [], plugin.options.animations[j].steps);
					}
				}

				if (!found)
				{
					console.log("COOLTEXT WARNING: animation " + s.name + " not found");
					plugin.options.sequence.splice(j,1);
					plugin.num_actions--;
				}
			}
		},


		_createLetters: function()
		{
			var plugin = this;
			
			plugin.j_element.html(plugin.j_element.html().replace(/\n/g, '').replace("\t", "").replace(/\s{2,}/g, ' '));
			plugin.current_text = plugin.j_element.html();
			plugin.j_element.html($.trim(plugin.j_element.html()));
			
			var el = plugin.j_element.clone();
			plugin.j_element.html("");
			el.find("br").replaceWith("\n");

			var letters = el.text().split("");
			var letter;

			var word = $("<div/>", {css:{position:"relative", display:"inline-block"}}).addClass('ct-word').appendTo(plugin.j_element);
			plugin._fixWordEvents(word);
			$.each(letters, function(index, val)
			{
				if (val === "\n")
				{
					$("<br/>", {css:{position:"relative", display:"inline-block"}}).addClass('ct-br').appendTo(plugin.j_element);
					word = $("<div/>", {css:{position:"relative", display:"inline-block"}}).addClass('ct-word').appendTo(plugin.j_element);
					plugin._fixWordEvents(word);
				}

				if (val == " " || val == "&nbsp;")
				{
					plugin.j_element.append(" ");
					word = $("<div/>", {css:{position:"relative", display:"inline-block"}}).addClass('ct-word').appendTo(plugin.j_element);
					plugin._fixWordEvents(word);
				}
				else
				{
					letter = $("<div/>", {css:{
						position:"relative",
						display:"inline-block"
						//"-webkit-font-smoothing": "antialiased",
						//"-moz-font-smoothing":"antialiased"
					}}).addClass('ct-letter').html(val).appendTo(word);
					plugin._fixLetterEvents(letter);
				}
			});

						
			plugin._finds();

			plugin.words_positions = Array();
			$.each(plugin.words, function(index, val) {
				var p = $(this).position();
				plugin.words_positions[index] = p;
			});

			plugin.letters_positions = Array();
			$.each(plugin.letters, function(index, val) {
				var p = $(this).position();
				plugin.letters_positions[index] = p;
			});
			

			TweenMax.set(plugin.j_element, {z:0.1});

			if ((typeof plugin.options.sequence === undefined || plugin.options.sequence.length == 0) && (plugin.options.onVisible === undefined))
				plugin.j_element.css("visibility", "visible");

			plugin._createResetValues();
		},


		_fixLetterEvents: function(el)
		{
			$(el).on('mousedown', function(e) { 
				if(e.which == 1)
				{
					e.stopPropagation();
					e.preventDefault();
				}
			}).on('mouseup', function(e) { 
				if(e.which == 1)
				{
					e.stopPropagation();
					e.preventDefault();
					$(e.target).parent().parent()[0].click();
				}
			}).on('click', function(e) { 
				if(e.which == 1)
				{
					e.stopPropagation();
					e.preventDefault();
				}
			});
		},


		_fixWordEvents: function(el)
		{
			$(el).on('mousedown', function(e) { 
				if(e.which == 1)
				{
					e.stopPropagation();
					e.preventDefault();
				}
			}).on('mouseup', function(e) { 
				if(e.which == 1)
				{
					e.stopPropagation();
					e.preventDefault();
					$(e.target).parent()[0].click();
				}
			}).on('click', function(e) { 
				if(e.which == 1)
				{
					e.stopPropagation();
					e.preventDefault();
				}
			});
		},


		_finds: function()
		{
			var plugin = this;

			plugin.letters = plugin.j_element.find(".ct-letter");
			plugin.words = plugin.j_element.find(".ct-word");
			plugin.num_letters = plugin.letters.length;
			plugin.num_words = plugin.words.length;
		},


		_resetLetters: function()
		{
			var plugin = this;
			$.each(plugin.letters, function(idx, val) {
				TweenMax.to(this, 0, plugin.letters_reset[idx]);
			});
		},


		_resetWords: function()
		{
			var plugin = this;
			$.each(plugin.words, function(idx, val) {
				TweenMax.to(this, 0, plugin.words_reset[idx])
			});
		},


		_createResetValues: function()
		{
			var plugin = this;

			plugin.words_reset = Array();
			$.each(plugin.words, function(idx, val) {
				plugin.words_reset[idx] = {
					transformOrigin:"50% 50% 0",
					transform:"none",
					rotationY:0,
					rotationX:0,
					rotation:0,
					scale:1,
					opacity:1,
					immediateRender:true
				};
			});

			plugin.letters_reset = Array();
			$.each(plugin.letters, function(idx, val) {
				plugin.letters_reset[idx] = {
					transformOrigin:"50% 50% 0",
					transform:"none",
					rotationY:0,
					rotationX:0,
					rotation:0,
					scale:1,
					opacity:1,
					immediateRender:true
				};
			});
		},



		_nextAction: function()
		{
			var plugin = this;
			plugin.current_action++;
			if (plugin.current_action >= plugin.num_actions)
			{
				if (plugin.options.onComplete !== undefined)
					plugin.options.onComplete();
				if (plugin.options.cycle)
					plugin.current_action = 0;
				else
					return false;
			}

			plugin._doAction();
			return true;
		},


		_prevAction: function()
		{
			var plugin = this;
			plugin.current_action--;
			if (plugin.current_action < 0) {
				return false;
			}

			plugin._doAction();
			return true;
		},



		_getAnimationInfo: function(animation)
		{
			var plugin = this;

			plugin.current_animation = {};

			if (animation.elements == "words")
			{
				plugin.current_animation.num_elements = plugin.num_words;
				plugin.current_animation.jelements = ".ct-word";
				plugin.current_animation.stagger_multiplier = 7;
			}
			else
			{
				plugin.current_animation.num_elements = plugin.num_letters;
				plugin.current_animation.jelements = ".ct-letter";
				plugin.current_animation.stagger_multiplier = 1;
			}


			for(var i=1; i<animation.steps.length; i++)
			{
				var s = animation.steps[i];
				
				if (animation.speed != undefined)
					s.time *= 100 / animation.speed;

				if (animation.stagger != undefined)
					s.stagger *= 100 / animation.stagger;
				
				s.stagger *= plugin.current_animation.stagger_multiplier;
			}


			for (var i=1; i<animation.steps.length; i++)
			{
				var step = animation.steps[i];
				step.total_time = (plugin.current_animation.num_elements - 1) * parseFloat(step.stagger) + parseFloat(step.time); 
			}

			var delay = 0;
			animation.steps[1].delay = 0;
			for (var i=2; i<animation.steps.length; i++)
			{
				delay += animation.steps[i-1].total_time * animation.steps[i].start_at;
				animation.steps[i].delay = delay;
			}

			plugin.current_animation.total_time = 0;
			for (var i=1; i<animation.steps.length; i++)
				if (animation.steps[i].total_time + animation.steps[i].delay > plugin.current_animation.total_time)
					plugin.current_animation.total_time = animation.steps[i].total_time + animation.steps[i].delay;

			plugin.current_animation.one_element_total_time = 0;
			for (var i=1; i<animation.steps.length; i++)
				if (animation.steps[i].time + animation.steps[i].delay > plugin.current_animation.one_element_total_time)
					plugin.current_animation.one_element_total_time = animation.steps[i].time + animation.steps[i].delay;
		},



		_doAction: function()
		{
			var plugin = this;

			if (plugin.options.sequence.length == 0)
				return false;

			var s = $.extend(true, {}, plugin.options.sequence[plugin.current_action]);

			switch(s.action)
			{
				case "do_animate":

					if ($.isArray(s.animation))
						plugin._getRandomAnimation(s);

					plugin._getAnimationInfo(s);
					plugin._startAnimation(s);
					break;

				case "update":

					plugin.j_element.css("visibility", "hidden");
					if (s.text !== undefined)
						plugin.j_element.html(s.text);
					else
						plugin.j_element.html(plugin.current_text);

					if (s.addClass !== undefined)
						plugin.j_element.addClass(s.addClass);
					if (s.removeClass !== undefined)
						plugin.j_element.removeClass(s.removeClass);

					if (typeof s.css !== undefined)
						TweenMax.set(plugin.j_element, {css:s.css});

					plugin._createLetters();
					plugin._nextAction();
					break;
			}
		},



		_resetElements: function()
		{
			var plugin = this;

			if (plugin.current_animation.jelements == ".ct-letter")
				plugin._resetWords();
			else if (plugin.current_animation.jelements == ".ct-word")
				plugin._resetLetters();
		},


		
		_startAnimation: function(animation, nofollow)
		{
			var plugin = this;

			plugin.animating = true;

			if (nofollow === undefined)
				nofollow = false;

			var s = animation.steps[0];

			if (animation.onStart !== undefined)
			{
				if (animation.delay !== undefined)
					TweenMax.delayedCall(animation.delay, function(){animation.onStart()});
				else
					animation.onStart();
			}

			TweenLite.set(plugin.words, {perspective: s.p});
			
			plugin.timeline.clear();
			plugin.timeline = new TimelineMax();
			plugin.timeline.pause();
			plugin.timeline.eventCallback("onComplete", function(){
				plugin._resetElements(); 
				plugin._doSteps(animation, nofollow); 
			});

			if ($(plugin.j_element).css("visibility") != "visible")
				TweenMax.to(plugin.j_element, 0, {delay:(animation.delay === undefined) ? 0 : animation.delay, visibility:"visible"});
			
			var tweens = Array();
			$.each(plugin.j_element.find(plugin.current_animation.jelements), function(idx, val) {

				if (s.xt == "value")
					var value_x = s.x;
				else if (s.xt == "random")
					var value_x = Math.floor(s.x1 + (s.x2 - s.x1) * Math.random());
				if (s.yt == "value")
					var value_y = s.y;
				else if (s.yt == "random")
					var value_y = Math.floor(s.y1 + (s.y2 - s.y1) * Math.random());

				var opacity = s.o;
				if (animation.startingOpacity !== undefined)
					opacity = animation.startingOpacity;

				tweens.push(
					TweenMax.to(
						this,
						0,
						{
							opacity: opacity,
							transformOrigin: s.tox + "% " + s.toy + "% " + s.toz + "px",
							x: value_x,
							y: value_y,
							z: 0.1,
							rotationX: s.rx,
							rotationY: s.ry,
							rotationZ: s.rz,
							scaleX: s.sx,
							scaleY: s.sy,
							delay:(animation.delay === undefined) ? 0 : animation.delay
						}
					)
				);
			});

			plugin.timeline.add(tweens);
			plugin.timeline.play();
		},
		


		_doSteps: function(animation, nofollow)
		{
			var plugin = this;

			plugin.timeline.clear();
			plugin.timeline = new TimelineMax();
			plugin.timeline.pause();

			plugin.timeline.eventCallback("onComplete", function(){

				plugin.animating = false;
				plugin.animating_over = false;
				plugin.animating_out = false;
				plugin.animating_click = false;

				if (animation.onComplete !== undefined)
					animation.onComplete();

				if (!nofollow && !animation.stop)
					plugin._nextAction();
			});



			var elems = plugin.j_element.find(plugin.current_animation.jelements);

			var indexes = Array();
			if (animation.order == "reverse") {
				for(var e=0; e<plugin.current_animation.num_elements; e++)
					indexes[e] = plugin.current_animation.num_elements - e - 1;
			}
			else if (animation.order == "random") {
				for(var e=0; e<plugin.current_animation.num_elements; e++)
					indexes[e] = e;
				for(var e=0; e<plugin.current_animation.num_elements; e++)
				{
					var x = Math.floor(Math.random() * plugin.current_animation.num_elements);
					var tmp = indexes[e];
					indexes[e] = indexes[x];
					indexes[x] = tmp;
				}
			}
			else {
				for(var e=0; e<plugin.current_animation.num_elements; e++)
					indexes[e] = e;
			}


			for(var i=1; i<animation.steps.length; i++)
			{
				var s = animation.steps[i];
				var s_prev = animation.steps[i-1];

				TweenLite.set(plugin.words, {perspective: s.p});
			
				var values = {};
				if (s.o != s_prev.o)
					values.opacity = s.o;
				if (s.tox != s_prev.tox || s.toy != s_prev.toy || s.toz != s_prev.toz)
					values.transformOrigin = s.tox + "% " + s.toy + "% " + s.toz + "px";
				if (s.rx != s_prev.rx)
					values.rotationX = s.rx;
				if (s.ry != s_prev.ry)
					values.rotationY = s.ry;
				if (s.rz != s_prev.rz)
					values.rotationZ = s.rz;
				if (s.sx != s_prev.sx)
					values.scaleX = s.sx;
				if (s.sy != s_prev.sy)
					values.scaleY = s.sy;

				values.z = 0.1;
				values.ease = s.e;

				for(var e=0; e<plugin.current_animation.num_elements; e++)
				{
					if (s.xt == "random")
						var x = Math.floor(s.x1 + (s.x2 - s.x1) * Math.random());
					else if (s.xt != s_prev.type || s.x != s_prev.x)
						var x = s.x;
					if (s.yt == "random")
						var y = Math.floor(s.y1 + (s.y2 - s.y1) * Math.random());
					else if (s.yt != s_prev.type || s.y != s_prev.y)
						var y = s.y;

					plugin.timeline.add(
						TweenMax.to(
							elems[indexes[e]],
							s.time,
							$.extend({}, values, {
								x:x,
								y:y
							})
						),
						s.delay + e*s.stagger
					);
					
					if (typeof animation.css !== undefined)
					{
						plugin.timeline.add(
							TweenMax.to(
								elems[indexes[e]],
								plugin.current_animation.one_element_total_time,
								{css:animation.css}
							),
							0 + e*s.stagger
						);
					}
				}
			}

			plugin.timeline.play();
		},


		_doBefore: function(params)
    	{
    		var plugin = this;
    		var animation = $.extend(true, {}, params.before);

    		animation.onComplete = function(){
    			params.before = undefined;
    			plugin.goto(params);
    		};
			plugin._getAnimation(animation);
			plugin._getAnimationInfo(animation);
			plugin._startAnimation(animation, true);
    	},




		// PUBLIC METHODS ///////////////////////////////////////////////////////////////////////////////////////////////////////////

		restart: function(params) {
      	var plugin = this;
      	plugin.current_action = 0;
			plugin._doAction();
    	},


    	pause: function(params) {
      	var plugin = this;
      	plugin.timeline.pause();
    	},


    	play: function(params) {
      	var plugin = this;
      	plugin.timeline.play();
    	},


    	goto: function(params)
    	{
    		var plugin = this;
    		var starting = plugin.current_action;

    		if (params.before !== undefined)
    		{
    			plugin._doBefore(params);
    			return;
    		}

    		switch(params.where)
    		{
    			case "next":
    				if (plugin.current_action >= plugin.num_actions-1)
		      	{
		      		if (plugin.options.cycle)
		      		{
		      			plugin.current_action = -1;
		      			plugin._nextAction();
		      		}
		      	}
		      	else
		      		plugin._nextAction();
    				break;

    			case "prev":
    				if (plugin.current_action <= 0)
		      	{
		      		if (plugin.options.cycle)
		      		{
		      			plugin.current_action = plugin.num_actions;
		      			plugin._prevAction();
		      		}
		      	}
		      	else
		      		plugin._prevAction();
    				break;

    			case "next_update":
					do {
						plugin.current_action++;
						if (plugin.current_action >= plugin.num_actions)
							plugin.current_action = 0;
						if (plugin.options.sequence[plugin.current_action].action == "update")
						{
							if (params.stagger !== undefined)
							{
								plugin.current_action += parseInt(params.stagger);
								if (plugin.current_action >= plugin.num_actions)
									plugin.current_action = 0;
								else if (plugin.current_action < 0)
									plugin.current_action = plugin.num_actions - 1;
							}
							plugin._doAction();
							return plugin.current_action;
						}
					} while(plugin.current_action != starting)
					return false;
    				break;

    			case "prev_update":
    				var found = false;
					do {
						plugin.current_action--;
						if (plugin.current_action < 0)
							plugin.current_action = plugin.num_actions - 1;
						if (plugin.options.sequence[plugin.current_action].action == "update")
						{
							if (found)
							{
								if (params.stagger !== undefined)
								{
									plugin.current_action += parseInt(params.stagger);
									if (plugin.current_action >= plugin.num_actions)
										plugin.current_action = 0;
									else if (plugin.current_action < 0)
										plugin.current_action = plugin.num_actions - 1;
								}

								plugin._doAction();
								return plugin.current_action;
							}
							else
								found = true;
						}
					} while(plugin.current_action != starting)
					return false;
    				break;
    		}
    	}


	};


	$.fn[pluginName] = function(options)
	{
		var args = arguments;

		if (options === undefined || typeof options === 'object') {
			return this.each(function() {
				if (!$.data(this, 'plugin_' + pluginName))
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			});
		}
		else if (typeof options === 'string' && options[0] !== '_') {
			return this.each(function() {
				var instance = $.data(this, 'plugin_' + pluginName);
				if (instance instanceof Plugin && typeof instance[options] === 'function')
					instance[options].apply(instance, Array.prototype.slice.call(args, 1));
			});
		}
	};

})(jQuery, window, document);




// HTML ///////////////////////////////////////////////


function htmlCoolText()
{
	$.each($("body").find("[ct-sequence], [ct-mouseover], [ct-mouseout], [ct-click], [ct-visible]"), function(idx, val) {

		var seq = $(this).attr("ct-sequence");
		var over = $(this).attr("ct-mouseover");
		var out = $(this).attr("ct-mouseout");
		var click = $(this).attr("ct-click");
		var visible = $(this).attr("ct-visible");
		var config = $(this).attr("ct-config");

		var sequence = [];
		if (typeof seq !== 'undefined')
		{
			seq = seq.replace(/\s+/g, '').split("|");
			for(var i=0; i<seq.length; i++) {

				var params = seq[i].replace(/\s+/g, '').split(",");

				sequence[i] = {
					action:"animation",
					stop:false,
					animation:params[0],
					elements:params[1],
					speed:params[2],
					stagger:params[3],
					delay:params[4],
					order:params[5],
					css:{color:params[6]}
				};
			}
		}
		if (typeof over !== 'undefined')
		{
			over = over.replace(/\s+/g, '').split(",");
			var over_obj = {
				action:"animation",
         	animation:over[0],
				elements:over[1],
				speed:over[2],
				stagger:over[3],
				delay:over[4],
				order:over[5],
				overwrite:over[6],
				css:{color:over[7]}
			}
		}
		if (typeof out !== 'undefined')
		{
			out = out.replace(/\s+/g, '').split(",");
			var out_obj = {
				action:"animation",
         	animation:out[0],
				elements:out[1],
				speed:out[2],
				stagger:out[3],
				delay:out[4],
				order:out[5],
				overwrite:out[6],
				css:{color:out[7]}
			}
		}
		if (typeof click !== 'undefined')
		{
			click = click.replace(/\s+/g, '').split(",");
			var click_obj = {
				action:"animation",
         	animation:click[0],
				elements:click[1],
				speed:click[2],
				stagger:click[3],
				delay:click[4],
				order:click[5],
				overwrite:click[6],
				css:{color:click[7]}
			}
		}
		if (typeof visible !== 'undefined')
		{
			visible = visible.replace(/\s+/g, '').split(",");
			var visible_obj = {
				action:"animation",
         	animation:visible[0],
				elements:visible[1],
				speed:visible[2],
				stagger:visible[3],
				delay:visible[4],
				order:visible[5],
				overwrite:visible[6],
				css:{color:visible[7]}
			}
		}

		if (typeof config !== 'undefined')
		{
			var cycle = (config.indexOf("cycle") >= 0);
			var pause_on_mouseover = (config.indexOf("pause-on-mouseover") >= 0);
			var resume_on_mouseout = (config.indexOf("resume-on-mouseout") >= 0);
			var wait_for_load = (config.indexOf("wait-for-load") >= 0);
		}

		$(this).cooltext({
         pauseOnMouseOver:pause_on_mouseover,
         resumeOnMouseOut:resume_on_mouseout,
         cycle:cycle,
         waitForLoad:wait_for_load,
         onMouseOver:over_obj,
         onMouseOut:out_obj,
         onClick:click_obj,
         onVisible:visible_obj,
         sequence:sequence
   	});
	});
};


if (typeof tmAutoStart === 'undefined')
{
	$(document).ready(function() {
		htmlCoolText();
	});
}

// Force the visitor to the top of the page by removing everything from the hash on with root url
window.location.replace("#");
if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}

$(window).load(function() {
    //Preloader
    $("#intro-loader").delay(1000).fadeOut();
    $(".mask").delay(1000).fadeOut("slow");
});

$(document).ready(function(){
    /*===================================================================================*/
    /*  SIZE & RESIZE                                                                    */
    /*===================================================================================*/
    
    // Viewport sizes in pixels
    var narrow = 490;
    var xsmall = 640;
    var small  = 768;
    var medium = 990;
    var wide   = 1200;

    // Get and declare heights
    var winHeight          = $(window).height();//get height
    var winWidth           = $(window).width();//get width
    var navHeight          = $('#navWrapper').height();//get nav height
    var aboutHeight        = $('#about').height();
    var portfolioHeight    = $('#portfolio').height();
    var aboutContentHeight = $('#about .mainContent').height();

    // detect mobile
    var onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        onMobile = true;
    }

    // Set height
    $('.fullheight').css('height', winHeight);
    $('#projects').css('height', portfolioHeight + 120);
    $('.mainContentContact').css('height', winHeight - navHeight);
    if(winHeight <= xsmall){
        $('#about').css({'min-height': aboutContentHeight + 85});
    }
    if(winWidth >= small){
        $('#about').css({'min-height': aboutContentHeight + 80});
    }


    $(window).resize(function(){
        var winHeight          = $(window).height(); //get height
		var navHeight          = $('#navWrapper').height();//get nav height
		var portfolioHeight    = $('#portfolio').height();
        var aboutContentHeight = $('#about .mainContent').height(); 
		
		$('.fullheight').css('height', winHeight);
        $('#about').css({'min-height': aboutContentHeight + 60});
		$('#projects').css({'height': portfolioHeight + 100});
        $('.mainContentContact').css('height', winHeight - navHeight);

        // Hide main saucer when height is short
        if(winHeight < 300){
            $('#spaceCraft-1').css({'display': 'none'});
        } //winHeight
		
	}); //on resize


    /*===================================================================================*/
    /*  NAVIGATION                                                                       */
    /*===================================================================================*/
	//$('.navbar ul li a span').hide();
    var $navWrapper = $('#navWrapper')
    var $navUL      = $('nav ul');
    var $navLi      = $('nav ul li')
    var liActive    = $navLi.hasClass('active');
    
    // deactivate nav link
    $navLi.click(function(){
        $navLi.each(function(index){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });

        $(this).addClass('active');

    });

    // xsmall responsive navigation
    if(winWidth <= xsmall){
        $('.navController').click(function(e){
            var navExpanded = $navUL.hasClass('expanded');
            colapseExpand(navExpanded);
            e.preventDefault();
            
        });

        var colapseExpand = function(navExpanded){
             if(navExpanded === false){
                $navUL.addClass('expanded');
                $navUL.animate({right: '0px'}, 'slow', 'easeOutQuart');
            } else {
                $navUL.removeClass('expanded');
                $navUL.animate({right: '-105px'}, 500, 'easeOutCirc');
            }
        };        

        $navUL.mouseleave(function(){
            colapseExpand();
        });
        $navUL.click(function(){
            colapseExpand();
        });

    } //if winWidth xsmall

     // easy scroll
    $('.navbar ul li').click(function(){
        var navLink     = $(this).index();

        switch(navLink){
            case 0: 
                $('html, body').animate({
                    scrollTop: $("#about").offset().top
                }, 1000);
                break;

            case 1:
                 $('html, body').animate({
                    scrollTop: $("#projects").offset().top
                }, 1000);
                break;

            case 2:
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 1000);
                break;
            default: console('Missing object index');
        } 
    });

    //On window scroll
    $(window).scroll(function(){
        var windowpos       = $(window).scrollTop()+navHeight;
        var scrollBarPos    = $(window).scrollTop();

        $('nav .navbar ul li').removeClass('active');

        if ( windowpos > $('#about').offset().top) {
            $('nav .navbar ul li').removeClass('active');
            $('li.linkLi1').addClass('active');
        }

        if ( windowpos > $('#projects').offset().top) {
            $('nav .navbar ul li').removeClass('active');
            $('li.linkLi2').addClass('active');
        }

        if ( windowpos > $('#contact').offset().top) {
            $('nav .navbar ul li').removeClass('active'); 
            $('.linkLi3').addClass('active');
        }

        if (scrollBarPos >= 1){
            $navWrapper.css({'border-top': 'solid 2px #30a6de'});

        } else {

            if (winWidth <= xsmall){
                $navWrapper.slideDown(function(){
                    $(this).css({'border-top': 'solid 5px #30a6de'});
                });

            } else {
                $navWrapper.slideDown(function(){
                    $(this).css({'border-top': 'solid 10px #30a6de'});
                });
            }
                
        }
    });

    $('.brand a').click(function(){
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 1000);
    });

    var navBar_in = function(){
        var navIcons   = $('#navWrapper .navbar ul li i');
        var navText   = $('#navWrapper .navbar ul li span');
        
        $('#navWrapper .navbar ul').slideDown(1500);

        // setTimeout(function(){
        //     navIcons.addClass('blueHighlight');
        //     navText.addClass('blueHighlight');
        // }, 1000);
        // setTimeout(function(){
        //     navIcons.toggleClass('blueHighlight');
        //     navText.toggleClass('blueHighlight');
        // }, 2500)

        setTimeout(function(){
            navIcons.addClass('whiteHighlight');
            navText.addClass('whiteHighlight');
        }, 1000);
        setTimeout(function(){
            navIcons.removeClass('whiteHighlight');
            navText.removeClass('whiteHighlight');
        }, 2500)

    } //naBar_in


    /*===================================================================================*/
    /*  WELCOME SCENE                                                                    */
    /*===================================================================================*/
    var spaceCraft1 = document.getElementById('spaceCraft-1');
    var spaceCraft2 = document.getElementById('spaceCraft-2');
    var spaceCraft3 = document.getElementById('spaceCraft-3');

    var welcomeMsg = function(){
        window.setTimeout(function(){
            $(".first, .top, .bottom, .third").cooltext({
                sequence:[
                    {action:"animation", 
                     animation:"cool56",
                     onComplete: welcomeMsgBottom}
                ]
            }); 
        }, 1500);
    } //welcomeMsg

    var welcomeMsgBottom = function(){
        $('.mainMsgBottom').cooltext({
           sequence:[
                {visibility: 'visible',
                 action: 'animation', 
                 animation:"cool16",
                 onComplete: nameBrand_in
                }

           ]
        });
    } //welcomeMsgBottom

    var nameBrand_in = function(){
       $(".nameBrand").cooltext({
           sequence:[
                {visibility: 'visible',
                 action: 'animation', 
                 animation: 'cool117',
                 onComplete: navBar_in
                }
           ]
        });
        $('.nameBrand, .me').cooltext({
           sequence:[
                {visibility: 'visible',
                 action:'animation', 
                 animation:'cool16'
                }
           ]
        });
    } //nameBrand_in

    var spaceCraft2_controller = function(){

        var blinkArrow = function(){
            window.setInterval(function(){
               $('i', spaceCraft2).fadeIn().delay(1500).fadeOut(); 
            }, 2000);
        }

        window.setTimeout(function(){
            blinkArrow();
        }, 1000);

        $(spaceCraft2).hover(function(){
            $('i', this).fadeIn();
        }, function(){
            $('i', this).fadeOut();
        }).css({'cursor': 'pointer'});

        $(spaceCraft2).click(function(){
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 1000);
        });

        $(spaceCraft2).click(function(){
             $('i', this).css({display: 'none'});
        });

    } //spaceCraft2_Welcome


    /*===================================================================================*/
    /*  ABOUT SCENE                                                                      */
    /*===================================================================================*/

    $('#backTop').click(function(){
        $('html, body').animate({
            scrollTop: $("#wrapper").offset().top
        }, 1000);
    });

    var bars_in = function() {
         $('.skillBar li').each(function() {
            $(this).animate({
                opacity: 1,
                left: "0px"
            }, 3500);
            var b = $(this).find("span").attr("data-width");
            $(this).find("span").animate({
                width: b + "%"
            }, 3200)
        });
    }

    var experience_in = function(){
        var i = 0;
        
        var liActive = $('#job ul li').hasClass('bgActive');

        if (!liActive) {
            var loop = setInterval(function() {
                if(i === 5){
                    i = 0;
                }
                $('#job ul li:eq('+i+')').siblings().removeClass('opaDarkBlack40-bg');
                $('#job ul li:eq('+i+')').addClass('opaDarkBlack40-bg');
                i++;
            }, 2000);
        };

        // Date hover
        $('#dates ul li').hover(function(){
            var i = $(this).index();

            $('#job ul li:eq('+i+')').toggleClass('opaDarkBlack40-bg');
            $('#timelinePoints ul li:eq('+i+')').toggleClass('outterGlow');
            $(this).toggleClass('outterGlow');
        });

        // Job hover
        $('#job ul li').hover(function(){
            var i = $(this).index();

            $(this).toggleClass('opaDarkBlack40-bg');
            $('#timelinePoints ul li:eq('+i+')').toggleClass('outterGlow');
            $('#dates ul li:eq('+i+')').toggleClass('outterGlow');
            clearInterval(loop);
        });

        // job click
         $('#job ul li').click(function(){
            var i = $(this).index();

            $(this).siblings().removeClass('bgActive');
            $(this).siblings().removeClass('opaDarkBlack40-bg');
            $(this).addClass('bgActive');
            clearInterval(loop);
         });

        // job and dates click
        $('#dates ul li, #job ul li').click(function(){
            var i = $(this).index();
            
            $('#experienceTerminal ul li').hide()
            $('#experienceTerminal ul li:eq('+i+')').show();
            $('#experienceTerminal ul li:eq('+i+') span').cooltext({
               sequence:[
                    {display: 'block',
                     action: 'animation', 
                     animation:"cool38",
                     speed: '1000'
                    }

               ]
            });

            $('#timelinePoints ul li:eq('+i+')').siblings().removeClass('outterGlow');
            $('#timelinePoints ul li:eq('+i+')').toggleClass('outterGlow');

            $('#job ul li:eq('+i+')').siblings().removeClass('bgActive');
            $('#job ul li:eq('+i+')').addClass('bgActive');
        });

    } //experience_in

    $('.resumeBtn').on('click',function(e){
        e.preventDefault();
        //window.location.href = '/files/DannyRivera_Resume_SrWebDeveloper_2015-WEB-VER.doc';
        window.open(['https://docs.google.com/document/d/1qjz7fyWniyMTYhIelm6mNUBH1i8Vdb4-yX5nn3JYTOE/edit?usp=sharing'], '_blank');
    })

    $('.resumeBtn').on('mouseover',function(e){
       $(this).css({'background-color':' rgba(0, 0, 0, 1)'});
    }).on('mouseout', function(){
        $(this).css({'background-color':' rgba(0, 0, 0, 0.7)'});
    });
                
	/*===================================================================================*/
    /*  ANIMATIONS                                                                       */
    /*===================================================================================*/

    //ScrollMagic initialize
    var controller = new ScrollMagic({
            globalSceneOptions: {
                //triggerHook: 'onLeave',
                loglevel: 1
            }       
        });

    //Pin section titles
    var screenMinusNav  = winHeight - navHeight;

    var yPosWelcome     = $('.welcomeTop').offset().top;
    var yPosAbout       = $('.aboutTop').offset().top - navHeight - 50;
    var yPosProjects    = $('.projectsTop').offset().top - yPosAbout - 220;
    var yPosContact     = $('.contactTop').offset().top - yPosProjects;
    //console.log(yPosAbout + " " + yPosProjects + " " + yPosContact);

    var ss_navBarDrop = new ScrollScene({
            triggerElement: '.welcomeTop',
            triggerHook: 'onLeave'
        }).addTo(controller)
            .setTween(TweenMax.from(navWrapper, 0.7, { height: 0, ease:Power2.easeIn }));

    if(!onMobile){
        var ss_spaceCraft1 = new ScrollScene({
                triggerElement: '.welcomeTop',
                triggerHook: 'onLeave'
            }).addTo(controller)
                .setTween(TweenMax.fromTo(spaceCraft1, 1, 
                    { visibility: 'visible', opacity: 0, width: '0em', height: '0em', bottom: '-5em', left: '10%' }, 
                        { opacity: 1, width:'10em', height:'3em', left: '50%', bottom: '20%', ease:Elastic.easeIn }).delay(5));

        var ss_spaceCraft1 = new ScrollScene({
                triggerElement: '.welcomeTop',
                triggerHook: 'onLeave'
            }).addTo(controller)
                .setTween(TweenMax.to(spaceCraft1, 1, 
                    { visibility: 'hidden', opacity: 0, ease:Linear.easeOut }).delay(7));
    } else {
        var ss_spaceCraft1 = new ScrollScene({
                triggerElement: '.welcomeTop',
                triggerHook: 'onLeave'
            }).addTo(controller)
                .setTween(TweenMax.to(spaceCraft1, 1, 
                    { visibility: 'hidden', opacity: 0, ease:Linear.easeOut }));
    } // onMobile

    if (winWidth <= xsmall){
        var ss_spaceCraft2 = new ScrollScene({
            triggerElement: '.welcomeTop',
            triggerHook: 'onLeave'
        }).addTo(controller)
            .setTween(TweenMax.fromTo(spaceCraft2, 1,
                { opacity: 0, width: '7em', height: '2em', left: '50%', bottom: '20%'},  
                    { visibility: 'visible', opacity: 1, width:'11em', height:'3em', left: '50%', bottom: '20%', ease:Linear.easeIn, onComplete: spaceCraft2_controller }).delay(7));
    } else {
        var ss_spaceCraft2 = new ScrollScene({
            triggerElement: '.welcomeTop',
            triggerHook: 'onLeave'
        }).addTo(controller)
            .setTween(TweenMax.fromTo(spaceCraft2, 1,
                { opacity: 0, width: '11em', height: '3em', left: '50%', bottom: '20%'},  
                    { visibility: 'visible', opacity: 1, width:'15em', height:'4em', left: '50%', bottom: '20%', ease:Linear.easeIn, onComplete: spaceCraft2_controller }).delay(7));
    }

    var ss_spaceCraft2a = new ScrollScene({
                triggerElement: '.welcomeTop',
                triggerHook: 'onLeave',
                offset: 100
            }).addTo(controller)
                .setTween(TweenMax.fromTo(spaceCraft2, 1, 
                    { visibility: 'visible'},
                        { bottom: '-1em', opacity: '0', width:'4', height:'1', ease:Elastic.easeIn }));

    var ss_spaceCraft3 = new ScrollScene({
                triggerElement: 'footer',
                triggerHook: 'onEnter',
                offset: 0,
                duration: 100
            }).addTo(controller)
                .setTween(TweenMax.fromTo(spaceCraft3, 1, 
                    { visibility: 'hidden', opacity: 1, top: '20%', right: '-175px', width:'10em', height:'3em', zIndex: '1', ease:Elastic.easeIn },
                        { visibility: 'visible', opacity: 1, top: '5%',  right: '3000px', width:'7em', height:'2em', ease:Elastic.easeIn }).delay(1));

    var ss_welcomeMsg_enter = new ScrollScene({
            triggerElement: '.welcomeTop',
            triggerHook: 'onLeave'
        }).addTo(controller)
            .setTween(welcomeMsg);

    var ss_pinAbout = new ScrollScene({
            triggerElement: '.aboutTop',
            triggerHook: 'onLeave',
            duration: yPosAbout
        }).addTo(controller)
            .setPin('#about .sceneHeader .sceneTitle');

    var ss_pinTitle = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onLeave',
            duration: yPosProjects
        }).addTo(controller)
            .setPin('#projects .sceneHeader .sceneTitle');

    var ss_pinContact = new ScrollScene({
            triggerElement: '.contactTop',
            triggerHook: 'onLeave'
        }).addTo(controller)
            .setPin('#contact .sceneHeader .sceneTitle');
            //.setTween(navActive);

    var ss_welcomeSection = new ScrollScene({
            triggerElement: '.aboutTop',
            triggerHook: 'onEnter',
            offset: 50
        }).addTo(controller)
            .setTween(TweenMax.to("#welcome", 1, {opacity: 0, top: '15em', ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 300
            }).addTo(controller)
                .setTween(TweenMax.from("#backTop", 1, {opacity: 0, ease: Linear.easeNone}));

    if(!onMobile){
        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 300
            }).addTo(controller)
                .setTween(TweenMax.from("#about", 1, {opacity: 0, ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 450
            }).addTo(controller)
                .setTween(TweenMax.from("#about > .mainContent > .row1 > article#competencies", 1, {position: 'relative', left: '-800px', ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 450
            }).addTo(controller)
                .setTween(TweenMax.from("#about > .mainContent > .row1 > article#skills", 1, {position: 'relative', right: '-800px', ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 450
            }).addTo(controller)
                .setTween(TweenMax.from("#about > .mainContent > .row2 > article", 1, {bottom: '-450px', ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 450
            }).addTo(controller)
                .setTween(TweenMax.from("#about section h1", 1, {opacity: 0, ease: Linear.easeNone}));

        var ss_aboutSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 450
            }).addTo(controller)
                .setTween(TweenMax.from("#job", 1, {onComplete: experience_in}).delay(3));
    } //!onMobile

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onEnter',
            offset: 250
        }).addTo(controller)
            .setTween(TweenMax.to("#about", 1, {opacity: 0, ease: Linear.easeNone}));

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onEnter',
            offset: 200
        }).addTo(controller)
            .setTween(TweenMax.to('#about .mainContent .row2', 1, {bottom: '200px', opacity: '0', ease: Linear.easeNone}));

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onEnter',
            offset: 150
        }).addTo(controller)
            .setTween(TweenMax.to("#about > .mainContent > .row1 > article#competencies", 1, {position: 'relative', left: '-800px', bottom: '200px', ease: Linear.easeNone}));

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onEnter',
            offset: 150
        }).addTo(controller)
            .setTween(TweenMax.to("#about > .mainContent > .row1 > article#skills", 1, {position: 'relative', right: '-800px', bottom: '200px', ease: Linear.easeNone}));

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.aboutTop',
            triggerHook: 'onEnter',
            offset: 10
        }).addTo(controller)
            .setTween(TweenMax.to("#about", 1, {onComplete: bars_in}).delay(0.5));

    var ss_aboutSection = new ScrollScene({
            triggerElement: '.projectsTop',
            triggerHook: 'onEnter',
            offset: 250
        }).addTo(controller)
            .setTween(TweenMax.to("#portfolio-items", 1, {opacity: 1, right: '0px', ease: Linear.easeNone}));

    if(!onMobile){
        var ss_projectSection = new ScrollScene({
                triggerElement: '.projectsTop',
                triggerHook: 'onEnter',
                offset: 150
            }).addTo(controller)
                .setTween(TweenMax.from("#portfolio", 1, {position: 'relative', opacity: 0, zIndex: '-1', bottom: '200px', ease: Linear.easeNone}));

        var ss_projectSection = new ScrollScene({
                triggerElement: '.aboutTop',
                triggerHook: 'onEnter',
                offset: 150
            }).addTo(controller)
                .setTween(TweenMax.from("#projects section h1", 1, {opacity: 0, position: 'relative', bottom: '500px', ease: Linear.easeNone}));
    } // !onMobile

    var ss_projectSection = new ScrollScene({
            triggerElement: '.contactTop',
            triggerHook: 'onEnter',
            offset: 150
        }).addTo(controller)
            .setTween(TweenMax.to("#portfolio", 1, {position: 'relative', opacity: 0, bottom: '200px', ease: Linear.easeNone}));

    if(!onMobile){
        var ss_contactSection = new ScrollScene({
                triggerElement: '.contactTop',
                triggerHook: 'onEnter',
                offset: 200
            }).addTo(controller)
                .setTween(TweenMax.from("#contact", 1, {opacity: 0, ease: Linear.easeNone}).delay(1));

        var ss_contactSection = new ScrollScene({
                triggerElement: '.contactTop',
                triggerHook: 'onEnter',
                offset: 200
            }).addTo(controller)
                .setTween(TweenMax.from("#contact section h1", 1, {opacity: 0, ease: Linear.easeNone}).delay(1));

        var ss_contactSection = new ScrollScene({
                triggerElement: '.contactTop',
                triggerHook: 'onEnter',
                offset: 200
            }).addTo(controller)
                .setTween(TweenMax.from("#formContent", 1, {position: 'relative', right: '-600px', ease: Linear.easeNone}).delay(3));

        var ss_contactSection = new ScrollScene({
                triggerElement: '.contactTop',
                triggerHook: 'onEnter',
                offset: 200
            }).addTo(controller)
                .setTween(TweenMax.from("#googleMap", 1, {position: 'relative', right: '-600px', ease: Linear.easeNone}).delay(3));
    } // !onMobile

    //On window scroll hide spaceCraft
    $(window).scroll(function(){
        var windowpos       = $(window).scrollTop()+navHeight;
        var scrollBarPos    = $(window).scrollTop();

        if (windowpos > $('.projectsTop').offset().top || windowpos > $('.contactTop').offset().top) {
            if($(spaceCraft1).css('opacity') == 1 || $(spaceCraft2).css('opacity') == 1) {
                $(spaceCraft1).hide();
                $(spaceCraft2).hide();
            }
        }
    });

    if(winHeight < 300){
        $('#spaceCraft-1').css({'display': 'none'});
    } //winHeight

	
    /*===================================================================================*/
    /*  CONTACT FORM                                                                     */
    /*===================================================================================*/
    $('#formContent').mouseover(function(){
        $(this).fadeIn(function(){
            $(this).addClass('opaDarkBlack-bg');
        });

        $('form input', this).mouseenter(function(){
            $(this).addClass('innerGlow');
        }).mouseleave(function(){
            $(this).removeClass('innerGlow');
        });

        $('form textarea', this).mouseenter(function(){
            $(this).addClass('innerGlow');
        }).mouseleave(function(){
            $(this).removeClass('innerGlow');
        });

    });

     $('#formContent').mouseout(function(){
        $(this).fadeIn(function(){
            $(this).removeClass('opaDarkBlack-bg');
        });
     });

    $('#contactFormSubmit').hover(function(){
        $(this).toggleClass('outterGlow');
    });

    $(".validate").validate();
    var form        = $('#contactform');
    var submit      = $('#contactFormSubmit');
    var alertx      = $('.form-respond');
    var formHeader  = $('.formHeader');
    // form submit event
    $(document).on('submit', '#contactform', function(e) {
        e.preventDefault(); // prevent default form submit
        // sending ajax request through jQuery
        $.ajax({
            url: 'php/sendemail.php',
            type: 'POST',
            dataType: 'html',
            data: form.serialize(),
            beforeSend: function() {
                alertx.fadeOut();
                formHeader.css({'visibility' :  'hidden'});
                submit.after('<img src="images/icons/loader-bars.gif"">.'); 
                submit.hide();
                //submit.html('Sending....'); // change submit button text
            },
            success: function(data) {
                form.fadeOut(300);

                alertx.html(data).fadeIn(1000); // fade in response data    
                // setTimeout(function() {
                //     alertx.html(data).fadeOut(300);
                //     $('#name, #email, #message').val('')
                //     form.fadeIn(1800);
                // }, 4000);
            },
            error: function(e) {
                console.log(e)
            }
        });
    });

	/*===================================================================================*/
    /*  GOOGLE MAPS                                                                      */
    /*===================================================================================*/
	function initMap() {
        var myLatLng = new google.maps.LatLng(40.816963,-73.904572);
        var mapCanvas = document.getElementById('googleMap');
        var mapOptions = {
          center: myLatLng,
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hi!'
        });
    }
    google.maps.event.addDomListener(window, 'load', initMap);

    /*===================================================================================*/
    /*  PORTFOLIO                                                                        */
    /*===================================================================================*/
    var portfolio = portfolio || {},
        $portfolioItems = $('#portfolio-items'),
        $filtrable = $('#portfolio-filter');

    //portfolio full screen description
    portfolio.fullWidth = function() {
        $(window).load(function() {
            $portfolioItems.isotope({
                animationEngine: 'best-available',
                animationOptions: {
                    duration: 250,
                    easing: 'easeInOutSine',
                    queue: false
                }
            });
        });
    }; 

    //Portfolio ajax init
    portfolio.ajax = function() {
        function portfolioInit() {
            var newHash = "",
                $mainContent = $("#portfolio-ajax"),
                $pageWrap = $("#portfolio-wrap"),
                root = '#!projects/',
                rootLength = root.length,
                url;
            $portfolioItems.find("a").click(function() {
                window.location.hash = $(this).attr("href");
                return false;
            });
            $(window).bind('hashchange', function() {
                newHash = window.location.hash;
                url = newHash.replace(/[#\!]/g, '');
                if (newHash.substr(0, rootLength) == root) {
                    if ($pageWrap.is(':hidden')) {
                        $pageWrap.slideDown('3000', function() {});
                    }
                    $pageWrap.niceScroll({
                        cursorcolor: "#666",
                        cursorwidth: 6,
                        cursorborder: 0,
                        cursorborderradius: 0,
                        touchbehavior: true,
                        bouncescroll: true
                    });
                    $pageWrap.append('<div id="preloader"></div>');
                    $mainContent.load(url + " .single-portfolio", function(xhr, statusText, request) {
                        if (statusText == "success") {
                            setTimeout(function() {
                                // $(".slider_container").flexslider({
                                //     directionNav: true,
                                //     controlNav: false
                                // });
                                // $('.single-portfolio .media-container').fitVids();
                                $pageWrap.find('#preloader').remove();
                            }, 300);
                        }
                        if (statusText == "error") {
                            $mainContent.html('<div class="row pad-top pad-bottom"><div class="col-md-12 pad-top pad-bottom"><div class="alert-message error"><p>The Content cannot be loaded.</p></div></div></div>');
                            $pageWrap.find('#preloader').remove();
                        }
                        closeProject();
                        nextProject();
                        prevProject();
                    });
                    $("#portfolio-items article").removeClass("current");
                    $("#portfolio-items a").click(function(){
                        $('html, body').animate({
                            scrollTop: $("#projects").offset().top
                        }, 1000);
                        $("body").css("overflow", "hidden"); //disable scroll
                    })
                    $("#portfolio-items a[href='" + newHash + "']").parent().addClass("current");
                    var projectIndex = $('#portfolio-items').find('article.current').index();
                    var projectLength = $('#portfolio-items article').length - 1;
                    if (projectIndex == projectLength) {
                        jQuery('#next-project').addClass('disabled');
                        jQuery('#prev-project').removeClass('disabled');
                    } else if (projectIndex == 0) {
                        jQuery('#prev-project').addClass('disabled');
                        jQuery('#next-project').removeClass('disabled');
                    } else {
                        jQuery('#prev-project, #next-project').removeClass('disabled');
                    }
                } else if (newHash == '') {
                    $('#portfolio-wrap').fadeOut('100', function() {
                        $('.single-portfolio').remove();
                    });
                }
            });
            $(window).trigger('hashchange');
        }

        function closeProject() {
            $('#close-project').on('click', function() {
                $("body").css("overflow-y", "auto"); // display scrollbars
                $('#portfolio-wrap').fadeOut('100', function() {
                    $('.single-portfolio').remove();
                });
                history.pushState('', document.title, window.location.pathname);
                window.location.hash = '';
                return false;
            });
        }

        function nextProject() {
            $("#next-project").on("click", function() {
                if (window.location.href.indexOf('#undefined') > -1) {
                    $('.single-portfolio').remove();
                    window.location.hash = '!projects/liberty-travel.html';
                } else {
                    $('.single-portfolio').remove();
                    window.location.hash = $("#portfolio-items .current").next().find('a').attr("href");
                }
                return false;
            });
        }

        function prevProject() {
            $("#prev-project").on("click", function() {
                $('.single-portfolio').remove();
                window.location.hash = $("#portfolio-items .current").prev().find('a').attr("href");
                return false;
            });
        }
        if ($portfolioItems.length) {
            portfolioInit();
        }
    };
    portfolio.fullWidth();
    portfolio.ajax();
}); //on load
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"jquery":2}],2:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-18T15:11Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

},{}]},{},[1])