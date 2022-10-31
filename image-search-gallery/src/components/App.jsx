import React, {useState, useEffect} from 'react';
import Search from './Search';


const App = () => {
     const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://api.unsplash.com/search/photos?page=1&per_page=10&query=dog&client_id=2gyP-B-dFKjR--xGDsJZxMFIgoExPBHBvXFxY8NeeWU')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setPosts(data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        //... consume here
        
       <div className=''>
         
         

             <div className='post-grid-container'>
            {posts.map((post) => {
                return (
                    <div className='' key={post.id}>
                        <img className='post-cards-img-grid' src={post.urls.small} alt={post.alt_description}></img>
                    
                    </div>
                )
            })}
        </div>


       </div>
        
       
    );

};


export default App;