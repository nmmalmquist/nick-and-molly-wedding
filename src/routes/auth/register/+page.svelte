<svelte:head>
	<title>Register</title>
	<meta name="description" content="Register to become a member" />
</svelte:head>

<h1>Register Page</h1>

<form method="post" action="?/register">
	<label for="username">username: </label>
	<input type="text" name="username" id="1" />
	<label for="password">password: </label>
	<input type="text" name="password" id="2" />
	<button>submit</button>
</form>
