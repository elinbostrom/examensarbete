import React from 'react'
import { useRouter } from 'next/router'

export default function index() {
  const router = useRouter()
  console.log(router.query.slug);

  // Rendera ut rätt HTML för rätt slug :) 

  return (
    <div>
      kurssida
    </div>
  )
}
