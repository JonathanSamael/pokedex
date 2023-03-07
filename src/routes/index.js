import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonPage } from '../pages/PokemonPage'
import { ShowPokemon } from '../components/pokemon'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowPokemon />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
  )
}
