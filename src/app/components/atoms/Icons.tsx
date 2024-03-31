interface IconProps {
	color?: string;
	width?: string;
}

export const GetIcon = (icon: string): JSX.Element => {
	const iconMap: Record<string, JSX.Element> = {
		arrowDown: <IconArrowDown />,
		minus: <IconMinus />,
		add: <IconAdd />,
		trash: <IconTrash />,
		dot: <IconDot />,
		hashtag: <IconHashtag />,
		check: <IconCheck />,
		percentage: <IconPercentage />,
		caret: <IconCaret />,
		profile: <IconProfile />,
		eye: <IconEye />,
		closedEye: <IconClosedEye />,
		cart: <IconCart />,
		search: <IconSearch />,
		close: <IconClose />,
		google: <IconGoogle />,
		menu: <IconMenu />,
		next: <IconNext />,
		previous: <IconPrevious />,
		truck: <IconTruck />,
		addToCart: <IconAddToCart />,
		filter: <IconFilter />,
		star: <IconStar />,
		perfume: <IconPerfume />,
		calendar: <IconCalendar />,
		warning: <IconWarning />,
		flower: <IconFlower />,
		air: <IconAir />,
		lemon: <IconLemon />,
		leaf: <IconLeaf />,
		wood: <IconWood />,
		salt: <IconSalt />,
		candy: <IconCandy />,
		fruits: <IconFruits />,
		water: <IconWater />,
		woman: <IconWoman />,
		man: <IconMan />,
		unisex: <IconUnisex />,
		heart: <IconHeart />,
		whatsapp: <IconWhatsApp />,
		mail: <IconMail />,
		instagram: <IconInstagram />,
		edit: <IconEdit />,
		addImage: <IconAddImage />,
		cleanBoy: <IconCleanBoy />,
		tie: <IconTie />,
		shirt: <IconShirt />,
		shirtClassic: <IconShirtClassic />,
		shoe: <IconShoe />,
		coat: <IconCoat />,
		dress: <IconDress />,
		labCoat: <IconLabCoat />,
		necklace: <IconNecklace />,
	};

	return iconMap[icon] ?? <IconHeart />;
};

export const IconArrowDown = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'} // * 1.5rem es lo equivalente a 24px
			viewBox='0 0 1024 1024'
		>
			<path
				fill={color ?? 'black'}
				d='M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496'
			></path>
		</svg>
	);
};

export const IconArrrowLeft = ({ color, width }: IconProps): JSX.Element => {
	return <svg xmlns="http://www.w3.org/2000/svg" width={width ?? '1.5rem'} height={width ?? '1.5rem'} viewBox="0 0 1024 1024"><path fill={color ?? 'black'} d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0" /></svg>;
}

export const IconArrowRight = ({ color, width }: IconProps): JSX.Element => {
	return <svg xmlns="http://www.w3.org/2000/svg" width={width ?? '1.5rem'} height={width ?? '1.5rem'} viewBox="0 0 1024 1024"><path fill={color ?? 'black'} d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0" /></svg>
}


export const IconMinus = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 20 20'
		>
			<path
				fill={color ?? 'black'}
				fillRule='evenodd'
				d='M1 10a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1'
				clipRule='evenodd'
			></path>
		</svg>
	);
};

export const IconAdd = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path fill={color ?? 'black'} d='M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z'></path>
		</svg>
	);
};

export const IconTrash = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 256 256'
		>
			<path
				fill={color ?? 'black'}
				d='M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0'
			></path>
		</svg>
	);
};

export const IconDot = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 48 48'
		>
			<path
				fill={color ?? 'black'}
				stroke={color ?? 'black'}
				strokeWidth={4}
				d='M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z'
			></path>
		</svg>
	);
};

export const IconHashtag = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='m5.41 21l.71-4h-4l.35-2h4l1.06-6h-4l.35-2h4l.71-4h2l-.71 4h6l.71-4h2l-.71 4h4l-.35 2h-4l-1.06 6h4l-.35 2h-4l-.71 4h-2l.71-4h-6l-.71 4zM9.53 9l-1.06 6h6l1.06-6z'
			></path>
		</svg>
	);
};

export const IconCheck = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z'
			></path>
		</svg>
	);
};

export const IconPercentage = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='m18.501 3.5l-15 15.001l1.996 1.996l15-15zM7.002 5a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4m10 10a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4'
			></path>
		</svg>
	);
};

export const IconCaret = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill='none'
				stroke={color ?? 'black'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='m18 10l-6-6l-6 6zm0 4l-6 6l-6-6z'
			></path>
		</svg>
	);
};

export const IconProfile = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<g fill='none' stroke={color ?? 'black'} strokeWidth={2}>
				<path
					strokeLinejoin='round'
					d='M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z'
				></path>
				<circle cx={12} cy={7} r={3}></circle>
			</g>
		</svg>
	);
};

export const IconEye = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 32 32'
		>
			<path
				fill={color ?? 'black'}
				d='M28.034 17.29c.13.43.53.71.96.71v-.01a.993.993 0 0 0 .96-1.28C29.923 16.61 26.613 6 15.995 6S2.07 16.61 2.04 16.72c-.16.53.14 1.08.67 1.24c.53.16 1.09-.14 1.25-.67C4.07 16.91 6.89 8 15.997 8c9.105 0 11.915 8.903 12.038 9.29M12 18a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12'
			></path>
		</svg>
	);
};

export const IconClosedEye = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill='none'
				stroke={color ?? 'black'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={1.5}
				d='m19.5 16l-2.475-3.396M12 17.5V14m-7.5 2l2.469-3.388M3 8c3.6 8 14.4 8 18 0'
			></path>
		</svg>
	);
};

export const IconCart = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z'
			></path>
		</svg>
	);
};

export const IconSearch = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill='none'
				stroke={color ?? 'black'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6'
			></path>
		</svg>
	);
};

export const IconClose = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z'
			></path>
		</svg>
	);
};

export const IconGoogle = (): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1.5rem'
			height='1.5rem'
			viewBox='0 0 48 48'
		>
			<path
				fill='#FFC107'
				d='M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917'
			></path>
			<path
				fill='#FF3D00'
				d='m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691'
			></path>
			<path
				fill='#4CAF50'
				d='M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44'
			></path>
			<path
				fill='#1976D2'
				d='M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917'
			></path>
		</svg>
	);
};

