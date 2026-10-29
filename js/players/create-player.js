export function createPlayer(values, id) {
    return {
        id: id,
        name: values.name,
        number: Number(values.number),
        role: values.role,
        age: values.age,
        injured: values.injured,
        captain: values.captain,
        position: null
    };
}
