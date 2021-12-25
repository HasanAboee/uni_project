export default function AddHandler(FigureData){
    return fetch('https://uni-project-4aa87-default-rtdb.firebaseio.com/figure.json',{
        method: 'POSt',
        body: JSON.stringify(FigureData),
        headers: {
            'content-type':'application/json'
        }
    })
}
