import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { periodFilterStyles } from "./styles";

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
    <View style={periodFilterStyles.periodFilter}>
        {periods.map((period) => (
            <TouchableOpacity
                key={period}
                style={[
                    periodFilterStyles.periodButton,
                    selectedPeriod === period &&
                        periodFilterStyles.activePeriodButton,
                ]}
                onPress={() => onSelect(period)}
            >
                <Text
                    style={[
                        periodFilterStyles.periodText,
                        selectedPeriod === period &&
                            periodFilterStyles.activePeriodText,
                    ]}
                >
                    {period}
                </Text>
            </TouchableOpacity>
        ))}
    </View>
);

export default PeriodFilter;
