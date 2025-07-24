import CustomSvgIcon from "@/components/ui/CustomSvgIcon";
import React from "react";
import { Text, View } from "react-native";

interface TransactionCardProps {
    transaction: any;
    homeStyles: any;
    formatAmount: (amount: number) => string;
    formatDate: (date: string) => string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
    transaction,
    homeStyles,
    formatAmount,
    formatDate,
}) => {
    return (
        <View key={transaction.id} style={homeStyles.transactionItem}>
            <View
                style={[
                    homeStyles.transactionIcon,
                    { backgroundColor: transaction.categoryColor },
                ]}
            >
                <CustomSvgIcon
                    name={transaction.categoryIcon as any}
                    size={20}
                    color="white"
                />
            </View>
            <View style={homeStyles.transactionDetails}>
                <Text style={homeStyles.transactionTitle}>
                    {transaction.description}
                </Text>
                <Text style={homeStyles.transactionCategory}>
                    {transaction.category}
                </Text>
            </View>
            <View style={homeStyles.transactionAmount}>
                <Text style={homeStyles.amountText}>
                    {formatAmount(transaction.amount)}
                </Text>
                <Text style={homeStyles.dateText}>
                    {formatDate(transaction.date)}
                </Text>
            </View>
        </View>
    );
};

export default TransactionCard;
