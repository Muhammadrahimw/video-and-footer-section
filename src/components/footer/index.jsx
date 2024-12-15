import {FaPhone} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";

const FooterComp = () => {
	return (
		<section className="bg-[#00415A] w-full py-[2.5em] tr max-lg:text-[0.9em] max-[830px]:text-[0.8em] max-md:text-[0.65em] max-sm:text-[1em] max-[450px]:text-[0.8em] max-[360px]:text-[0.6em] max-w-[1440px] mx-auto">
			<div className="w-[90%] mx-auto grid grid-cols-5 gap-[1em] max-sm:grid-cols-2 max-sm:gap-[3em]">
				<div className="w-full">
					<div className="bg-white rounded flex items-center justify-center">
						<img src="/src/assets/images/logo-of-footer.png" alt="logo" />
					</div>
					<div className="text-white text-[1.15em] font-bold flex items-center gap-[0.5em] pt-[1.25em]">
						<FaPhone className="text-[0.8em]" />
						<a href="tel:+998 94 545 2266">+998 94 545 2266</a>
					</div>
					<div className="text-white text-[1em] font-normal flex items-center gap-[0.5em] mt-[0.5em]">
						<MdEmail />
						<a href="mailto:info@rce.uz">info@rce.uz</a>
					</div>
				</div>
				<div className="w-full text-white flex flex-col justify-between gap-[0.5em]">
					<b>Biz haqimizda</b>
					<a href="#" className="text-[0.9em]">
						Tariximiz
					</a>
					<a href="#" className="text-[0.9em]">
						Magazin ma’lumotlari
					</a>
					<a href="#" className="text-[0.9em]">
						Rekvizitlar
					</a>
					<a href="#" className="text-[0.9em]">
						Hamkorlarimiz
					</a>
				</div>
				<div className="w-full text-white flex flex-col justify-between gap-[0.5em]">
					<b>Online xarid</b>
					<a href="#" className="text-[0.9em]">
						Qanday buyutma berish
					</a>
					<a href="#" className="text-[0.9em]">
						Yetkazib berish
					</a>
					<a href="#" className="text-[0.9em]">
						To’lov qilish
					</a>
					<a href="#" className="text-[0.9em]">
						Buyutma holati
					</a>
				</div>
				<div className="w-full text-white flex flex-col justify-between gap-[0.5em]">
					<a href="#" className="text-[0.9em]">
						Radio City Buxoro
					</a>
					<a href="#" className="text-[0.9em]">
						Radio City Toshkent
					</a>
					<a href="#" className="text-[0.9em]">
						Radio City Samarqand
					</a>
					<a href="#" className="text-[0.9em]">
						Radio City Navoiy
					</a>
					<a href="#" className="text-[0.9em]">
						Radio City Farg’ona
					</a>
				</div>
				<div>
					<div>
						<a href="#">
							<img src="/src/assets/images/play-market.png" alt="play market" />
						</a>
					</div>
					<div className="mt-[1em] mb-[1.35em]">
						<a href="#">
							<img src="/src/assets/images/app-store.png" alt="app store" />
						</a>
					</div>
					<div className="flex items-center gap-[0.85em] max-sm:hidden">
						<a href="#">
							<img src="/src/assets/images/icons/telegram.svg" alt="telegram" />
						</a>
						<a href="#">
							<img
								src="/src/assets/images/icons/instagram.svg"
								alt="instagram"
							/>
						</a>
						<a href="#">
							<img src="/src/assets/images/icons/youtube.svg" alt="youtube" />
						</a>
					</div>
				</div>
				<div className="hidden items-start gap-[0.85em] max-sm:flex w-full">
					<a href="#">
						<img
							className="w-[2.5em]"
							src="/src/assets/images/icons/telegram.svg"
							alt="telegram"
						/>
					</a>
					<a href="#">
						<img
							className="w-[2.5em]"
							src="/src/assets/images/icons/instagram.svg"
							alt="instagram"
						/>
					</a>
					<a href="#">
						<img
							className="w-[2.5em]"
							src="/src/assets/images/icons/youtube.svg"
							alt="youtube"
						/>
					</a>
				</div>
			</div>
			<div className="border-t w-[90%] mx-auto border-white mt-[2.5em] mb-[2em]"></div>
			<p className="text-center text-white text-[0.8em] tracking-wide">
				Magazin va Optimchilar
			</p>
		</section>
	);
};

export default FooterComp;