export const IconMenu = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<g fill='none'>
				<path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'></path>
				<path
					fill={color ?? 'black'}
					d='M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z'
				></path>
			</g>
		</svg>
	);
};

export const IconNext = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 1024 1024'
		>
			<path
				fill={color ?? 'black'}
				d='M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0'
			></path>
		</svg>
	);
};

export const IconPrevious = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 1024 1024'
		>
			<path
				fill={color ?? 'black'}
				d='M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0'
			></path>
		</svg>
	);
};

export const IconTruck = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1c.89 0 1.69.39 2.24 1H15V6z'
			></path>
		</svg>
	);
};

export const IconAddToCart = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 48 48'
		>
			<g fill='none'>
				<path d='M39 32H13L8 12h36z'></path>
				<path
					stroke={color ?? 'black'}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={4}
					d='M3 6h3.5L8 12m0 0l5 20h26l5-20z'
				></path>
				<circle
					cx={13}
					cy={39}
					r={3}
					stroke={color ?? 'black'}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={4}
				></circle>
				<circle
					cx={39}
					cy={39}
					r={3}
					stroke={color ?? 'black'}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={4}
				></circle>
				<path
					stroke={color ?? 'black'}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={4}
					d='M22 22h8m-4 4v-8'
				></path>
			</g>
		</svg>
	);
};

export const IconFilter = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 16 16'
		>
			<path
				fill={color ?? 'black'}
				d='M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5'
			></path>
		</svg>
	);
};

export const IconStar = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z'
			></path>
		</svg>
	);
};

export const IconPerfume = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<g fill='none' stroke={color ?? 'black'} strokeWidth={1.5}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7'
				></path>
				<path d='M7 5c.552 0 1 .052 1-.5S7.552 4 7 4'></path>
				<path
					strokeLinecap='round'
					d='M2.161 16A7.07 7.07 0 0 1 2 14.495C2 10.355 5.582 7 10 7s8 3.356 8 7.495c0 1.915-.766 3.662-2.027 4.987c-.45.473-.676.709-1.62 1.114C13.41 21 12.76 21 11.459 21H8.542c-1.302 0-1.952 0-2.896-.404a7.022 7.022 0 0 1-.646-.31'
				></path>
				<path
					strokeLinecap='round'
					d='M2.5 13c1.435.58 3.143 1.73 5.36 1.98c2.49.28 3.995-1.396 6.14-1.685'
				></path>
				<path d='M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6'></path>
				<path d='M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982c-.552.956-1.97 1.172-3.165.482c-1.196-.69-1.717-2.026-1.165-2.982c.552-.957 1.97-1.173 3.165-.482Z'></path>
			</g>
		</svg>
	);
};

export const IconCalendar = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M12 12h5v5h-5zm7-9h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5zM5 19V9h14v10z'
			></path>
		</svg>
	);
};

export const IconWarning = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<g fill='none'>
				<path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'></path>
				<path
					fill={color ?? 'black'}
					d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1'
				></path>
			</g>
		</svg>
	);
};

export const IconFlower = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='m12 2.076l.455.233a12.05 12.05 0 0 1 4.402 3.846a11.92 11.92 0 0 1 2.962-.957L21 4.98V13a9 9 0 0 1-18 0V4.98l1.18.218a11.92 11.92 0 0 1 2.963.957a12.05 12.05 0 0 1 4.402-3.846zM8.878 7.165a12.06 12.06 0 0 1 3.122 3.2a12.066 12.066 0 0 1 3.122-3.2A10.055 10.055 0 0 0 12 4.337a10.056 10.056 0 0 0-3.122 2.828m2.021 5.269a10.05 10.05 0 0 0-3.908-4.102A9.939 9.939 0 0 0 5 7.457V13c0 3.29 2.27 6.05 5.329 6.8A12.032 12.032 0 0 1 10 17c0-1.617.32-3.159.9-4.566m1.554 7.551A7 7 0 0 0 19 13V7.457A9.996 9.996 0 0 0 12 17c0 1.041.159 2.044.453 2.985'
			></path>
		</svg>
	);
};

export const IconAir = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 20 20'
		>
			<path
				fill={color ?? 'black'}
				d='M2.643 6.357c1.747-1.5 3.127-2.686 6.872-.57c1.799 1.016 3.25 1.4 4.457 1.398c2.115 0 3.486-1.176 4.671-2.193a1.037 1.037 0 0 0 .122-1.439a.987.987 0 0 0-1.41-.125c-1.746 1.502-3.127 2.688-6.872.57c-4.948-2.793-7.266-.803-9.128.797a1.037 1.037 0 0 0-.121 1.439a.986.986 0 0 0 1.409.123m14.712 2.178c-1.746 1.5-3.127 2.688-6.872.57c-4.948-2.795-7.266-.804-9.128.795a1.037 1.037 0 0 0-.121 1.439a.986.986 0 0 0 1.409.125c1.747-1.501 3.127-2.687 6.872-.572c1.799 1.018 3.25 1.4 4.457 1.4c2.115 0 3.486-1.176 4.671-2.195a1.035 1.035 0 0 0 .122-1.438a.986.986 0 0 0-1.41-.124m0 5.106c-1.746 1.502-3.127 2.688-6.872.572c-4.948-2.795-7.266-.805-9.128.795a1.037 1.037 0 0 0-.121 1.439a.985.985 0 0 0 1.409.123c1.747-1.5 3.127-2.685 6.872-.57c1.799 1.016 3.25 1.4 4.457 1.4c2.115 0 3.486-1.178 4.671-2.195a1.037 1.037 0 0 0 .122-1.439a.988.988 0 0 0-1.41-.125'
			></path>
		</svg>
	);
};

