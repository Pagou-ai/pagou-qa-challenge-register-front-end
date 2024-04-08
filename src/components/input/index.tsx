import React from 'react';
import InputMask from 'react-input-mask';

const Input = ({
  label,
  value,
  onChange,
  type = 'text',
  error,
  mask,
  placeholder,
  maskPlaceholder,
  maxLength,
  loading
}: {
  label: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  error?: any
  mask?: string
  placeholder?: string
  maskPlaceholder?: string
  maxLength?: number
  loading?: boolean
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [inputType, setInputType] = React.useState(type);

  const handlePassword = (): void => {
    setShowPassword(!showPassword);
    setInputType(inputType === 'password' ? 'text' : 'password');
  }

  return (
    <div className="mt-3">
      <div className='container-input'>
        <label>{ label }</label>
        {
          mask ? (
            <InputMask
              mask={mask}
              className="form-control"
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              type={type}
            />
          ) : (
            <input
              className="form-control"
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              type={inputType}
              maxLength={maxLength}
              style={{ height: 40 }}
            />
          )
        }

        {
          maxLength && <span className='max-length-warning text-muted'>Máximo de caracters: { maxLength }</span>
        }

        {
          type === 'password' && (
            <button onClick={handlePassword} className="button-eye">
              {
                !showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 44 30" fill="none">
                    <path d="M22.0059 23.5C24.3686 23.5 26.375 22.673 28.025 21.0191C29.675 19.3652 30.5 17.3569 30.5 14.9941C30.5 12.6314 29.673 10.625 28.0191 8.975C26.3652 7.325 24.3569 6.5 21.9941 6.5C19.6314 6.5 17.625 7.32697 15.975 8.9809C14.325 10.6348 13.5 12.6431 13.5 15.0059C13.5 17.3686 14.327 19.375 15.9809 21.025C17.6348 22.675 19.6431 23.5 22.0059 23.5ZM21.9883 20.6C20.4294 20.6 19.1083 20.0544 18.025 18.9633C16.9417 17.8721 16.4 16.5471 16.4 14.9883C16.4 13.4294 16.9456 12.1083 18.0367 11.025C19.1279 9.94167 20.4529 9.4 22.0117 9.4C23.5706 9.4 24.8917 9.94558 25.975 11.0367C27.0583 12.1279 27.6 13.4529 27.6 15.0117C27.6 16.5706 27.0544 17.8917 25.9633 18.975C24.8721 20.0583 23.5471 20.6 21.9883 20.6ZM22 30C17.1333 30 12.7333 28.6167 8.8 25.85C4.86667 23.0833 1.93333 19.4667 0 15C1.93333 10.5333 4.86667 6.91667 8.8 4.15C12.7333 1.38333 17.1333 0 22 0C26.8667 0 31.2667 1.38333 35.2 4.15C39.1333 6.91667 42.0667 10.5333 44 15C42.0667 19.4667 39.1333 23.0833 35.2 25.85C31.2667 28.6167 26.8667 30 22 30ZM21.9916 27C26.0305 27 29.7417 25.9083 33.125 23.725C36.5083 21.5417 39.0833 18.6333 40.85 15C39.0833 11.3667 36.5112 8.45833 33.1335 6.275C29.7557 4.09167 26.0474 3 22.0085 3C17.9695 3 14.2583 4.09167 10.875 6.275C7.49167 8.45833 4.9 11.3667 3.1 15C4.9 18.6333 7.48885 21.5417 10.8665 23.725C14.2443 25.9083 17.9526 27 21.9916 27Z" fill="black"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 44 41" fill="none">
                    <path d="M29.45 23.05L27.25 20.85C28.1167 18.4833 27.6667 16.5167 25.9 14.95C24.1333 13.3833 22.2167 12.9833 20.15 13.75L17.95 11.55C18.5167 11.1833 19.15 10.9167 19.85 10.75C20.55 10.5833 21.2667 10.5 22 10.5C24.3667 10.5 26.375 11.325 28.025 12.975C29.675 14.625 30.5 16.6333 30.5 19C30.5 19.7333 30.4083 20.4583 30.225 21.175C30.0417 21.8917 29.7833 22.5167 29.45 23.05ZM35.9 29.5L33.9 27.5C35.5333 26.3 36.9583 24.9583 38.175 23.475C39.3917 21.9917 40.2833 20.5 40.85 19C39.1833 15.3 36.6833 12.375 33.35 10.225C30.0167 8.075 26.4 7 22.5 7C21.1 7 19.6667 7.13333 18.2 7.4C16.7333 7.66667 15.5833 7.98333 14.75 8.35L12.45 6C13.6167 5.46667 15.1083 5 16.925 4.6C18.7417 4.2 20.5167 4 22.25 4C27.0167 4 31.375 5.35833 35.325 8.075C39.275 10.7917 42.1667 14.4333 44 19C43.1333 21.1333 42.0167 23.0833 40.65 24.85C39.2833 26.6167 37.7 28.1667 35.9 29.5ZM38.8 40.8L30.4 32.55C29.2333 33.0167 27.9167 33.375 26.45 33.625C24.9833 33.875 23.5 34 22 34C17.1333 34 12.7167 32.6417 8.75 29.925C4.78333 27.2083 1.86667 23.5667 0 19C0.666667 17.2667 1.59167 15.575 2.775 13.925C3.95833 12.275 5.4 10.7 7.1 9.2L0.8 2.9L2.9 0.75L40.75 38.6L38.8 40.8ZM9.15 11.3C7.91667 12.2 6.725 13.3833 5.575 14.85C4.425 16.3167 3.6 17.7 3.1 19C4.8 22.7 7.35833 25.625 10.775 27.775C14.1917 29.925 18.0667 31 22.4 31C23.5 31 24.5833 30.9333 25.65 30.8C26.7167 30.6667 27.5167 30.4667 28.05 30.2L24.85 27C24.4833 27.1667 24.0333 27.2917 23.5 27.375C22.9667 27.4583 22.4667 27.5 22 27.5C19.6667 27.5 17.6667 26.6833 16 25.05C14.3333 23.4167 13.5 21.4 13.5 19C13.5 18.5 13.5417 18 13.625 17.5C13.7083 17 13.8333 16.55 14 16.15L9.15 11.3Z" fill="black"/>
                  </svg>
                )
              }
            </button>
          )
        }

        {
          loading && (
            <div className="spinner-border spinner-border-sm loading-input" role="status">
              <span className="sr-only"></span>
            </div>
          )
        }
      </div>

      { error && <span className="error-message">{error}</span> }
    </div>
  )
}

export default Input;