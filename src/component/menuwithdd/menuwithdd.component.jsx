import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

const MenuWithDd = ({menuTitle}) => {
    const {title,item1,item2,item3} = menuTitle;

    return (
        <div><Menu>
            <MenuHandler className='bg-gradient-to-r from-cyan-300 to-blue-200 text-gray-700 hover:text-gray-900 drop-shadow-lg'>
                <Button variant="gradient">{title}</Button>
            </MenuHandler>
            <MenuList className='bg-gradient-to-r from-cyan-100 to-blue-100'>
                <MenuItem className='bg-gradient-to-r from-cyan-100 to-blue-100 hover:from-cyan-200 hover:to-blue-200 '>{item1}</MenuItem>
                <MenuItem className='bg-gradient-to-r from-cyan-100 to-blue-100 hover:from-cyan-200 hover:to-blue-200 '>{item2}</MenuItem>
                <MenuItem className='bg-gradient-to-r from-cyan-100 to-blue-100 hover:from-cyan-200 hover:to-blue-200 '>{item3}</MenuItem>
            </MenuList>
        </Menu></div>
    );
}

export default MenuWithDd;