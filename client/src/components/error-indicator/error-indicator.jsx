import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">ОШИБКА!</span>
            <span>
                что-то пошло не так...
      </span>
        </div>
    );
};

export default ErrorIndicator;
