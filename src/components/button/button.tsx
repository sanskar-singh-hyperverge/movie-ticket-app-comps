import "../../index.css";

export type ButtonProps = {
    label?: string,
    children?: React.ReactNode,
    className?: string,
    isDisabled?: boolean,
    onClick?: (e: React.MouseEvent) => void,
    size?: 'small' | 'base' | 'large',
    type?: "dimmed" | "primary" | "secondary" | "outline",
    rounded?: boolean,
    btnTextClassName?: string,
}

const Button = ({ label = "Click Me", children, className = '', isDisabled = false ,onClick = () => {}, size = 'base', type = 'primary', btnTextClassName = '' }: ButtonProps) => {

    const _className = (() => {
        let classNames =  'gap-2 ';

        classNames += `${size === 'base' ? 'w-[346px] h-[51px] text-xl' : size === 'large' ? 'w-[351px] h-[52px] text-xl' : size === 'small' ? 'w-[180px] h-[41px] text-sm' : ''} `;
        classNames += `${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} `;
        classNames += 'flex items-center justify-center rounded-xl ';
        classNames += `${type === 'dimmed' ? 'bg-violet-600 opacity-40 text-white' : type === 'primary' ? 'bg-violet-600 text-white' : type === 'secondary' ? 'bg-black text-white' : type === 'outline' ? 'bg-inherit text-violet-600 border border-violet-600 border-4' : ''} `;
        classNames += `${isDisabled ? 'opacity-25' : ''} `;
        classNames += className;
        return classNames;
    })();

    return (
        <button
            aria-label={label}
            onClick={e => {
                e.stopPropagation();
                onClick(e);
            }}
            disabled={isDisabled}
            className={_className}
        >
            <p className={btnTextClassName}>{label}</p>
            {children}
        </button>
    )
}

export default Button;