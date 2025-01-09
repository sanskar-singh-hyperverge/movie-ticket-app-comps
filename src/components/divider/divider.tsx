

export type DividerProps = {
  text?: string; 
  width?: string; 
  className?: string;
  textClassName?: string;
}

const Divider = ({ text, width = "56px", className = "", textClassName = "" } : DividerProps) => {

    const _className = (() => {
        let classNames = `flex items-center justify-center ${width} `;
        classNames += className;
        return classNames;
    });

    const _textClassName = (() => {
        let classNames = 'px-4 text-gray-300 text-sm font-medium ';
        classNames += textClassName;
        return classNames;
    })

    return (
        <div className={_className()}>
            <div className="border-t border-gray-300 flex-grow" />
                {text && (
                    <span className={_textClassName()}>{text}</span>
                )}
            <div className="border-t border-gray-300 flex-grow" />
        </div>
    );
};

export default Divider;
