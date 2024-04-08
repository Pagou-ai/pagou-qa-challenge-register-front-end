import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { useLocation, useNavigate } from 'react-router-dom';
import { defaultUser } from '../../dto/user.dto';
import { defaultBusiness } from '../../dto/business.dto';
import Input from '../../../../components/input';
import { Header } from '../../../../components/header';
import { Button } from '../../../../components/button';
import { RegisterService } from '../../../../services/register.service';
import { Link } from 'react-router-dom';
import Footer from '../../../../components/footer';
import { ArrowRight } from 'lucide-react';
import { validateCharacters, validateCharactersSpecial, validateLetterLowercase, validateLetterUppercase, validateNumberOrDigit } from '../../../../utils/validatorsPassword';
import { BodyRequest } from '../..';
import { HelpPassword } from '../../../../components/helpPassword';

type InitialProps = {
  onCompletedRegister: () => void
}

const Initial: React.FC<InitialProps> = ({ onCompletedRegister }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [bodyRequest, setBodyRequest] = React.useState<BodyRequest>({
    user: defaultUser,
    business: defaultBusiness
  });
  const [errors, setErrors] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
 
    if (searchParams.get('utm_source')) {
      setBodyRequest((prevState: any) => ({
        ...prevState,
        user: {
          ...prevState.user,
          utm_source: searchParams.get('utm_source')
        }
      }))
    }
  }, []);

  const handleSave = async (): Promise<void> => {
    if (formUserIsValid()) {
      try {
        setLoading(true);
        const services = RegisterService();

        const userCreated = await services.createUser({
          name: bodyRequest.user.full_name,
          email: bodyRequest.user.email,
          phone: bodyRequest.user.phone.replace(/[^\d]/g, ''),
          password: bodyRequest.user.password,
          terms_accepted: true,
        });
        
        localStorage.setItem('@currentForm', JSON.stringify({
          ...bodyRequest,
          user_id: userCreated.body.id
        }));
        
        setLoading(false);

        navigate('/register/finish');
      } catch (error: any) {
        toast.error(error?.response?.data?.message || 'Algo de errado aconteceu!');
        setLoading(false)
      }
    }
  }

  const handleInputUserChange = (value: string | boolean, inputName: string): void => {
    setBodyRequest((prevState: any) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [inputName]: value
      },
      business: prevState.business || {}
    }))

    setErrors((prevState: any) => ({
      ...prevState,
      [inputName]: ''
    }))
  }

  const formUserIsValid = (): boolean => {
    const _errors: any = {};

    if (!bodyRequest?.user.full_name) {
      _errors['full_name'] = 'Nome completo é obrigatório';
    }

    if (!bodyRequest?.user.password) {
      _errors['password'] = 'Senha é obrigatório';
    }

    const validatedPassword = validateCharacters(bodyRequest?.user?.password) && 
      validateCharactersSpecial(bodyRequest.user.password) &&
      validateLetterLowercase(bodyRequest.user.password) && 
      validateLetterUppercase(bodyRequest.user.password) && 
      validateNumberOrDigit(bodyRequest.user.password);

    if(!validatedPassword) {
      _errors['password'] = 'Senha é inválida';
    }

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  return (
    <div className='container-bg-form login'>
      <Header />
      
      <div className='container-content-form'>
        <div className="container-form col-12">
          <div className='w-100 text-center title-step mb-1'>
            <h4 className='text-left'>Nova conta</h4>
          </div>

          <div className='w-100'>
            <Input 
              label="Nome completo"
              value={bodyRequest.user.full_name}
              onChange={(event) => handleInputUserChange(event.target.value, 'full_name')}
              error={errors['full_name']}
              placeholder='Ex.: João Silva'
            />

            <Input 
              label="E-mail"
              value={bodyRequest?.user.email}
              onChange={(event) => handleInputUserChange(event.target.value, 'email')}
              error={errors['email']}
              type='email'
              placeholder='Ex.: joaosilva@email.com'
            />

            <Input 
              label="Celular/Whatsapp"
              value={bodyRequest?.user.phone}
              onChange={(event) => handleInputUserChange(event.target.value, 'phone')}
              type='tel'
              error={errors['phone']}
              mask='(99) 99999-9999'
              placeholder='Ex.: (61) 99999-9999'
            />

            <Input 
              label="Senha"
              value={bodyRequest?.user.password}
              onChange={(event) => handleInputUserChange(event.target.value, 'password')}
              error={errors['password']}
              type="password"
              placeholder='********'
            />
            <HelpPassword password={bodyRequest?.user.password} />
            <p className='terms'>Ao criar sua conta você concorda com os 
            {' '}
            <a 
              href='' 
              rel="noreferrer" 
              target='_blank'
            >termos de uso</a>
            {' '}
            da Pagou.ai
            </p>
            <p className='terms info'>Seus dados são utizados apenas para comunicação interna.</p>

            <Button 
              label="Cadastrar"
              onClick={handleSave}
              loading={loading}
            />

            <Link to="/login" className='mt-3 btn w-100 d-flex gap-2 align-items-center justify-content-center'>
              Já possuo uma conta
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Initial;