import React from 'react'
import Layout from '../src/components/Layout/layout'
import BG from './assets/background.jpeg'

import { Button } from 'reactstrap'

function App() {
  return (
    <div className='App'>
      <Layout>
        <div style={{ height: '40rem' }} className='h-64 w-screen relative'>
          <img
            className='h-full absolute object-cover w-full'
            src={BG}
            alt='background img'
          />
          <div className='absolute z-10 bottom-0 left-0 top-0 right-0 bg-gray-800 opacity-50' />
          <div
            id='text-container'
            className='relative h-full z-50  w-8/12 xl:w-full  pl-4 pt-32'
          >
            <h2 className='text-5xl lg:text-6xl text-white tracking-wide font-bold'>
              healthy eating
            </h2>
            <h2 className='text-5xl lg:text-6xl text-white tracking-wide font-bold'>
              made easy for you
            </h2>
            <Button size='lg' color='success'>
              Get started
            </Button>{' '}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default App
