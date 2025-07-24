import React from "react";
import { Text, View } from "react-native";
import { cardStyles } from "./styles";

interface StatCardProps {
    title: string;
    amount: string;
    subtext?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, amount, subtext }) => (
    <View style={cardStyles.statCard}>
        <Text style={cardStyles.statTitle}>{title}</Text>
        <Text style={cardStyles.statAmount}>{amount}</Text>
        {subtext && <Text style={cardStyles.statSubtext}>{subtext}</Text>}
    </View>
);

export default StatCard;
