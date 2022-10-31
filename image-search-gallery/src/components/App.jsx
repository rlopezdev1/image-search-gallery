import React, {useState, useEffect} from 'react';
import Search from './Search';
import Header from './Header';


const query = "dog";


const App = () => {
     const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?page=1&per_page=10&query=${query}&client_id=${process.env.REACT_APP_API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                
                setPosts(data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        //... consume here
        
       <div className=''>
         
         <Header />
        <Search />
             <div className='post-grid-container'>
            {posts.map((post) => {
                return (
                    <div className='' key={post.id}>
                        <img className='post-cards-img-grid' src={post.urls.regular} alt={post.alt_description}></img>
                    
                    </div>
                )
            })}
        </div>


       </div>
        
       
    );

};


export default App;