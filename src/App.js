import React from 'react'
import BatchesContainer from './batches/BatchesContainer'
import BatchesEditor from './batches/BatchesEditor'
import './App.css'

class App extends React.Component {
  updateBatch(id, update) {

  }

  render() {
    return (
      <div className="app">
        <BatchesContainer
          updateRecipe={ this.updateBatch.bind(this) } />
        <BatchesEditor/>
      </div>
    )
  }
}

export default App
