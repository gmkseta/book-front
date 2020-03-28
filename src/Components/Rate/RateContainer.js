import React, { useState } from "react";
import { Page, List, Block, BlockTitle, ListItem, f7 } from 'framework7-react';
import RatePresenter from "./RatePresenter";
import Loader from "../Loader";
import { useLazyQuery } from "@apollo/react-hooks";
import {
  ALL_BOOKS
} from "./RateQueries";

export default ( { categoryId }) => {
  // const [infiState, setInfiState] = useState(true);
  // const [preloader, setPreloader] = useState(true);
  // const [items, setItems] = useState([])
  // const [ loadBooks, { loading, error, data }] = useLazyQuery(ALL_BOOKS, {
  //   variables: {
  //     categoryId: categoryId,
  //     afterId: null
  //   }
  // })

  // const loadMore = () => {
  //   if (!infiState) return;
    
  //   setInfiState(false);

  //   setTimeout(() => {
  //     if (items.length >= 200) {
  //       setPreloader(false);
  //       return;
  //     }
  //     const itemsLength = items.length;
  //     let newItems = [];
  //     for (let i = 1; i <= 20; i += 1) {
  //       newItems.push(itemsLength+i)
  //     }
  //     setItems(items.push(newItems));
  //     setInfiState(true);
  //   }, 500)
  // };

  // loadBooks();

  // return (
  //     <Page className="page-rating" infinite onInfinite={loadMore} infiniteDistance={50} infinitePreloader={preloader} >
  //         <BlockTitle medium className="searchbar-found">Components</BlockTitle>
  //         <Block>
  //         <List medial-list className="rate-list">
  //           {loading && <Loader/>}
  //           {!loading &&
  //             items &&
  //             items.map(book => (
  //               <RatePresenter author={book.author} title={book.title} id={book.id} key={book.id}/>
  //             ))
  //           }
  //         </List>
  //       </Block>
  //     </Page>
  //   )

  return (<Page></Page>)
};
    


