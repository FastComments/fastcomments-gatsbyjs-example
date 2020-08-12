// noinspection ES6UnusedImports
import React, {useState} from "react"
import {FastCommentsCommentWidget} from 'fastcomments-react'; // Here we include the FastComments library.

export default function DarkMode() {
    const [hasDarkBackground, setHasDarkBackground] = useState(false);
    return (
        <div style={{backgroundColor: hasDarkBackground ? 'black' : 'white'}}>
            <button onClick={() => setHasDarkBackground(!hasDarkBackground)}>Has dark
                background? {hasDarkBackground ? 'true' : 'false'}</button>
            <FastCommentsCommentWidget tenantId="demo" hasDarkBackground={hasDarkBackground}/>
        </div>
    )
}
