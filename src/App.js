import { useState } from 'react';
import data from './data';

function App() {
	const [filteredData, setFilteredData] = useState(data);

	const search = (e) => {
		setFilteredData(
			data.filter((item) => item.title.toLowerCase().includes(e.target.value))
		);
	};

	return (
		<div className='app'>
			<h1>React Search</h1>
			<input type='text' placeholder='Search the data' onKeyUp={search} />
			<ul>
				{filteredData.map((user) => (
					<li key={user.id}>{user.title}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
