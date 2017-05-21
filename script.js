$(function(){
	
	$('.btn-primary').on('click', function(){
	var text = 'esto es en try';
	
	var dat = "";
	var number = $(this).attr('data-number');
	var gets = {type: "user", number: number, data: dat};

	
	$.get('http://www.alx-design.us/try.php',gets ,function(data){
		
		//console.log(data);
		$(".card .card-img-top").attr('src', data.profilePic);
		$(".card .card-block .card-text").html('<div style="width: 100%; display: inline-block;">'+
		'Frist Name: '+data.firstName+'<br />'+
		'Last Name: '+data.lastName+'<br />' +
		'Age Old: '+data.age+'<br />' +
		'</div>');
	}, 'json');
	});
})