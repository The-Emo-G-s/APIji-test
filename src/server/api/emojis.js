import axios from 'axios';

export default axios.create({
	baseURL: 'https://emoji-api.com/emojis?access_key=1964210b221736f081d59668e9afaabcbf450755',
});

//version WITHOUT axios...
/*
fetch('https://emoji-api.com/emojis?access_key=1964210b221736f081d59668e9afaabcbf450755')
	.then(res => res.json())
	.then(data => console.log(data))

*/