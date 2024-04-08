import { Building2, Check, Store, User } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProgressBar: React.FC<{
  stepCurrent: 'information' | 'details' | 'identification'
}> = ({
  stepCurrent
}) => {
  const navigate = useNavigate()

  return (
    <div className={`progress-bar-custom mb-4`}>
      <div className={`d-flex align-items-center ${stepCurrent === 'information' ? 'step-active' : ''} step`} onClick={() => navigate('/register/information-company')} style={{ borderRight: '1px solid #666' }}>
        {stepCurrent !== 'information' ? (
          <Check size={20} color="#0B4B4D" />
        ) : (
          <Building2 size={18} />
        )}
        <div>
          <p>Informações</p>
          <span>Sobre a sua empresa</span>
        </div>
      </div>
      <div className={`d-flex align-items-center step ${stepCurrent === 'details' ? 'step-active' : ''}`} onClick={() => navigate('/register/details-company')}>
        {stepCurrent === 'identification' ? (
          <Check size={20} color="#0B4B4D" />
        ) : (
          <Store size={18} />
        )}
        <div>
          <p>Detalhes</p>
          <span>Do seu negócio</span>
        </div>
      </div>
      <div className={`d-flex align-items-center step ${stepCurrent === 'identification' ? 'step-active' : ''}`} style={{ borderLeft: '1px solid #666' }}>
        <User size={18} />
        <div>
          <p>Responsável</p>
          <span>Quem é o dono?</span>
        </div>
      </div>
    </div>
  )
}