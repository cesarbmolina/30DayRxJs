var countJs = 0;
var rate = 3000;
var lastClick = Date.now() - rate;
var button = document.getElementById('JsBurron');
button.addEventListener('click', (event)=> {
  if(Date.now() - lastClick >= rate ) {
    countJs += event.clientX;
    console.log(`Js Click ${++countJs} times `);
    lastClick = Date.now();
  }
});

// obtener el boton
var button = document.getElementById('RxJsButton');
Rx.Observable.fromEvent(button, 'click')
.throttleTime(3000)
.map(event => event.clientX)
.scan((count, clientX) => count + clientX, 0)
.subscribe(
  count => console.log(`RxJs clicked ${count} times`)
);