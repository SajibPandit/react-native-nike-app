import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
// import products from "../data/products";
import { useNavigation } from "@react-navigation/native";
import { useSelector,useDispatch } from "react-redux";
import { productSlice } from "../store/ProductSlice";

const ProductsScreen = ({ navigation }) => {
  //   const navigation = useNavigation();

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 6,
  },
});

export default ProductsScreen;
