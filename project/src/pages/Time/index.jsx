import React,{ Component } from 'react';
 
 class NoTimeContent extends Component {
     constructor(props) {
        super(props)
         this.state = {
            day: 0,              hour: 0,             minute: 0,             second: 0
         }
     }
     render() {
        return (
            
                <h2>
                     <span>倒计时</span>
                     <span> {this.state.hour}:{this.state.minute}:{this.state.second}</span>
                 </h2>
           
         )
    }
 
 componentDidMount() {
     
      this.countFun(1200000);
     }
  
  //卸载组件取消倒计时
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  
  countFun = (time) => {
 
     var remaining =time
  
     this.timer = setInterval(() => {
         //防止出现负数
       if (remaining > 1000) {
         remaining -= 1000;
         let day = Math.floor((remaining / 1000 / 3600) / 24);
         let hour = Math.floor((remaining / 1000 / 3600) % 24);
         let minute = Math.floor((remaining / 1000 / 60) % 60);
         let second = Math.floor(remaining / 1000 % 60);
 
         this.setState({
             day:day,             hour:hour < 10 ? "0" + hour : hour,            minute:minute < 10 ? "0" + minute : minute,            second:second < 10 ? "0" + second : second
         })
} else {
         clearInterval(this.timer);
         //倒计时结束时触发父组件的方法
         //this.props.timeEnd();
       }
     },1000);
   }
 
 }
 export default NoTimeContent;