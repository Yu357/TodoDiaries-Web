import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SubmitButton from "../buttons/SubmitButton"
import EmailInput from "../inputs/EmailInput"
import PasswordInput from "../inputs/PasswordInput"

function SignUpSection(props: { setIsShowSignUpSection: React.Dispatch<React.SetStateAction<boolean>> }) {

	const navigate = useNavigate()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirm, setPasswordConfirm] = useState("")

	const [isLoading, setIsLoading] = useState(false)

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {

		setIsLoading(true)

		// フォーム送信を無効
		e.preventDefault()

		//TODO: サインアップ

		// 成功
		navigate(-1)
	}

	return (
		<div>

			<form onSubmit={(e) => onSubmit(e)}>

				<div>

					<p className="text-2xl font-bold">アカウントを作成</p>

					<EmailInput value={email} onChange={setEmail} className="mt-3" />
					<PasswordInput value={password} onChange={setPassword} className="mt-3" />
					<PasswordInput value={passwordConfirm} onChange={setPasswordConfirm} placeholder="パスワードを確認" className="mt-3" />
				</div>

				<div className="mt-5 flex justify-between items-center">

					<button type="button" onClick={() => props.setIsShowSignUpSection(false)} className="hover:underline h-fit">既存のアカウントを使う</button>

					<SubmitButton text="サインアップ" isLoading={isLoading} disabled={email === "" || password === "" || password !== passwordConfirm} />
				</div>
			</form>
		</div>
	)
}

export default SignUpSection