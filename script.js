(function() {
  var loading = 0
  var preLoadTimer = setInterval(frame, 1000)
  
  function frame() {
    if(loading === 6) {
      clearInterval(preLoadTimer)
      window.open('Mainpage/', '_self')
    } else {
      loading++
      console.log(loading)
    }
  }
})();