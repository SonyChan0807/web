var root_url = 'http://localhost:4200';
var h = $(window).height();
var gDict = {
    '小型代步車': 'g1',
    '平價家庭車': 'g2',
    '高級家庭車': 'g4',
    '高速長程車': 'g3',
    '綠色節能車': 'g5',
    '奢華頂級車': 'g6',
}


$(document).on('ready', function () {
    // alert(h);
    $('.groupSection').css('height', h);

    $('.groupTable').css('height', h - 100)
    $('.groupTable tbody').css('height', h - 150)

    var rosePlot = echarts.init(document.getElementById('rose'));
    //get feature table
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: root_url + '/api/groupFeature',
        success: function (response) {
            
            showFeatures(response);
        },
        error: function (error) {
            console.log(error)
        }

    });
    //get roseData and 6 groups cars
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: root_url + '/api/roseData',
        success: function (response) {
            rosePlot.setOption(response.option);
            showTables(response.table);
        },
        error: function (error) {
            console.log(error)
        }

    });

    // Links to each groups
    rosePlot.on('click', function (params) {

        console.log(gDict[params.data.name]);
        link.setAttribute('href', '#' + gDict[params.data.name] + '');

        link.click(function (event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 500);
        });
        // window.open("http://www.google.com/");
        // location.href = ''+gDict[params.data.name]+''

    });

    if ($('.back-to-top').length) {
    // 
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    });
}

     $(window).on('resize', function () {
            console.log('resize!!');
            if (rosePlot != null && rosePlot != undefined) {
                rosePlot.resize();
            }

        });
});

function showTables(tableData) {
    for (var key in tableData) {
        var tableID = "#" + key.substring(0, 2);
        // console.log(tableID);
        tableStr = '';
        for (var i = 0; i < tableData[key].length; i++) {
            tableStr+='<tr>'
            for(var key1 in tableData[key][i] ){
                tableStr += '<td>' + tableData[key][i][key1] + '</td>';
            }
            tableStr += '</tr>';
            $(tableID + ' tbody').append(tableStr);
         }
        
        //console.log(tableStr);
        
    }
}

function showFeatures(featureData){
    
    var nameArry = ['小型代步車', '平價家庭車', '高級家庭車','高速長程車', '綠色節能車', '奢華頂級車' ]
    for(var i=0; i<featureData.length; i++){
        var index = 0;
        if(i === 3){
            index = 4;
        }else if(i === 4){
            index = 3;
        }else{
            index = i;
        }
        console.log(featureData[index]);
        var tableStr = '<tr>'
        tableStr += '<td>' + nameArry[index] + '</td>';
        for(var key in featureData[index]){
            tableStr += '<td>' + featureData[index][key] + '</td>';
        }
        tableStr += '</tr>';
        $('#featureTable tbody').append(tableStr);
    }
}