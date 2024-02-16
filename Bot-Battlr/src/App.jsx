import React, {useEffect, useState} from 'react'
import BotCollection from './components/BotCollection'
import ViewBot from './components/ViewBot'
import BotArmy from './components/BotArmy'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [viewBot, setViewBot] = useState(null)
  const [army, setArmy] = useState([])

  function fetchBots() {
    fetch('http://localhost:3000/bots')
    .then(r => r.json())
    .then((bots) => {
      setData(bots)
    })
  }
  useEffect(() => {
    fetchBots()
  }, [])

  function handleAddViewBot(doc) {
setViewBot(doc)
  }

  function EnlistBot(doc) {
    console.log(doc)
    for(let bot of army) {
      if (bot.id === doc.id) return
    }
    setArmy([doc, ...army])

  }

  function removeFromArmy(doc) {
let armyBots=array.filter((bot) => (bot.id === doc.id ? false : true))
setArmy(armyBots)
}

  function removeViewBot() {
    setViewBot(null)
  }

  console.log(data) 
  return (
    <div>
      <BotArmy army={army} removeFromArmy={removeFromArmy}/>
      <ViewBot 
      doc={viewBot}  
      removeViewBot={removeViewBot}
      EnlistBot={EnlistBot}/>
      <BotCollection data={data} handleAddViewBot={handleAddViewBot}/>
    </div>
  )
}

export default App
