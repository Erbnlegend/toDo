/**
 * lucide v0.100.0 - ISC
 */

 (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lucide = {}));
})(this, (function (exports) { 'use strict';

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  /**
   * Creates a new HTMLElement from icon node
   * @param {string} tag
   * @param {object} attrs
   * @param {array} children
   * @returns {HTMLElement}
   */
  var createElement = function createElement(tag, attrs, children) {
    if (children === void 0) {
      children = [];
    }
    var element = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.keys(attrs).forEach(function (name) {
      element.setAttribute(name, attrs[name]);
    });
    if (children.length) {
      children = children.forEach(function (child) {
        var childElement = createElement.apply(void 0, child);
        element.appendChild(childElement);
      });
    }
    return element;
  };

  /**
   * Creates a new HTMLElement from icon node
   * @param {[tag: string, attrs: object, children: array]} iconNode
   * @returns {HTMLElement}
   */
  var createElement$1 = (function (_ref) {
    var tag = _ref[0],
      attrs = _ref[1],
      children = _ref[2];
    return createElement(tag, attrs, children);
  });

  /**
   * Get the attributes of an HTML element.
   * @param {HTMLElement} element
   * @returns {Object}
   */
  var getAttrs = function getAttrs(element) {
    return Array.from(element.attributes).reduce(function (attrs, attr) {
      attrs[attr.name] = attr.value;
      return attrs;
    }, {});
  };

  /**
   * Gets the classNames of an attributes Object.
   * @param {Object} attrs
   * @returns {Array}
   */
  var getClassNames = function getClassNames(attrs) {
    if (typeof attrs === 'string') return attrs;
    if (!attrs || !attrs["class"]) return '';
    if (attrs["class"] && typeof attrs["class"] === 'string') {
      return attrs["class"].split(' ');
    }
    if (attrs["class"] && Array.isArray(attrs["class"])) {
      return attrs["class"];
    }
    return '';
  };

  /**
   * Combines the classNames of array of classNames to a String
   * @param {array} arrayOfClassnames
   * @returns {string}
   */
  var combineClassNames = function combineClassNames(arrayOfClassnames) {
    var classNameArray = arrayOfClassnames.flatMap(getClassNames);
    return classNameArray.map(function (classItem) {
      return classItem.trim();
    }).filter(Boolean).filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).join(' ');
  };
  var toPascalCase = function toPascalCase(string) {
    return string.replace(/(\w)(\w*)(_|-|\s*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    });
  };

  /**
   * ReplaceElement, replaces the given element with the created icon.
   * @param {HTMLElement} element
   * @param {{ nameAttr: string, icons: object, attrs: object }} options: { nameAttr, icons, attrs }
   * @returns {Function}
   */
  var replaceElement = (function (element, _ref) {
    var nameAttr = _ref.nameAttr,
      icons = _ref.icons,
      attrs = _ref.attrs;
    var iconName = element.getAttribute(nameAttr);
    var ComponentName = toPascalCase(iconName);
    var iconNode = icons[ComponentName];
    if (!iconNode) {
      return console.warn(element.outerHTML + " icon name was not found in the provided icons object.");
    }
    var elementAttrs = getAttrs(element);
    var tag = iconNode[0],
      iconAttributes = iconNode[1],
      children = iconNode[2];
    var iconAttrs = _extends({}, iconAttributes, {
      'icon-name': iconName
    }, attrs, elementAttrs);
    var classNames = combineClassNames(['lucide', "lucide-" + iconName, elementAttrs, attrs]);
    if (classNames) {
      iconAttrs["class"] = classNames;
    }
    var svgElement = createElement$1([tag, iconAttrs, children]);
    return element.parentNode.replaceChild(svgElement, element);
  });

  var defaultAttributes = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  };

  var Accessibility = ['svg', defaultAttributes, [['circle', {
    cx: '16',
    cy: '4',
    r: '1'
  }], ['path', {
    d: 'm18 19 1-7-5.87.94'
  }], ['path', {
    d: 'm5 8 3-3 5.5 3-2.21 3.1'
  }], ['path', {
    d: 'M4.24 14.48c-.19.58-.27 1.2-.23 1.84a5 5 0 0 0 5.31 4.67c.65-.04 1.25-.2 1.8-.46'
  }], ['path', {
    d: 'M13.76 17.52c.19-.58.27-1.2.23-1.84a5 5 0 0 0-5.31-4.67c-.65.04-1.25.2-1.8.46'
  }]]];
  var Accessibility$1 = Accessibility;

  var Activity = ['svg', defaultAttributes, [['polyline', {
    points: '22 12 18 12 15 21 9 3 6 12 2 12'
  }]]];
  var Activity$1 = Activity;

  var AirVent = ['svg', defaultAttributes, [['path', {
    d: 'M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2'
  }], ['path', {
    d: 'M6 8h12'
  }], ['path', {
    d: 'M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12'
  }], ['path', {
    d: 'M6.6 15.6A2 2 0 1 0 10 17v-5'
  }]]];
  var AirVent$1 = AirVent;

  var Airplay = ['svg', defaultAttributes, [['path', {
    d: 'M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1'
  }], ['polygon', {
    points: '12 15 17 21 7 21 12 15'
  }]]];
  var Airplay$1 = Airplay;

  var AlarmCheck = ['svg', defaultAttributes, [['path', {
    d: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'
  }], ['path', {
    d: 'M5 3 2 6'
  }], ['path', {
    d: 'm22 6-3-3'
  }], ['path', {
    d: 'm6 19-2 2'
  }], ['path', {
    d: 'm18 19 2 2'
  }], ['path', {
    d: 'm9 13 2 2 4-4'
  }]]];
  var AlarmCheck$1 = AlarmCheck;

  var AlarmClockOff = ['svg', defaultAttributes, [['path', {
    d: 'M6.87 6.87a8 8 0 1 0 11.26 11.26'
  }], ['path', {
    d: 'M19.9 14.25A7.44 7.44 0 0 0 20 13a8 8 0 0 0-8-8 7.44 7.44 0 0 0-1.25.1'
  }], ['path', {
    d: 'm22 6-3-3'
  }], ['path', {
    d: 'm6 19-2 2'
  }], ['path', {
    d: 'm2 2 20 20'
  }], ['path', {
    d: 'M4 4 2 6'
  }]]];
  var AlarmClockOff$1 = AlarmClockOff;

  var AlarmClock = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '13',
    r: '8'
  }], ['path', {
    d: 'M12 9v4l2 2'
  }], ['path', {
    d: 'M5 3 2 6'
  }], ['path', {
    d: 'm22 6-3-3'
  }], ['path', {
    d: 'm6 19-2 2'
  }], ['path', {
    d: 'm18 19 2 2'
  }]]];
  var AlarmClock$1 = AlarmClock;

  var AlarmMinus = ['svg', defaultAttributes, [['path', {
    d: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'
  }], ['path', {
    d: 'M5 3 2 6'
  }], ['path', {
    d: 'm22 6-3-3'
  }], ['path', {
    d: 'm6 19-2 2'
  }], ['path', {
    d: 'm18 19 2 2'
  }], ['path', {
    d: 'M9 13h6'
  }]]];
  var AlarmMinus$1 = AlarmMinus;

  var AlarmPlus = ['svg', defaultAttributes, [['path', {
    d: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'
  }], ['path', {
    d: 'M5 3 2 6'
  }], ['path', {
    d: 'm22 6-3-3'
  }], ['path', {
    d: 'm6 19-2 2'
  }], ['path', {
    d: 'm18 19 2 2'
  }], ['path', {
    d: 'M12 10v6'
  }], ['path', {
    d: 'M9 13h6'
  }]]];
  var AlarmPlus$1 = AlarmPlus;

  var Album = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['polyline', {
    points: '11 3 11 11 14 8 17 11 17 3'
  }]]];
  var Album$1 = Album;

  var AlertCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['line', {
    x1: '12',
    y1: '8',
    x2: '12',
    y2: '12'
  }], ['line', {
    x1: '12',
    y1: '16',
    x2: '12.01',
    y2: '16'
  }]]];
  var AlertCircle$1 = AlertCircle;

  var AlertOctagon = ['svg', defaultAttributes, [['polygon', {
    points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'
  }], ['line', {
    x1: '12',
    y1: '8',
    x2: '12',
    y2: '12'
  }], ['line', {
    x1: '12',
    y1: '16',
    x2: '12.01',
    y2: '16'
  }]]];
  var AlertOctagon$1 = AlertOctagon;

  var AlertTriangle = ['svg', defaultAttributes, [['path', {
    d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z'
  }], ['line', {
    x1: '12',
    y1: '9',
    x2: '12',
    y2: '13'
  }], ['line', {
    x1: '12',
    y1: '17',
    x2: '12.01',
    y2: '17'
  }]]];
  var AlertTriangle$1 = AlertTriangle;

  var AlignCenterHorizontal = ['svg', defaultAttributes, [['path', {
    d: 'M2 12h20'
  }], ['path', {
    d: 'M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4'
  }], ['path', {
    d: 'M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4'
  }], ['path', {
    d: 'M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1'
  }], ['path', {
    d: 'M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1'
  }]]];
  var AlignCenterHorizontal$1 = AlignCenterHorizontal;

  var AlignCenterVertical = ['svg', defaultAttributes, [['path', {
    d: 'M12 2v20'
  }], ['path', {
    d: 'M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4'
  }], ['path', {
    d: 'M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4'
  }], ['path', {
    d: 'M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1'
  }], ['path', {
    d: 'M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1'
  }]]];
  var AlignCenterVertical$1 = AlignCenterVertical;

  var AlignCenter = ['svg', defaultAttributes, [['line', {
    x1: '21',
    y1: '6',
    x2: '3',
    y2: '6'
  }], ['line', {
    x1: '17',
    y1: '12',
    x2: '7',
    y2: '12'
  }], ['line', {
    x1: '19',
    y1: '18',
    x2: '5',
    y2: '18'
  }]]];
  var AlignCenter$1 = AlignCenter;

  var AlignEndHorizontal = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '2',
    width: '6',
    height: '16',
    rx: '2'
  }], ['rect', {
    x: '14',
    y: '9',
    width: '6',
    height: '9',
    rx: '2'
  }], ['path', {
    d: 'M22 22H2'
  }]]];
  var AlignEndHorizontal$1 = AlignEndHorizontal;

  var AlignEndVertical = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '4',
    width: '16',
    height: '6',
    rx: '2'
  }], ['rect', {
    x: '9',
    y: '14',
    width: '9',
    height: '6',
    rx: '2'
  }], ['path', {
    d: 'M22 22V2'
  }]]];
  var AlignEndVertical$1 = AlignEndVertical;

  var AlignHorizontalDistributeCenter = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '5',
    width: '6',
    height: '14',
    rx: '2'
  }], ['rect', {
    x: '14',
    y: '7',
    width: '6',
    height: '10',
    rx: '2'
  }], ['path', {
    d: 'M17 22v-5'
  }], ['path', {
    d: 'M17 7V2'
  }], ['path', {
    d: 'M7 22v-3'
  }], ['path', {
    d: 'M7 5V2'
  }]]];
  var AlignHorizontalDistributeCenter$1 = AlignHorizontalDistributeCenter;

  var AlignHorizontalDistributeEnd = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '5',
    width: '6',
    height: '14',
    rx: '2'
  }], ['rect', {
    x: '14',
    y: '7',
    width: '6',
    height: '10',
    rx: '2'
  }], ['path', {
    d: 'M10 2v20'
  }], ['path', {
    d: 'M20 2v20'
  }]]];
  var AlignHorizontalDistributeEnd$1 = AlignHorizontalDistributeEnd;

  var AlignHorizontalDistributeStart = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '5',
    width: '6',
    height: '14',
    rx: '2'
  }], ['rect', {
    x: '14',
    y: '7',
    width: '6',
    height: '10',
    rx: '2'
  }], ['path', {
    d: 'M4 2v20'
  }], ['path', {
    d: 'M14 2v20'
  }]]];
  var AlignHorizontalDistributeStart$1 = AlignHorizontalDistributeStart;

  var AlignHorizontalJustifyCenter = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '5',
    width: '6',
    height: '14',
    rx: '2'
  }], ['rect', {
    x: '16',
    y: '7',
    width: '6',
    height: '10',
    rx: '2'
  }], ['path', {
    d: 'M12 2v20'
  }]]];
  var AlignHorizontalJustifyCenter$1 = AlignHorizontalJustifyCenter;

  var AlignHorizontalJustifyEnd = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '5',
    width: '6',
    height: '14',
    rx: '2'
  }], ['rect', {
    x: '12',
    y: '7',
    width: '6',
    height: '10',
    rx: '2'
  }], ['path', {
    d: 'M22 2v20'
  }]]];
  var AlignHorizontalJustifyEnd$1 = AlignHorizontalJustifyEnd;

  var AlignHorizontalJustifyStart = ['svg', defaultAttributes, [['rect', {
    x: '6',
    y: '5',
    width: '6',
    height: '14',
    rx: '2'
  }], ['rect', {
    x: '16',
    y: '7',
    width: '6',
    height: '10',
    rx: '2'
  }], ['path', {
    d: 'M2 2v20'
  }]]];
  var AlignHorizontalJustifyStart$1 = AlignHorizontalJustifyStart;

  var AlignHorizontalSpaceAround = ['svg', defaultAttributes, [['rect', {
    x: '9',
    y: '7',
    width: '6',
    height: '10',
    rx: '2'
  }], ['path', {
    d: 'M4 22V2'
  }], ['path', {
    d: 'M20 22V2'
  }]]];
  var AlignHorizontalSpaceAround$1 = AlignHorizontalSpaceAround;

  var AlignHorizontalSpaceBetween = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '5',
    width: '6',
    height: '14',
    rx: '2'
  }], ['rect', {
    x: '15',
    y: '7',
    width: '6',
    height: '10',
    rx: '2'
  }], ['path', {
    d: 'M3 2v20'
  }], ['path', {
    d: 'M21 2v20'
  }]]];
  var AlignHorizontalSpaceBetween$1 = AlignHorizontalSpaceBetween;

  var AlignJustify = ['svg', defaultAttributes, [['line', {
    x1: '3',
    y1: '6',
    x2: '21',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '12',
    x2: '21',
    y2: '12'
  }], ['line', {
    x1: '3',
    y1: '18',
    x2: '21',
    y2: '18'
  }]]];
  var AlignJustify$1 = AlignJustify;

  var AlignLeft = ['svg', defaultAttributes, [['line', {
    x1: '21',
    y1: '6',
    x2: '3',
    y2: '6'
  }], ['line', {
    x1: '15',
    y1: '12',
    x2: '3',
    y2: '12'
  }], ['line', {
    x1: '17',
    y1: '18',
    x2: '3',
    y2: '18'
  }]]];
  var AlignLeft$1 = AlignLeft;

  var AlignRight = ['svg', defaultAttributes, [['line', {
    x1: '21',
    y1: '6',
    x2: '3',
    y2: '6'
  }], ['line', {
    x1: '21',
    y1: '12',
    x2: '9',
    y2: '12'
  }], ['line', {
    x1: '21',
    y1: '18',
    x2: '7',
    y2: '18'
  }]]];
  var AlignRight$1 = AlignRight;

  var AlignStartHorizontal = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '6',
    width: '6',
    height: '16',
    rx: '2'
  }], ['rect', {
    x: '14',
    y: '6',
    width: '6',
    height: '9',
    rx: '2'
  }], ['path', {
    d: 'M22 2H2'
  }]]];
  var AlignStartHorizontal$1 = AlignStartHorizontal;

  var AlignStartVertical = ['svg', defaultAttributes, [['rect', {
    x: '6',
    y: '14',
    width: '9',
    height: '6',
    rx: '2'
  }], ['rect', {
    x: '6',
    y: '4',
    width: '16',
    height: '6',
    rx: '2'
  }], ['path', {
    d: 'M2 2v20'
  }]]];
  var AlignStartVertical$1 = AlignStartVertical;

  var AlignVerticalDistributeCenter = ['svg', defaultAttributes, [['rect', {
    x: '5',
    y: '14',
    width: '14',
    height: '6',
    rx: '2'
  }], ['rect', {
    x: '7',
    y: '4',
    width: '10',
    height: '6',
    rx: '2'
  }], ['path', {
    d: 'M22 7h-5'
  }], ['path', {
    d: 'M7 7H1'
  }], ['path', {
    d: 'M22 17h-3'
  }], ['path', {
    d: 'M5 17H2'
  }]]];
  var AlignVerticalDistributeCenter$1 = AlignVerticalDistributeCenter;

  var AlignVerticalDistributeEnd = ['svg', defaultAttributes, [['rect', {
    x: '5',
    y: '14',
    width: '14',
    height: '6',
    rx: '2'
  }], ['rect', {
    x: '7',
    y: '4',
    width: '10',
    height: '6',
    rx: '2'
  }], ['path', {
    d: 'M2 20h20'
  }], ['path', {
    d: 'M2 10h20'
  }]]];
  var AlignVerticalDistributeEnd$1 = AlignVerticalDistributeEnd;

  var AlignVerticalDistributeStart = ['svg', defaultAttributes, [['rect', {
    x: '5',
    y: '14',
    width: '14',
    height: '6',
    rx: '2'
  }], ['rect', {
    x: '7',
    y: '4',
    width: '10',
    height: '6',
    rx: '2'
  }], ['path', {
    d: 'M2 14h20'
  }], ['path', {
    d: 'M2 4h20'
  }]]];
  var AlignVerticalDistributeStart$1 = AlignVerticalDistributeStart;

  var AlignVerticalJustifyCenter = ['svg', defaultAttributes, [['rect', {
    x: '5',
    y: '16',
    width: '14',
    height: '6',
    rx: '2'
  }], ['rect', {
    x: '7',
    y: '2',
    width: '10',
    height: '6',
    rx: '2'
  }], ['path', {
    d: 'M2 12h20'
  }]]];
  var AlignVerticalJustifyCenter$1 = AlignVerticalJustifyCenter;

  var AlignVerticalJustifyEnd = ['svg', defaultAttributes, [['rect', {
    x: '5',
    y: '12',
    width: '14',
    height: '6',
    rx: '2'
  }], ['rect', {
    x: '7',
    y: '2',
    width: '10',
    height: '6',
    rx: '2'
  }], ['path', {
    d: 'M2 22h20'
  }]]];
  var AlignVerticalJustifyEnd$1 = AlignVerticalJustifyEnd;

  var AlignVerticalJustifyStart = ['svg', defaultAttributes, [['rect', {
    x: '5',
    y: '16',
    width: '14',
    height: '6',
    rx: '2'
  }], ['rect', {
    x: '7',
    y: '6',
    width: '10',
    height: '6',
    rx: '2'
  }], ['path', {
    d: 'M2 2h20'
  }]]];
  var AlignVerticalJustifyStart$1 = AlignVerticalJustifyStart;

  var AlignVerticalSpaceAround = ['svg', defaultAttributes, [['rect', {
    x: '7',
    y: '9',
    width: '10',
    height: '6',
    rx: '2'
  }], ['path', {
    d: 'M22 20H2'
  }], ['path', {
    d: 'M22 4H2'
  }]]];
  var AlignVerticalSpaceAround$1 = AlignVerticalSpaceAround;

  var AlignVerticalSpaceBetween = ['svg', defaultAttributes, [['rect', {
    x: '5',
    y: '15',
    width: '14',
    height: '6',
    rx: '2'
  }], ['rect', {
    x: '7',
    y: '3',
    width: '10',
    height: '6',
    rx: '2'
  }], ['path', {
    d: 'M2 21h20'
  }], ['path', {
    d: 'M2 3h20'
  }]]];
  var AlignVerticalSpaceBetween$1 = AlignVerticalSpaceBetween;

  var Anchor = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '5',
    r: '3'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '8'
  }], ['path', {
    d: 'M5 12H2a10 10 0 0 0 20 0h-3'
  }]]];
  var Anchor$1 = Anchor;

  var Angry = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M16 16s-1.5-2-4-2-4 2-4 2'
  }], ['path', {
    d: 'M7.5 8 10 9'
  }], ['path', {
    d: 'm14 9 2.5-1'
  }], ['path', {
    d: 'M9 10h0'
  }], ['path', {
    d: 'M15 10h0'
  }]]];
  var Angry$1 = Angry;

  var Annoyed = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M8 15h8'
  }], ['path', {
    d: 'M8 9h2'
  }], ['path', {
    d: 'M14 9h2'
  }]]];
  var Annoyed$1 = Annoyed;

  var Aperture = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['line', {
    x1: '14.31',
    y1: '8',
    x2: '20.05',
    y2: '17.94'
  }], ['line', {
    x1: '9.69',
    y1: '8',
    x2: '21.17',
    y2: '8'
  }], ['line', {
    x1: '7.38',
    y1: '12',
    x2: '13.12',
    y2: '2.06'
  }], ['line', {
    x1: '9.69',
    y1: '16',
    x2: '3.95',
    y2: '6.06'
  }], ['line', {
    x1: '14.31',
    y1: '16',
    x2: '2.83',
    y2: '16'
  }], ['line', {
    x1: '16.62',
    y1: '12',
    x2: '10.88',
    y2: '21.94'
  }]]];
  var Aperture$1 = Aperture;

  var Apple = ['svg', defaultAttributes, [['path', {
    d: 'M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z'
  }], ['path', {
    d: 'M10 2c1 .5 2 2 2 5'
  }]]];
  var Apple$1 = Apple;

  var ArchiveRestore = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '4',
    width: '20',
    height: '5',
    rx: '2'
  }], ['path', {
    d: 'M12 13v7'
  }], ['path', {
    d: 'm9 16 3-3 3 3'
  }], ['path', {
    d: 'M4 9v9a2 2 0 0 0 2 2h2'
  }], ['path', {
    d: 'M20 9v9a2 2 0 0 1-2 2h-2'
  }]]];
  var ArchiveRestore$1 = ArchiveRestore;

  var Archive = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '4',
    width: '20',
    height: '5',
    rx: '2'
  }], ['path', {
    d: 'M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9'
  }], ['path', {
    d: 'M10 13h4'
  }]]];
  var Archive$1 = Archive;

  var Armchair = ['svg', defaultAttributes, [['path', {
    d: 'M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3'
  }], ['path', {
    d: 'M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z'
  }], ['path', {
    d: 'M5 18v2'
  }], ['path', {
    d: 'M19 18v2'
  }]]];
  var Armchair$1 = Armchair;

  var ArrowBigDown = ['svg', defaultAttributes, [['path', {
    d: 'M9 3h6v11h4l-7 7-7-7h4z'
  }]]];
  var ArrowBigDown$1 = ArrowBigDown;

  var ArrowBigLeft = ['svg', defaultAttributes, [['path', {
    d: 'm3 12 7-7v4h11v6H10v4z'
  }]]];
  var ArrowBigLeft$1 = ArrowBigLeft;

  var ArrowBigRight = ['svg', defaultAttributes, [['path', {
    d: 'm21 12-7-7v4H3v6h11v4z'
  }]]];
  var ArrowBigRight$1 = ArrowBigRight;

  var ArrowBigUp = ['svg', defaultAttributes, [['path', {
    d: 'M9 21V10H5l7-7 7 7h-4v11z'
  }]]];
  var ArrowBigUp$1 = ArrowBigUp;

  var ArrowDownCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '8 12 12 16 16 12'
  }], ['line', {
    x1: '12',
    y1: '8',
    x2: '12',
    y2: '16'
  }]]];
  var ArrowDownCircle$1 = ArrowDownCircle;

  var ArrowDownLeft = ['svg', defaultAttributes, [['line', {
    x1: '17',
    y1: '7',
    x2: '7',
    y2: '17'
  }], ['polyline', {
    points: '17 17 7 17 7 7'
  }]]];
  var ArrowDownLeft$1 = ArrowDownLeft;

  var ArrowDownRight = ['svg', defaultAttributes, [['line', {
    x1: '7',
    y1: '7',
    x2: '17',
    y2: '17'
  }], ['polyline', {
    points: '17 7 17 17 7 17'
  }]]];
  var ArrowDownRight$1 = ArrowDownRight;

  var ArrowDown = ['svg', defaultAttributes, [['line', {
    x1: '12',
    y1: '5',
    x2: '12',
    y2: '19'
  }], ['polyline', {
    points: '19 12 12 19 5 12'
  }]]];
  var ArrowDown$1 = ArrowDown;

  var ArrowLeftCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 8 8 12 12 16'
  }], ['line', {
    x1: '16',
    y1: '12',
    x2: '8',
    y2: '12'
  }]]];
  var ArrowLeftCircle$1 = ArrowLeftCircle;

  var ArrowLeftRight = ['svg', defaultAttributes, [['polyline', {
    points: '17 11 21 7 17 3'
  }], ['line', {
    x1: '21',
    y1: '7',
    x2: '9',
    y2: '7'
  }], ['polyline', {
    points: '7 21 3 17 7 13'
  }], ['line', {
    x1: '15',
    y1: '17',
    x2: '3',
    y2: '17'
  }]]];
  var ArrowLeftRight$1 = ArrowLeftRight;

  var ArrowLeft = ['svg', defaultAttributes, [['line', {
    x1: '19',
    y1: '12',
    x2: '5',
    y2: '12'
  }], ['polyline', {
    points: '12 19 5 12 12 5'
  }]]];
  var ArrowLeft$1 = ArrowLeft;

  var ArrowRightCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 16 16 12 12 8'
  }], ['line', {
    x1: '8',
    y1: '12',
    x2: '16',
    y2: '12'
  }]]];
  var ArrowRightCircle$1 = ArrowRightCircle;

  var ArrowRight = ['svg', defaultAttributes, [['line', {
    x1: '5',
    y1: '12',
    x2: '19',
    y2: '12'
  }], ['polyline', {
    points: '12 5 19 12 12 19'
  }]]];
  var ArrowRight$1 = ArrowRight;

  var ArrowUpCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '16 12 12 8 8 12'
  }], ['line', {
    x1: '12',
    y1: '16',
    x2: '12',
    y2: '8'
  }]]];
  var ArrowUpCircle$1 = ArrowUpCircle;

  var ArrowUpDown = ['svg', defaultAttributes, [['polyline', {
    points: '11 17 7 21 3 17'
  }], ['line', {
    x1: '7',
    y1: '21',
    x2: '7',
    y2: '9'
  }], ['polyline', {
    points: '21 7 17 3 13 7'
  }], ['line', {
    x1: '17',
    y1: '15',
    x2: '17',
    y2: '3'
  }]]];
  var ArrowUpDown$1 = ArrowUpDown;

  var ArrowUpLeft = ['svg', defaultAttributes, [['line', {
    x1: '17',
    y1: '17',
    x2: '7',
    y2: '7'
  }], ['polyline', {
    points: '7 17 7 7 17 7'
  }]]];
  var ArrowUpLeft$1 = ArrowUpLeft;

  var ArrowUpRight = ['svg', defaultAttributes, [['line', {
    x1: '7',
    y1: '17',
    x2: '17',
    y2: '7'
  }], ['polyline', {
    points: '7 7 17 7 17 17'
  }]]];
  var ArrowUpRight$1 = ArrowUpRight;

  var ArrowUp = ['svg', defaultAttributes, [['line', {
    x1: '12',
    y1: '19',
    x2: '12',
    y2: '5'
  }], ['polyline', {
    points: '5 12 12 5 19 12'
  }]]];
  var ArrowUp$1 = ArrowUp;

  var Asterisk = ['svg', defaultAttributes, [['path', {
    d: 'M12 6v12'
  }], ['path', {
    d: 'M17.196 9 6.804 15'
  }], ['path', {
    d: 'm6.804 9 10.392 6'
  }]]];
  var Asterisk$1 = Asterisk;

  var AtSign = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '4'
  }], ['path', {
    d: 'M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94'
  }]]];
  var AtSign$1 = AtSign;

  var Award = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '8',
    r: '6'
  }], ['path', {
    d: 'M15.477 12.89 17 22l-5-3-5 3 1.523-9.11'
  }]]];
  var Award$1 = Award;

  var Axe = ['svg', defaultAttributes, [['path', {
    d: 'm14 12-8.501 8.501a2.12 2.12 0 0 1-2.998 0h-.002a2.12 2.12 0 0 1 0-2.998L11 9.002'
  }], ['path', {
    d: 'm9 7 4-4 6 6h3l-.13.648a7.648 7.648 0 0 1-5.081 5.756L15 16v-3z'
  }]]];
  var Axe$1 = Axe;

  var Axis3d = ['svg', defaultAttributes, [['path', {
    d: 'M4 4v16h16'
  }], ['path', {
    d: 'm4 20 7-7'
  }]]];
  var Axis3d$1 = Axis3d;

  var Baby = ['svg', defaultAttributes, [['path', {
    d: 'M9 12h0.01'
  }], ['path', {
    d: 'M15 12h0.01'
  }], ['path', {
    d: 'M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5'
  }], ['path', {
    d: 'M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1'
  }]]];
  var Baby$1 = Baby;

  var Backpack = ['svg', defaultAttributes, [['path', {
    d: 'M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z'
  }], ['path', {
    d: 'M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2'
  }], ['path', {
    d: 'M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5'
  }], ['path', {
    d: 'M8 10h8'
  }], ['path', {
    d: 'M8 18h8'
  }]]];
  var Backpack$1 = Backpack;

  var BaggageClaim = ['svg', defaultAttributes, [['path', {
    d: 'M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2'
  }], ['path', {
    d: 'M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10'
  }], ['rect', {
    x: '8',
    y: '6',
    width: '13',
    height: '8',
    rx: '1'
  }], ['circle', {
    cx: '18',
    cy: '20',
    r: '2'
  }], ['circle', {
    cx: '9',
    cy: '20',
    r: '2'
  }]]];
  var BaggageClaim$1 = BaggageClaim;

  var Banana = ['svg', defaultAttributes, [['path', {
    d: 'M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5'
  }], ['path', {
    d: 'M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z'
  }]]];
  var Banana$1 = Banana;

  var Banknote = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '6',
    width: '20',
    height: '12',
    rx: '2'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '2'
  }], ['path', {
    d: 'M6 12h.01M18 12h.01'
  }]]];
  var Banknote$1 = Banknote;

  var BarChart2 = ['svg', defaultAttributes, [['line', {
    x1: '18',
    y1: '20',
    x2: '18',
    y2: '10'
  }], ['line', {
    x1: '12',
    y1: '20',
    x2: '12',
    y2: '4'
  }], ['line', {
    x1: '6',
    y1: '20',
    x2: '6',
    y2: '14'
  }]]];
  var BarChart2$1 = BarChart2;

  var BarChart3 = ['svg', defaultAttributes, [['path', {
    d: 'M3 3v18h18'
  }], ['path', {
    d: 'M18 17V9'
  }], ['path', {
    d: 'M13 17V5'
  }], ['path', {
    d: 'M8 17v-3'
  }]]];
  var BarChart3$1 = BarChart3;

  var BarChart4 = ['svg', defaultAttributes, [['path', {
    d: 'M3 3v18h18'
  }], ['path', {
    d: 'M13 17V9'
  }], ['path', {
    d: 'M18 17V5'
  }], ['path', {
    d: 'M8 17v-3'
  }]]];
  var BarChart4$1 = BarChart4;

  var BarChartHorizontal = ['svg', defaultAttributes, [['path', {
    d: 'M3 3v18h18'
  }], ['path', {
    d: 'M7 16h8'
  }], ['path', {
    d: 'M7 11h12'
  }], ['path', {
    d: 'M7 6h3'
  }]]];
  var BarChartHorizontal$1 = BarChartHorizontal;

  var BarChart = ['svg', defaultAttributes, [['line', {
    x1: '12',
    y1: '20',
    x2: '12',
    y2: '10'
  }], ['line', {
    x1: '18',
    y1: '20',
    x2: '18',
    y2: '4'
  }], ['line', {
    x1: '6',
    y1: '20',
    x2: '6',
    y2: '16'
  }]]];
  var BarChart$1 = BarChart;

  var Baseline = ['svg', defaultAttributes, [['path', {
    d: 'M4 20h16'
  }], ['path', {
    d: 'm6 16 6-12 6 12'
  }], ['path', {
    d: 'M8 12h8'
  }]]];
  var Baseline$1 = Baseline;

  var Bath = ['svg', defaultAttributes, [['path', {
    d: 'M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5'
  }], ['line', {
    x1: '10',
    y1: '5',
    x2: '8',
    y2: '7'
  }], ['line', {
    x1: '2',
    y1: '12',
    x2: '22',
    y2: '12'
  }], ['line', {
    x1: '7',
    y1: '19',
    x2: '7',
    y2: '21'
  }], ['line', {
    x1: '17',
    y1: '19',
    x2: '17',
    y2: '21'
  }]]];
  var Bath$1 = Bath;

  var BatteryCharging = ['svg', defaultAttributes, [['path', {
    d: 'M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2'
  }], ['path', {
    d: 'M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1'
  }], ['path', {
    d: 'm11 7-3 5h4l-3 5'
  }], ['line', {
    x1: '22',
    x2: '22',
    y1: '11',
    y2: '13'
  }]]];
  var BatteryCharging$1 = BatteryCharging;

  var BatteryFull = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '7',
    width: '16',
    height: '10',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '22',
    x2: '22',
    y1: '11',
    y2: '13'
  }], ['line', {
    x1: '6',
    x2: '6',
    y1: '11',
    y2: '13'
  }], ['line', {
    x1: '10',
    x2: '10',
    y1: '11',
    y2: '13'
  }], ['line', {
    x1: '14',
    x2: '14',
    y1: '11',
    y2: '13'
  }]]];
  var BatteryFull$1 = BatteryFull;

  var BatteryLow = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '7',
    width: '16',
    height: '10',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '22',
    x2: '22',
    y1: '11',
    y2: '13'
  }], ['line', {
    x1: '6',
    x2: '6',
    y1: '11',
    y2: '13'
  }]]];
  var BatteryLow$1 = BatteryLow;

  var BatteryMedium = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '7',
    width: '16',
    height: '10',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '22',
    x2: '22',
    y1: '11',
    y2: '13'
  }], ['line', {
    x1: '6',
    x2: '6',
    y1: '11',
    y2: '13'
  }], ['line', {
    x1: '10',
    x2: '10',
    y1: '11',
    y2: '13'
  }]]];
  var BatteryMedium$1 = BatteryMedium;

  var Battery = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '7',
    width: '16',
    height: '10',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '22',
    x2: '22',
    y1: '11',
    y2: '13'
  }]]];
  var Battery$1 = Battery;

  var Beaker = ['svg', defaultAttributes, [['path', {
    d: 'M4.5 3h15'
  }], ['path', {
    d: 'M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3'
  }], ['path', {
    d: 'M6 14h12'
  }]]];
  var Beaker$1 = Beaker;

  var BeanOff = ['svg', defaultAttributes, [['path', {
    d: 'M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1'
  }], ['path', {
    d: 'M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66'
  }], ['path', {
    d: 'M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var BeanOff$1 = BeanOff;

  var Bean = ['svg', defaultAttributes, [['path', {
    d: 'M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z'
  }], ['path', {
    d: 'M5.341 10.62A4 4 0 1 0 10.62 5.34'
  }]]];
  var Bean$1 = Bean;

  var BedDouble = ['svg', defaultAttributes, [['path', {
    d: 'M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8'
  }], ['path', {
    d: 'M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4'
  }], ['path', {
    d: 'M12 4v6'
  }], ['path', {
    d: 'M2 18h20'
  }]]];
  var BedDouble$1 = BedDouble;

  var BedSingle = ['svg', defaultAttributes, [['path', {
    d: 'M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8'
  }], ['path', {
    d: 'M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4'
  }], ['path', {
    d: 'M3 18h18'
  }]]];
  var BedSingle$1 = BedSingle;

  var Bed = ['svg', defaultAttributes, [['path', {
    d: 'M2 4v16'
  }], ['path', {
    d: 'M2 8h18a2 2 0 0 1 2 2v10'
  }], ['path', {
    d: 'M2 17h20'
  }], ['path', {
    d: 'M6 8v9'
  }]]];
  var Bed$1 = Bed;

  var Beer = ['svg', defaultAttributes, [['path', {
    d: 'M17 11h1a3 3 0 0 1 0 6h-1'
  }], ['path', {
    d: 'M9 12v6'
  }], ['path', {
    d: 'M13 12v6'
  }], ['path', {
    d: 'M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z'
  }], ['path', {
    d: 'M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8'
  }]]];
  var Beer$1 = Beer;

  var BellMinus = ['svg', defaultAttributes, [['path', {
    d: 'M13.73 21a2 2 0 0 1-3.46 0'
  }], ['path', {
    d: 'M21 5h-6'
  }], ['path', {
    d: 'M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916'
  }]]];
  var BellMinus$1 = BellMinus;

  var BellOff = ['svg', defaultAttributes, [['path', {
    d: 'M13.73 21a2 2 0 0 1-3.46 0'
  }], ['path', {
    d: 'M18.63 13A17.888 17.888 0 0 1 18 8'
  }], ['path', {
    d: 'M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14'
  }], ['path', {
    d: 'M18 8a6 6 0 0 0-9.33-5'
  }], ['path', {
    d: 'm2 2 20 20'
  }]]];
  var BellOff$1 = BellOff;

  var BellPlus = ['svg', defaultAttributes, [['path', {
    d: 'M18.387 12C19.198 15.799 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916'
  }], ['path', {
    d: 'M13.73 21a2 2 0 0 1-3.46 0'
  }], ['path', {
    d: 'M18 2v6'
  }], ['path', {
    d: 'M21 5h-6'
  }]]];
  var BellPlus$1 = BellPlus;

  var BellRing = ['svg', defaultAttributes, [['path', {
    d: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'
  }], ['path', {
    d: 'M13.73 21a2 2 0 0 1-3.46 0'
  }], ['path', {
    d: 'M2 8c0-2.2.7-4.3 2-6'
  }], ['path', {
    d: 'M22 8a10 10 0 0 0-2-6'
  }]]];
  var BellRing$1 = BellRing;

  var Bell = ['svg', defaultAttributes, [['path', {
    d: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'
  }], ['path', {
    d: 'M13.73 21a2 2 0 0 1-3.46 0'
  }]]];
  var Bell$1 = Bell;

  var Bike = ['svg', defaultAttributes, [['circle', {
    cx: '5.5',
    cy: '17.5',
    r: '3.5'
  }], ['circle', {
    cx: '18.5',
    cy: '17.5',
    r: '3.5'
  }], ['path', {
    d: 'M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2'
  }]]];
  var Bike$1 = Bike;

  var Binary = ['svg', defaultAttributes, [['path', {
    d: 'M6 20h4'
  }], ['path', {
    d: 'M14 10h4'
  }], ['path', {
    d: 'M6 14h2v6'
  }], ['path', {
    d: 'M14 4h2v6'
  }], ['rect', {
    x: '6',
    y: '4',
    width: '4',
    height: '6'
  }], ['rect', {
    x: '14',
    y: '14',
    width: '4',
    height: '6'
  }]]];
  var Binary$1 = Binary;

  var Bitcoin = ['svg', defaultAttributes, [['path', {
    d: 'M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727'
  }]]];
  var Bitcoin$1 = Bitcoin;

  var BluetoothConnected = ['svg', defaultAttributes, [['path', {
    d: 'm7 7 10 10-5 5V2l5 5L7 17'
  }], ['line', {
    x1: '18',
    y1: '12',
    y2: '12',
    x2: '21'
  }], ['line', {
    x1: '3',
    y1: '12',
    y2: '12',
    x2: '6'
  }]]];
  var BluetoothConnected$1 = BluetoothConnected;

  var BluetoothOff = ['svg', defaultAttributes, [['path', {
    d: 'm17 17-5 5V12l-5 5'
  }], ['path', {
    d: 'm2 2 20 20'
  }], ['path', {
    d: 'M14.5 9.5 17 7l-5-5v4.5'
  }]]];
  var BluetoothOff$1 = BluetoothOff;

  var BluetoothSearching = ['svg', defaultAttributes, [['path', {
    d: 'm7 7 10 10-5 5V2l5 5L7 17'
  }], ['path', {
    d: 'M20.83 14.83a4 4 0 0 0 0-5.66'
  }], ['path', {
    d: 'M18 12h.01'
  }]]];
  var BluetoothSearching$1 = BluetoothSearching;

  var Bluetooth = ['svg', defaultAttributes, [['path', {
    d: 'm7 7 10 10-5 5V2l5 5L7 17'
  }]]];
  var Bluetooth$1 = Bluetooth;

  var Bold = ['svg', defaultAttributes, [['path', {
    d: 'M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z'
  }], ['path', {
    d: 'M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z'
  }]]];
  var Bold$1 = Bold;

  var Bomb = ['svg', defaultAttributes, [['circle', {
    cx: '11',
    cy: '13',
    r: '9'
  }], ['path', {
    d: 'm19.5 9.5 1.8-1.8a2.4 2.4 0 0 0 0-3.4l-1.6-1.6a2.41 2.41 0 0 0-3.4 0l-1.8 1.8'
  }], ['path', {
    d: 'm22 2-1.5 1.5'
  }]]];
  var Bomb$1 = Bomb;

  var Bone = ['svg', defaultAttributes, [['path', {
    d: 'M18.6 9.82c-.52-.21-1.15-.25-1.54.15l-7.07 7.06c-.39.39-.36 1.03-.15 1.54.12.3.16.6.16.93a2.5 2.5 0 0 1-5 0c0-.26-.24-.5-.5-.5a2.5 2.5 0 1 1 .96-4.82c.5.21 1.14.25 1.53-.15l7.07-7.06c.39-.39.36-1.03.15-1.54-.12-.3-.21-.6-.21-.93a2.5 2.5 0 0 1 5 0c.01.26.24.49.5.5a2.5 2.5 0 1 1-.9 4.82Z'
  }]]];
  var Bone$1 = Bone;

  var BookOpenCheck = ['svg', defaultAttributes, [['path', {
    d: 'M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z'
  }], ['path', {
    d: 'm16 12 2 2 4-4'
  }], ['path', {
    d: 'M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3'
  }]]];
  var BookOpenCheck$1 = BookOpenCheck;

  var BookOpen = ['svg', defaultAttributes, [['path', {
    d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'
  }], ['path', {
    d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'
  }]]];
  var BookOpen$1 = BookOpen;

  var Book = ['svg', defaultAttributes, [['path', {
    d: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20'
  }], ['path', {
    d: 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'
  }]]];
  var Book$1 = Book;

  var BookmarkMinus = ['svg', defaultAttributes, [['path', {
    d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z'
  }], ['line', {
    x1: '15',
    x2: '9',
    y1: '10',
    y2: '10'
  }]]];
  var BookmarkMinus$1 = BookmarkMinus;

  var BookmarkPlus = ['svg', defaultAttributes, [['path', {
    d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z'
  }], ['line', {
    x1: '12',
    x2: '12',
    y1: '7',
    y2: '13'
  }], ['line', {
    x1: '15',
    x2: '9',
    y1: '10',
    y2: '10'
  }]]];
  var BookmarkPlus$1 = BookmarkPlus;

  var Bookmark = ['svg', defaultAttributes, [['path', {
    d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z'
  }]]];
  var Bookmark$1 = Bookmark;

  var Bot = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '11',
    width: '18',
    height: '10',
    rx: '2'
  }], ['circle', {
    cx: '12',
    cy: '5',
    r: '2'
  }], ['path', {
    d: 'M12 7v4'
  }], ['line', {
    x1: '8',
    y1: '16',
    x2: '8',
    y2: '16'
  }], ['line', {
    x1: '16',
    y1: '16',
    x2: '16',
    y2: '16'
  }]]];
  var Bot$1 = Bot;

  var BoxSelect = ['svg', defaultAttributes, [['path', {
    d: 'M5 3a2 2 0 0 0-2 2'
  }], ['path', {
    d: 'M19 3a2 2 0 0 1 2 2'
  }], ['path', {
    d: 'M21 19a2 2 0 0 1-2 2'
  }], ['path', {
    d: 'M5 21a2 2 0 0 1-2-2'
  }], ['path', {
    d: 'M9 3h1'
  }], ['path', {
    d: 'M9 21h1'
  }], ['path', {
    d: 'M14 3h1'
  }], ['path', {
    d: 'M14 21h1'
  }], ['path', {
    d: 'M3 9v1'
  }], ['path', {
    d: 'M21 9v1'
  }], ['path', {
    d: 'M3 14v1'
  }], ['path', {
    d: 'M21 14v1'
  }]]];
  var BoxSelect$1 = BoxSelect;

  var Box = ['svg', defaultAttributes, [['path', {
    d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'
  }], ['polyline', {
    points: '3.29 7 12 12 20.71 7'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '12'
  }]]];
  var Box$1 = Box;

  var Boxes = ['svg', defaultAttributes, [['path', {
    d: 'M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z'
  }], ['path', {
    d: 'm7 16.5-4.74-2.85'
  }], ['path', {
    d: 'm7 16.5 5-3'
  }], ['path', {
    d: 'M7 16.5v5.17'
  }], ['path', {
    d: 'M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z'
  }], ['path', {
    d: 'm17 16.5-5-3'
  }], ['path', {
    d: 'm17 16.5 4.74-2.85'
  }], ['path', {
    d: 'M17 16.5v5.17'
  }], ['path', {
    d: 'M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z'
  }], ['path', {
    d: 'M12 8 7.26 5.15'
  }], ['path', {
    d: 'm12 8 4.74-2.85'
  }], ['path', {
    d: 'M12 13.5V8'
  }]]];
  var Boxes$1 = Boxes;

  var Briefcase = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '7',
    width: '20',
    height: '14',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'
  }]]];
  var Briefcase$1 = Briefcase;

  var Brush = ['svg', defaultAttributes, [['path', {
    d: 'm9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08'
  }], ['path', {
    d: 'M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z'
  }]]];
  var Brush$1 = Brush;

  var Bug = ['svg', defaultAttributes, [['rect', {
    width: '8',
    height: '14',
    x: '8',
    y: '6',
    rx: '4'
  }], ['path', {
    d: 'm19 7-3 2'
  }], ['path', {
    d: 'm5 7 3 2'
  }], ['path', {
    d: 'm19 19-3-2'
  }], ['path', {
    d: 'm5 19 3-2'
  }], ['path', {
    d: 'M20 13h-4'
  }], ['path', {
    d: 'M4 13h4'
  }], ['path', {
    d: 'm10 4 1 2'
  }], ['path', {
    d: 'm14 4-1 2'
  }]]];
  var Bug$1 = Bug;

  var Building2 = ['svg', defaultAttributes, [['path', {
    d: 'M6 22V4c0-.27 0-.55.07-.82a1.477 1.477 0 0 1 1.1-1.11C7.46 2 8.73 2 9 2h7c.27 0 .55 0 .82.07a1.477 1.477 0 0 1 1.11 1.1c.07.28.07.56.07.83v18H6Z'
  }], ['path', {
    d: 'M2 14v6c0 1.1.9 2 2 2h2V12H4c-.27 0-.55 0-.82.07-.27.07-.52.2-.72.4-.19.19-.32.44-.39.71A3.4 3.4 0 0 0 2 14Z'
  }], ['path', {
    d: 'M20.82 9.07A3.4 3.4 0 0 0 20 9h-2v13h2a2 2 0 0 0 2-2v-9c0-.28 0-.55-.07-.82-.07-.27-.2-.52-.4-.72-.19-.19-.44-.32-.71-.39Z'
  }], ['path', {
    d: 'M10 6h4'
  }], ['path', {
    d: 'M10 10h4'
  }], ['path', {
    d: 'M10 14h4'
  }], ['path', {
    d: 'M10 18h4'
  }]]];
  var Building2$1 = Building2;

  var Building = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '2',
    width: '16',
    height: '20',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M9 22v-4h6v4'
  }], ['path', {
    d: 'M8 6h.01'
  }], ['path', {
    d: 'M16 6h.01'
  }], ['path', {
    d: 'M12 6h.01'
  }], ['path', {
    d: 'M12 10h.01'
  }], ['path', {
    d: 'M12 14h.01'
  }], ['path', {
    d: 'M16 10h.01'
  }], ['path', {
    d: 'M16 14h.01'
  }], ['path', {
    d: 'M8 10h.01'
  }], ['path', {
    d: 'M8 14h.01'
  }]]];
  var Building$1 = Building;

  var Bus = ['svg', defaultAttributes, [['path', {
    d: 'M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2'
  }], ['path', {
    d: 'M14 17H9'
  }], ['circle', {
    cx: '6.5',
    cy: '17.5',
    r: '2.5'
  }], ['circle', {
    cx: '16.5',
    cy: '17.5',
    r: '2.5'
  }]]];
  var Bus$1 = Bus;

  var Cake = ['svg', defaultAttributes, [['path', {
    d: 'M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8'
  }], ['path', {
    d: 'M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1'
  }], ['path', {
    d: 'M2 21h20'
  }], ['path', {
    d: 'M7 8v2'
  }], ['path', {
    d: 'M12 8v2'
  }], ['path', {
    d: 'M17 8v2'
  }], ['path', {
    d: 'M7 4h.01'
  }], ['path', {
    d: 'M12 4h.01'
  }], ['path', {
    d: 'M17 4h.01'
  }]]];
  var Cake$1 = Cake;

  var Calculator = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '2',
    width: '16',
    height: '20',
    rx: '2'
  }], ['line', {
    x1: '8',
    x2: '16',
    y1: '6',
    y2: '6'
  }], ['line', {
    x1: '16',
    x2: '16',
    y1: '14',
    y2: '18'
  }], ['path', {
    d: 'M16 10h.01'
  }], ['path', {
    d: 'M12 10h.01'
  }], ['path', {
    d: 'M8 10h.01'
  }], ['path', {
    d: 'M12 14h.01'
  }], ['path', {
    d: 'M8 14h.01'
  }], ['path', {
    d: 'M12 18h.01'
  }], ['path', {
    d: 'M8 18h.01'
  }]]];
  var Calculator$1 = Calculator;

  var CalendarCheck2 = ['svg', defaultAttributes, [['path', {
    d: 'M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8'
  }], ['line', {
    x1: '16',
    y1: '2',
    x2: '16',
    y2: '6'
  }], ['line', {
    x1: '8',
    y1: '2',
    x2: '8',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '10',
    x2: '21',
    y2: '10'
  }], ['path', {
    d: 'm16 20 2 2 4-4'
  }]]];
  var CalendarCheck2$1 = CalendarCheck2;

  var CalendarCheck = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '4',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '16',
    y1: '2',
    x2: '16',
    y2: '6'
  }], ['line', {
    x1: '8',
    y1: '2',
    x2: '8',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '10',
    x2: '21',
    y2: '10'
  }], ['path', {
    d: 'm9 16 2 2 4-4'
  }]]];
  var CalendarCheck$1 = CalendarCheck;

  var CalendarClock = ['svg', defaultAttributes, [['path', {
    d: 'M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5'
  }], ['path', {
    d: 'M16 2v4'
  }], ['path', {
    d: 'M8 2v4'
  }], ['path', {
    d: 'M3 10h5'
  }], ['path', {
    d: 'M17.5 17.5 16 16.25V14'
  }], ['path', {
    d: 'M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z'
  }]]];
  var CalendarClock$1 = CalendarClock;

  var CalendarDays = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '4',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '16',
    y1: '2',
    x2: '16',
    y2: '6'
  }], ['line', {
    x1: '8',
    y1: '2',
    x2: '8',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '10',
    x2: '21',
    y2: '10'
  }], ['path', {
    d: 'M8 14h.01'
  }], ['path', {
    d: 'M12 14h.01'
  }], ['path', {
    d: 'M16 14h.01'
  }], ['path', {
    d: 'M8 18h.01'
  }], ['path', {
    d: 'M12 18h.01'
  }], ['path', {
    d: 'M16 18h.01'
  }]]];
  var CalendarDays$1 = CalendarDays;

  var CalendarHeart = ['svg', defaultAttributes, [['path', {
    d: 'M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7'
  }], ['path', {
    d: 'M16 2v4'
  }], ['path', {
    d: 'M8 2v4'
  }], ['path', {
    d: 'M3 10h18'
  }], ['path', {
    d: 'M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z'
  }]]];
  var CalendarHeart$1 = CalendarHeart;

  var CalendarMinus = ['svg', defaultAttributes, [['path', {
    d: 'M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8'
  }], ['line', {
    x1: '16',
    y1: '2',
    x2: '16',
    y2: '6'
  }], ['line', {
    x1: '8',
    y1: '2',
    x2: '8',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '10',
    x2: '21',
    y2: '10'
  }], ['line', {
    x1: '16',
    y1: '19',
    x2: '22',
    y2: '19'
  }]]];
  var CalendarMinus$1 = CalendarMinus;

  var CalendarOff = ['svg', defaultAttributes, [['path', {
    d: 'M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18'
  }], ['path', {
    d: 'M21 15.5V6a2 2 0 0 0-2-2H9.5'
  }], ['path', {
    d: 'M16 2v4'
  }], ['path', {
    d: 'M3 10h7'
  }], ['path', {
    d: 'M21 10h-5.5'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var CalendarOff$1 = CalendarOff;

  var CalendarPlus = ['svg', defaultAttributes, [['path', {
    d: 'M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8'
  }], ['line', {
    x1: '16',
    y1: '2',
    x2: '16',
    y2: '6'
  }], ['line', {
    x1: '8',
    y1: '2',
    x2: '8',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '10',
    x2: '21',
    y2: '10'
  }], ['line', {
    x1: '19',
    y1: '16',
    x2: '19',
    y2: '22'
  }], ['line', {
    x1: '16',
    y1: '19',
    x2: '22',
    y2: '19'
  }]]];
  var CalendarPlus$1 = CalendarPlus;

  var CalendarRange = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '4',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '16',
    y1: '2',
    x2: '16',
    y2: '6'
  }], ['line', {
    x1: '8',
    y1: '2',
    x2: '8',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '10',
    x2: '21',
    y2: '10'
  }], ['path', {
    d: 'M17 14h-6'
  }], ['path', {
    d: 'M13 18H7'
  }], ['path', {
    d: 'M7 14h.01'
  }], ['path', {
    d: 'M17 18h.01'
  }]]];
  var CalendarRange$1 = CalendarRange;

  var CalendarSearch = ['svg', defaultAttributes, [['path', {
    d: 'M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5'
  }], ['path', {
    d: 'M16 2v4'
  }], ['path', {
    d: 'M8 2v4'
  }], ['path', {
    d: 'M3 10h18'
  }], ['path', {
    d: 'M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z'
  }], ['path', {
    d: 'm22 22-1.5-1.5'
  }]]];
  var CalendarSearch$1 = CalendarSearch;

  var CalendarX2 = ['svg', defaultAttributes, [['path', {
    d: 'M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8'
  }], ['line', {
    x1: '16',
    y1: '2',
    x2: '16',
    y2: '6'
  }], ['line', {
    x1: '8',
    y1: '2',
    x2: '8',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '10',
    x2: '21',
    y2: '10'
  }], ['line', {
    x1: '17',
    y1: '17',
    x2: '22',
    y2: '22'
  }], ['line', {
    x1: '17',
    y1: '22',
    x2: '22',
    y2: '17'
  }]]];
  var CalendarX2$1 = CalendarX2;

  var CalendarX = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '4',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '16',
    y1: '2',
    x2: '16',
    y2: '6'
  }], ['line', {
    x1: '8',
    y1: '2',
    x2: '8',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '10',
    x2: '21',
    y2: '10'
  }], ['line', {
    x1: '10',
    y1: '14',
    x2: '14',
    y2: '18'
  }], ['line', {
    x1: '14',
    y1: '14',
    x2: '10',
    y2: '18'
  }]]];
  var CalendarX$1 = CalendarX;

  var Calendar = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '4',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '16',
    y1: '2',
    x2: '16',
    y2: '6'
  }], ['line', {
    x1: '8',
    y1: '2',
    x2: '8',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '10',
    x2: '21',
    y2: '10'
  }]]];
  var Calendar$1 = Calendar;

  var CameraOff = ['svg', defaultAttributes, [['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }], ['path', {
    d: 'M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16'
  }], ['path', {
    d: 'M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5'
  }], ['path', {
    d: 'M14.121 15.121A3 3 0 1 1 9.88 10.88'
  }]]];
  var CameraOff$1 = CameraOff;

  var Camera = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z'
  }], ['circle', {
    cx: '12',
    cy: '13',
    r: '3'
  }]]];
  var Camera$1 = Camera;

  var CandyOff = ['svg', defaultAttributes, [['path', {
    d: 'm8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1'
  }], ['path', {
    d: 'M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657'
  }], ['path', {
    d: 'M14 16.5V14'
  }], ['path', {
    d: 'M14 6.5v1.843'
  }], ['path', {
    d: 'M10 10v7.5'
  }], ['path', {
    d: 'm16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1'
  }], ['path', {
    d: 'm8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var CandyOff$1 = CandyOff;

  var Candy = ['svg', defaultAttributes, [['path', {
    d: 'm9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z'
  }], ['path', {
    d: 'M14 6.5v10'
  }], ['path', {
    d: 'M10 7.5v10'
  }], ['path', {
    d: 'm16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1'
  }], ['path', {
    d: 'm8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1'
  }]]];
  var Candy$1 = Candy;

  var Car = ['svg', defaultAttributes, [['path', {
    d: 'M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2'
  }], ['circle', {
    cx: '6.5',
    cy: '16.5',
    r: '2.5'
  }], ['circle', {
    cx: '16.5',
    cy: '16.5',
    r: '2.5'
  }]]];
  var Car$1 = Car;

  var Carrot = ['svg', defaultAttributes, [['path', {
    d: 'M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46'
  }], ['path', {
    d: 'M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z'
  }], ['path', {
    d: 'M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z'
  }]]];
  var Carrot$1 = Carrot;

  var Cast = ['svg', defaultAttributes, [['path', {
    d: 'M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6'
  }], ['path', {
    d: 'M2 12a9 9 0 0 1 8 8'
  }], ['path', {
    d: 'M2 16a5 5 0 0 1 4 4'
  }], ['line', {
    x1: '2',
    y1: '20',
    x2: '2.01',
    y2: '20'
  }]]];
  var Cast$1 = Cast;

  var Cat = ['svg', defaultAttributes, [['path', {
    d: 'M14 5.256A8.148 8.148 0 0 0 12 5a9.04 9.04 0 0 0-2 .227M20.098 10c.572 1.068.902 2.24.902 3.444C21 17.89 16.97 21 12 21s-9-3-9-7.556c0-1.251.288-2.41.792-3.444'
  }], ['path', {
    d: 'M3.75 10S2.11 3.58 3.5 3C4.89 2.42 8 3 9.781 5'
  }], ['path', {
    d: 'M20.172 10.002s1.64-6.42.25-7c-1.39-.58-4.5 0-6.282 2'
  }], ['path', {
    d: 'M8 14v.5'
  }], ['path', {
    d: 'M16 14v.5'
  }], ['path', {
    d: 'M11.25 16.25h1.5L12 17l-.75-.75Z'
  }]]];
  var Cat$1 = Cat;

  var CheckCheck = ['svg', defaultAttributes, [['path', {
    d: 'M18 6 7 17l-5-5'
  }], ['path', {
    d: 'm22 10-7.5 7.5L13 16'
  }]]];
  var CheckCheck$1 = CheckCheck;

  var CheckCircle2 = ['svg', defaultAttributes, [['path', {
    d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
  }], ['path', {
    d: 'm9 12 2 2 4-4'
  }]]];
  var CheckCircle2$1 = CheckCircle2;

  var CheckCircle = ['svg', defaultAttributes, [['path', {
    d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14'
  }], ['polyline', {
    points: '22 4 12 14.01 9 11.01'
  }]]];
  var CheckCircle$1 = CheckCircle;

  var CheckSquare = ['svg', defaultAttributes, [['polyline', {
    points: '9 11 12 14 22 4'
  }], ['path', {
    d: 'M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'
  }]]];
  var CheckSquare$1 = CheckSquare;

  var Check = ['svg', defaultAttributes, [['polyline', {
    points: '20 6 9 17 4 12'
  }]]];
  var Check$1 = Check;

  var ChefHat = ['svg', defaultAttributes, [['path', {
    d: 'M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z'
  }], ['line', {
    x1: '6',
    y1: '17',
    x2: '18',
    y2: '17'
  }]]];
  var ChefHat$1 = ChefHat;

  var Cherry = ['svg', defaultAttributes, [['path', {
    d: 'M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z'
  }], ['path', {
    d: 'M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z'
  }], ['path', {
    d: 'M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12'
  }], ['path', {
    d: 'M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z'
  }]]];
  var Cherry$1 = Cherry;

  var ChevronDown = ['svg', defaultAttributes, [['polyline', {
    points: '6 9 12 15 18 9'
  }]]];
  var ChevronDown$1 = ChevronDown;

  var ChevronFirst = ['svg', defaultAttributes, [['polyline', {
    points: '17 18 11 12 17 6'
  }], ['path', {
    d: 'M7 6v12'
  }]]];
  var ChevronFirst$1 = ChevronFirst;

  var ChevronLast = ['svg', defaultAttributes, [['polyline', {
    points: '7 18 13 12 7 6'
  }], ['path', {
    d: 'M17 6v12'
  }]]];
  var ChevronLast$1 = ChevronLast;

  var ChevronLeft = ['svg', defaultAttributes, [['polyline', {
    points: '15 18 9 12 15 6'
  }]]];
  var ChevronLeft$1 = ChevronLeft;

  var ChevronRight = ['svg', defaultAttributes, [['polyline', {
    points: '9 18 15 12 9 6'
  }]]];
  var ChevronRight$1 = ChevronRight;

  var ChevronUp = ['svg', defaultAttributes, [['polyline', {
    points: '18 15 12 9 6 15'
  }]]];
  var ChevronUp$1 = ChevronUp;

  var ChevronsDownUp = ['svg', defaultAttributes, [['path', {
    d: 'm7 20 5-5 5 5'
  }], ['path', {
    d: 'm7 4 5 5 5-5'
  }]]];
  var ChevronsDownUp$1 = ChevronsDownUp;

  var ChevronsDown = ['svg', defaultAttributes, [['polyline', {
    points: '7 13 12 18 17 13'
  }], ['polyline', {
    points: '7 6 12 11 17 6'
  }]]];
  var ChevronsDown$1 = ChevronsDown;

  var ChevronsLeftRight = ['svg', defaultAttributes, [['path', {
    d: 'm9 7-5 5 5 5'
  }], ['path', {
    d: 'm15 7 5 5-5 5'
  }]]];
  var ChevronsLeftRight$1 = ChevronsLeftRight;

  var ChevronsLeft = ['svg', defaultAttributes, [['polyline', {
    points: '11 17 6 12 11 7'
  }], ['polyline', {
    points: '18 17 13 12 18 7'
  }]]];
  var ChevronsLeft$1 = ChevronsLeft;

  var ChevronsRightLeft = ['svg', defaultAttributes, [['path', {
    d: 'm20 17-5-5 5-5'
  }], ['path', {
    d: 'm4 17 5-5-5-5'
  }]]];
  var ChevronsRightLeft$1 = ChevronsRightLeft;

  var ChevronsRight = ['svg', defaultAttributes, [['polyline', {
    points: '13 17 18 12 13 7'
  }], ['polyline', {
    points: '6 17 11 12 6 7'
  }]]];
  var ChevronsRight$1 = ChevronsRight;

  var ChevronsUpDown = ['svg', defaultAttributes, [['path', {
    d: 'm7 15 5 5 5-5'
  }], ['path', {
    d: 'm7 9 5-5 5 5'
  }]]];
  var ChevronsUpDown$1 = ChevronsUpDown;

  var ChevronsUp = ['svg', defaultAttributes, [['polyline', {
    points: '17 11 12 6 7 11'
  }], ['polyline', {
    points: '17 18 12 13 7 18'
  }]]];
  var ChevronsUp$1 = ChevronsUp;

  var Chrome = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '4'
  }], ['line', {
    x1: '21.17',
    y1: '8',
    x2: '12',
    y2: '8'
  }], ['line', {
    x1: '3.95',
    y1: '6.06',
    x2: '8.54',
    y2: '14'
  }], ['line', {
    x1: '10.88',
    y1: '21.94',
    x2: '15.46',
    y2: '14'
  }]]];
  var Chrome$1 = Chrome;

  var CigaretteOff = ['svg', defaultAttributes, [['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }], ['path', {
    d: 'M12 12H2v4h14'
  }], ['path', {
    d: 'M22 12v4'
  }], ['path', {
    d: 'M18 12h-.5'
  }], ['path', {
    d: 'M7 12v4'
  }], ['path', {
    d: 'M18 8c0-2.5-2-2.5-2-5'
  }], ['path', {
    d: 'M22 8c0-2.5-2-2.5-2-5'
  }]]];
  var CigaretteOff$1 = CigaretteOff;

  var Cigarette = ['svg', defaultAttributes, [['path', {
    d: 'M18 12H2v4h16'
  }], ['path', {
    d: 'M22 12v4'
  }], ['path', {
    d: 'M7 12v4'
  }], ['path', {
    d: 'M18 8c0-2.5-2-2.5-2-5'
  }], ['path', {
    d: 'M22 8c0-2.5-2-2.5-2-5'
  }]]];
  var Cigarette$1 = Cigarette;

  var CircleDot = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '1'
  }]]];
  var CircleDot$1 = CircleDot;

  var CircleEllipsis = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M17 12h.01'
  }], ['path', {
    d: 'M12 12h.01'
  }], ['path', {
    d: 'M7 12h.01'
  }]]];
  var CircleEllipsis$1 = CircleEllipsis;

  var CircleSlashed = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M22 2 2 22'
  }]]];
  var CircleSlashed$1 = CircleSlashed;

  var Circle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }]]];
  var Circle$1 = Circle;

  var Citrus = ['svg', defaultAttributes, [['path', {
    d: 'M5.51 18.49a12 12 0 0 0 16.12.78c.49-.41.49-1.15.03-1.6L6.34 2.33a1.08 1.08 0 0 0-1.6.03A12 12 0 0 0 5.5 18.5Z'
  }], ['path', {
    d: 'M8.34 15.66a8 8 0 0 0 10.4.78c.54-.4.54-1.16.06-1.64L9.2 5.2c-.48-.48-1.25-.48-1.64.06a8 8 0 0 0 .78 10.4Z'
  }], ['path', {
    d: 'm14 10-5.5 5.5'
  }], ['path', {
    d: 'M14 10v8'
  }], ['path', {
    d: 'M14 10H6'
  }]]];
  var Citrus$1 = Citrus;

  var Clapperboard = ['svg', defaultAttributes, [['path', {
    d: 'M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z'
  }], ['path', {
    d: 'm4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z'
  }], ['path', {
    d: 'm6.6 4.99 3.38 4.2'
  }], ['path', {
    d: 'm11.86 3.38 3.38 4.2'
  }]]];
  var Clapperboard$1 = Clapperboard;

  var ClipboardCheck = ['svg', defaultAttributes, [['rect', {
    x: '8',
    y: '2',
    width: '8',
    height: '4',
    rx: '1',
    ry: '1'
  }], ['path', {
    d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'
  }], ['path', {
    d: 'm9 14 2 2 4-4'
  }]]];
  var ClipboardCheck$1 = ClipboardCheck;

  var ClipboardCopy = ['svg', defaultAttributes, [['rect', {
    x: '8',
    y: '2',
    width: '8',
    height: '4',
    rx: '1',
    ry: '1'
  }], ['path', {
    d: 'M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2'
  }], ['path', {
    d: 'M16 4h2a2 2 0 0 1 2 2v4'
  }], ['path', {
    d: 'M21 14H11'
  }], ['path', {
    d: 'm15 10-4 4 4 4'
  }]]];
  var ClipboardCopy$1 = ClipboardCopy;

  var ClipboardEdit = ['svg', defaultAttributes, [['rect', {
    x: '8',
    y: '2',
    width: '8',
    height: '4',
    rx: '1',
    ry: '1'
  }], ['path', {
    d: 'M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z'
  }], ['path', {
    d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5'
  }], ['path', {
    d: 'M4 13.5V6a2 2 0 0 1 2-2h2'
  }]]];
  var ClipboardEdit$1 = ClipboardEdit;

  var ClipboardList = ['svg', defaultAttributes, [['rect', {
    x: '8',
    y: '2',
    width: '8',
    height: '4',
    rx: '1',
    ry: '1'
  }], ['path', {
    d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'
  }], ['path', {
    d: 'M12 11h4'
  }], ['path', {
    d: 'M12 16h4'
  }], ['path', {
    d: 'M8 11h.01'
  }], ['path', {
    d: 'M8 16h.01'
  }]]];
  var ClipboardList$1 = ClipboardList;

  var ClipboardSignature = ['svg', defaultAttributes, [['rect', {
    x: '8',
    y: '2',
    width: '8',
    height: '4',
    rx: '1',
    ry: '1'
  }], ['path', {
    d: 'M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5'
  }], ['path', {
    d: 'M16 4h2a2 2 0 0 1 1.73 1'
  }], ['path', {
    d: 'M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z'
  }], ['path', {
    d: 'M8 18h1'
  }]]];
  var ClipboardSignature$1 = ClipboardSignature;

  var ClipboardType = ['svg', defaultAttributes, [['rect', {
    x: '8',
    y: '2',
    width: '8',
    height: '4',
    rx: '1',
    ry: '1'
  }], ['path', {
    d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'
  }], ['path', {
    d: 'M9 12v-1h6v1'
  }], ['path', {
    d: 'M11 17h2'
  }], ['path', {
    d: 'M12 11v6'
  }]]];
  var ClipboardType$1 = ClipboardType;

  var ClipboardX = ['svg', defaultAttributes, [['rect', {
    x: '8',
    y: '2',
    width: '8',
    height: '4',
    rx: '1',
    ry: '1'
  }], ['path', {
    d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'
  }], ['path', {
    d: 'm15 11-6 6'
  }], ['path', {
    d: 'm9 11 6 6'
  }]]];
  var ClipboardX$1 = ClipboardX;

  var Clipboard = ['svg', defaultAttributes, [['rect', {
    x: '8',
    y: '2',
    width: '8',
    height: '4',
    rx: '1',
    ry: '1'
  }], ['path', {
    d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'
  }]]];
  var Clipboard$1 = Clipboard;

  var Clock1 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 14.5 8'
  }]]];
  var Clock1$1 = Clock1;

  var Clock10 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 8 10'
  }]]];
  var Clock10$1 = Clock10;

  var Clock11 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 9.5 8'
  }]]];
  var Clock11$1 = Clock11;

  var Clock12 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12'
  }]]];
  var Clock12$1 = Clock12;

  var Clock2 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 16 10'
  }]]];
  var Clock2$1 = Clock2;

  var Clock3 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 16.5 12'
  }]]];
  var Clock3$1 = Clock3;

  var Clock4 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 16 14'
  }]]];
  var Clock4$1 = Clock4;

  var Clock5 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 14.5 16'
  }]]];
  var Clock5$1 = Clock5;

  var Clock6 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 12 16.5'
  }]]];
  var Clock6$1 = Clock6;

  var Clock7 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 9.5 16'
  }]]];
  var Clock7$1 = Clock7;

  var Clock8 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 8 14'
  }]]];
  var Clock8$1 = Clock8;

  var Clock9 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 7.5 12'
  }]]];
  var Clock9$1 = Clock9;

  var Clock = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polyline', {
    points: '12 6 12 12 16 14'
  }]]];
  var Clock$1 = Clock;

  var CloudCog = ['svg', defaultAttributes, [['path', {
    d: 'M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9'
  }], ['circle', {
    cx: '12',
    cy: '17',
    r: '3'
  }], ['path', {
    d: 'M12 13v1'
  }], ['path', {
    d: 'M12 20v1'
  }], ['path', {
    d: 'M16 17h-1'
  }], ['path', {
    d: 'M9 17H8'
  }], ['path', {
    d: 'm15 14-.88.88'
  }], ['path', {
    d: 'M9.88 19.12 9 20'
  }], ['path', {
    d: 'm15 20-.88-.88'
  }], ['path', {
    d: 'M9.88 14.88 9 14'
  }]]];
  var CloudCog$1 = CloudCog;

  var CloudDrizzle = ['svg', defaultAttributes, [['path', {
    d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'
  }], ['path', {
    d: 'M8 19v1'
  }], ['path', {
    d: 'M8 14v1'
  }], ['path', {
    d: 'M16 19v1'
  }], ['path', {
    d: 'M16 14v1'
  }], ['path', {
    d: 'M12 21v1'
  }], ['path', {
    d: 'M12 16v1'
  }]]];
  var CloudDrizzle$1 = CloudDrizzle;

  var CloudFog = ['svg', defaultAttributes, [['path', {
    d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'
  }], ['path', {
    d: 'M16 17H7'
  }], ['path', {
    d: 'M17 21H9'
  }]]];
  var CloudFog$1 = CloudFog;

  var CloudHail = ['svg', defaultAttributes, [['path', {
    d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'
  }], ['path', {
    d: 'M16 14v2'
  }], ['path', {
    d: 'M8 14v2'
  }], ['path', {
    d: 'M16 20h.01'
  }], ['path', {
    d: 'M8 20h.01'
  }], ['path', {
    d: 'M12 16v2'
  }], ['path', {
    d: 'M12 22h.01'
  }]]];
  var CloudHail$1 = CloudHail;

  var CloudLightning = ['svg', defaultAttributes, [['path', {
    d: 'M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973'
  }], ['path', {
    d: 'm13 12-3 5h4l-3 5'
  }]]];
  var CloudLightning$1 = CloudLightning;

  var CloudMoonRain = ['svg', defaultAttributes, [['path', {
    d: 'M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197'
  }], ['path', {
    d: 'M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24'
  }], ['path', {
    d: 'M11 20v2'
  }], ['path', {
    d: 'M7 19v2'
  }]]];
  var CloudMoonRain$1 = CloudMoonRain;

  var CloudMoon = ['svg', defaultAttributes, [['path', {
    d: 'M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z'
  }], ['path', {
    d: 'M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197'
  }]]];
  var CloudMoon$1 = CloudMoon;

  var CloudOff = ['svg', defaultAttributes, [['path', {
    d: 'm2 2 20 20'
  }], ['path', {
    d: 'M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193'
  }], ['path', {
    d: 'M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07'
  }]]];
  var CloudOff$1 = CloudOff;

  var CloudRainWind = ['svg', defaultAttributes, [['path', {
    d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'
  }], ['path', {
    d: 'm9.2 22 3-7'
  }], ['path', {
    d: 'm9 13-3 7'
  }], ['path', {
    d: 'm17 13-3 7'
  }]]];
  var CloudRainWind$1 = CloudRainWind;

  var CloudRain = ['svg', defaultAttributes, [['path', {
    d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'
  }], ['path', {
    d: 'M16 14v6'
  }], ['path', {
    d: 'M8 14v6'
  }], ['path', {
    d: 'M12 16v6'
  }]]];
  var CloudRain$1 = CloudRain;

  var CloudSnow = ['svg', defaultAttributes, [['path', {
    d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'
  }], ['path', {
    d: 'M8 15h.01'
  }], ['path', {
    d: 'M8 19h.01'
  }], ['path', {
    d: 'M12 17h.01'
  }], ['path', {
    d: 'M12 21h.01'
  }], ['path', {
    d: 'M16 15h.01'
  }], ['path', {
    d: 'M16 19h.01'
  }]]];
  var CloudSnow$1 = CloudSnow;

  var CloudSunRain = ['svg', defaultAttributes, [['path', {
    d: 'M12 2v2'
  }], ['path', {
    d: 'm4.93 4.93 1.41 1.41'
  }], ['path', {
    d: 'M20 12h2'
  }], ['path', {
    d: 'm19.07 4.93-1.41 1.41'
  }], ['path', {
    d: 'M15.947 12.65a4 4 0 0 0-5.925-4.128'
  }], ['path', {
    d: 'M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24'
  }], ['path', {
    d: 'M11 20v2'
  }], ['path', {
    d: 'M7 19v2'
  }]]];
  var CloudSunRain$1 = CloudSunRain;

  var CloudSun = ['svg', defaultAttributes, [['path', {
    d: 'M12 2v2'
  }], ['path', {
    d: 'm4.93 4.93 1.41 1.41'
  }], ['path', {
    d: 'M20 12h2'
  }], ['path', {
    d: 'm19.07 4.93-1.41 1.41'
  }], ['path', {
    d: 'M15.947 12.65a4 4 0 0 0-5.925-4.128'
  }], ['path', {
    d: 'M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z'
  }]]];
  var CloudSun$1 = CloudSun;

  var Cloud = ['svg', defaultAttributes, [['path', {
    d: 'M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z'
  }]]];
  var Cloud$1 = Cloud;

  var Cloudy = ['svg', defaultAttributes, [['path', {
    d: 'M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z'
  }], ['path', {
    d: 'M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5'
  }]]];
  var Cloudy$1 = Cloudy;

  var Clover = ['svg', defaultAttributes, [['path', {
    d: 'M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z'
  }], ['path', {
    d: 'M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16'
  }], ['path', {
    d: 'M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8'
  }], ['path', {
    d: 'M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z'
  }], ['path', {
    d: 'm7 17-5 5'
  }]]];
  var Clover$1 = Clover;

  var Code2 = ['svg', defaultAttributes, [['path', {
    d: 'm18 16 4-4-4-4'
  }], ['path', {
    d: 'm6 8-4 4 4 4'
  }], ['path', {
    d: 'm14.5 4-5 16'
  }]]];
  var Code2$1 = Code2;

  var Code = ['svg', defaultAttributes, [['polyline', {
    points: '16 18 22 12 16 6'
  }], ['polyline', {
    points: '8 6 2 12 8 18'
  }]]];
  var Code$1 = Code;

  var Codepen = ['svg', defaultAttributes, [['polygon', {
    points: '12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '15.5'
  }], ['polyline', {
    points: '22 8.5 12 15.5 2 8.5'
  }], ['polyline', {
    points: '2 15.5 12 8.5 22 15.5'
  }], ['line', {
    x1: '12',
    y1: '2',
    x2: '12',
    y2: '8.5'
  }]]];
  var Codepen$1 = Codepen;

  var Codesandbox = ['svg', defaultAttributes, [['path', {
    d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'
  }], ['polyline', {
    points: '7.5 4.21 12 6.81 16.5 4.21'
  }], ['polyline', {
    points: '7.5 19.79 7.5 14.6 3 12'
  }], ['polyline', {
    points: '21 12 16.5 14.6 16.5 19.79'
  }], ['polyline', {
    points: '3.27 6.96 12 12.01 20.73 6.96'
  }], ['line', {
    x1: '12',
    y1: '22.08',
    x2: '12',
    y2: '12'
  }]]];
  var Codesandbox$1 = Codesandbox;

  var Coffee = ['svg', defaultAttributes, [['path', {
    d: 'M17 8h1a4 4 0 1 1 0 8h-1'
  }], ['path', {
    d: 'M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z'
  }], ['line', {
    x1: '6',
    y1: '2',
    x2: '6',
    y2: '4'
  }], ['line', {
    x1: '10',
    y1: '2',
    x2: '10',
    y2: '4'
  }], ['line', {
    x1: '14',
    y1: '2',
    x2: '14',
    y2: '4'
  }]]];
  var Coffee$1 = Coffee;

  var Cog = ['svg', defaultAttributes, [['path', {
    d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z'
  }], ['path', {
    d: 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
  }], ['path', {
    d: 'M12 2v2'
  }], ['path', {
    d: 'M12 22v-2'
  }], ['path', {
    d: 'm17 20.66-1-1.73'
  }], ['path', {
    d: 'M11 10.27 7 3.34'
  }], ['path', {
    d: 'm20.66 17-1.73-1'
  }], ['path', {
    d: 'm3.34 7 1.73 1'
  }], ['path', {
    d: 'M14 12h8'
  }], ['path', {
    d: 'M2 12h2'
  }], ['path', {
    d: 'm20.66 7-1.73 1'
  }], ['path', {
    d: 'm3.34 17 1.73-1'
  }], ['path', {
    d: 'm17 3.34-1 1.73'
  }], ['path', {
    d: 'm11 13.73-4 6.93'
  }]]];
  var Cog$1 = Cog;

  var Coins = ['svg', defaultAttributes, [['circle', {
    cx: '8',
    cy: '8',
    r: '6'
  }], ['path', {
    d: 'M18.09 10.37A6 6 0 1 1 10.34 18'
  }], ['path', {
    d: 'M7 6h1v4'
  }], ['path', {
    d: 'm16.71 13.88.7.71-2.82 2.82'
  }]]];
  var Coins$1 = Coins;

  var Columns = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '12',
    y1: '3',
    x2: '12',
    y2: '21'
  }]]];
  var Columns$1 = Columns;

  var Command = ['svg', defaultAttributes, [['path', {
    d: 'M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z'
  }]]];
  var Command$1 = Command;

  var Compass = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polygon', {
    points: '16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76'
  }]]];
  var Compass$1 = Compass;

  var Component = ['svg', defaultAttributes, [['path', {
    d: 'M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z'
  }], ['path', {
    d: 'm12 2 3.5 3.5L12 9 8.5 5.5 12 2Z'
  }], ['path', {
    d: 'M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z'
  }], ['path', {
    d: 'm12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z'
  }]]];
  var Component$1 = Component;

  var ConciergeBell = ['svg', defaultAttributes, [['path', {
    d: 'M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z'
  }], ['path', {
    d: 'M20 16a8 8 0 1 0-16 0'
  }], ['path', {
    d: 'M12 4v4'
  }], ['path', {
    d: 'M10 4h4'
  }]]];
  var ConciergeBell$1 = ConciergeBell;

  var Contact = ['svg', defaultAttributes, [['path', {
    d: 'M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2'
  }], ['rect', {
    x: '3',
    y: '4',
    width: '18',
    height: '18',
    rx: '2'
  }], ['circle', {
    cx: '12',
    cy: '10',
    r: '2'
  }], ['line', {
    x1: '8',
    y1: '2',
    x2: '8',
    y2: '4'
  }], ['line', {
    x1: '16',
    y1: '2',
    x2: '16',
    y2: '4'
  }]]];
  var Contact$1 = Contact;

  var Contrast = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M12 18a6 6 0 0 0 0-12v12z'
  }]]];
  var Contrast$1 = Contrast;

  var Cookie = ['svg', defaultAttributes, [['path', {
    d: 'M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5'
  }], ['path', {
    d: 'M8.5 8.5v.01'
  }], ['path', {
    d: 'M16 15.5v.01'
  }], ['path', {
    d: 'M12 12v.01'
  }], ['path', {
    d: 'M11 17v.01'
  }], ['path', {
    d: 'M7 14v.01'
  }]]];
  var Cookie$1 = Cookie;

  var Copy = ['svg', defaultAttributes, [['rect', {
    x: '9',
    y: '9',
    width: '13',
    height: '13',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'
  }]]];
  var Copy$1 = Copy;

  var Copyleft = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M9 9.35a4 4 0 1 1 0 5.3'
  }]]];
  var Copyleft$1 = Copyleft;

  var Copyright = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M15 9.354a4 4 0 1 0 0 5.292'
  }]]];
  var Copyright$1 = Copyright;

  var CornerDownLeft = ['svg', defaultAttributes, [['polyline', {
    points: '9 10 4 15 9 20'
  }], ['path', {
    d: 'M20 4v7a4 4 0 0 1-4 4H4'
  }]]];
  var CornerDownLeft$1 = CornerDownLeft;

  var CornerDownRight = ['svg', defaultAttributes, [['polyline', {
    points: '15 10 20 15 15 20'
  }], ['path', {
    d: 'M4 4v7a4 4 0 0 0 4 4h12'
  }]]];
  var CornerDownRight$1 = CornerDownRight;

  var CornerLeftDown = ['svg', defaultAttributes, [['polyline', {
    points: '14 15 9 20 4 15'
  }], ['path', {
    d: 'M20 4h-7a4 4 0 0 0-4 4v12'
  }]]];
  var CornerLeftDown$1 = CornerLeftDown;

  var CornerLeftUp = ['svg', defaultAttributes, [['polyline', {
    points: '14 9 9 4 4 9'
  }], ['path', {
    d: 'M20 20h-7a4 4 0 0 1-4-4V4'
  }]]];
  var CornerLeftUp$1 = CornerLeftUp;

  var CornerRightDown = ['svg', defaultAttributes, [['polyline', {
    points: '10 15 15 20 20 15'
  }], ['path', {
    d: 'M4 4h7a4 4 0 0 1 4 4v12'
  }]]];
  var CornerRightDown$1 = CornerRightDown;

  var CornerRightUp = ['svg', defaultAttributes, [['polyline', {
    points: '10 9 15 4 20 9'
  }], ['path', {
    d: 'M4 20h7a4 4 0 0 0 4-4V4'
  }]]];
  var CornerRightUp$1 = CornerRightUp;

  var CornerUpLeft = ['svg', defaultAttributes, [['polyline', {
    points: '9 14 4 9 9 4'
  }], ['path', {
    d: 'M20 20v-7a4 4 0 0 0-4-4H4'
  }]]];
  var CornerUpLeft$1 = CornerUpLeft;

  var CornerUpRight = ['svg', defaultAttributes, [['polyline', {
    points: '15 14 20 9 15 4'
  }], ['path', {
    d: 'M4 20v-7a4 4 0 0 1 4-4h12'
  }]]];
  var CornerUpRight$1 = CornerUpRight;

  var Cpu = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '4',
    width: '16',
    height: '16',
    rx: '2',
    ry: '2'
  }], ['rect', {
    x: '9',
    y: '9',
    width: '6',
    height: '6'
  }], ['line', {
    x1: '9',
    y1: '2',
    x2: '9',
    y2: '4'
  }], ['line', {
    x1: '15',
    y1: '2',
    x2: '15',
    y2: '4'
  }], ['line', {
    x1: '9',
    y1: '21',
    x2: '9',
    y2: '22'
  }], ['line', {
    x1: '15',
    y1: '20',
    x2: '15',
    y2: '22'
  }], ['line', {
    x1: '20',
    y1: '9',
    x2: '22',
    y2: '9'
  }], ['line', {
    x1: '20',
    y1: '14',
    x2: '22',
    y2: '14'
  }], ['line', {
    x1: '2',
    y1: '9',
    x2: '4',
    y2: '9'
  }], ['line', {
    x1: '2',
    y1: '14',
    x2: '4',
    y2: '14'
  }]]];
  var Cpu$1 = Cpu;

  var CreditCard = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '5',
    width: '20',
    height: '14',
    rx: '2'
  }], ['line', {
    x1: '2',
    y1: '10',
    x2: '22',
    y2: '10'
  }]]];
  var CreditCard$1 = CreditCard;

  var Croissant = ['svg', defaultAttributes, [['path', {
    d: 'm4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z'
  }], ['path', {
    d: 'm10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83'
  }], ['path', {
    d: 'M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4'
  }], ['path', {
    d: 'm14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2'
  }], ['path', {
    d: 'M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5'
  }]]];
  var Croissant$1 = Croissant;

  var Crop = ['svg', defaultAttributes, [['path', {
    d: 'M6 2v14a2 2 0 0 0 2 2h14'
  }], ['path', {
    d: 'M18 22V8a2 2 0 0 0-2-2H2'
  }]]];
  var Crop$1 = Crop;

  var Cross = ['svg', defaultAttributes, [['path', {
    d: 'M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z'
  }]]];
  var Cross$1 = Cross;

  var Crosshair = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['line', {
    x1: '22',
    y1: '12',
    x2: '18',
    y2: '12'
  }], ['line', {
    x1: '6',
    y1: '12',
    x2: '2',
    y2: '12'
  }], ['line', {
    x1: '12',
    y1: '6',
    x2: '12',
    y2: '2'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '18'
  }]]];
  var Crosshair$1 = Crosshair;

  var Crown = ['svg', defaultAttributes, [['path', {
    d: 'm2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14'
  }]]];
  var Crown$1 = Crown;

  var CupSoda = ['svg', defaultAttributes, [['path', {
    d: 'm6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8'
  }], ['path', {
    d: 'M5 8h14'
  }], ['path', {
    d: 'M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0'
  }], ['path', {
    d: 'm12 8 1-6h2'
  }]]];
  var CupSoda$1 = CupSoda;

  var CurlyBraces = ['svg', defaultAttributes, [['path', {
    d: 'M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1'
  }], ['path', {
    d: 'M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1'
  }]]];
  var CurlyBraces$1 = CurlyBraces;

  var Currency = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '8'
  }], ['line', {
    x1: '3',
    y1: '3',
    x2: '6',
    y2: '6'
  }], ['line', {
    x1: '21',
    y1: '3',
    x2: '18',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '21',
    x2: '6',
    y2: '18'
  }], ['line', {
    x1: '21',
    y1: '21',
    x2: '18',
    y2: '18'
  }]]];
  var Currency$1 = Currency;

  var Database = ['svg', defaultAttributes, [['ellipse', {
    cx: '12',
    cy: '5',
    rx: '9',
    ry: '3'
  }], ['path', {
    d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'
  }], ['path', {
    d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'
  }]]];
  var Database$1 = Database;

  var Delete = ['svg', defaultAttributes, [['path', {
    d: 'M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z'
  }], ['line', {
    x1: '18',
    y1: '9',
    x2: '12',
    y2: '15'
  }], ['line', {
    x1: '12',
    y1: '9',
    x2: '18',
    y2: '15'
  }]]];
  var Delete$1 = Delete;

  var Diamond = ['svg', defaultAttributes, [['rect', {
    x: '12',
    y: '1',
    width: '15.56',
    height: '15.56',
    rx: '2.41',
    transform: 'rotate(45 12 1)'
  }]]];
  var Diamond$1 = Diamond;

  var Dice1 = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M12 12h.01'
  }]]];
  var Dice1$1 = Dice1;

  var Dice2 = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M15 9h.01'
  }], ['path', {
    d: 'M9 15h.01'
  }]]];
  var Dice2$1 = Dice2;

  var Dice3 = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M16 8h.01'
  }], ['path', {
    d: 'M12 12h.01'
  }], ['path', {
    d: 'M8 16h.01'
  }]]];
  var Dice3$1 = Dice3;

  var Dice4 = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M16 8h.01'
  }], ['path', {
    d: 'M8 8h.01'
  }], ['path', {
    d: 'M8 16h.01'
  }], ['path', {
    d: 'M16 16h.01'
  }]]];
  var Dice4$1 = Dice4;

  var Dice5 = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M16 8h.01'
  }], ['path', {
    d: 'M8 8h.01'
  }], ['path', {
    d: 'M8 16h.01'
  }], ['path', {
    d: 'M16 16h.01'
  }], ['path', {
    d: 'M12 12h.01'
  }]]];
  var Dice5$1 = Dice5;

  var Dice6 = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M16 8h.01'
  }], ['path', {
    d: 'M16 12h.01'
  }], ['path', {
    d: 'M16 16h.01'
  }], ['path', {
    d: 'M8 8h.01'
  }], ['path', {
    d: 'M8 12h.01'
  }], ['path', {
    d: 'M8 16h.01'
  }]]];
  var Dice6$1 = Dice6;

  var Dices = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '10',
    width: '12',
    height: '12',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'm17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6'
  }], ['path', {
    d: 'M6 18h.01'
  }], ['path', {
    d: 'M10 14h.01'
  }], ['path', {
    d: 'M15 6h.01'
  }], ['path', {
    d: 'M18 9h.01'
  }]]];
  var Dices$1 = Dices;

  var Diff = ['svg', defaultAttributes, [['path', {
    d: 'M12 3v14'
  }], ['path', {
    d: 'M5 10h14'
  }], ['path', {
    d: 'M5 21h14'
  }]]];
  var Diff$1 = Diff;

  var Disc = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '3'
  }]]];
  var Disc$1 = Disc;

  var DivideCircle = ['svg', defaultAttributes, [['line', {
    x1: '8',
    y1: '12',
    x2: '16',
    y2: '12'
  }], ['line', {
    x1: '12',
    y1: '16',
    x2: '12',
    y2: '16'
  }], ['line', {
    x1: '12',
    y1: '8',
    x2: '12',
    y2: '8'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }]]];
  var DivideCircle$1 = DivideCircle;

  var DivideSquare = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '8',
    y1: '12',
    x2: '16',
    y2: '12'
  }], ['line', {
    x1: '12',
    y1: '16',
    x2: '12',
    y2: '16'
  }], ['line', {
    x1: '12',
    y1: '8',
    x2: '12',
    y2: '8'
  }]]];
  var DivideSquare$1 = DivideSquare;

  var Divide = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '6',
    r: '1'
  }], ['line', {
    x1: '5',
    y1: '12',
    x2: '19',
    y2: '12'
  }], ['circle', {
    cx: '12',
    cy: '18',
    r: '1'
  }]]];
  var Divide$1 = Divide;

  var DnaOff = ['svg', defaultAttributes, [['path', {
    d: 'M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5'
  }], ['path', {
    d: 'M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5'
  }], ['path', {
    d: 'm17 6-2.5-2.5'
  }], ['path', {
    d: 'm14 8-1.5-1.5'
  }], ['path', {
    d: 'm7 18 2.5 2.5'
  }], ['path', {
    d: 'm3.5 14.5.5.5'
  }], ['path', {
    d: 'm20 9 .5.5'
  }], ['path', {
    d: 'm6.5 12.5 1 1'
  }], ['path', {
    d: 'm16.5 10.5 1 1'
  }], ['path', {
    d: 'm10 16 1.5 1.5'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var DnaOff$1 = DnaOff;

  var Dna = ['svg', defaultAttributes, [['path', {
    d: 'M2 15c6.667-6 13.333 0 20-6'
  }], ['path', {
    d: 'M9 22c1.798-1.998 2.518-3.995 2.807-5.993'
  }], ['path', {
    d: 'M15 2c-1.798 1.998-2.518 3.995-2.807 5.993'
  }], ['path', {
    d: 'm17 6-2.5-2.5'
  }], ['path', {
    d: 'm14 8-1-1'
  }], ['path', {
    d: 'm7 18 2.5 2.5'
  }], ['path', {
    d: 'm3.5 14.5.5.5'
  }], ['path', {
    d: 'm20 9 .5.5'
  }], ['path', {
    d: 'm6.5 12.5 1 1'
  }], ['path', {
    d: 'm16.5 10.5 1 1'
  }], ['path', {
    d: 'm10 16 1.5 1.5'
  }]]];
  var Dna$1 = Dna;

  var Dog = ['svg', defaultAttributes, [['path', {
    d: 'M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5'
  }], ['path', {
    d: 'M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5'
  }], ['path', {
    d: 'M8 14v.5'
  }], ['path', {
    d: 'M16 14v.5'
  }], ['path', {
    d: 'M11.25 16.25h1.5L12 17l-.75-.75Z'
  }], ['path', {
    d: 'M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306'
  }]]];
  var Dog$1 = Dog;

  var DollarSign = ['svg', defaultAttributes, [['line', {
    x1: '12',
    y1: '2',
    x2: '12',
    y2: '22'
  }], ['path', {
    d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  }]]];
  var DollarSign$1 = DollarSign;

  var DownloadCloud = ['svg', defaultAttributes, [['path', {
    d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'
  }], ['path', {
    d: 'M12 12v9'
  }], ['path', {
    d: 'm8 17 4 4 4-4'
  }]]];
  var DownloadCloud$1 = DownloadCloud;

  var Download = ['svg', defaultAttributes, [['path', {
    d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'
  }], ['polyline', {
    points: '7 10 12 15 17 10'
  }], ['line', {
    x1: '12',
    y1: '15',
    x2: '12',
    y2: '3'
  }]]];
  var Download$1 = Download;

  var Dribbble = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94'
  }], ['path', {
    d: 'M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32'
  }], ['path', {
    d: 'M8.56 2.75c4.37 6 6 9.42 8 17.72'
  }]]];
  var Dribbble$1 = Dribbble;

  var Droplet = ['svg', defaultAttributes, [['path', {
    d: 'M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z'
  }]]];
  var Droplet$1 = Droplet;

  var Droplets = ['svg', defaultAttributes, [['path', {
    d: 'M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z'
  }], ['path', {
    d: 'M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97'
  }]]];
  var Droplets$1 = Droplets;

  var Drumstick = ['svg', defaultAttributes, [['path', {
    d: 'M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z'
  }], ['path', {
    d: 'm11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16'
  }]]];
  var Drumstick$1 = Drumstick;

  var Dumbbell = ['svg', defaultAttributes, [['path', {
    d: 'm6.5 6.5 11 11'
  }], ['path', {
    d: 'm21 21-1-1'
  }], ['path', {
    d: 'm3 3 1 1'
  }], ['path', {
    d: 'm18 22 4-4'
  }], ['path', {
    d: 'm2 6 4-4'
  }], ['path', {
    d: 'm3 10 7-7'
  }], ['path', {
    d: 'm14 21 7-7'
  }]]];
  var Dumbbell$1 = Dumbbell;

  var EarOff = ['svg', defaultAttributes, [['path', {
    d: 'M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46'
  }], ['path', {
    d: 'M6 8.5c0-.75.13-1.47.36-2.14'
  }], ['path', {
    d: 'M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76'
  }], ['path', {
    d: 'M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var EarOff$1 = EarOff;

  var Ear = ['svg', defaultAttributes, [['path', {
    d: 'M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0'
  }], ['path', {
    d: 'M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4'
  }]]];
  var Ear$1 = Ear;

  var Edit2 = ['svg', defaultAttributes, [['path', {
    d: 'M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'
  }]]];
  var Edit2$1 = Edit2;

  var Edit3 = ['svg', defaultAttributes, [['path', {
    d: 'M12 20h9'
  }], ['path', {
    d: 'M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'
  }]]];
  var Edit3$1 = Edit3;

  var Edit = ['svg', defaultAttributes, [['path', {
    d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'
  }], ['path', {
    d: 'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'
  }]]];
  var Edit$1 = Edit;

  var EggFried = ['svg', defaultAttributes, [['circle', {
    cx: '11.5',
    cy: '12.5',
    r: '3.5'
  }], ['path', {
    d: 'M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z'
  }]]];
  var EggFried$1 = EggFried;

  var EggOff = ['svg', defaultAttributes, [['path', {
    d: 'M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625'
  }], ['path', {
    d: 'M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var EggOff$1 = EggOff;

  var Egg = ['svg', defaultAttributes, [['path', {
    d: 'M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z'
  }]]];
  var Egg$1 = Egg;

  var EqualNot = ['svg', defaultAttributes, [['line', {
    x1: '5',
    y1: '9',
    x2: '19',
    y2: '9'
  }], ['line', {
    x1: '5',
    y1: '15',
    x2: '19',
    y2: '15'
  }], ['line', {
    x1: '19',
    y1: '5',
    x2: '5',
    y2: '19'
  }]]];
  var EqualNot$1 = EqualNot;

  var Equal = ['svg', defaultAttributes, [['line', {
    x1: '5',
    y1: '9',
    x2: '19',
    y2: '9'
  }], ['line', {
    x1: '5',
    y1: '15',
    x2: '19',
    y2: '15'
  }]]];
  var Equal$1 = Equal;

  var Eraser = ['svg', defaultAttributes, [['path', {
    d: 'm7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21'
  }], ['path', {
    d: 'M22 21H7'
  }], ['path', {
    d: 'm5 11 9 9'
  }]]];
  var Eraser$1 = Eraser;

  var Euro = ['svg', defaultAttributes, [['path', {
    d: 'M4 10h12'
  }], ['path', {
    d: 'M4 14h9'
  }], ['path', {
    d: 'M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2'
  }]]];
  var Euro$1 = Euro;

  var Expand = ['svg', defaultAttributes, [['path', {
    d: 'm21 21-6-6m6 6v-4.8m0 4.8h-4.8'
  }], ['path', {
    d: 'M3 16.2V21m0 0h4.8M3 21l6-6'
  }], ['path', {
    d: 'M21 7.8V3m0 0h-4.8M21 3l-6 6'
  }], ['path', {
    d: 'M3 7.8V3m0 0h4.8M3 3l6 6'
  }]]];
  var Expand$1 = Expand;

  var ExternalLink = ['svg', defaultAttributes, [['path', {
    d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
  }], ['polyline', {
    points: '15 3 21 3 21 9'
  }], ['line', {
    x1: '10',
    y1: '14',
    x2: '21',
    y2: '3'
  }]]];
  var ExternalLink$1 = ExternalLink;

  var EyeOff = ['svg', defaultAttributes, [['path', {
    d: 'M9.88 9.88a3 3 0 1 0 4.24 4.24'
  }], ['path', {
    d: 'M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'
  }], ['path', {
    d: 'M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var EyeOff$1 = EyeOff;

  var Eye = ['svg', defaultAttributes, [['path', {
    d: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '3'
  }]]];
  var Eye$1 = Eye;

  var Facebook = ['svg', defaultAttributes, [['path', {
    d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'
  }]]];
  var Facebook$1 = Facebook;

  var Factory = ['svg', defaultAttributes, [['path', {
    d: 'M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z'
  }], ['path', {
    d: 'M17 18h1'
  }], ['path', {
    d: 'M12 18h1'
  }], ['path', {
    d: 'M7 18h1'
  }]]];
  var Factory$1 = Factory;

  var Fan = ['svg', defaultAttributes, [['path', {
    d: 'M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z'
  }], ['path', {
    d: 'M12 12v.01'
  }]]];
  var Fan$1 = Fan;

  var FastForward = ['svg', defaultAttributes, [['polygon', {
    points: '13 19 22 12 13 5 13 19'
  }], ['polygon', {
    points: '2 19 11 12 2 5 2 19'
  }]]];
  var FastForward$1 = FastForward;

  var Feather = ['svg', defaultAttributes, [['path', {
    d: 'M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z'
  }], ['line', {
    x1: '16',
    y1: '8',
    x2: '2',
    y2: '22'
  }], ['line', {
    x1: '17.5',
    y1: '15',
    x2: '9',
    y2: '15'
  }]]];
  var Feather$1 = Feather;

  var Figma = ['svg', defaultAttributes, [['path', {
    d: 'M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z'
  }], ['path', {
    d: 'M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z'
  }], ['path', {
    d: 'M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z'
  }], ['path', {
    d: 'M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z'
  }], ['path', {
    d: 'M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z'
  }]]];
  var Figma$1 = Figma;

  var FileArchive = ['svg', defaultAttributes, [['path', {
    d: 'M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['circle', {
    cx: '10',
    cy: '20',
    r: '2'
  }], ['path', {
    d: 'M10 7V6'
  }], ['path', {
    d: 'M10 12v-1'
  }], ['path', {
    d: 'M10 18v-2'
  }]]];
  var FileArchive$1 = FileArchive;

  var FileAudio2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M2 17v-3a4 4 0 0 1 8 0v3'
  }], ['circle', {
    cx: '9',
    cy: '17',
    r: '1'
  }], ['circle', {
    cx: '3',
    cy: '17',
    r: '1'
  }]]];
  var FileAudio2$1 = FileAudio2;

  var FileAudio = ['svg', defaultAttributes, [['path', {
    d: 'M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z'
  }], ['path', {
    d: 'M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z'
  }], ['path', {
    d: 'M2 19v-3a6 6 0 0 1 12 0v3'
  }]]];
  var FileAudio$1 = FileAudio;

  var FileAxis3d = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M8 10v8h8'
  }], ['path', {
    d: 'm8 18 4-4'
  }]]];
  var FileAxis3d$1 = FileAxis3d;

  var FileBadge2 = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['path', {
    d: 'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
  }], ['path', {
    d: 'm14 12.5 1 5.5-3-1-3 1 1-5.5'
  }]]];
  var FileBadge2$1 = FileBadge2;

  var FileBadge = ['svg', defaultAttributes, [['path', {
    d: 'M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
  }], ['path', {
    d: 'M7 16.5 8 22l-3-1-3 1 1-5.5'
  }]]];
  var FileBadge$1 = FileBadge;

  var FileBarChart2 = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M12 18v-6'
  }], ['path', {
    d: 'M8 18v-1'
  }], ['path', {
    d: 'M16 18v-3'
  }]]];
  var FileBarChart2$1 = FileBarChart2;

  var FileBarChart = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M12 18v-4'
  }], ['path', {
    d: 'M8 18v-2'
  }], ['path', {
    d: 'M16 18v-6'
  }]]];
  var FileBarChart$1 = FileBarChart;

  var FileBox = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z'
  }], ['path', {
    d: 'm7 17-4.74-2.85'
  }], ['path', {
    d: 'm7 17 4.74-2.85'
  }], ['path', {
    d: 'M7 17v5'
  }]]];
  var FileBox$1 = FileBox;

  var FileCheck2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'm3 15 2 2 4-4'
  }]]];
  var FileCheck2$1 = FileCheck2;

  var FileCheck = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'm9 15 2 2 4-4'
  }]]];
  var FileCheck$1 = FileCheck;

  var FileClock = ['svg', defaultAttributes, [['path', {
    d: 'M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['circle', {
    cx: '8',
    cy: '16',
    r: '6'
  }], ['path', {
    d: 'M9.5 17.5 8 16.25V14'
  }]]];
  var FileClock$1 = FileClock;

  var FileCode = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'm9 18 3-3-3-3'
  }], ['path', {
    d: 'm5 12-3 3 3 3'
  }]]];
  var FileCode$1 = FileCode;

  var FileCog2 = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['circle', {
    cx: '12',
    cy: '15',
    r: '2'
  }], ['path', {
    d: 'M12 12v1'
  }], ['path', {
    d: 'M12 17v1'
  }], ['path', {
    d: 'm14.6 13.5-.87.5'
  }], ['path', {
    d: 'm10.27 16-.87.5'
  }], ['path', {
    d: 'm14.6 16.5-.87-.5'
  }], ['path', {
    d: 'm10.27 14-.87-.5'
  }]]];
  var FileCog2$1 = FileCog2;

  var FileCog = ['svg', defaultAttributes, [['path', {
    d: 'M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['circle', {
    cx: '6',
    cy: '14',
    r: '3'
  }], ['path', {
    d: 'M6 10v1'
  }], ['path', {
    d: 'M6 17v1'
  }], ['path', {
    d: 'M10 14H9'
  }], ['path', {
    d: 'M3 14H2'
  }], ['path', {
    d: 'm9 11-.88.88'
  }], ['path', {
    d: 'M3.88 16.12 3 17'
  }], ['path', {
    d: 'm9 17-.88-.88'
  }], ['path', {
    d: 'M3.88 11.88 3 11'
  }]]];
  var FileCog$1 = FileCog;

  var FileDiff = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['path', {
    d: 'M12 13V7'
  }], ['path', {
    d: 'M9 10h6'
  }], ['path', {
    d: 'M9 17h6'
  }]]];
  var FileDiff$1 = FileDiff;

  var FileDigit = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M10 12h2v6'
  }], ['rect', {
    x: '2',
    y: '12',
    width: '4',
    height: '6'
  }], ['path', {
    d: 'M10 18h4'
  }]]];
  var FileDigit$1 = FileDigit;

  var FileDown = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M12 18v-6'
  }], ['path', {
    d: 'm9 15 3 3 3-3'
  }]]];
  var FileDown$1 = FileDown;

  var FileEdit = ['svg', defaultAttributes, [['path', {
    d: 'M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z'
  }]]];
  var FileEdit$1 = FileEdit;

  var FileHeart = ['svg', defaultAttributes, [['path', {
    d: 'M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z'
  }]]];
  var FileHeart$1 = FileHeart;

  var FileImage = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['circle', {
    cx: '10',
    cy: '13',
    r: '2'
  }], ['path', {
    d: 'm20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22'
  }]]];
  var FileImage$1 = FileImage;

  var FileInput = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M2 15h10'
  }], ['path', {
    d: 'm9 18 3-3-3-3'
  }]]];
  var FileInput$1 = FileInput;

  var FileJson2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1'
  }], ['path', {
    d: 'M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1'
  }]]];
  var FileJson2$1 = FileJson2;

  var FileJson = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1'
  }], ['path', {
    d: 'M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1'
  }]]];
  var FileJson$1 = FileJson;

  var FileKey2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['circle', {
    cx: '4',
    cy: '16',
    r: '2'
  }], ['path', {
    d: 'm10 10-4.5 4.5'
  }], ['path', {
    d: 'm9 11 1 1'
  }]]];
  var FileKey2$1 = FileKey2;

  var FileKey = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['circle', {
    cx: '10',
    cy: '16',
    r: '2'
  }], ['path', {
    d: 'm16 10-4.5 4.5'
  }], ['path', {
    d: 'm15 11 1 1'
  }]]];
  var FileKey$1 = FileKey;

  var FileLineChart = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'm16 13-3.5 3.5-2-2L8 17'
  }]]];
  var FileLineChart$1 = FileLineChart;

  var FileLock2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['rect', {
    x: '2',
    y: '13',
    width: '8',
    height: '5',
    rx: '1'
  }], ['path', {
    d: 'M8 13v-2a2 2 0 1 0-4 0v2'
  }]]];
  var FileLock2$1 = FileLock2;

  var FileLock = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['rect', {
    x: '8',
    y: '12',
    width: '8',
    height: '6',
    rx: '1'
  }], ['path', {
    d: 'M15 12v-2a3 3 0 1 0-6 0v2'
  }]]];
  var FileLock$1 = FileLock;

  var FileMinus2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M3 15h6'
  }]]];
  var FileMinus2$1 = FileMinus2;

  var FileMinus = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['line', {
    x1: '9',
    y1: '15',
    x2: '15',
    y2: '15'
  }]]];
  var FileMinus$1 = FileMinus;

  var FileOutput = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M2 15h10'
  }], ['path', {
    d: 'm5 12-3 3 3 3'
  }]]];
  var FileOutput$1 = FileOutput;

  var FilePieChart = ['svg', defaultAttributes, [['path', {
    d: 'M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29'
  }], ['path', {
    d: 'M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z'
  }]]];
  var FilePieChart$1 = FilePieChart;

  var FilePlus2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M3 15h6'
  }], ['path', {
    d: 'M6 12v6'
  }]]];
  var FilePlus2$1 = FilePlus2;

  var FilePlus = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['line', {
    x1: '12',
    y1: '18',
    x2: '12',
    y2: '12'
  }], ['line', {
    x1: '9',
    y1: '15',
    x2: '15',
    y2: '15'
  }]]];
  var FilePlus$1 = FilePlus;

  var FileQuestion = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['path', {
    d: 'M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2'
  }], ['path', {
    d: 'M12 17h.01'
  }]]];
  var FileQuestion$1 = FileQuestion;

  var FileScan = ['svg', defaultAttributes, [['path', {
    d: 'M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M16 22a2 2 0 0 1-2-2'
  }], ['path', {
    d: 'M20 22a2 2 0 0 0 2-2'
  }], ['path', {
    d: 'M20 14a2 2 0 0 1 2 2'
  }], ['path', {
    d: 'M16 14a2 2 0 0 0-2 2'
  }]]];
  var FileScan$1 = FileScan;

  var FileSearch2 = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['circle', {
    cx: '11.5',
    cy: '14.5',
    r: '2.5'
  }], ['path', {
    d: 'M13.25 16.25 15 18'
  }]]];
  var FileSearch2$1 = FileSearch2;

  var FileSearch = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
  }], ['path', {
    d: 'm9 18-1.5-1.5'
  }]]];
  var FileSearch$1 = FileSearch;

  var FileSignature = ['svg', defaultAttributes, [['path', {
    d: 'M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5'
  }], ['path', {
    d: 'M8 18h1'
  }], ['path', {
    d: 'M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z'
  }]]];
  var FileSignature$1 = FileSignature;

  var FileSpreadsheet = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M8 13h2'
  }], ['path', {
    d: 'M8 17h2'
  }], ['path', {
    d: 'M14 13h2'
  }], ['path', {
    d: 'M14 17h2'
  }]]];
  var FileSpreadsheet$1 = FileSpreadsheet;

  var FileSymlink = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'm10 18 3-3-3-3'
  }], ['path', {
    d: 'M4 18v-1a2 2 0 0 1 2-2h6'
  }]]];
  var FileSymlink$1 = FileSymlink;

  var FileTerminal = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'm8 16 2-2-2-2'
  }], ['path', {
    d: 'M12 18h4'
  }]]];
  var FileTerminal$1 = FileTerminal;

  var FileText = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['line', {
    x1: '16',
    y1: '13',
    x2: '8',
    y2: '13'
  }], ['line', {
    x1: '16',
    y1: '17',
    x2: '8',
    y2: '17'
  }], ['line', {
    x1: '10',
    y1: '9',
    x2: '8',
    y2: '9'
  }]]];
  var FileText$1 = FileText;

  var FileType2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M2 13v-1h6v1'
  }], ['path', {
    d: 'M4 18h2'
  }], ['path', {
    d: 'M5 12v6'
  }]]];
  var FileType2$1 = FileType2;

  var FileType = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M9 13v-1h6v1'
  }], ['path', {
    d: 'M11 18h2'
  }], ['path', {
    d: 'M12 12v6'
  }]]];
  var FileType$1 = FileType;

  var FileUp = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M12 12v6'
  }], ['path', {
    d: 'm15 15-3-3-3 3'
  }]]];
  var FileUp$1 = FileUp;

  var FileVideo2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'm10 15.5 4 2.5v-6l-4 2.5'
  }], ['rect', {
    x: '2',
    y: '12',
    width: '8',
    height: '6',
    rx: '1'
  }]]];
  var FileVideo2$1 = FileVideo2;

  var FileVideo = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'm10 11 5 3-5 3v-6Z'
  }]]];
  var FileVideo$1 = FileVideo;

  var FileVolume2 = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5'
  }], ['path', {
    d: 'M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3'
  }], ['path', {
    d: 'M8 15h.01'
  }]]];
  var FileVolume2$1 = FileVolume2;

  var FileVolume = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['path', {
    d: 'm7 10-3 2H2v4h2l3 2v-8Z'
  }], ['path', {
    d: 'M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3'
  }]]];
  var FileVolume$1 = FileVolume;

  var FileWarning = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['path', {
    d: 'M12 9v4'
  }], ['path', {
    d: 'M12 17h.01'
  }]]];
  var FileWarning$1 = FileWarning;

  var FileX2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4'
  }], ['path', {
    d: 'M14 2v6h6'
  }], ['path', {
    d: 'm3 12.5 5 5'
  }], ['path', {
    d: 'm8 12.5-5 5'
  }]]];
  var FileX2$1 = FileX2;

  var FileX = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }], ['line', {
    x1: '9.5',
    y1: '12.5',
    x2: '14.5',
    y2: '17.5'
  }], ['line', {
    x1: '14.5',
    y1: '12.5',
    x2: '9.5',
    y2: '17.5'
  }]]];
  var FileX$1 = FileX;

  var File = ['svg', defaultAttributes, [['path', {
    d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'
  }], ['polyline', {
    points: '14 2 14 8 20 8'
  }]]];
  var File$1 = File;

  var Files = ['svg', defaultAttributes, [['path', {
    d: 'M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z'
  }], ['path', {
    d: 'M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8'
  }], ['path', {
    d: 'M15 2v5h5'
  }]]];
  var Files$1 = Files;

  var Film = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '2',
    width: '20',
    height: '20',
    rx: '2.18',
    ry: '2.18'
  }], ['line', {
    x1: '7',
    y1: '2',
    x2: '7',
    y2: '22'
  }], ['line', {
    x1: '17',
    y1: '2',
    x2: '17',
    y2: '22'
  }], ['line', {
    x1: '2',
    y1: '12',
    x2: '22',
    y2: '12'
  }], ['line', {
    x1: '2',
    y1: '7',
    x2: '7',
    y2: '7'
  }], ['line', {
    x1: '2',
    y1: '17',
    x2: '7',
    y2: '17'
  }], ['line', {
    x1: '17',
    y1: '17',
    x2: '22',
    y2: '17'
  }], ['line', {
    x1: '17',
    y1: '7',
    x2: '22',
    y2: '7'
  }]]];
  var Film$1 = Film;

  var Filter = ['svg', defaultAttributes, [['polygon', {
    points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3'
  }]]];
  var Filter$1 = Filter;

  var Fingerprint = ['svg', defaultAttributes, [['path', {
    d: 'M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4'
  }], ['path', {
    d: 'M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2'
  }], ['path', {
    d: 'M17.29 21.02c.12-.6.43-2.3.5-3.02'
  }], ['path', {
    d: 'M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4'
  }], ['path', {
    d: 'M8.65 22c.21-.66.45-1.32.57-2'
  }], ['path', {
    d: 'M14 13.12c0 2.38 0 6.38-1 8.88'
  }], ['path', {
    d: 'M2 16h.01'
  }], ['path', {
    d: 'M21.8 16c.2-2 .131-5.354 0-6'
  }], ['path', {
    d: 'M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2'
  }]]];
  var Fingerprint$1 = Fingerprint;

  var FlagOff = ['svg', defaultAttributes, [['path', {
    d: 'M8 2c3 0 5 2 8 2s4-1 4-1v11'
  }], ['path', {
    d: 'M4 22V4'
  }], ['path', {
    d: 'M4 15s1-1 4-1 5 2 8 2'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var FlagOff$1 = FlagOff;

  var FlagTriangleLeft = ['svg', defaultAttributes, [['path', {
    d: 'M17 22V2L7 7l10 5'
  }]]];
  var FlagTriangleLeft$1 = FlagTriangleLeft;

  var FlagTriangleRight = ['svg', defaultAttributes, [['path', {
    d: 'M7 22V2l10 5-10 5'
  }]]];
  var FlagTriangleRight$1 = FlagTriangleRight;

  var Flag = ['svg', defaultAttributes, [['path', {
    d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'
  }], ['line', {
    x1: '4',
    y1: '22',
    x2: '4',
    y2: '15'
  }]]];
  var Flag$1 = Flag;

  var Flame = ['svg', defaultAttributes, [['path', {
    d: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z'
  }]]];
  var Flame$1 = Flame;

  var FlashlightOff = ['svg', defaultAttributes, [['path', {
    d: 'M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4'
  }], ['path', {
    d: 'M7 2h11v4c0 2-2 2-2 4v1'
  }], ['line', {
    x1: '11',
    y1: '6',
    x2: '18',
    y2: '6'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var FlashlightOff$1 = FlashlightOff;

  var Flashlight = ['svg', defaultAttributes, [['path', {
    d: 'M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z'
  }], ['line', {
    x1: '6',
    y1: '6',
    x2: '18',
    y2: '6'
  }], ['line', {
    x1: '12',
    y1: '12',
    x2: '12',
    y2: '12'
  }]]];
  var Flashlight$1 = Flashlight;

  var FlaskConicalOff = ['svg', defaultAttributes, [['path', {
    d: 'M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542'
  }], ['path', {
    d: 'M10 2v2.343'
  }], ['path', {
    d: 'M14 2v6.343'
  }], ['path', {
    d: 'M8.5 2h7'
  }], ['path', {
    d: 'M7 16h9'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var FlaskConicalOff$1 = FlaskConicalOff;

  var FlaskConical = ['svg', defaultAttributes, [['path', {
    d: 'M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2'
  }], ['path', {
    d: 'M8.5 2h7'
  }], ['path', {
    d: 'M7 16h10'
  }]]];
  var FlaskConical$1 = FlaskConical;

  var FlaskRound = ['svg', defaultAttributes, [['path', {
    d: 'M10 2v7.31'
  }], ['path', {
    d: 'M14 9.3V1.99'
  }], ['path', {
    d: 'M8.5 2h7'
  }], ['path', {
    d: 'M14 9.3a6.5 6.5 0 1 1-4 0'
  }], ['path', {
    d: 'M5.58 16.5h12.85'
  }]]];
  var FlaskRound$1 = FlaskRound;

  var FlipHorizontal2 = ['svg', defaultAttributes, [['path', {
    d: 'm3 7 5 5-5 5V7'
  }], ['path', {
    d: 'm21 7-5 5 5 5V7'
  }], ['path', {
    d: 'M12 20v2'
  }], ['path', {
    d: 'M12 14v2'
  }], ['path', {
    d: 'M12 8v2'
  }], ['path', {
    d: 'M12 2v2'
  }]]];
  var FlipHorizontal2$1 = FlipHorizontal2;

  var FlipHorizontal = ['svg', defaultAttributes, [['path', {
    d: 'M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3'
  }], ['path', {
    d: 'M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3'
  }], ['path', {
    d: 'M12 20v2'
  }], ['path', {
    d: 'M12 14v2'
  }], ['path', {
    d: 'M12 8v2'
  }], ['path', {
    d: 'M12 2v2'
  }]]];
  var FlipHorizontal$1 = FlipHorizontal;

  var FlipVertical2 = ['svg', defaultAttributes, [['path', {
    d: 'm17 3-5 5-5-5h10'
  }], ['path', {
    d: 'm17 21-5-5-5 5h10'
  }], ['path', {
    d: 'M4 12H2'
  }], ['path', {
    d: 'M10 12H8'
  }], ['path', {
    d: 'M16 12h-2'
  }], ['path', {
    d: 'M22 12h-2'
  }]]];
  var FlipVertical2$1 = FlipVertical2;

  var FlipVertical = ['svg', defaultAttributes, [['path', {
    d: 'M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3'
  }], ['path', {
    d: 'M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3'
  }], ['path', {
    d: 'M4 12H2'
  }], ['path', {
    d: 'M10 12H8'
  }], ['path', {
    d: 'M16 12h-2'
  }], ['path', {
    d: 'M22 12h-2'
  }]]];
  var FlipVertical$1 = FlipVertical;

  var Flower2 = ['svg', defaultAttributes, [['path', {
    d: 'M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1'
  }], ['circle', {
    cx: '12',
    cy: '8',
    r: '2'
  }], ['path', {
    d: 'M12 10v12'
  }], ['path', {
    d: 'M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z'
  }], ['path', {
    d: 'M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z'
  }]]];
  var Flower2$1 = Flower2;

  var Flower = ['svg', defaultAttributes, [['path', {
    d: 'M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '3'
  }], ['path', {
    d: 'm8 16 1.5-1.5'
  }], ['path', {
    d: 'M14.5 9.5 16 8'
  }], ['path', {
    d: 'm8 8 1.5 1.5'
  }], ['path', {
    d: 'M14.5 14.5 16 16'
  }]]];
  var Flower$1 = Flower;

  var Focus = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '3'
  }], ['path', {
    d: 'M3 7V5a2 2 0 0 1 2-2h2'
  }], ['path', {
    d: 'M17 3h2a2 2 0 0 1 2 2v2'
  }], ['path', {
    d: 'M21 17v2a2 2 0 0 1-2 2h-2'
  }], ['path', {
    d: 'M7 21H5a2 2 0 0 1-2-2v-2'
  }]]];
  var Focus$1 = Focus;

  var FolderArchive = ['svg', defaultAttributes, [['path', {
    d: 'M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6'
  }], ['circle', {
    cx: '16',
    cy: '19',
    r: '2'
  }], ['path', {
    d: 'M16 11v-1'
  }], ['path', {
    d: 'M16 17v-2'
  }]]];
  var FolderArchive$1 = FolderArchive;

  var FolderCheck = ['svg', defaultAttributes, [['path', {
    d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
  }], ['path', {
    d: 'm9 13 2 2 4-4'
  }]]];
  var FolderCheck$1 = FolderCheck;

  var FolderClock = ['svg', defaultAttributes, [['path', {
    d: 'M7 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2'
  }], ['circle', {
    cx: '16',
    cy: '16',
    r: '6'
  }], ['path', {
    d: 'M16 14v2l1 1'
  }]]];
  var FolderClock$1 = FolderClock;

  var FolderClosed = ['svg', defaultAttributes, [['path', {
    d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
  }], ['path', {
    d: 'M2 10h20'
  }]]];
  var FolderClosed$1 = FolderClosed;

  var FolderCog2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
  }], ['circle', {
    cx: '12',
    cy: '13',
    r: '2'
  }], ['path', {
    d: 'M12 10v1'
  }], ['path', {
    d: 'M12 15v1'
  }], ['path', {
    d: 'm14.6 11.5-.87.5'
  }], ['path', {
    d: 'm10.27 14-.87.5'
  }], ['path', {
    d: 'm14.6 14.5-.87-.5'
  }], ['path', {
    d: 'm10.27 12-.87-.5'
  }]]];
  var FolderCog2$1 = FolderCog2;

  var FolderCog = ['svg', defaultAttributes, [['path', {
    d: 'M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3'
  }], ['circle', {
    cx: '18',
    cy: '18',
    r: '3'
  }], ['path', {
    d: 'M18 14v1'
  }], ['path', {
    d: 'M18 21v1'
  }], ['path', {
    d: 'M22 18h-1'
  }], ['path', {
    d: 'M15 18h-1'
  }], ['path', {
    d: 'm21 15-.88.88'
  }], ['path', {
    d: 'M15.88 20.12 15 21'
  }], ['path', {
    d: 'm21 21-.88-.88'
  }], ['path', {
    d: 'M15.88 15.88 15 15'
  }]]];
  var FolderCog$1 = FolderCog;

  var FolderDown = ['svg', defaultAttributes, [['path', {
    d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
  }], ['path', {
    d: 'M12 10v6'
  }], ['path', {
    d: 'm15 13-3 3-3-3'
  }]]];
  var FolderDown$1 = FolderDown;

  var FolderEdit = ['svg', defaultAttributes, [['path', {
    d: 'M8.42 10.61a2.1 2.1 0 1 1 2.97 2.97L5.95 19 2 20l.99-3.95 5.43-5.44Z'
  }], ['path', {
    d: 'M2 11.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5'
  }]]];
  var FolderEdit$1 = FolderEdit;

  var FolderHeart = ['svg', defaultAttributes, [['path', {
    d: 'M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v1.5'
  }], ['path', {
    d: 'M21.29 13.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 21l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z'
  }]]];
  var FolderHeart$1 = FolderHeart;

  var FolderInput = ['svg', defaultAttributes, [['path', {
    d: 'M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1'
  }], ['path', {
    d: 'M2 13h10'
  }], ['path', {
    d: 'm9 16 3-3-3-3'
  }]]];
  var FolderInput$1 = FolderInput;

  var FolderKey = ['svg', defaultAttributes, [['path', {
    d: 'M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2'
  }], ['circle', {
    cx: '16',
    cy: '20',
    r: '2'
  }], ['path', {
    d: 'm22 14-4.5 4.5'
  }], ['path', {
    d: 'm21 15 1 1'
  }]]];
  var FolderKey$1 = FolderKey;

  var FolderLock = ['svg', defaultAttributes, [['path', {
    d: 'M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2.5'
  }], ['rect', {
    x: '14',
    y: '17',
    width: '8',
    height: '5',
    rx: '1'
  }], ['path', {
    d: 'M20 17v-2a2 2 0 1 0-4 0v2'
  }]]];
  var FolderLock$1 = FolderLock;

  var FolderMinus = ['svg', defaultAttributes, [['path', {
    d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
  }], ['line', {
    x1: '9',
    y1: '13',
    x2: '15',
    y2: '13'
  }]]];
  var FolderMinus$1 = FolderMinus;

  var FolderOpen = ['svg', defaultAttributes, [['path', {
    d: 'm6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2'
  }]]];
  var FolderOpen$1 = FolderOpen;

  var FolderOutput = ['svg', defaultAttributes, [['path', {
    d: 'M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2'
  }], ['path', {
    d: 'M2 13h10'
  }], ['path', {
    d: 'm5 10-3 3 3 3'
  }]]];
  var FolderOutput$1 = FolderOutput;

  var FolderPlus = ['svg', defaultAttributes, [['path', {
    d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
  }], ['line', {
    x1: '12',
    y1: '10',
    x2: '12',
    y2: '16'
  }], ['line', {
    x1: '9',
    y1: '13',
    x2: '15',
    y2: '13'
  }]]];
  var FolderPlus$1 = FolderPlus;

  var FolderSearch2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
  }], ['circle', {
    cx: '11.5',
    cy: '12.5',
    r: '2.5'
  }], ['path', {
    d: 'M13.27 14.27 15 16'
  }]]];
  var FolderSearch2$1 = FolderSearch2;

  var FolderSearch = ['svg', defaultAttributes, [['path', {
    d: 'M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v4'
  }], ['circle', {
    cx: '17',
    cy: '17',
    r: '3'
  }], ['path', {
    d: 'm21 21-1.5-1.5'
  }]]];
  var FolderSearch$1 = FolderSearch;

  var FolderSymlink = ['svg', defaultAttributes, [['path', {
    d: 'M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2'
  }], ['path', {
    d: 'm8 16 3-3-3-3'
  }], ['path', {
    d: 'M2 16v-1a2 2 0 0 1 2-2h6'
  }]]];
  var FolderSymlink$1 = FolderSymlink;

  var FolderTree = ['svg', defaultAttributes, [['path', {
    d: 'M13 10h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z'
  }], ['path', {
    d: 'M13 21h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.88a1 1 0 0 1-.9-.55l-.44-.9a1 1 0 0 0-.9-.55H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z'
  }], ['path', {
    d: 'M3 3v2c0 1.1.9 2 2 2h3'
  }], ['path', {
    d: 'M3 3v13c0 1.1.9 2 2 2h3'
  }]]];
  var FolderTree$1 = FolderTree;

  var FolderUp = ['svg', defaultAttributes, [['path', {
    d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
  }], ['path', {
    d: 'M12 10v6'
  }], ['path', {
    d: 'm9 13 3-3 3 3'
  }]]];
  var FolderUp$1 = FolderUp;

  var FolderX = ['svg', defaultAttributes, [['path', {
    d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
  }], ['path', {
    d: 'm9.5 10.5 5 5'
  }], ['path', {
    d: 'm14.5 10.5-5 5'
  }]]];
  var FolderX$1 = FolderX;

  var Folder = ['svg', defaultAttributes, [['path', {
    d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
  }]]];
  var Folder$1 = Folder;

  var Folders = ['svg', defaultAttributes, [['path', {
    d: 'M8 17h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.93a2 2 0 0 1-1.66-.9l-.82-1.2a2 2 0 0 0-1.66-.9H8a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2Z'
  }], ['path', {
    d: 'M2 8v11c0 1.1.9 2 2 2h14'
  }]]];
  var Folders$1 = Folders;

  var FormInput = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '6',
    width: '20',
    height: '12',
    rx: '2'
  }], ['path', {
    d: 'M12 12h.01'
  }], ['path', {
    d: 'M17 12h.01'
  }], ['path', {
    d: 'M7 12h.01'
  }]]];
  var FormInput$1 = FormInput;

  var Forward = ['svg', defaultAttributes, [['polyline', {
    points: '15 17 20 12 15 7'
  }], ['path', {
    d: 'M4 18v-2a4 4 0 0 1 4-4h12'
  }]]];
  var Forward$1 = Forward;

  var Frame = ['svg', defaultAttributes, [['line', {
    x1: '22',
    y1: '6',
    x2: '2',
    y2: '6'
  }], ['line', {
    x1: '22',
    y1: '18',
    x2: '2',
    y2: '18'
  }], ['line', {
    x1: '6',
    y1: '2',
    x2: '6',
    y2: '22'
  }], ['line', {
    x1: '18',
    y1: '2',
    x2: '18',
    y2: '22'
  }]]];
  var Frame$1 = Frame;

  var Framer = ['svg', defaultAttributes, [['path', {
    d: 'M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7'
  }]]];
  var Framer$1 = Framer;

  var Frown = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M16 16s-1.5-2-4-2-4 2-4 2'
  }], ['line', {
    x1: '9',
    y1: '9',
    x2: '9.01',
    y2: '9'
  }], ['line', {
    x1: '15',
    y1: '9',
    x2: '15.01',
    y2: '9'
  }]]];
  var Frown$1 = Frown;

  var Fuel = ['svg', defaultAttributes, [['line', {
    x1: '3',
    y1: '22',
    x2: '15',
    y2: '22'
  }], ['line', {
    x1: '4',
    y1: '9',
    x2: '14',
    y2: '9'
  }], ['path', {
    d: 'M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18'
  }], ['path', {
    d: 'M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5'
  }]]];
  var Fuel$1 = Fuel;

  var FunctionSquare = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3'
  }], ['path', {
    d: 'M9 11.2h5.7'
  }]]];
  var FunctionSquare$1 = FunctionSquare;

  var Gamepad2 = ['svg', defaultAttributes, [['line', {
    x1: '6',
    y1: '11',
    x2: '10',
    y2: '11'
  }], ['line', {
    x1: '8',
    y1: '9',
    x2: '8',
    y2: '13'
  }], ['line', {
    x1: '15',
    y1: '12',
    x2: '15.01',
    y2: '12'
  }], ['line', {
    x1: '18',
    y1: '10',
    x2: '18.01',
    y2: '10'
  }], ['path', {
    d: 'M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z'
  }]]];
  var Gamepad2$1 = Gamepad2;

  var Gamepad = ['svg', defaultAttributes, [['line', {
    x1: '6',
    y1: '12',
    x2: '10',
    y2: '12'
  }], ['line', {
    x1: '8',
    y1: '10',
    x2: '8',
    y2: '14'
  }], ['line', {
    x1: '15',
    y1: '13',
    x2: '15.01',
    y2: '13'
  }], ['line', {
    x1: '18',
    y1: '11',
    x2: '18.01',
    y2: '11'
  }], ['rect', {
    x: '2',
    y: '6',
    width: '20',
    height: '12',
    rx: '2'
  }]]];
  var Gamepad$1 = Gamepad;

  var Gauge = ['svg', defaultAttributes, [['path', {
    d: 'm12 15 3.5-3.5'
  }], ['path', {
    d: 'M20.3 18c.4-1 .7-2.2.7-3.4C21 9.8 17 6 12 6s-9 3.8-9 8.6c0 1.2.3 2.4.7 3.4'
  }]]];
  var Gauge$1 = Gauge;

  var Gavel = ['svg', defaultAttributes, [['path', {
    d: 'm14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10'
  }], ['path', {
    d: 'm16 16 6-6'
  }], ['path', {
    d: 'm8 8 6-6'
  }], ['path', {
    d: 'm9 7 8 8'
  }], ['path', {
    d: 'm21 11-8-8'
  }]]];
  var Gavel$1 = Gavel;

  var Gem = ['svg', defaultAttributes, [['polygon', {
    points: '6 3 18 3 22 9 12 22 2 9'
  }], ['path', {
    d: 'm12 22 4-13-3-6'
  }], ['path', {
    d: 'M12 22 8 9l3-6'
  }], ['path', {
    d: 'M2 9h20'
  }]]];
  var Gem$1 = Gem;

  var Ghost = ['svg', defaultAttributes, [['path', {
    d: 'M9 10h.01'
  }], ['path', {
    d: 'M15 10h.01'
  }], ['path', {
    d: 'M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z'
  }]]];
  var Ghost$1 = Ghost;

  var Gift = ['svg', defaultAttributes, [['polyline', {
    points: '20 12 20 22 4 22 4 12'
  }], ['rect', {
    x: '2',
    y: '7',
    width: '20',
    height: '5'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '7'
  }], ['path', {
    d: 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z'
  }], ['path', {
    d: 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z'
  }]]];
  var Gift$1 = Gift;

  var GitBranchPlus = ['svg', defaultAttributes, [['path', {
    d: 'M6 3v12'
  }], ['path', {
    d: 'M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
  }], ['path', {
    d: 'M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
  }], ['path', {
    d: 'M15 6a9 9 0 0 0-9 9'
  }], ['path', {
    d: 'M18 15v6'
  }], ['path', {
    d: 'M21 18h-6'
  }]]];
  var GitBranchPlus$1 = GitBranchPlus;

  var GitBranch = ['svg', defaultAttributes, [['line', {
    x1: '6',
    y1: '3',
    x2: '6',
    y2: '15'
  }], ['circle', {
    cx: '18',
    cy: '6',
    r: '3'
  }], ['circle', {
    cx: '6',
    cy: '18',
    r: '3'
  }], ['path', {
    d: 'M18 9a9 9 0 0 1-9 9'
  }]]];
  var GitBranch$1 = GitBranch;

  var GitCommit = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '3'
  }], ['line', {
    x1: '3',
    y1: '12',
    x2: '9',
    y2: '12'
  }], ['line', {
    x1: '15',
    y1: '12',
    x2: '21',
    y2: '12'
  }]]];
  var GitCommit$1 = GitCommit;

  var GitCompare = ['svg', defaultAttributes, [['circle', {
    cx: '18',
    cy: '18',
    r: '3'
  }], ['circle', {
    cx: '6',
    cy: '6',
    r: '3'
  }], ['path', {
    d: 'M13 6h3a2 2 0 0 1 2 2v7'
  }], ['path', {
    d: 'M11 18H8a2 2 0 0 1-2-2V9'
  }]]];
  var GitCompare$1 = GitCompare;

  var GitFork = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '18',
    r: '3'
  }], ['circle', {
    cx: '6',
    cy: '6',
    r: '3'
  }], ['circle', {
    cx: '18',
    cy: '6',
    r: '3'
  }], ['path', {
    d: 'M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9'
  }], ['path', {
    d: 'M12 12v3'
  }]]];
  var GitFork$1 = GitFork;

  var GitMerge = ['svg', defaultAttributes, [['circle', {
    cx: '18',
    cy: '18',
    r: '3'
  }], ['circle', {
    cx: '6',
    cy: '6',
    r: '3'
  }], ['path', {
    d: 'M6 21V9a9 9 0 0 0 9 9'
  }]]];
  var GitMerge$1 = GitMerge;

  var GitPullRequestClosed = ['svg', defaultAttributes, [['circle', {
    cx: '18',
    cy: '18',
    r: '3'
  }], ['circle', {
    cx: '6',
    cy: '6',
    r: '3'
  }], ['path', {
    d: 'M18 11.5V15'
  }], ['path', {
    d: 'm21 3-6 6'
  }], ['path', {
    d: 'm21 9-6-6'
  }], ['line', {
    x1: '6',
    y1: '9',
    x2: '6',
    y2: '21'
  }]]];
  var GitPullRequestClosed$1 = GitPullRequestClosed;

  var GitPullRequestDraft = ['svg', defaultAttributes, [['circle', {
    cx: '18',
    cy: '18',
    r: '3'
  }], ['circle', {
    cx: '6',
    cy: '6',
    r: '3'
  }], ['path', {
    d: 'M18 6V5'
  }], ['path', {
    d: 'M18 11v-1'
  }], ['line', {
    x1: '6',
    y1: '9',
    x2: '6',
    y2: '21'
  }]]];
  var GitPullRequestDraft$1 = GitPullRequestDraft;

  var GitPullRequest = ['svg', defaultAttributes, [['circle', {
    cx: '18',
    cy: '18',
    r: '3'
  }], ['circle', {
    cx: '6',
    cy: '6',
    r: '3'
  }], ['path', {
    d: 'M13 6h3a2 2 0 0 1 2 2v7'
  }], ['line', {
    x1: '6',
    y1: '9',
    x2: '6',
    y2: '21'
  }]]];
  var GitPullRequest$1 = GitPullRequest;

  var Github = ['svg', defaultAttributes, [['path', {
    d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'
  }], ['path', {
    d: 'M9 18c-4.51 2-5-2-7-2'
  }]]];
  var Github$1 = Github;

  var Gitlab = ['svg', defaultAttributes, [['path', {
    d: 'm22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z'
  }]]];
  var Gitlab$1 = Gitlab;

  var GlassWater = ['svg', defaultAttributes, [['path', {
    d: 'M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z'
  }], ['path', {
    d: 'M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0'
  }]]];
  var GlassWater$1 = GlassWater;

  var Glasses = ['svg', defaultAttributes, [['circle', {
    cx: '6',
    cy: '15',
    r: '4'
  }], ['circle', {
    cx: '18',
    cy: '15',
    r: '4'
  }], ['path', {
    d: 'M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2'
  }], ['path', {
    d: 'M2.5 13 5 7c.7-1.3 1.4-2 3-2'
  }], ['path', {
    d: 'M21.5 13 19 7c-.7-1.3-1.5-2-3-2'
  }]]];
  var Glasses$1 = Glasses;

  var Globe2 = ['svg', defaultAttributes, [['path', {
    d: 'M15 21v-4a2 2 0 0 1 2-2h4'
  }], ['path', {
    d: 'M7 4v2a3 3 0 0 0 3 2h0a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h3'
  }], ['path', {
    d: 'M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v4'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }]]];
  var Globe2$1 = Globe2;

  var Globe = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['line', {
    x1: '2',
    y1: '12',
    x2: '22',
    y2: '12'
  }], ['path', {
    d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'
  }]]];
  var Globe$1 = Globe;

  var Grab = ['svg', defaultAttributes, [['path', {
    d: 'M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4'
  }], ['path', {
    d: 'M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2'
  }], ['path', {
    d: 'M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5'
  }], ['path', {
    d: 'M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0'
  }], ['path', {
    d: 'M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0'
  }]]];
  var Grab$1 = Grab;

  var GraduationCap = ['svg', defaultAttributes, [['path', {
    d: 'M22 10v6M2 10l10-5 10 5-10 5z'
  }], ['path', {
    d: 'M6 12v5c3 3 9 3 12 0v-5'
  }]]];
  var GraduationCap$1 = GraduationCap;

  var Grape = ['svg', defaultAttributes, [['path', {
    d: 'M22 5V2l-5.89 5.89'
  }], ['circle', {
    cx: '16.6',
    cy: '15.89',
    r: '3'
  }], ['circle', {
    cx: '8.11',
    cy: '7.4',
    r: '3'
  }], ['circle', {
    cx: '12.35',
    cy: '11.65',
    r: '3'
  }], ['circle', {
    cx: '13.91',
    cy: '5.85',
    r: '3'
  }], ['circle', {
    cx: '18.15',
    cy: '10.09',
    r: '3'
  }], ['circle', {
    cx: '6.56',
    cy: '13.2',
    r: '3'
  }], ['circle', {
    cx: '10.8',
    cy: '17.44',
    r: '3'
  }], ['circle', {
    cx: '5',
    cy: '19',
    r: '3'
  }]]];
  var Grape$1 = Grape;

  var Grid = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '3',
    y1: '9',
    x2: '21',
    y2: '9'
  }], ['line', {
    x1: '3',
    y1: '15',
    x2: '21',
    y2: '15'
  }], ['line', {
    x1: '9',
    y1: '3',
    x2: '9',
    y2: '21'
  }], ['line', {
    x1: '15',
    y1: '3',
    x2: '15',
    y2: '21'
  }]]];
  var Grid$1 = Grid;

  var GripHorizontal = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '9',
    r: '1'
  }], ['circle', {
    cx: '19',
    cy: '9',
    r: '1'
  }], ['circle', {
    cx: '5',
    cy: '9',
    r: '1'
  }], ['circle', {
    cx: '12',
    cy: '15',
    r: '1'
  }], ['circle', {
    cx: '19',
    cy: '15',
    r: '1'
  }], ['circle', {
    cx: '5',
    cy: '15',
    r: '1'
  }]]];
  var GripHorizontal$1 = GripHorizontal;

  var GripVertical = ['svg', defaultAttributes, [['circle', {
    cx: '9',
    cy: '12',
    r: '1'
  }], ['circle', {
    cx: '9',
    cy: '5',
    r: '1'
  }], ['circle', {
    cx: '9',
    cy: '19',
    r: '1'
  }], ['circle', {
    cx: '15',
    cy: '12',
    r: '1'
  }], ['circle', {
    cx: '15',
    cy: '5',
    r: '1'
  }], ['circle', {
    cx: '15',
    cy: '19',
    r: '1'
  }]]];
  var GripVertical$1 = GripVertical;

  var Hammer = ['svg', defaultAttributes, [['path', {
    d: 'm15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9'
  }], ['path', {
    d: 'M17.64 15 22 10.64'
  }], ['path', {
    d: 'm20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91'
  }]]];
  var Hammer$1 = Hammer;

  var HandMetal = ['svg', defaultAttributes, [['path', {
    d: 'M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4'
  }], ['path', {
    d: 'M14 11V9a2 2 0 1 0-4 0v2'
  }], ['path', {
    d: 'M10 10.5V5a2 2 0 1 0-4 0v9'
  }], ['path', {
    d: 'm7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5'
  }]]];
  var HandMetal$1 = HandMetal;

  var Hand = ['svg', defaultAttributes, [['path', {
    d: 'M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0'
  }], ['path', {
    d: 'M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2'
  }], ['path', {
    d: 'M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8'
  }], ['path', {
    d: 'M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15'
  }]]];
  var Hand$1 = Hand;

  var HardDrive = ['svg', defaultAttributes, [['line', {
    x1: '22',
    y1: '12',
    x2: '2',
    y2: '12'
  }], ['path', {
    d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z'
  }], ['line', {
    x1: '6',
    y1: '16',
    x2: '6.01',
    y2: '16'
  }], ['line', {
    x1: '10',
    y1: '16',
    x2: '10.01',
    y2: '16'
  }]]];
  var HardDrive$1 = HardDrive;

  var HardHat = ['svg', defaultAttributes, [['path', {
    d: 'M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z'
  }], ['path', {
    d: 'M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5'
  }], ['path', {
    d: 'M4 15v-3a6 6 0 0 1 6-6h0'
  }], ['path', {
    d: 'M14 6h0a6 6 0 0 1 6 6v3'
  }]]];
  var HardHat$1 = HardHat;

  var Hash = ['svg', defaultAttributes, [['line', {
    x1: '4',
    y1: '9',
    x2: '20',
    y2: '9'
  }], ['line', {
    x1: '4',
    y1: '15',
    x2: '20',
    y2: '15'
  }], ['line', {
    x1: '10',
    y1: '3',
    x2: '8',
    y2: '21'
  }], ['line', {
    x1: '16',
    y1: '3',
    x2: '14',
    y2: '21'
  }]]];
  var Hash$1 = Hash;

  var Haze = ['svg', defaultAttributes, [['path', {
    d: 'm5.2 6.2 1.4 1.4'
  }], ['path', {
    d: 'M2 13h2'
  }], ['path', {
    d: 'M20 13h2'
  }], ['path', {
    d: 'm17.4 7.6 1.4-1.4'
  }], ['path', {
    d: 'M22 17H2'
  }], ['path', {
    d: 'M22 21H2'
  }], ['path', {
    d: 'M16 13a4 4 0 0 0-8 0'
  }], ['path', {
    d: 'M12 5V2.5'
  }]]];
  var Haze$1 = Haze;

  var Heading1 = ['svg', defaultAttributes, [['path', {
    d: 'M4 12h8'
  }], ['path', {
    d: 'M4 18V6'
  }], ['path', {
    d: 'M12 18V6'
  }], ['path', {
    d: 'm17 12 3-2v8'
  }]]];
  var Heading1$1 = Heading1;

  var Heading2 = ['svg', defaultAttributes, [['path', {
    d: 'M4 12h8'
  }], ['path', {
    d: 'M4 18V6'
  }], ['path', {
    d: 'M12 18V6'
  }], ['path', {
    d: 'M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1'
  }]]];
  var Heading2$1 = Heading2;

  var Heading3 = ['svg', defaultAttributes, [['path', {
    d: 'M4 12h8'
  }], ['path', {
    d: 'M4 18V6'
  }], ['path', {
    d: 'M12 18V6'
  }], ['path', {
    d: 'M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2'
  }], ['path', {
    d: 'M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2'
  }]]];
  var Heading3$1 = Heading3;

  var Heading4 = ['svg', defaultAttributes, [['path', {
    d: 'M4 12h8'
  }], ['path', {
    d: 'M4 18V6'
  }], ['path', {
    d: 'M12 18V6'
  }], ['path', {
    d: 'M17 10v4h4'
  }], ['path', {
    d: 'M21 10v8'
  }]]];
  var Heading4$1 = Heading4;

  var Heading5 = ['svg', defaultAttributes, [['path', {
    d: 'M4 12h8'
  }], ['path', {
    d: 'M4 18V6'
  }], ['path', {
    d: 'M12 18V6'
  }], ['path', {
    d: 'M17 13v-3h4'
  }], ['path', {
    d: 'M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17'
  }]]];
  var Heading5$1 = Heading5;

  var Heading6 = ['svg', defaultAttributes, [['path', {
    d: 'M4 12h8'
  }], ['path', {
    d: 'M4 18V6'
  }], ['path', {
    d: 'M12 18V6'
  }], ['circle', {
    cx: '19',
    cy: '16',
    r: '2'
  }], ['path', {
    d: 'M20 10c-2 2-3 3.5-3 6'
  }]]];
  var Heading6$1 = Heading6;

  var Heading = ['svg', defaultAttributes, [['path', {
    d: 'M6 12h12'
  }], ['path', {
    d: 'M6 20V4'
  }], ['path', {
    d: 'M18 20V4'
  }]]];
  var Heading$1 = Heading;

  var Headphones = ['svg', defaultAttributes, [['path', {
    d: 'M3 18v-6a9 9 0 0 1 18 0v6'
  }], ['path', {
    d: 'M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z'
  }]]];
  var Headphones$1 = Headphones;

  var HeartCrack = ['svg', defaultAttributes, [['path', {
    d: 'M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'
  }], ['path', {
    d: 'm12 13-1-1 2-2-3-2.5 2.77-2.92'
  }]]];
  var HeartCrack$1 = HeartCrack;

  var HeartHandshake = ['svg', defaultAttributes, [['path', {
    d: 'M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'
  }], ['path', {
    d: 'M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a3 3 0 0 1 4.22 0l2.4 2.4'
  }], ['path', {
    d: 'm18 15-2-2'
  }], ['path', {
    d: 'm15 18-2-2'
  }]]];
  var HeartHandshake$1 = HeartHandshake;

  var HeartOff = ['svg', defaultAttributes, [['path', {
    d: 'M4.12 4.107a5.4 5.4 0 0 0-.538.473C1.46 6.7 1.33 10.28 4 13l8 8 4.5-4.5'
  }], ['path', {
    d: 'M19.328 13.672 20 13c2.67-2.72 2.54-6.3.42-8.42a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-2.386-1.393'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var HeartOff$1 = HeartOff;

  var HeartPulse = ['svg', defaultAttributes, [['path', {
    d: 'M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'
  }], ['path', {
    d: 'M3.5 12h6l.5-1 2 4.5 2-7 1.5 3.5h5'
  }]]];
  var HeartPulse$1 = HeartPulse;

  var Heart = ['svg', defaultAttributes, [['path', {
    d: 'M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'
  }]]];
  var Heart$1 = Heart;

  var HelpCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'
  }], ['line', {
    x1: '12',
    y1: '17',
    x2: '12.01',
    y2: '17'
  }]]];
  var HelpCircle$1 = HelpCircle;

  var Hexagon = ['svg', defaultAttributes, [['path', {
    d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'
  }]]];
  var Hexagon$1 = Hexagon;

  var Highlighter = ['svg', defaultAttributes, [['path', {
    d: 'm9 11-6 6v3h9l3-3'
  }], ['path', {
    d: 'm22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4'
  }]]];
  var Highlighter$1 = Highlighter;

  var History = ['svg', defaultAttributes, [['path', {
    d: 'M3 3v5h5'
  }], ['path', {
    d: 'M3.05 13A9 9 0 1 0 6 5.3L3 8'
  }], ['path', {
    d: 'M12 7v5l4 2'
  }]]];
  var History$1 = History;

  var Home = ['svg', defaultAttributes, [['path', {
    d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
  }], ['polyline', {
    points: '9 22 9 12 15 12 15 22'
  }]]];
  var Home$1 = Home;

  var HopOff = ['svg', defaultAttributes, [['path', {
    d: 'M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226'
  }], ['path', {
    d: 'M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5'
  }], ['path', {
    d: 'M17.5 17.5c-2.5 0-4 0-6-1'
  }], ['path', {
    d: 'M20 11.5c1 1.5 2 3.5 2 4.5'
  }], ['path', {
    d: 'M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5'
  }], ['path', {
    d: 'M22 22c-2 0-3.5-.5-5.5-1.5'
  }], ['path', {
    d: 'M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var HopOff$1 = HopOff;

  var Hop = ['svg', defaultAttributes, [['path', {
    d: 'M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1'
  }], ['path', {
    d: 'M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5'
  }], ['path', {
    d: 'M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1'
  }], ['path', {
    d: 'M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5'
  }], ['path', {
    d: 'M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5'
  }], ['path', {
    d: 'M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5'
  }], ['path', {
    d: 'M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z'
  }], ['path', {
    d: 'M4.5 4.5 3 3c-.184-.185-.184-.816 0-1'
  }]]];
  var Hop$1 = Hop;

  var Hourglass = ['svg', defaultAttributes, [['path', {
    d: 'M5 22h14'
  }], ['path', {
    d: 'M5 2h14'
  }], ['path', {
    d: 'M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22'
  }], ['path', {
    d: 'M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2'
  }]]];
  var Hourglass$1 = Hourglass;

  var IceCream = ['svg', defaultAttributes, [['path', {
    d: 'm7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11'
  }], ['path', {
    d: 'M17 7A5 5 0 0 0 7 7'
  }], ['path', {
    d: 'M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4'
  }]]];
  var IceCream$1 = IceCream;

  var ImageMinus = ['svg', defaultAttributes, [['path', {
    d: 'M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7'
  }], ['line', {
    x1: '16',
    y1: '5',
    x2: '22',
    y2: '5'
  }], ['circle', {
    cx: '9',
    cy: '9',
    r: '2'
  }], ['path', {
    d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'
  }]]];
  var ImageMinus$1 = ImageMinus;

  var ImageOff = ['svg', defaultAttributes, [['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }], ['path', {
    d: 'M10.41 10.41a2 2 0 1 1-2.83-2.83'
  }], ['line', {
    x1: '13.5',
    y1: '13.5',
    x2: '6',
    y2: '21'
  }], ['line', {
    x1: '18',
    y1: '12',
    x2: '21',
    y2: '15'
  }], ['path', {
    d: 'M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59'
  }], ['path', {
    d: 'M21 15V5a2 2 0 0 0-2-2H9'
  }]]];
  var ImageOff$1 = ImageOff;

  var ImagePlus = ['svg', defaultAttributes, [['path', {
    d: 'M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7'
  }], ['line', {
    x1: '16',
    y1: '5',
    x2: '22',
    y2: '5'
  }], ['line', {
    x1: '19',
    y1: '2',
    x2: '19',
    y2: '8'
  }], ['circle', {
    cx: '9',
    cy: '9',
    r: '2'
  }], ['path', {
    d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'
  }]]];
  var ImagePlus$1 = ImagePlus;

  var Image = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['circle', {
    cx: '9',
    cy: '9',
    r: '2'
  }], ['path', {
    d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'
  }]]];
  var Image$1 = Image;

  var Import = ['svg', defaultAttributes, [['path', {
    d: 'M12 3v12'
  }], ['path', {
    d: 'm8 11 4 4 4-4'
  }], ['path', {
    d: 'M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4'
  }]]];
  var Import$1 = Import;

  var Inbox = ['svg', defaultAttributes, [['polyline', {
    points: '22 12 16 12 14 15 10 15 8 12 2 12'
  }], ['path', {
    d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z'
  }]]];
  var Inbox$1 = Inbox;

  var Indent = ['svg', defaultAttributes, [['polyline', {
    points: '3 8 7 12 3 16'
  }], ['line', {
    x1: '21',
    y1: '12',
    x2: '11',
    y2: '12'
  }], ['line', {
    x1: '21',
    y1: '6',
    x2: '11',
    y2: '6'
  }], ['line', {
    x1: '21',
    y1: '18',
    x2: '11',
    y2: '18'
  }]]];
  var Indent$1 = Indent;

  var IndianRupee = ['svg', defaultAttributes, [['path', {
    d: 'M6 3h12'
  }], ['path', {
    d: 'M6 8h12'
  }], ['path', {
    d: 'm6 13 8.5 8'
  }], ['path', {
    d: 'M6 13h3'
  }], ['path', {
    d: 'M9 13c6.667 0 6.667-10 0-10'
  }]]];
  var IndianRupee$1 = IndianRupee;

  var Infinity = ['svg', defaultAttributes, [['path', {
    d: 'M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z'
  }]]];
  var Infinity$1 = Infinity;

  var Info = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['line', {
    x1: '12',
    y1: '16',
    x2: '12',
    y2: '12'
  }], ['line', {
    x1: '12',
    y1: '8',
    x2: '12.01',
    y2: '8'
  }]]];
  var Info$1 = Info;

  var Inspect = ['svg', defaultAttributes, [['path', {
    d: 'M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6'
  }], ['path', {
    d: 'm12 12 4 10 1.7-4.3L22 16Z'
  }]]];
  var Inspect$1 = Inspect;

  var Instagram = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '2',
    width: '20',
    height: '20',
    rx: '5',
    ry: '5'
  }], ['path', {
    d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'
  }], ['line', {
    x1: '17.5',
    y1: '6.5',
    x2: '17.51',
    y2: '6.5'
  }]]];
  var Instagram$1 = Instagram;

  var Italic = ['svg', defaultAttributes, [['line', {
    x1: '19',
    y1: '4',
    x2: '10',
    y2: '4'
  }], ['line', {
    x1: '14',
    y1: '20',
    x2: '5',
    y2: '20'
  }], ['line', {
    x1: '15',
    y1: '4',
    x2: '9',
    y2: '20'
  }]]];
  var Italic$1 = Italic;

  var JapaneseYen = ['svg', defaultAttributes, [['path', {
    d: 'M12 9.5V21m0-11.5L6 3m6 6.5L18 3'
  }], ['path', {
    d: 'M6 15h12'
  }], ['path', {
    d: 'M6 11h12'
  }]]];
  var JapaneseYen$1 = JapaneseYen;

  var Joystick = ['svg', defaultAttributes, [['path', {
    d: 'M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z'
  }], ['path', {
    d: 'M6 15v-2'
  }], ['path', {
    d: 'M12 15V9'
  }], ['circle', {
    cx: '12',
    cy: '6',
    r: '3'
  }]]];
  var Joystick$1 = Joystick;

  var Key = ['svg', defaultAttributes, [['path', {
    d: 'm21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4'
  }]]];
  var Key$1 = Key;

  var Keyboard = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '4',
    width: '20',
    height: '16',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M6 8h.001'
  }], ['path', {
    d: 'M10 8h.001'
  }], ['path', {
    d: 'M14 8h.001'
  }], ['path', {
    d: 'M18 8h.001'
  }], ['path', {
    d: 'M8 12h.001'
  }], ['path', {
    d: 'M12 12h.001'
  }], ['path', {
    d: 'M16 12h.001'
  }], ['path', {
    d: 'M7 16h10'
  }]]];
  var Keyboard$1 = Keyboard;

  var LampCeiling = ['svg', defaultAttributes, [['path', {
    d: 'M12 2v5'
  }], ['path', {
    d: 'M6 7h12l4 9H2l4-9Z'
  }], ['path', {
    d: 'M9.17 16a3 3 0 1 0 5.66 0'
  }]]];
  var LampCeiling$1 = LampCeiling;

  var LampDesk = ['svg', defaultAttributes, [['path', {
    d: 'm14 5-3 3 2 7 8-8-7-2Z'
  }], ['path', {
    d: 'm14 5-3 3-3-3 3-3 3 3Z'
  }], ['path', {
    d: 'M9.5 6.5 4 12l3 6'
  }], ['path', {
    d: 'M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z'
  }]]];
  var LampDesk$1 = LampDesk;

  var LampFloor = ['svg', defaultAttributes, [['path', {
    d: 'M9 2h6l3 7H6l3-7Z'
  }], ['path', {
    d: 'M12 9v13'
  }], ['path', {
    d: 'M9 22h6'
  }]]];
  var LampFloor$1 = LampFloor;

  var LampWallDown = ['svg', defaultAttributes, [['path', {
    d: 'M11 13h6l3 7H8l3-7Z'
  }], ['path', {
    d: 'M14 13V8a2 2 0 0 0-2-2H8'
  }], ['path', {
    d: 'M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z'
  }]]];
  var LampWallDown$1 = LampWallDown;

  var LampWallUp = ['svg', defaultAttributes, [['path', {
    d: 'M11 4h6l3 7H8l3-7Z'
  }], ['path', {
    d: 'M14 11v5a2 2 0 0 1-2 2H8'
  }], ['path', {
    d: 'M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z'
  }]]];
  var LampWallUp$1 = LampWallUp;

  var Lamp = ['svg', defaultAttributes, [['path', {
    d: 'M8 2h8l4 10H4L8 2Z'
  }], ['path', {
    d: 'M12 12v6'
  }], ['path', {
    d: 'M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z'
  }]]];
  var Lamp$1 = Lamp;

  var Landmark = ['svg', defaultAttributes, [['line', {
    x1: '3',
    y1: '22',
    x2: '21',
    y2: '22'
  }], ['line', {
    x1: '6',
    y1: '18',
    x2: '6',
    y2: '11'
  }], ['line', {
    x1: '10',
    y1: '18',
    x2: '10',
    y2: '11'
  }], ['line', {
    x1: '14',
    y1: '18',
    x2: '14',
    y2: '11'
  }], ['line', {
    x1: '18',
    y1: '18',
    x2: '18',
    y2: '11'
  }], ['polygon', {
    points: '12 2 20 7 4 7'
  }]]];
  var Landmark$1 = Landmark;

  var Languages = ['svg', defaultAttributes, [['path', {
    d: 'm5 8 6 6'
  }], ['path', {
    d: 'm4 14 6-6 2-3'
  }], ['path', {
    d: 'M2 5h12'
  }], ['path', {
    d: 'M7 2h1'
  }], ['path', {
    d: 'm22 22-5-10-5 10'
  }], ['path', {
    d: 'M14 18h6'
  }]]];
  var Languages$1 = Languages;

  var Laptop2 = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '4',
    width: '18',
    height: '12',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '2',
    y1: '20',
    x2: '22',
    y2: '20'
  }]]];
  var Laptop2$1 = Laptop2;

  var Laptop = ['svg', defaultAttributes, [['path', {
    d: 'M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16'
  }]]];
  var Laptop$1 = Laptop;

  var LassoSelect = ['svg', defaultAttributes, [['path', {
    d: 'M7 22a5 5 0 0 1-2-4'
  }], ['path', {
    d: 'M7 16.93c.96.43 1.96.74 2.99.91'
  }], ['path', {
    d: 'M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2'
  }], ['path', {
    d: 'M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
  }], ['path', {
    d: 'M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z'
  }]]];
  var LassoSelect$1 = LassoSelect;

  var Lasso = ['svg', defaultAttributes, [['path', {
    d: 'M7 22a5 5 0 0 1-2-4'
  }], ['path', {
    d: 'M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1'
  }], ['path', {
    d: 'M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
  }]]];
  var Lasso$1 = Lasso;

  var Laugh = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z'
  }], ['line', {
    x1: '9',
    y1: '9',
    x2: '9.01',
    y2: '9'
  }], ['line', {
    x1: '15',
    y1: '9',
    x2: '15.01',
    y2: '9'
  }]]];
  var Laugh$1 = Laugh;

  var Layers = ['svg', defaultAttributes, [['polygon', {
    points: '12 2 2 7 12 12 22 7 12 2'
  }], ['polyline', {
    points: '2 17 12 22 22 17'
  }], ['polyline', {
    points: '2 12 12 17 22 12'
  }]]];
  var Layers$1 = Layers;

  var LayoutDashboard = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '7',
    height: '9'
  }], ['rect', {
    x: '14',
    y: '3',
    width: '7',
    height: '5'
  }], ['rect', {
    x: '14',
    y: '12',
    width: '7',
    height: '9'
  }], ['rect', {
    x: '3',
    y: '16',
    width: '7',
    height: '5'
  }]]];
  var LayoutDashboard$1 = LayoutDashboard;

  var LayoutGrid = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '7',
    height: '7'
  }], ['rect', {
    x: '14',
    y: '3',
    width: '7',
    height: '7'
  }], ['rect', {
    x: '14',
    y: '14',
    width: '7',
    height: '7'
  }], ['rect', {
    x: '3',
    y: '14',
    width: '7',
    height: '7'
  }]]];
  var LayoutGrid$1 = LayoutGrid;

  var LayoutList = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '14',
    width: '7',
    height: '7'
  }], ['rect', {
    x: '3',
    y: '3',
    width: '7',
    height: '7'
  }], ['line', {
    x1: '14',
    y1: '4',
    x2: '21',
    y2: '4'
  }], ['line', {
    x1: '14',
    y1: '9',
    x2: '21',
    y2: '9'
  }], ['line', {
    x1: '14',
    y1: '15',
    x2: '21',
    y2: '15'
  }], ['line', {
    x1: '14',
    y1: '20',
    x2: '21',
    y2: '20'
  }]]];
  var LayoutList$1 = LayoutList;

  var LayoutTemplate = ['svg', defaultAttributes, [['path', {
    d: 'M21 3H3v7h18V3z'
  }], ['path', {
    d: 'M21 14h-5v7h5v-7z'
  }], ['path', {
    d: 'M12 14H3v7h9v-7z'
  }]]];
  var LayoutTemplate$1 = LayoutTemplate;

  var Layout = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '3',
    y1: '9',
    x2: '21',
    y2: '9'
  }], ['line', {
    x1: '9',
    y1: '21',
    x2: '9',
    y2: '9'
  }]]];
  var Layout$1 = Layout;

  var Leaf = ['svg', defaultAttributes, [['path', {
    d: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z'
  }], ['path', {
    d: 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12'
  }]]];
  var Leaf$1 = Leaf;

  var Library = ['svg', defaultAttributes, [['path', {
    d: 'm16 6 4 14'
  }], ['path', {
    d: 'M12 6v14'
  }], ['path', {
    d: 'M8 8v12'
  }], ['path', {
    d: 'M4 4v16'
  }]]];
  var Library$1 = Library;

  var LifeBuoy = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '4'
  }], ['line', {
    x1: '4.93',
    y1: '4.93',
    x2: '9.17',
    y2: '9.17'
  }], ['line', {
    x1: '14.83',
    y1: '14.83',
    x2: '19.07',
    y2: '19.07'
  }], ['line', {
    x1: '14.83',
    y1: '9.17',
    x2: '19.07',
    y2: '4.93'
  }], ['line', {
    x1: '14.83',
    y1: '9.17',
    x2: '18.36',
    y2: '5.64'
  }], ['line', {
    x1: '4.93',
    y1: '19.07',
    x2: '9.17',
    y2: '14.83'
  }]]];
  var LifeBuoy$1 = LifeBuoy;

  var LightbulbOff = ['svg', defaultAttributes, [['path', {
    d: 'M9 18h6'
  }], ['path', {
    d: 'M10 22h4'
  }], ['path', {
    d: 'm2 2 20 20'
  }], ['path', {
    d: 'M9 2.804A6 6 0 0 1 18 8a4.65 4.65 0 0 1-1.03 3'
  }], ['path', {
    d: 'M8.91 14a4.61 4.61 0 0 0-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 0 1 .084-1'
  }]]];
  var LightbulbOff$1 = LightbulbOff;

  var Lightbulb = ['svg', defaultAttributes, [['line', {
    x1: '9',
    y1: '18',
    x2: '15',
    y2: '18'
  }], ['line', {
    x1: '10',
    y1: '22',
    x2: '14',
    y2: '22'
  }], ['path', {
    d: 'M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14'
  }]]];
  var Lightbulb$1 = Lightbulb;

  var LineChart = ['svg', defaultAttributes, [['path', {
    d: 'M3 3v18h18'
  }], ['path', {
    d: 'm19 9-5 5-4-4-3 3'
  }]]];
  var LineChart$1 = LineChart;

  var Link2Off = ['svg', defaultAttributes, [['path', {
    d: 'M9 17H7A5 5 0 0 1 7 7'
  }], ['path', {
    d: 'M15 7h2a5 5 0 0 1 4 8'
  }], ['line', {
    x1: '8',
    y1: '12',
    x2: '12',
    y2: '12'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var Link2Off$1 = Link2Off;

  var Link2 = ['svg', defaultAttributes, [['path', {
    d: 'M9 17H7A5 5 0 0 1 7 7h2'
  }], ['path', {
    d: 'M15 7h2a5 5 0 1 1 0 10h-2'
  }], ['line', {
    x1: '8',
    y1: '12',
    x2: '16',
    y2: '12'
  }]]];
  var Link2$1 = Link2;

  var Link = ['svg', defaultAttributes, [['path', {
    d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'
  }], ['path', {
    d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'
  }]]];
  var Link$1 = Link;

  var Linkedin = ['svg', defaultAttributes, [['path', {
    d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'
  }], ['rect', {
    x: '2',
    y: '9',
    width: '4',
    height: '12'
  }], ['circle', {
    cx: '4',
    cy: '4',
    r: '2'
  }]]];
  var Linkedin$1 = Linkedin;

  var ListChecks = ['svg', defaultAttributes, [['line', {
    x1: '10',
    y1: '6',
    x2: '21',
    y2: '6'
  }], ['line', {
    x1: '10',
    y1: '12',
    x2: '21',
    y2: '12'
  }], ['line', {
    x1: '10',
    y1: '18',
    x2: '21',
    y2: '18'
  }], ['polyline', {
    points: '3 6 4 7 6 5'
  }], ['polyline', {
    points: '3 12 4 13 6 11'
  }], ['polyline', {
    points: '3 18 4 19 6 17'
  }]]];
  var ListChecks$1 = ListChecks;

  var ListEnd = ['svg', defaultAttributes, [['path', {
    d: 'M16 12H3'
  }], ['path', {
    d: 'M16 6H3'
  }], ['path', {
    d: 'M10 18H3'
  }], ['path', {
    d: 'M21 6v10a2 2 0 0 1-2 2h-4'
  }], ['path', {
    d: 'm16 16-2 2 2 2'
  }]]];
  var ListEnd$1 = ListEnd;

  var ListMinus = ['svg', defaultAttributes, [['path', {
    d: 'M11 12H3'
  }], ['path', {
    d: 'M16 6H3'
  }], ['path', {
    d: 'M16 18H3'
  }], ['path', {
    d: 'M21 12h-6'
  }]]];
  var ListMinus$1 = ListMinus;

  var ListMusic = ['svg', defaultAttributes, [['path', {
    d: 'M21 15V6'
  }], ['path', {
    d: 'M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
  }], ['path', {
    d: 'M12 12H3'
  }], ['path', {
    d: 'M16 6H3'
  }], ['path', {
    d: 'M12 18H3'
  }]]];
  var ListMusic$1 = ListMusic;

  var ListOrdered = ['svg', defaultAttributes, [['line', {
    x1: '10',
    y1: '6',
    x2: '21',
    y2: '6'
  }], ['line', {
    x1: '10',
    y1: '12',
    x2: '21',
    y2: '12'
  }], ['line', {
    x1: '10',
    y1: '18',
    x2: '21',
    y2: '18'
  }], ['path', {
    d: 'M4 6h1v4'
  }], ['path', {
    d: 'M4 10h2'
  }], ['path', {
    d: 'M6 18H4c0-1 2-2 2-3s-1-1.5-2-1'
  }]]];
  var ListOrdered$1 = ListOrdered;

  var ListPlus = ['svg', defaultAttributes, [['path', {
    d: 'M11 12H3'
  }], ['path', {
    d: 'M16 6H3'
  }], ['path', {
    d: 'M16 18H3'
  }], ['path', {
    d: 'M18 9v6'
  }], ['path', {
    d: 'M21 12h-6'
  }]]];
  var ListPlus$1 = ListPlus;

  var ListStart = ['svg', defaultAttributes, [['path', {
    d: 'M16 12H3'
  }], ['path', {
    d: 'M16 18H3'
  }], ['path', {
    d: 'M10 6H3'
  }], ['path', {
    d: 'M21 18V8a2 2 0 0 0-2-2h-5'
  }], ['path', {
    d: 'm16 8-2-2 2-2'
  }]]];
  var ListStart$1 = ListStart;

  var ListVideo = ['svg', defaultAttributes, [['path', {
    d: 'M12 12H3'
  }], ['path', {
    d: 'M16 6H3'
  }], ['path', {
    d: 'M12 18H3'
  }], ['path', {
    d: 'm16 12 5 3-5 3v-6Z'
  }]]];
  var ListVideo$1 = ListVideo;

  var ListX = ['svg', defaultAttributes, [['path', {
    d: 'M11 12H3'
  }], ['path', {
    d: 'M16 6H3'
  }], ['path', {
    d: 'M16 18H3'
  }], ['path', {
    d: 'm19 10-4 4'
  }], ['path', {
    d: 'm15 10 4 4'
  }]]];
  var ListX$1 = ListX;

  var List = ['svg', defaultAttributes, [['line', {
    x1: '8',
    y1: '6',
    x2: '21',
    y2: '6'
  }], ['line', {
    x1: '8',
    y1: '12',
    x2: '21',
    y2: '12'
  }], ['line', {
    x1: '8',
    y1: '18',
    x2: '21',
    y2: '18'
  }], ['line', {
    x1: '3',
    y1: '6',
    x2: '3.01',
    y2: '6'
  }], ['line', {
    x1: '3',
    y1: '12',
    x2: '3.01',
    y2: '12'
  }], ['line', {
    x1: '3',
    y1: '18',
    x2: '3.01',
    y2: '18'
  }]]];
  var List$1 = List;

  var Loader2 = ['svg', defaultAttributes, [['path', {
    d: 'M21 12a9 9 0 1 1-6.219-8.56'
  }]]];
  var Loader2$1 = Loader2;

  var Loader = ['svg', defaultAttributes, [['line', {
    x1: '12',
    y1: '2',
    x2: '12',
    y2: '6'
  }], ['line', {
    x1: '12',
    y1: '18',
    x2: '12',
    y2: '22'
  }], ['line', {
    x1: '4.93',
    y1: '4.93',
    x2: '7.76',
    y2: '7.76'
  }], ['line', {
    x1: '16.24',
    y1: '16.24',
    x2: '19.07',
    y2: '19.07'
  }], ['line', {
    x1: '2',
    y1: '12',
    x2: '6',
    y2: '12'
  }], ['line', {
    x1: '18',
    y1: '12',
    x2: '22',
    y2: '12'
  }], ['line', {
    x1: '4.93',
    y1: '19.07',
    x2: '7.76',
    y2: '16.24'
  }], ['line', {
    x1: '16.24',
    y1: '7.76',
    x2: '19.07',
    y2: '4.93'
  }]]];
  var Loader$1 = Loader;

  var LocateFixed = ['svg', defaultAttributes, [['line', {
    x1: '2',
    x2: '5',
    y1: '12',
    y2: '12'
  }], ['line', {
    x1: '19',
    x2: '22',
    y1: '12',
    y2: '12'
  }], ['line', {
    x1: '12',
    x2: '12',
    y1: '2',
    y2: '5'
  }], ['line', {
    x1: '12',
    x2: '12',
    y1: '19',
    y2: '22'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '7'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '3'
  }]]];
  var LocateFixed$1 = LocateFixed;

  var LocateOff = ['svg', defaultAttributes, [['line', {
    x1: '2',
    x2: '5',
    y1: '12',
    y2: '12'
  }], ['line', {
    x1: '19',
    x2: '22',
    y1: '12',
    y2: '12'
  }], ['line', {
    x1: '12',
    x2: '12',
    y1: '2',
    y2: '5'
  }], ['line', {
    x1: '12',
    x2: '12',
    y1: '19',
    y2: '22'
  }], ['path', {
    d: 'M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11'
  }], ['path', {
    d: 'M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29'
  }], ['line', {
    x1: '2',
    x2: '22',
    y1: '2',
    y2: '22'
  }]]];
  var LocateOff$1 = LocateOff;

  var Locate = ['svg', defaultAttributes, [['line', {
    x1: '2',
    x2: '5',
    y1: '12',
    y2: '12'
  }], ['line', {
    x1: '19',
    x2: '22',
    y1: '12',
    y2: '12'
  }], ['line', {
    x1: '12',
    x2: '12',
    y1: '2',
    y2: '5'
  }], ['line', {
    x1: '12',
    x2: '12',
    y1: '19',
    y2: '22'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '7'
  }]]];
  var Locate$1 = Locate;

  var Lock = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '11',
    width: '18',
    height: '11',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M7 11V7a5 5 0 0 1 10 0v4'
  }]]];
  var Lock$1 = Lock;

  var LogIn = ['svg', defaultAttributes, [['path', {
    d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4'
  }], ['polyline', {
    points: '10 17 15 12 10 7'
  }], ['line', {
    x1: '15',
    y1: '12',
    x2: '3',
    y2: '12'
  }]]];
  var LogIn$1 = LogIn;

  var LogOut = ['svg', defaultAttributes, [['path', {
    d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'
  }], ['polyline', {
    points: '16 17 21 12 16 7'
  }], ['line', {
    x1: '21',
    y1: '12',
    x2: '9',
    y2: '12'
  }]]];
  var LogOut$1 = LogOut;

  var Luggage = ['svg', defaultAttributes, [['path', {
    d: 'M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0'
  }], ['path', {
    d: 'M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14'
  }], ['path', {
    d: 'M10 20h4'
  }], ['circle', {
    cx: '16',
    cy: '20',
    r: '2'
  }], ['circle', {
    cx: '8',
    cy: '20',
    r: '2'
  }]]];
  var Luggage$1 = Luggage;

  var Magnet = ['svg', defaultAttributes, [['path', {
    d: 'm6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15'
  }], ['path', {
    d: 'm5 8 4 4'
  }], ['path', {
    d: 'm12 15 4 4'
  }]]];
  var Magnet$1 = Magnet;

  var MailCheck = ['svg', defaultAttributes, [['path', {
    d: 'M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8'
  }], ['path', {
    d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'
  }], ['path', {
    d: 'm16 19 2 2 4-4'
  }]]];
  var MailCheck$1 = MailCheck;

  var MailMinus = ['svg', defaultAttributes, [['path', {
    d: 'M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8'
  }], ['path', {
    d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'
  }], ['path', {
    d: 'M16 19h6'
  }]]];
  var MailMinus$1 = MailMinus;

  var MailOpen = ['svg', defaultAttributes, [['path', {
    d: 'M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z'
  }], ['path', {
    d: 'm22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10'
  }]]];
  var MailOpen$1 = MailOpen;

  var MailPlus = ['svg', defaultAttributes, [['path', {
    d: 'M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8'
  }], ['path', {
    d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'
  }], ['path', {
    d: 'M19 16v6'
  }], ['path', {
    d: 'M16 19h6'
  }]]];
  var MailPlus$1 = MailPlus;

  var MailQuestion = ['svg', defaultAttributes, [['path', {
    d: 'M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5'
  }], ['path', {
    d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'
  }], ['path', {
    d: 'M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2'
  }], ['path', {
    d: 'M20 22v.01'
  }]]];
  var MailQuestion$1 = MailQuestion;

  var MailSearch = ['svg', defaultAttributes, [['path', {
    d: 'M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5'
  }], ['path', {
    d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'
  }], ['path', {
    d: 'M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z'
  }], ['circle', {
    cx: '18',
    cy: '18',
    r: '3'
  }], ['path', {
    d: 'm22 22-1.5-1.5'
  }]]];
  var MailSearch$1 = MailSearch;

  var MailWarning = ['svg', defaultAttributes, [['path', {
    d: 'M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5'
  }], ['path', {
    d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'
  }], ['path', {
    d: 'M20 14v4'
  }], ['path', {
    d: 'M20 22v.01'
  }]]];
  var MailWarning$1 = MailWarning;

  var MailX = ['svg', defaultAttributes, [['path', {
    d: 'M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9'
  }], ['path', {
    d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'
  }], ['path', {
    d: 'm17 17 4 4'
  }], ['path', {
    d: 'm21 17-4 4'
  }]]];
  var MailX$1 = MailX;

  var Mail = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '4',
    width: '20',
    height: '16',
    rx: '2'
  }], ['path', {
    d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'
  }]]];
  var Mail$1 = Mail;

  var Mails = ['svg', defaultAttributes, [['rect', {
    x: '6',
    y: '4',
    width: '16',
    height: '13',
    rx: '2'
  }], ['path', {
    d: 'm22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7'
  }], ['path', {
    d: 'M2 8v11c0 1.1.9 2 2 2h14'
  }]]];
  var Mails$1 = Mails;

  var MapPinOff = ['svg', defaultAttributes, [['path', {
    d: 'M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5'
  }], ['path', {
    d: 'M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82'
  }], ['path', {
    d: 'M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13'
  }], ['path', {
    d: 'M14.9 9.25a3 3 0 0 0-2.15-2.16'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var MapPinOff$1 = MapPinOff;

  var MapPin = ['svg', defaultAttributes, [['path', {
    d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'
  }], ['circle', {
    cx: '12',
    cy: '10',
    r: '3'
  }]]];
  var MapPin$1 = MapPin;

  var Map = ['svg', defaultAttributes, [['polygon', {
    points: '3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21'
  }], ['line', {
    x1: '9',
    y1: '3',
    x2: '9',
    y2: '18'
  }], ['line', {
    x1: '15',
    y1: '6',
    x2: '15',
    y2: '21'
  }]]];
  var Map$1 = Map;

  var Martini = ['svg', defaultAttributes, [['path', {
    d: 'M8 22h8'
  }], ['path', {
    d: 'M12 11v11'
  }], ['path', {
    d: 'm19 3-7 8-7-8Z'
  }]]];
  var Martini$1 = Martini;

  var Maximize2 = ['svg', defaultAttributes, [['polyline', {
    points: '15 3 21 3 21 9'
  }], ['polyline', {
    points: '9 21 3 21 3 15'
  }], ['line', {
    x1: '21',
    y1: '3',
    x2: '14',
    y2: '10'
  }], ['line', {
    x1: '3',
    y1: '21',
    x2: '10',
    y2: '14'
  }]]];
  var Maximize2$1 = Maximize2;

  var Maximize = ['svg', defaultAttributes, [['path', {
    d: 'M8 3H5a2 2 0 0 0-2 2v3'
  }], ['path', {
    d: 'M21 8V5a2 2 0 0 0-2-2h-3'
  }], ['path', {
    d: 'M3 16v3a2 2 0 0 0 2 2h3'
  }], ['path', {
    d: 'M16 21h3a2 2 0 0 0 2-2v-3'
  }]]];
  var Maximize$1 = Maximize;

  var Medal = ['svg', defaultAttributes, [['path', {
    d: 'M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15'
  }], ['path', {
    d: 'M11 12 5.12 2.2'
  }], ['path', {
    d: 'm13 12 5.88-9.8'
  }], ['path', {
    d: 'M8 7h8'
  }], ['circle', {
    cx: '12',
    cy: '17',
    r: '5'
  }], ['path', {
    d: 'M12 18v-2h-.5'
  }]]];
  var Medal$1 = Medal;

  var MegaphoneOff = ['svg', defaultAttributes, [['path', {
    d: 'M9.26 9.26 3 11v3l14.14 3.14'
  }], ['path', {
    d: 'M21 15.34V6l-7.31 2.03'
  }], ['path', {
    d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6'
  }], ['line', {
    x1: '2',
    x2: '22',
    y1: '2',
    y2: '22'
  }]]];
  var MegaphoneOff$1 = MegaphoneOff;

  var Megaphone = ['svg', defaultAttributes, [['path', {
    d: 'm3 11 18-5v12L3 14v-3z'
  }], ['path', {
    d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6'
  }]]];
  var Megaphone$1 = Megaphone;

  var Meh = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['line', {
    x1: '8',
    y1: '15',
    x2: '16',
    y2: '15'
  }], ['line', {
    x1: '9',
    y1: '9',
    x2: '9.01',
    y2: '9'
  }], ['line', {
    x1: '15',
    y1: '9',
    x2: '15.01',
    y2: '9'
  }]]];
  var Meh$1 = Meh;

  var Menu = ['svg', defaultAttributes, [['line', {
    x1: '4',
    y1: '12',
    x2: '20',
    y2: '12'
  }], ['line', {
    x1: '4',
    y1: '6',
    x2: '20',
    y2: '6'
  }], ['line', {
    x1: '4',
    y1: '18',
    x2: '20',
    y2: '18'
  }]]];
  var Menu$1 = Menu;

  var MessageCircle = ['svg', defaultAttributes, [['path', {
    d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'
  }]]];
  var MessageCircle$1 = MessageCircle;

  var MessageSquare = ['svg', defaultAttributes, [['path', {
    d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
  }]]];
  var MessageSquare$1 = MessageSquare;

  var Mic2 = ['svg', defaultAttributes, [['path', {
    d: 'm12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12'
  }], ['circle', {
    cx: '17',
    cy: '7',
    r: '5'
  }]]];
  var Mic2$1 = Mic2;

  var MicOff = ['svg', defaultAttributes, [['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }], ['path', {
    d: 'M18.89 13.23A7.12 7.12 0 0 0 19 12v-2'
  }], ['path', {
    d: 'M5 10v2a7 7 0 0 0 12 5'
  }], ['path', {
    d: 'M15 9.34V5a3 3 0 0 0-5.68-1.33'
  }], ['path', {
    d: 'M9 9v3a3 3 0 0 0 5.12 2.12'
  }], ['line', {
    x1: '12',
    y1: '19',
    x2: '12',
    y2: '22'
  }]]];
  var MicOff$1 = MicOff;

  var Mic = ['svg', defaultAttributes, [['path', {
    d: 'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z'
  }], ['path', {
    d: 'M19 10v2a7 7 0 0 1-14 0v-2'
  }], ['line', {
    x1: '12',
    y1: '19',
    x2: '12',
    y2: '22'
  }]]];
  var Mic$1 = Mic;

  var Microscope = ['svg', defaultAttributes, [['path', {
    d: 'M6 18h8'
  }], ['path', {
    d: 'M3 22h18'
  }], ['path', {
    d: 'M14 22a7 7 0 1 0 0-14h-1'
  }], ['path', {
    d: 'M9 14h2'
  }], ['path', {
    d: 'M8 6h4'
  }], ['path', {
    d: 'M13 10V6.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.5a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V10c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2Z'
  }]]];
  var Microscope$1 = Microscope;

  var Microwave = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '4',
    width: '20',
    height: '15',
    rx: '2'
  }], ['rect', {
    x: '6',
    y: '8',
    width: '8',
    height: '7',
    rx: '1'
  }], ['path', {
    d: 'M18 8v7'
  }], ['path', {
    d: 'M6 19v2'
  }], ['path', {
    d: 'M18 19v2'
  }]]];
  var Microwave$1 = Microwave;

  var Milestone = ['svg', defaultAttributes, [['path', {
    d: 'M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z'
  }], ['path', {
    d: 'M12 13v9'
  }], ['path', {
    d: 'M12 2v4'
  }]]];
  var Milestone$1 = Milestone;

  var MilkOff = ['svg', defaultAttributes, [['path', {
    d: 'M8 2h8'
  }], ['path', {
    d: 'M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3'
  }], ['path', {
    d: 'M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var MilkOff$1 = MilkOff;

  var Milk = ['svg', defaultAttributes, [['path', {
    d: 'M8 2h8'
  }], ['path', {
    d: 'M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2'
  }], ['path', {
    d: 'M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0'
  }]]];
  var Milk$1 = Milk;

  var Minimize2 = ['svg', defaultAttributes, [['polyline', {
    points: '4 14 10 14 10 20'
  }], ['polyline', {
    points: '20 10 14 10 14 4'
  }], ['line', {
    x1: '14',
    y1: '10',
    x2: '21',
    y2: '3'
  }], ['line', {
    x1: '3',
    y1: '21',
    x2: '10',
    y2: '14'
  }]]];
  var Minimize2$1 = Minimize2;

  var Minimize = ['svg', defaultAttributes, [['path', {
    d: 'M8 3v3a2 2 0 0 1-2 2H3'
  }], ['path', {
    d: 'M21 8h-3a2 2 0 0 1-2-2V3'
  }], ['path', {
    d: 'M3 16h3a2 2 0 0 1 2 2v3'
  }], ['path', {
    d: 'M16 21v-3a2 2 0 0 1 2-2h3'
  }]]];
  var Minimize$1 = Minimize;

  var MinusCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['line', {
    x1: '8',
    y1: '12',
    x2: '16',
    y2: '12'
  }]]];
  var MinusCircle$1 = MinusCircle;

  var MinusSquare = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '8',
    y1: '12',
    x2: '16',
    y2: '12'
  }]]];
  var MinusSquare$1 = MinusSquare;

  var Minus = ['svg', defaultAttributes, [['line', {
    x1: '5',
    y1: '12',
    x2: '19',
    y2: '12'
  }]]];
  var Minus$1 = Minus;

  var MonitorOff = ['svg', defaultAttributes, [['path', {
    d: 'M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2'
  }], ['path', {
    d: 'M22 15V5a2 2 0 0 0-2-2H9'
  }], ['path', {
    d: 'M8 21h8'
  }], ['path', {
    d: 'M12 17v4'
  }], ['path', {
    d: 'm2 2 20 20'
  }]]];
  var MonitorOff$1 = MonitorOff;

  var MonitorSmartphone = ['svg', defaultAttributes, [['path', {
    d: 'M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8'
  }], ['path', {
    d: 'M10 19v-3.96 3.15'
  }], ['path', {
    d: 'M7 19h5'
  }], ['rect', {
    x: '16',
    y: '12',
    width: '6',
    height: '10',
    rx: '2'
  }]]];
  var MonitorSmartphone$1 = MonitorSmartphone;

  var MonitorSpeaker = ['svg', defaultAttributes, [['path', {
    d: 'M5.5 20H8'
  }], ['path', {
    d: 'M17 9h.01'
  }], ['rect', {
    x: '12',
    y: '4',
    width: '10',
    height: '16',
    rx: '2'
  }], ['path', {
    d: 'M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4'
  }], ['circle', {
    cx: '17',
    cy: '15',
    r: '1'
  }]]];
  var MonitorSpeaker$1 = MonitorSpeaker;

  var Monitor = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '3',
    width: '20',
    height: '14',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '8',
    y1: '21',
    x2: '16',
    y2: '21'
  }], ['line', {
    x1: '12',
    y1: '17',
    x2: '12',
    y2: '21'
  }]]];
  var Monitor$1 = Monitor;

  var Moon = ['svg', defaultAttributes, [['path', {
    d: 'M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z'
  }]]];
  var Moon$1 = Moon;

  var MoreHorizontal = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '1'
  }], ['circle', {
    cx: '19',
    cy: '12',
    r: '1'
  }], ['circle', {
    cx: '5',
    cy: '12',
    r: '1'
  }]]];
  var MoreHorizontal$1 = MoreHorizontal;

  var MoreVertical = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '1'
  }], ['circle', {
    cx: '12',
    cy: '5',
    r: '1'
  }], ['circle', {
    cx: '12',
    cy: '19',
    r: '1'
  }]]];
  var MoreVertical$1 = MoreVertical;

  var MountainSnow = ['svg', defaultAttributes, [['path', {
    d: 'm8 3 4 8 5-5 5 15H2L8 3z'
  }], ['path', {
    d: 'M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19'
  }]]];
  var MountainSnow$1 = MountainSnow;

  var Mountain = ['svg', defaultAttributes, [['path', {
    d: 'm8 3 4 8 5-5 5 15H2L8 3z'
  }]]];
  var Mountain$1 = Mountain;

  var MousePointer2 = ['svg', defaultAttributes, [['path', {
    d: 'm4 4 7.07 17 2.51-7.39L21 11.07z'
  }]]];
  var MousePointer2$1 = MousePointer2;

  var MousePointerClick = ['svg', defaultAttributes, [['path', {
    d: 'm9 9 5 12 1.774-5.226L21 14 9 9z'
  }], ['path', {
    d: 'm16.071 16.071 4.243 4.243'
  }], ['path', {
    d: 'm7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122'
  }]]];
  var MousePointerClick$1 = MousePointerClick;

  var MousePointer = ['svg', defaultAttributes, [['path', {
    d: 'm3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z'
  }], ['path', {
    d: 'm13 13 6 6'
  }]]];
  var MousePointer$1 = MousePointer;

  var Mouse = ['svg', defaultAttributes, [['rect', {
    x: '6',
    y: '3',
    width: '12',
    height: '18',
    rx: '6'
  }], ['path', {
    d: 'M12 7v4'
  }]]];
  var Mouse$1 = Mouse;

  var Move3d = ['svg', defaultAttributes, [['path', {
    d: 'M5 3v16h16'
  }], ['path', {
    d: 'm5 19 6-6'
  }], ['path', {
    d: 'm2 6 3-3 3 3'
  }], ['path', {
    d: 'm18 16 3 3-3 3'
  }]]];
  var Move3d$1 = Move3d;

  var MoveDiagonal2 = ['svg', defaultAttributes, [['polyline', {
    points: '5 11 5 5 11 5'
  }], ['polyline', {
    points: '19 13 19 19 13 19'
  }], ['line', {
    x1: '5',
    y1: '5',
    x2: '19',
    y2: '19'
  }]]];
  var MoveDiagonal2$1 = MoveDiagonal2;

  var MoveDiagonal = ['svg', defaultAttributes, [['polyline', {
    points: '13 5 19 5 19 11'
  }], ['polyline', {
    points: '11 19 5 19 5 13'
  }], ['line', {
    x1: '19',
    y1: '5',
    x2: '5',
    y2: '19'
  }]]];
  var MoveDiagonal$1 = MoveDiagonal;

  var MoveHorizontal = ['svg', defaultAttributes, [['polyline', {
    points: '18 8 22 12 18 16'
  }], ['polyline', {
    points: '6 8 2 12 6 16'
  }], ['line', {
    x1: '2',
    y1: '12',
    x2: '22',
    y2: '12'
  }]]];
  var MoveHorizontal$1 = MoveHorizontal;

  var MoveVertical = ['svg', defaultAttributes, [['polyline', {
    points: '8 18 12 22 16 18'
  }], ['polyline', {
    points: '8 6 12 2 16 6'
  }], ['line', {
    x1: '12',
    y1: '2',
    x2: '12',
    y2: '22'
  }]]];
  var MoveVertical$1 = MoveVertical;

  var Move = ['svg', defaultAttributes, [['polyline', {
    points: '5 9 2 12 5 15'
  }], ['polyline', {
    points: '9 5 12 2 15 5'
  }], ['polyline', {
    points: '15 19 12 22 9 19'
  }], ['polyline', {
    points: '19 9 22 12 19 15'
  }], ['line', {
    x1: '2',
    y1: '12',
    x2: '22',
    y2: '12'
  }], ['line', {
    x1: '12',
    y1: '2',
    x2: '12',
    y2: '22'
  }]]];
  var Move$1 = Move;

  var Music2 = ['svg', defaultAttributes, [['circle', {
    cx: '8',
    cy: '18',
    r: '4'
  }], ['path', {
    d: 'M12 18V2l7 4'
  }]]];
  var Music2$1 = Music2;

  var Music3 = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '18',
    r: '4'
  }], ['path', {
    d: 'M16 18V2'
  }]]];
  var Music3$1 = Music3;

  var Music4 = ['svg', defaultAttributes, [['path', {
    d: 'M9 18V5l12-2v13'
  }], ['path', {
    d: 'm9 9 12-2'
  }], ['circle', {
    cx: '6',
    cy: '18',
    r: '3'
  }], ['circle', {
    cx: '18',
    cy: '16',
    r: '3'
  }]]];
  var Music4$1 = Music4;

  var Music = ['svg', defaultAttributes, [['path', {
    d: 'M9 18V5l12-2v13'
  }], ['circle', {
    cx: '6',
    cy: '18',
    r: '3'
  }], ['circle', {
    cx: '18',
    cy: '16',
    r: '3'
  }]]];
  var Music$1 = Music;

  var Navigation2Off = ['svg', defaultAttributes, [['path', {
    d: 'M9.31 9.31 5 21l7-4 7 4-1.17-3.17'
  }], ['path', {
    d: 'M14.53 8.88 12 2l-1.17 3.17'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var Navigation2Off$1 = Navigation2Off;

  var Navigation2 = ['svg', defaultAttributes, [['polygon', {
    points: '12 2 19 21 12 17 5 21 12 2'
  }]]];
  var Navigation2$1 = Navigation2;

  var NavigationOff = ['svg', defaultAttributes, [['path', {
    d: 'M8.43 8.43 3 11l8 2 2 8 2.57-5.43'
  }], ['path', {
    d: 'M17.39 11.73 22 2l-9.73 4.61'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var NavigationOff$1 = NavigationOff;

  var Navigation = ['svg', defaultAttributes, [['polygon', {
    points: '3 11 22 2 13 21 11 13 3 11'
  }]]];
  var Navigation$1 = Navigation;

  var Network = ['svg', defaultAttributes, [['rect', {
    x: '9',
    y: '2',
    width: '6',
    height: '6'
  }], ['rect', {
    x: '16',
    y: '16',
    width: '6',
    height: '6'
  }], ['rect', {
    x: '2',
    y: '16',
    width: '6',
    height: '6'
  }], ['path', {
    d: 'M5 16v-4h14v4'
  }], ['path', {
    d: 'M12 12V8'
  }]]];
  var Network$1 = Network;

  var Newspaper = ['svg', defaultAttributes, [['path', {
    d: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2'
  }], ['path', {
    d: 'M18 14h-8'
  }], ['path', {
    d: 'M15 18h-5'
  }], ['path', {
    d: 'M10 6h8v4h-8V6Z'
  }]]];
  var Newspaper$1 = Newspaper;

  var NutOff = ['svg', defaultAttributes, [['path', {
    d: 'M12 4V2'
  }], ['path', {
    d: 'M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939'
  }], ['path', {
    d: 'M19 10v3.343'
  }], ['path', {
    d: 'M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var NutOff$1 = NutOff;

  var Nut = ['svg', defaultAttributes, [['path', {
    d: 'M12 4V2'
  }], ['path', {
    d: 'M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4'
  }], ['path', {
    d: 'M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z'
  }]]];
  var Nut$1 = Nut;

  var Octagon = ['svg', defaultAttributes, [['polygon', {
    points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'
  }]]];
  var Octagon$1 = Octagon;

  var Option = ['svg', defaultAttributes, [['path', {
    d: 'M3 3h6l6 18h6'
  }], ['path', {
    d: 'M14 3h7'
  }]]];
  var Option$1 = Option;

  var Outdent = ['svg', defaultAttributes, [['polyline', {
    points: '7 8 3 12 7 16'
  }], ['line', {
    x1: '21',
    y1: '12',
    x2: '11',
    y2: '12'
  }], ['line', {
    x1: '21',
    y1: '6',
    x2: '11',
    y2: '6'
  }], ['line', {
    x1: '21',
    y1: '18',
    x2: '11',
    y2: '18'
  }]]];
  var Outdent$1 = Outdent;

  var Package2 = ['svg', defaultAttributes, [['path', {
    d: 'M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z'
  }], ['path', {
    d: 'm3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9'
  }], ['path', {
    d: 'M12 3v6'
  }]]];
  var Package2$1 = Package2;

  var PackageCheck = ['svg', defaultAttributes, [['path', {
    d: 'm16 16 2 2 4-4'
  }], ['path', {
    d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14'
  }], ['path', {
    d: 'M16.5 9.4 7.55 4.24'
  }], ['polyline', {
    points: '3.29 7 12 12 20.71 7'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '12'
  }]]];
  var PackageCheck$1 = PackageCheck;

  var PackageMinus = ['svg', defaultAttributes, [['path', {
    d: 'M16 16h6'
  }], ['path', {
    d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14'
  }], ['path', {
    d: 'M16.5 9.4 7.55 4.24'
  }], ['polyline', {
    points: '3.29 7 12 12 20.71 7'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '12'
  }]]];
  var PackageMinus$1 = PackageMinus;

  var PackageOpen = ['svg', defaultAttributes, [['path', {
    d: 'M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z'
  }], ['path', {
    d: 'm3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '13'
  }], ['path', {
    d: 'M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5'
  }]]];
  var PackageOpen$1 = PackageOpen;

  var PackagePlus = ['svg', defaultAttributes, [['path', {
    d: 'M16 16h6'
  }], ['path', {
    d: 'M19 13v6'
  }], ['path', {
    d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14'
  }], ['path', {
    d: 'M16.5 9.4 7.55 4.24'
  }], ['polyline', {
    points: '3.29 7 12 12 20.71 7'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '12'
  }]]];
  var PackagePlus$1 = PackagePlus;

  var PackageSearch = ['svg', defaultAttributes, [['path', {
    d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14'
  }], ['path', {
    d: 'M16.5 9.4 7.55 4.24'
  }], ['polyline', {
    points: '3.29 7 12 12 20.71 7'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '12'
  }], ['circle', {
    cx: '18.5',
    cy: '15.5',
    r: '2.5'
  }], ['path', {
    d: 'M20.27 17.27 22 19'
  }]]];
  var PackageSearch$1 = PackageSearch;

  var PackageX = ['svg', defaultAttributes, [['path', {
    d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14'
  }], ['path', {
    d: 'M16.5 9.4 7.55 4.24'
  }], ['polyline', {
    points: '3.29 7 12 12 20.71 7'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '12'
  }], ['path', {
    d: 'm17 13 5 5m-5 0 5-5'
  }]]];
  var PackageX$1 = PackageX;

  var Package = ['svg', defaultAttributes, [['line', {
    x1: '16.5',
    y1: '9.4',
    x2: '7.5',
    y2: '4.21'
  }], ['path', {
    d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'
  }], ['polyline', {
    points: '3.29 7 12 12 20.71 7'
  }], ['line', {
    x1: '12',
    y1: '22',
    x2: '12',
    y2: '12'
  }]]];
  var Package$1 = Package;

  var PaintBucket = ['svg', defaultAttributes, [['path', {
    d: 'm19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z'
  }], ['path', {
    d: 'm5 2 5 5'
  }], ['path', {
    d: 'M2 13h15'
  }], ['path', {
    d: 'M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z'
  }]]];
  var PaintBucket$1 = PaintBucket;

  var Paintbrush2 = ['svg', defaultAttributes, [['path', {
    d: 'M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z'
  }], ['path', {
    d: 'M6 12V2h12v10'
  }], ['path', {
    d: 'M14 2v4'
  }], ['path', {
    d: 'M10 2v2'
  }]]];
  var Paintbrush2$1 = Paintbrush2;

  var Paintbrush = ['svg', defaultAttributes, [['path', {
    d: 'M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z'
  }], ['path', {
    d: 'M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7'
  }], ['path', {
    d: 'M14.5 17.5 4.5 15'
  }]]];
  var Paintbrush$1 = Paintbrush;

  var Palette = ['svg', defaultAttributes, [['circle', {
    cx: '13.5',
    cy: '6.5',
    r: '.5'
  }], ['circle', {
    cx: '17.5',
    cy: '10.5',
    r: '.5'
  }], ['circle', {
    cx: '8.5',
    cy: '7.5',
    r: '.5'
  }], ['circle', {
    cx: '6.5',
    cy: '12.5',
    r: '.5'
  }], ['path', {
    d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z'
  }]]];
  var Palette$1 = Palette;

  var Palmtree = ['svg', defaultAttributes, [['path', {
    d: 'M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4'
  }], ['path', {
    d: 'M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3'
  }], ['path', {
    d: 'M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z'
  }], ['path', {
    d: 'M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14'
  }]]];
  var Palmtree$1 = Palmtree;

  var Paperclip = ['svg', defaultAttributes, [['path', {
    d: 'm21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48'
  }]]];
  var Paperclip$1 = Paperclip;

  var PartyPopper = ['svg', defaultAttributes, [['path', {
    d: 'M5.8 11.3 2 22l10.7-3.79'
  }], ['path', {
    d: 'M4 3h.01'
  }], ['path', {
    d: 'M22 8h.01'
  }], ['path', {
    d: 'M15 2h.01'
  }], ['path', {
    d: 'M22 20h.01'
  }], ['path', {
    d: 'm22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10'
  }], ['path', {
    d: 'm22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17'
  }], ['path', {
    d: 'm11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7'
  }], ['path', {
    d: 'M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z'
  }]]];
  var PartyPopper$1 = PartyPopper;

  var PauseCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['line', {
    x1: '10',
    y1: '15',
    x2: '10',
    y2: '9'
  }], ['line', {
    x1: '14',
    y1: '15',
    x2: '14',
    y2: '9'
  }]]];
  var PauseCircle$1 = PauseCircle;

  var PauseOctagon = ['svg', defaultAttributes, [['path', {
    d: 'M10 15V9'
  }], ['path', {
    d: 'M14 15V9'
  }], ['path', {
    d: 'M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z'
  }]]];
  var PauseOctagon$1 = PauseOctagon;

  var Pause = ['svg', defaultAttributes, [['rect', {
    x: '6',
    y: '4',
    width: '4',
    height: '16'
  }], ['rect', {
    x: '14',
    y: '4',
    width: '4',
    height: '16'
  }]]];
  var Pause$1 = Pause;

  var PenTool = ['svg', defaultAttributes, [['path', {
    d: 'm12 19 7-7 3 3-7 7-3-3z'
  }], ['path', {
    d: 'm18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z'
  }], ['path', {
    d: 'm2 2 7.586 7.586'
  }], ['circle', {
    cx: '11',
    cy: '11',
    r: '2'
  }]]];
  var PenTool$1 = PenTool;

  var Pencil = ['svg', defaultAttributes, [['line', {
    x1: '18',
    y1: '2',
    x2: '22',
    y2: '6'
  }], ['path', {
    d: 'M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z'
  }]]];
  var Pencil$1 = Pencil;

  var Percent = ['svg', defaultAttributes, [['line', {
    x1: '19',
    y1: '5',
    x2: '5',
    y2: '19'
  }], ['circle', {
    cx: '6.5',
    cy: '6.5',
    r: '2.5'
  }], ['circle', {
    cx: '17.5',
    cy: '17.5',
    r: '2.5'
  }]]];
  var Percent$1 = Percent;

  var PersonStanding = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '5',
    r: '1'
  }], ['path', {
    d: 'm9 20 3-6 3 6'
  }], ['path', {
    d: 'm6 8 6 2 6-2'
  }], ['path', {
    d: 'M12 10v4'
  }]]];
  var PersonStanding$1 = PersonStanding;

  var PhoneCall = ['svg', defaultAttributes, [['path', {
    d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
  }], ['path', {
    d: 'M14.05 2a9 9 0 0 1 8 7.94'
  }], ['path', {
    d: 'M14.05 6A5 5 0 0 1 18 10'
  }]]];
  var PhoneCall$1 = PhoneCall;

  var PhoneForwarded = ['svg', defaultAttributes, [['polyline', {
    points: '18 2 22 6 18 10'
  }], ['line', {
    x1: '14',
    y1: '6',
    x2: '22',
    y2: '6'
  }], ['path', {
    d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
  }]]];
  var PhoneForwarded$1 = PhoneForwarded;

  var PhoneIncoming = ['svg', defaultAttributes, [['polyline', {
    points: '16 2 16 8 22 8'
  }], ['line', {
    x1: '22',
    y1: '2',
    x2: '16',
    y2: '8'
  }], ['path', {
    d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
  }]]];
  var PhoneIncoming$1 = PhoneIncoming;

  var PhoneMissed = ['svg', defaultAttributes, [['line', {
    x1: '22',
    y1: '2',
    x2: '16',
    y2: '8'
  }], ['line', {
    x1: '16',
    y1: '2',
    x2: '22',
    y2: '8'
  }], ['path', {
    d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
  }]]];
  var PhoneMissed$1 = PhoneMissed;

  var PhoneOff = ['svg', defaultAttributes, [['path', {
    d: 'M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91'
  }], ['line', {
    x1: '22',
    y1: '2',
    x2: '2',
    y2: '22'
  }]]];
  var PhoneOff$1 = PhoneOff;

  var PhoneOutgoing = ['svg', defaultAttributes, [['polyline', {
    points: '22 8 22 2 16 2'
  }], ['line', {
    x1: '16',
    y1: '8',
    x2: '22',
    y2: '2'
  }], ['path', {
    d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
  }]]];
  var PhoneOutgoing$1 = PhoneOutgoing;

  var Phone = ['svg', defaultAttributes, [['path', {
    d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
  }]]];
  var Phone$1 = Phone;

  var PieChart = ['svg', defaultAttributes, [['path', {
    d: 'M21.21 15.89A10 10 0 1 1 8 2.83'
  }], ['path', {
    d: 'M22 12A10 10 0 0 0 12 2v10z'
  }]]];
  var PieChart$1 = PieChart;

  var PiggyBank = ['svg', defaultAttributes, [['path', {
    d: 'M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z'
  }], ['path', {
    d: 'M2 9v1c0 1.1.9 2 2 2h1'
  }], ['path', {
    d: 'M16 11h0'
  }]]];
  var PiggyBank$1 = PiggyBank;

  var PinOff = ['svg', defaultAttributes, [['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }], ['line', {
    x1: '12',
    y1: '17',
    x2: '12',
    y2: '22'
  }], ['path', {
    d: 'M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12'
  }], ['path', {
    d: 'M15 9.34V6h1a2 2 0 0 0 0-4H7.89'
  }]]];
  var PinOff$1 = PinOff;

  var Pin = ['svg', defaultAttributes, [['line', {
    x1: '12',
    y1: '17',
    x2: '12',
    y2: '22'
  }], ['path', {
    d: 'M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z'
  }]]];
  var Pin$1 = Pin;

  var Pipette = ['svg', defaultAttributes, [['path', {
    d: 'm2 22 1-1h3l9-9'
  }], ['path', {
    d: 'M3 21v-3l9-9'
  }], ['path', {
    d: 'm15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z'
  }]]];
  var Pipette$1 = Pipette;

  var Pizza = ['svg', defaultAttributes, [['path', {
    d: 'M15 11h.01'
  }], ['path', {
    d: 'M11 15h.01'
  }], ['path', {
    d: 'M16 16h.01'
  }], ['path', {
    d: 'm2 16 20 6-6-20c-3.36.9-6.42 2.67-8.88 5.12A19.876 19.876 0 0 0 2 16Z'
  }], ['path', {
    d: 'M17 6c-6.29 1.47-9.43 5.13-11 11'
  }]]];
  var Pizza$1 = Pizza;

  var Plane = ['svg', defaultAttributes, [['path', {
    d: 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z'
  }]]];
  var Plane$1 = Plane;

  var PlayCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['polygon', {
    points: '10 8 16 12 10 16 10 8'
  }]]];
  var PlayCircle$1 = PlayCircle;

  var Play = ['svg', defaultAttributes, [['polygon', {
    points: '5 3 19 12 5 21 5 3'
  }]]];
  var Play$1 = Play;

  var Plug2 = ['svg', defaultAttributes, [['path', {
    d: 'M9 2v6'
  }], ['path', {
    d: 'M15 2v6'
  }], ['path', {
    d: 'M12 17v5'
  }], ['path', {
    d: 'M5 8h14'
  }], ['path', {
    d: 'M6 11V8h12v3a6 6 0 1 1-12 0v0Z'
  }]]];
  var Plug2$1 = Plug2;

  var PlugZap = ['svg', defaultAttributes, [['path', {
    d: 'm13 2-2 2.5h3L12 7'
  }], ['path', {
    d: 'M12 22v-3'
  }], ['path', {
    d: 'M10 13v-2.5'
  }], ['path', {
    d: 'M10 12.5v-2'
  }], ['path', {
    d: 'M14 12.5v-2'
  }], ['path', {
    d: 'M16 15a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2z'
  }]]];
  var PlugZap$1 = PlugZap;

  var Plug = ['svg', defaultAttributes, [['path', {
    d: 'M12 22v-5'
  }], ['path', {
    d: 'M9 7V2'
  }], ['path', {
    d: 'M15 7V2'
  }], ['path', {
    d: 'M6 13V8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z'
  }]]];
  var Plug$1 = Plug;

  var PlusCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['line', {
    x1: '12',
    y1: '8',
    x2: '12',
    y2: '16'
  }], ['line', {
    x1: '8',
    y1: '12',
    x2: '16',
    y2: '12'
  }]]];
  var PlusCircle$1 = PlusCircle;

  var PlusSquare = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '12',
    y1: '8',
    x2: '12',
    y2: '16'
  }], ['line', {
    x1: '8',
    y1: '12',
    x2: '16',
    y2: '12'
  }]]];
  var PlusSquare$1 = PlusSquare;

  var Plus = ['svg', defaultAttributes, [['line', {
    x1: '12',
    y1: '5',
    x2: '12',
    y2: '19'
  }], ['line', {
    x1: '5',
    y1: '12',
    x2: '19',
    y2: '12'
  }]]];
  var Plus$1 = Plus;

  var Pocket = ['svg', defaultAttributes, [['path', {
    d: 'M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z'
  }], ['polyline', {
    points: '8 10 12 14 16 10'
  }]]];
  var Pocket$1 = Pocket;

  var Podcast = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '11',
    r: '1'
  }], ['path', {
    d: 'M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z'
  }], ['path', {
    d: 'M8 14a5 5 0 1 1 8 0'
  }], ['path', {
    d: 'M17 18.5a9 9 0 1 0-10 0'
  }]]];
  var Podcast$1 = Podcast;

  var Pointer = ['svg', defaultAttributes, [['path', {
    d: 'M22 14a8 8 0 0 1-8 8'
  }], ['path', {
    d: 'M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0'
  }], ['path', {
    d: 'M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1'
  }], ['path', {
    d: 'M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10'
  }], ['path', {
    d: 'M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15'
  }]]];
  var Pointer$1 = Pointer;

  var PoundSterling = ['svg', defaultAttributes, [['path', {
    d: 'M18 7c0-5.333-8-5.333-8 0'
  }], ['path', {
    d: 'M10 7v14'
  }], ['path', {
    d: 'M6 21h12'
  }], ['path', {
    d: 'M6 13h10'
  }]]];
  var PoundSterling$1 = PoundSterling;

  var PowerOff = ['svg', defaultAttributes, [['path', {
    d: 'M18.36 6.64A9 9 0 0 1 20.77 15'
  }], ['path', {
    d: 'M6.16 6.16a9 9 0 1 0 12.68 12.68'
  }], ['path', {
    d: 'M12 2v4'
  }], ['path', {
    d: 'm2 2 20 20'
  }]]];
  var PowerOff$1 = PowerOff;

  var Power = ['svg', defaultAttributes, [['path', {
    d: 'M18.36 6.64a9 9 0 1 1-12.73 0'
  }], ['line', {
    x1: '12',
    y1: '2',
    x2: '12',
    y2: '12'
  }]]];
  var Power$1 = Power;

  var Printer = ['svg', defaultAttributes, [['polyline', {
    points: '6 9 6 2 18 2 18 9'
  }], ['path', {
    d: 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2'
  }], ['rect', {
    x: '6',
    y: '14',
    width: '12',
    height: '8'
  }]]];
  var Printer$1 = Printer;

  var Puzzle = ['svg', defaultAttributes, [['path', {
    d: 'M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z'
  }]]];
  var Puzzle$1 = Puzzle;

  var QrCode = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '5',
    height: '5',
    rx: '1'
  }], ['rect', {
    x: '16',
    y: '3',
    width: '5',
    height: '5',
    rx: '1'
  }], ['rect', {
    x: '3',
    y: '16',
    width: '5',
    height: '5',
    rx: '1'
  }], ['path', {
    d: 'M21 16h-3a2 2 0 0 0-2 2v3'
  }], ['path', {
    d: 'M21 21v.01'
  }], ['path', {
    d: 'M12 7v3a2 2 0 0 1-2 2H7'
  }], ['path', {
    d: 'M3 12h.01'
  }], ['path', {
    d: 'M12 3h.01'
  }], ['path', {
    d: 'M12 16v.01'
  }], ['path', {
    d: 'M16 12h1'
  }], ['path', {
    d: 'M21 12v.01'
  }], ['path', {
    d: 'M12 21v-1'
  }]]];
  var QrCode$1 = QrCode;

  var Quote = ['svg', defaultAttributes, [['path', {
    d: 'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'
  }], ['path', {
    d: 'M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z'
  }]]];
  var Quote$1 = Quote;

  var RadioReceiver = ['svg', defaultAttributes, [['path', {
    d: 'M5 16v2'
  }], ['path', {
    d: 'M19 16v2'
  }], ['rect', {
    x: '2',
    y: '8',
    width: '20',
    height: '8',
    rx: '2'
  }], ['path', {
    d: 'M18 12h0'
  }]]];
  var RadioReceiver$1 = RadioReceiver;

  var Radio = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '2'
  }], ['path', {
    d: 'M4.93 19.07a10 10 0 0 1 0-14.14'
  }], ['path', {
    d: 'M7.76 16.24a6 6 0 0 1-1.3-1.95 6 6 0 0 1 0-4.59 6 6 0 0 1 1.3-1.95'
  }], ['path', {
    d: 'M16.24 7.76a6 6 0 0 1 1.3 2 6 6 0 0 1 0 4.59 6 6 0 0 1-1.3 1.95'
  }], ['path', {
    d: 'M19.07 4.93a10 10 0 0 1 0 14.14'
  }]]];
  var Radio$1 = Radio;

  var RectangleHorizontal = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '6',
    width: '20',
    height: '12',
    rx: '2'
  }]]];
  var RectangleHorizontal$1 = RectangleHorizontal;

  var RectangleVertical = ['svg', defaultAttributes, [['rect', {
    x: '6',
    y: '2',
    width: '12',
    height: '20',
    rx: '2'
  }]]];
  var RectangleVertical$1 = RectangleVertical;

  var Recycle = ['svg', defaultAttributes, [['path', {
    d: 'M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5'
  }], ['path', {
    d: 'M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12'
  }], ['path', {
    d: 'm14 16-3 3 3 3'
  }], ['path', {
    d: 'M8.293 13.596 7.196 9.5 3.1 10.598'
  }], ['path', {
    d: 'm9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843'
  }], ['path', {
    d: 'm13.378 9.633 4.096 1.098 1.097-4.096'
  }]]];
  var Recycle$1 = Recycle;

  var Redo2 = ['svg', defaultAttributes, [['path', {
    d: 'm15 14 5-5-5-5'
  }], ['path', {
    d: 'M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13'
  }]]];
  var Redo2$1 = Redo2;

  var Redo = ['svg', defaultAttributes, [['path', {
    d: 'M21 7v6h-6'
  }], ['path', {
    d: 'M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7'
  }]]];
  var Redo$1 = Redo;

  var RefreshCcw = ['svg', defaultAttributes, [['path', {
    d: 'M3 2v6h6'
  }], ['path', {
    d: 'M21 12A9 9 0 0 0 6 5.3L3 8'
  }], ['path', {
    d: 'M21 22v-6h-6'
  }], ['path', {
    d: 'M3 12a9 9 0 0 0 15 6.7l3-2.7'
  }]]];
  var RefreshCcw$1 = RefreshCcw;

  var RefreshCw = ['svg', defaultAttributes, [['path', {
    d: 'M21 2v6h-6'
  }], ['path', {
    d: 'M3 12a9 9 0 0 1 15-6.7L21 8'
  }], ['path', {
    d: 'M3 22v-6h6'
  }], ['path', {
    d: 'M21 12a9 9 0 0 1-15 6.7L3 16'
  }]]];
  var RefreshCw$1 = RefreshCw;

  var Refrigerator = ['svg', defaultAttributes, [['path', {
    d: 'M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z'
  }], ['path', {
    d: 'M5 10h14'
  }], ['path', {
    d: 'M15 7v6'
  }]]];
  var Refrigerator$1 = Refrigerator;

  var Regex = ['svg', defaultAttributes, [['path', {
    d: 'M17 3v10'
  }], ['path', {
    d: 'm12.67 5.5 8.66 5'
  }], ['path', {
    d: 'm12.67 10.5 8.66-5'
  }], ['path', {
    d: 'M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z'
  }]]];
  var Regex$1 = Regex;

  var Repeat1 = ['svg', defaultAttributes, [['path', {
    d: 'm17 2 4 4-4 4'
  }], ['path', {
    d: 'M3 11v-1a4 4 0 0 1 4-4h14'
  }], ['path', {
    d: 'm7 22-4-4 4-4'
  }], ['path', {
    d: 'M21 13v1a4 4 0 0 1-4 4H3'
  }], ['path', {
    d: 'M11 10h1v4'
  }]]];
  var Repeat1$1 = Repeat1;

  var Repeat = ['svg', defaultAttributes, [['path', {
    d: 'm17 2 4 4-4 4'
  }], ['path', {
    d: 'M3 11v-1a4 4 0 0 1 4-4h14'
  }], ['path', {
    d: 'm7 22-4-4 4-4'
  }], ['path', {
    d: 'M21 13v1a4 4 0 0 1-4 4H3'
  }]]];
  var Repeat$1 = Repeat;

  var ReplyAll = ['svg', defaultAttributes, [['polyline', {
    points: '7 17 2 12 7 7'
  }], ['polyline', {
    points: '12 17 7 12 12 7'
  }], ['path', {
    d: 'M22 18v-2a4 4 0 0 0-4-4H7'
  }]]];
  var ReplyAll$1 = ReplyAll;

  var Reply = ['svg', defaultAttributes, [['polyline', {
    points: '9 17 4 12 9 7'
  }], ['path', {
    d: 'M20 18v-2a4 4 0 0 0-4-4H4'
  }]]];
  var Reply$1 = Reply;

  var Rewind = ['svg', defaultAttributes, [['polygon', {
    points: '11 19 2 12 11 5 11 19'
  }], ['polygon', {
    points: '22 19 13 12 22 5 22 19'
  }]]];
  var Rewind$1 = Rewind;

  var Rocket = ['svg', defaultAttributes, [['path', {
    d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'
  }], ['path', {
    d: 'm12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z'
  }], ['path', {
    d: 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0'
  }], ['path', {
    d: 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'
  }]]];
  var Rocket$1 = Rocket;

  var RockingChair = ['svg', defaultAttributes, [['polyline', {
    points: '3.5 2 6.5 12.5 18 12.5'
  }], ['line', {
    x1: '9.5',
    y1: '12.5',
    x2: '5.5',
    y2: '20'
  }], ['line', {
    x1: '15',
    y1: '12.5',
    x2: '18.5',
    y2: '20'
  }], ['path', {
    d: 'M2.75 18a13 13 0 0 0 18.5 0'
  }]]];
  var RockingChair$1 = RockingChair;

  var Rotate3d = ['svg', defaultAttributes, [['path', {
    d: 'M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2'
  }], ['path', {
    d: 'm15.194 13.707 3.814 1.86-1.86 3.814'
  }], ['path', {
    d: 'M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4'
  }]]];
  var Rotate3d$1 = Rotate3d;

  var RotateCcw = ['svg', defaultAttributes, [['path', {
    d: 'M3 2v6h6'
  }], ['path', {
    d: 'M3 13a9 9 0 1 0 3-7.7L3 8'
  }]]];
  var RotateCcw$1 = RotateCcw;

  var RotateCw = ['svg', defaultAttributes, [['path', {
    d: 'M21 2v6h-6'
  }], ['path', {
    d: 'M21 13a9 9 0 1 1-3-7.7L21 8'
  }]]];
  var RotateCw$1 = RotateCw;

  var Rss = ['svg', defaultAttributes, [['path', {
    d: 'M4 11a9 9 0 0 1 9 9'
  }], ['path', {
    d: 'M4 4a16 16 0 0 1 16 16'
  }], ['circle', {
    cx: '5',
    cy: '19',
    r: '1'
  }]]];
  var Rss$1 = Rss;

  var Ruler = ['svg', defaultAttributes, [['path', {
    d: 'M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z'
  }], ['path', {
    d: 'm7.5 10.5 2 2'
  }], ['path', {
    d: 'm10.5 7.5 2 2'
  }], ['path', {
    d: 'm13.5 4.5 2 2'
  }], ['path', {
    d: 'm4.5 13.5 2 2'
  }]]];
  var Ruler$1 = Ruler;

  var RussianRuble = ['svg', defaultAttributes, [['path', {
    d: 'M14 11c5.333 0 5.333-8 0-8'
  }], ['path', {
    d: 'M6 11h8'
  }], ['path', {
    d: 'M6 15h8'
  }], ['path', {
    d: 'M9 21V3'
  }], ['path', {
    d: 'M9 3h5'
  }]]];
  var RussianRuble$1 = RussianRuble;

  var Sailboat = ['svg', defaultAttributes, [['path', {
    d: 'M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z'
  }], ['path', {
    d: 'M21 14 10 2 3 14h18Z'
  }], ['path', {
    d: 'M10 2v16'
  }]]];
  var Sailboat$1 = Sailboat;

  var Save = ['svg', defaultAttributes, [['path', {
    d: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z'
  }], ['polyline', {
    points: '17 21 17 13 7 13 7 21'
  }], ['polyline', {
    points: '7 3 7 8 15 8'
  }]]];
  var Save$1 = Save;

  var Scale3d = ['svg', defaultAttributes, [['path', {
    d: 'M5 7v12h12'
  }], ['path', {
    d: 'm5 19 6-6'
  }], ['rect', {
    x: '3',
    y: '3',
    width: '4',
    height: '4',
    rx: '1'
  }], ['rect', {
    x: '17',
    y: '17',
    width: '4',
    height: '4',
    rx: '1'
  }]]];
  var Scale3d$1 = Scale3d;

  var Scale = ['svg', defaultAttributes, [['path', {
    d: 'm16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z'
  }], ['path', {
    d: 'm2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z'
  }], ['path', {
    d: 'M7 21h10'
  }], ['path', {
    d: 'M12 3v18'
  }], ['path', {
    d: 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'
  }]]];
  var Scale$1 = Scale;

  var Scaling = ['svg', defaultAttributes, [['path', {
    d: 'M21 3 9 15'
  }], ['path', {
    d: 'M12 3H3v18h18v-9'
  }], ['path', {
    d: 'M16 3h5v5'
  }], ['path', {
    d: 'M14 15H9v-5'
  }]]];
  var Scaling$1 = Scaling;

  var ScanFace = ['svg', defaultAttributes, [['path', {
    d: 'M3 7V5a2 2 0 0 1 2-2h2'
  }], ['path', {
    d: 'M17 3h2a2 2 0 0 1 2 2v2'
  }], ['path', {
    d: 'M21 17v2a2 2 0 0 1-2 2h-2'
  }], ['path', {
    d: 'M7 21H5a2 2 0 0 1-2-2v-2'
  }], ['path', {
    d: 'M8 14s1.5 2 4 2 4-2 4-2'
  }], ['path', {
    d: 'M9 9h.01'
  }], ['path', {
    d: 'M15 9h.01'
  }]]];
  var ScanFace$1 = ScanFace;

  var ScanLine = ['svg', defaultAttributes, [['path', {
    d: 'M3 7V5a2 2 0 0 1 2-2h2'
  }], ['path', {
    d: 'M17 3h2a2 2 0 0 1 2 2v2'
  }], ['path', {
    d: 'M21 17v2a2 2 0 0 1-2 2h-2'
  }], ['path', {
    d: 'M7 21H5a2 2 0 0 1-2-2v-2'
  }], ['line', {
    x1: '7',
    y1: '12',
    x2: '17',
    y2: '12'
  }]]];
  var ScanLine$1 = ScanLine;

  var Scan = ['svg', defaultAttributes, [['path', {
    d: 'M3 7V5a2 2 0 0 1 2-2h2'
  }], ['path', {
    d: 'M17 3h2a2 2 0 0 1 2 2v2'
  }], ['path', {
    d: 'M21 17v2a2 2 0 0 1-2 2h-2'
  }], ['path', {
    d: 'M7 21H5a2 2 0 0 1-2-2v-2'
  }]]];
  var Scan$1 = Scan;

  var Scissors = ['svg', defaultAttributes, [['circle', {
    cx: '6',
    cy: '6',
    r: '3'
  }], ['circle', {
    cx: '6',
    cy: '18',
    r: '3'
  }], ['line', {
    x1: '20',
    y1: '4',
    x2: '8.12',
    y2: '15.88'
  }], ['line', {
    x1: '14.47',
    y1: '14.48',
    x2: '20',
    y2: '20'
  }], ['line', {
    x1: '8.12',
    y1: '8.12',
    x2: '12',
    y2: '12'
  }]]];
  var Scissors$1 = Scissors;

  var ScreenShareOff = ['svg', defaultAttributes, [['path', {
    d: 'M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3'
  }], ['path', {
    d: 'M8 21h8'
  }], ['path', {
    d: 'M12 17v4'
  }], ['path', {
    d: 'm22 3-5 5'
  }], ['path', {
    d: 'm17 3 5 5'
  }]]];
  var ScreenShareOff$1 = ScreenShareOff;

  var ScreenShare = ['svg', defaultAttributes, [['path', {
    d: 'M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3'
  }], ['path', {
    d: 'M8 21h8'
  }], ['path', {
    d: 'M12 17v4'
  }], ['path', {
    d: 'm17 8 5-5'
  }], ['path', {
    d: 'M17 3h5v5'
  }]]];
  var ScreenShare$1 = ScreenShare;

  var Scroll = ['svg', defaultAttributes, [['path', {
    d: 'M10 17v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3h3'
  }], ['path', {
    d: 'M22 17v2a2 2 0 0 1-2 2H8'
  }], ['path', {
    d: 'M19 17V5a2 2 0 0 0-2-2H4'
  }], ['path', {
    d: 'M22 17H10'
  }]]];
  var Scroll$1 = Scroll;

  var Search = ['svg', defaultAttributes, [['circle', {
    cx: '11',
    cy: '11',
    r: '8'
  }], ['line', {
    x1: '21',
    y1: '21',
    x2: '16.65',
    y2: '16.65'
  }]]];
  var Search$1 = Search;

  var Send = ['svg', defaultAttributes, [['line', {
    x1: '22',
    y1: '2',
    x2: '11',
    y2: '13'
  }], ['polygon', {
    points: '22 2 15 22 11 13 2 9 22 2'
  }]]];
  var Send$1 = Send;

  var SeparatorHorizontal = ['svg', defaultAttributes, [['line', {
    x1: '3',
    y1: '12',
    x2: '21',
    y2: '12'
  }], ['polyline', {
    points: '8 8 12 4 16 8'
  }], ['polyline', {
    points: '16 16 12 20 8 16'
  }]]];
  var SeparatorHorizontal$1 = SeparatorHorizontal;

  var SeparatorVertical = ['svg', defaultAttributes, [['line', {
    x1: '12',
    y1: '3',
    x2: '12',
    y2: '21'
  }], ['polyline', {
    points: '8 8 4 12 8 16'
  }], ['polyline', {
    points: '16 16 20 12 16 8'
  }]]];
  var SeparatorVertical$1 = SeparatorVertical;

  var ServerCog = ['svg', defaultAttributes, [['path', {
    d: 'M5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1'
  }], ['path', {
    d: 'M5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1'
  }], ['path', {
    d: 'M6 6h.01'
  }], ['path', {
    d: 'M6 18h.01'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '3'
  }], ['path', {
    d: 'M12 8v1'
  }], ['path', {
    d: 'M12 15v1'
  }], ['path', {
    d: 'M16 12h-1'
  }], ['path', {
    d: 'M9 12H8'
  }], ['path', {
    d: 'm15 9-.88.88'
  }], ['path', {
    d: 'M9.88 14.12 9 15'
  }], ['path', {
    d: 'm15 15-.88-.88'
  }], ['path', {
    d: 'M9.88 9.88 9 9'
  }]]];
  var ServerCog$1 = ServerCog;

  var ServerCrash = ['svg', defaultAttributes, [['path', {
    d: 'M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2'
  }], ['path', {
    d: 'M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2'
  }], ['path', {
    d: 'M6 6h.01'
  }], ['path', {
    d: 'M6 18h.01'
  }], ['path', {
    d: 'm13 6-4 6h6l-4 6'
  }]]];
  var ServerCrash$1 = ServerCrash;

  var ServerOff = ['svg', defaultAttributes, [['path', {
    d: 'M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5'
  }], ['path', {
    d: 'M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z'
  }], ['path', {
    d: 'M22 17v-1a2 2 0 0 0-2-2h-1'
  }], ['path', {
    d: 'M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z'
  }], ['path', {
    d: 'M6 18h.01'
  }], ['path', {
    d: 'm2 2 20 20'
  }]]];
  var ServerOff$1 = ServerOff;

  var Server = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '2',
    width: '20',
    height: '8',
    rx: '2',
    ry: '2'
  }], ['rect', {
    x: '2',
    y: '14',
    width: '20',
    height: '8',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '6',
    y1: '6',
    x2: '6.01',
    y2: '6'
  }], ['line', {
    x1: '6',
    y1: '18',
    x2: '6.01',
    y2: '18'
  }]]];
  var Server$1 = Server;

  var Settings2 = ['svg', defaultAttributes, [['path', {
    d: 'M20 7h-9'
  }], ['path', {
    d: 'M14 17H5'
  }], ['circle', {
    cx: '17',
    cy: '17',
    r: '3'
  }], ['circle', {
    cx: '7',
    cy: '7',
    r: '3'
  }]]];
  var Settings2$1 = Settings2;

  var Settings = ['svg', defaultAttributes, [['path', {
    d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '3'
  }]]];
  var Settings$1 = Settings;

  var Share2 = ['svg', defaultAttributes, [['circle', {
    cx: '18',
    cy: '5',
    r: '3'
  }], ['circle', {
    cx: '6',
    cy: '12',
    r: '3'
  }], ['circle', {
    cx: '18',
    cy: '19',
    r: '3'
  }], ['line', {
    x1: '8.59',
    y1: '13.51',
    x2: '15.42',
    y2: '17.49'
  }], ['line', {
    x1: '15.41',
    y1: '6.51',
    x2: '8.59',
    y2: '10.49'
  }]]];
  var Share2$1 = Share2;

  var Share = ['svg', defaultAttributes, [['path', {
    d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'
  }], ['polyline', {
    points: '16 6 12 2 8 6'
  }], ['line', {
    x1: '12',
    y1: '2',
    x2: '12',
    y2: '15'
  }]]];
  var Share$1 = Share;

  var Sheet = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '3',
    y1: '9',
    x2: '21',
    y2: '9'
  }], ['line', {
    x1: '3',
    y1: '15',
    x2: '21',
    y2: '15'
  }], ['line', {
    x1: '9',
    y1: '9',
    x2: '9',
    y2: '21'
  }], ['line', {
    x1: '15',
    y1: '9',
    x2: '15',
    y2: '21'
  }]]];
  var Sheet$1 = Sheet;

  var ShieldAlert = ['svg', defaultAttributes, [['path', {
    d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  }], ['path', {
    d: 'M12 8v4'
  }], ['path', {
    d: 'M12 16h.01'
  }]]];
  var ShieldAlert$1 = ShieldAlert;

  var ShieldCheck = ['svg', defaultAttributes, [['path', {
    d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  }], ['path', {
    d: 'm9 12 2 2 4-4'
  }]]];
  var ShieldCheck$1 = ShieldCheck;

  var ShieldClose = ['svg', defaultAttributes, [['path', {
    d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  }], ['line', {
    x1: '9.5',
    y1: '9',
    x2: '14.5',
    y2: '14'
  }], ['line', {
    x1: '14.5',
    y1: '9',
    x2: '9.5',
    y2: '14'
  }]]];
  var ShieldClose$1 = ShieldClose;

  var ShieldOff = ['svg', defaultAttributes, [['path', {
    d: 'M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18'
  }], ['path', {
    d: 'M4.73 4.73 4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var ShieldOff$1 = ShieldOff;

  var Shield = ['svg', defaultAttributes, [['path', {
    d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  }]]];
  var Shield$1 = Shield;

  var Shirt = ['svg', defaultAttributes, [['path', {
    d: 'M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z'
  }]]];
  var Shirt$1 = Shirt;

  var ShoppingBag = ['svg', defaultAttributes, [['path', {
    d: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z'
  }], ['line', {
    x1: '3',
    y1: '6',
    x2: '21',
    y2: '6'
  }], ['path', {
    d: 'M16 10a4 4 0 0 1-8 0'
  }]]];
  var ShoppingBag$1 = ShoppingBag;

  var ShoppingCart = ['svg', defaultAttributes, [['circle', {
    cx: '8',
    cy: '21',
    r: '1'
  }], ['circle', {
    cx: '19',
    cy: '21',
    r: '1'
  }], ['path', {
    d: 'M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'
  }]]];
  var ShoppingCart$1 = ShoppingCart;

  var Shovel = ['svg', defaultAttributes, [['path', {
    d: 'M2 22v-5l5-5 5 5-5 5z'
  }], ['path', {
    d: 'M9.5 14.5 16 8'
  }], ['path', {
    d: 'm17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2'
  }]]];
  var Shovel$1 = Shovel;

  var ShowerHead = ['svg', defaultAttributes, [['path', {
    d: 'm4 4 2.5 2.5'
  }], ['path', {
    d: 'M13.5 6.5a4.95 4.95 0 0 0-7 7'
  }], ['path', {
    d: 'M15 5 5 15'
  }], ['path', {
    d: 'M14 17v.01'
  }], ['path', {
    d: 'M10 16v.01'
  }], ['path', {
    d: 'M13 13v.01'
  }], ['path', {
    d: 'M16 10v.01'
  }], ['path', {
    d: 'M11 20v.01'
  }], ['path', {
    d: 'M17 14v.01'
  }], ['path', {
    d: 'M20 11v.01'
  }]]];
  var ShowerHead$1 = ShowerHead;

  var Shrink = ['svg', defaultAttributes, [['path', {
    d: 'm15 15 6 6m-6-6v4.8m0-4.8h4.8'
  }], ['path', {
    d: 'M9 19.8V15m0 0H4.2M9 15l-6 6'
  }], ['path', {
    d: 'M15 4.2V9m0 0h4.8M15 9l6-6'
  }], ['path', {
    d: 'M9 4.2V9m0 0H4.2M9 9 3 3'
  }]]];
  var Shrink$1 = Shrink;

  var Shrub = ['svg', defaultAttributes, [['path', {
    d: 'M12 22v-7l-2-2'
  }], ['path', {
    d: 'M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z'
  }], ['path', {
    d: 'm14 14-2 2'
  }]]];
  var Shrub$1 = Shrub;

  var Shuffle = ['svg', defaultAttributes, [['polyline', {
    points: '16 3 21 3 21 8'
  }], ['line', {
    x1: '4',
    y1: '20',
    x2: '21',
    y2: '3'
  }], ['polyline', {
    points: '21 16 21 21 16 21'
  }], ['line', {
    x1: '15',
    y1: '15',
    x2: '21',
    y2: '21'
  }], ['line', {
    x1: '4',
    y1: '4',
    x2: '9',
    y2: '9'
  }]]];
  var Shuffle$1 = Shuffle;

  var SidebarClose = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M9 3v18'
  }], ['path', {
    d: 'm16 15-3-3 3-3'
  }]]];
  var SidebarClose$1 = SidebarClose;

  var SidebarOpen = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M9 3v18'
  }], ['path', {
    d: 'm14 9 3 3-3 3'
  }]]];
  var SidebarOpen$1 = SidebarOpen;

  var Sidebar = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '9',
    y1: '3',
    x2: '9',
    y2: '21'
  }]]];
  var Sidebar$1 = Sidebar;

  var Sigma = ['svg', defaultAttributes, [['path', {
    d: 'M18 7V4H6l6 8-6 8h12v-3'
  }]]];
  var Sigma$1 = Sigma;

  var SignalHigh = ['svg', defaultAttributes, [['path', {
    d: 'M2 20h.01'
  }], ['path', {
    d: 'M7 20v-4'
  }], ['path', {
    d: 'M12 20v-8'
  }], ['path', {
    d: 'M17 20V8'
  }]]];
  var SignalHigh$1 = SignalHigh;

  var SignalLow = ['svg', defaultAttributes, [['path', {
    d: 'M2 20h.01'
  }], ['path', {
    d: 'M7 20v-4'
  }]]];
  var SignalLow$1 = SignalLow;

  var SignalMedium = ['svg', defaultAttributes, [['path', {
    d: 'M2 20h.01'
  }], ['path', {
    d: 'M7 20v-4'
  }], ['path', {
    d: 'M12 20v-8'
  }]]];
  var SignalMedium$1 = SignalMedium;

  var SignalZero = ['svg', defaultAttributes, [['path', {
    d: 'M2 20h.01'
  }]]];
  var SignalZero$1 = SignalZero;

  var Signal = ['svg', defaultAttributes, [['path', {
    d: 'M2 20h.01'
  }], ['path', {
    d: 'M7 20v-4'
  }], ['path', {
    d: 'M12 20v-8'
  }], ['path', {
    d: 'M17 20V8'
  }], ['path', {
    d: 'M22 4v16'
  }]]];
  var Signal$1 = Signal;

  var Siren = ['svg', defaultAttributes, [['path', {
    d: 'M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z'
  }], ['path', {
    d: 'M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z'
  }], ['path', {
    d: 'M21 12h1'
  }], ['path', {
    d: 'M18.5 4.5 18 5'
  }], ['path', {
    d: 'M2 12h1'
  }], ['path', {
    d: 'M12 2v1'
  }], ['path', {
    d: 'm4.929 4.929.707.707'
  }], ['path', {
    d: 'M12 12v6'
  }]]];
  var Siren$1 = Siren;

  var SkipBack = ['svg', defaultAttributes, [['polygon', {
    points: '19 20 9 12 19 4 19 20'
  }], ['line', {
    x1: '5',
    y1: '19',
    x2: '5',
    y2: '5'
  }]]];
  var SkipBack$1 = SkipBack;

  var SkipForward = ['svg', defaultAttributes, [['polygon', {
    points: '5 4 15 12 5 20 5 4'
  }], ['line', {
    x1: '19',
    y1: '5',
    x2: '19',
    y2: '19'
  }]]];
  var SkipForward$1 = SkipForward;

  var Skull = ['svg', defaultAttributes, [['circle', {
    cx: '9',
    cy: '12',
    r: '1'
  }], ['circle', {
    cx: '15',
    cy: '12',
    r: '1'
  }], ['path', {
    d: 'M8 20v2h8v-2'
  }], ['path', {
    d: 'm12.5 17-.5-1-.5 1h1z'
  }], ['path', {
    d: 'M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20'
  }]]];
  var Skull$1 = Skull;

  var Slack = ['svg', defaultAttributes, [['rect', {
    x: '13',
    y: '2',
    width: '3',
    height: '8',
    rx: '1.5'
  }], ['path', {
    d: 'M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5'
  }], ['rect', {
    x: '8',
    y: '14',
    width: '3',
    height: '8',
    rx: '1.5'
  }], ['path', {
    d: 'M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5'
  }], ['rect', {
    x: '14',
    y: '13',
    width: '8',
    height: '3',
    rx: '1.5'
  }], ['path', {
    d: 'M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5'
  }], ['rect', {
    x: '2',
    y: '8',
    width: '8',
    height: '3',
    rx: '1.5'
  }], ['path', {
    d: 'M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5'
  }]]];
  var Slack$1 = Slack;

  var Slash = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['line', {
    x1: '4.93',
    y1: '4.93',
    x2: '19.07',
    y2: '19.07'
  }]]];
  var Slash$1 = Slash;

  var Slice = ['svg', defaultAttributes, [['path', {
    d: 'm8 14-6 6h9v-3'
  }], ['path', {
    d: 'M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z'
  }]]];
  var Slice$1 = Slice;

  var SlidersHorizontal = ['svg', defaultAttributes, [['line', {
    x1: '21',
    y1: '4',
    x2: '14',
    y2: '4'
  }], ['line', {
    x1: '10',
    y1: '4',
    x2: '3',
    y2: '4'
  }], ['line', {
    x1: '21',
    y1: '12',
    x2: '12',
    y2: '12'
  }], ['line', {
    x1: '8',
    y1: '12',
    x2: '3',
    y2: '12'
  }], ['line', {
    x1: '21',
    y1: '20',
    x2: '16',
    y2: '20'
  }], ['line', {
    x1: '12',
    y1: '20',
    x2: '3',
    y2: '20'
  }], ['line', {
    x1: '14',
    y1: '2',
    x2: '14',
    y2: '6'
  }], ['line', {
    x1: '8',
    y1: '10',
    x2: '8',
    y2: '14'
  }], ['line', {
    x1: '16',
    y1: '18',
    x2: '16',
    y2: '22'
  }]]];
  var SlidersHorizontal$1 = SlidersHorizontal;

  var Sliders = ['svg', defaultAttributes, [['line', {
    x1: '4',
    y1: '21',
    x2: '4',
    y2: '14'
  }], ['line', {
    x1: '4',
    y1: '10',
    x2: '4',
    y2: '3'
  }], ['line', {
    x1: '12',
    y1: '21',
    x2: '12',
    y2: '12'
  }], ['line', {
    x1: '12',
    y1: '8',
    x2: '12',
    y2: '3'
  }], ['line', {
    x1: '20',
    y1: '21',
    x2: '20',
    y2: '16'
  }], ['line', {
    x1: '20',
    y1: '12',
    x2: '20',
    y2: '3'
  }], ['line', {
    x1: '2',
    y1: '14',
    x2: '6',
    y2: '14'
  }], ['line', {
    x1: '10',
    y1: '8',
    x2: '14',
    y2: '8'
  }], ['line', {
    x1: '18',
    y1: '16',
    x2: '22',
    y2: '16'
  }]]];
  var Sliders$1 = Sliders;

  var SmartphoneCharging = ['svg', defaultAttributes, [['rect', {
    x: '5',
    y: '2',
    width: '14',
    height: '20',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M12.667 8 10 12h4l-2.667 4'
  }]]];
  var SmartphoneCharging$1 = SmartphoneCharging;

  var Smartphone = ['svg', defaultAttributes, [['rect', {
    x: '5',
    y: '2',
    width: '14',
    height: '20',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M12 18h.01'
  }]]];
  var Smartphone$1 = Smartphone;

  var SmilePlus = ['svg', defaultAttributes, [['path', {
    d: 'M22 11v1a10 10 0 1 1-9-10'
  }], ['path', {
    d: 'M8 14s1.5 2 4 2 4-2 4-2'
  }], ['line', {
    x1: '9',
    y1: '9',
    x2: '9.01',
    y2: '9'
  }], ['line', {
    x1: '15',
    y1: '9',
    x2: '15.01',
    y2: '9'
  }], ['path', {
    d: 'M16 5h6'
  }], ['path', {
    d: 'M19 2v6'
  }]]];
  var SmilePlus$1 = SmilePlus;

  var Smile = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['path', {
    d: 'M8 14s1.5 2 4 2 4-2 4-2'
  }], ['line', {
    x1: '9',
    y1: '9',
    x2: '9.01',
    y2: '9'
  }], ['line', {
    x1: '15',
    y1: '9',
    x2: '15.01',
    y2: '9'
  }]]];
  var Smile$1 = Smile;

  var Snowflake = ['svg', defaultAttributes, [['line', {
    x1: '2',
    y1: '12',
    x2: '22',
    y2: '12'
  }], ['line', {
    x1: '12',
    y1: '2',
    x2: '12',
    y2: '22'
  }], ['path', {
    d: 'm20 16-4-4 4-4'
  }], ['path', {
    d: 'm4 8 4 4-4 4'
  }], ['path', {
    d: 'm16 4-4 4-4-4'
  }], ['path', {
    d: 'm8 20 4-4 4 4'
  }]]];
  var Snowflake$1 = Snowflake;

  var Sofa = ['svg', defaultAttributes, [['path', {
    d: 'M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3'
  }], ['path', {
    d: 'M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z'
  }], ['path', {
    d: 'M4 18v2'
  }], ['path', {
    d: 'M20 18v2'
  }], ['path', {
    d: 'M12 4v9'
  }]]];
  var Sofa$1 = Sofa;

  var SortAsc = ['svg', defaultAttributes, [['path', {
    d: 'M11 11H15'
  }], ['path', {
    d: 'M11 15H18'
  }], ['path', {
    d: 'M11 19H21'
  }], ['path', {
    d: 'M9 7L6 4L3 7'
  }], ['path', {
    d: 'M6 6L6 20'
  }]]];
  var SortAsc$1 = SortAsc;

  var SortDesc = ['svg', defaultAttributes, [['path', {
    d: 'M11 5h10'
  }], ['path', {
    d: 'M11 9h7'
  }], ['path', {
    d: 'M11 13h4'
  }], ['path', {
    d: 'm3 17 3 3 3-3'
  }], ['path', {
    d: 'M6 18V4'
  }]]];
  var SortDesc$1 = SortDesc;

  var Speaker = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '2',
    width: '16',
    height: '20',
    rx: '2',
    ry: '2'
  }], ['circle', {
    cx: '12',
    cy: '14',
    r: '4'
  }], ['line', {
    x1: '12',
    y1: '6',
    x2: '12.01',
    y2: '6'
  }]]];
  var Speaker$1 = Speaker;

  var Spline = ['svg', defaultAttributes, [['path', {
    d: 'M21 6V4c0-.6-.4-1-1-1h-2a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1Z'
  }], ['path', {
    d: 'M7 20v-2c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1Z'
  }], ['path', {
    d: 'M5 17A12 12 0 0 1 17 5'
  }]]];
  var Spline$1 = Spline;

  var Sprout = ['svg', defaultAttributes, [['path', {
    d: 'M7 20h10'
  }], ['path', {
    d: 'M10 20c5.5-2.5.8-6.4 3-10'
  }], ['path', {
    d: 'M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z'
  }], ['path', {
    d: 'M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z'
  }]]];
  var Sprout$1 = Sprout;

  var Square = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }]]];
  var Square$1 = Square;

  var StarHalf = ['svg', defaultAttributes, [['path', {
    d: 'M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2'
  }]]];
  var StarHalf$1 = StarHalf;

  var StarOff = ['svg', defaultAttributes, [['path', {
    d: 'M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43'
  }], ['path', {
    d: 'M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var StarOff$1 = StarOff;

  var Star = ['svg', defaultAttributes, [['polygon', {
    points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
  }]]];
  var Star$1 = Star;

  var Stethoscope = ['svg', defaultAttributes, [['path', {
    d: 'M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3'
  }], ['path', {
    d: 'M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4'
  }], ['circle', {
    cx: '20',
    cy: '10',
    r: '2'
  }]]];
  var Stethoscope$1 = Stethoscope;

  var Sticker = ['svg', defaultAttributes, [['path', {
    d: 'M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z'
  }], ['path', {
    d: 'M15 3v6h6'
  }], ['path', {
    d: 'M10 16s.8 1 2 1c1.3 0 2-1 2-1'
  }], ['path', {
    d: 'M8 13h0'
  }], ['path', {
    d: 'M16 13h0'
  }]]];
  var Sticker$1 = Sticker;

  var StickyNote = ['svg', defaultAttributes, [['path', {
    d: 'M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z'
  }], ['path', {
    d: 'M15 3v6h6'
  }]]];
  var StickyNote$1 = StickyNote;

  var StopCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['rect', {
    x: '9',
    y: '9',
    width: '6',
    height: '6'
  }]]];
  var StopCircle$1 = StopCircle;

  var StretchHorizontal = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '4',
    width: '20',
    height: '6',
    rx: '2'
  }], ['rect', {
    x: '2',
    y: '14',
    width: '20',
    height: '6',
    rx: '2'
  }]]];
  var StretchHorizontal$1 = StretchHorizontal;

  var StretchVertical = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '2',
    width: '6',
    height: '20',
    rx: '2'
  }], ['rect', {
    x: '14',
    y: '2',
    width: '6',
    height: '20',
    rx: '2'
  }]]];
  var StretchVertical$1 = StretchVertical;

  var Strikethrough = ['svg', defaultAttributes, [['path', {
    d: 'M16 4H9a3 3 0 0 0-2.83 4'
  }], ['path', {
    d: 'M14 12a4 4 0 0 1 0 8H6'
  }], ['line', {
    x1: '4',
    y1: '12',
    x2: '20',
    y2: '12'
  }]]];
  var Strikethrough$1 = Strikethrough;

  var Subscript = ['svg', defaultAttributes, [['path', {
    d: 'm4 5 8 8'
  }], ['path', {
    d: 'm12 5-8 8'
  }], ['path', {
    d: 'M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07'
  }]]];
  var Subscript$1 = Subscript;

  var SunDim = ['svg', defaultAttributes, [['path', {
    d: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
  }], ['path', {
    d: 'M12 4h.01'
  }], ['path', {
    d: 'M20 12h.01'
  }], ['path', {
    d: 'M12 20h.01'
  }], ['path', {
    d: 'M4 12h.01'
  }], ['path', {
    d: 'M17.657 6.343h.01'
  }], ['path', {
    d: 'M17.657 17.657h.01'
  }], ['path', {
    d: 'M6.343 17.657h.01'
  }], ['path', {
    d: 'M6.343 6.343h.01'
  }]]];
  var SunDim$1 = SunDim;

  var SunMedium = ['svg', defaultAttributes, [['path', {
    d: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
  }], ['path', {
    d: 'M12 3v1'
  }], ['path', {
    d: 'M12 20v1'
  }], ['path', {
    d: 'M3 12h1'
  }], ['path', {
    d: 'M20 12h1'
  }], ['path', {
    d: 'm18.364 5.636-.707.707'
  }], ['path', {
    d: 'm6.343 17.657-.707.707'
  }], ['path', {
    d: 'm5.636 5.636.707.707'
  }], ['path', {
    d: 'm17.657 17.657.707.707'
  }]]];
  var SunMedium$1 = SunMedium;

  var SunMoon = ['svg', defaultAttributes, [['path', {
    d: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
  }], ['path', {
    d: 'M12 8a2.828 2.828 0 1 0 4 4'
  }], ['path', {
    d: 'M12 2v2'
  }], ['path', {
    d: 'M12 20v2'
  }], ['path', {
    d: 'm4.93 4.93 1.41 1.41'
  }], ['path', {
    d: 'm17.66 17.66 1.41 1.41'
  }], ['path', {
    d: 'M2 12h2'
  }], ['path', {
    d: 'M20 12h2'
  }], ['path', {
    d: 'm6.34 17.66-1.41 1.41'
  }], ['path', {
    d: 'm19.07 4.93-1.41 1.41'
  }]]];
  var SunMoon$1 = SunMoon;

  var SunSnow = ['svg', defaultAttributes, [['path', {
    d: 'M10 9a3 3 0 1 0 0 6'
  }], ['path', {
    d: 'M2 12h1'
  }], ['path', {
    d: 'M14 21V3'
  }], ['path', {
    d: 'M10 4V3'
  }], ['path', {
    d: 'M10 21v-1'
  }], ['path', {
    d: 'm3.64 18.36.7-.7'
  }], ['path', {
    d: 'm4.34 6.34-.7-.7'
  }], ['path', {
    d: 'M14 12h8'
  }], ['path', {
    d: 'm17 4-3 3'
  }], ['path', {
    d: 'm14 17 3 3'
  }], ['path', {
    d: 'm21 15-3-3 3-3'
  }]]];
  var SunSnow$1 = SunSnow;

  var Sun = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '4'
  }], ['path', {
    d: 'M12 2v2'
  }], ['path', {
    d: 'M12 20v2'
  }], ['path', {
    d: 'm4.93 4.93 1.41 1.41'
  }], ['path', {
    d: 'm17.66 17.66 1.41 1.41'
  }], ['path', {
    d: 'M2 12h2'
  }], ['path', {
    d: 'M20 12h2'
  }], ['path', {
    d: 'm6.34 17.66-1.41 1.41'
  }], ['path', {
    d: 'm19.07 4.93-1.41 1.41'
  }]]];
  var Sun$1 = Sun;

  var Sunrise = ['svg', defaultAttributes, [['path', {
    d: 'M12 2v8'
  }], ['path', {
    d: 'm4.93 10.93 1.41 1.41'
  }], ['path', {
    d: 'M2 18h2'
  }], ['path', {
    d: 'M20 18h2'
  }], ['path', {
    d: 'm19.07 10.93-1.41 1.41'
  }], ['path', {
    d: 'M22 22H2'
  }], ['path', {
    d: 'm8 6 4-4 4 4'
  }], ['path', {
    d: 'M16 18a4 4 0 0 0-8 0'
  }]]];
  var Sunrise$1 = Sunrise;

  var Sunset = ['svg', defaultAttributes, [['path', {
    d: 'M12 10V2'
  }], ['path', {
    d: 'm4.93 10.93 1.41 1.41'
  }], ['path', {
    d: 'M2 18h2'
  }], ['path', {
    d: 'M20 18h2'
  }], ['path', {
    d: 'm19.07 10.93-1.41 1.41'
  }], ['path', {
    d: 'M22 22H2'
  }], ['path', {
    d: 'm16 6-4 4-4-4'
  }], ['path', {
    d: 'M16 18a4 4 0 0 0-8 0'
  }]]];
  var Sunset$1 = Sunset;

  var Superscript = ['svg', defaultAttributes, [['path', {
    d: 'm4 19 8-8'
  }], ['path', {
    d: 'm12 19-8-8'
  }], ['path', {
    d: 'M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06'
  }]]];
  var Superscript$1 = Superscript;

  var SwissFranc = ['svg', defaultAttributes, [['path', {
    d: 'M10 21V3h8'
  }], ['path', {
    d: 'M6 16h9'
  }], ['path', {
    d: 'M10 9.5h7'
  }]]];
  var SwissFranc$1 = SwissFranc;

  var SwitchCamera = ['svg', defaultAttributes, [['path', {
    d: 'M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5'
  }], ['path', {
    d: 'M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '3'
  }], ['path', {
    d: 'm18 22-3-3 3-3'
  }], ['path', {
    d: 'm6 2 3 3-3 3'
  }]]];
  var SwitchCamera$1 = SwitchCamera;

  var Sword = ['svg', defaultAttributes, [['polyline', {
    points: '14.5 17.5 3 6 3 3 6 3 17.5 14.5'
  }], ['line', {
    x1: '13',
    y1: '19',
    x2: '19',
    y2: '13'
  }], ['line', {
    x1: '16',
    y1: '16',
    x2: '20',
    y2: '20'
  }], ['line', {
    x1: '19',
    y1: '21',
    x2: '21',
    y2: '19'
  }]]];
  var Sword$1 = Sword;

  var Swords = ['svg', defaultAttributes, [['polyline', {
    points: '14.5 17.5 3 6 3 3 6 3 17.5 14.5'
  }], ['line', {
    x1: '13',
    y1: '19',
    x2: '19',
    y2: '13'
  }], ['line', {
    x1: '16',
    y1: '16',
    x2: '20',
    y2: '20'
  }], ['line', {
    x1: '19',
    y1: '21',
    x2: '21',
    y2: '19'
  }], ['polyline', {
    points: '14.5 6.5 18 3 21 3 21 6 17.5 9.5'
  }], ['line', {
    x1: '5',
    y1: '14',
    x2: '9',
    y2: '18'
  }], ['line', {
    x1: '7',
    y1: '17',
    x2: '4',
    y2: '20'
  }], ['line', {
    x1: '3',
    y1: '19',
    x2: '5',
    y2: '21'
  }]]];
  var Swords$1 = Swords;

  var Syringe = ['svg', defaultAttributes, [['path', {
    d: 'm18 2 4 4'
  }], ['path', {
    d: 'm17 7 3-3'
  }], ['path', {
    d: 'M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5'
  }], ['path', {
    d: 'm9 11 4 4'
  }], ['path', {
    d: 'm5 19-3 3'
  }], ['path', {
    d: 'm14 4 6 6'
  }]]];
  var Syringe$1 = Syringe;

  var Table2 = ['svg', defaultAttributes, [['path', {
    d: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18'
  }]]];
  var Table2$1 = Table2;

  var Table = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '3',
    y1: '9',
    x2: '21',
    y2: '9'
  }], ['line', {
    x1: '3',
    y1: '15',
    x2: '21',
    y2: '15'
  }], ['line', {
    x1: '12',
    y1: '3',
    x2: '12',
    y2: '21'
  }]]];
  var Table$1 = Table;

  var Tablet = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '2',
    width: '16',
    height: '20',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '12',
    y1: '18',
    x2: '12.01',
    y2: '18'
  }]]];
  var Tablet$1 = Tablet;

  var Tag = ['svg', defaultAttributes, [['path', {
    d: 'M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z'
  }], ['path', {
    d: 'M7 7h.01'
  }]]];
  var Tag$1 = Tag;

  var Tags = ['svg', defaultAttributes, [['path', {
    d: 'M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z'
  }], ['path', {
    d: 'M6 9.01V9'
  }], ['path', {
    d: 'm15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19'
  }]]];
  var Tags$1 = Tags;

  var Target = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '6'
  }], ['circle', {
    cx: '12',
    cy: '12',
    r: '2'
  }]]];
  var Target$1 = Target;

  var Tent = ['svg', defaultAttributes, [['path', {
    d: 'M19 20 10 4'
  }], ['path', {
    d: 'm5 20 9-16'
  }], ['path', {
    d: 'M3 20h18'
  }], ['path', {
    d: 'm12 15-3 5'
  }], ['path', {
    d: 'm12 15 3 5'
  }]]];
  var Tent$1 = Tent;

  var TerminalSquare = ['svg', defaultAttributes, [['path', {
    d: 'm7 11 2-2-2-2'
  }], ['path', {
    d: 'M11 13h4'
  }], ['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }]]];
  var TerminalSquare$1 = TerminalSquare;

  var Terminal = ['svg', defaultAttributes, [['polyline', {
    points: '4 17 10 11 4 5'
  }], ['line', {
    x1: '12',
    y1: '19',
    x2: '20',
    y2: '19'
  }]]];
  var Terminal$1 = Terminal;

  var TextCursorInput = ['svg', defaultAttributes, [['path', {
    d: 'M13 20h-1a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1'
  }], ['path', {
    d: 'M5 4h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5'
  }], ['path', {
    d: 'M13.1 7.9h6.8A2.18 2.18 0 0 1 22 10v4a2.11 2.11 0 0 1-2.1 2.1h-6.8'
  }], ['path', {
    d: 'M4.8 16.1h-.7A2.18 2.18 0 0 1 2 14v-4a2.18 2.18 0 0 1 2.1-2.1h.7'
  }]]];
  var TextCursorInput$1 = TextCursorInput;

  var TextCursor = ['svg', defaultAttributes, [['path', {
    d: 'M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1'
  }], ['path', {
    d: 'M7 22h1a4 4 0 0 0 4-4v-1'
  }], ['path', {
    d: 'M7 2h1a4 4 0 0 1 4 4v1'
  }]]];
  var TextCursor$1 = TextCursor;

  var ThermometerSnowflake = ['svg', defaultAttributes, [['path', {
    d: 'M2 12h10'
  }], ['path', {
    d: 'M9 4v16'
  }], ['path', {
    d: 'm3 9 3 3-3 3'
  }], ['path', {
    d: 'M12 6 9 9 6 6'
  }], ['path', {
    d: 'm6 18 3-3 1.5 1.5'
  }], ['path', {
    d: 'M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z'
  }]]];
  var ThermometerSnowflake$1 = ThermometerSnowflake;

  var ThermometerSun = ['svg', defaultAttributes, [['path', {
    d: 'M12 9a4 4 0 0 0-2 7.5'
  }], ['path', {
    d: 'M12 3v2'
  }], ['path', {
    d: 'm6.6 18.4-1.4 1.4'
  }], ['path', {
    d: 'M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z'
  }], ['path', {
    d: 'M4 13H2'
  }], ['path', {
    d: 'M6.34 7.34 4.93 5.93'
  }]]];
  var ThermometerSun$1 = ThermometerSun;

  var Thermometer = ['svg', defaultAttributes, [['path', {
    d: 'M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z'
  }]]];
  var Thermometer$1 = Thermometer;

  var ThumbsDown = ['svg', defaultAttributes, [['path', {
    d: 'M17 14V2'
  }], ['path', {
    d: 'M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z'
  }]]];
  var ThumbsDown$1 = ThumbsDown;

  var ThumbsUp = ['svg', defaultAttributes, [['path', {
    d: 'M7 10v12'
  }], ['path', {
    d: 'M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z'
  }]]];
  var ThumbsUp$1 = ThumbsUp;

  var Ticket = ['svg', defaultAttributes, [['path', {
    d: 'M3 7v2a3 3 0 1 1 0 6v2c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z'
  }], ['path', {
    d: 'M13 5v2'
  }], ['path', {
    d: 'M13 17v2'
  }], ['path', {
    d: 'M13 11v2'
  }]]];
  var Ticket$1 = Ticket;

  var TimerOff = ['svg', defaultAttributes, [['path', {
    d: 'M10 2h4'
  }], ['path', {
    d: 'M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7'
  }], ['path', {
    d: 'M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2'
  }], ['path', {
    d: 'm2 2 20 20'
  }], ['path', {
    d: 'M12 12v-2'
  }]]];
  var TimerOff$1 = TimerOff;

  var TimerReset = ['svg', defaultAttributes, [['path', {
    d: 'M10 2h4'
  }], ['path', {
    d: 'M12 14v-4'
  }], ['path', {
    d: 'M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6'
  }], ['path', {
    d: 'M9 17H4v5'
  }]]];
  var TimerReset$1 = TimerReset;

  var Timer = ['svg', defaultAttributes, [['line', {
    x1: '10',
    x2: '14',
    y1: '2',
    y2: '2'
  }], ['line', {
    x1: '12',
    x2: '15',
    y1: '14',
    y2: '11'
  }], ['circle', {
    cx: '12',
    cy: '14',
    r: '8'
  }]]];
  var Timer$1 = Timer;

  var ToggleLeft = ['svg', defaultAttributes, [['rect', {
    x: '1',
    y: '5',
    width: '22',
    height: '14',
    rx: '7',
    ry: '7'
  }], ['circle', {
    cx: '8',
    cy: '12',
    r: '3'
  }]]];
  var ToggleLeft$1 = ToggleLeft;

  var ToggleRight = ['svg', defaultAttributes, [['rect', {
    x: '1',
    y: '5',
    width: '22',
    height: '14',
    rx: '7',
    ry: '7'
  }], ['circle', {
    cx: '16',
    cy: '12',
    r: '3'
  }]]];
  var ToggleRight$1 = ToggleRight;

  var Tornado = ['svg', defaultAttributes, [['path', {
    d: 'M21 4H3'
  }], ['path', {
    d: 'M18 8H6'
  }], ['path', {
    d: 'M19 12H9'
  }], ['path', {
    d: 'M16 16h-6'
  }], ['path', {
    d: 'M11 20H9'
  }]]];
  var Tornado$1 = Tornado;

  var ToyBrick = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '8',
    width: '18',
    height: '12',
    rx: '1'
  }], ['path', {
    d: 'M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3'
  }], ['path', {
    d: 'M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3'
  }]]];
  var ToyBrick$1 = ToyBrick;

  var Train = ['svg', defaultAttributes, [['rect', {
    x: '4',
    y: '3',
    width: '16',
    height: '16',
    rx: '2'
  }], ['path', {
    d: 'M4 11h16'
  }], ['path', {
    d: 'M12 3v8'
  }], ['path', {
    d: 'm8 19-2 3'
  }], ['path', {
    d: 'm18 22-2-3'
  }], ['path', {
    d: 'M8 15h0'
  }], ['path', {
    d: 'M16 15h0'
  }]]];
  var Train$1 = Train;

  var Trash2 = ['svg', defaultAttributes, [['path', {
    d: 'M3 6h18'
  }], ['path', {
    d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'
  }], ['path', {
    d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'
  }], ['line', {
    x1: '10',
    y1: '11',
    x2: '10',
    y2: '17'
  }], ['line', {
    x1: '14',
    y1: '11',
    x2: '14',
    y2: '17'
  }]]];
  var Trash2$1 = Trash2;

  var Trash = ['svg', defaultAttributes, [['path', {
    d: 'M3 6h18'
  }], ['path', {
    d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'
  }], ['path', {
    d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'
  }]]];
  var Trash$1 = Trash;

  var TreeDeciduous = ['svg', defaultAttributes, [['path', {
    d: 'M8 19h8a4 4 0 0 0 3.8-2.8 4 4 0 0 0-1.6-4.5c1-1.1 1-2.7.4-4-.7-1.2-2.2-2-3.6-1.7a3 3 0 0 0-3-3 3 3 0 0 0-3 3c-1.4-.2-2.9.5-3.6 1.7-.7 1.3-.5 2.9.4 4a4 4 0 0 0-1.6 4.5A4 4 0 0 0 8 19Z'
  }], ['path', {
    d: 'M12 19v3'
  }]]];
  var TreeDeciduous$1 = TreeDeciduous;

  var TreePine = ['svg', defaultAttributes, [['path', {
    d: 'm17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z'
  }], ['path', {
    d: 'M12 22v-3'
  }]]];
  var TreePine$1 = TreePine;

  var Trees = ['svg', defaultAttributes, [['path', {
    d: 'M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z'
  }], ['path', {
    d: 'M7 16v6'
  }], ['path', {
    d: 'M13 19v3'
  }], ['path', {
    d: 'M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5'
  }]]];
  var Trees$1 = Trees;

  var Trello = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['rect', {
    x: '7',
    y: '7',
    width: '3',
    height: '9'
  }], ['rect', {
    x: '14',
    y: '7',
    width: '3',
    height: '5'
  }]]];
  var Trello$1 = Trello;

  var TrendingDown = ['svg', defaultAttributes, [['polyline', {
    points: '22 17 13.5 8.5 8.5 13.5 2 7'
  }], ['polyline', {
    points: '16 17 22 17 22 11'
  }]]];
  var TrendingDown$1 = TrendingDown;

  var TrendingUp = ['svg', defaultAttributes, [['polyline', {
    points: '22 7 13.5 15.5 8.5 10.5 2 17'
  }], ['polyline', {
    points: '16 7 22 7 22 13'
  }]]];
  var TrendingUp$1 = TrendingUp;

  var Triangle = ['svg', defaultAttributes, [['path', {
    d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z'
  }]]];
  var Triangle$1 = Triangle;

  var Trophy = ['svg', defaultAttributes, [['path', {
    d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6'
  }], ['path', {
    d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18'
  }], ['path', {
    d: 'M4 22h16'
  }], ['path', {
    d: 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22'
  }], ['path', {
    d: 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22'
  }], ['path', {
    d: 'M18 2H6v7a6 6 0 0 0 12 0V2Z'
  }]]];
  var Trophy$1 = Trophy;

  var Truck = ['svg', defaultAttributes, [['path', {
    d: 'M10 17h4V5H2v12h3'
  }], ['path', {
    d: 'M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5'
  }], ['path', {
    d: 'M14 17h1'
  }], ['circle', {
    cx: '7.5',
    cy: '17.5',
    r: '2.5'
  }], ['circle', {
    cx: '17.5',
    cy: '17.5',
    r: '2.5'
  }]]];
  var Truck$1 = Truck;

  var Tv2 = ['svg', defaultAttributes, [['path', {
    d: 'M7 21h10'
  }], ['rect', {
    x: '2',
    y: '3',
    width: '20',
    height: '14',
    rx: '2'
  }]]];
  var Tv2$1 = Tv2;

  var Tv = ['svg', defaultAttributes, [['rect', {
    x: '2',
    y: '7',
    width: '20',
    height: '15',
    rx: '2',
    ry: '2'
  }], ['polyline', {
    points: '17 2 12 7 7 2'
  }]]];
  var Tv$1 = Tv;

  var Twitch = ['svg', defaultAttributes, [['path', {
    d: 'M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7'
  }]]];
  var Twitch$1 = Twitch;

  var Twitter = ['svg', defaultAttributes, [['path', {
    d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'
  }]]];
  var Twitter$1 = Twitter;

  var Type = ['svg', defaultAttributes, [['polyline', {
    points: '4 7 4 4 20 4 20 7'
  }], ['line', {
    x1: '9',
    y1: '20',
    x2: '15',
    y2: '20'
  }], ['line', {
    x1: '12',
    y1: '4',
    x2: '12',
    y2: '20'
  }]]];
  var Type$1 = Type;

  var Umbrella = ['svg', defaultAttributes, [['path', {
    d: 'M22 12a9.92 9.92 0 0 0-3.24-6.41 10.12 10.12 0 0 0-13.52 0A9.92 9.92 0 0 0 2 12Z'
  }], ['path', {
    d: 'M12 12v8a2 2 0 0 0 4 0'
  }], ['line', {
    x1: '12',
    y1: '2',
    x2: '12',
    y2: '3'
  }]]];
  var Umbrella$1 = Umbrella;

  var Underline = ['svg', defaultAttributes, [['path', {
    d: 'M6 4v6a6 6 0 0 0 12 0V4'
  }], ['line', {
    x1: '4',
    y1: '20',
    x2: '20',
    y2: '20'
  }]]];
  var Underline$1 = Underline;

  var Undo2 = ['svg', defaultAttributes, [['path', {
    d: 'M9 14 4 9l5-5'
  }], ['path', {
    d: 'M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11'
  }]]];
  var Undo2$1 = Undo2;

  var Undo = ['svg', defaultAttributes, [['path', {
    d: 'M3 7v6h6'
  }], ['path', {
    d: 'M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13'
  }]]];
  var Undo$1 = Undo;

  var Unlink2 = ['svg', defaultAttributes, [['path', {
    d: 'M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2'
  }]]];
  var Unlink2$1 = Unlink2;

  var Unlink = ['svg', defaultAttributes, [['path', {
    d: 'm18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71'
  }], ['path', {
    d: 'm5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71'
  }], ['line', {
    x1: '8',
    y1: '2',
    x2: '8',
    y2: '5'
  }], ['line', {
    x1: '2',
    y1: '8',
    x2: '5',
    y2: '8'
  }], ['line', {
    x1: '16',
    y1: '19',
    x2: '16',
    y2: '22'
  }], ['line', {
    x1: '19',
    y1: '16',
    x2: '22',
    y2: '16'
  }]]];
  var Unlink$1 = Unlink;

  var Unlock = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '11',
    width: '18',
    height: '11',
    rx: '2',
    ry: '2'
  }], ['path', {
    d: 'M7 11V7a5 5 0 0 1 9.9-1'
  }]]];
  var Unlock$1 = Unlock;

  var UploadCloud = ['svg', defaultAttributes, [['path', {
    d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'
  }], ['path', {
    d: 'M12 12v9'
  }], ['path', {
    d: 'm16 16-4-4-4 4'
  }]]];
  var UploadCloud$1 = UploadCloud;

  var Upload = ['svg', defaultAttributes, [['path', {
    d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'
  }], ['polyline', {
    points: '17 8 12 3 7 8'
  }], ['line', {
    x1: '12',
    y1: '3',
    x2: '12',
    y2: '15'
  }]]];
  var Upload$1 = Upload;

  var Usb = ['svg', defaultAttributes, [['circle', {
    cx: '4',
    cy: '20',
    r: '1'
  }], ['circle', {
    cx: '10',
    cy: '7',
    r: '1'
  }], ['path', {
    d: 'M4 20 19 5'
  }], ['path', {
    d: 'm21 3-3 1 2 2 1-3Z'
  }], ['path', {
    d: 'm10 7-5 5 2 5'
  }], ['path', {
    d: 'm10 14 5 2 4-4'
  }], ['path', {
    d: 'm18 12 1-1 1 1-1 1-1-1Z'
  }]]];
  var Usb$1 = Usb;

  var UserCheck = ['svg', defaultAttributes, [['path', {
    d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'
  }], ['circle', {
    cx: '9',
    cy: '7',
    r: '4'
  }], ['polyline', {
    points: '16 11 18 13 22 9'
  }]]];
  var UserCheck$1 = UserCheck;

  var UserCog = ['svg', defaultAttributes, [['path', {
    d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'
  }], ['circle', {
    cx: '9',
    cy: '7',
    r: '4'
  }], ['circle', {
    cx: '19',
    cy: '11',
    r: '2'
  }], ['path', {
    d: 'M19 8v1'
  }], ['path', {
    d: 'M19 13v1'
  }], ['path', {
    d: 'm21.6 9.5-.87.5'
  }], ['path', {
    d: 'm17.27 12-.87.5'
  }], ['path', {
    d: 'm21.6 12.5-.87-.5'
  }], ['path', {
    d: 'm17.27 10-.87-.5'
  }]]];
  var UserCog$1 = UserCog;

  var UserMinus = ['svg', defaultAttributes, [['path', {
    d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'
  }], ['circle', {
    cx: '9',
    cy: '7',
    r: '4'
  }], ['line', {
    x1: '22',
    y1: '11',
    x2: '16',
    y2: '11'
  }]]];
  var UserMinus$1 = UserMinus;

  var UserPlus = ['svg', defaultAttributes, [['path', {
    d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'
  }], ['circle', {
    cx: '9',
    cy: '7',
    r: '4'
  }], ['line', {
    x1: '19',
    y1: '8',
    x2: '19',
    y2: '14'
  }], ['line', {
    x1: '22',
    y1: '11',
    x2: '16',
    y2: '11'
  }]]];
  var UserPlus$1 = UserPlus;

  var UserX = ['svg', defaultAttributes, [['path', {
    d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'
  }], ['circle', {
    cx: '9',
    cy: '7',
    r: '4'
  }], ['line', {
    x1: '17',
    y1: '8',
    x2: '22',
    y2: '13'
  }], ['line', {
    x1: '22',
    y1: '8',
    x2: '17',
    y2: '13'
  }]]];
  var UserX$1 = UserX;

  var User = ['svg', defaultAttributes, [['path', {
    d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'
  }], ['circle', {
    cx: '12',
    cy: '7',
    r: '4'
  }]]];
  var User$1 = User;

  var Users = ['svg', defaultAttributes, [['path', {
    d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'
  }], ['circle', {
    cx: '9',
    cy: '7',
    r: '4'
  }], ['path', {
    d: 'M22 21v-2a4 4 0 0 0-3-3.87'
  }], ['path', {
    d: 'M16 3.13a4 4 0 0 1 0 7.75'
  }]]];
  var Users$1 = Users;

  var UtensilsCrossed = ['svg', defaultAttributes, [['path', {
    d: 'm16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8'
  }], ['path', {
    d: 'M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7'
  }], ['path', {
    d: 'm2.1 21.8 6.4-6.3'
  }], ['path', {
    d: 'm19 5-7 7'
  }]]];
  var UtensilsCrossed$1 = UtensilsCrossed;

  var Utensils = ['svg', defaultAttributes, [['path', {
    d: 'M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2'
  }], ['path', {
    d: 'M7 2v20'
  }], ['path', {
    d: 'M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7'
  }]]];
  var Utensils$1 = Utensils;

  var Vegan = ['svg', defaultAttributes, [['path', {
    d: 'M2 2c4.056 3.007 9.232 9.337 10 20 .897-6.818 1.5-9.5 4-14'
  }], ['path', {
    d: 'M20.375 6.533A9.953 9.953 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c2.003 0 3.869.589 5.433 1.603'
  }], ['path', {
    d: 'M17.104 4c-1.002 1.274-1.146 2.586-1.1 4 1.9-.1 3.003-.201 4.3-1.4 1.406-1.3 1.6-2.3 1.7-4.6-2.7.1-3.623.375-4.9 2Z'
  }]]];
  var Vegan$1 = Vegan;

  var VenetianMask = ['svg', defaultAttributes, [['path', {
    d: 'M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z'
  }], ['path', {
    d: 'M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z'
  }], ['path', {
    d: 'M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z'
  }]]];
  var VenetianMask$1 = VenetianMask;

  var Verified = ['svg', defaultAttributes, [['path', {
    d: 'M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.6-1.8 1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z'
  }], ['path', {
    d: 'm9 12 2 2 4-4'
  }]]];
  var Verified$1 = Verified;

  var VibrateOff = ['svg', defaultAttributes, [['path', {
    d: 'm2 8 2 2-2 2 2 2-2 2'
  }], ['path', {
    d: 'm22 8-2 2 2 2-2 2 2 2'
  }], ['path', {
    d: 'M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2'
  }], ['path', {
    d: 'M16 10.34V6c0-.55-.45-1-1-1h-4.34'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var VibrateOff$1 = VibrateOff;

  var Vibrate = ['svg', defaultAttributes, [['path', {
    d: 'm2 8 2 2-2 2 2 2-2 2'
  }], ['path', {
    d: 'm22 8-2 2 2 2-2 2 2 2'
  }], ['rect', {
    x: '8',
    y: '5',
    width: '8',
    height: '14',
    rx: '1'
  }]]];
  var Vibrate$1 = Vibrate;

  var VideoOff = ['svg', defaultAttributes, [['path', {
    d: 'M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8'
  }], ['path', {
    d: 'M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var VideoOff$1 = VideoOff;

  var Video = ['svg', defaultAttributes, [['path', {
    d: 'm22 8-6 4 6 4V8Z'
  }], ['rect', {
    x: '2',
    y: '6',
    width: '14',
    height: '12',
    rx: '2',
    ry: '2'
  }]]];
  var Video$1 = Video;

  var View = ['svg', defaultAttributes, [['path', {
    d: 'M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z'
  }], ['path', {
    d: 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
  }], ['path', {
    d: 'M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2'
  }], ['path', {
    d: 'M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2'
  }]]];
  var View$1 = View;

  var Voicemail = ['svg', defaultAttributes, [['circle', {
    cx: '6',
    cy: '12',
    r: '4'
  }], ['circle', {
    cx: '18',
    cy: '12',
    r: '4'
  }], ['line', {
    x1: '6',
    y1: '16',
    x2: '18',
    y2: '16'
  }]]];
  var Voicemail$1 = Voicemail;

  var Volume1 = ['svg', defaultAttributes, [['polygon', {
    points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
  }], ['path', {
    d: 'M15.54 8.46a5 5 0 0 1 0 7.07'
  }]]];
  var Volume1$1 = Volume1;

  var Volume2 = ['svg', defaultAttributes, [['polygon', {
    points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
  }], ['path', {
    d: 'M15.54 8.46a5 5 0 0 1 0 7.07'
  }], ['path', {
    d: 'M19.07 4.93a10 10 0 0 1 0 14.14'
  }]]];
  var Volume2$1 = Volume2;

  var VolumeX = ['svg', defaultAttributes, [['polygon', {
    points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
  }], ['line', {
    x1: '22',
    y1: '9',
    x2: '16',
    y2: '15'
  }], ['line', {
    x1: '16',
    y1: '9',
    x2: '22',
    y2: '15'
  }]]];
  var VolumeX$1 = VolumeX;

  var Volume = ['svg', defaultAttributes, [['polygon', {
    points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5'
  }]]];
  var Volume$1 = Volume;

  var Wallet = ['svg', defaultAttributes, [['path', {
    d: 'M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4'
  }], ['path', {
    d: 'M4 6v12c0 1.1.9 2 2 2h14v-4'
  }], ['path', {
    d: 'M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z'
  }]]];
  var Wallet$1 = Wallet;

  var Wand2 = ['svg', defaultAttributes, [['path', {
    d: 'm21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z'
  }], ['path', {
    d: 'm14 7 3 3'
  }], ['path', {
    d: 'M5 6v4'
  }], ['path', {
    d: 'M19 14v4'
  }], ['path', {
    d: 'M10 2v2'
  }], ['path', {
    d: 'M7 8H3'
  }], ['path', {
    d: 'M21 16h-4'
  }], ['path', {
    d: 'M11 3H9'
  }]]];
  var Wand2$1 = Wand2;

  var Wand = ['svg', defaultAttributes, [['path', {
    d: 'M15 4V2'
  }], ['path', {
    d: 'M15 16v-2'
  }], ['path', {
    d: 'M8 9h2'
  }], ['path', {
    d: 'M20 9h2'
  }], ['path', {
    d: 'M17.8 11.8 19 13'
  }], ['path', {
    d: 'M15 9h0'
  }], ['path', {
    d: 'M17.8 6.2 19 5'
  }], ['path', {
    d: 'm3 21 9-9'
  }], ['path', {
    d: 'M12.2 6.2 11 5'
  }]]];
  var Wand$1 = Wand;

  var Watch = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '6'
  }], ['polyline', {
    points: '12 10 12 12 13 13'
  }], ['path', {
    d: 'm16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05'
  }], ['path', {
    d: 'm7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05'
  }]]];
  var Watch$1 = Watch;

  var Waves = ['svg', defaultAttributes, [['path', {
    d: 'M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1'
  }], ['path', {
    d: 'M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1'
  }], ['path', {
    d: 'M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1'
  }]]];
  var Waves$1 = Waves;

  var Webcam = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '10',
    r: '8'
  }], ['circle', {
    cx: '12',
    cy: '10',
    r: '3'
  }], ['path', {
    d: 'M7 22h10'
  }], ['path', {
    d: 'M12 22v-4'
  }]]];
  var Webcam$1 = Webcam;

  var Webhook = ['svg', defaultAttributes, [['path', {
    d: 'M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2'
  }], ['path', {
    d: 'm6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06'
  }], ['path', {
    d: 'm12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8'
  }]]];
  var Webhook$1 = Webhook;

  var WheatOff = ['svg', defaultAttributes, [['path', {
    d: 'm2 22 10-10'
  }], ['path', {
    d: 'm16 8-1.17 1.17'
  }], ['path', {
    d: 'M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z'
  }], ['path', {
    d: 'm8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97'
  }], ['path', {
    d: 'M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62'
  }], ['path', {
    d: 'M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z'
  }], ['path', {
    d: 'M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z'
  }], ['path', {
    d: 'm16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98'
  }], ['path', {
    d: 'M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var WheatOff$1 = WheatOff;

  var Wheat = ['svg', defaultAttributes, [['path', {
    d: 'M2 22 16 8'
  }], ['path', {
    d: 'M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z'
  }], ['path', {
    d: 'M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z'
  }], ['path', {
    d: 'M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z'
  }], ['path', {
    d: 'M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z'
  }], ['path', {
    d: 'M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z'
  }], ['path', {
    d: 'M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z'
  }], ['path', {
    d: 'M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z'
  }]]];
  var Wheat$1 = Wheat;

  var WifiOff = ['svg', defaultAttributes, [['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }], ['path', {
    d: 'M8.5 16.5a5 5 0 0 1 7 0'
  }], ['path', {
    d: 'M2 8.82a15 15 0 0 1 4.17-2.65'
  }], ['path', {
    d: 'M10.66 5c4.01-.36 8.14.9 11.34 3.76'
  }], ['path', {
    d: 'M16.85 11.25a10 10 0 0 1 2.22 1.68'
  }], ['path', {
    d: 'M5 13a10 10 0 0 1 5.24-2.76'
  }], ['line', {
    x1: '12',
    y1: '20',
    x2: '12.01',
    y2: '20'
  }]]];
  var WifiOff$1 = WifiOff;

  var Wifi = ['svg', defaultAttributes, [['path', {
    d: 'M5 13a10 10 0 0 1 14 0'
  }], ['path', {
    d: 'M8.5 16.5a5 5 0 0 1 7 0'
  }], ['path', {
    d: 'M2 8.82a15 15 0 0 1 20 0'
  }], ['line', {
    x1: '12',
    y1: '20',
    x2: '12.01',
    y2: '20'
  }]]];
  var Wifi$1 = Wifi;

  var Wind = ['svg', defaultAttributes, [['path', {
    d: 'M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2'
  }], ['path', {
    d: 'M9.6 4.6A2 2 0 1 1 11 8H2'
  }], ['path', {
    d: 'M12.6 19.4A2 2 0 1 0 14 16H2'
  }]]];
  var Wind$1 = Wind;

  var WineOff = ['svg', defaultAttributes, [['path', {
    d: 'M8 22h8'
  }], ['path', {
    d: 'M7 10h3m7 0h-1.343'
  }], ['path', {
    d: 'M12 15v7'
  }], ['path', {
    d: 'M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var WineOff$1 = WineOff;

  var Wine = ['svg', defaultAttributes, [['path', {
    d: 'M8 22h8'
  }], ['path', {
    d: 'M7 10h10'
  }], ['path', {
    d: 'M12 15v7'
  }], ['path', {
    d: 'M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z'
  }]]];
  var Wine$1 = Wine;

  var WrapText = ['svg', defaultAttributes, [['line', {
    x1: '3',
    y1: '6',
    x2: '21',
    y2: '6'
  }], ['path', {
    d: 'M3 12h15a3 3 0 1 1 0 6h-4'
  }], ['polyline', {
    points: '16 16 14 18 16 20'
  }], ['line', {
    x1: '3',
    y1: '18',
    x2: '10',
    y2: '18'
  }]]];
  var WrapText$1 = WrapText;

  var Wrench = ['svg', defaultAttributes, [['path', {
    d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
  }]]];
  var Wrench$1 = Wrench;

  var XCircle = ['svg', defaultAttributes, [['circle', {
    cx: '12',
    cy: '12',
    r: '10'
  }], ['line', {
    x1: '15',
    y1: '9',
    x2: '9',
    y2: '15'
  }], ['line', {
    x1: '9',
    y1: '9',
    x2: '15',
    y2: '15'
  }]]];
  var XCircle$1 = XCircle;

  var XOctagon = ['svg', defaultAttributes, [['polygon', {
    points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'
  }], ['line', {
    x1: '15',
    y1: '9',
    x2: '9',
    y2: '15'
  }], ['line', {
    x1: '9',
    y1: '9',
    x2: '15',
    y2: '15'
  }]]];
  var XOctagon$1 = XOctagon;

  var XSquare = ['svg', defaultAttributes, [['rect', {
    x: '3',
    y: '3',
    width: '18',
    height: '18',
    rx: '2',
    ry: '2'
  }], ['line', {
    x1: '9',
    y1: '9',
    x2: '15',
    y2: '15'
  }], ['line', {
    x1: '15',
    y1: '9',
    x2: '9',
    y2: '15'
  }]]];
  var XSquare$1 = XSquare;

  var X = ['svg', defaultAttributes, [['line', {
    x1: '18',
    y1: '6',
    x2: '6',
    y2: '18'
  }], ['line', {
    x1: '6',
    y1: '6',
    x2: '18',
    y2: '18'
  }]]];
  var X$1 = X;

  var Youtube = ['svg', defaultAttributes, [['path', {
    d: 'M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z'
  }], ['polygon', {
    points: '10 15 15 12 10 9'
  }]]];
  var Youtube$1 = Youtube;

  var ZapOff = ['svg', defaultAttributes, [['polyline', {
    points: '12.41 6.75 13 2 10.57 4.92'
  }], ['polyline', {
    points: '18.57 12.91 21 10 15.66 10'
  }], ['polyline', {
    points: '8 8 3 14 12 14 11 22 16 16'
  }], ['line', {
    x1: '2',
    y1: '2',
    x2: '22',
    y2: '22'
  }]]];
  var ZapOff$1 = ZapOff;

  var Zap = ['svg', defaultAttributes, [['polygon', {
    points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2'
  }]]];
  var Zap$1 = Zap;

  var ZoomIn = ['svg', defaultAttributes, [['circle', {
    cx: '11',
    cy: '11',
    r: '8'
  }], ['line', {
    x1: '21',
    y1: '21',
    x2: '16.65',
    y2: '16.65'
  }], ['line', {
    x1: '11',
    y1: '8',
    x2: '11',
    y2: '14'
  }], ['line', {
    x1: '8',
    y1: '11',
    x2: '14',
    y2: '11'
  }]]];
  var ZoomIn$1 = ZoomIn;

  var ZoomOut = ['svg', defaultAttributes, [['circle', {
    cx: '11',
    cy: '11',
    r: '8'
  }], ['line', {
    x1: '21',
    y1: '21',
    x2: '16.65',
    y2: '16.65'
  }], ['line', {
    x1: '8',
    y1: '11',
    x2: '14',
    y2: '11'
  }]]];
  var ZoomOut$1 = ZoomOut;

  var allIcons = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Accessibility: Accessibility$1,
    Activity: Activity$1,
    AirVent: AirVent$1,
    Airplay: Airplay$1,
    AlarmCheck: AlarmCheck$1,
    AlarmClockOff: AlarmClockOff$1,
    AlarmClock: AlarmClock$1,
    AlarmMinus: AlarmMinus$1,
    AlarmPlus: AlarmPlus$1,
    Album: Album$1,
    AlertCircle: AlertCircle$1,
    AlertOctagon: AlertOctagon$1,
    AlertTriangle: AlertTriangle$1,
    AlignCenterHorizontal: AlignCenterHorizontal$1,
    AlignCenterVertical: AlignCenterVertical$1,
    AlignCenter: AlignCenter$1,
    AlignEndHorizontal: AlignEndHorizontal$1,
    AlignEndVertical: AlignEndVertical$1,
    AlignHorizontalDistributeCenter: AlignHorizontalDistributeCenter$1,
    AlignHorizontalDistributeEnd: AlignHorizontalDistributeEnd$1,
    AlignHorizontalDistributeStart: AlignHorizontalDistributeStart$1,
    AlignHorizontalJustifyCenter: AlignHorizontalJustifyCenter$1,
    AlignHorizontalJustifyEnd: AlignHorizontalJustifyEnd$1,
    AlignHorizontalJustifyStart: AlignHorizontalJustifyStart$1,
    AlignHorizontalSpaceAround: AlignHorizontalSpaceAround$1,
    AlignHorizontalSpaceBetween: AlignHorizontalSpaceBetween$1,
    AlignJustify: AlignJustify$1,
    AlignLeft: AlignLeft$1,
    AlignRight: AlignRight$1,
    AlignStartHorizontal: AlignStartHorizontal$1,
    AlignStartVertical: AlignStartVertical$1,
    AlignVerticalDistributeCenter: AlignVerticalDistributeCenter$1,
    AlignVerticalDistributeEnd: AlignVerticalDistributeEnd$1,
    AlignVerticalDistributeStart: AlignVerticalDistributeStart$1,
    AlignVerticalJustifyCenter: AlignVerticalJustifyCenter$1,
    AlignVerticalJustifyEnd: AlignVerticalJustifyEnd$1,
    AlignVerticalJustifyStart: AlignVerticalJustifyStart$1,
    AlignVerticalSpaceAround: AlignVerticalSpaceAround$1,
    AlignVerticalSpaceBetween: AlignVerticalSpaceBetween$1,
    Anchor: Anchor$1,
    Angry: Angry$1,
    Annoyed: Annoyed$1,
    Aperture: Aperture$1,
    Apple: Apple$1,
    ArchiveRestore: ArchiveRestore$1,
    Archive: Archive$1,
    Armchair: Armchair$1,
    ArrowBigDown: ArrowBigDown$1,
    ArrowBigLeft: ArrowBigLeft$1,
    ArrowBigRight: ArrowBigRight$1,
    ArrowBigUp: ArrowBigUp$1,
    ArrowDownCircle: ArrowDownCircle$1,
    ArrowDownLeft: ArrowDownLeft$1,
    ArrowDownRight: ArrowDownRight$1,
    ArrowDown: ArrowDown$1,
    ArrowLeftCircle: ArrowLeftCircle$1,
    ArrowLeftRight: ArrowLeftRight$1,
    ArrowLeft: ArrowLeft$1,
    ArrowRightCircle: ArrowRightCircle$1,
    ArrowRight: ArrowRight$1,
    ArrowUpCircle: ArrowUpCircle$1,
    ArrowUpDown: ArrowUpDown$1,
    ArrowUpLeft: ArrowUpLeft$1,
    ArrowUpRight: ArrowUpRight$1,
    ArrowUp: ArrowUp$1,
    Asterisk: Asterisk$1,
    AtSign: AtSign$1,
    Award: Award$1,
    Axe: Axe$1,
    Axis3d: Axis3d$1,
    Baby: Baby$1,
    Backpack: Backpack$1,
    BaggageClaim: BaggageClaim$1,
    Banana: Banana$1,
    Banknote: Banknote$1,
    BarChart2: BarChart2$1,
    BarChart3: BarChart3$1,
    BarChart4: BarChart4$1,
    BarChartHorizontal: BarChartHorizontal$1,
    BarChart: BarChart$1,
    Baseline: Baseline$1,
    Bath: Bath$1,
    BatteryCharging: BatteryCharging$1,
    BatteryFull: BatteryFull$1,
    BatteryLow: BatteryLow$1,
    BatteryMedium: BatteryMedium$1,
    Battery: Battery$1,
    Beaker: Beaker$1,
    BeanOff: BeanOff$1,
    Bean: Bean$1,
    BedDouble: BedDouble$1,
    BedSingle: BedSingle$1,
    Bed: Bed$1,
    Beer: Beer$1,
    BellMinus: BellMinus$1,
    BellOff: BellOff$1,
    BellPlus: BellPlus$1,
    BellRing: BellRing$1,
    Bell: Bell$1,
    Bike: Bike$1,
    Binary: Binary$1,
    Bitcoin: Bitcoin$1,
    BluetoothConnected: BluetoothConnected$1,
    BluetoothOff: BluetoothOff$1,
    BluetoothSearching: BluetoothSearching$1,
    Bluetooth: Bluetooth$1,
    Bold: Bold$1,
    Bomb: Bomb$1,
    Bone: Bone$1,
    BookOpenCheck: BookOpenCheck$1,
    BookOpen: BookOpen$1,
    Book: Book$1,
    BookmarkMinus: BookmarkMinus$1,
    BookmarkPlus: BookmarkPlus$1,
    Bookmark: Bookmark$1,
    Bot: Bot$1,
    BoxSelect: BoxSelect$1,
    Box: Box$1,
    Boxes: Boxes$1,
    Briefcase: Briefcase$1,
    Brush: Brush$1,
    Bug: Bug$1,
    Building2: Building2$1,
    Building: Building$1,
    Bus: Bus$1,
    Cake: Cake$1,
    Calculator: Calculator$1,
    CalendarCheck2: CalendarCheck2$1,
    CalendarCheck: CalendarCheck$1,
    CalendarClock: CalendarClock$1,
    CalendarDays: CalendarDays$1,
    CalendarHeart: CalendarHeart$1,
    CalendarMinus: CalendarMinus$1,
    CalendarOff: CalendarOff$1,
    CalendarPlus: CalendarPlus$1,
    CalendarRange: CalendarRange$1,
    CalendarSearch: CalendarSearch$1,
    CalendarX2: CalendarX2$1,
    CalendarX: CalendarX$1,
    Calendar: Calendar$1,
    CameraOff: CameraOff$1,
    Camera: Camera$1,
    CandyOff: CandyOff$1,
    Candy: Candy$1,
    Car: Car$1,
    Carrot: Carrot$1,
    Cast: Cast$1,
    Cat: Cat$1,
    CheckCheck: CheckCheck$1,
    CheckCircle2: CheckCircle2$1,
    CheckCircle: CheckCircle$1,
    CheckSquare: CheckSquare$1,
    Check: Check$1,
    ChefHat: ChefHat$1,
    Cherry: Cherry$1,
    ChevronDown: ChevronDown$1,
    ChevronFirst: ChevronFirst$1,
    ChevronLast: ChevronLast$1,
    ChevronLeft: ChevronLeft$1,
    ChevronRight: ChevronRight$1,
    ChevronUp: ChevronUp$1,
    ChevronsDownUp: ChevronsDownUp$1,
    ChevronsDown: ChevronsDown$1,
    ChevronsLeftRight: ChevronsLeftRight$1,
    ChevronsLeft: ChevronsLeft$1,
    ChevronsRightLeft: ChevronsRightLeft$1,
    ChevronsRight: ChevronsRight$1,
    ChevronsUpDown: ChevronsUpDown$1,
    ChevronsUp: ChevronsUp$1,
    Chrome: Chrome$1,
    CigaretteOff: CigaretteOff$1,
    Cigarette: Cigarette$1,
    CircleDot: CircleDot$1,
    CircleEllipsis: CircleEllipsis$1,
    CircleSlashed: CircleSlashed$1,
    Circle: Circle$1,
    Citrus: Citrus$1,
    Clapperboard: Clapperboard$1,
    ClipboardCheck: ClipboardCheck$1,
    ClipboardCopy: ClipboardCopy$1,
    ClipboardEdit: ClipboardEdit$1,
    ClipboardList: ClipboardList$1,
    ClipboardSignature: ClipboardSignature$1,
    ClipboardType: ClipboardType$1,
    ClipboardX: ClipboardX$1,
    Clipboard: Clipboard$1,
    Clock1: Clock1$1,
    Clock10: Clock10$1,
    Clock11: Clock11$1,
    Clock12: Clock12$1,
    Clock2: Clock2$1,
    Clock3: Clock3$1,
    Clock4: Clock4$1,
    Clock5: Clock5$1,
    Clock6: Clock6$1,
    Clock7: Clock7$1,
    Clock8: Clock8$1,
    Clock9: Clock9$1,
    Clock: Clock$1,
    CloudCog: CloudCog$1,
    CloudDrizzle: CloudDrizzle$1,
    CloudFog: CloudFog$1,
    CloudHail: CloudHail$1,
    CloudLightning: CloudLightning$1,
    CloudMoonRain: CloudMoonRain$1,
    CloudMoon: CloudMoon$1,
    CloudOff: CloudOff$1,
    CloudRainWind: CloudRainWind$1,
    CloudRain: CloudRain$1,
    CloudSnow: CloudSnow$1,
    CloudSunRain: CloudSunRain$1,
    CloudSun: CloudSun$1,
    Cloud: Cloud$1,
    Cloudy: Cloudy$1,
    Clover: Clover$1,
    Code2: Code2$1,
    Code: Code$1,
    Codepen: Codepen$1,
    Codesandbox: Codesandbox$1,
    Coffee: Coffee$1,
    Cog: Cog$1,
    Coins: Coins$1,
    Columns: Columns$1,
    Command: Command$1,
    Compass: Compass$1,
    Component: Component$1,
    ConciergeBell: ConciergeBell$1,
    Contact: Contact$1,
    Contrast: Contrast$1,
    Cookie: Cookie$1,
    Copy: Copy$1,
    Copyleft: Copyleft$1,
    Copyright: Copyright$1,
    CornerDownLeft: CornerDownLeft$1,
    CornerDownRight: CornerDownRight$1,
    CornerLeftDown: CornerLeftDown$1,
    CornerLeftUp: CornerLeftUp$1,
    CornerRightDown: CornerRightDown$1,
    CornerRightUp: CornerRightUp$1,
    CornerUpLeft: CornerUpLeft$1,
    CornerUpRight: CornerUpRight$1,
    Cpu: Cpu$1,
    CreditCard: CreditCard$1,
    Croissant: Croissant$1,
    Crop: Crop$1,
    Cross: Cross$1,
    Crosshair: Crosshair$1,
    Crown: Crown$1,
    CupSoda: CupSoda$1,
    CurlyBraces: CurlyBraces$1,
    Currency: Currency$1,
    Database: Database$1,
    Delete: Delete$1,
    Diamond: Diamond$1,
    Dice1: Dice1$1,
    Dice2: Dice2$1,
    Dice3: Dice3$1,
    Dice4: Dice4$1,
    Dice5: Dice5$1,
    Dice6: Dice6$1,
    Dices: Dices$1,
    Diff: Diff$1,
    Disc: Disc$1,
    DivideCircle: DivideCircle$1,
    DivideSquare: DivideSquare$1,
    Divide: Divide$1,
    DnaOff: DnaOff$1,
    Dna: Dna$1,
    Dog: Dog$1,
    DollarSign: DollarSign$1,
    DownloadCloud: DownloadCloud$1,
    Download: Download$1,
    Dribbble: Dribbble$1,
    Droplet: Droplet$1,
    Droplets: Droplets$1,
    Drumstick: Drumstick$1,
    Dumbbell: Dumbbell$1,
    EarOff: EarOff$1,
    Ear: Ear$1,
    Edit2: Edit2$1,
    Edit3: Edit3$1,
    Edit: Edit$1,
    EggFried: EggFried$1,
    EggOff: EggOff$1,
    Egg: Egg$1,
    EqualNot: EqualNot$1,
    Equal: Equal$1,
    Eraser: Eraser$1,
    Euro: Euro$1,
    Expand: Expand$1,
    ExternalLink: ExternalLink$1,
    EyeOff: EyeOff$1,
    Eye: Eye$1,
    Facebook: Facebook$1,
    Factory: Factory$1,
    Fan: Fan$1,
    FastForward: FastForward$1,
    Feather: Feather$1,
    Figma: Figma$1,
    FileArchive: FileArchive$1,
    FileAudio2: FileAudio2$1,
    FileAudio: FileAudio$1,
    FileAxis3d: FileAxis3d$1,
    FileBadge2: FileBadge2$1,
    FileBadge: FileBadge$1,
    FileBarChart2: FileBarChart2$1,
    FileBarChart: FileBarChart$1,
    FileBox: FileBox$1,
    FileCheck2: FileCheck2$1,
    FileCheck: FileCheck$1,
    FileClock: FileClock$1,
    FileCode: FileCode$1,
    FileCog2: FileCog2$1,
    FileCog: FileCog$1,
    FileDiff: FileDiff$1,
    FileDigit: FileDigit$1,
    FileDown: FileDown$1,
    FileEdit: FileEdit$1,
    FileHeart: FileHeart$1,
    FileImage: FileImage$1,
    FileInput: FileInput$1,
    FileJson2: FileJson2$1,
    FileJson: FileJson$1,
    FileKey2: FileKey2$1,
    FileKey: FileKey$1,
    FileLineChart: FileLineChart$1,
    FileLock2: FileLock2$1,
    FileLock: FileLock$1,
    FileMinus2: FileMinus2$1,
    FileMinus: FileMinus$1,
    FileOutput: FileOutput$1,
    FilePieChart: FilePieChart$1,
    FilePlus2: FilePlus2$1,
    FilePlus: FilePlus$1,
    FileQuestion: FileQuestion$1,
    FileScan: FileScan$1,
    FileSearch2: FileSearch2$1,
    FileSearch: FileSearch$1,
    FileSignature: FileSignature$1,
    FileSpreadsheet: FileSpreadsheet$1,
    FileSymlink: FileSymlink$1,
    FileTerminal: FileTerminal$1,
    FileText: FileText$1,
    FileType2: FileType2$1,
    FileType: FileType$1,
    FileUp: FileUp$1,
    FileVideo2: FileVideo2$1,
    FileVideo: FileVideo$1,
    FileVolume2: FileVolume2$1,
    FileVolume: FileVolume$1,
    FileWarning: FileWarning$1,
    FileX2: FileX2$1,
    FileX: FileX$1,
    File: File$1,
    Files: Files$1,
    Film: Film$1,
    Filter: Filter$1,
    Fingerprint: Fingerprint$1,
    FlagOff: FlagOff$1,
    FlagTriangleLeft: FlagTriangleLeft$1,
    FlagTriangleRight: FlagTriangleRight$1,
    Flag: Flag$1,
    Flame: Flame$1,
    FlashlightOff: FlashlightOff$1,
    Flashlight: Flashlight$1,
    FlaskConicalOff: FlaskConicalOff$1,
    FlaskConical: FlaskConical$1,
    FlaskRound: FlaskRound$1,
    FlipHorizontal2: FlipHorizontal2$1,
    FlipHorizontal: FlipHorizontal$1,
    FlipVertical2: FlipVertical2$1,
    FlipVertical: FlipVertical$1,
    Flower2: Flower2$1,
    Flower: Flower$1,
    Focus: Focus$1,
    FolderArchive: FolderArchive$1,
    FolderCheck: FolderCheck$1,
    FolderClock: FolderClock$1,
    FolderClosed: FolderClosed$1,
    FolderCog2: FolderCog2$1,
    FolderCog: FolderCog$1,
    FolderDown: FolderDown$1,
    FolderEdit: FolderEdit$1,
    FolderHeart: FolderHeart$1,
    FolderInput: FolderInput$1,
    FolderKey: FolderKey$1,
    FolderLock: FolderLock$1,
    FolderMinus: FolderMinus$1,
    FolderOpen: FolderOpen$1,
    FolderOutput: FolderOutput$1,
    FolderPlus: FolderPlus$1,
    FolderSearch2: FolderSearch2$1,
    FolderSearch: FolderSearch$1,
    FolderSymlink: FolderSymlink$1,
    FolderTree: FolderTree$1,
    FolderUp: FolderUp$1,
    FolderX: FolderX$1,
    Folder: Folder$1,
    Folders: Folders$1,
    FormInput: FormInput$1,
    Forward: Forward$1,
    Frame: Frame$1,
    Framer: Framer$1,
    Frown: Frown$1,
    Fuel: Fuel$1,
    FunctionSquare: FunctionSquare$1,
    Gamepad2: Gamepad2$1,
    Gamepad: Gamepad$1,
    Gauge: Gauge$1,
    Gavel: Gavel$1,
    Gem: Gem$1,
    Ghost: Ghost$1,
    Gift: Gift$1,
    GitBranchPlus: GitBranchPlus$1,
    GitBranch: GitBranch$1,
    GitCommit: GitCommit$1,
    GitCompare: GitCompare$1,
    GitFork: GitFork$1,
    GitMerge: GitMerge$1,
    GitPullRequestClosed: GitPullRequestClosed$1,
    GitPullRequestDraft: GitPullRequestDraft$1,
    GitPullRequest: GitPullRequest$1,
    Github: Github$1,
    Gitlab: Gitlab$1,
    GlassWater: GlassWater$1,
    Glasses: Glasses$1,
    Globe2: Globe2$1,
    Globe: Globe$1,
    Grab: Grab$1,
    GraduationCap: GraduationCap$1,
    Grape: Grape$1,
    Grid: Grid$1,
    GripHorizontal: GripHorizontal$1,
    GripVertical: GripVertical$1,
    Hammer: Hammer$1,
    HandMetal: HandMetal$1,
    Hand: Hand$1,
    HardDrive: HardDrive$1,
    HardHat: HardHat$1,
    Hash: Hash$1,
    Haze: Haze$1,
    Heading1: Heading1$1,
    Heading2: Heading2$1,
    Heading3: Heading3$1,
    Heading4: Heading4$1,
    Heading5: Heading5$1,
    Heading6: Heading6$1,
    Heading: Heading$1,
    Headphones: Headphones$1,
    HeartCrack: HeartCrack$1,
    HeartHandshake: HeartHandshake$1,
    HeartOff: HeartOff$1,
    HeartPulse: HeartPulse$1,
    Heart: Heart$1,
    HelpCircle: HelpCircle$1,
    Hexagon: Hexagon$1,
    Highlighter: Highlighter$1,
    History: History$1,
    Home: Home$1,
    HopOff: HopOff$1,
    Hop: Hop$1,
    Hourglass: Hourglass$1,
    IceCream: IceCream$1,
    ImageMinus: ImageMinus$1,
    ImageOff: ImageOff$1,
    ImagePlus: ImagePlus$1,
    Image: Image$1,
    Import: Import$1,
    Inbox: Inbox$1,
    Indent: Indent$1,
    IndianRupee: IndianRupee$1,
    Infinity: Infinity$1,
    Info: Info$1,
    Inspect: Inspect$1,
    Instagram: Instagram$1,
    Italic: Italic$1,
    JapaneseYen: JapaneseYen$1,
    Joystick: Joystick$1,
    Key: Key$1,
    Keyboard: Keyboard$1,
    LampCeiling: LampCeiling$1,
    LampDesk: LampDesk$1,
    LampFloor: LampFloor$1,
    LampWallDown: LampWallDown$1,
    LampWallUp: LampWallUp$1,
    Lamp: Lamp$1,
    Landmark: Landmark$1,
    Languages: Languages$1,
    Laptop2: Laptop2$1,
    Laptop: Laptop$1,
    LassoSelect: LassoSelect$1,
    Lasso: Lasso$1,
    Laugh: Laugh$1,
    Layers: Layers$1,
    LayoutDashboard: LayoutDashboard$1,
    LayoutGrid: LayoutGrid$1,
    LayoutList: LayoutList$1,
    LayoutTemplate: LayoutTemplate$1,
    Layout: Layout$1,
    Leaf: Leaf$1,
    Library: Library$1,
    LifeBuoy: LifeBuoy$1,
    LightbulbOff: LightbulbOff$1,
    Lightbulb: Lightbulb$1,
    LineChart: LineChart$1,
    Link2Off: Link2Off$1,
    Link2: Link2$1,
    Link: Link$1,
    Linkedin: Linkedin$1,
    ListChecks: ListChecks$1,
    ListEnd: ListEnd$1,
    ListMinus: ListMinus$1,
    ListMusic: ListMusic$1,
    ListOrdered: ListOrdered$1,
    ListPlus: ListPlus$1,
    ListStart: ListStart$1,
    ListVideo: ListVideo$1,
    ListX: ListX$1,
    List: List$1,
    Loader2: Loader2$1,
    Loader: Loader$1,
    LocateFixed: LocateFixed$1,
    LocateOff: LocateOff$1,
    Locate: Locate$1,
    Lock: Lock$1,
    LogIn: LogIn$1,
    LogOut: LogOut$1,
    Luggage: Luggage$1,
    Magnet: Magnet$1,
    MailCheck: MailCheck$1,
    MailMinus: MailMinus$1,
    MailOpen: MailOpen$1,
    MailPlus: MailPlus$1,
    MailQuestion: MailQuestion$1,
    MailSearch: MailSearch$1,
    MailWarning: MailWarning$1,
    MailX: MailX$1,
    Mail: Mail$1,
    Mails: Mails$1,
    MapPinOff: MapPinOff$1,
    MapPin: MapPin$1,
    Map: Map$1,
    Martini: Martini$1,
    Maximize2: Maximize2$1,
    Maximize: Maximize$1,
    Medal: Medal$1,
    MegaphoneOff: MegaphoneOff$1,
    Megaphone: Megaphone$1,
    Meh: Meh$1,
    Menu: Menu$1,
    MessageCircle: MessageCircle$1,
    MessageSquare: MessageSquare$1,
    Mic2: Mic2$1,
    MicOff: MicOff$1,
    Mic: Mic$1,
    Microscope: Microscope$1,
    Microwave: Microwave$1,
    Milestone: Milestone$1,
    MilkOff: MilkOff$1,
    Milk: Milk$1,
    Minimize2: Minimize2$1,
    Minimize: Minimize$1,
    MinusCircle: MinusCircle$1,
    MinusSquare: MinusSquare$1,
    Minus: Minus$1,
    MonitorOff: MonitorOff$1,
    MonitorSmartphone: MonitorSmartphone$1,
    MonitorSpeaker: MonitorSpeaker$1,
    Monitor: Monitor$1,
    Moon: Moon$1,
    MoreHorizontal: MoreHorizontal$1,
    MoreVertical: MoreVertical$1,
    MountainSnow: MountainSnow$1,
    Mountain: Mountain$1,
    MousePointer2: MousePointer2$1,
    MousePointerClick: MousePointerClick$1,
    MousePointer: MousePointer$1,
    Mouse: Mouse$1,
    Move3d: Move3d$1,
    MoveDiagonal2: MoveDiagonal2$1,
    MoveDiagonal: MoveDiagonal$1,
    MoveHorizontal: MoveHorizontal$1,
    MoveVertical: MoveVertical$1,
    Move: Move$1,
    Music2: Music2$1,
    Music3: Music3$1,
    Music4: Music4$1,
    Music: Music$1,
    Navigation2Off: Navigation2Off$1,
    Navigation2: Navigation2$1,
    NavigationOff: NavigationOff$1,
    Navigation: Navigation$1,
    Network: Network$1,
    Newspaper: Newspaper$1,
    NutOff: NutOff$1,
    Nut: Nut$1,
    Octagon: Octagon$1,
    Option: Option$1,
    Outdent: Outdent$1,
    Package2: Package2$1,
    PackageCheck: PackageCheck$1,
    PackageMinus: PackageMinus$1,
    PackageOpen: PackageOpen$1,
    PackagePlus: PackagePlus$1,
    PackageSearch: PackageSearch$1,
    PackageX: PackageX$1,
    Package: Package$1,
    PaintBucket: PaintBucket$1,
    Paintbrush2: Paintbrush2$1,
    Paintbrush: Paintbrush$1,
    Palette: Palette$1,
    Palmtree: Palmtree$1,
    Paperclip: Paperclip$1,
    PartyPopper: PartyPopper$1,
    PauseCircle: PauseCircle$1,
    PauseOctagon: PauseOctagon$1,
    Pause: Pause$1,
    PenTool: PenTool$1,
    Pencil: Pencil$1,
    Percent: Percent$1,
    PersonStanding: PersonStanding$1,
    PhoneCall: PhoneCall$1,
    PhoneForwarded: PhoneForwarded$1,
    PhoneIncoming: PhoneIncoming$1,
    PhoneMissed: PhoneMissed$1,
    PhoneOff: PhoneOff$1,
    PhoneOutgoing: PhoneOutgoing$1,
    Phone: Phone$1,
    PieChart: PieChart$1,
    PiggyBank: PiggyBank$1,
    PinOff: PinOff$1,
    Pin: Pin$1,
    Pipette: Pipette$1,
    Pizza: Pizza$1,
    Plane: Plane$1,
    PlayCircle: PlayCircle$1,
    Play: Play$1,
    Plug2: Plug2$1,
    PlugZap: PlugZap$1,
    Plug: Plug$1,
    PlusCircle: PlusCircle$1,
    PlusSquare: PlusSquare$1,
    Plus: Plus$1,
    Pocket: Pocket$1,
    Podcast: Podcast$1,
    Pointer: Pointer$1,
    PoundSterling: PoundSterling$1,
    PowerOff: PowerOff$1,
    Power: Power$1,
    Printer: Printer$1,
    Puzzle: Puzzle$1,
    QrCode: QrCode$1,
    Quote: Quote$1,
    RadioReceiver: RadioReceiver$1,
    Radio: Radio$1,
    RectangleHorizontal: RectangleHorizontal$1,
    RectangleVertical: RectangleVertical$1,
    Recycle: Recycle$1,
    Redo2: Redo2$1,
    Redo: Redo$1,
    RefreshCcw: RefreshCcw$1,
    RefreshCw: RefreshCw$1,
    Refrigerator: Refrigerator$1,
    Regex: Regex$1,
    Repeat1: Repeat1$1,
    Repeat: Repeat$1,
    ReplyAll: ReplyAll$1,
    Reply: Reply$1,
    Rewind: Rewind$1,
    Rocket: Rocket$1,
    RockingChair: RockingChair$1,
    Rotate3d: Rotate3d$1,
    RotateCcw: RotateCcw$1,
    RotateCw: RotateCw$1,
    Rss: Rss$1,
    Ruler: Ruler$1,
    RussianRuble: RussianRuble$1,
    Sailboat: Sailboat$1,
    Save: Save$1,
    Scale3d: Scale3d$1,
    Scale: Scale$1,
    Scaling: Scaling$1,
    ScanFace: ScanFace$1,
    ScanLine: ScanLine$1,
    Scan: Scan$1,
    Scissors: Scissors$1,
    ScreenShareOff: ScreenShareOff$1,
    ScreenShare: ScreenShare$1,
    Scroll: Scroll$1,
    Search: Search$1,
    Send: Send$1,
    SeparatorHorizontal: SeparatorHorizontal$1,
    SeparatorVertical: SeparatorVertical$1,
    ServerCog: ServerCog$1,
    ServerCrash: ServerCrash$1,
    ServerOff: ServerOff$1,
    Server: Server$1,
    Settings2: Settings2$1,
    Settings: Settings$1,
    Share2: Share2$1,
    Share: Share$1,
    Sheet: Sheet$1,
    ShieldAlert: ShieldAlert$1,
    ShieldCheck: ShieldCheck$1,
    ShieldClose: ShieldClose$1,
    ShieldOff: ShieldOff$1,
    Shield: Shield$1,
    Shirt: Shirt$1,
    ShoppingBag: ShoppingBag$1,
    ShoppingCart: ShoppingCart$1,
    Shovel: Shovel$1,
    ShowerHead: ShowerHead$1,
    Shrink: Shrink$1,
    Shrub: Shrub$1,
    Shuffle: Shuffle$1,
    SidebarClose: SidebarClose$1,
    SidebarOpen: SidebarOpen$1,
    Sidebar: Sidebar$1,
    Sigma: Sigma$1,
    SignalHigh: SignalHigh$1,
    SignalLow: SignalLow$1,
    SignalMedium: SignalMedium$1,
    SignalZero: SignalZero$1,
    Signal: Signal$1,
    Siren: Siren$1,
    SkipBack: SkipBack$1,
    SkipForward: SkipForward$1,
    Skull: Skull$1,
    Slack: Slack$1,
    Slash: Slash$1,
    Slice: Slice$1,
    SlidersHorizontal: SlidersHorizontal$1,
    Sliders: Sliders$1,
    SmartphoneCharging: SmartphoneCharging$1,
    Smartphone: Smartphone$1,
    SmilePlus: SmilePlus$1,
    Smile: Smile$1,
    Snowflake: Snowflake$1,
    Sofa: Sofa$1,
    SortAsc: SortAsc$1,
    SortDesc: SortDesc$1,
    Speaker: Speaker$1,
    Spline: Spline$1,
    Sprout: Sprout$1,
    Square: Square$1,
    StarHalf: StarHalf$1,
    StarOff: StarOff$1,
    Star: Star$1,
    Stethoscope: Stethoscope$1,
    Sticker: Sticker$1,
    StickyNote: StickyNote$1,
    StopCircle: StopCircle$1,
    StretchHorizontal: StretchHorizontal$1,
    StretchVertical: StretchVertical$1,
    Strikethrough: Strikethrough$1,
    Subscript: Subscript$1,
    SunDim: SunDim$1,
    SunMedium: SunMedium$1,
    SunMoon: SunMoon$1,
    SunSnow: SunSnow$1,
    Sun: Sun$1,
    Sunrise: Sunrise$1,
    Sunset: Sunset$1,
    Superscript: Superscript$1,
    SwissFranc: SwissFranc$1,
    SwitchCamera: SwitchCamera$1,
    Sword: Sword$1,
    Swords: Swords$1,
    Syringe: Syringe$1,
    Table2: Table2$1,
    Table: Table$1,
    Tablet: Tablet$1,
    Tag: Tag$1,
    Tags: Tags$1,
    Target: Target$1,
    Tent: Tent$1,
    TerminalSquare: TerminalSquare$1,
    Terminal: Terminal$1,
    TextCursorInput: TextCursorInput$1,
    TextCursor: TextCursor$1,
    ThermometerSnowflake: ThermometerSnowflake$1,
    ThermometerSun: ThermometerSun$1,
    Thermometer: Thermometer$1,
    ThumbsDown: ThumbsDown$1,
    ThumbsUp: ThumbsUp$1,
    Ticket: Ticket$1,
    TimerOff: TimerOff$1,
    TimerReset: TimerReset$1,
    Timer: Timer$1,
    ToggleLeft: ToggleLeft$1,
    ToggleRight: ToggleRight$1,
    Tornado: Tornado$1,
    ToyBrick: ToyBrick$1,
    Train: Train$1,
    Trash2: Trash2$1,
    Trash: Trash$1,
    TreeDeciduous: TreeDeciduous$1,
    TreePine: TreePine$1,
    Trees: Trees$1,
    Trello: Trello$1,
    TrendingDown: TrendingDown$1,
    TrendingUp: TrendingUp$1,
    Triangle: Triangle$1,
    Trophy: Trophy$1,
    Truck: Truck$1,
    Tv2: Tv2$1,
    Tv: Tv$1,
    Twitch: Twitch$1,
    Twitter: Twitter$1,
    Type: Type$1,
    Umbrella: Umbrella$1,
    Underline: Underline$1,
    Undo2: Undo2$1,
    Undo: Undo$1,
    Unlink2: Unlink2$1,
    Unlink: Unlink$1,
    Unlock: Unlock$1,
    UploadCloud: UploadCloud$1,
    Upload: Upload$1,
    Usb: Usb$1,
    UserCheck: UserCheck$1,
    UserCog: UserCog$1,
    UserMinus: UserMinus$1,
    UserPlus: UserPlus$1,
    UserX: UserX$1,
    User: User$1,
    Users: Users$1,
    UtensilsCrossed: UtensilsCrossed$1,
    Utensils: Utensils$1,
    Vegan: Vegan$1,
    VenetianMask: VenetianMask$1,
    Verified: Verified$1,
    VibrateOff: VibrateOff$1,
    Vibrate: Vibrate$1,
    VideoOff: VideoOff$1,
    Video: Video$1,
    View: View$1,
    Voicemail: Voicemail$1,
    Volume1: Volume1$1,
    Volume2: Volume2$1,
    VolumeX: VolumeX$1,
    Volume: Volume$1,
    Wallet: Wallet$1,
    Wand2: Wand2$1,
    Wand: Wand$1,
    Watch: Watch$1,
    Waves: Waves$1,
    Webcam: Webcam$1,
    Webhook: Webhook$1,
    WheatOff: WheatOff$1,
    Wheat: Wheat$1,
    WifiOff: WifiOff$1,
    Wifi: Wifi$1,
    Wind: Wind$1,
    WineOff: WineOff$1,
    Wine: Wine$1,
    WrapText: WrapText$1,
    Wrench: Wrench$1,
    XCircle: XCircle$1,
    XOctagon: XOctagon$1,
    XSquare: XSquare$1,
    X: X$1,
    Youtube: Youtube$1,
    ZapOff: ZapOff$1,
    Zap: Zap$1,
    ZoomIn: ZoomIn$1,
    ZoomOut: ZoomOut$1
  });

  /**
   * Replaces all elements with matching nameAttr with the defined icons
   * @param {{ icons?: object, nameAttr?: string, attrs?: object }} options
   */
  var createIcons = function createIcons(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$icons = _ref.icons,
      icons = _ref$icons === void 0 ? allIcons : _ref$icons,
      _ref$nameAttr = _ref.nameAttr,
      nameAttr = _ref$nameAttr === void 0 ? 'icon-name' : _ref$nameAttr,
      _ref$attrs = _ref.attrs,
      attrs = _ref$attrs === void 0 ? {} : _ref$attrs;
    if (!Object.values(icons).length) {
      throw new Error("Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`");
    }
    if (typeof document === 'undefined') {
      throw new Error('`createIcons()` only works in a browser environment.');
    }
    var elementsToReplace = document.querySelectorAll("[" + nameAttr + "]");
    Array.from(elementsToReplace).forEach(function (element) {
      return replaceElement(element, {
        nameAttr: nameAttr,
        icons: icons,
        attrs: attrs
      });
    });
  };

  exports.Accessibility = Accessibility$1;
  exports.Activity = Activity$1;
  exports.AirVent = AirVent$1;
  exports.Airplay = Airplay$1;
  exports.AlarmCheck = AlarmCheck$1;
  exports.AlarmClock = AlarmClock$1;
  exports.AlarmClockOff = AlarmClockOff$1;
  exports.AlarmMinus = AlarmMinus$1;
  exports.AlarmPlus = AlarmPlus$1;
  exports.Album = Album$1;
  exports.AlertCircle = AlertCircle$1;
  exports.AlertOctagon = AlertOctagon$1;
  exports.AlertTriangle = AlertTriangle$1;
  exports.AlignCenter = AlignCenter$1;
  exports.AlignCenterHorizontal = AlignCenterHorizontal$1;
  exports.AlignCenterVertical = AlignCenterVertical$1;
  exports.AlignEndHorizontal = AlignEndHorizontal$1;
  exports.AlignEndVertical = AlignEndVertical$1;
  exports.AlignHorizontalDistributeCenter = AlignHorizontalDistributeCenter$1;
  exports.AlignHorizontalDistributeEnd = AlignHorizontalDistributeEnd$1;
  exports.AlignHorizontalDistributeStart = AlignHorizontalDistributeStart$1;
  exports.AlignHorizontalJustifyCenter = AlignHorizontalJustifyCenter$1;
  exports.AlignHorizontalJustifyEnd = AlignHorizontalJustifyEnd$1;
  exports.AlignHorizontalJustifyStart = AlignHorizontalJustifyStart$1;
  exports.AlignHorizontalSpaceAround = AlignHorizontalSpaceAround$1;
  exports.AlignHorizontalSpaceBetween = AlignHorizontalSpaceBetween$1;
  exports.AlignJustify = AlignJustify$1;
  exports.AlignLeft = AlignLeft$1;
  exports.AlignRight = AlignRight$1;
  exports.AlignStartHorizontal = AlignStartHorizontal$1;
  exports.AlignStartVertical = AlignStartVertical$1;
  exports.AlignVerticalDistributeCenter = AlignVerticalDistributeCenter$1;
  exports.AlignVerticalDistributeEnd = AlignVerticalDistributeEnd$1;
  exports.AlignVerticalDistributeStart = AlignVerticalDistributeStart$1;
  exports.AlignVerticalJustifyCenter = AlignVerticalJustifyCenter$1;
  exports.AlignVerticalJustifyEnd = AlignVerticalJustifyEnd$1;
  exports.AlignVerticalJustifyStart = AlignVerticalJustifyStart$1;
  exports.AlignVerticalSpaceAround = AlignVerticalSpaceAround$1;
  exports.AlignVerticalSpaceBetween = AlignVerticalSpaceBetween$1;
  exports.Anchor = Anchor$1;
  exports.Angry = Angry$1;
  exports.Annoyed = Annoyed$1;
  exports.Aperture = Aperture$1;
  exports.Apple = Apple$1;
  exports.Archive = Archive$1;
  exports.ArchiveRestore = ArchiveRestore$1;
  exports.Armchair = Armchair$1;
  exports.ArrowBigDown = ArrowBigDown$1;
  exports.ArrowBigLeft = ArrowBigLeft$1;
  exports.ArrowBigRight = ArrowBigRight$1;
  exports.ArrowBigUp = ArrowBigUp$1;
  exports.ArrowDown = ArrowDown$1;
  exports.ArrowDownCircle = ArrowDownCircle$1;
  exports.ArrowDownLeft = ArrowDownLeft$1;
  exports.ArrowDownRight = ArrowDownRight$1;
  exports.ArrowLeft = ArrowLeft$1;
  exports.ArrowLeftCircle = ArrowLeftCircle$1;
  exports.ArrowLeftRight = ArrowLeftRight$1;
  exports.ArrowRight = ArrowRight$1;
  exports.ArrowRightCircle = ArrowRightCircle$1;
  exports.ArrowUp = ArrowUp$1;
  exports.ArrowUpCircle = ArrowUpCircle$1;
  exports.ArrowUpDown = ArrowUpDown$1;
  exports.ArrowUpLeft = ArrowUpLeft$1;
  exports.ArrowUpRight = ArrowUpRight$1;
  exports.Asterisk = Asterisk$1;
  exports.AtSign = AtSign$1;
  exports.Award = Award$1;
  exports.Axe = Axe$1;
  exports.Axis3d = Axis3d$1;
  exports.Baby = Baby$1;
  exports.Backpack = Backpack$1;
  exports.BaggageClaim = BaggageClaim$1;
  exports.Banana = Banana$1;
  exports.Banknote = Banknote$1;
  exports.BarChart = BarChart$1;
  exports.BarChart2 = BarChart2$1;
  exports.BarChart3 = BarChart3$1;
  exports.BarChart4 = BarChart4$1;
  exports.BarChartHorizontal = BarChartHorizontal$1;
  exports.Baseline = Baseline$1;
  exports.Bath = Bath$1;
  exports.Battery = Battery$1;
  exports.BatteryCharging = BatteryCharging$1;
  exports.BatteryFull = BatteryFull$1;
  exports.BatteryLow = BatteryLow$1;
  exports.BatteryMedium = BatteryMedium$1;
  exports.Beaker = Beaker$1;
  exports.Bean = Bean$1;
  exports.BeanOff = BeanOff$1;
  exports.Bed = Bed$1;
  exports.BedDouble = BedDouble$1;
  exports.BedSingle = BedSingle$1;
  exports.Beer = Beer$1;
  exports.Bell = Bell$1;
  exports.BellMinus = BellMinus$1;
  exports.BellOff = BellOff$1;
  exports.BellPlus = BellPlus$1;
  exports.BellRing = BellRing$1;
  exports.Bike = Bike$1;
  exports.Binary = Binary$1;
  exports.Bitcoin = Bitcoin$1;
  exports.Bluetooth = Bluetooth$1;
  exports.BluetoothConnected = BluetoothConnected$1;
  exports.BluetoothOff = BluetoothOff$1;
  exports.BluetoothSearching = BluetoothSearching$1;
  exports.Bold = Bold$1;
  exports.Bomb = Bomb$1;
  exports.Bone = Bone$1;
  exports.Book = Book$1;
  exports.BookOpen = BookOpen$1;
  exports.BookOpenCheck = BookOpenCheck$1;
  exports.Bookmark = Bookmark$1;
  exports.BookmarkMinus = BookmarkMinus$1;
  exports.BookmarkPlus = BookmarkPlus$1;
  exports.Bot = Bot$1;
  exports.Box = Box$1;
  exports.BoxSelect = BoxSelect$1;
  exports.Boxes = Boxes$1;
  exports.Briefcase = Briefcase$1;
  exports.Brush = Brush$1;
  exports.Bug = Bug$1;
  exports.Building = Building$1;
  exports.Building2 = Building2$1;
  exports.Bus = Bus$1;
  exports.Cake = Cake$1;
  exports.Calculator = Calculator$1;
  exports.Calendar = Calendar$1;
  exports.CalendarCheck = CalendarCheck$1;
  exports.CalendarCheck2 = CalendarCheck2$1;
  exports.CalendarClock = CalendarClock$1;
  exports.CalendarDays = CalendarDays$1;
  exports.CalendarHeart = CalendarHeart$1;
  exports.CalendarMinus = CalendarMinus$1;
  exports.CalendarOff = CalendarOff$1;
  exports.CalendarPlus = CalendarPlus$1;
  exports.CalendarRange = CalendarRange$1;
  exports.CalendarSearch = CalendarSearch$1;
  exports.CalendarX = CalendarX$1;
  exports.CalendarX2 = CalendarX2$1;
  exports.Camera = Camera$1;
  exports.CameraOff = CameraOff$1;
  exports.Candy = Candy$1;
  exports.CandyOff = CandyOff$1;
  exports.Car = Car$1;
  exports.Carrot = Carrot$1;
  exports.Cast = Cast$1;
  exports.Cat = Cat$1;
  exports.Check = Check$1;
  exports.CheckCheck = CheckCheck$1;
  exports.CheckCircle = CheckCircle$1;
  exports.CheckCircle2 = CheckCircle2$1;
  exports.CheckSquare = CheckSquare$1;
  exports.ChefHat = ChefHat$1;
  exports.Cherry = Cherry$1;
  exports.ChevronDown = ChevronDown$1;
  exports.ChevronFirst = ChevronFirst$1;
  exports.ChevronLast = ChevronLast$1;
  exports.ChevronLeft = ChevronLeft$1;
  exports.ChevronRight = ChevronRight$1;
  exports.ChevronUp = ChevronUp$1;
  exports.ChevronsDown = ChevronsDown$1;
  exports.ChevronsDownUp = ChevronsDownUp$1;
  exports.ChevronsLeft = ChevronsLeft$1;
  exports.ChevronsLeftRight = ChevronsLeftRight$1;
  exports.ChevronsRight = ChevronsRight$1;
  exports.ChevronsRightLeft = ChevronsRightLeft$1;
  exports.ChevronsUp = ChevronsUp$1;
  exports.ChevronsUpDown = ChevronsUpDown$1;
  exports.Chrome = Chrome$1;
  exports.Cigarette = Cigarette$1;
  exports.CigaretteOff = CigaretteOff$1;
  exports.Circle = Circle$1;
  exports.CircleDot = CircleDot$1;
  exports.CircleEllipsis = CircleEllipsis$1;
  exports.CircleSlashed = CircleSlashed$1;
  exports.Citrus = Citrus$1;
  exports.Clapperboard = Clapperboard$1;
  exports.Clipboard = Clipboard$1;
  exports.ClipboardCheck = ClipboardCheck$1;
  exports.ClipboardCopy = ClipboardCopy$1;
  exports.ClipboardEdit = ClipboardEdit$1;
  exports.ClipboardList = ClipboardList$1;
  exports.ClipboardSignature = ClipboardSignature$1;
  exports.ClipboardType = ClipboardType$1;
  exports.ClipboardX = ClipboardX$1;
  exports.Clock = Clock$1;
  exports.Clock1 = Clock1$1;
  exports.Clock10 = Clock10$1;
  exports.Clock11 = Clock11$1;
  exports.Clock12 = Clock12$1;
  exports.Clock2 = Clock2$1;
  exports.Clock3 = Clock3$1;
  exports.Clock4 = Clock4$1;
  exports.Clock5 = Clock5$1;
  exports.Clock6 = Clock6$1;
  exports.Clock7 = Clock7$1;
  exports.Clock8 = Clock8$1;
  exports.Clock9 = Clock9$1;
  exports.Cloud = Cloud$1;
  exports.CloudCog = CloudCog$1;
  exports.CloudDrizzle = CloudDrizzle$1;
  exports.CloudFog = CloudFog$1;
  exports.CloudHail = CloudHail$1;
  exports.CloudLightning = CloudLightning$1;
  exports.CloudMoon = CloudMoon$1;
  exports.CloudMoonRain = CloudMoonRain$1;
  exports.CloudOff = CloudOff$1;
  exports.CloudRain = CloudRain$1;
  exports.CloudRainWind = CloudRainWind$1;
  exports.CloudSnow = CloudSnow$1;
  exports.CloudSun = CloudSun$1;
  exports.CloudSunRain = CloudSunRain$1;
  exports.Cloudy = Cloudy$1;
  exports.Clover = Clover$1;
  exports.Code = Code$1;
  exports.Code2 = Code2$1;
  exports.Codepen = Codepen$1;
  exports.Codesandbox = Codesandbox$1;
  exports.Coffee = Coffee$1;
  exports.Cog = Cog$1;
  exports.Coins = Coins$1;
  exports.Columns = Columns$1;
  exports.Command = Command$1;
  exports.Compass = Compass$1;
  exports.Component = Component$1;
  exports.ConciergeBell = ConciergeBell$1;
  exports.Contact = Contact$1;
  exports.Contrast = Contrast$1;
  exports.Cookie = Cookie$1;
  exports.Copy = Copy$1;
  exports.Copyleft = Copyleft$1;
  exports.Copyright = Copyright$1;
  exports.CornerDownLeft = CornerDownLeft$1;
  exports.CornerDownRight = CornerDownRight$1;
  exports.CornerLeftDown = CornerLeftDown$1;
  exports.CornerLeftUp = CornerLeftUp$1;
  exports.CornerRightDown = CornerRightDown$1;
  exports.CornerRightUp = CornerRightUp$1;
  exports.CornerUpLeft = CornerUpLeft$1;
  exports.CornerUpRight = CornerUpRight$1;
  exports.Cpu = Cpu$1;
  exports.CreditCard = CreditCard$1;
  exports.Croissant = Croissant$1;
  exports.Crop = Crop$1;
  exports.Cross = Cross$1;
  exports.Crosshair = Crosshair$1;
  exports.Crown = Crown$1;
  exports.CupSoda = CupSoda$1;
  exports.CurlyBraces = CurlyBraces$1;
  exports.Currency = Currency$1;
  exports.Database = Database$1;
  exports.Delete = Delete$1;
  exports.Diamond = Diamond$1;
  exports.Dice1 = Dice1$1;
  exports.Dice2 = Dice2$1;
  exports.Dice3 = Dice3$1;
  exports.Dice4 = Dice4$1;
  exports.Dice5 = Dice5$1;
  exports.Dice6 = Dice6$1;
  exports.Dices = Dices$1;
  exports.Diff = Diff$1;
  exports.Disc = Disc$1;
  exports.Divide = Divide$1;
  exports.DivideCircle = DivideCircle$1;
  exports.DivideSquare = DivideSquare$1;
  exports.Dna = Dna$1;
  exports.DnaOff = DnaOff$1;
  exports.Dog = Dog$1;
  exports.DollarSign = DollarSign$1;
  exports.Download = Download$1;
  exports.DownloadCloud = DownloadCloud$1;
  exports.Dribbble = Dribbble$1;
  exports.Droplet = Droplet$1;
  exports.Droplets = Droplets$1;
  exports.Drumstick = Drumstick$1;
  exports.Dumbbell = Dumbbell$1;
  exports.Ear = Ear$1;
  exports.EarOff = EarOff$1;
  exports.Edit = Edit$1;
  exports.Edit2 = Edit2$1;
  exports.Edit3 = Edit3$1;
  exports.Egg = Egg$1;
  exports.EggFried = EggFried$1;
  exports.EggOff = EggOff$1;
  exports.Equal = Equal$1;
  exports.EqualNot = EqualNot$1;
  exports.Eraser = Eraser$1;
  exports.Euro = Euro$1;
  exports.Expand = Expand$1;
  exports.ExternalLink = ExternalLink$1;
  exports.Eye = Eye$1;
  exports.EyeOff = EyeOff$1;
  exports.Facebook = Facebook$1;
  exports.Factory = Factory$1;
  exports.Fan = Fan$1;
  exports.FastForward = FastForward$1;
  exports.Feather = Feather$1;
  exports.Figma = Figma$1;
  exports.File = File$1;
  exports.FileArchive = FileArchive$1;
  exports.FileAudio = FileAudio$1;
  exports.FileAudio2 = FileAudio2$1;
  exports.FileAxis3d = FileAxis3d$1;
  exports.FileBadge = FileBadge$1;
  exports.FileBadge2 = FileBadge2$1;
  exports.FileBarChart = FileBarChart$1;
  exports.FileBarChart2 = FileBarChart2$1;
  exports.FileBox = FileBox$1;
  exports.FileCheck = FileCheck$1;
  exports.FileCheck2 = FileCheck2$1;
  exports.FileClock = FileClock$1;
  exports.FileCode = FileCode$1;
  exports.FileCog = FileCog$1;
  exports.FileCog2 = FileCog2$1;
  exports.FileDiff = FileDiff$1;
  exports.FileDigit = FileDigit$1;
  exports.FileDown = FileDown$1;
  exports.FileEdit = FileEdit$1;
  exports.FileHeart = FileHeart$1;
  exports.FileImage = FileImage$1;
  exports.FileInput = FileInput$1;
  exports.FileJson = FileJson$1;
  exports.FileJson2 = FileJson2$1;
  exports.FileKey = FileKey$1;
  exports.FileKey2 = FileKey2$1;
  exports.FileLineChart = FileLineChart$1;
  exports.FileLock = FileLock$1;
  exports.FileLock2 = FileLock2$1;
  exports.FileMinus = FileMinus$1;
  exports.FileMinus2 = FileMinus2$1;
  exports.FileOutput = FileOutput$1;
  exports.FilePieChart = FilePieChart$1;
  exports.FilePlus = FilePlus$1;
  exports.FilePlus2 = FilePlus2$1;
  exports.FileQuestion = FileQuestion$1;
  exports.FileScan = FileScan$1;
  exports.FileSearch = FileSearch$1;
  exports.FileSearch2 = FileSearch2$1;
  exports.FileSignature = FileSignature$1;
  exports.FileSpreadsheet = FileSpreadsheet$1;
  exports.FileSymlink = FileSymlink$1;
  exports.FileTerminal = FileTerminal$1;
  exports.FileText = FileText$1;
  exports.FileType = FileType$1;
  exports.FileType2 = FileType2$1;
  exports.FileUp = FileUp$1;
  exports.FileVideo = FileVideo$1;
  exports.FileVideo2 = FileVideo2$1;
  exports.FileVolume = FileVolume$1;
  exports.FileVolume2 = FileVolume2$1;
  exports.FileWarning = FileWarning$1;
  exports.FileX = FileX$1;
  exports.FileX2 = FileX2$1;
  exports.Files = Files$1;
  exports.Film = Film$1;
  exports.Filter = Filter$1;
  exports.Fingerprint = Fingerprint$1;
  exports.Flag = Flag$1;
  exports.FlagOff = FlagOff$1;
  exports.FlagTriangleLeft = FlagTriangleLeft$1;
  exports.FlagTriangleRight = FlagTriangleRight$1;
  exports.Flame = Flame$1;
  exports.Flashlight = Flashlight$1;
  exports.FlashlightOff = FlashlightOff$1;
  exports.FlaskConical = FlaskConical$1;
  exports.FlaskConicalOff = FlaskConicalOff$1;
  exports.FlaskRound = FlaskRound$1;
  exports.FlipHorizontal = FlipHorizontal$1;
  exports.FlipHorizontal2 = FlipHorizontal2$1;
  exports.FlipVertical = FlipVertical$1;
  exports.FlipVertical2 = FlipVertical2$1;
  exports.Flower = Flower$1;
  exports.Flower2 = Flower2$1;
  exports.Focus = Focus$1;
  exports.Folder = Folder$1;
  exports.FolderArchive = FolderArchive$1;
  exports.FolderCheck = FolderCheck$1;
  exports.FolderClock = FolderClock$1;
  exports.FolderClosed = FolderClosed$1;
  exports.FolderCog = FolderCog$1;
  exports.FolderCog2 = FolderCog2$1;
  exports.FolderDown = FolderDown$1;
  exports.FolderEdit = FolderEdit$1;
  exports.FolderHeart = FolderHeart$1;
  exports.FolderInput = FolderInput$1;
  exports.FolderKey = FolderKey$1;
  exports.FolderLock = FolderLock$1;
  exports.FolderMinus = FolderMinus$1;
  exports.FolderOpen = FolderOpen$1;
  exports.FolderOutput = FolderOutput$1;
  exports.FolderPlus = FolderPlus$1;
  exports.FolderSearch = FolderSearch$1;
  exports.FolderSearch2 = FolderSearch2$1;
  exports.FolderSymlink = FolderSymlink$1;
  exports.FolderTree = FolderTree$1;
  exports.FolderUp = FolderUp$1;
  exports.FolderX = FolderX$1;
  exports.Folders = Folders$1;
  exports.FormInput = FormInput$1;
  exports.Forward = Forward$1;
  exports.Frame = Frame$1;
  exports.Framer = Framer$1;
  exports.Frown = Frown$1;
  exports.Fuel = Fuel$1;
  exports.FunctionSquare = FunctionSquare$1;
  exports.Gamepad = Gamepad$1;
  exports.Gamepad2 = Gamepad2$1;
  exports.Gauge = Gauge$1;
  exports.Gavel = Gavel$1;
  exports.Gem = Gem$1;
  exports.Ghost = Ghost$1;
  exports.Gift = Gift$1;
  exports.GitBranch = GitBranch$1;
  exports.GitBranchPlus = GitBranchPlus$1;
  exports.GitCommit = GitCommit$1;
  exports.GitCompare = GitCompare$1;
  exports.GitFork = GitFork$1;
  exports.GitMerge = GitMerge$1;
  exports.GitPullRequest = GitPullRequest$1;
  exports.GitPullRequestClosed = GitPullRequestClosed$1;
  exports.GitPullRequestDraft = GitPullRequestDraft$1;
  exports.Github = Github$1;
  exports.Gitlab = Gitlab$1;
  exports.GlassWater = GlassWater$1;
  exports.Glasses = Glasses$1;
  exports.Globe = Globe$1;
  exports.Globe2 = Globe2$1;
  exports.Grab = Grab$1;
  exports.GraduationCap = GraduationCap$1;
  exports.Grape = Grape$1;
  exports.Grid = Grid$1;
  exports.GripHorizontal = GripHorizontal$1;
  exports.GripVertical = GripVertical$1;
  exports.Hammer = Hammer$1;
  exports.Hand = Hand$1;
  exports.HandMetal = HandMetal$1;
  exports.HardDrive = HardDrive$1;
  exports.HardHat = HardHat$1;
  exports.Hash = Hash$1;
  exports.Haze = Haze$1;
  exports.Heading = Heading$1;
  exports.Heading1 = Heading1$1;
  exports.Heading2 = Heading2$1;
  exports.Heading3 = Heading3$1;
  exports.Heading4 = Heading4$1;
  exports.Heading5 = Heading5$1;
  exports.Heading6 = Heading6$1;
  exports.Headphones = Headphones$1;
  exports.Heart = Heart$1;
  exports.HeartCrack = HeartCrack$1;
  exports.HeartHandshake = HeartHandshake$1;
  exports.HeartOff = HeartOff$1;
  exports.HeartPulse = HeartPulse$1;
  exports.HelpCircle = HelpCircle$1;
  exports.Hexagon = Hexagon$1;
  exports.Highlighter = Highlighter$1;
  exports.History = History$1;
  exports.Home = Home$1;
  exports.Hop = Hop$1;
  exports.HopOff = HopOff$1;
  exports.Hourglass = Hourglass$1;
  exports.IceCream = IceCream$1;
  exports.Image = Image$1;
  exports.ImageMinus = ImageMinus$1;
  exports.ImageOff = ImageOff$1;
  exports.ImagePlus = ImagePlus$1;
  exports.Import = Import$1;
  exports.Inbox = Inbox$1;
  exports.Indent = Indent$1;
  exports.IndianRupee = IndianRupee$1;
  exports.Infinity = Infinity$1;
  exports.Info = Info$1;
  exports.Inspect = Inspect$1;
  exports.Instagram = Instagram$1;
  exports.Italic = Italic$1;
  exports.JapaneseYen = JapaneseYen$1;
  exports.Joystick = Joystick$1;
  exports.Key = Key$1;
  exports.Keyboard = Keyboard$1;
  exports.Lamp = Lamp$1;
  exports.LampCeiling = LampCeiling$1;
  exports.LampDesk = LampDesk$1;
  exports.LampFloor = LampFloor$1;
  exports.LampWallDown = LampWallDown$1;
  exports.LampWallUp = LampWallUp$1;
  exports.Landmark = Landmark$1;
  exports.Languages = Languages$1;
  exports.Laptop = Laptop$1;
  exports.Laptop2 = Laptop2$1;
  exports.Lasso = Lasso$1;
  exports.LassoSelect = LassoSelect$1;
  exports.Laugh = Laugh$1;
  exports.Layers = Layers$1;
  exports.Layout = Layout$1;
  exports.LayoutDashboard = LayoutDashboard$1;
  exports.LayoutGrid = LayoutGrid$1;
  exports.LayoutList = LayoutList$1;
  exports.LayoutTemplate = LayoutTemplate$1;
  exports.Leaf = Leaf$1;
  exports.Library = Library$1;
  exports.LifeBuoy = LifeBuoy$1;
  exports.Lightbulb = Lightbulb$1;
  exports.LightbulbOff = LightbulbOff$1;
  exports.LineChart = LineChart$1;
  exports.Link = Link$1;
  exports.Link2 = Link2$1;
  exports.Link2Off = Link2Off$1;
  exports.Linkedin = Linkedin$1;
  exports.List = List$1;
  exports.ListChecks = ListChecks$1;
  exports.ListEnd = ListEnd$1;
  exports.ListMinus = ListMinus$1;
  exports.ListMusic = ListMusic$1;
  exports.ListOrdered = ListOrdered$1;
  exports.ListPlus = ListPlus$1;
  exports.ListStart = ListStart$1;
  exports.ListVideo = ListVideo$1;
  exports.ListX = ListX$1;
  exports.Loader = Loader$1;
  exports.Loader2 = Loader2$1;
  exports.Locate = Locate$1;
  exports.LocateFixed = LocateFixed$1;
  exports.LocateOff = LocateOff$1;
  exports.Lock = Lock$1;
  exports.LogIn = LogIn$1;
  exports.LogOut = LogOut$1;
  exports.Luggage = Luggage$1;
  exports.Magnet = Magnet$1;
  exports.Mail = Mail$1;
  exports.MailCheck = MailCheck$1;
  exports.MailMinus = MailMinus$1;
  exports.MailOpen = MailOpen$1;
  exports.MailPlus = MailPlus$1;
  exports.MailQuestion = MailQuestion$1;
  exports.MailSearch = MailSearch$1;
  exports.MailWarning = MailWarning$1;
  exports.MailX = MailX$1;
  exports.Mails = Mails$1;
  exports.Map = Map$1;
  exports.MapPin = MapPin$1;
  exports.MapPinOff = MapPinOff$1;
  exports.Martini = Martini$1;
  exports.Maximize = Maximize$1;
  exports.Maximize2 = Maximize2$1;
  exports.Medal = Medal$1;
  exports.Megaphone = Megaphone$1;
  exports.MegaphoneOff = MegaphoneOff$1;
  exports.Meh = Meh$1;
  exports.Menu = Menu$1;
  exports.MessageCircle = MessageCircle$1;
  exports.MessageSquare = MessageSquare$1;
  exports.Mic = Mic$1;
  exports.Mic2 = Mic2$1;
  exports.MicOff = MicOff$1;
  exports.Microscope = Microscope$1;
  exports.Microwave = Microwave$1;
  exports.Milestone = Milestone$1;
  exports.Milk = Milk$1;
  exports.MilkOff = MilkOff$1;
  exports.Minimize = Minimize$1;
  exports.Minimize2 = Minimize2$1;
  exports.Minus = Minus$1;
  exports.MinusCircle = MinusCircle$1;
  exports.MinusSquare = MinusSquare$1;
  exports.Monitor = Monitor$1;
  exports.MonitorOff = MonitorOff$1;
  exports.MonitorSmartphone = MonitorSmartphone$1;
  exports.MonitorSpeaker = MonitorSpeaker$1;
  exports.Moon = Moon$1;
  exports.MoreHorizontal = MoreHorizontal$1;
  exports.MoreVertical = MoreVertical$1;
  exports.Mountain = Mountain$1;
  exports.MountainSnow = MountainSnow$1;
  exports.Mouse = Mouse$1;
  exports.MousePointer = MousePointer$1;
  exports.MousePointer2 = MousePointer2$1;
  exports.MousePointerClick = MousePointerClick$1;
  exports.Move = Move$1;
  exports.Move3d = Move3d$1;
  exports.MoveDiagonal = MoveDiagonal$1;
  exports.MoveDiagonal2 = MoveDiagonal2$1;
  exports.MoveHorizontal = MoveHorizontal$1;
  exports.MoveVertical = MoveVertical$1;
  exports.Music = Music$1;
  exports.Music2 = Music2$1;
  exports.Music3 = Music3$1;
  exports.Music4 = Music4$1;
  exports.Navigation = Navigation$1;
  exports.Navigation2 = Navigation2$1;
  exports.Navigation2Off = Navigation2Off$1;
  exports.NavigationOff = NavigationOff$1;
  exports.Network = Network$1;
  exports.Newspaper = Newspaper$1;
  exports.Nut = Nut$1;
  exports.NutOff = NutOff$1;
  exports.Octagon = Octagon$1;
  exports.Option = Option$1;
  exports.Outdent = Outdent$1;
  exports.Package = Package$1;
  exports.Package2 = Package2$1;
  exports.PackageCheck = PackageCheck$1;
  exports.PackageMinus = PackageMinus$1;
  exports.PackageOpen = PackageOpen$1;
  exports.PackagePlus = PackagePlus$1;
  exports.PackageSearch = PackageSearch$1;
  exports.PackageX = PackageX$1;
  exports.PaintBucket = PaintBucket$1;
  exports.Paintbrush = Paintbrush$1;
  exports.Paintbrush2 = Paintbrush2$1;
  exports.Palette = Palette$1;
  exports.Palmtree = Palmtree$1;
  exports.Paperclip = Paperclip$1;
  exports.PartyPopper = PartyPopper$1;
  exports.Pause = Pause$1;
  exports.PauseCircle = PauseCircle$1;
  exports.PauseOctagon = PauseOctagon$1;
  exports.PenTool = PenTool$1;
  exports.Pencil = Pencil$1;
  exports.Percent = Percent$1;
  exports.PersonStanding = PersonStanding$1;
  exports.Phone = Phone$1;
  exports.PhoneCall = PhoneCall$1;
  exports.PhoneForwarded = PhoneForwarded$1;
  exports.PhoneIncoming = PhoneIncoming$1;
  exports.PhoneMissed = PhoneMissed$1;
  exports.PhoneOff = PhoneOff$1;
  exports.PhoneOutgoing = PhoneOutgoing$1;
  exports.PieChart = PieChart$1;
  exports.PiggyBank = PiggyBank$1;
  exports.Pin = Pin$1;
  exports.PinOff = PinOff$1;
  exports.Pipette = Pipette$1;
  exports.Pizza = Pizza$1;
  exports.Plane = Plane$1;
  exports.Play = Play$1;
  exports.PlayCircle = PlayCircle$1;
  exports.Plug = Plug$1;
  exports.Plug2 = Plug2$1;
  exports.PlugZap = PlugZap$1;
  exports.Plus = Plus$1;
  exports.PlusCircle = PlusCircle$1;
  exports.PlusSquare = PlusSquare$1;
  exports.Pocket = Pocket$1;
  exports.Podcast = Podcast$1;
  exports.Pointer = Pointer$1;
  exports.PoundSterling = PoundSterling$1;
  exports.Power = Power$1;
  exports.PowerOff = PowerOff$1;
  exports.Printer = Printer$1;
  exports.Puzzle = Puzzle$1;
  exports.QrCode = QrCode$1;
  exports.Quote = Quote$1;
  exports.Radio = Radio$1;
  exports.RadioReceiver = RadioReceiver$1;
  exports.RectangleHorizontal = RectangleHorizontal$1;
  exports.RectangleVertical = RectangleVertical$1;
  exports.Recycle = Recycle$1;
  exports.Redo = Redo$1;
  exports.Redo2 = Redo2$1;
  exports.RefreshCcw = RefreshCcw$1;
  exports.RefreshCw = RefreshCw$1;
  exports.Refrigerator = Refrigerator$1;
  exports.Regex = Regex$1;
  exports.Repeat = Repeat$1;
  exports.Repeat1 = Repeat1$1;
  exports.Reply = Reply$1;
  exports.ReplyAll = ReplyAll$1;
  exports.Rewind = Rewind$1;
  exports.Rocket = Rocket$1;
  exports.RockingChair = RockingChair$1;
  exports.Rotate3d = Rotate3d$1;
  exports.RotateCcw = RotateCcw$1;
  exports.RotateCw = RotateCw$1;
  exports.Rss = Rss$1;
  exports.Ruler = Ruler$1;
  exports.RussianRuble = RussianRuble$1;
  exports.Sailboat = Sailboat$1;
  exports.Save = Save$1;
  exports.Scale = Scale$1;
  exports.Scale3d = Scale3d$1;
  exports.Scaling = Scaling$1;
  exports.Scan = Scan$1;
  exports.ScanFace = ScanFace$1;
  exports.ScanLine = ScanLine$1;
  exports.Scissors = Scissors$1;
  exports.ScreenShare = ScreenShare$1;
  exports.ScreenShareOff = ScreenShareOff$1;
  exports.Scroll = Scroll$1;
  exports.Search = Search$1;
  exports.Send = Send$1;
  exports.SeparatorHorizontal = SeparatorHorizontal$1;
  exports.SeparatorVertical = SeparatorVertical$1;
  exports.Server = Server$1;
  exports.ServerCog = ServerCog$1;
  exports.ServerCrash = ServerCrash$1;
  exports.ServerOff = ServerOff$1;
  exports.Settings = Settings$1;
  exports.Settings2 = Settings2$1;
  exports.Share = Share$1;
  exports.Share2 = Share2$1;
  exports.Sheet = Sheet$1;
  exports.Shield = Shield$1;
  exports.ShieldAlert = ShieldAlert$1;
  exports.ShieldCheck = ShieldCheck$1;
  exports.ShieldClose = ShieldClose$1;
  exports.ShieldOff = ShieldOff$1;
  exports.Shirt = Shirt$1;
  exports.ShoppingBag = ShoppingBag$1;
  exports.ShoppingCart = ShoppingCart$1;
  exports.Shovel = Shovel$1;
  exports.ShowerHead = ShowerHead$1;
  exports.Shrink = Shrink$1;
  exports.Shrub = Shrub$1;
  exports.Shuffle = Shuffle$1;
  exports.Sidebar = Sidebar$1;
  exports.SidebarClose = SidebarClose$1;
  exports.SidebarOpen = SidebarOpen$1;
  exports.Sigma = Sigma$1;
  exports.Signal = Signal$1;
  exports.SignalHigh = SignalHigh$1;
  exports.SignalLow = SignalLow$1;
  exports.SignalMedium = SignalMedium$1;
  exports.SignalZero = SignalZero$1;
  exports.Siren = Siren$1;
  exports.SkipBack = SkipBack$1;
  exports.SkipForward = SkipForward$1;
  exports.Skull = Skull$1;
  exports.Slack = Slack$1;
  exports.Slash = Slash$1;
  exports.Slice = Slice$1;
  exports.Sliders = Sliders$1;
  exports.SlidersHorizontal = SlidersHorizontal$1;
  exports.Smartphone = Smartphone$1;
  exports.SmartphoneCharging = SmartphoneCharging$1;
  exports.Smile = Smile$1;
  exports.SmilePlus = SmilePlus$1;
  exports.Snowflake = Snowflake$1;
  exports.Sofa = Sofa$1;
  exports.SortAsc = SortAsc$1;
  exports.SortDesc = SortDesc$1;
  exports.Speaker = Speaker$1;
  exports.Spline = Spline$1;
  exports.Sprout = Sprout$1;
  exports.Square = Square$1;
  exports.Star = Star$1;
  exports.StarHalf = StarHalf$1;
  exports.StarOff = StarOff$1;
  exports.Stethoscope = Stethoscope$1;
  exports.Sticker = Sticker$1;
  exports.StickyNote = StickyNote$1;
  exports.StopCircle = StopCircle$1;
  exports.StretchHorizontal = StretchHorizontal$1;
  exports.StretchVertical = StretchVertical$1;
  exports.Strikethrough = Strikethrough$1;
  exports.Subscript = Subscript$1;
  exports.Sun = Sun$1;
  exports.SunDim = SunDim$1;
  exports.SunMedium = SunMedium$1;
  exports.SunMoon = SunMoon$1;
  exports.SunSnow = SunSnow$1;
  exports.Sunrise = Sunrise$1;
  exports.Sunset = Sunset$1;
  exports.Superscript = Superscript$1;
  exports.SwissFranc = SwissFranc$1;
  exports.SwitchCamera = SwitchCamera$1;
  exports.Sword = Sword$1;
  exports.Swords = Swords$1;
  exports.Syringe = Syringe$1;
  exports.Table = Table$1;
  exports.Table2 = Table2$1;
  exports.Tablet = Tablet$1;
  exports.Tag = Tag$1;
  exports.Tags = Tags$1;
  exports.Target = Target$1;
  exports.Tent = Tent$1;
  exports.Terminal = Terminal$1;
  exports.TerminalSquare = TerminalSquare$1;
  exports.TextCursor = TextCursor$1;
  exports.TextCursorInput = TextCursorInput$1;
  exports.Thermometer = Thermometer$1;
  exports.ThermometerSnowflake = ThermometerSnowflake$1;
  exports.ThermometerSun = ThermometerSun$1;
  exports.ThumbsDown = ThumbsDown$1;
  exports.ThumbsUp = ThumbsUp$1;
  exports.Ticket = Ticket$1;
  exports.Timer = Timer$1;
  exports.TimerOff = TimerOff$1;
  exports.TimerReset = TimerReset$1;
  exports.ToggleLeft = ToggleLeft$1;
  exports.ToggleRight = ToggleRight$1;
  exports.Tornado = Tornado$1;
  exports.ToyBrick = ToyBrick$1;
  exports.Train = Train$1;
  exports.Trash = Trash$1;
  exports.Trash2 = Trash2$1;
  exports.TreeDeciduous = TreeDeciduous$1;
  exports.TreePine = TreePine$1;
  exports.Trees = Trees$1;
  exports.Trello = Trello$1;
  exports.TrendingDown = TrendingDown$1;
  exports.TrendingUp = TrendingUp$1;
  exports.Triangle = Triangle$1;
  exports.Trophy = Trophy$1;
  exports.Truck = Truck$1;
  exports.Tv = Tv$1;
  exports.Tv2 = Tv2$1;
  exports.Twitch = Twitch$1;
  exports.Twitter = Twitter$1;
  exports.Type = Type$1;
  exports.Umbrella = Umbrella$1;
  exports.Underline = Underline$1;
  exports.Undo = Undo$1;
  exports.Undo2 = Undo2$1;
  exports.Unlink = Unlink$1;
  exports.Unlink2 = Unlink2$1;
  exports.Unlock = Unlock$1;
  exports.Upload = Upload$1;
  exports.UploadCloud = UploadCloud$1;
  exports.Usb = Usb$1;
  exports.User = User$1;
  exports.UserCheck = UserCheck$1;
  exports.UserCog = UserCog$1;
  exports.UserMinus = UserMinus$1;
  exports.UserPlus = UserPlus$1;
  exports.UserX = UserX$1;
  exports.Users = Users$1;
  exports.Utensils = Utensils$1;
  exports.UtensilsCrossed = UtensilsCrossed$1;
  exports.Vegan = Vegan$1;
  exports.VenetianMask = VenetianMask$1;
  exports.Verified = Verified$1;
  exports.Vibrate = Vibrate$1;
  exports.VibrateOff = VibrateOff$1;
  exports.Video = Video$1;
  exports.VideoOff = VideoOff$1;
  exports.View = View$1;
  exports.Voicemail = Voicemail$1;
  exports.Volume = Volume$1;
  exports.Volume1 = Volume1$1;
  exports.Volume2 = Volume2$1;
  exports.VolumeX = VolumeX$1;
  exports.Wallet = Wallet$1;
  exports.Wand = Wand$1;
  exports.Wand2 = Wand2$1;
  exports.Watch = Watch$1;
  exports.Waves = Waves$1;
  exports.Webcam = Webcam$1;
  exports.Webhook = Webhook$1;
  exports.Wheat = Wheat$1;
  exports.WheatOff = WheatOff$1;
  exports.Wifi = Wifi$1;
  exports.WifiOff = WifiOff$1;
  exports.Wind = Wind$1;
  exports.Wine = Wine$1;
  exports.WineOff = WineOff$1;
  exports.WrapText = WrapText$1;
  exports.Wrench = Wrench$1;
  exports.X = X$1;
  exports.XCircle = XCircle$1;
  exports.XOctagon = XOctagon$1;
  exports.XSquare = XSquare$1;
  exports.Youtube = Youtube$1;
  exports.Zap = Zap$1;
  exports.ZapOff = ZapOff$1;
  exports.ZoomIn = ZoomIn$1;
  exports.ZoomOut = ZoomOut$1;
  exports.createElement = createElement$1;
  exports.createIcons = createIcons;
  exports.icons = allIcons;

}));
//# sourceMappingURL=lucide.js.map