import React, { useState } from 'react'

function Sidebar() {

    const [toggleState, settoggleState] = useState(true)

    const handleToggle = () => {
        // settoggleState(!toggleState);
    }
    console.log(toggleState)
    return (
        <>
            {
                toggleState &&
                    <div className={` bg-[#8EACCD] w-56 h-screen  drop-shadow-md`}>
                        <button className='' onClick={handleToggle}>
                            <p className='bg-white rounded-full w-12 h-12  ml-[13rem] absolute'>1</p>
                        </button>
                    </div>
                    
            }
        </>
    )
}

export default Sidebar