import { View } from "react-native";
import React, { useMemo, useState } from "react";
import ListingsMap from "@/components/ListingsMap";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";

const Page = () => {
  const getoItems = useMemo(() => [], []);
  const [category, setCategory] = useState<string>("");

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <ListingsMap listings={getoItems} />
    </View>
  );
};

export default Page;
