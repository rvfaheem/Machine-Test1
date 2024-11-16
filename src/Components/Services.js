import { TbDental } from "react-icons/tb";

export default function Services() {
    return <section>
        <div>
            <h1 className="font-bold text-6xl text-black  mt-28 ml-28">Transform Your Smile With veneers,Whitening,and implants</h1>
            <p className="ml-28 mt-8">Transform Your Smile With veneers,Whitening,and implants Transform Your Smile With veneers,Whitening,and implants <br />Transform Your Smile With veneers,Whitening,and implants</p>

            <div className="flex flex-col mt-10 ml-28 p-3">
                <div className="flex flex-row gap-16">
                <div className="bg-orange-50 p-3 mb-3 w-36 h-32">
                <TbDental size={60}/>
                Orthodontics
                </div>
                <div className="bg-orange-50 p-3 mb-14 w-36 h-32">
                <TbDental size={60}/>
                General Dentistry
                </div>
                <div className="bg-orange-50   p-3 mb-14 w-36 h-32">
                <TbDental size={60}/>
                Cosmetic Dentistry
                </div>
                <div className="bg-orange-50   p-3 mb-14 w-36 h-32">
                <TbDental size={60}/>
                Teeth Whitening
                </div>
                <div className="bg-orange-50  p-3 mb-14 w-36 h-32">
                <TbDental size={60}/>
                Gum Treatment
                </div>
                
                </div> 
                <div className="flex flex-row gap-16 ">
                <div className="bg-orange-50 p-3 w-36 h-32 w-28 h-32">
                <TbDental size={60}/>
                Root Canal Treatment
                </div>
                <div className="bg-orange-50 p-3 w-36 h-32 w-28 h-32">
                <TbDental size={60}/>
                Crowns and Bridges
                </div>
                <div className="bg-orange-50 p-3 w-36 h-32">
                <TbDental size={60}/>
                Jaw Joint Disorder
                </div>
                <div className="bg-orange-50  p-3 w-36 h-32">
                <TbDental size={60}/>
                Children's Dentistry
                </div>
                </div>
            </div>
        </div> <br /><br />
    </section>
}