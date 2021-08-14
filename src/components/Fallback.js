import Navigation from "./Navigation"

function Fallback(){
  return(
    <div className="Fallback">
      <Navigation subhead="fallback" />
      <h1 style={{margin: "4em 0 0 1em"}} >Loading...</h1>
    </div>
  )
}

export default Fallback;
