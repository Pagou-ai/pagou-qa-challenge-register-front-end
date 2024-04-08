import React from "react";
import './styles.modules.css';
import { Check, X } from "lucide-react";
import { validateCharacters, validateCharactersSpecial, validateLetterLowercase, validateLetterUppercase, validateNumberOrDigit } from "../../utils/validatorsPassword";

type HelpPasswordProps = {
    password: string;
}

export const HelpPassword: React.FC<HelpPasswordProps> = ({ password }) => {

    return (
        <div className="container-help-password">
            <p>Sua <strong>senha</strong> deve conter:</p>

            <div className="list-helps">
                <span>
                    {validateLetterUppercase(password) ? <Check size={18} color="#52b963" /> : (
                        <X size={18} color="#E40513" />
                    )}
                    Pelo menos 1 caractere <strong>maiúsculo</strong>
                </span>
                <span>
                    {validateLetterLowercase(password) ? <Check size={18} color="#52b963" /> : (
                        <X size={18} color="#E40513" />
                    )}
                    Pelo menos 1 caractere <strong>minúsculo</strong>
                </span>
                <span>
                    {validateNumberOrDigit(password) ? <Check size={18} color="#52b963" /> : (
                        <X size={18} color="#E40513" />
                    )}
                    Pelo menos 1 caractere <strong>numérico</strong>
                </span>
                <span>
                    {validateCharactersSpecial(password) ? <Check size={18} color="#52b963" /> : (
                        <X size={18} color="#E40513" />
                    )}
                    Pelo menos 1 caractere <strong>especial</strong>
                </span>
                <span>
                    {validateCharacters(password) ? <Check size={18} color="#52b963" /> : (
                        <X size={18} color="#E40513" />
                    )}
                    Pelo menos <strong>8</strong> caracteres
                </span>
            </div>
        </div>
    )
}