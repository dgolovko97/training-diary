import React from 'react'

const LoginPage = (): React.ReactElement => {
  return (
    <div data-testid='login-page'>
      <form action=''>
        <input type='text' />
        <input type='text' />
        <button>Отправить</button>
      </form>
    </div>
  )
}

export default LoginPage
