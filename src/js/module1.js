// Для экспорта используется слово export
export const config = {
    apiUrl : 'demo.com',
}

export function myFunction() {
    console.log('module1, myFunction')
}

// Можно перечислить все экспортируемые объекты в одной строке:
// Так же можно экспортировать с заданными именами при помощи as
export {config as conf, myFunction as foo};