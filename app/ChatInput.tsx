"use client";

import { FormEvent, useState } from "react";
import { v4 as uuid } from 'uuid';
import { Message } from "../typings";
import useSWR from 'swr'
import fetcher from "../utils/fetchMessages";

function  ChatInput() {

  const [input, setInput] = useState("");
  const { data : messages, error, mutate } = useSWR('/api/getMessages', fetcher);

  

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if(!input) return;

    const messageToSent = input;

    setInput("");

    const id = uuid();

    const message: Message = {
        id,
        message: messageToSent,
        createdAt: Date.now(),
        username: "elon musk",
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5F8wSCflxtilF61vLvl1G4CbLuzLPuE-7QUJuN7e8t2Fp4gtKN6O&usqp=CAE&s",
        email:"akash@gmail",

    }

   const uploadeMessageToUpstash = async () => {
        const data = await fetch('api/addMessage/', {
            method:"POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                message,
            })
        }).then(res => res.json());

        return [ data.message, ...messages! ]
        
    };
   await mutate(uploadeMessageToUpstash, {
    optimisticData: [message, ...messages!],
    rollbackOnError: true
   });

  };

  return (
    <form 
    onSubmit={addMessage}
        className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100 ">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter a message..."
        className="flex-1 rounded border border-gray-300 focus:outline-none
      focus:ring-2 focus:ring-red-600 focus:border-transparent px-5 py-3 disabled:opacity-50 
      disabled:cursor-not-allowed"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
      rounded disabled:opacity-50 disabled:cursor-not-allowed" disabled={!input}>
        Sent
      </button>
    </form>
  );
}

export default ChatInput;
