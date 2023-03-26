import React from 'react';
import logo from '../assets/logo.png';
import bid from '../assets/bid.png';
import heart from '../assets/heart.png';
import settings from '../assets/settings.png';
import search from '../assets/search.png';
import sun from '../assets/sun.png';
import bell from '../assets/bell.png';
import discover from '../assets/discover.png';
import top_2 from '../assets/top_2.jpeg';


export default function Home(){
	return(
		<div className='flex flex-row'>
			{/* side-bar */}
			<div className='w-[80px] bg-side-bar h-screen p-2 flex flex-col items-center gap-10'>
				<img src={logo} alt='...' className='h-[30px] w-[30px] m-4'/>
				<img src={logo} alt='...' className='h-[30px] w-[30px]'/>
				<img src={bid} alt='...' className='h-[30px] w-[30px]'/>
				<img src={heart} alt='...' className='h-[30px] w-[30px]'/>
				<img src={settings} alt='...' className='h-[30px] w-[30px]'/>
			</div>
			{/* middle panel */}
			<div className='w-full bg-main-panel h-screen text-white'>
				{/* Header */}
				<div className='flex justify-between'>
					<div className='flex mt-6 ml-14 bg-search-bar h-[50px] w-[380px] items-center rounded-lg'>
					<img src={search} alt="..." className='h-[28px] w-[28px] m-2'/>
					<p className='m-2 opacity-30'>Search Here</p>
					</div>	

					<div className='flex mt-6 justify-center mr-14 items-center'>
						<img src={sun} alt="..." className='h-[19px] w-[19px] m-2'/>
						<img src={bell} alt="..." className='h-[16px] w-[18px] m-2'/>
						<div className='h-[43px] w-[43px] bg-slate-400 m-2 rounded-full'></div>
					</div>
				</div>	

				{/* Top Section */}
				<div className='flex ml-14 mt-6 font-Poppins'>
					{/* top 1 */}
					<div className='h-64 w-[40vw] flex absolute rounded-lg'>
						<div className='flex flex-col items-start absolute bg-top-1 h-full w-full rounded-lg justify-evenly'>
							<p className='text-3xl ml-4 leading-3'>Discover, Collect, Sell</p>
							<p className='text-3xl ml-4 leading-3'>and Create your ISTE exclusive NFT</p>
							<p className='text-lg opacity-80 ml-4 leading-9'>ISTE NFT Marketplace</p>
							<div className='flex ml-4 mt-3'>
								<div className='w-28 h-12 mr-[10px] rounded-lg flex justify-center items-center bg-explore'>
									<button className=''>Explore</button>
								</div>
								<div className='w-28 h-12 ml-[10px] rounded-lg flex justify-center items-center bg-create'>
									<button>Create</button>
								</div>
							</div>
						</div>
						<img src={discover} alt="..." className='rounded-xl'/>

					</div>
					{/* top 2 */}
					<div className='h-64 w-[40vw] ml-[43vw] font-Poppins flex absolute rounded-lg bg-side-bar'>
						<div className='flex justify-center items-center'>
							<div className='flex justify-center items-center m-2 rounded-2xl'>
								<img src={top_2} alt="..." className='w-52 h-52 ml-2 rounded-2xl'/>
							</div>
							<div className='flex flex-col justify-center items-start'>
								<div className='flex justify-start items-center w-full m-2'>
									<div className='bg-slate-400 rounded-full h-[44px] w-[44px] mr-2'></div>
									<p>Pranav Salunkhe</p>
								</div>
								<div className='flex justify-between m-2 w-full'>
									<div className='mr-2'>
										<p>ISTE Crypt</p>
										<p>Auction Time</p>
										<p className='opacity-30'>5h 22m 4s</p>
									</div>
									<div className='ml-2 flex flex-col items-end justify-end'>
										<div className='flex justify-center items-center'>
											<p>Current Bid: </p><p className='text-purple-900 ml-2 justify-center'>0.0522ETH</p>
										</div>
										<p className='opacity-30'>0.225ETH</p>
									</div>
								</div>
								<div className='flex ml-2 w-full'>
									<div className='basis-1/2 h-12 mr-[10px] rounded-lg flex justify-center items-center bg-explore'>
										<button className=''>Place a bid</button>
									</div>
									<div className='basis-1/2 h-12 ml-[10px] rounded-lg flex justify-center items-center bg-create'>
										<button>Details</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}