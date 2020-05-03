import React from 'react'

export default function Icon(props) {
    return (
        <i className={`material-icons ${props.className || ''}`} style={{
            fontSize: props.size? `${props.size}px`: '24px'
        }}>{props.children}</i>
    )
}
