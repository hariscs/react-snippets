import { Tabs } from './components/Tabs';
import { Tabsv2 } from './components/Tabs/Tabsv2';
import './tab.css';

const TabsData = [
	{
		id: 'Tab 1',
		title: 'Tab 1',
		body: 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit.',
	},
	{
		id: 'Tab 2',
		title: 'Tab 2',
		body: 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit.',
	},
	{
		id: 'Tab 3',
		title: 'Tab 3',
		body: 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit.',
	},
];

function App() {
	return (
		<>
			<Tabsv2 />
			<Tabs>
				{TabsData.map((tab) => (
					<div label={tab.id} key={tab.id}>
						<h2>{tab.title}</h2>
						<p>{tab.body}</p>
					</div>
				))}
			</Tabs>
			{/* <Tabs>
				<div label='Tab 1'>
					<h2>Tab 1</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
						accusantium asperiores reiciendis dolor commodi dolore veniam in
						quis nam similique odit consectetur, velit ut? Vel laborum deserunt
						totam esse incidunt.
					</p>
				</div>
				<div label='Tab 2'>
					<h2>Tab 2</h2>
					<p>
						Asperiores reiciendis dolor commodi dolore veniam in quis nam
						similique odit consectetur, velit ut? Vel laborum deserunt totam
						esse incidunt.
					</p>
				</div>
				<div label='Tab 3'>
					<h2>Tab 3</h2>
					<p>
						Xonsectetur adipisicing elit. Vel accusantium asperiores reiciendis
						dolor commodi dolore veniam inue odit consectetur, velit ut? Vel
						laborum deserunt totam esse incidunt.
					</p>
				</div>
			</Tabs> */}
		</>
	);
}

export default App;
