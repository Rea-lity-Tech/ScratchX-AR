(function(ext) {
  ext = this;
  ext._shutdown = function() {};
  ext._getStatus = function() {
    return {
      status: 2,
      msg: 'ready'
    };
  };
  return ext.wait_random = callback(function() {
    var wait;
    wait = Math.random;
    console.log('Waiting for ' + wait + ' seconds');
    return window.setTimeout(function() {
      return callback();
    }, wait * 1000);
  });
});
