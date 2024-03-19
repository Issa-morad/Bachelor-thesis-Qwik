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
    <Link href="/image-loader/10">Image 10</Link> |
    <Link href="/image-loader/20">Image 20</Link> |
    <Link href="/image-loader/50">Image 50</Link> |
    <Link href="/image-loader/80">Image 80</Link> |
    <Link href="/video-loader/10">Video 10</Link> |
    <Link href="/video-loader/20">Video 20</Link> |
    <Link href="/video-loader/50">Video 50</Link> |
    <Link href="/video-loader/80">Video 80</Link> |
</nav>
      </>
    );
  });

