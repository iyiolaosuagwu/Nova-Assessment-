import AnalyticsPieChart from "@/components/cards/AnalyticsPieChart";
import CategoryCard from "@/components/cards/CategoryCard";
import TransactionItem from "@/components/cards/TransactionItem";
import EmptyState from "@/components/common/EmptyState";
import Header from "@/components/common/Header";
import LoadMoreButton from "@/components/common/LoadMoreButton";
import SectionHeader from "@/components/common/SectionHeader";
import PeriodFilter from "@/components/inputs/PeriodFilter";
import CustomSvgIcon from "@/components/ui/CustomSvgIcon";
import { IconSymbol } from "@/components/ui/IconSymbol";
import {
    selectCategoryChartData,
    selectRecentTransactions,
    selectTopCategories,
    selectTotalExpense,
} from "@/store/slices/analyticsSlice";
import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useAppSelector } from "../../store/hooks";
import { analyticsStyles } from "./styles";

export default function AnalyticsScreen() {
    const currentYear = new Date().getFullYear();
    const [selectedPeriod, setSelectedPeriod] = useState("All");
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const periods = ["All", "Daily", "Weekly", "Monthly"];

    const chartData = useAppSelector(selectCategoryChartData);
    const topCategories = useAppSelector(selectTopCategories);
    const recentTransactions = useAppSelector(selectRecentTransactions);
    const totalExpense = useAppSelector(selectTotalExpense);

    const formatCurrency = (amount: number) => {
        return `₦${amount.toLocaleString()}`;
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
        });
    };

    const renderDot = (color: string) => {
        return (
            <View
                style={[analyticsStyles.legendDot, { backgroundColor: color }]}
            />
        );
    };

    const renderLegendComponent = () => {
        // Group legend items in pairs
        const legendPairs = [];
        for (let i = 0; i < chartData.length; i += 2) {
            legendPairs.push(chartData.slice(i, i + 2));
        }

        return (
            <View style={analyticsStyles.legendContainer}>
                {legendPairs.map((pair, pairIndex) => (
                    <View key={pairIndex} style={analyticsStyles.legendRow}>
                        {pair.map((item, itemIndex) => (
                            <View
                                key={itemIndex}
                                style={analyticsStyles.legendItem}
                            >
                                {renderDot(item.color)}
                                <Text style={analyticsStyles.legendText}>
                                    {item.category}
                                </Text>
                            </View>
                        ))}
                        {/* Add empty view if odd number of items in last pair */}
                        {pair.length === 1 && (
                            <View style={analyticsStyles.legendItem} />
                        )}
                    </View>
                ))}
            </View>
        );
    };

    return (
        <SafeAreaView style={analyticsStyles.container}>
            {/* Header */}
            <Header brandName="Techmover" />
            <ScrollView
                style={analyticsStyles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Report Header */}
                <SectionHeader title="Expense Report">
                    <TouchableOpacity style={analyticsStyles.yearSelector}>
                        <Text style={analyticsStyles.yearText}>
                            This Year ({selectedYear})
                        </Text>
                        <CustomSvgIcon
                            name="arrowDown"
                            size={16}
                            color="#666"
                        />
                    </TouchableOpacity>
                </SectionHeader>
                {/* Period Filter */}
                <PeriodFilter
                    periods={periods}
                    selectedPeriod={selectedPeriod}
                    onSelect={setSelectedPeriod}
                />
                {/* Chart Section */}
                {chartData.length > 0 ? (
                    <AnalyticsPieChart
                        data={chartData}
                        totalExpense={totalExpense}
                        formatCurrency={formatCurrency}
                    />
                ) : (
                    <EmptyState
                        icon="chart.pie"
                        iconSize={60}
                        title="No expense data available"
                        subtitle="Add some expenses to see analytics"
                    />
                )}

                {/* Categories Section */}
                {topCategories.length > 0 && (
                    <View style={analyticsStyles.categoriesSection}>
                        <SectionHeader
                            title="Categories"
                            actionLabel="Add"
                            onActionPress={() => {}}
                        >
                            <IconSymbol name="plus" size={16} color="#005EE8" />
                        </SectionHeader>
                        {/* Change to horizontal ScrollView slider */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                            style={{ marginHorizontal: -20 }}
                        >
                            <View
                                style={[
                                    analyticsStyles.categoryCards,
                                    { flexDirection: "row" },
                                ]}
                            >
                                {topCategories.map((category, index) => (
                                    <CategoryCard
                                        key={index}
                                        icon={category.icon}
                                        iconColor={category.color}
                                        name={category.category}
                                        amount={formatCurrency(category.amount)}
                                    />
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                )}
                {/* Transaction History */}
                <View style={analyticsStyles.transactionSection}>
                    <SectionHeader title="Transaction History" />
                    {recentTransactions.length > 0 ? (
                        <>
                            {recentTransactions
                                .slice(0, 5)
                                .map((transaction) => (
                                    <TransactionItem
                                        key={transaction.id}
                                        icon={transaction.categoryIcon}
                                        iconColor={transaction.categoryColor}
                                        description={transaction.description}
                                        category={transaction.category}
                                        amount={formatCurrency(
                                            transaction.amount
                                        )}
                                        date={formatDate(transaction.date)}
                                    />
                                ))}
                            {recentTransactions.length > 5 && (
                                <LoadMoreButton
                                    label={`Load more Transactions (${
                                        recentTransactions.length - 5
                                    } more)`}
                                    onPress={() => {}}
                                />
                            )}
                        </>
                    ) : (
                        <EmptyState
                            icon="list.bullet"
                            title="No transactions yet"
                            subtitle="Start adding expenses to see them here"
                        />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
