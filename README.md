# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Store Implementation & Data Distribution

This app uses **Redux Toolkit** for state management, with data persisted using `redux-persist` and `@react-native-async-storage/async-storage`.

### Store Structure

-   **Slices:**
    -   `expenses`: Manages all expense transactions, spending periods, and total expense calculations.
    -   `categories`: Manages expense categories, their icons, colors, and spending stats.
-   **Persistence:**
    -   The store is persisted to device storage, so your data remains after app restarts.
-   **Selectors:**
    -   Analytics and UI components use selectors (in `store/slices/analyticsSlice.ts`) to efficiently compute derived data like:
        -   Pie chart data for category spending
        -   Top categories
        -   Recent transactions
        -   Total and average expenses

### Data Flow

-   **Adding/Removing/Updating Expenses:**
    -   Use the `addExpense`, `removeExpense`, and `updateExpense` actions from the `expenses` slice.
    -   When an expense is added, the total and category stats are updated automatically.
-   **Category Management:**
    -   Categories can be added, removed, or updated via the `categories` slice.
    -   Each category tracks its own total spent and transaction count.
-   **Analytics:**
    -   The `analyticsSlice` provides selectors for pie chart data, top categories, recent transactions, and spending stats.
    -   These selectors are used in UI components for analytics and dashboard features.

### Example Usage

-   To access recent transactions in a component:

    ```ts
    import { useAppSelector } from "@/store/hooks";
    import { selectRecentTransactions } from "@/store/slices/analyticsSlice";
    const recentTransactions = useAppSelector(selectRecentTransactions);
    ```

-   To dispatch an action:

    ```ts
    import { useAppDispatch } from "@/store/hooks";
    import { addExpense } from "@/store/slices/expenseSlice";
    const dispatch = useAppDispatch();
    dispatch(addExpense({ ... }));
    ```

---

## Get started

1. Install dependencies

    ```bash
    npm install
    ```

2. Start the app

    ```bash
    npx expo start
    ```

In the output, you'll find options to open the app in a

-   [development build](https://docs.expo.dev/develop/development-builds/introduction/)
-   [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
-   [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
-   [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

-   [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
-   [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

-   [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
-   [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
