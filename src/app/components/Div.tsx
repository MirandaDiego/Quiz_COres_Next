import { useState } from "react";
import { whyCores } from "../types/divCores"


type Props = {
    question: whyCores;
    count: number;
    onAnswer: (answer:number) => void
}

export const QuestionItem = ({question, count, onAnswer}: Props) => {

    const[selectedAnswer, setselectedAnswer] = useState<number | null>(null);

    const checkQUestion = (key:number)=>{
        if(selectedAnswer === null){
            setselectedAnswer(key);
            setTimeout(() => {
                onAnswer(key);
                setselectedAnswer(null);

            }, 1000)
        }
    }

    return(
        <div>
            <div className="text-3xl font-bold mb-5">{count} Qual a cor certa?</div>
            <div>
                {question.div.map((item, key)=>(
                    <div
                    key={key}
                    onClick={() => checkQUestion(key)}
                    className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-200 border-blue-400
                    ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100 border-green-400'}
                    ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100 border-red-400'} 
                    `}

                    >{item}

                    </div>
                ))}
            </div>

        </div>
    )
}
