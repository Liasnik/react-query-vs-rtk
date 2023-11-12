import { QueryClient, useQueryClient } from '@tanstack/react-query'


const ExampleComponent = () => {
    const queryClient = useQueryClient()
    console.log(queryClient)
  
    return (
    <div>queryClient </div>
  )
} 

export default ExampleComponent