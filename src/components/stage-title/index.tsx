import React from "react";
import './styles.modules.css'

type StageTitleProps = {
    title: string;
    description: string;
    stage: number;
}

export const StageTitle: React.FC<StageTitleProps> = ({ description, title, stage }) => {
    return (
        <div className={`d-flex flex-column container-stage-title`}>
            <div className="d-flex align-items-center">
                <div className="stage">
                    {stage}
                </div>
                <h2>{title}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}