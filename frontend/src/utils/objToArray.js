export default function ObjectsToArray(obj) {
    const objArray = [];
    Object.values(obj).forEach(value => objArray.push(value));
    return objArray;
}