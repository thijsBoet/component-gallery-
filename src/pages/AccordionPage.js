import React from 'react'
import Accordion from '../components/Accordion'

const AccordionPage = () => {
  const items = [
		{
			id: 1,
			label: 'What is React?',
			content:
				'React JS is a JavaScript library created by Facebook for building user interfaces. It is used for creating single-page applications, mobile apps, and complex web applications that are dynamic and interactive. React JS is declarative, component-based, and efficient, allowing developers to create interactive user interfaces quickly with minimal coding. It uses a virtual DOM to efficiently update the component tree and render only the necessary components when changes occur. React JS also has the ability to reuse components, making it easier to create complex applications. Furthermore, React JS is open source and is constantly being improved and updated.',
		},
		{
			id: 2,
			label: 'Why use React?',
			content:
				'React is used by developers because it is a powerful and efficient way to create complex user interfaces with minimal effort. React is a declarative and component-based library, meaning it is comprised of individual, encapsulated components that can be reused and composed into larger components. React components are written in a JavaScript-like syntax called JSX, which makes them easier to read and understand. React also uses a virtual DOM, which allows developers to create and update components without having to reload the entire page. Additionally, React is fast and scalable, with a large ecosystem of libraries and tools to make development easier. React is also easy to learn and has an active community of developers that can help answer questions and provide assistance. Ultimately, React is a powerful and efficient way to create complex user interfaces with minimal effort, making it a popular choice among developers.',
		},
		{
			id: 3,
			label: 'How do you use React?',
			content:
				'Professional developers use React in many different ways. Some of the most popular use cases include creating dynamic user interfaces for web applications, creating mobile applications with React Native, creating interactive visualizations, and building single-page applications. React also makes it easy to create reusable components that can be shared across different projects. With its rich ecosystem of libraries and tools, React makes it easier for developers to create complex applications quickly and efficiently.',
		},
	];

	return <Accordion items={items} />;
}

export default AccordionPage