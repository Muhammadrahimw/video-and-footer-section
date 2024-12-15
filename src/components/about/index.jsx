import React from "react";

const AboutComp = () => {
	return (
		<div className="w-[90%] mx-auto mt-[7em] bg-[url(/src/assets/images/sxema-background.png)] bg-no-repeat bg-contain bg-right-bottom tr max-xl:text-[0.85em] max-lg:text-[0.75em] max-[930px]:text-[0.65em] max-[830px]:text-[0.6em] max-md:text-[0.5em] max-sm:bg-none max-sm:text-[1em] max-sm:mt-[53em] max-[600px]:text-[0.9em] max-[550px]:text-[0.85em] max-[500px]:text-[0.8em] max-[460px]:text-[0.7em] max-[420px]:text-[0.65em] max-[380px]:text-[0.6em] max-[340px]:text-[0.55em] max-[320px]:text-[0.5em] max-[300px]:text-[0.45em] max-w-[1440px]">
			<div className="w-[31em] max-sm:w-full pb-[3em]">
				<p className="text-[1.25em] text-black">
					RADIO CITY - bu mikroelektronika bozoridagi noyob va eng taniqli
					brend. Biz yetkazib beramiz elektron komponentlar, o'lchash asboblari,
					lehim uskunalari, asboblar, Arduino komponentlari, elektr
					mahsulotlari, maishiy elektronika uchun butlovchi qismlar va
					boshqalar.
					<br />
					<br />
					Kengaytirilgan, muntazam yangilanib turuvchi katalog 7 000 000 dan
					ortiqni o'z ichiga oladi. tovarlar nomlari. Aqlli va qulay mahsulotni
					qidirish, etkazib berishning har xil turlari va usullari to'lov.
					Mahsulot mavjudligi va yetkazib berish muddatlari haqidagi soʻnggi
					maʼlumotlar.
					<br />
					<br />
					Buyurtmalarni Rossiya, Belarus, Qozog'iston, Armaniston va
					Qirg'izistonning barcha hududlariga yetkazib beramiz.
				</p>
			</div>
			<div className="w-full mt-[2em] hidden max-sm:block">
				<img
					className="w-full"
					src="/src/assets/images/sxema-background.png"
					alt="sxema-background"
				/>
			</div>
		</div>
	);
};

export default AboutComp;
