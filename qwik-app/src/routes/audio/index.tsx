import {component$} from '@builder.io/qwik';
  
  export default component$(() => {
   
    return (
      <>
        <h3 class="text-center">Audio</h3>
        <div>
            <audio controls>
                <source  width="220" height="140" src="https://cdn.builder.io/o/assets%2F5b8073f890b043be81574f96cfd1250b%2Fafe011812da146a5b2263196cb25f263?alt=media&token=c017cd87-0598-4af2-8afd-e9b5a3fba078&apiKey=5b8073f890b043be81574f96cfd1250b"
                type="Audio/mp3" />
            </audio>
            <p>+</p>
            <audio controls >
                <source width="220" height="140" src="https://cdn.builder.io/o/assets%2F5b8073f890b043be81574f96cfd1250b%2Fafe011812da146a5b2263196cb25f263?alt=media&token=c017cd87-0598-4af2-8afd-e9b5a3fba078&apiKey=5b8073f890b043be81574f96cfd1250b"
                type="Audio/mp3" />
            </audio>
            <p>+</p>
            <audio controls >
                <source width="220" height="140" src="https://cdn.builder.io/o/assets%2F5b8073f890b043be81574f96cfd1250b%2Fafe011812da146a5b2263196cb25f263?alt=media&token=c017cd87-0598-4af2-8afd-e9b5a3fba078&apiKey=5b8073f890b043be81574f96cfd1250b"
                type="Audio/mp3" />
            </audio>

        </div>
      </>
    );
  });