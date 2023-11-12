import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, fetchCats } from './redux/slices/catsSlice';
import { useEffect } from 'react';
import { useGetCatsFacts } from './hooks/useGetCatsFacts';
import { urlCats } from './api';
import Spinner from './spinner/Spinner';
import ExampleComponent from './components/ExampleComponent';
// import { useQuery } from '@tanstack/react-query';
// import { fetchData } from './api';

function App() {
 const count = useSelector((state) => state.catsReducer.value)
 const catsData = useSelector((state) => state.catsReducer.catsData)
 const dispatch = useDispatch()



 const {data, isLoading, error, refetch} = useGetCatsFacts(urlCats)
 
 const handleFetchWithReactQuery = () => {
  refetch()
}

 //const {data} = useQuery({ queryKey:'name', queryFn: fetchData})
 // получение и форматирование данніх (обработка какая-то) может происходить прямо здесь но это некрасиво и неправильно в больших промышленых проэктах
  // с большими данными обычно пишут:
        // const formattedData = formattingFunc(response) и т.

 

 function handleFetchCats() {
    dispatch(fetchCats());
  }

 useEffect(() => {
  dispatch(fetchCats())
 }, [dispatch])

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>
      decrement {count}
      </button>
      <button onClick={handleFetchCats}>
        Redux Toolkit
      </button>
      
      <button onClick={() => dispatch(increment())}>
        increment {count}
      </button>
      {/* <p>{catsData?.fact}</p>  */}
      {/* вместо вопроса можно поменять в initialState catsData: null на catsData: {fact: ''} или на catsData: {} хотябы да и '' вроде работает */}
      Facts with Redux Toolkit
      <p>{catsData.fact}</p> 
      <button onClick={handleFetchWithReactQuery}>
        React Query
      </button>
      {isLoading && <Spinner/>}
      {error && <h2 style={{color: 'yellow'}}>{error.message}</h2>}
      <h2>Facts with TanStack Query</h2>
      <p>{data}</p>
      <ExampleComponent/>
    </div>
  );
 }

export default App;
// https://catfact.ninja/fact