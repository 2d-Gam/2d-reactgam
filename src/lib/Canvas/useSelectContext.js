
function useSelectContext(id){
  let index = window.contexts.findIndex(el => el.name === id)
  if(index !== -1){
    return window.contexts[index].ctx
  }else{
    throw new Error("[canvas] id isnot matching any canvas in `useSelectContext` Hook")
  }
}

export default useSelectContext
