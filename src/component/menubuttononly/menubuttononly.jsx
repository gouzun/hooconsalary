import {
    Menu,
    MenuHandler,
    Button,
} from "@material-tailwind/react";


const MenuButtonOnly = ({menuTitle})=>{

    const {title} = menuTitle;
   

    return (
        <div><Menu>
            <MenuHandler className='bg-gradient-to-r from-cyan-300 to-blue-200 text-gray-700 hover:text-gray-900 drop-shadow-lg'>
                <Button variant="gradient">{title}</Button>
            </MenuHandler>            
        </Menu></div>
    );
}

export default MenuButtonOnly;