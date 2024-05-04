import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { LoginPage } from 'pages/LoginPage'
import { MainPage } from 'pages/MainPage'
import { useTranslation } from 'react-i18next'

export const App = (): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <div data-testid='app'>
      <div>{t('Привет мир!')}</div>
      <div>
        <Link to={'/login'}>{t('Войти')}</Link>
        <Link to={'/'}>{t('Главная')}</Link>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'login'} element={<LoginPage />} />
            <Route path={'/'} element={<MainPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}
