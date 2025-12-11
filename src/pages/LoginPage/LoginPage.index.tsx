import type { FormEvent } from "react"

export function LoginPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    console.log({ values: event.currentTarget.elements, currentTarget: event.currentTarget });
  }

  // TODO: [REDUX] Implement login logic

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <span>Nome de usuário ou email</span>
          <input type="text" name="username" id="username" required />
        </label>

        <label htmlFor="password">
          <span>Senha</span>
          {/* TODO: insert password mask */}
          <input type="text" name="password" id="password" required />
        </label>

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
