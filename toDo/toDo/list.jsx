const list = () => {



    const names =[
        'zayne','khunjuliwe',
        'zach'
    ]
    return ( 
        
    <>
    <ul>
        {
            names.map((name)=>(
                <li>{name}  </li>
            ))
        }
        
    </ul>
    </>);
}
 
export default list;