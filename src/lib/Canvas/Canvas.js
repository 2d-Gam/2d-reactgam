import react , {useRef,useEffect} from "react"
import addContextProvider from "./addContextProvider.js"

const Canvas = (props)=>{
  const reference = useRef(null)
  useEffect(()=>{
    const ctx = reference.current.getContext("2d")
    addContextProvider(props.id,ctx)
  })
  return(
    <>
    <canvas ref={reference} id={props.id} style={{
      width:`${props.width}px`,
      height:`${props.height}px`
    }}/>
    </>
  )
}

export default Canvas