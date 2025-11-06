import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ message, onRetry, type = 'error' }) {
  const getIcon = () => {
    switch (type) {
      case 'error':
        return '😞';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      case 'empty':
        return '📭';
      default:
        return '😞';
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'error':
        return 'Oops! Something went wrong';
      case 'warning':
        return 'Warning';
      case 'info':
        return 'Information';
      case 'empty':
        return 'No results found';
      default:
        return 'Error';
    }
  };

  return (
    <div className={`error-message error-${type}`}>
      <div className="error-icon">{getIcon()}</div>
      <h3 className="error-title">{getTitle()}</h3>
      <p className="error-text">{message}</p>
      {onRetry && (
        <button className="btn btn-primary error-retry-btn" onClick={onRetry}>
          🔄 Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;

