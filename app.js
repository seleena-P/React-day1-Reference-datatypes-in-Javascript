function Result(){
    let myobject={
        name:"Dhoni"
    };
    let newObject=myobject;
    myobject.name="Mahendra Singh Dhoni";
    let myarray=['a','e','i','o','u']
    let vowelarray=myarray;
    myarray.push("u")
    console.log(myarray)
    const ab=()=>{alert("Check the console output!")}
    return <div><button onClick={ab}>click</button></div>
}
ReactDOM.render(<Result/>,document.getElementById("s"))
