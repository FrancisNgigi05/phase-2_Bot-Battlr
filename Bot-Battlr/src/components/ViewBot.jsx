import React from 'react'
import SingleBot from './SingleBot'
import '../styles/ViewBot.css'

function ViewBot({doc=null,  removeViewBot = () => {}, EnlistBot = () => {}}) {
    if (doc === null) {
        return null
    }




  return (
    <div className='view-bot'>
        <SingleBot doc={doc} />
        <p>
            <button className="enlist-button" onClick={() => EnlistBot(doc)} >Enlist</button>
        </p>
        <button className='go-back-button' onClick={removeViewBot}>GoBack</button>
    </div>
  )
}

export default ViewBot
