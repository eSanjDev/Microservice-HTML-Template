document.addEventListener("DOMContentLoaded",function(){var e={series:[44,55,13,43],chart:{type:"pie",height:350},labels:["پرداخت موفق","پرداخت ناموفق","در حال پردازش","لغو شده"],colors:["#28C76F","#FFAB00","#FF5252","#7367F0"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},a=new ApexCharts(document.querySelector("#transactionStatusChart"),e);a.render();var r={series:[{name:"تعداد تراکنش‌ها",data:[30,40,35,50,49,60,70,91]}],chart:{type:"bar",height:350},colors:["#FF5252"],plotOptions:{bar:{borderRadius:4,horizontal:!1,columnWidth:"55%"}},dataLabels:{enabled:!1},xaxis:{categories:["درگاه 1","درگاه 2","درگاه 3","درگاه 4","درگاه 5","درگاه 6","درگاه 7","درگاه 8"]},yaxis:{title:{text:"تعداد تراکنش‌ها"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t+" تراکنش"}}}},o=new ApexCharts(document.querySelector("#gatewayUsageChart"),r);o.render();var n={series:[{name:"تراکنش‌ها",data:[213,410,350,510,490,620,690]}],chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"]}},s=new ApexCharts(document.querySelector("#merchantTransactionsChart"),n);s.render();var i={series:[{name:"مبلغ تراکنش‌ها (تومان)",data:[15e5,2e6,175e4,22e5,195e4,23e5,21e5]}],chart:{type:"bar",height:350},colors:["#20E647"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"]},yaxis:{title:{text:"مبلغ تراکنش‌ها (تومان)"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t.toLocaleString()+" تومان"}}}},c=new ApexCharts(document.querySelector("#merchantTransactionsAmountChart"),i);c.render();var l={series:[70,30],chart:{type:"pie",height:350},labels:["پرداخت‌های موفق","پرداخت‌های ناموفق"],colors:["#28C76F","#FF5252"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},h=new ApexCharts(document.querySelector("#paymentStatusChart"),l);h.render();var d={series:[{name:"لاگ‌ها",data:[50,60,45,70,55,80,65]}],chart:{type:"bar",height:350},colors:["#20E647"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"]},yaxis:{title:{text:"تعداد لاگ‌ها"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t+" لاگ"}}}},p=new ApexCharts(document.querySelector("#gatewayConnectionLogsChart"),d);p.render();var u={series:[{name:"لاگ‌ها",data:[20,30,25,40,35,50,45]}],chart:{type:"line",height:350,zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"]}},y=new ApexCharts(document.querySelector("#withdrawalLogsChart"),u);y.render()});
