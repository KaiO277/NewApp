import { FlatList, View, Text } from "react-native";

const data = [
    {id: '1', title: "Vân"},
    {id: '2', title: "Bú"},
    {id: '3', title: "Đ*t"},
    {id: '4', title: "Lêu "},
    {id: '5', title: "Lêu"},
    {id: '6', title: "Lêu"},
]

const renderItem = ({item}) => (
    <View style={{padding:20}}>
        <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
    </View>
)

const DetailList = () => {
    return (
        <FlatList 
            data = {data}
            renderItem={renderItem}
        />
    )
}

export default DetailList;