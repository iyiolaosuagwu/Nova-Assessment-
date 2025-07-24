import React from "react";
import { Text, View } from "react-native";
import CustomSvgIcon from "../ui/CustomSvgIcon";
import { cardStyles } from "./styles";

interface CategoryCardProps {
    icon: any;
    iconColor: string;
    name: string;
    amount: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    icon,
    iconColor,
    name,
    amount,
}) => (
    <View style={cardStyles.categoryCard}>
        <Text style={cardStyles.categoryName}>{name}</Text>
        <View style={[cardStyles.categoryIcon, { backgroundColor: iconColor }]}>
            <CustomSvgIcon name={icon} size={24} color="white" />
        </View>

        <Text style={cardStyles.categoryAmount}>{amount}</Text>
    </View>
);

export default CategoryCard;
