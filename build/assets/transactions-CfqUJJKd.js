$(function(){let n=$(".datatables-ajax");n.length&&n.dataTable({processing:!0,ajax:"./mock-data/transactions.json",dom:'<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>><"table-responsive"t><"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',columnDefs:[{targets:0,searchable:!1,orderable:!1,render:function(e,r,t,a){return a.row+a.settings._iDisplayStart+1}},{targets:4,searchable:!1,orderable:!0,render:function(e,r,t,a){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{targets:5,render:function(e,r,t,a){return e==null?"نامشخص":moment(e,"YYYY-MM-DD HH:mm:ss").format("jYYYY/jMM/jDD HH:mm")}},{targets:6,render:function(e,r,t,a){return e==null?"نامشخص":moment(e,"YYYY-MM-DD HH:mm:ss").format("jYYYY/jMM/jDD HH:mm")}},{targets:7,searchable:!1,orderable:!0,render:function(e,r,t,a){if(t[4]==null)return'<span class="badge bg-label-warning">پرداخت نشده</span>';switch(e){case"موفق":return'<span class="badge bg-label-success">موفق</span>';case"ناموفق":return'<span class="badge bg-label-danger">ناموفق</span>';default:return'<span class="badge bg-label-warning">نامشخص</span>'}}}],language:{url:"https://cdn.datatables.net/plug-ins/1.11.5/i18n/fa.json"}})});
