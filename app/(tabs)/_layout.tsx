import { useTheme } from "@/theme/ThemeProvider";
import { Tabs } from "expo-router";
import { Image, Platform, Text, View } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

const TabLayout = () => {
  const { dark } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: Platform.OS !== 'ios',
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 90 : 60,
          backgroundColor: dark ? COLORS.dark1 : COLORS.white,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
                width: SIZES.width / 4
              }}>
                <Image
                  source={focused ? icons.home : icons.home2Outline}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                  }}
                />
                <Text style={{
                  ...FONTS.body4,
                  color: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                }}>Home</Text>
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
                width: SIZES.width / 4
              }}>
                <Image
                  source={focused ? icons.bag3 : icons.bag3Outline}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                  }}
                />
                <Text style={{
                  ...FONTS.body4,
                  color: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                }}>Cart</Text>
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
                width: SIZES.width / 4
              }}>
                <Image
                  source={focused ? icons.cart : icons.cartOutline}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                  }}
                />
                <Text style={{
                  ...FONTS.body4,
                  color: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                }}>Orders</Text>
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
                width: SIZES.width / 4
              }}>
                <Image
                  source={focused ? icons.wallet2 : icons.wallet2Outline}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                  }}
                />
                <Text style={{
                  ...FONTS.body4,
                  color: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                }}>Wallet</Text>
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
                width: SIZES.width / 4
              }}>
                <Image
                  source={focused ? icons.user : icons.userOutline}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                  }}
                />
                <Text style={{
                  ...FONTS.body4,
                  color: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                }}>Profile</Text>
              </View>
            )
          },
        }}
      />
    </Tabs>
  )
}

export default TabLayout