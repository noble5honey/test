

$(document).ready(function(){
// showTime();
});

window.onload = function() {

		datepersistent();

	   var now = new Date();
       var year = now.getFullYear(); //得到年份
       var month = now.getMonth();//得到月份
       var date = now.getDate();//得到日期
       month = month + 1;
       if (month < 10) month = "0" + month;
       if (date < 10) date = "0" + date;
       var time = "";
       time = year + "-" + month + "-" + date;
		$("#upodatetime").text(time);
		layer.open({
		  title: '信息提示'
		  ,content: '1.根据上级单位要求，疫区相关问题做了补充，顺序也有调整，请核对系统带入的信息是否准确，并做好更新。<br/>2.返苏人员请确保跟所在社区报备。<br/>3.根据社区要求隔离观察的员工，在经社区确认解除隔离观察后，务必修改状态。'
	});   
};


// function judgeelementhidden(){

// 	if (document.getElementById("hb_date").value == "") {
// 		document.getElementById("hb_detail").style = "display:none;"
// 	} else {
// 		document.getElementById("hb_detail").style = "display:none;"
// 	}
// }

function datepersistent(){
	document.getElementById("name").value = localStorage.getItem('name');
	// document.getElementById("company").value = localStorage.getItem('company');
	var company = localStorage.getItem('company');
	if (company == "" || company==null) {
		company = "相城数字科技";
	}
	 layui.use(['form','layer','laydate'], function(){
	 	var form = layui.form;
	 		form.val("formTest", { 
			  "company": company,
			  "department":localStorage.getItem('department'),
			  "workSituation":localStorage.getItem('workSituation'),
			  "health":localStorage.getItem('health'),
			  "phoneNumber" :localStorage.getItem('phoneNumber'),
			  // "temperature" : localStorage.getItem('temperature'),
});
	 }); 
	
	// document.getElementById("department").value = localStorage.getItem('department');
	// document.getElementById("phoneNumber").value = localStorage.getItem('phoneNumber');
	// document.getElementById("temperature").value = localStorage.getItem('temperature');
	// document.getElementById("workSituation").value = localStorage.getItem('workSituation');
	document.getElementById("hb_date").value = localStorage.getItem('routeWHDate');
	document.getElementById("wz_date").value = localStorage.getItem('routeWZDate');
	document.getElementById("tz_date").value = localStorage.getItem('routeTZDate');
	document.getElementById("hz_date").value = localStorage.getItem('routeHZDate');
	document.getElementById("nb_date").value = localStorage.getItem('routeNBDate');
	document.getElementById("xy_date").value = localStorage.getItem('routeXYDate');
	document.getElementById("zmd_date").value = localStorage.getItem('routeZMDDate');
	document.getElementById("hf_date").value = localStorage.getItem('routeHFDate');
	document.getElementById("fy_date").value = localStorage.getItem('routeFYDate');
	document.getElementById("nc_date").value = localStorage.getItem('routeNCDate');
	document.getElementById("jiechu_date").value = localStorage.getItem('contactPlaceDate');
	document.getElementById("yisi_date").value = localStorage.getItem('contactPeopleDate');
	document.getElementById("qita_date").value = localStorage.getItem('backDate');
	// document.getElementById("renzai_date").value = localStorage.getItem('renzai_date');

	// document.getElementById("dateshequ").value = localStorage.getItem('communityDate');
	// document.getElementById("address").value = localStorage.getItem('address');
	// document.getElementById("street").value = localStorage.getItem('street');
	// document.getElementById("health").value = localStorage.getItem('health');
	

	// document.getElementById("health").value = localStorage.getItem('health');
	// document.getElementById("employeetype").value = localStorage.getItem('employeetype');

}
