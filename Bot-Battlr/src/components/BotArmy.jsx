import React from 'react'
import SingleBot from './SingleBot'
import '../styles/BotArmy.css'

function BotArmy({ army, removeFromArmy = () => {} }) {
    return (
        <div className='bot-army'>
            <div className='bott-army'>
                {army.map((doc) => {
                    return (
                        <SingleBot key={doc.id} doc={doc} >
                            <p>
                                <button
                                    onClick={() => removeFromArmy(doc)}
                                >Remove</button>
                            </p>
                        </SingleBot>
                    )
                })}
            </div>
        </div>
    )
}

export default BotArmy
