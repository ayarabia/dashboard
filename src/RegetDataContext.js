import { createContext, useState } from "react";


let RegetDataContext = createContext();


export function RegetDataContextProvider(props) {

   const [dataVal, setDataVal] = useState(false)



    return (
        <RegetDataContext.Provider value={{reGetData:dataVal,setReGetData:(x)=> setDataVal(x)}}>
            {props.children}
        </RegetDataContext.Provider>
    )
}



export default RegetDataContext;