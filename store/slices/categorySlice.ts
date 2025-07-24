import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Category {
    id: string;
    name: string;
    icon: string;
    color: string;
    totalSpent: number;
    transactionCount: number;
}

interface CategoryState {
    categories: Category[];
}

const initialState: CategoryState = {
    categories: [
        {
            id: "1",
            name: "Food & Drinks",
            icon: "food",
            color: "#E74C3C",
            totalSpent: 15000,
            transactionCount: 1,
        },
        {
            id: "2",
            name: "Housing",
            icon: "housing",
            color: "#F39C12",
            totalSpent: 12000,
            transactionCount: 1,
        },
        {
            id: "3",
            name: "Shopping",
            icon: "shopping",
            color: "#E67E22",
            totalSpent: 25000,
            transactionCount: 1,
        },
        {
            id: "4",
            name: "Family",
            icon: "family",
            color: "#27AE60",
            totalSpent: 10000,
            transactionCount: 1,
        },
        {
            id: "5",
            name: "Transportation",
            icon: "transport",
            color: "#3498DB",
            totalSpent: 36000,
            transactionCount: 1,
        },
        {
            id: "6",
            name: "Travel & Vacation",
            icon: "travel",
            color: "#9B59B6",
            totalSpent: 50000,
            transactionCount: 1,
        },
        {
            id: "7",
            name: "Entertainment",
            icon: "entertainment",
            color: "#27AE60",
            totalSpent: 10000,
            transactionCount: 1,
        },
    ],
};

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addCategory: (
            state,
            action: PayloadAction<
                Omit<Category, "id" | "totalSpent" | "transactionCount">
            >
        ) => {
            const newCategory: Category = {
                ...action.payload,
                id: Date.now().toString(),
                totalSpent: 0,
                transactionCount: 0,
            };
            state.categories.push(newCategory);
        },
        removeCategory: (state, action: PayloadAction<string>) => {
            state.categories = state.categories.filter(
                (cat) => cat.id !== action.payload
            );
        },
        updateCategory: (state, action: PayloadAction<Category>) => {
            const index = state.categories.findIndex(
                (cat) => cat.id === action.payload.id
            );
            if (index !== -1) {
                state.categories[index] = action.payload;
            }
        },
        updateCategorySpending: (
            state,
            action: PayloadAction<{
                categoryName: string;
                amount: number;
                increment: boolean;
            }>
        ) => {
            const category = state.categories.find(
                (cat) => cat.name === action.payload.categoryName
            );
            if (category) {
                if (action.payload.increment) {
                    category.totalSpent += action.payload.amount;
                    category.transactionCount += 1;
                } else {
                    category.totalSpent -= action.payload.amount;
                    category.transactionCount = Math.max(
                        0,
                        category.transactionCount - 1
                    );
                }
            }
        },
    },
});

export const {
    addCategory,
    removeCategory,
    updateCategory,
    updateCategorySpending,
} = categorySlice.actions;

export default categorySlice.reducer;
