import React, { useState, useEffect } from 'react'
import { SwitchButton } from './SwitchButton'
import { OperationButton } from './OperationButton'
import './index.css'

export const Calculator = () => {

    const [isPowerOn, setPower] = useState(false)
    const [displayValue, setDisplayValue] = useState(0)

    const ButtonData = {
        firstRow: [
            {content: 'M+'},
            {content: 'M-'},
            {content: 'MR'},
            {content: 'MC'},
            {content: '+/-'},
        ],
        secondRow: [
            {content: '%'},
            {content: '7'},
            {content: '8'},
            {content: '9'},
            {content: '%'},
        ],
        thirdRow: [
            {content: ' '},
            {content: '4'},
            {content: '5'},
            {content: '6'},
            {content: 'x'},
        ],
        fourthRow: [
            {content: '%'},
            {content: '1'},
            {content: '2'},
            {content: '3'},
            {content: '-'},
        ],
        fifthRow: [
            {content: <div className='double-line-button'><div>CE</div><div>C</div></div>},
            {content: '0'},
            {content: '.'},
            {content: '='},
            {content: '+'},
        ]
    }

    const renderHeader = () => (
        <div className='header'>BARUN</div>
    )

    const renderDisplay = () => (
        <div className='display-frame'>
            <div className='outside-border'>
                <div className='inset-border'>
                    <div className='display'>
                        {isPowerOn ? displayValue : ''}
                    </div>
                </div>
            </div>
        </div>
    )

    const renderSwitch = () => (
        <div className='switch-frame'>
            <SwitchButton onClick={() => setPower(true)}  type='open' />
            <div className='divider-32'></div>
            <SwitchButton onClick={() => setPower(false)} type='close' />
        </div>
    )

    const renderButtonRows = (buttons) => {
        return <div className='button-row'>
            {buttons.map(button => <OperationButton content={button.content}  />)}
        </div>
    }

    const renderButtons = () => (
        <div className='buttons-frame'>
            {renderButtonRows(ButtonData.firstRow)}
            {renderButtonRows(ButtonData.secondRow)}
            {renderButtonRows(ButtonData.thirdRow)}
            {renderButtonRows(ButtonData.fourthRow)}
            {renderButtonRows(ButtonData.fifthRow)}
        </div>
    )

    return <div className='frame'>
        {renderHeader()}
        {renderDisplay()}
        {renderSwitch()}
        {renderButtons()}
    </div>
}