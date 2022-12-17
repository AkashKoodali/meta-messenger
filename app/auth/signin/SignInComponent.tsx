'use client'
import { getProviders, signIn } from 'next-auth/react';
import { useEffect } from 'react';

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

function SignInComponent({providers}: Props) {

    let redirectUrl = "http://location:3000" || process.env.VERCEL_URL;

useEffect(() => {
  const url = new URL(location.href);
  redirectUrl = url.searchParams.get("callbackUrl")!;
});
  return (
    <div className='flex justify-center'>
        { Object.values(providers!).map((provider) => (
            <div key={provider.name}>
                <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'
                 onClick={()=> signIn(provider.id, {
                    callbackUrl: redirectUrl,
                    
                })}>Sign in with {provider.name}</button>
            </div>
        ))}
    </div>
  )
}

export default SignInComponent