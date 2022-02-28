import React, { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Body from '../components/Body';

function Home() {


    return (
      <div>
        <Header />
        <Button name='Próximo Lançamento' />
        <Button name='Último Lançamento' />
        <Button name='Próximos Lançamentos' />
        <Button name='Lançamentos passados' />
        <Body />
      </div>
    );
  }
  
  export default Home;