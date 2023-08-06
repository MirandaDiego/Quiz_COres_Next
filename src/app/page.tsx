"use client"

import { use, useState } from "react";
import { Cores } from "./data/cores";

const Page = () => {
  const title = 'Clique na cor certa';

  const [corDiv, setCorDiv] = useState(Math.round(Math.random()* (8)))

  const [like, setLike] = useState(false)

  const pick = (id:number) => {
    
    if(corDiv === id){ 
      alert("ACERTOU!")
      setLike(true)
    }else{
   setLike(false)
      alert("Errou!")
    }
   
  }

  const trocaDiv = () => {
    if(corDiv <= 7 && like){
      setCorDiv(Math.round(Math.random()* (8)))
    }else{
      alert("Voce precisa acertar")
      setCorDiv(0)
    }

  }
 
  const mudaDiv = (sim:string) =>{
    if(like){
      sim = Cores[corDiv].div
    }
  }

  return(
    <div className="w-full h-screen bg-black-200 flex justify-center items-center">
      <div className=" w-full max-w-xl rounded-md text-black shadow bg-zinc-300">
        <div className="flex justify-center items-center"> 
        
        <div className="p-7 font-bold text-5xl border border-gray-800 text-center text-red-500 mr-4">{title}</div>
       
       <div className={Cores[corDiv].div}></div> 
      
        </div>

       <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 ml-10 mt-5">
     {Cores.map((cor, id) => (<div onClick={e=>pick(id)} className={`w-20 h-20 ${cor.div} hover:border-2 border-white cursor-pointer`}></div>
     ))
}
        </section>
        
   <button onClick={trocaDiv} className=" p-1">Clique</button>
      
      </div>
    </div>
  )
}
export default Page;