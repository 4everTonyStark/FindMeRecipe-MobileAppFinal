import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollContainer: {
    flex: 0,
    alignItems: "stretch",
    justifyContent: "flex-start",
    width: "100%",
  },
  gridContainer: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#b8ce9c",
    margin: 0,
    borderRadius: 20,
    paddingBottom: "4%",
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "gray",
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  textField: {
    height: 55,
    marginHorizontal: 25,
    paddingHorizontal: 12,
    backgroundColor: "#eee",
    borderRadius: 14,
    borderColor: "#b9b9b9",
    borderWidth: 8,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  h1: {
    fontSize: 35,
    fontWeight: "bold",
    paddingLeft: 25,
    paddingTop: 15,
    color: "#246835",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "gray",
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
  h2: {
    fontSize: 27,
    fontWeight: "bold",
    paddingLeft: 17,
    color: "#246835",
    marginBottom: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "gray",
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
  h3: {
    fontSize: 23,
    color: "#246835",
    fontWeight: "bold",
  },
  h4: {
    fontSize: 19,
    color: "#246835",
    fontWeight: "bold",
  },
  h5: {
    fontSize: 17,
    color: "white",
    fontWeight: "500",
  },
});
