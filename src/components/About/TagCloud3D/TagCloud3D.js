import React, { useEffect, useRef,useState } from 'react'
import TagCloud from 'TagCloud'
import './index.scss'

const Tags = [
'JavaScript',
'CSS',
'HTML',
'Vscode',
'MySQL',
'React',
'Java',
'git',
'C',
'Docker',
'Firebase',
'R',
'AWS',
'IntelliJ',
'CloneZilla',
'Vue',
'Node',
'Heroku',
'MongoDB',
'React',
'Bootstrap',
'Express',
'npm'
]

function TagCloud3D() {
const IsTagCloudLoaded = useRef(false)
const [windowSize, setWindowSize] = useState(window.innerWidth);
let maxRadius = 250;

if(windowSize < 450){
    maxRadius = 180
}

useEffect(() => {

        if (IsTagCloudLoaded.current) 
        return
        TagCloud('.content', Tags, {
            radius: maxRadius,
            maxSpeed: 'fast',
            initSpeed: 'slow',
            direction: 135,
            keep: true,
        })
    
        IsTagCloudLoaded.current = true
        
}, [])

return (
    <div className='About' id='About'>
        <div className='left'>
            <div className='heading'>
            </div>
        </div>
        <div className='right'>
            <div className='content' />
        </div>
    </div>
)
}

export default TagCloud3D
