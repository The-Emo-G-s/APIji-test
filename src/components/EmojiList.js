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


	return (
		<ul>
			{list.map((emoji)=> {
				return (
					<li key={emoji.slug}>{emoji.character}</li>
				)
			})}
		</ul>
	)
}

export default EmojiList
