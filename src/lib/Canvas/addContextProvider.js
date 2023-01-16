//private hook
function addContextProvider(id,ctx){
  if(window.contexts == undefined){
    window.contexts = []
  }
  window.contexts.push({
    name:id,
    ctx
  })
}

export default addContextProvider