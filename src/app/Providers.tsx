"use client"
import React from 'react'
import { store } from './(addtocart)/redux/store';
import { Provider } from 'react-redux';

const Providers = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <Provider store={store}>
      {children}
      </Provider>

    </div>
  )
}

export default Providers
