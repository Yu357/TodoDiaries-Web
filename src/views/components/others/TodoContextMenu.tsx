import { ControlledMenu, MenuItem } from "@szhsin/react-menu"
import { BsPin, BsFillPinFill, BsCheckLg, BsTrash3 } from "react-icons/bs"
import Todo from "../../../entities/Todo"
import { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

interface Props {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	anchorPoint: {
		x: number
		y: number
	}

	todo: Todo
}

function TodoContextMenu(props: Props) {

	const [isDark, setIsDark] = useState(false)

	useEffect(() => {

		const isDark = matchMedia('(prefers-color-scheme: dark)').matches;
		setIsDark(isDark)
	}, [props])

	return (
		<div>

			<ControlledMenu
				anchorPoint={props.anchorPoint}
				state={props.isOpen ? 'open' : 'closed'}
				direction="right"
				onClose={() => props.setIsOpen(false)}
				theming={isDark ? "dark" : undefined}
				position="initial"
			>

				{props.todo.achievedAt === null && props.todo.isPinned! &&
					<MenuItem>

						<button className="py-1 flex items-center gap-4">
							<BsPin className="text-lg text-zinc-500" />
							<span>固定をやめる</span>
						</button>
					</MenuItem>
				}

				{props.todo.achievedAt === null && !props.todo.isPinned! &&
					<MenuItem>

						<button className="py-1 flex items-center gap-4">
							<BsFillPinFill className="text-lg text-zinc-500" />
							<span>固定する</span>
						</button>
					</MenuItem>
				}

				{props.todo.achievedAt === null &&
					< MenuItem >

						<button className="py-1 flex items-center gap-4">
							<BsCheckLg className="text-lg text-zinc-500" />
							<span>達成済みにする</span>
						</button>
					</MenuItem>
				}

				{props.todo.achievedAt !== null &&
					< MenuItem >

						<button className="py-1 flex items-center gap-4">
							<AiOutlineClose className="text-lg text-zinc-500" />
							<span>未達成にする</span>
						</button>
					</MenuItem>
				}

				<MenuItem>

					<button className="py-1 flex items-center gap-4 text-red-500">
						<BsTrash3 className="text-lg" />
						<span>削除</span>
					</button>
				</MenuItem>
			</ControlledMenu>
		</div >
	)

}

export default TodoContextMenu