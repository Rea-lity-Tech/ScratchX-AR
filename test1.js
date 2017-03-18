(function(ext) {
  var descriptor;
  ext = this;
  ext._shutdown = function() {};
  ext._getStatus = function() {
    return {
      status: 2,
      msg: 'ready'
    };
  };
  ext.wait_random = callback(function() {
    var wait;
    wait = Math.random;
    console.log('Waiting for ' + wait + ' seconds');
    return window.setTimeout(function() {
      return callback();
    }, wait * 1000);
  });
  descriptor = {
    blocks: [['w', 'wait for random time', 'wait_random']]
  };
  return ScratchExtensions.register('Random wait extension', descriptor, ext);
});
