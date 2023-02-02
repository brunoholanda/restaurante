import Rodape from "components/Rodape";
import RodapeInfo from "components/RodapeInfo";
import { Outlet } from "react-router-dom";

const { default: Cabecalho } = require("components/Cabecalho");

function CorpoPagina() {
    return (
        <main>
            <Cabecalho />
            <Outlet /> 
            <RodapeInfo />
            <Rodape />
        </main>
    )
}

export default CorpoPagina;