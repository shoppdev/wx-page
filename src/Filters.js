import React from 'react'

const Filters = () => {
    return(
        <form>
            <label>
                <input type='checkbox' value='tor' />
                Tornado
            </label>
            <label>
                <input type='checkbox' value='strm' />
                T-Storm
            </label>
            <label>
                <input type='checkbox' value='fld' />
                Flood
            </label>
            <label>
                <input type='checkbox' value='spc' />
                Special Weather Statement
            </label>
            <label>
                <input type='checkbox' value='all' />
                All
            </label>

        </form>
    )    
}

export default Filters