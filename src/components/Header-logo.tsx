import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function HeaderLogo(props) {
	return (
		<>
			<Link href={'/'}>
				<div className={'items-center hidden md:flex'}>
					<Image src={'./logo.svg'} alt={'Logo'} width={50} height={50} />
					<p className="font-semibold text-white text-2xl ml-2 5">Finance</p>
				</div>
			</Link>
		</>
	)
}

export default HeaderLogo
