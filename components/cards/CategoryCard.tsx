import React from "react";
import { Text, View } from "react-native";
import CustomSvgIcon from "../ui/CustomSvgIcon";
import { categoryCardStyles } from "./styles";

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
    <View style={categoryCardStyles.categoryCard}>
        <Text style={categoryCardStyles.categoryName}>{name}</Text>
        <View
            style={[
                categoryCardStyles.categoryIcon,
                { backgroundColor: iconColor },
            ]}
        >
            <CustomSvgIcon name={icon} size={24} color="white" />
        </View>

        <Text style={categoryCardStyles.categoryAmount}>{amount}</Text>
    </View>
);

export default CategoryCard;
