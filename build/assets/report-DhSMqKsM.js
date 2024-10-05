document.addEventListener("DOMContentLoaded",function(){let o,t;isDarkStyle?(config.colors_dark.cardColor,o=config.colors_dark.textMuted,config.colors_dark.bodyColor,t=config.colors_dark.borderColor):(config.colors.cardColor,o=config.colors.textMuted,config.colors.bodyColor,t=config.colors.borderColor);var e={series:[44,55,13,43],chart:{type:"pie",height:350},labels:["پرداخت موفق","پرداخت ناموفق","در حال پردازش","لغو شده"],legend:{position:"bottom",labels:{colors:[o,o],fontFamily:"Vazirmatn"}},colors:[config.colors.success,config.colors.warning,config.colors.danger,config.colors.primary],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},r=new ApexCharts(document.querySelector("#transactionStatusChart"),e);r.render();var s={series:[{name:"تعداد تراکنش‌ها",data:[30,40,35,50,49,60,70,91]}],chart:{type:"bar",height:350,fontFamily:"Vazirmatn"},colors:[config.colors.danger],plotOptions:{bar:{borderRadius:4,horizontal:!1,columnWidth:"55%"}},dataLabels:{enabled:!1},xaxis:{categories:["درگاه 1","درگاه 2","درگاه 3","درگاه 4","درگاه 5","درگاه 6","درگاه 7","درگاه 8"],labels:{style:{colors:o,fontFamily:"Vazirmatn"}}},yaxis:{title:{text:"تعداد تراکنش‌ها",style:{color:o,fontFamily:"Vazirmatn"}},labels:{style:{colors:o,fontFamily:"Vazirmatn"}}},fill:{opacity:1},tooltip:{y:{formatter:function(a){return a+" تراکنش"}}}},n=new ApexCharts(document.querySelector("#gatewayUsageChart"),s);n.render();var l={series:[{name:"تراکنش‌ها",data:[213,410,350,510,490,620,690]}],chart:{height:350,type:"line",zoom:{enabled:!1},fontFamily:"Vazirmatn"},colors:[config.colors.info],dataLabels:{enabled:!1},stroke:{curve:"smooth"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"],labels:{style:{colors:o,fontFamily:"Vazirmatn"}}}},i=new ApexCharts(document.querySelector("#merchantTransactionsChart"),l);i.render();var c={series:[{name:"مبلغ تراکنش‌ها (تومان)",data:[15e5,2e6,175e4,22e5,195e4,23e5,21e5]}],chart:{type:"bar",height:350,fontFamily:"Vazirmatn"},colors:[config.colors.success],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:[t]},xaxis:{categories:["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"],labels:{style:{colors:o,fontFamily:"Vazirmatn"}},axisBorder:{show:!0,color:t},axisTicks:{show:!0,color:t}},yaxis:{title:{text:"مبلغ تراکنش‌ها (تومان)",style:{color:o,fontFamily:"Vazirmatn"}},labels:{style:{colors:o,fontFamily:"Vazirmatn"}},axisBorder:{show:!0,color:t},axisTicks:{show:!0,color:t}},fill:{opacity:1},tooltip:{y:{formatter:function(a){return a.toLocaleString()+" تومان"}}}},m=new ApexCharts(document.querySelector("#merchantTransactionsAmountChart"),c);m.render();var d={series:[70,30],chart:{type:"pie",height:350,fontFamily:"Vazirmatn"},labels:["پرداخت‌های موفق","پرداخت‌های ناموفق"],legend:{position:"bottom",labels:{colors:[o,o],fontFamily:"Vazirmatn"}},colors:[config.colors.success,config.colors.danger],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom",labels:{colors:o,fontFamily:"Vazirmatn"}}}}]},y=new ApexCharts(document.querySelector("#paymentStatusChart"),d);y.render();var h={series:[{name:"لاگ‌ها",data:[50,60,45,70,55,80,65]}],chart:{type:"bar",height:350,fontFamily:"Vazirmatn"},colors:[config.colors.success],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"],labels:{style:{colors:o,fontFamily:"Vazirmatn"}}},yaxis:{title:{text:"تعداد لاگ‌ها",style:{color:o,fontFamily:"Vazirmatn"}},labels:{style:{colors:o,fontFamily:"Vazirmatn"}}},fill:{opacity:1},tooltip:{y:{formatter:function(a){return a+" لاگ"}}}},f=new ApexCharts(document.querySelector("#gatewayConnectionLogsChart"),h);f.render();var g={series:[{name:"لاگ‌ها",data:[20,30,25,40,35,50,45]}],chart:{type:"line",height:350,zoom:{enabled:!1},fontFamily:"Vazirmatn"},colors:[config.colors.info],dataLabels:{enabled:!1},stroke:{curve:"smooth"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"],labels:{style:{colors:o,fontFamily:"Vazirmatn"}}},yaxis:{title:{text:"تعداد لاگ‌ها",style:{color:o,fontFamily:"Vazirmatn"}},labels:{style:{colors:o,fontFamily:"Vazirmatn"}}}},p=new ApexCharts(document.querySelector("#withdrawalLogsChart"),g);p.render()});
