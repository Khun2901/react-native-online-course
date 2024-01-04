import * as React from 'react'
import { View, Text, SectionList, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        elevation: 20
    },
    itemContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#333333',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 20,
        fontWeight: '500',
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center'
    },
    headerContainer: {
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#333333',
    },
    sectionHeaderText: {
        color: '#333333',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    sectionHeaderContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#F4CE14',
    },
    itemSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: 'EDEFEE'
    }
})


const mockMenuList = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];

const Item = ({item}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.price}</Text>
        </View>
    )
}
    

export default function SectionMenuList() {

    const renderItem = ({item}) => (<Item item={item}/>)

    const renderSectionHeader = ({section: {title}}) => (
        <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}> {title} </Text>
        </View>
    )

    const separator = () => (<View style={styles.itemSeparator}/>)

    return (
        <View style={styles.container}>
            <SectionList 
                sections={mockMenuList}
                renderItem={renderItem}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={separator}
            />
        </View>
    )
    
}