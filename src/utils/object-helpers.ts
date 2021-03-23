import {UserType} from "../redux/entities";

type ItemsT = UserType[];
type NewObjPropsT = {
    followed: boolean
}


export const updateobjectInArr = (items: ItemsT, itemId: number, objPropName: string, newObjProps: NewObjPropsT) => {
    return items.map((u) => (u["id"] === itemId ? { ...u, ...newObjProps } : u))
}