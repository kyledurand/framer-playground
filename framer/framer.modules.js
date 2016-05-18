require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"constants":[function(require,module,exports){
exports.Metrics = {
  ScreenWidth: 740,
  ScreenHeight: 1340,
  SmallMargin: 14
};

exports.Colors = {
  White: '#fff',
  Green: '#2dd7aa',
  Gray: '#808080'
};

exports.Defaults = {
  CardWidth: exports.Metrics.ScreenWidth - (exports.Metrics.SmallMargin * 2),
  CardHeight: 460,
  SmallMargin: exports.Metrics.SmallMargin,
  BorderRadius: 6
};


},{}],"keyboard":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.keyboardLayer = new Layer({
  x: 0,
  y: Screen.height,
  width: 750,
  height: 432,
  image: "modules/keyboard.png"
});

exports.keyboardLayer.states.add({
  "shown": {
    y: Screen.height - exports.keyboardLayer.height
  }
});

exports.keyboardLayer.states.animationOptions = {
  curve: "spring(500,50,15)"
};

exports.Input = (function(superClass) {
  extend(Input, superClass);

  Input.define("style", {
    get: function() {
      return this.input.style;
    },
    set: function(value) {
      return _.extend(this.input.style, value);
    }
  });

  Input.define("value", {
    get: function() {
      return this.input.value;
    },
    set: function(value) {
      return this.input.value = value;
    }
  });

  function Input(options) {
    if (options == null) {
      options = {};
    }
    if (options.setup == null) {
      options.setup = false;
    }
    if (options.width == null) {
      options.width = Screen.width;
    }
    if (options.clip == null) {
      options.clip = false;
    }
    if (options.height == null) {
      options.height = 60;
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = options.setup ? "rgba(255, 60, 47, .5)" : "transparent";
    }
    if (options.fontSize == null) {
      options.fontSize = 30;
    }
    if (options.lineHeight == null) {
      options.lineHeight = 30;
    }
    if (options.padding == null) {
      options.padding = 10;
    }
    if (options.text == null) {
      options.text = "";
    }
    if (options.placeholder == null) {
      options.placeholder = "";
    }
    if (options.virtualKeyboard == null) {
      options.virtualKeyboard = Utils.isMobile() ? false : true;
    }
    if (options.type == null) {
      options.type = "text";
    }
    if (options.goButton == null) {
      options.goButton = false;
    }
    Input.__super__.constructor.call(this, options);
    if (options.placeholderColor != null) {
      this.placeholderColor = options.placeholderColor;
    }
    this.input = document.createElement("input");
    this.input.id = "input-" + (_.now());
    this.input.style.cssText = "font-size: " + options.fontSize + "px; line-height: " + options.lineHeight + "px; padding: " + options.padding + "px; width: " + options.width + "px; height: " + options.height + "px; border: none; outline-width: 0; background-image: url(about:blank); background-color: " + options.backgroundColor + ";";
    this.input.value = options.text;
    this.input.type = options.type;
    this.input.placeholder = options.placeholder;
    this.form = document.createElement("form");
    if (options.goButton) {
      this.form.action = "#";
      this.form.addEventListener("submit", function(event) {
        return event.preventDefault();
      });
    }
    this.form.appendChild(this.input);
    this._element.appendChild(this.form);
    this.backgroundColor = "transparent";
    if (this.placeholderColor) {
      this.updatePlaceholderColor(options.placeholderColor);
    }
    if (!Utils.isMobile() || options.virtualKeyboard) {
      this.input.addEventListener("focus", function() {
        exports.keyboardLayer.bringToFront();
        return exports.keyboardLayer.states.next();
      });
      this.input.addEventListener("blur", function() {
        return exports.keyboardLayer.states["switch"]("default");
      });
    }
  }

  Input.prototype.updatePlaceholderColor = function(color) {
    var css;
    this.placeholderColor = color;
    if (this.pageStyle != null) {
      document.head.removeChild(this.pageStyle);
    }
    this.pageStyle = document.createElement("style");
    this.pageStyle.type = "text/css";
    css = "#" + this.input.id + "::-webkit-input-placeholder { color: " + this.placeholderColor + "; }";
    this.pageStyle.appendChild(document.createTextNode(css));
    return document.head.appendChild(this.pageStyle);
  };

  Input.prototype.focus = function() {
    return this.input.focus();
  };

  return Input;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva3lsZWR1cmFuZC9jb2RlL3BlcnNvbmFsL2ZyYW1lcndvcmtzLmZyYW1lci9tb2R1bGVzL2NvbnN0YW50cy5jb2ZmZWUiLCIvVXNlcnMva3lsZWR1cmFuZC9jb2RlL3BlcnNvbmFsL2ZyYW1lcndvcmtzLmZyYW1lci9tb2R1bGVzL2tleWJvYXJkLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLE9BQU8sQ0FBQyxPQUFSLEdBQ0U7RUFBQSxXQUFBLEVBQWEsR0FBYjtFQUNBLFlBQUEsRUFBYyxJQURkO0VBRUEsV0FBQSxFQUFhLEVBRmI7OztBQUlGLE9BQU8sQ0FBQyxNQUFSLEdBQ0U7RUFBQSxLQUFBLEVBQU8sTUFBUDtFQUNBLEtBQUEsRUFBTyxTQURQO0VBRUEsSUFBQSxFQUFNLFNBRk47OztBQUlGLE9BQU8sQ0FBQyxRQUFSLEdBQ0U7RUFBQSxTQUFBLEVBQVcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFoQixHQUE4QixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBaEIsR0FBOEIsQ0FBL0IsQ0FBekM7RUFDQSxVQUFBLEVBQVksR0FEWjtFQUVBLFdBQUEsRUFBYSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBRjdCO0VBR0EsWUFBQSxFQUFjLENBSGQ7Ozs7O0FDWEYsSUFBQTs7O0FBQUEsT0FBTyxDQUFDLGFBQVIsR0FBNEIsSUFBQSxLQUFBLENBQzFCO0VBQUEsQ0FBQSxFQUFFLENBQUY7RUFBSyxDQUFBLEVBQUUsTUFBTSxDQUFDLE1BQWQ7RUFBc0IsS0FBQSxFQUFNLEdBQTVCO0VBQWlDLE1BQUEsRUFBTyxHQUF4QztFQUE2QyxLQUFBLEVBQU0sc0JBQW5EO0NBRDBCOztBQUc1QixPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUE3QixDQUNFO0VBQUEsT0FBQSxFQUFTO0lBQUEsQ0FBQSxFQUFHLE1BQU0sQ0FBQyxNQUFQLEdB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MEIsSUFBQyxDQUFBLFNBQTNCO0VBUnNCOztrQkFVeEIsS0FBQSxHQUFPLFNBQUE7V0FDTCxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQVAsQ0FBQTtFQURLOzs7O0dBakVtQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnRzLk1ldHJpY3MgPVxuICBTY3JlZW5XaWR0aDogNzQwXG4gIFNjcmVlbkhlaWdodDogMTM0MFxuICBTbWFsbE1hcmdpbjogMTRcblxuZXhwb3J0cy5Db2xvcnMgPVxuICBXaGl0ZTogJyNmZmYnXG4gIEdyZWVuOiAnIzJkZDdhYSdcbiAgR3JheTogJyM4MDgwODAnXG5cbmV4cG9ydHMuRGVmYXVsdHMgPVxuICBDYXJkV2lkdGg6IGV4cG9ydHMuTWV0cmljcy5TY3JlZW5XaWR0aCAtIChleHBvcnRzLk1ldHJpY3MuU21hbGxNYXJnaW4gKiAyKVxuICBDYXJkSGVpZ2h0OiA0NjBcbiAgU21hbGxNYXJnaW46IGV4cG9ydHMuTWV0cmljcy5TbWFsbE1hcmdpblxuICBCb3JkZXJSYWRpdXM6IDZcbiIsImV4cG9ydHMua2V5Ym9hcmRMYXllciA9IG5ldyBMYXllclxuICB4OjAsIHk6U2NyZWVuLmhlaWdodCwgd2lkdGg6NzUwLCBoZWlnaHQ6NDMyLCBpbWFnZTpcIm1vZHVsZXMva2V5Ym9hcmQucG5nXCJcblxuZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlcy5hZGRcbiAgXCJzaG93blwiOiB5OiBTY3JlZW4uaGVpZ2h0IC0gZXhwb3J0cy5rZXlib2FyZExheWVyLmhlaWdodFxuXG5leHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuICBjdXJ2ZTogXCJzcHJpbmcoNTAwLDUwLDE1KVwiXG5cbmNsYXNzIGV4cG9ydHMuSW5wdXQgZXh0ZW5kcyBMYXllclxuICBAZGVmaW5lIFwic3R5bGVcIixcbiAgICBnZXQ6IC0+IEBpbnB1dC5zdHlsZVxuICAgIHNldDogKHZhbHVlKSAtPlxuICAgICAgXy5leHRlbmQgQGlucHV0LnN0eWxlLCB2YWx1ZVxuXG4gIEBkZWZpbmUgXCJ2YWx1ZVwiLFxuICAgIGdldDogLT4gQGlucHV0LnZhbHVlXG4gICAgc2V0OiAodmFsdWUpIC0+XG4gICAgICBAaW5wdXQudmFsdWUgPSB2YWx1ZVxuXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucyA9IHt9KSAtPlxuICAgIG9wdGlvbnMuc2V0dXAgPz0gZmFsc2VcbiAgICBvcHRpb25zLndpZHRoID89IFNjcmVlbi53aWR0aFxuICAgIG9wdGlvbnMuY2xpcCA/PSBmYWxzZVxuICAgIG9wdGlvbnMuaGVpZ2h0ID89IDYwXG4gICAgb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPz0gaWYgb3B0aW9ucy5zZXR1cCB0aGVuIFwicmdiYSgyNTUsIDYwLCA0NywgLjUpXCIgZWxzZSBcInRyYW5zcGFyZW50XCJcbiAgICBvcHRpb25zLmZvbnRTaXplID89IDMwXG4gICAgb3B0aW9ucy5saW5lSGVpZ2h0ID89IDMwXG4gICAgb3B0aW9ucy5wYWRkaW5nID89IDEwXG4gICAgb3B0aW9ucy50ZXh0ID89IFwiXCJcbiAgICBvcHRpb25zLnBsYWNlaG9sZGVyID89IFwiXCJcbiAgICBvcHRpb25zLnZpcnR1YWxLZXlib2FyZCA/PSBpZiBVdGlscy5pc01vYmlsZSgpIHRoZW4gZmFsc2UgZWxzZSB0cnVlXG4gICAgb3B0aW9ucy50eXBlID89IFwidGV4dFwiXG4gICAgb3B0aW9ucy5nb0J1dHRvbiA/PSBmYWxzZVxuXG4gICAgc3VwZXIgb3B0aW9uc1xuXG4gICAgQHBsYWNlaG9sZGVyQ29sb3IgPSBvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3IgaWYgb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yP1xuICAgIEBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJpbnB1dFwiXG4gICAgQGlucHV0LmlkID0gXCJpbnB1dC0je18ubm93KCl9XCJcbiAgICBAaW5wdXQuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOiAje29wdGlvbnMuZm9udFNpemV9cHg7IGxpbmUtaGVpZ2h0OiAje29wdGlvbnMubGluZUhlaWdodH1weDsgcGFkZGluZzogI3tvcHRpb25zLnBhZGRpbmd9cHg7IHdpZHRoOiAje29wdGlvbnMud2lkdGh9cHg7IGhlaWdodDogI3tvcHRpb25zLmhlaWdodH1weDsgYm9yZGVyOiBub25lOyBvdXRsaW5lLXdpZHRoOiAwOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYWJvdXQ6YmxhbmspOyBiYWNrZ3JvdW5kLWNvbG9yOiAje29wdGlvbnMuYmFja2dyb3VuZENvbG9yfTtcIlxuICAgIEBpbnB1dC52YWx1ZSA9IG9wdGlvbnMudGV4dFxuICAgIEBpbnB1dC50eXBlID0gb3B0aW9ucy50eXBlXG4gICAgQGlucHV0LnBsYWNlaG9sZGVyID0gb3B0aW9ucy5wbGFjZWhvbGRlclxuICAgIEBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcImZvcm1cIlxuXG4gICAgaWYgb3B0aW9ucy5nb0J1dHRvblxuICAgICAgQGZvcm0uYWN0aW9uID0gXCIjXCJcbiAgICAgIEBmb3JtLmFkZEV2ZW50TGlzdGVuZXIgXCJzdWJtaXRcIiwgKGV2ZW50KSAtPlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBAZm9ybS5hcHBlbmRDaGlsZCBAaW5wdXRcbiAgICBAX2VsZW1lbnQuYXBwZW5kQ2hpbGQgQGZvcm1cblxuICAgIEBiYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcbiAgICBAdXBkYXRlUGxhY2Vob2xkZXJDb2xvciBvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3IgaWYgQHBsYWNlaG9sZGVyQ29sb3JcblxuICAgIGlmICFVdGlscy5pc01vYmlsZSgpIHx8IG9wdGlvbnMudmlydHVhbEtleWJvYXJkXG4gICAgICBAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImZvY3VzXCIsIC0+XG4gICAgICAgIGV4cG9ydHMua2V5Ym9hcmRMYXllci5icmluZ1RvRnJvbnQoKVxuICAgICAgICBleHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzLm5leHQoKVxuICAgICAgQGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJibHVyXCIsIC0+XG4gICAgICAgIGV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZXMuc3dpdGNoIFwiZGVmYXVsdFwiXG5cbiAgdXBkYXRlUGxhY2Vob2xkZXJDb2xvcjogKGNvbG9yKSAtPlxuICAgIEBwbGFjZWhvbGRlckNvbG9yID0gY29sb3JcbiAgICBpZiBAcGFnZVN0eWxlP1xuICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCBAcGFnZVN0eWxlXG4gICAgQHBhZ2VTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJzdHlsZVwiXG4gICAgQHBhZ2VTdHlsZS50eXBlID0gXCJ0ZXh0L2Nzc1wiXG4gICAgY3NzID0gXCIjI3tAaW5wdXQuaWR9Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QHBsYWNlaG9sZGVyQ29sb3J9OyB9XCJcbiAgICBAcGFnZVN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlIGNzcylcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkIEBwYWdlU3R5bGVcblxuICBmb2N1czogKCkgLT5cbiAgICBAaW5wdXQuZm9jdXMoKVxuIl19