export const IconLemon = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M3.608 12.344c-.183 1.679.312 3.24 1.223 4.6l.25.373l-.567 2.179l2.165-.579l.376.251c1.36.907 2.923 1.4 4.603 1.218c1.68-.183 3.596-1.054 5.635-3.093c2.04-2.039 2.91-3.955 3.093-5.635c.183-1.68-.31-3.244-1.218-4.603l-.25-.376l.578-2.165l-2.18.567l-.372-.25c-1.36-.911-2.921-1.406-4.6-1.223c-1.678.183-3.594 1.056-5.637 3.1c-2.043 2.042-2.916 3.958-3.099 5.636m-1.988-.216c.243-2.231 1.387-4.548 3.673-6.835c2.287-2.287 4.604-3.43 6.834-3.673c2.062-.225 3.948.331 5.544 1.303l1.547-.403l.047-.007a1.949 1.949 0 0 1 2.23 2.256l-.009.044l-.406 1.521c.965 1.595 1.518 3.48 1.294 5.54c-.242 2.231-1.383 4.55-3.667 6.833c-2.284 2.284-4.602 3.425-6.833 3.667c-2.06.224-3.945-.329-5.54-1.294l-1.52.406l-.045.008a1.949 1.949 0 0 1-2.256-2.23l.007-.046l.403-1.547c-.972-1.596-1.528-3.482-1.303-5.543m6.257-2.833l1.417-1.417l1.417 1.417l-1.417 1.417zm-.707 3.536l1.417-1.417l1.417 1.417l-1.417 1.417zm4.242-4.243l1.417-1.417l1.417 1.417l-1.417 1.417z'
			></path>
		</svg>
	);
};

export const IconLeaf = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 256 256'
		>
			<path
				fill={color ?? 'black'}
				d='M227.42 39.86a12 12 0 0 0-11.28-11.28c-39.6-2.33-74.59 2.34-104 13.87C84 53.48 62.31 70.58 49.39 91.9c-17.62 29.11-17.66 64.45-.45 98.19l-17.43 17.43a12 12 0 0 0 17 17l17.43-17.43c16.74 8.54 33.88 12.85 50.45 12.85a91.31 91.31 0 0 0 47.74-13.3c21.32-12.92 38.42-34.62 49.45-62.75c11.5-29.43 16.17-64.43 13.84-104.03m-75.76 146.22C131.57 198.25 108 199.17 83.94 189l84.54-84.54a12 12 0 1 0-17-17L67 172.06c-10.14-24-9.22-47.63 3-67.72c20.91-34.53 70.54-53.72 134-52.25c1.38 63.44-17.81 113.08-52.34 133.99'
			></path>
		</svg>
	);
};

export const IconWood = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<g
				fill='none'
				stroke={color ?? 'black'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
			>
				<path d='M6 5.5a6 2.5 0 1 0 12 0a6 2.5 0 1 0-12 0'></path>
				<path d='M18 5.5v4.626a1.415 1.415 0 0 1 1.683 2.18l-.097.108L18 14v4c0 1.61-2.54 2.925-5.725 3H12c-3.314 0-6-1.343-6-3v-2l-1.586-1.586A1.414 1.414 0 0 1 6 12.127V5.5m4 7V14m4 2v1'></path>
			</g>
		</svg>
	);
};

export const IconSalt = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='m16.88 4l2.15 2.1l-5.53 4.4l-1-1L16.87 4zm0-2a2 2 0 0 0-1.55.72L9.8 9.65l3.54 3.54l6.94-5.52c.9-.76.97-2.13.13-2.97L18.3 2.59c-.4-.4-.91-.59-1.42-.59M9.1 10.36l-.71.71a1.02 1.02 0 0 0 0 1.43l2.11 2.1c.21.2.46.29.72.29s.51-.09.71-.29l.7-.7zM6 15c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-5 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1'
			></path>
		</svg>
	);
};

export const IconCandy = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<g
				fill='none'
				stroke={color ?? 'black'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
			>
				<path d='m9.5 7.5l-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7m4.5-1v10m-4-9v10'></path>
				<path d='m16 7l1-5l1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1m-9 9l-1 5l-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1'></path>
			</g>
		</svg>
	);
};

export const IconFruits = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 48 48'
		>
			<g fill={color ?? 'black'} fillRule='evenodd' clipRule='evenodd'>
				<path d='M18.88 7.566a1 1 0 0 1 1 1v6.6a1 1 0 1 1-2 0v-6.6a1 1 0 0 1 1-1'></path>
				<path d='M11.78 13.905c1.13-.27 2.283-.065 3.48.553c.975.505 1.667.736 2.206.847c.538.112.966.114 1.483.114v2h-.02c-.516 0-1.12 0-1.868-.155c-.757-.157-1.622-.462-2.72-1.03c-.878-.453-1.54-.517-2.096-.384c-.584.14-1.201.53-1.912 1.264c-1.632 1.688-2.139 3.426-2.316 4.762c-.1 1.644.197 4.89 1.668 8.063c.5 1.08 1.21 2.57 2.076 3.737c.432.582.866 1.03 1.283 1.306c.405.267.741.34 1.046.288c3.123-.538 3.71-.551 4.319-.551h1.037v2H18.38c-.422 0-.92 0-3.95.522c-.94.162-1.787-.127-2.488-.59c-.689-.455-1.284-1.106-1.787-1.783c-1.005-1.353-1.791-3.024-2.284-4.088c-1.638-3.532-1.972-7.137-1.848-9.064l.003-.032l.004-.032c.212-1.644.844-3.839 2.866-5.928c.845-.874 1.783-1.556 2.885-1.82'></path>
				<path d='M14.64 11.41c1.496 1.431 2.307 3.166 2.307 4.51a1 1 0 1 0 2 0c0-2.05-1.168-4.275-2.925-5.956C14.244 8.265 11.743 7 8.896 7a1 1 0 0 0 0 2c2.244 0 4.268.999 5.743 2.41'></path>
				<path d='M8.574 7.009a1 1 0 0 1 1.116.868c.492 3.93 3.945 6 6.734 7.115a1 1 0 0 1-.743 1.857c-2.869-1.147-7.335-3.604-7.975-8.724a1 1 0 0 1 .868-1.116m17.188 6.894c-1.152-.264-2.334-.066-3.57.548c-1.02.506-1.747.74-2.317.853c-.57.113-1.022.115-1.56.115a1 1 0 0 0 0 2h.019c.537 0 1.16 0 1.93-.153c.781-.155 1.676-.458 2.816-1.024c.924-.458 1.632-.528 2.236-.39c.626.144 1.277.542 2.017 1.277c1.716 1.703 2.235 3.452 2.414 4.784a1 1 0 0 0 1.982-.266c-.222-1.653-.884-3.85-2.987-5.938c-.881-.874-1.85-1.548-2.98-1.806m.945 20.377a1 1 0 0 0-1.414.027c-.757.786-1.393 1.05-1.931.962c-3.252-.538-3.86-.55-4.485-.55a1 1 0 0 0 0 2h.028c.447 0 .967 0 4.13.523c1.522.252 2.785-.599 3.699-1.548a1 1 0 0 0-.027-1.415'></path>
				<path d='M32.65 16.103c-1.003 1.81-1.263 3.709-.864 4.992a1 1 0 1 1-1.91.594c-.609-1.959-.153-4.43 1.025-6.556c1.193-2.152 3.206-4.101 5.925-4.947a1 1 0 1 1 .594 1.91c-2.143.666-3.78 2.222-4.77 4.007'></path>
				<path d='M34.719 17.379c-1.168 1.71-2.748 2.793-4.073 3.013a1 1 0 1 0 .326 1.973c2.023-.335 4.027-1.851 5.398-3.858c1.388-2.032 2.227-4.706 1.762-7.515a1 1 0 1 0-1.974.326c.367 2.214-.288 4.375-1.44 6.06'></path>
				<path d='M31.78 23a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-4.5 2.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0'></path>
				<path d='M37.845 18.09a4.5 4.5 0 0 1 2.716 5.755a1 1 0 1 1-1.883-.675a2.5 2.5 0 1 0-4.706-1.69a1 1 0 0 1-1.882-.675a4.5 4.5 0 0 1 5.755-2.715'></path>
				<path d='M36.253 23.176a4.501 4.501 0 0 1 3.822 8.014a1 1 0 1 1-1.144-1.64a2.5 2.5 0 1 0-3.008-3.99a1 1 0 1 1-1.262-1.552a4.501 4.501 0 0 1 1.592-.832M27.78 29a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-4.5 2.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0'></path>
				<path d='M35.78 29a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-4.5 2.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0'></path>
				<path d='M31.78 35a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-4.5 2.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0'></path>
				<path d='M37.834 33.966a1 1 0 0 1 1.278-.606a4.5 4.5 0 1 1-4.675 7.44a1 1 0 1 1 1.405-1.423a2.5 2.5 0 1 0 2.598-4.133a1 1 0 0 1-.606-1.278'></path>
			</g>
		</svg>
	);
};

