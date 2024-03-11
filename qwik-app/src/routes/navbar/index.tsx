import {component$} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
  
  export default component$(() => {
   
    return (
        <>
      <h1>This is the nav bar</h1>
<nav>

    <Link href="/">Start</Link> |
    <Link href="/text">Text</Link> |
    <Link href="/audio">Audio</Link> |
</nav>
      </>
    );
  });

