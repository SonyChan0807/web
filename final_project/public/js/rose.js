

var h=$(window).height();

$(document).on('ready',function(){
    // alert(h);
    $('.groupSection').css('height',h);

    $('.groupTable').css('height',h-100)
});


var rosePlot = echarts.init(document.getElementById('rose'));
option = {
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
            radius : ['25%', '75%'],
            center : ['50%', '50%'],
            roseType : 'area',
            label:{normal:{textStyle:{
                fontSize:40,
                fontWeight:'bold'
            }}},
           
            data:[
                {value:20, name:'小型代步車'},
                {value:20, name:'平價家庭車'},
                {value:15, name:'高級家庭車'},
                {value:10, name:'高速長程車'},
                {value:20, name:'綠色節能車'},
                {value:15, name:'奢華頂級車'},
             
            ],
            
        }
    ]
    
};

 rosePlot.setOption(option);
   var gDict = {
       '小型代步車':'g1',
       '平價家庭車':'g2',
       '高級家庭車':'g4',
       '高速長程車':'g3',
       '綠色節能車':'g5',
       '奢華頂級車':'g6',
    }
// 新增鍵值



var link = document.createElement('a');



  rosePlot.on('click', function (params) {
 
    console.log(gDict[params.data.name]);
    link.setAttribute('href','#'+gDict[params.data.name]+'');
    
    link.click(function(event){
        event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
    // window.open("http://www.google.com/");
    // location.href = ''+gDict[params.data.name]+'';

});


$(window).on('resize', function () {
      if (rosePlot != null && rosePlot != undefined) {
        rosePlot.resize();
      }
});
