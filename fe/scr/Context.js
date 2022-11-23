import { createContext, useContext} from 'react'

const mainCon = createContext()

export const Provider = ({Children, value}) => 
<mainCon.Provider value={value}>{Children}</mainCon.Provider>

export const useValue = () => useContext(mainCon)
