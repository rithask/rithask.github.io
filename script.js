$(document).ready(function() {
	$("#adviceBtn").click(function() {
		$.ajax({
			url: 'https://api.adviceslip.com/advice',
			type: 'GET',
			dataType: 'json',
			success: function(response) {
				$("#adviceBox").html(response.slip.advice);
			}
		});
	});

	$("#dropdownMenu a").on('click', function(e) {
		e.preventDefault();
		var tag = $(this).text();
		$("#dropdownMenuButton").html(tag);
		
		$.ajax({
			url: 'https://api.quotable.io/random?tags=' + tag.toLowerCase(),
			type: 'GET',
			dataType: 'json',
			success: function(response) {
				quote = response.content;
				author = response.author;
				$("#quoteBox").html(quote);
				$("#quoteAuthor").html('-' + author);
			}
		})
	})

	$("#meow").on('click', function() {
		$.ajax({
			url: 'https://cataas.com/cat?json=true',
			dataType: 'json',
			type: 'GET',
			success: function(response) {
				cat = response.url;
				catUrl = ('https://cataas.com' + cat);
				console.log(catUrl);
				$("#catImg").attr('src', catUrl);
			}
		})
	})
});