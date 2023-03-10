import { NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

function Header() {

	return (

		<header className='w-full mx-auto px-4 lg:width-lg lg:px-0'>

			<div className='py-2 flex justify-between items-center'>

				<NavLink to="/" className="text-3xl">Todo Diaries</NavLink>

				<button>

					<BsPersonCircle className="text-2xl"/>
				</button>
			</div>
		</header>
	)
}

export default Header