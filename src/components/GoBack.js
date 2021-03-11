import { useHistory } from "react-router-dom"

const GoBack = () => {

    const history = useHistory()
    
    return (
        <>
            <div onClick={()=> history.goBack()} className="rounded-full cursor-pointer px-3 py-1 text-center fixed right-20 top-3 bg-pink-400 text-white">Go Back</div>
        </>
    )
}

export default GoBack
