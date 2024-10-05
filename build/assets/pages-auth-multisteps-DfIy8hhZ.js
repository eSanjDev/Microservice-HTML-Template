$(function(){var s=$(".select2");s.length&&s.each(function(){var n=$(this);n.wrap('<div class="position-relative"></div>'),n.select2({placeholder:"Select an country",dropdownParent:n.parent()})})});document.addEventListener("DOMContentLoaded",function(s){(function(){const n=document.querySelector("#multiStepsValidation");if(typeof n!==void 0&&n!==null){const i=n.querySelector("#multiStepsForm"),o=i.querySelector("#accountDetailsValidation"),d=i.querySelector("#personalInfoValidation"),p=i.querySelector("#billingLinksValidation"),g=[].slice.call(i.querySelectorAll(".btn-next")),S=[].slice.call(i.querySelectorAll(".btn-prev")),r=document.querySelector(".multi-steps-exp-date"),l=document.querySelector(".multi-steps-cvv"),u=document.querySelector(".multi-steps-mobile"),m=document.querySelector(".multi-steps-pincode"),c=document.querySelector(".multi-steps-card");r&&new Cleave(r,{date:!0,delimiter:"/",datePattern:["m","y"]}),l&&new Cleave(l,{numeral:!0,numeralPositiveOnly:!0}),u&&new Cleave(u,{phone:!0,phoneRegionCode:"US"}),m&&new Cleave(m,{delimiter:"",numeral:!0}),c&&new Cleave(c,{creditCard:!0,onCreditCardTypeChanged:function(e){e!=""&&e!="unknown"?document.querySelector(".card-type").innerHTML='<img src="'+assetsPath+"img/icons/payments/"+e+'-cc.png" height="28"/>':document.querySelector(".card-type").innerHTML=""}});let a=new Stepper(n,{linear:!0});const f=FormValidation.formValidation(o,{fields:{multiStepsUsername:{validators:{notEmpty:{message:"Please enter username"},stringLength:{min:6,max:30,message:"The name must be more than 6 and less than 30 characters long"},regexp:{regexp:/^[a-zA-Z0-9 ]+$/,message:"The name can only consist of alphabetical, number and space"}}},multiStepsEmail:{validators:{notEmpty:{message:"Please enter email address"},emailAddress:{message:"The value is not a valid email address"}}},multiStepsPass:{validators:{notEmpty:{message:"Please enter password"}}},multiStepsConfirmPass:{validators:{notEmpty:{message:"Confirm Password is required"},identical:{compare:function(){return o.querySelector('[name="multiStepsPass"]').value},message:"The password and its confirm are not the same"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-sm-6"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton},init:e=>{e.on("plugins.message.placed",function(t){t.element.parentElement.classList.contains("input-group")&&t.element.parentElement.insertAdjacentElement("afterend",t.messageElement)})}}).on("core.form.valid",function(){a.next()}),v=FormValidation.formValidation(d,{fields:{multiStepsFirstName:{validators:{notEmpty:{message:"Please enter first name"}}},multiStepsAddress:{validators:{notEmpty:{message:"Please enter your address"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:function(e,t){switch(e){case"multiStepsFirstName":return".col-sm-6";case"multiStepsAddress":return".col-md-12";default:return".row"}}}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",function(){a.next()}),w=FormValidation.formValidation(p,{fields:{multiStepsCard:{validators:{notEmpty:{message:"Please enter card number"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:function(e,t){switch(e){case"multiStepsCard":return".col-md-12";default:return".col-dm-6"}}}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton},init:e=>{e.on("plugins.message.placed",function(t){t.element.parentElement.classList.contains("input-group")&&t.element.parentElement.insertAdjacentElement("afterend",t.messageElement)})}}).on("core.form.valid",function(){alert("Submitted..!!")});g.forEach(e=>{e.addEventListener("click",t=>{switch(a._currentIndex){case 0:f.validate();break;case 1:v.validate();break;case 2:w.validate();break}})}),S.forEach(e=>{e.addEventListener("click",t=>{switch(a._currentIndex){case 2:a.previous();break;case 1:a.previous();break}})})}})()});
