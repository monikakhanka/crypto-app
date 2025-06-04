const Login = () => {
    return (
        <form action="submit" className="flex flex-col w-100 h-200 bg-amber-300">
            <input type="text" placeholder="Enter email" className="w-xl border-2 my-5" />
            <input type="password" placeholder="Enter password" className="w-xl border-2 my-5"/>
            <button className="bg-blue-400 w-xl">Log in</button>
        </form>
    )
}

export default Login;