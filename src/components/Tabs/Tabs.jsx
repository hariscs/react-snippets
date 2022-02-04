import { useState } from 'react';
import styles from './Tabs.module.css';

const Tabs = ({ children }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label);
	const handleClick = (newActiveTab) => {
		setActiveTab(newActiveTab);
	};
	return (
		<div>
			<ul className={styles.tabs}>
				{children.map((tab) => (
					<li
						className={tab.props.label === activeTab ? styles.current : ''}
						key={tab.props.label}
					>
						<button href='#' onClick={(e) => handleClick(tab.props.label)}>
							{tab.props.label}
						</button>
					</li>
				))}
			</ul>
			{children.map((one) => {
				if (one.props.label === activeTab)
					return (
						<div key={one.props.label} className={styles.content}>
							{one.props.children}
						</div>
					);
				return null;
			})}
		</div>
	);
};

export { Tabs };
