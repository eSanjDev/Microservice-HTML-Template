$(function(){let n=$(".datatables-ajax");n.length&&n.dataTable({processing:!0,serverSide:!0,ajax:"/mock-data/transactions.json",dom:'<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>><"table-responsive"t><"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',columnDefs:[{targets:0,searchable:!1,orderable:!1,render:function(t,s,r,e){return e.row+e.settings._iDisplayStart+1}},{targets:4,searchable:!1,orderable:!0,render:function(t,s,r,e){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{targets:5,render:function(t,s,r,e){return t==null?"نامشخص":moment(t,"YYYY-MM-DD HH:mm:ss").format("jYYYY/jMM/jDD HH:mm")}},{targets:6,render:function(t,s,r,e){return t==null?"نامشخص":moment(t,"YYYY-MM-DD HH:mm:ss").format("jYYYY/jMM/jDD HH:mm")}},{targets:7,searchable:!1,orderable:!0,render:function(t,s,r,e){if(r[4]==null)return'<span class="badge bg-label-warning">پرداخت نشده</span>';switch(t){case"موفق":return'<span class="badge bg-label-success">موفق</span>';case"ناموفق":return'<span class="badge bg-label-danger">ناموفق</span>';default:return'<span class="badge bg-label-warning">نامشخص</span>'}}},{targets:-1,title:"عملیات",searchable:!1,orderable:!1,render:function(t,s,r,e){return'<div class="d-flex align-items-center"><a href="javascript:;" class="text-body dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-sm mx-1"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#basicModal" data-id="'+e.settings._iDisplayStart+'">جزئیات</a></div></div>'}}],language:{url:"https://cdn.datatables.net/plug-ins/1.11.5/i18n/fa.json"}});let a={id:1,transaction_number:"01922ac2-7901-7278-8ded-8e3635f76f12",merchant_name:"اسنپ",gateway:"Stripe",amount:407e4,ip_address:"128.23.96.228",location:"Azadi St, Enghelab Square, Tehran, Tehran Province, Iran",user_agent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15",created_at:"2024-09-04 23:27:21",paid_at:"2025-06-04 23:27:21",status:"موفق"},d={data:{code:100,message:"Verified",card_hash:"1EBE3EBEBE35C7EC0F8D6EE4F2F859107A87822CA179BC9528767EA7B5489B69",card_pan:"502229******5995",ref_id:201,fee_type:"Merchant",fee:0},errors:[]};$(document).on("click",'[data-bs-toggle="modal"][data-bs-target="#basicModal"]',function(){var t=`
        <table class="table">
            <tbody>
                <tr>
                    <td>شناسه تراکنش:</td>
                    <td>${a.id}</td>
                </tr>
                <tr>
                    <td>شماره تراکنش:</td>
                    <td>
                        <span>${a.transaction_number}</span>
                    </td>
                </tr>
                <tr>
                    <td>نام پذیرنده:</td>
                    <td>${a.merchant_name}</td>
                </tr>
                <tr>
                    <td>درگاه:</td>
                    <td>${a.gateway}</td>
                </tr>
                <tr>
                    <td>مبلغ:</td>
                    <td>${a.amount.toLocaleString()} تومان</td>
                </tr>
                <tr>
                    <td>تاریخ ایجاد:</td>
                    <td>${a.created_at}</td>
                </tr>
                <tr>
                    <td>تاریخ پرداخت:</td>
                    <td>${a.paid_at}</td>
                </tr>
                <tr>
                    <td>اطلاعات دستگاه:</td>
                    <td>
                        <ul class="list-group-numbered">
                            <li class="pb-2">IP: ${a.ip_address}</li>
                            <li class="pb-2">مکان: ${a.location}</li>
                            <li class="pb-2">UserAgent: ${a.user_agent}</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>وضعیت:</td>
                    <td><span class="badge bg-label-success">${a.status}</span></td>
                </tr>
            </tbody>
        </table>
        <div class="mt-3">
            <label for="jsonResponse" class="form-label">پاسخ درگاه مبدا:</label>
            <textarea id="jsonResponse" class="form-control" rows="8" dir="ltr" readonly>${JSON.stringify(d,null,2)}</textarea>
        </div>
    `;$("#basicModal .modal-body").html(t)})});
