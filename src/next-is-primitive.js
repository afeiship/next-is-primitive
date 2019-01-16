(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var BOOL = 'boolean';
  var NUM = 'number';
  var STR = 'string';

  nx.isPrimitive = function(inTarget) {
    if (inTarget == null) {
      return true;
    }
    var type = typeof inTarget;
    return type === BOOL || type === NUM || type === STR;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPrimitive;
  }
})();
