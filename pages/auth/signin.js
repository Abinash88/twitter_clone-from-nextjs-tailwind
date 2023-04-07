import { runTransaction } from 'firebase/firestore';
import {getProviders, signIn} from 'next-auth/react'


const signin = ({providers}) => {
  return (
    <div className='flex justify-center mt-20 space-x-4'>
        <img className='hidden lg:inline object-cover md:w-44 md:h-80 rotate-6' src="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/archive/direct_message_syncmobilesearchimprovementsandmore95.thumb.1280.1280.png" alt="twitter image inside a phone" />
        <div className=" ">
            {Object.values(providers).map((provider) => {
                return <div className=' flex flex-col items-center'>
                <img className='w-36 object-cover ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Logo_of_Twitter%2C_Inc..svg/512px-Logo_of_Twitter%2C_Inc..svg.png" alt="twitter logo" />

                <p className='text-center text-small italic my-10 '>This app is created for learning purposes</p>
                <button onClick={() => signIn(provider.id, {callbackUrl:'/'})} className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'>Sign in with {provider.name}</button>
                </div>
            })}
        </div>
    </div>
  )
}

export default signin;


export async function getServerSideProps() {
    const  providers = await getProviders();

    return{
        props:{
            providers
        }
    }
}