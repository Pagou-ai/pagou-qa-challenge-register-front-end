import iconDigital from '../../../../assets/img//icon_digital.png'
import { Link } from "react-router-dom";
import { Header } from '../../../../components/header';
import Footer from '../../../../components/footer';

const Finish = () => {
    return (
        <div className="container-finish flex flex-column">
            <Header />

            <div className="container-custom">
                <main className="w-full mt-5 pt-2">
                    <div className="w-full d-flex flex-column align-items-center">
                        <img src={iconDigital} alt="Digital" className='digital mb-5' />

                        <h1 className="title mt-4">Ainda não acabou, faça o primeiro login para finalizar seu cadastro.</h1>

                        <p className="mt-4 text">Você precisará enviar novamente as fotos do seu documento, junto com a selfie e contrato social para que a analise seja concluída.</p>

                        <Link to="/login" className="button-pagouai mt-4 mb-3">Finalizar Cadastro</Link>

                        <span className="info mt-4">Apos a conclusão dos envios, sua solicitação pode demorar até 24h (dias uteis) para ser analisada.</span>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    )
}

export default Finish;