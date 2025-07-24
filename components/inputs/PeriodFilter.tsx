import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { inputStyles } from "./styles";

interface PeriodFilterProps {
    periods: string[];
    selectedPeriod: string;
    onSelect: (period: string) => void;
}

const PeriodFilter: React.FC<PeriodFilterProps> = ({
    periods,
    selectedPeriod,
    onSelect,
}) => (
    <View style={inputStyles.periodFilter}>
        {periods.map((period) => (
            <TouchableOpacity
                key={period}
                style={[
                    inputStyles.periodButton,
                    selectedPeriod === period && inputStyles.activePeriodButton,
                ]}
                onPress={() => onSelect(period)}
            >
                <Text
                    style={[
                        inputStyles.periodText,
                        selectedPeriod === period &&
                            inputStyles.activePeriodText,
                    ]}
                >
                    {period}
                </Text>
            </TouchableOpacity>
        ))}
    </View>
);

export default PeriodFilter;