export const IconWater = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M2.5 17.23v-1.038q.777-.096 1.21-.51q.434-.413 1.64-.413q1.263 0 1.784.5q.52.5 1.535.5q1.027 0 1.547-.5t1.784-.5q1.252 0 1.784.5q.531.5 1.547.5q1.027 0 1.541-.5q.515-.5 1.778-.5q1.206 0 1.64.414q.433.413 1.21.51v1.038q-.906-.116-1.438-.539q-.531-.423-1.412-.423q-.996 0-1.526.5t-1.793.5q-1.252 0-1.784-.5T12 16.27q-1.027 0-1.547.5t-1.784.5q-1.263 0-1.787-.5t-1.532-.5q-.912 0-1.403.423t-1.447.539m0-3.77v-1.038q.777-.096 1.21-.51q.434-.413 1.64-.413q1.252 0 1.778.5t1.541.5q1.027 0 1.547-.5T12 11.5q1.252 0 1.78.5q.53.5 1.54.5q1.026 0 1.546-.5t1.784-.5q1.194 0 1.64.413q.445.414 1.21.51v1.039q-.917-.116-1.443-.539q-.526-.423-1.407-.423q-.996 0-1.526.5t-1.793.5q-1.252 0-1.784-.5T12 12.5q-1.027 0-1.541.5q-.515.5-1.778.5q-1.264 0-1.8-.5q-.535-.5-1.531-.5q-.9 0-1.403.423t-1.447.539m0-3.77V8.654q.777-.096 1.21-.51q.434-.413 1.64-.413q1.252 0 1.778.5t1.541.5q1.027 0 1.547-.5T12 7.73q1.252 0 1.78.5q.53.5 1.54.5q1.026 0 1.546-.5t1.784-.5q1.194 0 1.64.413q.445.414 1.21.51v1.038q-.917-.115-1.443-.538q-.526-.423-1.407-.423q-.996 0-1.526.5t-1.793.5q-1.252 0-1.784-.5T12 8.73q-1.027 0-1.541.5q-.515.5-1.778.5q-1.264 0-1.8-.5q-.535-.5-1.531-.5q-.9 0-1.422.423q-.522.423-1.428.538'
			></path>
		</svg>
	);
};

export const IconWoman = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 48 48'
		>
			<path
				fill={color ?? 'black'}
				fillRule='evenodd'
				d='M24 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-3.04 4c-1.37 0-2.298.665-2.907 1.531c-.564.801-.897 1.829-1.168 2.717c-.2.66-.237.798-.331 1.159l-.003.011c-.131.503-.365 1.396-1.195 4.328c-.134.477.132 1.048.735 1.213c.62.171 1.195-.202 1.338-.705c.91-3.22 1.106-3.984 1.204-4.366v-.003c.078-.305.106-.41.314-1.094c.28-.92.54-1.657.897-2.164l.002-.004l.009-.011l1.688.873l-3.96 14.315c1.18.314 3.055.7 6.418.7c3.258 0 5.3-.363 6.427-.665l-3.97-14.35l1.687-.876l.012.018c.357.507.617 1.244.897 2.165c.208.684.236.788.314 1.093v.003c.098.382.294 1.147 1.204 4.366c.143.503.717.876 1.338.705c.603-.165.87-.736.735-1.213a212.06 212.06 0 0 1-1.18-4.273l-.018-.066c-.094-.361-.13-.5-.331-1.16c-.27-.887-.604-1.915-1.168-2.716c-.61-.866-1.537-1.531-2.906-1.531H24.51zm12.338 4.894c.127.486.357 1.368 1.183 4.285a3.001 3.001 0 0 1-2.084 3.715a2.966 2.966 0 0 1-1.327.056l1.213 4.385c.271.98-.214 2.114-1.27 2.407c-1.292.36-3.525.758-7.012.758c-3.536 0-5.571-.41-6.905-.766c-1.06-.283-1.646-1.428-1.352-2.49l1.188-4.294c-.432.08-.885.065-1.328-.056a3.001 3.001 0 0 1-2.084-3.715c.826-2.917 1.056-3.798 1.183-4.285v-.003c.104-.396.147-.557.358-1.25c.263-.863.675-2.193 1.449-3.294c.91-1.295 2.377-2.347 4.45-2.347h6.081c2.072 0 3.538 1.052 4.45 2.347c.774 1.1 1.185 2.43 1.448 3.294c.201.66.25.837.343 1.195zM19 39.014v3.374a1.5 1.5 0 0 0 2.947.394l.921-3.375A38.962 38.962 0 0 1 19 39.014m7.13.386l.923 3.382A1.5 1.5 0 0 0 30 42.388V39a40.974 40.974 0 0 1-3.87.4'
				clipRule='evenodd'
			></path>
		</svg>
	);
};

