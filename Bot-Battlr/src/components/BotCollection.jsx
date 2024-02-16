import React from 'react'
import SingleBot from './SingleBot'
import '../styles/BotCollection.css'

function BotCollection({data, handleAddViewBot = () => {}}) {
  return (
    <div className='bot-collection'>
       {data.map((doc) => {
        return (
        <SingleBot 
        key={doc.id} 
        doc={doc} 
        handleAddViewBot={handleAddViewBot}/>
        )})} 
    </div>
  )
}

export default BotCollection
