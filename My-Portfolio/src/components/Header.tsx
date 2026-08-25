import React from "react";
import img from "@/assets/WhatsApp Image 2024-03-26 at 22.50.36_ff84dcfc.jpg";
import Image from "next/image";

const Header = () => {
	return (
		<div className="w-full h-20 flex justify-center bg-[rgba(0,0,0,2)] items-center border-b-[1px] border-[rgba(255,255,255,0.1)]">
			<div className="w-11/12 sm:w-4/5 h-5/6 flex items-center">
				<div className="flex h-full items-center gap-2 flex-grow">
					<Image src={img} alt="header" className="h-8 w-8 rounded-full" />
					<h2 className="text-blue-700 font-bold text-2xl hidden sm:block">
						David Goyal
					</h2>
				</div>
				<button className="bg-blue-700 text-white rounded-md px-4 py-2 ">
					<a href="#contact">Get in touch</a>
				</button>
			</div>
		</div>
	);
};

export default Header;
