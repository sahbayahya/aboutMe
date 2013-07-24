$(document).ready(function() {
	if($('#github_work').length > 0) {
		$.support.cors = true;
		$.get('https://api.github.com/users/SanghyukChun/repos', function(result) {
			$.each(result, function(idx, repo) {
				var name = repo.name
				var url = repo.html_url
				var desc = repo.description
				$('#github_work').append("<li><a href="+url+">"+name+"</a>: "+desc+"</li>")
			});
		});
	}
});

$("#contact_cancle_btn").click(function() {
	$("#contact-form>.control-group>.controls>input").val('')
	$("#contact-form>.control-group>.controls>textarea").val('')
});