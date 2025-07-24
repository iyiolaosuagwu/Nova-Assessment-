import TrendDownIcon from "@/icons/TrendDownIcon";
import React from "react";
import { Text, View } from "react-native";

interface SpendingCardProps {
    item: any;
    homeStyles: any;
}

const SpendingCard: React.FC<SpendingCardProps> = ({ item, homeStyles }) => {
    return (
        <View key={item.id} style={homeStyles.spendingCard}>
            <Text style={homeStyles.cardTitle}>{item.title}</Text>
            <Text style={homeStyles.amount}>{item.amount}</Text>
            <View style={homeStyles.comparisonRow}>
                <TrendDownIcon />
                <Text style={homeStyles.comparisonText}>{item.comparison}</Text>
            </View>
        </View>
    );
};

export default SpendingCard;
