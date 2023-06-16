interface Props {
	className?: string
}

function StatsSection(props: Props) {

	return (

		<div className={props.className}>

			<h2 className="text-2xl font-bold">統計</h2>

			<div className="mt-4 bg-white p-2 rounded-xl">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum distinctio facilis atque id sed ipsa, molestiae libero consequuntur minus!</p>
			</div>

			<div className="mt-4 bg-white p-2 rounded-xl">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum distinctio facilis atque id sed ipsa, molestiae libero consequuntur minus!</p>
			</div>
		</div>
	)
}

export default StatsSection;