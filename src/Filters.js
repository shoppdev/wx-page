import React from 'react'

const Filters = () => {
    return(
        <form>
            <label>
                <input type='radio' value='tor' />
                Tornado
            </label>
            <label>
                <input type='radio' value='strm' />
                T-Storm
            </label>
            <label>
                <input type='radio' value='strm' />
                Moon Fall!
            </label>
        </form>
    )    
}

export default Filters