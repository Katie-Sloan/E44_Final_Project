import React from 'react'

const SitInOrTakeOutOption = () => {
    return (
        <>
        <input type="radio" id="sit-in" name="dining-type" value="sit-in"/>
        <label for="sit-in">Sit in</label><br/>
        <input type="radio" id="take-away" name="dining-type" value="takeaway"/>
        <label for="takeaway">Takeaway</label>
        </>
    )
}

export default SitInOrTakeOutOption
