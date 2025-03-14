import { Item } from "@/types/types"

export function ItemCard({item}: {item: Item} ){
    <div key={item.id}>
        <img src={item.imageUrl} alt={item.name} width={200} height={200}/>
        <p>{item.name}</p>
        <p>{item.startingPrice}</p>
    </div>
}