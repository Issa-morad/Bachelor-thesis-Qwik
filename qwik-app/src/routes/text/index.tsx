/* eslint-disable qwik/valid-lexical-scope */
import { Resource, component$, useResource$} from "@builder.io/qwik";

type dataType = {id: number, title: string, body: string } []    

export default component$(() => {
    const products = useResource$ <dataType>( async () => {
        const response = await fetch (`https://jsonplaceholder.typicode.com/posts`
        );
        const data = await response.json();
        return data
      })
    return (
        <>
        <table class="table table-striped">
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                </tr>
            </thead>
            <tbody>
                <Resource 
                    value={products}
                    onPending={() => "loding"}
                    onResolved={(data) => data.map((el, al) => {
                        return(
            
                            <tr key={al}>
                                <td>{el.id}</td>
                                <td>{el.title}</td>
                                <td>{el.body}</td>
                            </tr>  
            
                        )}
                    )}
                />
            </tbody>
        </table>
        </>
    )

})

