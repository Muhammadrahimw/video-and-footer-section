import {IoIosStarOutline} from "react-icons/io";
import {IoIosStar} from "react-icons/io";
import {IoIosStarHalf} from "react-icons/io";
import AboutComp from "../about";
import FooterComp from "../footer";

const VideosComp = () => {
	return (
		<>
			<section className="w-[90%] mx-auto grid grid-cols-3 gap-[2em] h-[29.25em] tr max-[1340px]:text-[0.85em] max-[1200px]:text-[0.75em] max-lg:text-[0.65em] max-[930px]:text-[0.6em] max-[830px]:text-[0.55em] max-md:text-[0.5em] max-[700px]:text-[0.45em] max-sm:flex max-sm:flex-col max-sm:text-[1.2em] max-[600px]:text-[1.1em] max-[550px]:text-[1.02em] max-[500px]:text-[0.95em] max-[460px]:text-[0.85em] max-[420px]:text-[0.8em] max-[380px]:text-[0.7em] max-[340px]:text-[0.65em] max-[320px]:text-[0.6em] max-[300px]:text-[0.55em] max-w-[1440px]">
				<div className="col-span-2 min-h-full max-sm:col-span-1 max-sm:min-h-min">
					<h2 className="text-[1.5em] text-black font-bold">Videolar</h2>
					<div className="mt-[2em] bg-[#F1F3F5] p-[3em] flex items-start gap-[2.75em] h-full max-sm:flex-col max-sm:gap-[1em] max-sm:h-[35em] max-sm:p-[1.5em]">
						<div>
							<img
								className="w-full cursor-pointer"
								src="/src/assets/images/sxema.png"
								alt="sxema"
							/>
							<div className="flex items-center gap-[0.75em]">
								<div className="flex items-center gap-[0.25em] mb-[0.15em]">
									{Array.from({length: 5}, (_, index) => (
										<IoIosStarOutline key={index} />
									))}
								</div>
								<p className="text-black my-[0.5em]">18.46</p>
							</div>
							<p className="text-black">Video qo’llanma</p>
						</div>
						<div className="flex flex-col justify-start items-start gap-[1em] max-sm:flex-row">
							<div>
								<img
									src="/src/assets/images/video-qo'llanma-2.png"
									alt="video qo'llanma-2"
									className="w-full cursor-pointer"
								/>
								<div className="flex items-center gap-[0.75em]">
									<div className="flex items-center gap-[0.15em] mb-[0.1em]">
										{Array.from({length: 5}, (_, index) => (
											<IoIosStar key={index} />
										))}
									</div>
									<p className="text-black my-[0.25em]">18.46</p>
								</div>
								<p className="text-black">Video qo’llanma</p>
							</div>
							<div>
								<img
									src="/src/assets/images/video-qo'llanma-2.png"
									alt="video qo'llanma-2"
									className="w-full cursor-pointer"
								/>
								<div className="flex items-center gap-[0.75em]">
									<div className="flex items-center gap-[0.15em] mb-[0.15em]">
										{Array.from({length: 3}, (_, index) => (
											<IoIosStar key={index} />
										))}
										<IoIosStarHalf />
										<IoIosStarOutline />
									</div>
									<p className="text-black my-[0.25em]">18.46</p>
								</div>
								<p className="text-black">Video qo’llanma</p>
							</div>
						</div>
					</div>
				</div>
				<div className="min-h-full">
					<h2 className="text-[1.5em] text-black font-bold">Yangiliklar</h2>
					<div className="bg-[#F1F3F5] py-[3em] px-[1.75em] mt-[2em] flex flex-col gap-[1.25em] h-full max-sm:h-[25em] max-sm:p-[1.5em]">
						<div className="flex items-center gap-[1.5em]">
							<div className="w-[6.75em] cursor-pointer">
								<img
									className="w-full"
									src="/src/assets/images/product.png"
									alt="product"
								/>
							</div>
							<div className="text-[0.85em] text-black">
								<p>17.06.2024</p>
								<p className="mt-[0.25em]">10ta xarid uchun +2ta mahsulot</p>
							</div>
						</div>
						<div className="flex items-center gap-[1.5em]">
							<div className="w-[6.75em] cursor-pointer">
								<img
									className="w-full"
									src="/src/assets/images/product-2.png"
									alt="product"
								/>
							</div>
							<div className="text-[0.85em] text-black">
								<p>14.06.2024</p>
								<p className="mt-[0.25em]">10ta xarid uchun +2ta mahsulot</p>
							</div>
						</div>
						<div className="flex items-center gap-[1.5em]">
							<div className="w-[6.75em] cursor-pointer">
								<img
									className="w-full"
									src="/src/assets/images/product-3.png"
									alt="product"
								/>
							</div>
							<div className="text-[0.85em] text-black">
								<p>11.06.2024</p>
								<p className="mt-[0.25em]">10ta xarid uchun +2ta mahsulot</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<AboutComp />
			<FooterComp />
		</>
	);
};

export default VideosComp;
