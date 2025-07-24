import TransactionCard from "@/components/cards/TransactionCard";
import React from "react";

interface TransactionListProps {
    transactions: any[];
    homeStyles: any;
    formatAmount: (amount: number) => string;
    formatDate: (date: string) => string;
}

const TransactionList: React.FC<TransactionListProps> = ({
    transactions,
    homeStyles,
    formatAmount,
    formatDate,
}) => {
    return (
        <>
            {transactions.map((transaction) => (
                <TransactionCard
                    key={transaction.id}
                    transaction={transaction}
                    homeStyles={homeStyles}
                    formatAmount={formatAmount}
                    formatDate={formatDate}
                />
            ))}
        </>
    );
};

export default TransactionList;
