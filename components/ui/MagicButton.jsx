import React from "react";

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}) => {
    return (
        <button
            className="relative inline-flex h-12 w-64 md:w-72 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
            onClick={handleClick}>

            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00c566_0%,#00a052_50%,#00c566_100%)]" />

            {/* remove px-3 py-1, add px-5 gap-2 */}
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-[#0a0a0a] px-7 text-sm font-medium text-white backdrop-blur-3xl gap-5 ${otherClasses}`}>

                {position === "left" && icon}
                {title}
                {position === "right" && icon}

            </span>
        </button>
    );
};

export default MagicButton;