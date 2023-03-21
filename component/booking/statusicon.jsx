const Statusicon = (prop) =>{
    const color= (prop.status=="ongoing")?"yellow":(prop.status=="upcoming")?"lime":(prop.status=="cancelled")?"red":(prop.status=="previous")?"yellow":"grey"
    const dot = {
        "height": "9px",
        "width": "9px",
        "borderRadius": "50%",
        "backgroundColor":color,
        "display": "inline-block",
    }
    return (<>
        <span className="dot" style={dot}></span>
    </>)
}      
export default Statusicon