/* eslint-disable qwik/no-use-visible-task */
/* eslint-disable qwik/valid-lexical-scope */
import { Resource, component$, useResource$} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Image } from '@unpic/qwik';


type dataType = {message: string, status: string }

export default component$(() => {

  //{"message":"https:\/\/images.dog.ceo\/breeds\/terrier-norfolk\/n02094114_1696.jpg","status":"success"}
  const products = useResource$ <dataType>( async () => {
    const response = await fetch (`https://dog.ceo/api/breeds/image/random`
    );
    const data = await response.json();
    return data
  })
  return (
    <>
          <h1>Welcome to Hundregister!</h1>
          <h3>Det här är Hundregister app du kan hitta alla information om hundar</h3>
          <Resource 
            value={products}
            onPending={() => "loding"}
            onResolved={(data) => <Image
                src= {data.message}
                layout="constrained"
                width={400}
                height={300}
                alt="A lovely hund"
              /> }
            onRejected={() => "error"}
          />
          <footer> <h4>
          Hundregister/Jordbruksverket ❤ </h4></footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hundregister/Jordbruksverket",
  meta: [
    {
      name: "description",
      content: "This is Hundregister app that you kan hitta alla information om hundar",
    },
  ],
};
