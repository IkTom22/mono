import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import{useRouter} from 'next/router'
import AkinaIcon from '../../public/images/AkinaIcon.svg'
import AkinaLogo from '../../public/images/AkinaLogo.svg'
import { error } from 'console'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  const [email, setEmail] =useState("")
  const [password, setPassword] = useState("")
  
  const router = useRouter()
  // @ts-ignore
  function handleSubmit (e){
    e.preventDefault()
    console.log(`Email: ${email}, Password: ${password}`)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/sign_in?email=${email}&password=${password}`, {method: 'POST', credentials: 'include',})
    .then((response) =>{
      if(response.ok){return response.json()}
      else{ throw new Error('Something went wrong')}
      })
    .then(data => router.push('/listings'))
    .catch(error => console.log(error))
    
  }
  return (
    <main className='w-screeen h-screen flex items-center justify-center font-light'>
      <div 
        className='w-[384px] h-[645px] flex flex-col items-center justify-center '
      >
        <Image 
          src ={AkinaIcon}
          alt="Akina Icon"
          className='mb-6'
          height={80}
          width={80}
        />
        <div 
          className='mb-8 w-full'
          style={{boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.25)'}}
        >
          <div 
            className='w-full py-3 bg-pale-purple text-white flex items-center justify-center'
          >
            <h1 className='text-4xl font-semibold leading-[44px]'>Impact Directory</h1>
          </div>
          <div className='px-4 py-8 w-full'>
            <p className='leading-6'>
              Enter your email address and password to login. Don&#39;t have an account? <span>Get in touch</span>
            </p>
            <form className=' w-full flex flex-col gap-4 pt-8 '>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" >Your Email Address</label>
                <input 
                  className='border-2 rounded-sm h-10 px-4 hover:border hover:border-pale-blue' 
                  type="email" 
                  value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                  data-testid="login-input-email"/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="password">Your Password</label>
                <input 
                  className='border-2 rounded-sm h-10 px-4 hover:border hover:border-pale-blue' 
                  type="password" 
                  value={password} 
                  onChange={(e)=>setPassword(e.target.value)}
                  data-testid="login-input-password"/>  
              </div>
              <p className='w-full text-aqua-blue text-sm underline font-extralight'>Forgot password?</p>
              <button 
                onClick={handleSubmit}
                className='bg-main-blue w-[175px] text-white uppercase py-2 rounded-full mt-6 self-center'
                data-testid="login-button-submit"
              >
                Login</button>
            </form>
          </div>
        </div>
        <Image 
          src ={AkinaLogo}
          alt="Akina Icon"
          className='mb-6'
          height={35}
          width={85}
        />
      </div>
      
    </main>
  )
}