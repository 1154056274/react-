import React, { useState } from 'react'
import './index.css'
import Templete from '../Templete'
import {question,TYPE} from '../../consts'
import { message } from 'antd'
import NoTimeContent from '../../Time'
import {useHistory} from 'react-router-dom'
function Index (){
    const history = useHistory()
    const [page,setPage] = useState(0)
    return (
        
        <div className='exam-wrapper'>
            <div className='exam-top'>
            <span className='left-top'><NoTimeContent /></span>
            <span className='right-top' onClick={()=>{
                message.success('交卷成功');setTimeout(() => {
                history.push('/exam/examHome')
            }, 1000);}}>交卷</span>
            </div>
           
            <div className='exam-inner'>
            <header className='exam-header'>
        <span className='left'>第{page+1}题({TYPE[question[page].questionType] })</span>
                <span className='right' onClick={()=>{

                    if(page+1<question.length){
                    setPage(page+1)

                    }
                    else if(page+1===question.length){
                        message.success('已经是最后一题了,请交卷')
                    }
                    }} style={{cursor:'pointer'}} >下一题</span>
            </header>
            <div className='content'>
                <Templete questionType={question[page].questionType} num = {page} />
            </div>
            </div>

        </div>
    )
}
export default Index