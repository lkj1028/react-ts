'use client'
import styles from './page.module.css'
import { useState } from 'react';

function AddCountButoon() {
  let [count, setCount] = useState(0);
  function addCount() {
    setCount(count + 1)
  }
  return (
    <button onClick={addCount}>add{ count }</button>
  )
}


function MyButton () {
  return (
    <div>123222222</div>
  )
}
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       111111
      </div>
      <MyButton />
      <AddCountButoon />
    </main>
  )
}
