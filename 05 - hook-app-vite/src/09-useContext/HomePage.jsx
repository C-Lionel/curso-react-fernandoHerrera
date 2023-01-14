import { useContext } from "react";
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

  const { user } = useContext( UserContext );

  return (
    <>
    {/*  ( user? ) ====> Significa que si el user existe imprime la data, sino no hagas nada y no lances un error */}
    <h1>HomePage <small> { user?.name } </small> </h1> 
    <hr /> 

    <pre>
      { JSON.stringify( user, null, 3 ) }
    </pre>

    </>
  )
}
