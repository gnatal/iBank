import React, { useMemo } from 'react';
import currentIcon from '../../../assets/svgs/current-icon.svg';
import creditCardsIcon from '../../../assets/svgs/credit-cards-icon.svg';
import { Conta } from '../../../types/dash-board';
import { FormCard } from '../../FormCardBackground';
import { TitleBox, TransactionBox, CardStyles } from '../../../styles/componentes/Extract';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface ExtractData {
    contaBanco?: Conta,
    contaCredito?: Conta,
}

enum PlanosConta {
    R = 'Receitas',
    D = 'Despesas',
    TC = 'Transferência entre contas',
    TU = 'Transferência entre usuários'
}

const Extract: React.FC<ExtractData> = (props) => {
    const allLaunchs = useMemo(() => {
        if (props.contaBanco?.lancamentos && props.contaCredito?.lancamentos) {
            const initLaunchs = [...props.contaBanco.lancamentos, ...props.contaCredito.lancamentos];

            const orderedLauchs = initLaunchs.slice().sort((a, b) => {
                return Number(new Date(a.data)) - Number(new Date(b.data));
            }).reverse();

            return orderedLauchs;
        } else {
            return [];
        }
    }, [props.contaBanco?.lancamentos, props.contaCredito?.lancamentos]);

    function typePlans(typePlan: string) {
        if (typePlan === 'R') {
            return PlanosConta.R;
        } else if (typePlan === 'D') {
            return PlanosConta.D;
        } else if (typePlan === 'TC') {
            return PlanosConta.TC;
        } else {
            return PlanosConta.TU;
        }
    }

    return (
        <>
            <CardStyles >
                <FormCard className="transactionsbox">
                    <TitleBox >
                        <img src={currentIcon} alt="current icon" />
                        <p className="title">Últimos lançamentos</p>
                    </TitleBox>
                    {allLaunchs.length === 0 && 'Nenhum lancamento'}
                    <Container >
                        {allLaunchs && allLaunchs.map((launch, index) => {
                            return (
                                <TransactionBox key={index}  >
                                    <Row className={"row-active"}>
                                        <Col style={{ margin: "2px" }}>{typePlans(launch.planoConta.tipoMovimento)}</Col>
                                    </Row>
                                    <Row style={{ margin: "2px", fontStyle: "italic" }}>
                                        <Col style={{ margin: "2px" }}>{launch.descricao}</Col>
                                    </Row>
                                    <Row className={"row-active"}>
                                        <Col style={{ margin: "2px" }}>{launch.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Col>
                                    </Row>
                                    <Row style={{ margin: "2px" }}>
                                        <Col style={{ margin: "2px" }}>{launch.data}</Col>
                                    </Row>
                                </TransactionBox>
                            )
                        })}
                    </Container>
                </FormCard>
                <div className={"bottom-spaces"}>

                </div>
            </CardStyles>
        </>
    )
}

export default Extract;
