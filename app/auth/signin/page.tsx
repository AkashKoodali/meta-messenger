import { getProviders } from 'next-auth/react';
import Image from 'next/image';
import SignInComponent from './SignInComponent';


async function SignInPage() {
    const providers = await getProviders();

  return (
    <div className='grid justify-center'>
        <div>
        <Image 
        className='rounded-md mx-auto mt-10 object-cover'
        width={150}
        height={150}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1024px-Facebook_Messenger_logo_2020.svg.png?20220118041828"
        alt='profile pic'
        />
        </div>
        
        <SignInComponent providers= {providers}/>
    </div>
  )
}

export default SignInPage