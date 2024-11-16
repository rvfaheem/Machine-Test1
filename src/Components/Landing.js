import image from '../Images/image1.jpg'
import { TbDental } from "react-icons/tb";
import { MdReviews } from "react-icons/md";
import { ImHappy } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
export default function Landing(){
    return<section className='bg-slate-300'>
        <div>
            <div className='flex flex-row'>
                <h2 className="text-5xl m-48"><span className="font-bold text-black">Have a Shining<br/> Smile With our<br /></span> <span className="text-orange-400 font-bold">modern methods</span></h2>
                <img src={image} />
            </div>
            <div className=' w-3/5 m-3 ml-80 p-7 h-36 bg-white flex flex-row gap-4'>
            <TbDental size={60}/>
            <h1><span className='text-2xl bg-orange-400'>20 + Years</span><br />Dental Care</h1>
            <MdReviews size={60}/>
            <h1><span className='text-2xl bg-orange-400'>2200+ </span><br />Google Reviews</h1>
            <ImHappy size={60}/>
            <h1><span className='text-2xl bg-orange-400'>50k+ </span><br />Happy Patients</h1>
            <FaPeopleGroup size={60}/>
            <h1><span className='text-2xl bg-orange-400'>15 + </span><br />Dentist</h1>

            </div>
            {/* <div className='bg-black w-screen h-28 mt-40'></div> */}
        </div> <br /> <br /> <br />
    </section>
}