export const IconMan = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 48 48'
		>
			<path
				fill={color ?? 'black'}
				fillRule='evenodd'
				d='M28.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M19.977 15c-1.16 0-2.313.262-3.352.892c-1.037.627-1.783 1.51-2.303 2.478c-.985 1.83-1.26 4.146-1.26 6.456v.088c0 .03.001.059.004.088l.008.088c.006.075.011.327.005.92l-.005.416v.002c-.005.452-.012.99-.012 1.572A3 3 0 0 0 17 30.85V41a3 3 0 0 0 5.988.272L23.83 32h.338l.843 9.272A3 3 0 0 0 31 41V30.83A3 3 0 0 0 35 28c0-.58-.007-1.118-.012-1.57v-.004l-.005-.416c-.006-.593-.002-.845.005-.92l.008-.088a.992.992 0 0 0 .004-.088v-.088c0-2.31-.276-4.625-1.26-6.456c-.52-.967-1.266-1.851-2.303-2.478c-1.04-.63-2.192-.892-3.353-.892zm-3.915 14a1 1 0 0 0 .938-.652V21.5h2V41a1 1 0 0 0 1.996.09l.926-10.18a1 1 0 0 1 .995-.91h2.166a1 1 0 0 1 .996.91l.925 10.18A1 1 0 0 0 29 41V21.5h2v6.523A1 1 0 0 0 33 28c0-.569-.007-1.096-.012-1.55v-.012a283.623 283.623 0 0 0-.005-.407a14.39 14.39 0 0 1 .013-1.117L33 24.87v-.044c0-2.212-.275-4.121-1.022-5.509c-.382-.711-.899-1.304-1.577-1.714c-.678-.411-1.46-.603-2.317-.603h-8.107c-.856 0-1.638.192-2.317.603c-.678.41-1.194 1.003-1.577 1.714c-.746 1.388-1.021 3.297-1.021 5.51v.043l.004.044c.017.195.019.56.013 1.117l-.005.419c-.005.453-.012.981-.012 1.55a1 1 0 0 0 1 1'
				clipRule='evenodd'
			></path>
		</svg>
	);
};

export const IconUnisex = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 48 48'
		>
			<path
				fill={color ?? 'black'}
				fillRule='evenodd'
				d='M17 24c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7m5-7c0 2.763-2.237 5-5 5s-5-2.237-5-5s2.237-5 5-5s5 2.237 5 5M4 38v-5.6c0-4.256 8.661-6.4 13-6.4c2.886 0 7.685.949 10.575 2.837C29.635 28.28 31.894 28 33.5 28c1.858 0 4.351.374 6.41 1.13c1.026.378 2.009.874 2.752 1.516c.749.647 1.338 1.522 1.338 2.62V38zm2-5.6c0-.317.146-.751.766-1.315c.633-.576 1.607-1.134 2.84-1.62C12.077 28.49 15.077 28 17 28s4.924.49 7.393 1.465c1.234.486 2.208 1.044 2.84 1.62c.621.564.767.998.767 1.315V36H6zm23.353-1.93c1.513-.313 3.03-.47 4.147-.47c1.647 0 3.903.34 5.72 1.008c.909.334 1.644.728 2.135 1.152c.485.419.645.787.645 1.107V36H30v-3.6c0-.7-.235-1.345-.647-1.93M39 20.5c0 3.039-2.461 5.5-5.5 5.5a5.499 5.499 0 0 1-5.5-5.5c0-3.039 2.461-5.5 5.5-5.5s5.5 2.461 5.5 5.5M33.5 24c1.934 0 3.5-1.566 3.5-3.5S35.434 17 33.5 17a3.498 3.498 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5'
				clipRule='evenodd'
			></path>
		</svg>
	);
};

export const IconHeart = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='m12 20.703l.343.667a.748.748 0 0 1-.686 0l-.003-.002l-.007-.003l-.025-.013a31.138 31.138 0 0 1-5.233-3.576C3.8 15.573 1 12.332 1 8.514v-.001C1 5.053 3.829 2.5 6.736 2.5C9.03 2.5 10.881 3.726 12 5.605C13.12 3.726 14.97 2.5 17.264 2.5C20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.148 31.148 0 0 1-5.233 3.576l-.025.013l-.007.003l-.002.001ZM6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.655 29.655 0 0 0 4.566 3.175l.073.041l.073-.04c.271-.153.661-.38 1.13-.674c.94-.588 2.19-1.441 3.436-2.502c2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.751.751 0 0 1-1.422 0C10.537 5.389 8.841 4 6.736 4'
			></path>
		</svg>
	);
};

export const IconWhatsApp = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28'
			></path>
		</svg>
	);
};

export const IconMail = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z'
			></path>
		</svg>
	);
};

export const IconInstagram = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3'
			></path>
		</svg>
	);
};

export const IconEdit = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z'
			></path>
		</svg>
	);
};

export const IconAddImage = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M13 19c0 .7.13 1.37.35 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v8.35c-.63-.22-1.3-.35-2-.35V5H5v14zm.96-6.71l-2.75 3.54l-1.96-2.36L6.5 17h6.85c.4-1.12 1.12-2.09 2.05-2.79zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z'
			></path>
		</svg>
	);
};

export const IconCleanBoy = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<g fill='none'>
				<path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'></path>
				<path
					fill={color ?? 'black'}
					d='M8.024 3.001L15.847 3c.13 0 .258.002.384.029l.124.036a2.002 2.002 0 0 1 1.488 2.056l-.016.162l-.158 1.104l1.059.264a3 3 0 0 1 2.267 2.732l.005.179V18a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V9.562A3 3 0 0 1 5.1 6.7l.172-.049l1.059-.264l-.158-1.104A2.001 2.001 0 0 1 7.497 3.11l.148-.045c.123-.047.25-.06.379-.064m9.36 5.376l-.296 2.078a1.5 1.5 0 0 1-2.156 1.13L13 10.617V19h5a1 1 0 0 0 1-1V9.562a1 1 0 0 0-.758-.97l-.857-.215Zm-10.769 0l-.858.214a1 1 0 0 0-.75.857L5 9.562V18a1 1 0 0 0 .883.993L6 19h5v-8.382l-1.932.966a1.5 1.5 0 0 1-2.132-1l-.024-.13zM17 14a1 1 0 0 1 0 2h-1a1 1 0 1 1 0-2zm-1.29-8.036L13.553 8.66l1.652.826l.503-3.52Zm-7.42 0l.504 3.521l1.652-.826l-2.155-2.695ZM13.92 5h-3.84L12 7.4z'
				></path>
			</g>
		</svg>
	);
};

