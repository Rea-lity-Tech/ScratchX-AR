new (()-> 
  ext = this
  ext._shutdown = ->
  ext._getStatus = ->  { status: 2, msg: 'ready' }
  ext.wait_random = (callback) -> 
    wait = Math.random
    console.log('Waiting for ' + wait + ' seconds')
    window.setTimeout(
      -> callback(),
      wait*1000)
    
  descriptor = { 
    blocks: [['w', 'wait for random time', 'wait_random'],] 
    }
  ScratchExtensions.register('Random wait extension', descriptor, ext)
  )()
  
