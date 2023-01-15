import React from 'react'

function Data() {
    const requestData = async () => {
    const res = await fetch(`http://localhost:3000/api/data`)
    console.log("hi")
    const data = await res.json()
    // const rows = data.split('\n').slice(1)
    // const results = rows.map(row => row.split(','))
    console.log(data)

    // const parsedData = JSON.parse(data);
    // const items = Object.values(parsedData)
    // console.log(items)
  }
    return (
        <div>
        data
        <button onClick={requestData}>
            request data
        </button>

        </div>
  )
}

export default Data