export const IconTie = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<g
				fill='none'
				stroke='black'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
			>
				<path d='m12 22l4-4l-2.5-11l.993-2.649A1 1 0 0 0 13.557 3h-3.114a1 1 0 0 0-.936 1.351L10.5 7L8 18z'></path>
				<path d='M10.5 7h3l5 5.5'></path>
			</g>
		</svg>
	);
};

export const IconShirt = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill='none'
				stroke={color ?? 'black'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='m15 4l6 2v5h-3v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l6-2a3 3 0 0 0 6 0'
			></path>
		</svg>
	);
};

export const IconShirtClassic = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<path
				fill={color ?? 'black'}
				d='M12.998 20h6v-4h-4v-2h4V6h-2v5l-4-1.6zm-2 0V9.4l-4 1.6V6h-2v14zm-4-16V3h10v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4l3.5-3h-7z'
			></path>
		</svg>
	);
};

export const IconShoe = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<g fill='none' fillRule='evenodd'>
				<path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'></path>
				<path
					fill={color ?? 'black'}
					d='M18.026 3.902c-.152-.263-.448-.492-.716-.492c-.48 0-1.097.48-1.47.771c-.559.435-1.211.848-1.911.992c-.518.105-1.136.026-1.682-.117c-.09-.023-.864-.294-.864-.294c-1.072-.495-1.548.912-1.971 1.605c-.29.473-.655 1.037-1.07 1.606a1 1 0 0 0-1.04 1.314c-.308.377-.6.738-.877 1.086A1 1 0 0 0 5.29 11.84c-1.072 1.433-1.81 2.598-2.236 3.635c-.36.88-.514 1.703-.447 2.542c.067.827.342 1.598.727 2.376c.522 1.055 1.802 1.344 2.739.803l14.722-8.5a2 2 0 0 0 .732-2.732zm.268 4.464l-1.419-2.457c-.764.546-1.617 1.033-2.545 1.223c-.954.195-1.919.034-2.587-.14c-.411-.107-.404.057-.625.418c-.252.413-.564.899-.92 1.406l.111.055a1 1 0 1 1-.886 1.793l-.473-.234c-.238.292-.464.57-.68.84a1 1 0 0 1-.945 1.76l-.312-.154c-1.086 1.437-1.752 2.487-2.11 3.358c-.265.647-.34 1.154-.303 1.623c.037.466.192.964.498 1.592l14.696-8.485l-.5-.866l-4.33 2.5a1 1 0 0 1-1-1.732z'
				></path>
			</g>
		</svg>
	);
};

export const IconCoat = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 24 24'
		>
			<g fill='none' fillRule='evenodd'>
				<path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'></path>
				<path
					fill={color ?? 'black'}
					d='m6.268 18.752l-2.963-1.481a2 2 0 0 1-1.021-2.364l2.262-7.539a5 5 0 0 1 2.553-3.035L9.13 3.317A3 3 0 0 1 10.472 3h3.056a3 3 0 0 1 1.342.317l2.03 1.016a5 5 0 0 1 2.553 3.035l2.262 7.539a2 2 0 0 1-1.021 2.364l-2.963 1.481A3.002 3.002 0 0 1 14.826 21H9.174a3.002 3.002 0 0 1-2.906-2.248m3.757-13.646A1 1 0 0 1 10.472 5h3.056a1 1 0 0 1 .447.106l.188.093L12 8.984L9.837 5.2l.188-.093ZM13 11.266l2.954-5.17l.053.026a3 3 0 0 1 1.532 1.82l2.261 7.54l-2.086 1.043l-.217-2.608a1 1 0 1 0-1.994.166l.32 3.834A1 1 0 0 1 14.826 19H13zm-2 0l-2.954-5.17l-.053.026a3 3 0 0 0-1.532 1.82L4.2 15.483l2.087 1.043l.217-2.608a1 1 0 1 1 1.994.166l-.32 3.834A1 1 0 0 0 9.174 19H11z'
				></path>
			</g>
		</svg>
	);
};

export const IconDress = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 20 20'
		>
			<g fill={color ?? 'black'}>
				<path
					fillRule='evenodd'
					d='m10 2.702l-.354-.108A2.628 2.628 0 0 0 6.272 5.45l.19 1.442A3 3 0 0 0 9.436 9.5h1.127a3 3 0 0 0 2.974-2.609l.19-1.442a2.628 2.628 0 0 0-3.374-2.855zM8.795 4.484a.628.628 0 0 1 .265.023l.938.287l.939-.288a.628.628 0 0 1 .806.683l-.19 1.441a1 1 0 0 1-.991.87H9.436a1 1 0 0 1-.991-.87l-.19-1.441a.628.628 0 0 1 .54-.705'
					clipRule='evenodd'
				></path>
				<path
					fillRule='evenodd'
					d='M11.994 8H7.767a3 3 0 0 0-1.534.421c-1.698 1.01-2.953 2.147-3.765 3.41c-.26.404-.522.773-.768 1.117c-1.07 1.499-1.813 2.538-.495 4.041C2.825 18.84 6.26 20 9.63 20c3.37 0 6.726-.685 8.905-3.01c1.613-1.723.943-2.49-.1-3.685c-.366-.419-.778-.89-1.153-1.474c-.843-1.312-2.104-2.454-3.783-3.427A3 3 0 0 0 11.994 8m3.605 4.912a10.834 10.834 0 0 0 .996 1.315c.282.334.646.764.823.99a4.516 4.516 0 0 1-.344.405C15.557 17.242 13.041 18 9.63 18c-2.908 0-5.757-1.003-6.92-2.33c-.195-.221-.21-.226-.21-.23l.001-.001c.03-.118.146-.343.394-.712l.294-.418c.27-.383.648-.918.812-1.166c.051-.077.102-.154.15-.23c.632-.982 1.658-1.912 3.105-2.773a1 1 0 0 1 .512-.14h4.227a1 1 0 0 1 .502.135c1.417.821 2.442 1.75 3.102 2.777'
					clipRule='evenodd'
				></path>
				<path d='M5.804 1.279A.75.75 0 0 1 7.196.72l1 2.5a.75.75 0 0 1-1.392.558zm7-.558a.75.75 0 0 1 1.392.558l-1 2.5a.75.75 0 0 1-1.392-.558zM9.5 12.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0zm-2.447-.223a.5.5 0 1 1 .894.446l-1.5 3.008a.5.5 0 0 1-.894-.447zm5.894-.001a.5.5 0 1 0-.894.448l1.5 3a.5.5 0 1 0 .894-.448z'></path>
			</g>
		</svg>
	);
};

