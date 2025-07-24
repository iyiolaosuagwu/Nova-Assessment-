import SpendingCard from "@/components/cards/SpendingCard";
import TransactionList from "@/components/cards/TransactionList";
import Header from "@/components/common/Header";
import AddCategoryIcon from "@/icons/AddCategoryIcon";
import AddExpenseIcon from "@/icons/AddExpenseIcon";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
    Dimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useAppSelector } from "../../store/hooks";
import { homeStyles } from "../styles";

const { width: screenWidth } = Dimensions.get("window");
const cardWidth = screenWidth - 40;

export default function HomeScreen() {
    const [activeSlide, setActiveSlide] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);

    const router = useRouter();

    const handleAddExpense = () => {
        router.push("/add-expense");
    };

    // Get data from Redux store
    const { expenses, spendingPeriods } = useAppSelector(
        (state) => state.expenses
    );

    // Get recent transactions (last 5)
    const recentTransactions = expenses.slice(0, 5);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slideSize = cardWidth;
        const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);
        setActiveSlide(index);
    };

    const goToSlide = (index: number) => {
        setActiveSlide(index);
        scrollViewRef.current?.scrollTo({
            x: index * cardWidth,
            animated: true,
        });
    };

    const formatAmount = (amount: number) => {
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

    return (
        <SafeAreaView style={homeStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Header */}
            <Header brandName="Techmover" />
            <ScrollView
                style={homeStyles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Greeting Section */}
                <View style={homeStyles.greetingSection}>
                    <Text style={homeStyles.greeting}>Good Morning! ☀️</Text>
                    <Text style={homeStyles.userName}>Adeola Adeyoyin</Text>
                </View>

                {/* Spending Cards Slider */}
                <View style={homeStyles.sliderWrapper}>
                    <ScrollView
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        style={homeStyles.sliderContainer}
                        contentContainerStyle={homeStyles.sliderContent}
                    >
                        {spendingPeriods.map((item, index) => (
                            <SpendingCard
                                key={item.id}
                                item={item}
                                homeStyles={homeStyles}
                            />
                        ))}
                    </ScrollView>

                    {/* Page Indicators */}
                    <View style={homeStyles.pageIndicators}>
                        {spendingPeriods.map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    homeStyles.indicator,
                                    activeSlide === index &&
                                        homeStyles.activeIndicator,
                                ]}
                                onPress={() => goToSlide(index)}
                            />
                        ))}
                    </View>
                </View>

                {/* Quick Links */}
                <View style={homeStyles.quickLinksSection}>
                    <Text style={homeStyles.sectionTitle}>Quick Links</Text>
                    <View style={homeStyles.quickLinksRow}>
                        <TouchableOpacity
                            onPress={handleAddExpense}
                            style={homeStyles.quickLinkButton}
                        >
                            <View style={homeStyles.quickLinkIcon}>
                                <AddExpenseIcon />
                            </View>
                            <Text style={homeStyles.quickLinkText}>
                                Add Expense
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={homeStyles.quickLinkButton}>
                            <View style={homeStyles.quickLinkIcon}>
                                <AddCategoryIcon />
                            </View>
                            <Text style={homeStyles.quickLinkText}>
                                Create a Category
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Recent Transactions */}
                <View style={homeStyles.transactionsSection}>
                    <View style={homeStyles.transactionHeader}>
                        <Text style={homeStyles.sectionTitle}>
                            Recent Transaction
                        </Text>
                        <TouchableOpacity>
                            <Text style={homeStyles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Transaction Items from Redux */}
                    <TransactionList
                        transactions={recentTransactions}
                        homeStyles={homeStyles}
                        formatAmount={formatAmount}
                        formatDate={formatDate}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
