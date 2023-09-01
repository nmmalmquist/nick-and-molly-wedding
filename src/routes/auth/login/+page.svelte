<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login to client account" />
</svelte:head>

<h1>Login Page</h1>

<form method="post" action="?/login">
	<label for="username">username: </label>
	<input type="text" name="username" id="1" />
	<label for="password">password: </label>
	<input type="text" name="password" id="2" />
	<button>submit</button>
</form>
