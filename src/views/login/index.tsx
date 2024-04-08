import React from 'react';
import { toast } from 'sonner';
import { UserLogin } from './dto/userLogin.dto';
import Input from '../../components/input';
import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Link } from 'react-router-dom';
import { RegisterService } from '../../services/register.service';
import Footer from '../../components/footer';

type LoginProps = {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ setIsAuthenticated }: LoginProps) => {
  const [bodyRequest, setBodyRequest] = React.useState<UserLogin>();
  const [errors, setErrors] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);

  const handleSave = async (): Promise<void> => {
    if (formUserIsValid()) {
      try {
        setLoading(true);
        const services = RegisterService();

        if(bodyRequest) {
          const userLogin = await services.loginAccount(bodyRequest.email, bodyRequest.password);
          
          if(userLogin.body) {
            localStorage.setItem('token', userLogin.body.token);
            localStorage.setItem('user', JSON.stringify(userLogin.body.user));

            setLoading(false)
            setIsAuthenticated(true)
          } else {
            toast.error('Algo de errado aconteceu! Verifique sua senha e email.');
          }
        }
        
        setLoading(false);

      } catch (error: any) {
        toast.warning('Estamos com problemas no nosso servidor. Por favor faça o login no sistema antigo.', {
          action: {
            label: 'Efetuar Login',
            onClick: () => window.location.href = 'https://app.conta.pagou.ai/login',
          },
          duration: 5000000,
          actionButtonStyle: {
            backgroundColor: '#0B4B4D',
            background: '#0B4B4D',
            borderColor: '#0B4B4D',
          }
        });
        setLoading(false)
      }
    }
  }

  const handleInputUserChange = (value: string, inputName: string): void => {
    setBodyRequest((prevState: any) => ({
      ...prevState,
     [inputName]: value
    }))

    setErrors((prevState: any) => ({
      ...prevState,
      [inputName]: ''
    }))
  }

  const formUserIsValid = (): boolean => {
    const _errors: any = {};

    if (!bodyRequest?.email) {
      _errors['email'] = 'E-mail é obrigatório';
    }
    if (!bodyRequest?.password) {
      _errors['password'] = 'Senha é obrigatório';
    }

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }
  
  const formForgotPasswordIsValid = (): boolean => {
    const _errors: any = {};

    if (!bodyRequest?.email) {
      _errors['email'] = 'E-mail é obrigatório';
    }

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  return (
    <div className='container-bg-form login step-login'>
      <Header />

      <div className='container-content-form col-12'>
        <div className="container-form login login col-12">
          <div className={`w-100 title-step text-center mb-1 mt-1`}>
            <h4 className='text-left'>Entrar</h4>
          </div>

          <div className='w-100'>
            <Input 
              label="E-mail"
              value={bodyRequest?.email}
              onChange={(event) => handleInputUserChange(event.target.value, 'email')}
              error={errors['email']}
              placeholder='Ex.: joaosilva@email.com'
            />

            <Input 
              label="Senha"
              value={bodyRequest?.password}
              onChange={(event) => handleInputUserChange(event.target.value, 'password')}
              error={errors['password']}
              type="password"
              placeholder='******'
            />

            <div className='mt-5'>
              <Button 
                label="Entrar"
                onClick={handleSave}
                loading={loading}
              />
            </div>

            <div className="mt-3 d-flex flex-column align-items-center">
              <Link to="/register-account" className='mt-2 btn d-flex gap-2 align-items-center'>
                Crei sua conta
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Login;