export const IconLabCoat = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 32 32'
		>
			<g fill={color ?? 'black'}>
				<path d='M22 24h-4v-.15c0-.464.354-.85.798-.85h2.404c.436 0 .798.377.798.85zm-3.5-8a.5.5 0 0 0-.5.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-.5-.5zm.5 2.5V17h3v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5M14 24h-4v-.15c0-.464.354-.85.798-.85h2.403c.437 0 .799.377.799.85z'></path>
				<path d='M19.482 4H12.5a5.303 5.303 0 0 0-4.873 3.212L1.344 19.298l-.002.004a3.224 3.224 0 0 0 1.377 4.344h.002l2.286 1.189l.004.002c.633.327 1.33.425 1.989.32v3.645c0 1.813 1.478 3.196 3.214 3.196h11.553c1.736 0 3.215-1.383 3.215-3.196v-3.644a3.226 3.226 0 0 0 1.988-.321l.005-.002l2.285-1.188l.003-.001a3.224 3.224 0 0 0 1.376-4.344l-.002-.004l-6.282-12.086A5.303 5.303 0 0 0 19.482 4m3.5 24.802a1.2 1.2 0 0 1-1.215 1.196H16.5V16.861a.977.977 0 0 0 .17-.127l4.947-4.577l.002-.002a1.279 1.279 0 0 0 .139-1.73c.568-.25.856-.902.73-1.472a1.02 1.02 0 0 0-.01-.038l-.455-1.722c.215.259.391.55.52.867l6.32 12.16c.31.6.08 1.34-.52 1.65l-2.29 1.19c-.348.18-.741.178-1.072.03a1.208 1.208 0 0 1-.579-.55l-.765-1.368c-.176-.315-.655-.19-.655.17zM16.5 15.53v-2.745a.642.642 0 0 0 .044-.084L19.39 6c.76 0 1.42.51 1.61 1.24l.51 1.93c.04.18-.09.36-.27.36h-1.13c-.26 0-.39.31-.2.49l1.03.99c.12.11.12.3 0 .41zm-1-2.718v2.731l-4.44-4.123a.278.278 0 0 1 0-.41l1.03-.99c.18-.18.06-.49-.2-.49h-1.13c-.18 0-.32-.18-.27-.36l.49-1.93c.19-.73.85-1.24 1.61-1.24l2.848 6.7a.699.699 0 0 0 .06.112m0 4.06v13.126h-5.286A1.2 1.2 0 0 1 9 28.802v-7.46c0-.36-.48-.485-.656-.17L7.58 22.54c-.13.253-.338.44-.58.55c-.33.148-.723.15-1.07-.03l-2.29-1.19c-.6-.31-.83-1.05-.52-1.65L9.44 8.06c.13-.319.307-.613.524-.873l-.44 1.73a1.29 1.29 0 0 0 .724 1.505a1.279 1.279 0 0 0 .135 1.732l4.929 4.579c.058.054.122.1.189.138'></path>
			</g>
		</svg>
	);
};

