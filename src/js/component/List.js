import React from 'react';
import Item from './Item';
 
 
const List = ({list}) => {
   return (
       <div>
           {list.map(item => {
               return (
                   <Item item={item} />
               )
           })}
       </div>
   );
};
 
export default List;