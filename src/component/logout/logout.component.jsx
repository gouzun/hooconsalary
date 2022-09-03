import { Select, Option } from "@material-tailwind/react";

const LogOut = () => {


    return (
        <div className="flex w-full items-end gap-4">
            <Select label="Select Version" error>
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
            <Select label="Select Version" success>
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
        </div>
    );
}
export default LogOut;