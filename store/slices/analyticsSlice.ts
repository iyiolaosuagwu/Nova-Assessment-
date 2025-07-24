import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

// Selector to get category spending data for pie chart
export const selectCategoryChartData = createSelector(
    [
        (state: RootState) => state.categories.categories,
        (state: RootState) => state.expenses.expenses,
    ],
    (categories, expenses) => {
        const categoryTotals = categories
            .map((category) => {
                const categoryExpenses = expenses.filter(
                    (expense) => expense.category === category.name
                );
                const total = categoryExpenses.reduce(
                    (sum, expense) => sum + expense.amount,
                    0
                );

                return {
                    category: category.name,
                    amount: total,
                    color: category.color,
                    icon: category.icon,
                    percentage: 0, // Will be calculated below
                };
            })
            .filter((item) => item.amount > 0); // Only include categories with expenses

        const totalAmount = categoryTotals.reduce(
            (sum, item) => sum + item.amount,
            0
        );

        // Calculate percentages and create pie chart data
        return categoryTotals.map((item, index) => ({
            ...item,
            percentage:
                totalAmount > 0
                    ? Math.round((item.amount / totalAmount) * 100)
                    : 0,
            value:
                totalAmount > 0
                    ? Math.round((item.amount / totalAmount) * 100)
                    : 0,
            color: item.color,
            gradientCenterColor: item.color + "80",
            focused: index === 0,
        }));
    }
);

// Selector to get top spending categories
export const selectTopCategories = createSelector(
    [selectCategoryChartData],
    (chartData) => {
        return chartData.sort((a, b) => b.amount - a.amount).slice(0, 2);
    }
);

// Selector to get recent transactions
export const selectRecentTransactions = createSelector(
    [(state: RootState) => state.expenses.expenses],
    (expenses) => {
        return [...(expenses || [])]
            .sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
            )
            .slice(0, 10);
    }
);

// Selector to get total expense amount
export const selectTotalExpense = createSelector(
    [(state: RootState) => state.expenses.expenses],
    (expenses) => {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }
);

// Selector to get spending statistics
export const selectSpendingStats = createSelector(
    [(state: RootState) => state.expenses.expenses, selectCategoryChartData],
    (expenses, categoryData) => {
        const totalExpense = expenses.reduce(
            (sum, expense) => sum + expense.amount,
            0
        );
        const averageExpense =
            expenses.length > 0 ? totalExpense / expenses.length : 0;
        const highestCategory = categoryData.reduce(
            (max, current) => (current.amount > max.amount ? current : max),
            categoryData[0] || { category: "None", amount: 0 }
        );

        // Calculate daily average (assuming last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const recentExpenses = expenses.filter(
            (expense) => new Date(expense.date) >= thirtyDaysAgo
        );
        const dailyAverage =
            recentExpenses.length > 0
                ? recentExpenses.reduce(
                      (sum, expense) => sum + expense.amount,
                      0
                  ) / 30
                : 0;

        return {
            totalExpense,
            averageExpense,
            dailyAverage,
            highestCategory,
            transactionCount: expenses.length,
        };
    }
);
