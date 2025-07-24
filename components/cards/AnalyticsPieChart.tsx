import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import LegendDot from "../ui/LegendDot";
import { cardStyles } from "./styles";

interface ChartDataItem {
    category: string;
    color: string;
    value: number;
}

interface AnalyticsPieChartProps {
    data: ChartDataItem[];
    totalExpense: number;
    formatCurrency: (amount: number) => string;
}

function AnalyticsPieChart({
    data,
    totalExpense,
    formatCurrency,
}: AnalyticsPieChartProps) {
    // Group legend items in pairs
    const legendPairs = [];
    for (let i = 0; i < data.length; i += 2) {
        legendPairs.push(data.slice(i, i + 2));
    }

    return (
        <View style={styles.chartSection}>
            <View style={styles.chartContainer}>
                {data.length > 0 ? (
                    <PieChart
                        data={data}
                        donut
                        showGradient
                        sectionAutoFocus
                        radius={90}
                        innerRadius={60}
                        innerCircleColor={"#fff"}
                        centerLabelComponent={() => (
                            <View style={styles.centerLabel}>
                                <Text style={styles.centerLabelTitle}>
                                    Total Expense
                                </Text>
                                <Text style={styles.centerLabelAmount}>
                                    {formatCurrency(totalExpense)}
                                </Text>
                            </View>
                        )}
                    />
                ) : null}
            </View>
            {data.length > 0 && (
                <View style={cardStyles.legendContainer}>
                    {legendPairs.map((pair, pairIndex) => (
                        <View key={pairIndex} style={cardStyles.legendRow}>
                            {pair.map((item, itemIndex) => (
                                <View
                                    key={itemIndex}
                                    style={cardStyles.legendItem}
                                >
                                    <LegendDot color={item.color} />
                                    <Text style={cardStyles.legendText}>
                                        {item.category}
                                    </Text>
                                </View>
                            ))}
                            {pair.length === 1 && (
                                <View style={cardStyles.legendItem} />
                            )}
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    chartSection: {
        alignItems: "center",
        marginBottom: 30,
    },
    chartContainer: {
        marginBottom: 20,
    },
    centerLabel: {
        justifyContent: "center",
        alignItems: "center",
    },
    centerLabelTitle: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },
    centerLabelAmount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
});

export default AnalyticsPieChart;
