import Todo from "../../../entities/Todo"
import NavLinkToModal from "../others/NavLinkToModal"


interface Props {
	todos: Todo[]
	label?: string
}

function TodosList(props: Props) {

	return (

		<div className="mt-4">

			{props.label &&
				<span className="text-zinc-500">{props.label}</span>
			}

			<div className="mt-2 divide-y dark:divide-zinc-600">

				{props.todos.map(todo => (

					<NavLinkToModal to={`/todos/${todo.id}`} key={todo.id} className="block py-3 px-4 bg-white dark:bg-zinc-800  hover:bg-zinc-200 dark:hover:bg-zinc-700 transition first:rounded-t-xl last:rounded-b-xl">
						<p className="whitespace-pre-line">{todo.content}</p>
					</NavLinkToModal>
				))}
			</div>
		</div>
	)
}

export default TodosList