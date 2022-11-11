import React from 'react'
import ChatInput from './ChatInput';
import MessageList from './MessageList';

function HomePage() {
  return (
    <main>
        {/* message List */}
        <MessageList/>

        {/* chat input */}
        <ChatInput/>
    </main>
  )
}

export default HomePage;