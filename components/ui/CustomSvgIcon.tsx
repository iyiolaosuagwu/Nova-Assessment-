import AddCategoryIcon from "@/icons/AddCategoryIcon";
import AddExpenseIcon from "@/icons/AddExpenseIcon";
import AnalyticsIcon from "@/icons/AnalyticsIcon";
import ArrowDownIcon from "@/icons/ArrowDownIcon";
import CameraIcon from "@/icons/CameraIcon";
import DateIcon from "@/icons/DateIcon";
import EntertainmentIcon from "@/icons/EntertainmentIcon";
import FamilyIcon from "@/icons/FamilyIcon";
import FoodIcon from "@/icons/FoodIcon";
import HealthIcon from "@/icons/HealthIcon";
import HomeIcon from "@/icons/HomeIcon";
import HousingIcon from "@/icons/HousingIcon";
import PlusIcon from "@/icons/PlusIcon";
import ShoppingIcon from "@/icons/ShoppingIcon";
import TransportIcon from "@/icons/TransportIcon";
import TravelIcon from "@/icons/TravelIcon";
import TrendDownIcon from "@/icons/TrendDownIcon";
import UserIcon from "@/icons/UserIcon";
import React from "react";

const ICONS = {
    analytics: AnalyticsIcon,
    home: HomeIcon,
    plus: PlusIcon,
    addExpense: AddExpenseIcon,
    addCategory: AddCategoryIcon,
    trendDown: TrendDownIcon,
    food: FoodIcon,
    housing: HousingIcon,
    shopping: ShoppingIcon,
    family: FamilyIcon,
    transport: TransportIcon,
    travel: TravelIcon,
    entertainment: EntertainmentIcon,
    health: HealthIcon,
    arrowDown: ArrowDownIcon,
    date: DateIcon,
    camera: CameraIcon,
    user: UserIcon,
} as const;

type IconName = keyof typeof ICONS;

type CustomSvgIconProps = {
    name: IconName;
} & Record<string, any>;

const CustomSvgIcon: React.FC<CustomSvgIconProps> = ({ name, ...props }) => {
    const IconComponent = ICONS[name];
    if (!IconComponent) return null;
    return <IconComponent {...props} />;
};

export default CustomSvgIcon;
