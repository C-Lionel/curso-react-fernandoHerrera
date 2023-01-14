import { useEffect } from "react"

export const Message = () => {

    const onMouseMove = ({ x, y }) => {
        const coords = { x, y };
        console.log(coords)
    }

    useEffect(() => {

        window.addEventListener('mousemove', onMouseMove);

        return () => {

            window.removeEventListener('mousemove', onMouseMove);

        }
    }, [])



    return (

        <>
            <h3 className="mt-3 text-secondary "> Usuario ya existe </h3>
        </>

    )
}
