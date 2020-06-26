import React from 'react'
import cn from 'classnames'
import './index.css'

export const SwitchButton = (props) => {
    const { type, onClick } = props

    return <div className='switch-button-frame'>
        <div onClick={onClick} className={cn(
            'switch-button', {
                'switch-button-open': type === 'open',
                'switch-button-close': type === 'close',
            } 
        )}></div>
        <div className='switch-dot'></div>
        <div className={cn(
            'switch-indicator', {
                'switch-indicator-open': type === 'open',
                'switch-indicator-close': type === 'close',
            } 
        )}></div>
    </div>
}