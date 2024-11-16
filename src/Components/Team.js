import image from '../Images/image2.jpg'
export default function Team(){
    return <section>
        <div className='bg-white w-screen h-auto'>
            <div className="bg-black w-screen h-auto relative overflow-hidden">
                <div className="flex justify-center items-center gap-10 h-full pt-10">
                <div className='relative z-20 '>
                <img className='h-64 w-64 object-cover' src={image} />
                <h2 className='font-bold text-white'> Dr John paul </h2>
               <p className='text-white'>general doctor</p> 
                </div>
                <div className='relative  z-10 '>
                <img className='h-64 w-64 object-cover' src={image} />
                <h2 className='font-bold text-white'> Dr John paul </h2>
                <p className='text-white'>general doctor</p> 
                </div>
                <div className='relative  z-10  '>
                <img className='h-64 w-64 object-cover' src={image} />
                <h2 className='font-bold text-white'> Dr John paul </h2>
                <p className='text-white'>general doctor</p> 
                </div>
                <div className='relative  z-10  '>
                <img className='h-64 w-64 object-cover' src={image} />
                <h2 className='font-bold text-white'> Dr John paul </h2>
                <p className='text-white'>general doctor</p> 
                </div>
                </div>
            </div>
            <center><button className='rounded bg-orange-400 p-2 m-2'>View All Team</button></center>
        </div>
        <br />
        <br />
       
    </section>
}