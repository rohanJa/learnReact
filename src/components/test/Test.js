import React from 'react'

const Test = ({ setCount, count }) => {
    return (
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    )
}

export default Test
