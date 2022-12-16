


function App() {

  let num = Math.floor(Math.random() *100);

  let num2 = 0; 
  
  
  const checkNum =()=>
  {
    if(num2 === num )
    {
      console.log('right')
    }
    else if (num2!== num && num2 < num)
    {
      console.log( 'Your num is small')
    }

    else if(num2!==num && num2>num)
    {
      console.log('your num is greater')
    }

  }


  const handleChange  =(event)=>
    {
      num2 = event.target.value;
    }
  return (
    <>

      <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
        <div className="bg-dark card border border-dark d-grid align-items-center justify-content-center vh-50 vw-50 backg shadow p-3 mb-5 bg-white rounded ">
              <div className="header">
              <h5>Guess the Number Between 1 to 100</h5>
              </div>
              <div className="d-flex justify-content-center m-3">
                <input
                className="h-70 w-25 "
                onChange={handleChange}
                >
                </input>
              </div>
          
              <div className=" d-flex">
                <button className="btn btn-success m-2 p-2 w-50" onClick={checkNum} > Play </button>
                <button className="btn btn-danger m-2 p-2 w-50">Reset</button>

              </div>


                            
            
        </div>

      </div>
      
      </>
  );
}

export default App;
