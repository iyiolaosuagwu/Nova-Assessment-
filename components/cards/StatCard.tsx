import React from "react";
import { Text, View } from "react-native";
import { statCardStyles } from "./styles";

interface StatCardProps {
    title: string;
    amount: string;
    subtext?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, amount, subtext }) => (
    <View style={statCardStyles.statCard}>
        <Text style={statCardStyles.statTitle}>{title}</Text>
        <Text style={statCardStyles.statAmount}>{amount}</Text>
        {subtext && <Text style={statCardStyles.statSubtext}>{subtext}</Text>}
    </View>
);

export default StatCard;
