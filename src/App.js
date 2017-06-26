import React from 'react'
import BatchesContainer from './batches/BatchesContainer'

const batches = [
  {
    number: 1,
    start_date: "2017-06-19",
    end_date: "2017-06-20"
  },
  {
    number: 2,
    start_date: "2017-07-19",
    end_date: "2017-07-20"
  },
  {
    number: 3,
    start_date: "2017-08-19",
    end_date: "2017-08-20"
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <BatchesContainer batches={ batches } />
      </div>
    )
  }
}

export default App
