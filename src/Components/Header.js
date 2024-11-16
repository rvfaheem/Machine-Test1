export default function Header(){
    return<header className="flex flex-row justify-between p-2 bg-slate-500">
        <a className="" href="#"><span className="text-3xl text-orange-300">Smile</span> <span className="text-2xl">Essentials</span><br /> <span className="text-xl">Dentalclinic</span></a>

        <nav >
            <ul className="flex flex-column gap-3 ">
                <li >Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Promotions</li>
                <li>Blogs</li>
                <li>Contact Us</li>
                <button className="rounded bg-orange-400 p-2">Appointment</button>

            </ul>
        </nav>
    </header>
}
