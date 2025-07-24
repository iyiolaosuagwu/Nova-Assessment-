import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Expense {
    id: string;
    amount: number;
    category: string;
    categoryIcon: string;
    categoryColor: string;
    description: string;
    date: string;
    createdAt: string;
}

export interface SpendingPeriod {
    id: number;
    title: string;
    amount: string;
    comparison: string;
    trend: "up" | "down";
    trendColor: string;
}

interface ExpenseState {
    expenses: Expense[];
    spendingPeriods: SpendingPeriod[];
    totalExpense: number;
    selectedPeriod: string;
}

const initialState: ExpenseState = {
    expenses: [
        {
            id: "1",
            amount: 12000,
            category: "Housing",
            categoryIcon: "housing",
            categoryColor: "#F39C12",
            description: "Cooking gas",
            date: "2024-01-16",
            createdAt: "2024-01-16T10:00:00Z",
        },
        {
            id: "2",
            amount: 36000,
            category: "Transportation",
            categoryIcon: "transport",
            categoryColor: "#3498DB",
            description: "A/C Repair",
            date: "2024-01-16",
            createdAt: "2024-01-16T14:30:00Z",
        },
        {
            id: "3",
            amount: 10000,
            category: "Family",
            categoryIcon: "family",
            categoryColor: "#27AE60",
            description: "Bolu Upkeep",
            date: "2024-01-16",
            createdAt: "2024-01-16T16:45:00Z",
        },
        {
            id: "4",
            amount: 15000,
            category: "Food & Drinks",
            categoryIcon: "food",
            categoryColor: "#E74C3C",
            description: "Groceries",
            date: "2024-01-15",
            createdAt: "2024-01-15T12:00:00Z",
        },
        {
            id: "5",
            amount: 25000,
            category: "Shopping",
            categoryIcon: "shopping",
            categoryColor: "#E67E22",
            description: "Clothing",
            date: "2024-01-14",
            createdAt: "2024-01-14T18:20:00Z",
        },
        {
            id: "6",
            amount: 50000,
            category: "Travel & Vacation",
            categoryIcon: "travel",
            categoryColor: "#9B59B6",
            description: "Flight tickets",
            date: "2024-01-13",
            createdAt: "2024-01-13T09:15:00Z",
        },
        {
            id: "7",
            amount: 10000,
            category: "Entertainment",
            categoryIcon: "entertainment",
            categoryColor: "#27AE60",
            description: "Movie tickets",
            date: "2024-01-12",
            createdAt: "2024-01-12T15:30:00Z",
        },
    ],
    spendingPeriods: [
        {
            id: 1,
            title: "Today spend (Mon, 15 Apr)",
            amount: "₦12,000",
            comparison: "47% below than last yesterday",
            trend: "down",
            trendColor: "#27AE60",
        },
        {
            id: 2,
            title: "This Week (Apr 10-16)",
            amount: "₦85,000",
            comparison: "12% above than last week",
            trend: "up",
            trendColor: "#E74C3C",
        },
        {
            id: 3,
            title: "This Month (April 2024)",
            amount: "₦340,000",
            comparison: "8% below than last month",
            trend: "down",
            trendColor: "#27AE60",
        },
    ],
    totalExpense: 148000,
    selectedPeriod: "All",
};

const expenseSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: (
            state,
            action: PayloadAction<Omit<Expense, "id" | "createdAt">>
        ) => {
            const newExpense: Expense = {
                ...action.payload,
                id: Date.now().toString(),
                createdAt: new Date().toISOString(),
            };
            state.expenses.unshift(newExpense);
            state.totalExpense += action.payload.amount;
        },
        removeExpense: (state, action: PayloadAction<string>) => {
            const expense = state.expenses.find(
                (exp) => exp.id === action.payload
            );
            if (expense) {
                state.totalExpense -= expense.amount;
                state.expenses = state.expenses.filter(
                    (exp) => exp.id !== action.payload
                );
            }
        },
        updateExpense: (state, action: PayloadAction<Expense>) => {
            const index = state.expenses.findIndex(
                (exp) => exp.id === action.payload.id
            );
            if (index !== -1) {
                const oldAmount = state.expenses[index].amount;
                state.expenses[index] = action.payload;
                state.totalExpense =
                    state.totalExpense - oldAmount + action.payload.amount;
            }
        },
        setSelectedPeriod: (state, action: PayloadAction<string>) => {
            state.selectedPeriod = action.payload;
        },
        updateSpendingPeriods: (
            state,
            action: PayloadAction<SpendingPeriod[]>
        ) => {
            state.spendingPeriods = action.payload;
        },
    },
});

export const {
    addExpense,
    removeExpense,
    updateExpense,
    setSelectedPeriod,
    updateSpendingPeriods,
} = expenseSlice.actions;

export default expenseSlice.reducer;
