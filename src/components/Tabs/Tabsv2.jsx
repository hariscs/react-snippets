import { useState } from 'react';
import styles from './Tabs.module.css';

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

const Tabsv2 = () => {
	const [activeTab, setActiveTab] = useState(TabsData[0].id);
	const handleClick = (newActiveTab) => {
		setActiveTab(newActiveTab);
	};
	return (
		<div>
			<ul className={styles.tabs}>
				{TabsData.map((tab) => (
					<li
						className={tab.id === activeTab ? styles.current : ''}
						key={tab.id}
					>
						<button onClick={() => handleClick(tab.id)}>{tab.title}</button>
					</li>
				))}
			</ul>
			{TabsData.map(
				(tab) =>
					tab.id === activeTab && (
						<div key={tab.id} className={styles.content}>
							<h2>{tab.title}</h2>
							<p>{tab.body}</p>
						</div>
					)
			)}
			{/* {TabsData.map((tab) => {
				if (tab.id === activeTab)
					return (
						<div key={tab.id} className={styles.content}>
							<h2>{tab.title}</h2>
							<p>{tab.body}</p>
						</div>
					);
				return null;
			})} */}
		</div>
	);
};

export { Tabsv2 };
