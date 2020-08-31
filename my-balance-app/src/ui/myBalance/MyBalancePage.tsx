import React from 'react';
import styled from 'styled-components'
import { Presentable } from '../presenter/Presentable';
import { MyBalancePresenter, MyBalanceView } from './MyBalancePresenter';
import { TransactionVM } from './TransactionVM';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class MyBalancePage extends Presentable<MyBalancePresenter, State> implements MyBalanceView {
    state: State = {
        transactions: null,
    };

    async componentDidMount() {
        await this.presenter.start();
    }

    Container = styled.div`
        background-color: #f1faee;
        height: 100vh;
    `;

    Title = styled.div`
        text-align: center;
        color: #a8dadc;
        background-color: #457b9d;
        padding: 20px 0;
    `;

    DataContainer = styled.div`
        text-align: center;
        justify-content: center;
        width: 50%;
        display: flex;
    `;

    Data = styled.p`
        flex-grow: 1;
    `;

    Bold = styled.span`
        font-weight: bold;
    `;

    render() {
        if (!this.state.transactions) return <h2>Loading...</h2>
        return (
            <this.Container>
                <this.Title>
                    <h1>My Balance App</h1>
                    <p>These are all the transactions the current user has done. By clicking them you can see when
                        it was created and the transaction number</p>
                </this.Title>
                {
                    this.state.transactions.map( transaction => {
                        const { id, type, amount, date } = transaction;
                        return (
                            <Accordion key={id}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    style={type === 'credit' ? style.credit : style.debit}
                                >
                                    <this.DataContainer>
                                        <this.Data><this.Bold>Type:</this.Bold> {type}</this.Data>
                                        <this.Data><this.Bold>Amount:</this.Bold> {amount}</this.Data>
                                    </this.DataContainer>
                                </AccordionSummary>
                                <AccordionDetails
                                    style={type === 'credit' ? style.credit : style.debit}
                                >
                                    <this.DataContainer>
                                        <this.Data><this.Bold>Transaction N°:</this.Bold> {id}</this.Data>
                                        <this.Data><this.Bold>Date:</this.Bold> {date}</this.Data>
                                    </this.DataContainer>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </this.Container>
        );
    }

    showTransactions(transactions: TransactionVM[]): void {
        this.setState({transactions})
    }
}

const style = {
    credit: {
        backgroundColor: '#02c39a',
    },
    debit: {
        backgroundColor: '#f28482',
    },
}
interface State {
    transactions: TransactionVM[] | null;
}
