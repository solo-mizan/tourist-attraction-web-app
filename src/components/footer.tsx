const Footer = () => {
    const date = new Date();



    return (
        <div>
            <div className="bg-gray-400 p-8">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold text-green-900">Travel and Stay Vacations</div>
                        <div className="text-sm ">© {date.getFullYear()} Travel and Stay Vacations. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;