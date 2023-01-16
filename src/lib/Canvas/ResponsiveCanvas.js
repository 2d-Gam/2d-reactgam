import react , {useRef,useEffect} from "react"
import addContextProvider from "./addContextProvider.js"

const ResponsiveCanvas = (props)=>{
  const reference = useRef(null)
  useEffect(()=>{
    const ctx = reference.current.getContext("2d")
    addContextProvider(props.id,ctx)
  })
  return(
    <>
    <canvas ref={reference} id={props.id} style={{
      width:`${window.innerWidth * props.width}px`,
      height:`${window.innerHeight * props.height}px`
    }}/>
    </>
  )
}

export default ResponsiveCanvas 