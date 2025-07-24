import React from "react";
import { Text, View } from "react-native";
import { transactionCardStyles } from "./styles";

interface TransactionItemProps {
    icon: any;
    iconColor: string;
    description: string;
    category: string;
    amount: string;
    date?: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
    icon,
    iconColor,
    description,
    category,
    amount,
    date,
}) => (
    <View style={transactionCardStyles.transactionItem}>
        <View
            style={[
                transactionCardStyles.transactionIcon,
                { backgroundColor: iconColor },
            ]}
        ></View>
        <View style={transactionCardStyles.transactionDetails}>
            <Text style={transactionCardStyles.transactionTitle}>
                {description}
            </Text>
            <Text style={transactionCardStyles.transactionCategory}>
                {category}
            </Text>
        </View>
        <View style={transactionCardStyles.transactionAmount}>
            <Text style={transactionCardStyles.transactionAmountText}>
                {amount}
            </Text>
            {date && (
                <Text style={transactionCardStyles.transactionDate}>
                    {date}
                </Text>
            )}
        </View>
    </View>
);

export default TransactionItem;
