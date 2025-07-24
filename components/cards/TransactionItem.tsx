import React from "react";
import { Text, View } from "react-native";
import { cardStyles } from "./styles";

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
    <View style={cardStyles.transactionItem}>
        <View
            style={[cardStyles.transactionIcon, { backgroundColor: iconColor }]}
        ></View>
        <View style={cardStyles.transactionDetails}>
            <Text style={cardStyles.transactionTitle}>{description}</Text>
            <Text style={cardStyles.transactionCategory}>{category}</Text>
        </View>
        <View style={cardStyles.transactionAmount}>
            <Text style={cardStyles.transactionAmountText}>{amount}</Text>
            {date && <Text style={cardStyles.transactionDate}>{date}</Text>}
        </View>
    </View>
);

export default TransactionItem;
