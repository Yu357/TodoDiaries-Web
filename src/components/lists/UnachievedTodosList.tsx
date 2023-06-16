import { query, collection, where, orderBy, limit, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utilities/firebase";
import Todo from "../../entities/Todo";

interface Props {
	pinned?: boolean
	className?: string
}

function UnachievedTodosList(props: Props) {

	const [todos, setTodos] = useState<Todo[] | null>(null)
	const [isLoaded, setIsLoaded] = useState(false)

	async function listen() {

		// userID 仮
		const userId = process.env.REACT_APP_SAMPLE_UID

		const isPinned: boolean = props.pinned ? true : false

		// 読み取りクエリを作成
		const q = query(collection(db, "todos"), where("achievedAt", "==", null), where("isPinned", "==", isPinned), where("userId", "==", userId), orderBy("order", "asc"), limit(100));

		// リアルタイムリスナーを設定
		onSnapshot(q, async (querySnapshot) => {

			if (querySnapshot.metadata.hasPendingWrites) return;

			// Todoの配列を作成
			let todos: Todo[] = []
			querySnapshot.forEach((doc) => {

				// ドキュメントの各フィールドの値を取り出す
				const id: string = doc.id ?? ""
				const userId: string = doc.data().userId ?? ""

				const content: string = doc.data().content ?? ""
				const order: number = doc.data().order ?? 0
				const isPinned: boolean = doc.data().isPinned ?? false

				const createdAt: Date = doc.data({ serverTimestamps: "estimate" }).createdAt.toDate() ?? new Date()

				const achievedAtFieldValue = doc.data({ serverTimestamps: "estimate" }).achievedAt
				const achievedAt: Date | null = achievedAtFieldValue === null ? null : achievedAtFieldValue.toDate()

				// 値を使ってTodoオブジェクトを作成
				const todo: Todo = {
					id: id,
					userId: userId,
					content: content,
					order: order,
					isPinned: isPinned,
					createdAt: createdAt,
					achievedAt: achievedAt
				}

				// 配列に追加
				todos.push(todo)
			});

			setTodos(todos)
			setIsLoaded(true)

		}, (error) => {

			console.log(`Comments reading failed. ${error}`)
			setIsLoaded(true)
		})
	}

	useEffect(() => {

		listen()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (

		<div className={props.className}>

			{!isLoaded &&
				<p>Loading ...</p>
			}

			{isLoaded && todos === null &&
				<p>Todo reading failed.</p>
			}

			{isLoaded && todos !== null && todos.length === 0 &&
				<p>There is no Todo.</p>
			}

			{isLoaded && todos !== null && todos.length !== 0 &&

				<div className="bg-white p-2 rounded-xl divide-y">

					{todos.map(todo => (

						<div key={todo.id} className="p-2">
							<p>{todo.content}</p>
						</div>
					))}
				</div>
			}
		</div>
	);
}

export default UnachievedTodosList;