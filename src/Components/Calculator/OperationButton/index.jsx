/**
 * 计算器操作按钮
 * 
 * 1. 作用: 执行各类计算器操作
 * 
 * 2. 状态: 不维护任何状态
 * 
 * 3. 样式: 
 * + 按钮样式
 *  + 统一样式
 *  + 差异样式: 字体颜色 / 按钮颜色
 * + 按钮内容
 *  + 正常文字
 *  + 自定义内容
 *  
 * 4. 交互:
 * + 点击后执行传入操作
 */
import React from 'react'
import './index.css'

export const OperationButton = (props) => {
    const { action, content, style } = props
    return <div onClick={action} style={style} className='operation-button'>
        {content}
    </div>
}