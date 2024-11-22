import { useState } from "react";
import { ModalQuiz } from "../components/ModalQuiz";

export const CriarQuiz = () => {
    const [quiz, setQuiz] = useState([])

    const newQuiz = () => {
        setQuiz(<ModalQuiz/>)
    }
    return ( 
        <>
            <ModalQuiz/>
            {quiz}
        </>
     );
}