import MyComponent from "./fetchSets"

// const Sets = ({ people }) => {
const Sets = (item) => {    
    return (
        <div>               
            <ul key={item.number}>
                <li>{item.name}</li>
                <li>{item.number}</li>
                <li>{item.theme}</li>
            </ul>                                  
        </div>
    )
}

// {people.map((individualSets) => {
//     const { name, number, theme } = individualSets;

export default Sets