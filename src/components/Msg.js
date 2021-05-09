import React from 'react'
import Icon from './Icon'

const Msg = ({msgTitle, msg, icon, type }) => {
      return (
            <div className={`msg msg--${type}`}>
                        <div className="msg-icon-wrapper">
                              <Icon name={icon} color="#ffffff" size="24px" />
                        </div>
                        <div className="msg-content">
                              <p className="msg-content__text">
                                    <div className="text-bold text-lg">{msgTitle}</div>
                                    {msg}
                              </p>
                              <button className="btn btn--small" aria-label="close message">
                                    <Icon name="icon-close" color="#ffffff" size="16px" />
                              </button>
                        </div>
                  </div>
      )
}

export default Msg
