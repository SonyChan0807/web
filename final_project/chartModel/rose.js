exports.option =  {
    backgroundColor:'rgb(256, 256, 256)', //加上背景色
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} 輛 ({d}%) ",
        textStyle:{fontSize:30}
    },
   
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        
        {
            // name:'面积模式',
            type:'pie',
            radius : ['25%', '100%'],
            center : ['50%', '55%'],
            roseType : 'area',
            label:{normal:{textStyle:{
                fontSize:30,
                fontWeight:'bold'
            }}},
           
            data:[
                {value:20, name:'小型代步車'}, //1
                {value:20, name:'平價家庭車'}, //2
                {value:15, name:'高級家庭車'}, //4
                {value:10, name:'高速長程車'}, //3
                {value:20, name:'綠色節能車'}, //5
                {value:15, name:'奢華頂級車'}, //6
             
            ],
            
        }
    ]
    
};