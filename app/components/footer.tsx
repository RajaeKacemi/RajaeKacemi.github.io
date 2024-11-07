import SocialLinks from "./socials";

const Footer = () => {
    return (
        <div className="flex flex-col items-center">
            <SocialLinks />
            <hr className="h-1 text-gray-800 w-full mt-2"/>
            <p className="py-2 text-xs font-medium ">
                Developed by Rajaa KACEMI 🦆
            </p>
        </div>
    )
}

export default Footer;