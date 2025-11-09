'use client'
import { useEffect } from 'react'

export default function DeleteConfirmModal({ isOpen, onClose, onConfirm, title, itemType = 'item' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const truncatedTitle = title?.length > 60 ? title.substring(0, 60) + '...' : title

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#ff4444" opacity="0.2"/>
              <path d="M12 5.99L19.53 19H4.47L12 5.99zM12 2L1 21h22L12 2zm0 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1-3.5h-2v-5h2v5z" fill="#ff4444"/>
            </svg>
          </div>
          
          <div className="modal-header">
            <h2>Delete {itemType}?</h2>
          </div>
          
          <div className="modal-body">
            <p className="modal-message">
              Are you sure you want to delete this {itemType}?
            </p>
            <div className="modal-item-title">
              <span className="quote-icon">"</span>
              {truncatedTitle}
              <span className="quote-icon">"</span>
            </div>
            <p className="modal-warning">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              This action cannot be undone.
            </p>
          </div>
          
          <div className="modal-actions">
            <button 
              className="btn btn-cancel" 
              onClick={onClose}
              autoFocus
            >
              Cancel
            </button>
            <button 
              className="btn btn-delete" 
              onClick={() => {
                onConfirm()
                onClose()
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
              Delete {itemType}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-content {
          background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%);
          border: 1px solid #2a2a2a;
          border-radius: 16px;
          max-width: 500px;
          width: 100%;
          padding: 2rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8),
                      0 0 0 1px rgba(134, 255, 0, 0.1);
          animation: slideUp 0.3s ease-out;
          position: relative;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-icon {
          text-align: center;
          margin-bottom: 1.5rem;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .modal-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .modal-header h2 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #fff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .modal-body {
          margin-bottom: 2rem;
        }

        .modal-message {
          text-align: center;
          color: #aaa;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .modal-item-title {
          background: rgba(255, 68, 68, 0.1);
          border: 1px solid rgba(255, 68, 68, 0.3);
          border-radius: 10px;
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
          color: #fff;
          font-size: 1rem;
          line-height: 1.6;
          font-weight: 600;
          text-align: center;
          word-break: break-word;
          position: relative;
        }

        .quote-icon {
          color: #ff4444;
          font-size: 1.5rem;
          font-weight: 700;
          opacity: 0.5;
          margin: 0 0.25rem;
        }

        .modal-warning {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #ff8800;
          font-size: 0.875rem;
          font-weight: 600;
          text-align: center;
          padding: 0.75rem 1rem;
          background: rgba(255, 136, 0, 0.1);
          border-radius: 8px;
          border: 1px solid rgba(255, 136, 0, 0.3);
        }

        .modal-warning svg {
          flex-shrink: 0;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
        }

        .btn {
          flex: 1;
          padding: 1rem 2rem;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-cancel {
          background: #2a2a2a;
          color: #fff;
          border: 1px solid #3a3a3a;
        }

        .btn-cancel:hover {
          background: #3a3a3a;
          border-color: #4a4a4a;
          transform: translateY(-1px);
        }

        .btn-cancel:active {
          transform: translateY(0);
        }

        .btn-delete {
          background: linear-gradient(135deg, #ff4444 0%, #cc0000 100%);
          color: #fff;
          border: 1px solid #ff4444;
          box-shadow: 0 4px 12px rgba(255, 68, 68, 0.3);
        }

        .btn-delete:hover {
          background: linear-gradient(135deg, #ff5555 0%, #dd0000 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 68, 68, 0.4);
        }

        .btn-delete:active {
          transform: translateY(0);
        }

        @media (max-width: 600px) {
          .modal-content {
            padding: 1.5rem;
          }

          .modal-header h2 {
            font-size: 1.5rem;
          }

          .modal-actions {
            flex-direction: column-reverse;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
