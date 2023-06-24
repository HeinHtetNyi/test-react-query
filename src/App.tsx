import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import AppRoutes from './routes/AppRoutes'
import './App.css'

const queryClient = new QueryClient({
  // global settings
  // defaultOptions: {
  //   queries: {
  //     retry: 3, // try 3 times after fail
  //     cacheTime: 300_000, // expire after 5mins
  //     staleTime: 10 * 1000, // stale after 10s
  //     refetchOnMount: false, 
  //     refetchOnReconnect: false,
  //     refetchOnWindowFocus: false,
  //   }
  // }
})

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
       <AppRoutes />
       <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  )
}

export default App