export const IconNecklace = ({ color, width }: IconProps): JSX.Element => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width ?? '1.5rem'}
			height={width ?? '1.5rem'}
			viewBox='0 0 512 512'
		>
			<path
				fill={color ?? 'black'}
				d='M73.09 23.21h1.2c6.9.31 12.8 4.74 17.2 9.89c5.4 6.35 9.41 14.82 11.71 24.59c2.4 9.77 2.7 19.13.8 27.22c-.5 2.17-1.2 4.35-2.1 6.42c5.2.24 10.3 2.59 14.6 5.6c6.7 4.87 12.7 12.07 17.4 20.97c4.7 8.9 7.3 17.9 7.6 26.2c.1 5.8-1 11.9-4.5 16.6c6.6-1.7 13.5.4 19.1 3.8c7.2 4.2 13.7 10.9 19.2 19.4c5.4 8.4 8.8 17.2 9.7 25.4c.3 3 .3 6.1-.2 9.1c5-.8 10.3.3 15 2.1c7.6 3.1 15.1 8.7 21.8 16.3c6.6 7.5 11.3 15.6 13.4 23.7c1.1 4 1.6 8.4.9 12.6c5.6-3.2 12.5-4.8 20.1-4.8c7.7 0 14.5 1.6 20.2 4.8c-.7-4.1-.3-8.5.8-12.6c2.2-8.1 6.8-16.2 13.5-23.8c6.6-7.6 14.1-13.1 21.9-16.3c4.6-1.9 9.9-2.9 14.9-2.1c-.5-3-.5-6.1-.2-9c.9-8.3 4.2-17 9.7-25.5c5.5-8.5 12-15.1 19.2-19.4c5.6-3.3 12.4-5.5 18.8-3.8c-3.3-4.7-4.4-10.8-4.3-16.6c.2-8.3 2.8-17.3 7.5-26.1c4.7-9 10.7-16.1 17.5-20.94c4.2-3.09 9.3-5.46 14.6-5.7c-.9-2.04-1.6-4.18-2.1-6.32c-1.8-8.07-1.6-17.43.8-27.2c2.3-9.76 6.3-18.22 11.7-24.57c5.3-6.36 13.2-11.59 22.2-9.42s13.6 10.39 15.4 18.48c1.9 8.09 1.6 17.46-.7 27.23c-2.4 9.77-6.4 18.24-11.7 24.56c-4.5 5.29-10.5 9.78-17.6 9.98c1.2 3.5 1.7 7.4 1.5 11.1c-.1 8.3-2.7 17.2-7.4 26.2c-4.7 8.8-10.7 16-17.4 20.8c-5.8 4.2-13 7-20.1 5.2c3.7 5.1 4.5 11.8 3.9 18.1c-1 8.3-4.3 17-9.8 25.5c-5.4 8.5-12 15.1-19.1 19.4c-5.2 3-11.4 5.1-17.3 4.1c.5 3.9 0 7.9-1 11.7c-2.2 8-6.8 16.1-13.5 23.7c-6.6 7.6-14.1 13.1-21.9 16.3c-5 2-10.8 3.1-16.2 1.9c1.1 2.1 2 4.3 2.7 6.5c.7 2.1 1.3 4.2 1.8 6.3c-6.4.7-12.2 2.1-17.5 4.2c-.4-1.7-.8-3.4-1.3-4.9c-1.7-4.8-3.8-8.1-6.5-10.2c-2.8-2.1-6.5-3.6-13-3.6s-10.2 1.5-13 3.6c-2.7 2.1-4.8 5.4-6.5 10.2c-.5 1.5-.9 3.2-1.3 4.9c-5.3-2.1-11.1-3.5-17.5-4.2c.5-2.1 1.1-4.2 1.8-6.3c.7-2.2 1.6-4.4 2.6-6.4c-5.3 1.1-11.1 0-16.1-2c-7.7-3.1-15.2-8.7-21.9-16.2c-6.6-7.6-11.3-15.7-13.4-23.7c-1-3.8-1.5-7.9-1-11.7c-6 1-12.2-1.1-17.3-4.2c-7.2-4.2-13.7-10.9-19.2-19.4c-5.4-8.4-8.8-17.2-9.7-25.4c-.7-6.3.1-13 3.8-18.2c-7.1 1.9-14.3-1-20.1-5c-6.8-4.9-12.71-12.1-17.51-21c-4.7-8.9-7.3-17.8-7.5-26.2c0-3.7.4-7.6 1.7-11.2c-7.1-.2-13.2-4.66-17.6-9.87c-5.3-6.36-9.3-14.83-11.7-24.6c-2.3-9.77-2.6-19.13-.8-27.22c2-8.11 6.5-16.32 15.5-18.49c1.3-.31 2.5-.47 3.8-.51m-1.8 23.09c-.9 4.5-1 11.54.8 18.95c1.8 7.4 5 13.65 8 17.21c2.4 2.85 3.9 3.31 4.1 3.25c.3-.1 1.4-1.17 2.3-4.79c.9-4.51 1-11.54-.8-18.95s-5-13.65-7.9-17.22c-2.5-2.84-4-3.31-4.3-3.25c-.2.1-1.3 1.17-2.2 4.8m363.01-1.55c-3 3.55-6.2 9.8-8 17.21c-1.8 7.41-1.8 14.44-.7 18.96c.8 3.54 1.9 4.68 2.2 4.75c.3.1 1.8-.45 4.1-3.23c3-3.54 6.2-9.8 8-17.2c1.8-7.41 1.8-14.44.7-18.96c-.8-3.55-1.9-4.69-2.2-4.76c-.3-.1-1.8.45-4.1 3.23m-28.4 66.75c-3.8 2.7-8.4 8-12 14.7c-3.5 6.7-5.3 13.5-5.4 18.2c-.1 3.6.7 5 1 5.1c.2.2 1.8 0 4.8-2.1c3.8-2.7 8.4-7.9 12-14.7c3.5-6.7 5.3-13.5 5.4-18.1c.1-3.5-.7-5-.9-5.2c-.3-.1-1.9 0-4.9 2.1m-305.7 3.1c.2 4.6 1.9 11.5 5.4 18.2c3.6 6.7 8.3 12 12 14.7c3 2.2 4.6 2.3 5 2.3c.1-.2.9-1.5.9-5.4c-.2-4.6-1.9-11.4-5.5-18.2c-3.5-6.7-8.2-11.9-12-14.7c-3.1-2.2-4.6-2.2-4.9-2.1c-.2.1-1 1.5-.9 5.2m265 65.2c-4.1 2.4-9.1 7.2-13.3 13.6c-4.1 6.4-6.4 13.1-6.9 17.7c-.4 3.6.3 5 .6 5.2c.2.2 1.8.2 4.9-1.7c4-2.3 9.1-7.2 13.2-13.6c4.1-6.4 6.4-13 6.9-17.7c.5-3.6-.2-5-.4-5.2c-.3-.2-1.9-.1-5 1.7M141.8 178c-.2.4-.8 1.8-.4 5.4c.6 4.6 2.8 11.3 7 17.7c4.1 6.4 9.2 11.2 13.1 13.6c3.4 2 5 1.8 5.2 1.7c.1-.1.8-1.6.4-5.2c-.6-4.6-2.8-11.3-7-17.7c-4.1-6.4-9.2-11.2-13.2-13.6c-3.4-2-4.9-1.8-5.1-1.9m177.3 59.1c-4.4 1.7-10.1 5.7-15.1 11.4c-5.1 5.7-8.3 11.9-9.6 16.4c-.9 3.6-.5 5.1-.2 5.3c.2.2 1.8.4 5.1-.9c4.4-1.8 10.1-5.8 15.1-11.5c5.1-5.7 8.3-11.9 9.6-16.4c.9-3.5.5-5.1.3-5.3c-.3-.2-1.9-.4-5.2 1m-131 4.4c1.2 4.4 4.5 10.6 9.5 16.4c5.1 5.7 10.8 9.7 15.1 11.5c3.5 1.4 5 1.1 5.2.9c.2-.2.7-1.6-.3-5.3c-1.2-4.5-4.5-10.7-9.5-16.4c-5-5.7-10.8-9.7-15.1-11.5c-3.5-1.4-5-1.1-5.2-.9c-.2.2-.6 1.8.3 5.3M304 318.3c13 0 31.8 5.9 38.5 16c6.7 10.1 10.5 24.5 10.5 39c0 20-24.2 42.6-43.7 63.9c-17.1 18.9-37.4 36.4-53.3 51.6c-15.9-15.2-36.2-32.7-53.3-51.6c-19.5-21.3-43.7-43.9-43.7-63.9c0-14.5 3.8-28.9 10.5-39c6.7-10.1 25.5-16 38.5-16c14.5 0 21.6 2.8 29.6 9.4c9.8 8 17.4 33.1 18.4 33.1s8.6-25.1 18.4-33.1c8-6.6 15.1-9.4 29.6-9.4'
			></path>
		</svg>
	);
};

export const IconCircle = ({ color, width }: IconProps): JSX.Element => {
	return <svg xmlns="http://www.w3.org/2000/svg" width={width ?? '1.5rem'} height={width ?? '1.5rem'} viewBox="0 0 24 24"><path fill={color ?? 'black'} d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" /></svg>;
}