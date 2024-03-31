import {
	IconHeart,
	IconAddImage,
	IconAdd,
	IconAir,
	IconArrowDown,
	IconCheck,
	IconCalendar,
	IconCandy,
	IconCart,
	IconDot,
	IconTrash,
	IconTruck,
	IconEdit,
	IconEye,
	IconClosedEye,
	IconCleanBoy,
} from '../atoms';

export interface IconProps {
	id: string;
	icon: JSX.Element;
}

export const icons: IconProps[] = [
	{ id: 'heart', icon: <IconHeart key='' /> },
	{ id: 'addImage', icon: <IconAddImage key='' /> },
	{ id: 'add', icon: <IconAdd key='' /> },
	{ id: 'air', icon: <IconAir key='' /> },
	{ id: 'arrowDown', icon: <IconArrowDown key='' /> },
	{ id: 'check', icon: <IconCheck key='' /> },
	{ id: 'calendar', icon: <IconCalendar key='' /> },
	{ id: 'candy', icon: <IconCandy key='' /> },
	{ id: 'cart', icon: <IconCart key='' /> },
	{ id: 'dot', icon: <IconDot key='' /> },
	{ id: 'trash', icon: <IconTrash key='' /> },
	{ id: 'truck', icon: <IconTruck key='' /> },
	{ id: 'edit', icon: <IconEdit key='' /> },
	{ id: 'eye', icon: <IconEye key='' /> },
	{ id: 'closedEye', icon: <IconClosedEye key='' /> },
	{ id: 'cleanBoy', icon: <IconCleanBoy key='' /> },
];
