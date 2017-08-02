var movieData = [
	{
		title:"Lego Movie",
		hasWatched:"have watched", 
		rating:"5 stars"
	},
	{
		title:"Emoji Movie",
		hasWatched:"haven't watched",
		rating:"n/a"
	},
	{
		title:"War For the Planet of the Apes",
		hasWatched:"haven't watched",
		rating:"n/a"
	},
	{
		title:"The Book of Life",
		hasWatched:"have watched",
		rating:"3 stars"
	}
];

for (var i = 0; i < movieData.length; i++) {
	var result = "You " + movieData[i].hasWatched + " " + movieData[i].title + " - " + movieData[i].rating
	console.log(result);
};