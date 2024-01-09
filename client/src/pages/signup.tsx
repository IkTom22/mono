import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import{useRouter} from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Signup() {
  const [email, setEmail] =useState("")
  const [password, setPassword] = useState("")
  
  const router = useRouter()
  // @ts-ignore
  function handleSubmit (e){
    e.preventDefault()
    console.log(`Email: ${email}, Password: ${password}`)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, 
        {
            method: 'POST', 
            body: JSON.stringify({"user": {"email":email, "password":password,"password_confirmation":password}}),
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then((response) =>{
            if(response.ok){
                router.push('/login')
            }else {
                throw new Error("Something went wrong")
            }
        }).catch((error) =>console.error(error));
       
    
  }
  return (
    <main>
      <h1>The Impact Directory</h1>
      <form className='flex flex-col max-w-4xl gap-2'>
        <input 
          className='border-2' 
          type="email" value={email} 
          onChange={(e)=>setEmail(e.target.value)}
          data-testid="signup-input-email"
        />
        <input 
          className='border-2' 
          type="password" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          data-testid="signup-input-password"
        />
        <button 
          onClick={handleSubmit} 
          data-testid="signup-button-submit"
        >
          Sign up
        </button>
      </form>
    </main>
  )
}