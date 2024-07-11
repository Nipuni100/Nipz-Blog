import BlogList from './BlogList';
import useFetch from './usefetch';

const Home = () => {
    const{data :blogs, isPending, Error} = useFetch('http://localhost:7000/blogs');

    // We use hook to reactive value and change 
    return ( 
        <div className="home">
          {isPending && <div>Loading...</div>}
          {Error && <div>{Error}</div>}
          {blogs && <BlogList blogs={blogs} title ="All blogs !!!" />}
          
        </div>
     );
}
 
export default Home;