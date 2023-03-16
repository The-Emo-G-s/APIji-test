import React, { useEffect, useState } from 'react';
import api from '../server/api/emojis';

const EmojiList = () => {
	const [list, setList] = useState([]);

	useEffect(()=> {
		const fetchEmojis = async()=> {
			try {
				const res = await api.get('/emojis?access_key=1964210b221736f081d59668e9afaabcbf450755');
				setList(res.data.filter(emoji => emoji.slug[0] !== 'e' || emoji.slug.split('-')[0].length > 3));
			} catch (err) {

			}
		};
		const fetchAnimalBugEmojis = async()=> {
			try {
				const res = await api.get('/emojis?access_key=1964210b221736f081d59668e9afaabcbf450755');
				setList(res.data.filter(emoji => (emoji.slug[0] !== 'e' || emoji.slug.split('-')[0].length > 3) && emoji.subGroup === 'animal-bug'));
			} catch (err) {

			}
		};
		const fetchAnimalEmojis = async()=> {
			try {
				const res = await api.get('/categories/animals-nature?access_key=1964210b221736f081d59668e9afaabcbf450755');
				setList(res.data.filter(emoji => emoji.slug[0] !== 'e' || emoji.slug.split('-')[0].length > 3));
			} catch (err) {

			}
		};
		/*LAME
		const searchFoodEmojis = async()=> {
			try {
				const res = await api.get('/emojis?search=food&access_key=1964210b221736f081d59668e9afaabcbf450755');
				setList(res.data.filter(emoji => emoji.slug[0] !== 'e' || emoji.slug.split('-')[0].length > 3));
			} catch (err) {

			}
		};
		✅*/

		fetchAnimalBugEmojis();
	}, [])

	function makeTitle(slug) {
  var words = slug.split('-');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = /*add code here to fix possessives*/word.charAt(0).toUpperCase() + word.slice(1);
  }

  const label = words.join(' ');

	return label.replace(' S ', `'s `)
}


	return (
		<ul>
			{list.map((emoji)=> {
					return (
						<li key={emoji.slug}>{emoji.character} {makeTitle(emoji.slug)}</li>
					)
			})}
		</ul>
	)
}

export default EmojiList
