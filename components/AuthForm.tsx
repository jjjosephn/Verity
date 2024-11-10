'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { set, z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useRouter } from 'next/router'
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const AuthForm = ({ type } : { type: string }) => {
   // const router = useRouter()
   const [user, setUser] = useState(null)
   const [isLoading, setIsLoading] = useState(false)
   const formSchema = authFormSchema(type)
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: "",
         firstName: "",
         lastName: "",
         address: "",
         state: "",
         postalCode: "",
         dateOfBirth: "",
         ssn: "",
      },
   })
   
    // 2. Define a submit handler.
   const onSubmit = async(data: z.infer<typeof formSchema>) => {
      setIsLoading(true)
      try {
         if (type === 'sign-in') {
            // const respose = await signIn({
            //    email: data.email,
            //    password: data.password
            // })

            // if(response) {
            //    router.push('/')
            // }
         }
         if (type === 'sign-up') {
            // const newUser = await signUp(data)
            // setUser(newUser)
         }
      } catch (error) {
         console.log(error)
      } finally {
         setIsLoading(false)
      }
   
   }
  

   return (
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-9'>
         <Link href='/' className='cursor-pointer flex items-center gap-1'>
            <Image 
               src='/icons/logos.jpeg' 
               width={34} 
               height={34} 
               alt='Verity Logo' 
            />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Verity</h1>
         </Link>
         <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
               {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
               <p className='text-16 font-normal text-gray-600'>
                  {user ? 'Link your bank account to get started' : 'Please enter your credentials'}
               </p>
            </h1>
         </div>
      </header>
      {user ? (
         <div className='flex flex-col gap-4'>
            {/* Plaid */}
         </div>
      ) : (
         <>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {type === 'sign-up' && (
                     <>
                        <div className='flex gap-4'>
                           <CustomInput control={form.control} name='firstName' label='First Name' placeholder='ex: Jane' />
                           <CustomInput control={form.control} name='lastName' label='Last Name' placeholder='ex: Doe' />
                        </div>
                        <CustomInput control={form.control} name='address' label='Address' placeholder='Enter your address' />
                        <CustomInput control={form.control} name='city' label='City' placeholder='Enter your city' />
                        <div className='flex gap-4'>
                           <CustomInput control={form.control} name='state' label='State' placeholder='ex: CA' />
                           <CustomInput control={form.control} name='postalCode' label='Postal Code' placeholder='ex: 10119' />
                        </div>
                        <div className='flex gap-4'>
                           <CustomInput control={form.control} name='dateOfBirth' label='Date of Birth' placeholder='yyyy-mm-dd' />
                           <CustomInput control={form.control} name='ssn' label='SSN' placeholder='ex: 1234' />
                        </div>
                     </>
                  )}
                  <CustomInput 
                     control={form.control}
                     name='email'
                     label='Email'
                     placeholder='Enter your email'
                  />

                  <CustomInput 
                     control={form.control}
                     name='password'
                     label='Password'
                     placeholder='Enter your password'
                  />

                  <div className='flex flex-col gap-4'>
                     <Button type="submit" disabled={isLoading} className='form-btn'>
                        {isLoading ? (
                           <>
                              <Loader2 className='animate-spin' size={20} />
                              <p>Loading...</p>
                           </>
                        ) : type === 'sign-in' ? 'Log in' : 'Sign Up' }
                     </Button>
                  </div>
               </form>
            </Form>
            <footer className='flex justify-center gap-1'>
               <p className='text-14 font-normal text-gray-400'>
                  {type==='sign-in' ? 'Don\'t have an account? ' : 'Already have an account? '}
                  <Link className='form-link' href={type === 'sign-up' ? '/sign-in' : '/sign-up' }>
                     {type === 'sign-in' ? 'Sign up' : 'Sign in'}
                  </Link>
               </p>

            </footer>
         </>
      )} 
   </section>
  )
}

export default AuthForm