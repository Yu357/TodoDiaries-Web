import AchieveCountAtMonthBarChart from "../charts/AchieveCountAtMonthBarChart"

interface Props {
	className?: string
}

function ThirdColumn(props: Props) {



	return (

		<section className={props.className}>

			<h2 className="text-2xl font-bold">統計</h2>

			<AchieveCountAtMonthBarChart className="mt-4" />

			<div className="mt-4 bg-white px-4 py-3 rounded-xl dark:bg-zinc-800">
				<p className="text-zinc-500">Horizontal bar chart</p>
			</div>
		</section>
	)
}

export default ThirdColumn