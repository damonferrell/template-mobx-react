import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { BaseButton } from 'components';
import { homeViewModel } from './home-view-model';

const Home = observer(() => {
   useEffect(() => {
      homeViewModel.getTodo();
   }, []);

   const getTodo = async () => {
      await homeViewModel.getTodo();
   };

   return (
      <div>
         {homeViewModel.isLoading ? (
            <p>Loading...</p>
         ) : (
            <>
               <BaseButton
                  bgColor="red"
                  foreGround="white"
                  padding="10px"
                  border="none"
                  onClick={getTodo}
               >
                  GET TODO
               </BaseButton>
               {homeViewModel.todo ? (
                  <div>
                     <>
                        <p>ID: {homeViewModel.todo.id}</p>
                        <p>Title: {homeViewModel.todo.title}</p>
                     </>
                  </div>
               ) : (
                  <p>Empty</p>
               )}
            </>
         )}
      </div>
   );
});

export default Home;
