import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useState } from "react";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { categories } from "@/constants/categories";
import { useRouter } from "expo-router";
// @ts-ignore
import DatePicker from "react-native-modern-datepicker";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const guestsGropus = [
  {
    name: "Кучета",
    text: "Всички породи",
    count: 0,
  },
  {
    name: "Котета",
    text: "Всички породи",
    count: 0,
  },
  {
    name: "Други",
    text: "Зайчета, птици, рибки, гризачи",
    count: 0,
  },
];

const Page = () => {
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);

  const [groups, setGroups] = useState(guestsGropus);
  const router = useRouter();
  const today = new Date().toISOString().substring(0, 10);

  const onClearAll = () => {
    setSelectedPlace(0);
    setOpenCard(0);
  };

  return (
    <BlurView intensity={70} style={styles.container} tint="light">
      <View style={styles.card}>
        {openCard != 0 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(0)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Къде</Text>
            <Text style={styles.previewdData}>Избери локация</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 0 && <Text style={styles.cardHeader}>Търсиш гледач?</Text>}
        {openCard == 0 && (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.cardBody}
          >
            <View style={styles.searchSection}>
              <Ionicons
                style={styles.searchIcon}
                name="search"
                size={20}
                color="#000"
              />
              <TextInput
                style={styles.inputField}
                placeholder="Избери локация..."
                placeholderTextColor={Colors.grey}
              />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.placesContainer}
            >
              {categories.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setSelectedPlace(index)}
                  key={index}
                >
                  {item.icon}
                  <Text style={{ fontFamily: "mon", paddingTop: 6 }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Animated.View>
        )}
      </View>

      <View style={styles.card}>
        {openCard != 1 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(1)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Кога</Text>
            <Text style={styles.previewdData}>Избери дати</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 1 && (
          <Text style={styles.cardHeader}>За кога ти е необходим гледач?</Text>
        )}

        {openCard == 1 && (
          <Animated.View style={styles.cardBody}>
            <DatePicker
              options={{
                defaultFont: "mon",
                headerFont: "mon-sb",
                mainColor: Colors.primary,
                borderColor: "transparent",
              }}
              current={today}
              selected={today}
              mode={"calendar"}
            />
          </Animated.View>
        )}
      </View>

      <View style={styles.card}>
        {openCard != 2 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(2)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Домашни любимци</Text>
            <Text style={styles.previewdData}>Избери брои</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 2 && (
          <Text style={styles.cardHeader}>Колко домашни любимци?</Text>
        )}

        {openCard == 2 && (
          <Animated.View style={styles.cardBody}>
            {groups.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.guestItem,
                  index + 1 < guestsGropus.length ? styles.itemBorder : null,
                ]}
              >
                <View>
                  <Text style={{ fontFamily: "mon-sb", fontSize: 14 }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "mon",
                      fontSize: 14,
                      color: Colors.grey,
                    }}
                  >
                    {item.text}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      const newGroups = [...groups];
                      newGroups[index].count =
                        newGroups[index].count > 0
                          ? newGroups[index].count - 1
                          : 0;

                      setGroups(newGroups);
                    }}
                  >
                    <Ionicons
                      name="remove-circle-outline"
                      size={26}
                      color={groups[index].count > 0 ? Colors.grey : "#cdcdcd"}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "mon",
                      fontSize: 16,
                      minWidth: 18,
                      textAlign: "center",
                    }}
                  >
                    {item.count}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      const newGroups = [...groups];
                      newGroups[index].count++;
                      setGroups(newGroups);
                    }}
                  >
                    <Ionicons
                      name="add-circle-outline"
                      size={26}
                      color={Colors.grey}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </Animated.View>
        )}
      </View>

      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ height: "100%", justifyContent: "center" }}
            onPress={onClearAll}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "mon-sb",
                textDecorationLine: "underline",
              }}
            >
              Изчисти филтри
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
            onPress={() => router.back()}
          >
            <Ionicons
              name="search-outline"
              size={24}
              style={defaultStyles.btnIcon}
              color={"#fff"}
            />
            <Text style={defaultStyles.btnText}>Потърси</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    gap: 20,
  },
  cardHeader: {
    fontFamily: "mon-b",
    fontSize: 24,
    padding: 20,
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  searchSection: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    marginBottom: 16,
  },
  searchIcon: {
    padding: 10,
  },
  inputField: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  placesContainer: {
    flexDirection: "row",
    gap: 25,
  },
  place: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  placeSelected: {
    borderColor: Colors.grey,
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  previewText: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.grey,
  },
  previewdData: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.dark,
  },
  guestItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.grey,
  },
});
export default Page;