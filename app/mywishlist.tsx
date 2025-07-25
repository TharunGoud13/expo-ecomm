import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { useTheme } from '../theme/ThemeProvider';
import { categories, myWishlist } from '../data';
import HeaderWithSearch from '../components/HeaderWithSearch';
import WishlistCard from '@/components/WishlistCard';
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';

// Define the type for the component props
interface MyWishlistProps {
  navigation: NavigationProp<any>;
}

const MyWishlist: React.FC<MyWishlistProps> = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { dark, colors } = useTheme();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["0"]);

  // Filter products based on selected categories
  const filteredProducts = myWishlist.filter(product =>
    selectedCategories.includes("0") || selectedCategories.includes(product.categoryId)
  );

  // Render category item
  const renderCategoryItem = ({ item }: { item: { id: string; name: string } }) => (
    <TouchableOpacity
      style={{
        backgroundColor: selectedCategories.includes(item.id) ? (dark ? COLORS.dark3 : COLORS.primary) : "transparent",
        padding: 10,
        marginVertical: 5,
        borderColor: dark ? COLORS.dark3 : COLORS.primary,
        borderWidth: 1.3,
        borderRadius: 24,
        marginRight: 12,
      }}
      onPress={() => toggleCategory(item.id)}
    >
      <Text style={{
        color: selectedCategories.includes(item.id) ? COLORS.white : (dark ? COLORS.white : COLORS.primary)
      }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    const updatedCategories = [...selectedCategories];
    const index = updatedCategories.indexOf(categoryId);

    if (index === -1) {
      updatedCategories.push(categoryId);
    } else {
      updatedCategories.splice(index, 1);
    }

    setSelectedCategories(updatedCategories);
  };

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <HeaderWithSearch
          title="My Wishlist"
          icon={icons.search}
          onPress={() => navigation.navigate("Search")}
        />
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <FlatList
            data={categories}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={renderCategoryItem}
          />
          <View style={{
            backgroundColor: dark ? COLORS.dark1 : COLORS.white,
            marginVertical: 16
          }}>
            <FlatList
              data={filteredProducts}
              keyExtractor={item => item.id}
              numColumns={2}
              columnWrapperStyle={{ gap: 16 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <WishlistCard
                  name={item.name}
                  image={item.image}
                  numSolds={item.numSolds}
                  price={item.price}
                  rating={item.rating}
                  onPress={() => navigation.navigate(item.navigate)}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16
  },
  scrollView: {
    marginVertical: 2
  }
});

export default MyWishlist;
