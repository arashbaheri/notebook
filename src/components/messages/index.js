import './index.css'

import {
  MdOutlineAttachFile,
  MdOutlineEmojiEmotions,
  MdSend,
} from 'react-icons/md'

import { Button } from 'reactstrap'
import { replys } from '../messages/chats'

const Messages = () => {
  return (
    <>
      <div className='notification-container mt-5  d-flex align-items-center justify-content-between'>
        <h5>Team chat</h5>
        <div>
          <Button className='invite-people-btn'>Invite people</Button>
        </div>
      </div>
      <div className='mt-3 chat-box-container'>
        {replys.map((message) => {
          return (
            <>
              {message.sender == 'Me' ? (
                <div className='my-reply-on-message-box d-flex flex-column justify-content-end'>
                  <div className='message-text'>{message.textMessage}</div>
                  <div className='message-sent-time'>{message.sentDate}</div>
                </div>
              ) : (
                <div className='other-reply-on-message-box'>
                  <div className='message-text'>{message.textMessage}</div>
                  <div className='message-sent-time'>{message.sentDate}</div>
                </div>
              )}
            </>
          )
        })}
        <div className='send-message-container d-flex justify-content-between align-items-center'>
          <div className='d-flex'>
            <span>
              <MdOutlineAttachFile size={20} />
            </span>
            <p className='m-0 p-0 send-message-input'>Type a message ...</p>
          </div>
          <div>
            <span className='mx-2'>
              <MdOutlineEmojiEmotions size={20} />
            </span>
            <span>
              <MdSend size={20} />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Messages
