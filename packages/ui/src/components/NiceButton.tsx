import {ButtonHTMLAttributes, ReactNode} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}

const NiceButton = ({children, ...props}: Props) => {
    return <button {...props}>{children}</button>;
};

export default NiceButton;
