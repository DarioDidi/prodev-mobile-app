import { View } from "react-native";
import PropertyListingCard from "./PropertyListingCard";
import { PropertyListing } from "../../interfaces";

const PropertyListing = ({ listings }: PropertyListing) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings?.map((listing, key) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListing;
