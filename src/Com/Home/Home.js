import React from 'react'
import { useEffect } from 'react';
import { firebase } from '../../firebase';
import { useNavigate } from 'react-router-dom'


export default function Home() {
const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if(!user) navigate('/regis')
      console.log(user)
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>Home</div>
  )
}
