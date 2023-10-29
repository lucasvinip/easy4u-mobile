import React, { createContext, useReducer, useState } from "react"

const [cart, setCart] = useState<number>(0)

export const ShoppingContext = createContext({cart: cart, setCart: setCart})

interface ShoppingProps {
  children: React.ReactNode
}

const Shopping = ({ children }: ShoppingProps) => {

  return (
    <ShoppingContext.Provider value={{cart: cart, setCart: setCart}}>
      {children}
    </ShoppingContext.Provider>
  )
}

export default Shopping;