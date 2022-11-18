import React from 'react'
import { Message } from '../typings';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

async function HomePage() {
const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then((res)=> res.json());

const messages: Message[] = data.messages;

  return (
    <main>
        {/* message List */}
        <MessageList initialMessages={messages}/>

        {/* chat input */}
        <ChatInput/>
    </main>
  )
}

export default HomePage;