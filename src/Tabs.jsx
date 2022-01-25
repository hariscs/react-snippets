import { useState } from 'react';

const Tabs = () => {
	const [index, setIndex] = useState(0);

	return (
		<div className='tabs'>
			<div className='tabsList'>
				<div
					className={`tabHead ${index === 0 ? 'active' : ''}`}
					onClick={() => setIndex(0)}
				>
					<h1>tab 1</h1>
				</div>
				<div
					className={`tabHead ${index === 1 ? 'active' : ''}`}
					onClick={() => setIndex(1)}
				>
					<h1>tab 2</h1>
				</div>
				<div
					className={`tabHead ${index === 2 ? 'active' : ''}`}
					onClick={() => setIndex(2)}
				>
					<h1>tab 3</h1>
				</div>
			</div>
			<div className='tabBody'>
				<div
					className={`tabContent ${index === 0 ? 'active' : ''}`}
					hidden={index !== 0}
				>
					<p>
						tab 1 contents Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Tempora ut blanditiis amet doloremque dolore inventore
						recusandae fugiat laboriosam molestias, provident sequi neque. Autem
						praesentium similique accusantium, vero reprehenderit amet placeat.
					</p>
				</div>
				<div
					className={`tabContent ${index === 1 ? 'active' : ''}`}
					hidden={index !== 1}
				>
					<p>
						tab 2 contents Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Non voluptate repellat neque unde rem ut distinctio laborum
						quaerat sapiente nemo?
					</p>
				</div>
				<div
					className={`tabContent ${index === 2 ? 'active' : ''}`}
					hidden={index !== 2}
				>
					<p>
						tab 3 contents Lorem ipsum dolor sit amet consectetur accusamus
						tenetur blanditiis expedita deleniti repellendus enim debitis eum
						suscipit mollitia doloremque fugiat veritatis? Distinctio temporibus
						quaerat amet voluptatum tempore odit nesciunt corporis reprehenderit
						officiis sunt fugit repellendus eligendi delectus doloribus
						voluptatibus beatae, autem ex, dicta vel corrupti nam nulla eius?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
