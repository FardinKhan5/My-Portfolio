import React from 'react'
import { Highlight } from './ui/hero-highlight'
function Heading({children}:Readonly<{children:string}>) {
    return (
        <div className="w-full flex justify-center items-center">
            <Highlight className="text-center text-4xl px-4 py-1 dark:text-white text-black font-bold mb-4">
                {children}
            </Highlight>
        </div>
    )
}

export default Heading