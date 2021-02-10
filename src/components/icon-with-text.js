import React from 'react';

const IconWithText = ({children, text }) => (
    <div className="flex items-center mr-4">
        {children}
        <p className="ml-2 text-sm">{text}</p>
    </div>
)

export default IconWithText;