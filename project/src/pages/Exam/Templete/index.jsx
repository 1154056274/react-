import React, { useEffect } from 'react'
import { Radio, Space,Checkbox, Input } from 'antd';
import {question} from '../../consts'
import './index.css'

function Index ({questionType,num}){
    const [value, setValue] = React.useState(0);
    useEffect(()=>{setValue(0)},[num])
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  function onChanges(e) {
    console.log(`checked = ${e.target.checked}`);
  }
    const Content = ()=>{
        if(questionType===1){
            return(
                <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>{question[num].choice[0]}</Radio>
                    <Radio value={2}>{question[num].choice[1]}</Radio>
                    <Radio value={3}>{question[num].choice[2]}</Radio>
              </Space>
             </Radio.Group>
            )
        }
        else if(questionType===2){
            return (
                <>
                 <Space direction="vertical">
                <Checkbox onChange={onChanges}>{question[num].choice[0]}</Checkbox>
                <Checkbox onChange={onChanges}>{question[num].choice[1]}</Checkbox>
                <Checkbox onChange={onChanges}>{question[num].choice[2]}</Checkbox>
                </Space>
</>

            )
        }
        else if(questionType===3){
            return (
                <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>{question[num].choice[0]}</Radio>
                    <Radio value={2}>{question[num].choice[1]}</Radio>
              </Space>
             </Radio.Group>
            )
        }
        else if(questionType===4){
            return (
                <Input style={{width:'500px',height:'30px'}} />
            )
        }
        
    }
    return (
        <div className='templete-wrapper'>
            <div className='questionName'>
                {question[num].questionstem}
            </div>
          <Content />
        </div>
    )
}

export default Index