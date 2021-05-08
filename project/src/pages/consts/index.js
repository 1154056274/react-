export const question =  [
    {
      questionstem: "通过javascript控制id=“d1”的div隐藏，使用的代码是（   ）",
      choice: ["document.getElementById(“d1”).style.show = “false”;",'document.getElementById(“d1”).style.show = “none”;','document.getElementById(“d1”).style.display = “none”;'],
      questionType: 1,
    },
    {
      questionstem: "window对象如下哪个方法是创建一个有”确定”、”取消”两个按钮的对话框 （    ）",
      choice: ["open( )", "alert(  )", "confirm( )"],
      questionType: 1,
    },
    {
      questionstem: "在JavaScript中，下拉选项中可以获取滚动条距窗口顶端滚动的距离的是 (  )",
      choice: ["document.documentElement.scrollTop;  ", "document.documentElement.topScroll;",'document.style.scrollTop; '],
      questionType: 1,
    },
    {
      questionstem: "下面对图js中的单选按钮说法正确的是()",
      choice: ["单选按钮可以通过点击“选中”和“未选中”选项来进行切换  ", "单项按钮没有checked属性",'单选按钮支持onClick事件'],
      questionType: 2,
    },
    {
      questionstem: "下面对字符串的描述正确的是()",
      choice: ["字符串的长度可以通过length属性获取  ", "字符串可以通过charAt()获取某个字符对应的索引",'字符串可以通过indexOf()获取某个字符对应的索引'],
      questionType: 2,
    },
    {
      questionstem: "在js里1+1=2",
      choice: ["正确 ", "错误",],
      questionType: 3,
    },
    {
      questionstem: "js是弱类型语言",
      choice: ["正确 ", "错误",],
      questionType: 3,
    },
    {
      questionstem: "Javascript的事件流模型都有什么",
      questionType: 4,
    },
    {
      questionstem: "”==”和“===”的不同",
      questionType: 4,
    }
    
    
    
    
  ]

export const TYPE = {
  1:'单选题',
  2:'多选题',
  3:'判断题',
  4:'填空题',
  
}