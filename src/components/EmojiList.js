import React, { useEffect, useState } from 'react';
import api from '../server/api/emojis';

const EmojiList = () => {
	const [list, setList] = useState([]);

	useEffect(()=> {
		const fetchEmojis = async()=> {
			try {
				const res = await api.get('');
				setList(res.data);
			} catch (err) {

			}
		};

		fetchEmojis();
	}, [])

	function makeTitle(slug) {
  var words = slug.split('-');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = /*add code here to fix possessives*/word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
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
