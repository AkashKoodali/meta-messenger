"use client"

import useSWR from 'swr'
import fetcher from '../utils/fetchMessages'
import Message from './Message'
import MessageComponent from './MessageComponent'

function MessageList() {
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher)
  return (
    <div className='space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto'>
      { messages?.map(message => (
        <MessageComponent key={ message.id as string } message={ message } />
      ))}
    </div>
  )
}

export default MessageList