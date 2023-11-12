import { useQuery } from "@tanstack/react-query"
import { fetchData } from "../api"

export const useGetCatsFacts = (url, id) => {
    const {data, isLoading, error, refetch} = useQuery({
         queryKey:['catsFacts'],
          queryFn: () => fetchData(url), 
          initialData: {},
          //placeholderData: {},
          // enabled: id > 10,
          cacheTime: 5000,     
        })
        console.log( 'useGet...', data?.data?.fact)

    // получение и форматирование данніх (обработка какая-то) делается в кастомном хуке это красиво в сравнении с обработкай прямо в компоненте.
  // с большими данными обычно пишут:
        // const formattedData = formattingFunc(response) и т.
  return { data: data.data?.fact || '', isLoading, error,refetch}
}