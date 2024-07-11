import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Nipz');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); /* prevent from refreshing*/
        const blog ={title, body, author} ;

        setIsPending(true);
    
        fetch('http://localhost:7000/blogs',{
            method: 'POST', /* what kind of fetch we are doing */
            headers: {'Content-Type': 'application/json'}, /* what kind of data we are sending */
            body: JSON.stringify(blog) /* we are sending data to be cvrted to json */
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })

        
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                    <input type="text"
                    required
                    value= {title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />

                <label>Blog body:</label>   
                <textarea 
                    required
                    value= {body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)} 
                >
                    <option value="Nipz">Nipz</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add blog</button>  }
                {isPending && <button disabled>Adding blog...</button>  }
            </form>
        </div>
    );
}

export default Create;